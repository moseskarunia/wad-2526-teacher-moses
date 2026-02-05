let qty = 0;

function substractQty() {
    qty = qty - 1; // OR qty -= 1
    document.getElementById('qty').innerHTML = qty;
}

function addQty() {
    qty = qty + 1; // OR qty += 1
    document.getElementById('qty').innerHTML = qty;
}