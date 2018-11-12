import "./wordsearch.css"

class Chronometer {
    elapsed: number;
    timer: number;

    constructor() {
        this.elapsed = 0;
        this.timer = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.elapsed = this.elapsed + 1;
    }

    getElapsed() {
        return this.elapsed;
    }

}

function wordsToUpperCase(words: Array<string>): Array<string> {
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }
    return words;
}

interface InitConfigObject {
    grid: string[][]
    words: string[]
    onFindWord: Function
    parentId: string
}

interface MatrixItem {
    letter: string
    row: number
    col: number
}

class WordSearch {
    grid: string[][];
    words: string[];
    onFindWord: Function;
    parent: HTMLElement;
    rowSize: number;
    colSize: number;
    timeToFind: number[];
    timer: Chronometer;
    matrix: MatrixItem[][];
    selectFrom: MatrixItem;
    selected: MatrixItem[];

    constructor(o: InitConfigObject) {
        this.grid = o.grid ? o.grid : [
            ['.', '.', '.', '.', '.', '.'],
            ['.', 'T', 'E', 'S', 'T', '.'],
            ['.', '.', '.', '.', '.', '.']
        ];
        this.rowSize = this.grid.length;
        this.colSize = this.grid[0].length;

        this.words = o.hasOwnProperty("words") ? wordsToUpperCase(o.words) : ["TEST"];

        // @ts-ignore
        this.onFindWord = o.hasOwnProperty("onFindWord") ? o.onFindWord.bind(this) : () => null;

        this.parent = o.parentId ? document.getElementById(o.parentId) : document.getElementById("ws-parent");
        this.parent.setAttribute("class", "wrap");

        this.timeToFind = new Array(this.words.length).fill(-1);
        this.matrix = this.initMatrix();
        this.timer = new Chronometer();
        this.drawGameArea();
        this.displayScore();
    }

    drawGameArea() {
        var scoreArea = document.createElement("h2");
        var scoreLabel = document.createElement("div");
        scoreLabel.id = "ws-score";
        scoreArea.appendChild(scoreLabel);
        this.parent.appendChild(scoreArea);

        var gridArea = document.createElement("section");
        gridArea.setAttribute("class", "ws-area");
        this.drawMatrix(gridArea);
        this.parent.appendChild(gridArea);

        var wordsArea = document.createElement("ul");
        wordsArea.setAttribute("class", "ws-words");
        this.drawWordList(wordsArea);
        this.parent.appendChild(wordsArea);
    }

    getScore(): number {
        return this.timeToFind.map(function (i: number): number {
            return (i > 0 ? 1 : 0)
        }).reduce(function (a: number, b: number): number {
            return a + b
        });
    }

    getRemaining(): number {
        return this.timeToFind.map(function (i: number): number {
            return (i > 0 ? 0 : 1)
        }).reduce(function (a: number, b: number): number {
            return a + b
        });
    }

    getTiming(): Array<number> {
        return this.timeToFind.slice();
    }

    displayScore(): void {
        this.parent.querySelector("#ws-score").innerHTML = "Found " + this.getScore() + " out of " + this.words.length + " words so far.";
    }

    initMatrix(): MatrixItem[][] {
        let matrix: MatrixItem[][] = [];
        for (var row = 0; row < this.rowSize; row++) {
            for (var col = 0; col < this.colSize; col++) {
                var item: MatrixItem = {
                    letter: this.grid[row][col], // Default value
                    row: row,
                    col: col
                };
                if (!matrix[row]) {
                    matrix[row] = [];
                }
                matrix[row][col] = item;
            }
        }
        return matrix;
    }

    drawWordList(target: HTMLElement): void {
        var words = this.words;
        for (var i = 0; i < words.length; i++) {
            var liEl = document.createElement('li');
            liEl.id = words[i];
            liEl.setAttribute('class', 'ws-word');
            liEl.setAttribute("text-decoration", "none");
            liEl.innerHTML = words[i];
            target.appendChild(liEl);
        }
    }

    getItem(row: number, col: number): MatrixItem | undefined {
        return (this.matrix[row] ? this.matrix[row][col] : undefined);
    }

