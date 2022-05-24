function couponMultiplier(paperID, paperPrice) {
    const couponsTotal = document.getElementById(paperID).value * paperPrice
    if (couponsTotal > 0) {
        return couponsTotal.toFixed(2)
    }
    else {
        return "0.00"
    }
}

// Adds the totals of each newspaper together and displays it on screen.
let sumOfCoup = 0.00
function sumOfCoupons() {
    sumOfCoup = 0
    for (let newspaper in couponTotalPriceList) {
        sumOfCoup += couponTotalPriceList[newspaper]
    }
    document.getElementById("sum-of-amounts").innerHTML = sumOfCoup.toFixed(2);
}

// Multiplies the number of papers by the price and then displays on screen.
function couponObjectUpdater(name) {
    couponTotalPriceList[name] = parseFloat(couponMultiplier(name, priceList[name]));
    document.getElementById(name + "-total").innerHTML = couponTotalPriceList[name].toFixed(2)
}

// Runs and updates figures each time a value is entered.
allPapers = document.querySelectorAll(".input-field")
allPapers.forEach((allPapers) => {
    allPapers.addEventListener("input", () => {
        let paperName = allPapers.id;
        couponObjectUpdater(paperName);
        sumOfCoupons();

    })
})

// Next steps: Add all papers/prices, add a function to switch between weekday/sat/sun prices,
// Add a function to easily change price of individual paper, add a function that automatically
// generates search bar/total div for each paper so I don't have to do it manually.