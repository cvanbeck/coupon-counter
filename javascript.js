// Need to learn about arrays? to store both paperID and paperPrice
// for each newspaper we sell
function couponMultiplier(paperID, paperPrice) {
    const numberOfCoupons = document.getElementById(paperID).value;
    const couponsTotal = numberOfCoupons * paperPrice
    console.log(couponsTotal)
    return couponsTotal
}
