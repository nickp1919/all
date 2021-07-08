function gridCol(col) {
    return `100%/12 * ${col}`;
}
// возвращает массив из равного размера колонок, если нам нужна четкая сетка
function UIAdaptiveCol(col, units = '%', mr = 2) {
    const arr = [];
    const _col = (100 / col - mr).toFixed(3);
    for (let i = 0; i < col; i++) {
        arr.push(_col + units);
    }
    return arr;
}
export { gridCol, UIAdaptiveCol };
