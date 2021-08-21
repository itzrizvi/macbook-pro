// Extra Equipment Price Function
function getExtraPrices(outPutId, extraPricesInput) {
    const extraPrices = document.getElementById(outPutId).innerText;
    let extraPricesNumber = parseInt(extraPrices);
    extraPricesNumber = extraPricesInput;
    return extraPricesNumber;
}

// Get Default Price 
function getDefaultPrice() {
    const getExtraAmountNumber = totalPrice();
    const defualtPrice = document.getElementById('best-price').innerText;
    let defualtPriceNumber = parseInt(defualtPrice);
    const totalBestPrice = getExtraAmountNumber + defualtPriceNumber;
    defualtPriceNumber = totalBestPrice;
    return totalBestPrice;
}

// Get Extra Equipment Total Price
function totalPrice() {
    // Extra Memory
    const memoryTotal = document.getElementById('extra-memory').innerText;
    const memoryTotalNumber = parseInt(memoryTotal);
    // Extra Storage
    const storageTotal = document.getElementById('extra-storage').innerText;
    const storageTotalNumber = parseInt(storageTotal);
    // Delivery Fee
    const deliveryTotal = document.getElementById('delivery-option').innerText;
    const deliveryTotalNumber = parseInt(deliveryTotal);
    const totalExtraPrice = memoryTotalNumber + storageTotalNumber + deliveryTotalNumber;
    return totalExtraPrice;
}

// Promo Code Function
function addPromo() {
    const promoInputField = document.getElementById('promo-code');
    const promoInputValue = promoInputField.value;
    const errorMSG = document.getElementById('errorMSG');
    let getTotalAfterPromo = getDefaultPrice();
    // Condition For Matching promo
    if (promoInputValue == 'stevekaku') {
        getTotalAfterPromo = getTotalAfterPromo / 100 * 20;
        errorMSG.innerText = 'Coupon Success';
        errorMSG.style.color = 'green';
    } else {
        getTotalAfterPromo = getTotalAfterPromo - getDefaultPrice();
        errorMSG.innerText = 'Invalid Coupon';
        errorMSG.style.color = 'red';
    }
    // Clearing Input Field
    promoInputField.value = '';
    return getTotalAfterPromo;
}

// Promo Code Event Handler 
document.getElementById('coupon-btn').addEventListener('click', function () {
    const restTotal = document.getElementById('rest-total');
    const mainTotalPrice = getDefaultPrice();
    const promoCoupon = addPromo();
    // Updating Total Price
    const restTotalAmount = mainTotalPrice - promoCoupon;
    restTotal.innerText = restTotalAmount;
});


// Memory Event Handler 1
document.getElementById('eightgb-memory').addEventListener('click', function () {
    // Getting Extra Memory Price
    const extraMemoryPrice = document.getElementById('extra-memory');
    extraMemoryPrice.innerText = getExtraPrices('extra-memory', 0);
    // Getting Default Total Prcie
    const defaultBestTotal = document.getElementById('defualt-price');
    defaultBestTotal.innerText = getDefaultPrice();
    // Getting Bottom Total Price
    const finalBottomTotal = document.getElementById('rest-total');
    finalBottomTotal.innerText = getDefaultPrice();
});

// Memory Event Handler 2
document.getElementById('sixteengb-memory').addEventListener('click', function () {
    // Getting Extra Memory Price
    const extraMemoryPrice = document.getElementById('extra-memory');
    extraMemoryPrice.innerText = getExtraPrices('extra-memory', 180);
    // Getting Default Total Prcie
    const defaultBestTotal = document.getElementById('defualt-price');
    defaultBestTotal.innerText = getDefaultPrice();
    // Getting Bottom Total Price
    const finalBottomTotal = document.getElementById('rest-total');
    finalBottomTotal.innerText = getDefaultPrice();

});

// Storage Event Handler 1
document.getElementById('twoFiftySix-store').addEventListener('click', function () {
    // Getting Extra Storage Price
    const extraStoragePrice = document.getElementById('extra-storage');
    extraStoragePrice.innerText = getExtraPrices('extra-storage', 0);
    // Getting Default Total Prcie
    const defaultBestTotal = document.getElementById('defualt-price');
    defaultBestTotal.innerText = getDefaultPrice();
    // Getting Bottom Total Price
    const finalBottomTotal = document.getElementById('rest-total');
    finalBottomTotal.innerText = getDefaultPrice();
});

// Storage Event Handler 2
document.getElementById('fiveTwelve-store').addEventListener('click', function () {
    // Getting Extra Storage Price
    const extraStoragePrice = document.getElementById('extra-storage');
    extraStoragePrice.innerText = getExtraPrices('extra-storage', 100);
    // Getting Default Total Prcie
    const defaultBestTotal = document.getElementById('defualt-price');
    defaultBestTotal.innerText = getDefaultPrice();
    // Getting Bottom Total Price
    const finalBottomTotal = document.getElementById('rest-total');
    finalBottomTotal.innerText = getDefaultPrice();
});

// Storage Event Handler 3
document.getElementById('oneTera-store').addEventListener('click', function () {
    // Getting Extra Storage Price
    const extraStoragePrice = document.getElementById('extra-storage');
    extraStoragePrice.innerText = getExtraPrices('extra-storage', 180);
    // Getting Default Total Prcie
    const defaultBestTotal = document.getElementById('defualt-price');
    defaultBestTotal.innerText = getDefaultPrice();
    // Getting Bottom Total Price
    const finalBottomTotal = document.getElementById('rest-total');
    finalBottomTotal.innerText = getDefaultPrice();
});

// Delivery Option Event Handler 1
document.getElementById('free-delivery').addEventListener('click', function () {
    // Getting Free Delivery Price
    const freeDelivery = document.getElementById('delivery-option');
    freeDelivery.innerText = getExtraPrices('delivery-option', 0);
    // Getting Default Total Prcie
    const defaultBestTotal = document.getElementById('defualt-price');
    defaultBestTotal.innerText = getDefaultPrice();
    // Getting Bottom Total Price
    const finalBottomTotal = document.getElementById('rest-total');
    finalBottomTotal.innerText = getDefaultPrice();
});

// Delivery Option Event Handler 2
document.getElementById('charged-delivery').addEventListener('click', function () {
    // Getting Charged Delivery Price
    const chargedDelivery = document.getElementById('delivery-option');
    chargedDelivery.innerText = getExtraPrices('delivery-option', 20);
    // Getting Default Total Prcie
    const defaultBestTotal = document.getElementById('defualt-price');
    defaultBestTotal.innerText = getDefaultPrice();
    // Getting Bottom Total Price
    const finalBottomTotal = document.getElementById('rest-total');
    finalBottomTotal.innerText = getDefaultPrice();
});
