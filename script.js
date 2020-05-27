function priceAdjust() {
    var annual_pricing = ["&dollar;199.99", "&dollar;249.99", "&dollar;399.99"]; // Unchecked
    var monthly_pricing = ["&dollar;19.99", "&dollar;24.99", "&dollar;39.99"]; // Checked
    var prices = document.getElementsByClassName('price');

    var toggle = document.getElementsByClassName('slider');

    for (var i = 0; i < prices.length; i++) {
        if (toggle[0].checked) {
            prices[i].innerHTML = monthly_pricing[i];
            console.log(prices[i]);
            console.log("checked");
        } else {
            prices[i].innerHTML = annual_pricing[i];
            console.log(prices[i]);
        }
    }
}