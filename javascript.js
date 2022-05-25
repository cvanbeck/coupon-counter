function couponMultiplier(paperID, paperPrice) {
    const couponsTotal = Math.floor(document.getElementById(paperID).value) * paperPrice
    if (couponsTotal > 0) {
        return couponsTotal.toFixed(2)
    }
    else {
        return "0.00"
    }
}

let listOfPapers = Object.keys(priceList)
function generateLayout() {
listOfPapers.forEach((listOfPapers) => {
    let paperFieldHtml = document.getElementById("paper-field") 
    
    const div = document.createElement("div")
    div.setAttribute("id", listOfPapers+"paper")
    div.setAttribute("class", "paper")

    
    const input = document.createElement("input")
    input.setAttribute("type", "number")
    input.setAttribute("class", "input-field")
    input.setAttribute("placeholder", listOfPapers)
    input.setAttribute("id", listOfPapers)
    
    
    const innerDiv = document.createElement("div")
    innerDiv.setAttribute("class", "total-amount")
    innerDiv.innerHTML = 0.00.toFixed(2)
    innerDiv.setAttribute("id", listOfPapers+"-total")
    
    paperFieldHtml.appendChild(div)
    
    let divElement = document.getElementById(listOfPapers+"paper")
    divElement.appendChild(input)
    divElement.appendChild(innerDiv)
    
})
}
generateLayout()


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

// Next steps: add a function to switch between weekday/sat/sun prices,
// Add a function to easily change price of individual paper, make it pretty

