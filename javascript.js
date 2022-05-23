
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

//let telegraphTotal = document.getElementById("telegraph-total")
// let theTelegraph = {id: "telegraph", price:1.50}
// let theTimes = {id: "times", price:0.80}
// let theGuardian = {id: "guardian", price: 2.00}
// let dailyMail = {id:"dailymail", price: 3.00}
// let newspaperList = [theTelegraph, theTimes, theGuardian, dailyMail]


allPapers = document.querySelectorAll(".input-field")
allPapers.forEach((allPapers) => {
    allPapers.addEventListener("input", () => {
        console.log("INPUT RECEIVED!" + allPapers.id)
        console.log(couponMultiplier(allPapers.id, ))
    })
})


// next step is to find a way to incorporate the price of each paper into couponMultiplier