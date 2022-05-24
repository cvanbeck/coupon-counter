function couponMultiplier(paperID, paperPrice) {
    const couponsTotal = document.getElementById(paperID).value * paperPrice
    if (couponsTotal > 0) {
        return couponsTotal.toFixed(2)
    }
    else {
        return "0.00"
    }
}


let priceList = {
    "telegraph": 1.50,
    "times": 0.80,
    "guardian": 2.00,
    "dailymail": 3.00
}

let couponTotalPriceList = { 
    "telegraph": 0.00, 
    "times": 0.00, 
    "guardian": 0.00, 
    "dailymail": 0.00 
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

// next steps are to get all the papers and prices set up, then I need a way to easily
// change prices of a paper and also to adjust for saturday/sunday prices. I also need
// to display the value on the screen instead of in the console and also to add all the value together.