    getItems(rowFrom: number, colFrom: number, rowTo: number, colTo: number): Array<MatrixItem> {
        var items = [];

        if (rowFrom === rowTo || colFrom === colTo || Math.abs(rowTo - rowFrom) === Math.abs(colTo - colFrom)) {
            var shiftY = (rowFrom === rowTo) ? 0 : (rowTo > rowFrom) ? 1 : -1,
                shiftX = (colFrom === colTo) ? 0 : (colTo > colFrom) ? 1 : -1,
                row = rowFrom,
                col = colFrom;
            items.push(this.getItem(row, col));
            do {
                row += shiftY;
                col += shiftX;
                items.push(this.getItem(row, col));
            } while (row !== rowTo || col !== colTo);
        }
        return items;
    }

    drawMatrix(target: HTMLElement): void {
        var rowcount = this.rowSize;
        var columncount = this.colSize;
        for (var row = 0; row < rowcount; row++) {
            // New row
            var divEl = document.createElement('div');
            divEl.setAttribute('class', 'ws-row');
            target.appendChild(divEl);
            for (var col = 0; col < columncount; col++) {
                var item = this.matrix[row][col];
                var cvEl = document.createElement('canvas');
                cvEl.setAttribute('class', 'ws-col');
                cvEl.setAttribute('width', "25");
                cvEl.setAttribute('height', "25");

                // Fill text in middle center
                var x = cvEl.width / 2,
                    y = cvEl.height / 2;

                var ctx = cvEl.getContext('2d');
                ctx.font = '400 18px Calibri';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#333'; // Text color
                ctx.fillText(item.letter, x, y);

                // Add event listeners
                cvEl.addEventListener('mousedown', this.handleMousedown(item));
                cvEl.addEventListener('mouseover', this.handleMouseover(item));
                cvEl.addEventListener('mouseup', this.handleMouseup());
                divEl.appendChild(cvEl);
            }
        }
    }

    handleMouseover(item: MatrixItem): EventListener {
        var that = this;
        return function (): void {
            if (that.selectFrom) {
                that.selected = that.getItems(that.selectFrom.row, that.selectFrom.col, item.row, item.col);
                that.clearHighlight();
                for (var i = 0; i < that.selected.length; i++) {
                    var current = that.selected[i],
                        row = current.row + 1,
                        col = current.col + 1,
                        el = that.parent.querySelector('.ws-row:nth-child(' + row + ') .ws-col:nth-child(' + col + ')');
                    el.className += ' ws-selected';
                }
            }
        }
    }

    handleMouseup(): EventListener {
        var that = this;
        return function (): void {
            that.selectFrom = null;
            that.clearHighlight();
            that.validateSelection(that.selected);
            that.selected = [];
        }
    }

    handleMousedown(item: MatrixItem): EventListener {
        var that = this;
        return function (): void {
            that.selectFrom = item;
        }
    }

    clearHighlight(): void {
        var selectedEls = this.parent.querySelectorAll('.ws-selected');
        for (var i = 0; i < selectedEls.length; i++) {
            selectedEls[i].classList.remove('ws-selected');
        }
    }


    markAsFound(selected: Array<MatrixItem>): void {
        for (var i = 0; i < selected.length; i++) {
            var row = selected[i].row + 1,
                col = selected[i].col + 1,
                el = this.parent.querySelector('.ws-row:nth-child(' + row + ') .ws-col:nth-child(' + col + ')');
            el.classList.add('ws-found');
        }
        this.displayScore();
        this.onFindWord();
    }

    validateSelection(selected: Array<MatrixItem>): void {
        var wordSelected = '';
        for (var i = 0; i < selected.length; i++) {
            wordSelected += selected[i].letter;
        }
        var wordSelectedR = wordSelected.split('').reverse().join('');
        var indexOfWord = this.words.indexOf(wordSelected);
        var indexOfWordR = this.words.indexOf(wordSelectedR);

        if (indexOfWord > -1) {
            if (this.timeToFind[indexOfWord] === -1) {
                this.timeToFind[indexOfWord] = this.timer.getElapsed();
                let ele = this.parent.querySelector('#' + wordSelected) as HTMLElement;
                ele.setAttribute("class", "ws-word-found");
                this.markAsFound(selected);
            }
        }

        if (indexOfWordR > -1) {
            if (this.timeToFind[indexOfWordR] === -1) {
                this.timeToFind[indexOfWordR] = this.timer.getElapsed();
                let ele = this.parent.querySelector('#' + wordSelectedR) as HTMLElement;
                ele.setAttribute("class", "ws-word-found");
                this.markAsFound(selected);
            }
        }
    }
}

export default WordSearch
