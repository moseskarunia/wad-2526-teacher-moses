let cart = [];

loadCart();

function loadCart() {
    const params = new URLSearchParams(window.location.search);
    cart = JSON.parse(params.get('cart'));

    let display = '';

    for (let i = 0; i < menus.length; i++) {
        const e = menus[i];

        for (let j = 0; j < e.variants.length; j++) {
            const f = e.variants[j];
            if (cart[i][j] > 0) {
                display += `<div>${e.name} - ${f.description} - ${cart[i][j]}</div>`;
            }
        }
    }

    document.getElementById('cart').innerHTML = display;
}