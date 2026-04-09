// e.g. When there are 4 menus with 2 variants each,
// then the cart variable will be like this: 
// [[0, 0], [0, 0], [0, 0], [0, 0]]
let cart = [];

setupCart();
renderMenus();

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

function setupCart() {
    for (let i = 0; i < menus.length; i++) {
        let variantCart = [];
        for (let j = 0; j < menus[i].variants.length; j++) {
            variantCart.push(0);
        }
        cart.push(variantCart);
    }
}

function renderMenus() {
    let menuGrid = '';

    for (let i = 0; i < menus.length; i++) {
        let menuVariantList = '';
        for (let j = 0; j < menus[i].variants.length; j++) {
            menuVariantList += `
                <div class="menu-price-row">
                    <div class="price-description">${menus[i].variants[j].description}</div>
                    <div class="price-and-qty">
                        <h3 class="price">${menus[i].variants[j].price}</h3>
                        <button onclick="substractQty()">
                            <span class="material-symbols-outlined">
                                do_not_disturb_on
                            </span>
                        </button>
                        <span class="qty" id="qty">0</span>
                        <button onclick="addQty()">
                            <span class="material-symbols-outlined">
                                add_circle
                            </span>
                        </button>
                    </div>
                </div>
            `;
        }

        menuGrid += `
            <div class="menu-card">
                <img src="${menus[i].photoUrl}" alt="${menus[i].name}" id="pic">
                <h3 class="menu-name">${menus[i].name}</h3>
                <p class="menu-description">${menus[i].description}</p>
                ${menuVariantList}
            </div>
        `;
    }

    document.getElementById('menu-grid').innerHTML = menuGrid;
}