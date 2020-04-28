// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    const table = document.getElementsByTagName('tbody')[0];
    const flattedEl = Array.from(table.rows).reduce((flatten, row) => [...flatten, ...Array.from(row.children)], []);
    const tableData = flattedEl.map(({ textContent, style: { color, backgroundColor } }) => {
        return { textContent, color, backgroundColor }
    });
    const filteredData = tableData.filter(d => d.color !== d.backgroundColor);
    return filteredData.reduce((answer, f) => `${answer}${f.textContent}`, '');



    // please note that element.innerText is not supported,
    // you can use element.textContent instead.


}

solution();
