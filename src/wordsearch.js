import "./wordsearch.css"

class Chronometer {
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

function wordsToUpperCase(words) {
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }
    return words;
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + s4();
}

class WordSearch {
    constructor(o) {
        let obj = o ? o : {};
        this.grid = obj.grid ? obj.grid : [
            ['.', '.', '.', '.', '.', '.'],
            ['.', 'T', 'E', 'S', 'T', '.'],
            ['.', '.', '.', '.', '.', '.']
        ];
        this.rowSize = this.grid.length;
        this.colSize = this.grid[0].length;

        this.words = obj.words ? wordsToUpperCase(obj.words) : ["TEST"];

        this.onFindWord = obj.onFindWord ? obj.onFindWord.bind(this) : () => null;

        this.parent = obj.parentId ? document.getElementById(obj.parentId) : document.getElementById("ws-parent");
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
        scoreArea.append(scoreLabel);
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

    getScore() {
        return this.timeToFind.map(i => i > 0 ? 1 : 0).reduce((a, b) => a + b);
    }

    getRemaining() {
        return this.timeToFind.map(i => i > 0 ? 0 : 1).reduce((a, b) => a + b);
    }

    getTiming() {
        return this.timeToFind.slice();
    }

    displayScore() {
        this.parent.querySelector("#ws-score").innerHTML = "Found " + this.getScore() + " out of " + this.words.length + " words so far.";
    }

    initMatrix() {
        let matrix = [];
        for (var row = 0; row < this.rowSize; row++) {
            for (var col = 0; col < this.colSize; col++) {
                var item = {
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

    drawWordList(target) {
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

    getItem(row, col) {
        return (this.matrix[row] ? this.matrix[row][col] : undefined);
    }

    getItems(rowFrom, colFrom, rowTo, colTo) {
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

    drawMatrix(target) {
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
                cvEl.setAttribute('width', 25);
                cvEl.setAttribute('height', 25);

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

    handleMouseover(item) {
        var that = this;
        return function () {
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

    handleMouseup() {
        var that = this;
        return function () {
            that.selectFrom = null;
            that.clearHighlight();
            that.validateSelection(that.selected);
            that.selected = [];
        }
    }

    handleMousedown(item) {
        var that = this;
        return function () {
            that.selectFrom = item;
        }
    }

    clearHighlight() {
        var selectedEls = this.parent.querySelectorAll('.ws-selected');
        for (var i = 0; i < selectedEls.length; i++) {
            selectedEls[i].classList.remove('ws-selected');
        }
    }


    markAsFound(selected) {
        for (var i = 0; i < selected.length; i++) {
            var row = selected[i].row + 1,
                col = selected[i].col + 1,
                el = this.parent.querySelector('.ws-row:nth-child(' + row + ') .ws-col:nth-child(' + col + ')');
            el.classList.add('ws-found');
        }
        this.displayScore();
        this.onFindWord();
    }

    validateSelection(selected) {
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
                var ele = this.parent.querySelector('#' + wordSelected);
                ele.style.setProperty("text-decoration", "line-through");
                ele.style.setProperty("color", "red");
                ele.setAttribute("text-decoration", "line-through");
                this.markAsFound(selected);
            }
        }

        if (indexOfWordR > -1) {
            if (this.timeToFind[indexOfWordR] === -1) {
                this.timeToFind[indexOfWordR] = this.timer.getElapsed();
                var ele = this.parent.querySelector('#' + wordSelectedR);
                ele.style.setProperty("text-decoration", "line-through");
                ele.style.setProperty("color", "red");
                ele.setAttribute("text-decoration", "line-through");
                this.markAsFound(selected);
            }
        }
    }
}

export default WordSearch
