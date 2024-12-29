/**
 * 
 * @param {String} country країна доставки
 * @param {Number} price загальна вартість товару
 * @param {Number} deliveryFee вартість доставки товару
 * @returns {String} рядок з повідомленням про доставку товару в країну користувача
 */
function getShippingMessage(country, price, deliveryFee) {
    return `Shipping to ${country} will cost ${price + deliveryFee} credits`
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
