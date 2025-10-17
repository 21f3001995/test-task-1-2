const csvData = `product,sales\nA,100\nB,200`;

function parseCSV(data) {
    const rows = data.split('\n');
    const result = [];
    for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].split(',');
        if (cols.length > 1) {
            result.push({ product: cols[0], sales: cols[1] });
        }
    }
    return result;
}

function populateTable(data) {
    const tableBody = document.querySelector('#product-sales tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.product}</td><td>${item.sales}</td>`;
        tableBody.appendChild(row);
    });
}

const productData = parseCSV(csvData);
populateTable(productData);