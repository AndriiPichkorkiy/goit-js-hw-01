/**
 * 
 * @param {String} content ширина контенту
 * @param {String} padding горизонтальний падінг для кожної зі сторін
 * @param {String} border товщина бордера для кожної зі сторін
 * @returns {Number} загальна ширина елемента.
 */
function getElementWidth(content, padding, border) {
    const contentNumber = Number.parseFloat(content);
    const paddingNumber = Number.parseFloat(padding);
    const borderNumber = Number.parseFloat(border);
    return (paddingNumber * 2) + contentNumber + (borderNumber * 2)
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
