fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=aaa24bb3f50040c18598fc06717374d4")
    .then((result) => {
        // console.log(result);
        let myData = result.json();
        // console.log(myData);
        return myData;
    }).then((currency) => {
        let amount = document.querySelector(".amount");
        let egpPrice = document.querySelector(".egp span")
        let sarPrice = document.querySelector(".sar span")
        let eurPrice = document.querySelector(".eur span")

        // console.log(currency.rates);
        // console.log(currency.rates["EGP"]);
        // console.log(currency.rates["SAR"]);
        // console.log(currency.rates["EUR"]);

        egpPrice.innerHTML = amount.innerHTML * currency.rates["EGP"];
        sarPrice.innerHTML = amount.innerHTML * currency.rates["SAR"];
        eurPrice.innerHTML = amount.innerHTML * currency.rates["EUR"];
    })