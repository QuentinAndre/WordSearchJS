import "./wordsearch.css";
declare class Chronometer {
    elapsed: number;
    timer: number;
    constructor();
    tick(): void;
    getElapsed(): number;
}
interface InitConfigObject {
    grid: string[][];
    words: string[];
    onFindWord: Function;
    parentId: string;
}
interface MatrixItem {
    letter: string;
    row: number;
    col: number;
}
declare class WordSearch {
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
    constructor(o: InitConfigObject);
    drawGameArea(): void;
    getScore(): number;
    getRemaining(): number;
    getTiming(): Array<number>;
    displayScore(): void;
    initMatrix(): MatrixItem[][];
    drawWordList(target: HTMLElement): void;
    getItem(row: number, col: number): MatrixItem | undefined;
    getItems(rowFrom: number, colFrom: number, rowTo: number, colTo: number): Array<MatrixItem>;
    drawMatrix(target: HTMLElement): void;
    handleMouseover(item: MatrixItem): EventListener;
    handleMouseup(): EventListener;
    handleMousedown(item: MatrixItem): EventListener;
    clearHighlight(): void;
    markAsFound(selected: Array<MatrixItem>): void;
    validateSelection(selected: Array<MatrixItem>): void;
}
export default WordSearch;
