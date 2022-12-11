(() => {
    window.addEventListener("load", () => {
        (async () => {
            let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
            await fetch(url).then((response) => response.json()).
            then(
                (response) => {
                    const exchangeDate = document.querySelector(".preloader");
                    if(Math.round(Math.random()) % 2 == 0) {
                        exchangeDate.innerHTML = "1 BTC = " + response["bpi"]["USD"]["rate_float"] + "$";
                    } else {
                        exchangeDate.innerHTML = "1 BTC = " + response["bpi"]["EUR"]["rate_float"] + "€";
                    }
                }
            ).catch(() => {
                    const exchangeDate = document.querySelector(".preloader");
                    exchangeDate.innerHTML = "⚠ Что-то пошло не так";
                }
            );
        })()
    })
})()