
function couponMultiplier(paperID, paperPrice) {
    const numberOfCoupons = document.getElementById(paperID).value;
    const couponsTotal = numberOfCoupons * paperPrice
    if (couponsTotal > 0){
        return couponsTotal.toFixed(2) 
    }
    else {
        return 0
    }

}

// Not sure if using objects in arrays is the way to go. I think a better way would be for the function at the bottom
// to use the id to find the price., maybe just an array for each one is better then?


let priceList = {"telegraph":1.50, "times":0.80, "guardian":2.00, "dailymail":3.00}


allPapers = document.querySelectorAll(".input-field")
allPapers.forEach((allPapers) => {
    allPapers.addEventListener("input", () => {
        let paperName = allPapers.id
        console.log("INPUT RECEIVED!" + allPapers.id)
        console.log(couponMultiplier(paperName, priceList[paperName]))
    
    })
})


// next steps are to get all the papers and prices set up, then I need a way to easily
// change prices of a paper and also to adjust for saturday/sunday prices. I also need
// to display the value on the screen instead of in the console and also to add all the value together.
