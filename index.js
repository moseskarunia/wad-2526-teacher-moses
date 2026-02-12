let qty = 0;

function substractQty() {
    qty = qty - 1; // OR qty -= 1

    if (qty < 0) { // Same with ==> if (qty < 0) qty = 0;
        qty = 0;
    }

    document.getElementById('qty').innerHTML = qty;
}

function addQty() {
    qty = qty + 1; // OR qty += 1
    document.getElementById('qty').innerHTML = qty;
}