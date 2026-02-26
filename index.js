let qty = 0;

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

function renderMenus() {
    let menuGrid = '';

    for (let i = 0; i < menus.length; i++) {
        menuGrid += `
        <div class="menu-card">
            <img src="${menus[0].photoUrl}" alt="${menus[0].name}" id="pic">
            <h3 class="menu-name">${menus[0].name}</h3>
            <p class="menu-description">${menus[0].description}</p>
            <div class="menu-price-row">
                <div class="price-description">${menus[0].variants[0].description}</div>
                <div class="price-and-qty">
                    <h3 class="price">${menus[0].variants[0].price}</h3>
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
            <div class="menu-price-row">
                <p class="price-description">${menus[0].variants[1].description}</p>
                <div class="price-and-qty">
                    <h3 class="price">${menus[0].variants[1].price}</h3>
                    <button onclick="document.getElementById('pic').src='assets/salad.jpg'">
                        <span class="material-symbols-outlined">
                            do_not_disturb_on
                        </span>
                    </button>
                    <span class="qty">0</span>
                    <button onclick="document.getElementById('pic').src='assets/pizza.jpg'">
                        <span class="material-symbols-outlined">
                            add_circle
                        </span>
                    </button>
                </div>
            </div>
        </div>`;
    }

    document.getElementById('menu-grid').innerHTML = menuGrid;
}