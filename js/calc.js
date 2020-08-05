function calculate() {
    let sugar = parseInt(document.querySelector("form input#sugar-amount").value);
    let egg = parseInt(document.querySelector("#egg-amount").value);
    let flour = parseInt(document.querySelector("#flour-amount").value);
    let s = sugar / 10;
    let e = egg / 2;
    let f = flour / 20;
    let x = [s, e, f];

    let most = x[0];
    for (let i = 0; i < x.length; i++) {
        if (x[i] > most) {
            most = x[i];
        }
    }
    maxPossibleCookies(x);
    mostIngredients(x, most, sugar, egg, flour);
}



function maxPossibleCookies(x) {
    let maxAvailable = document.querySelector("span#max-available");
    let maxCookies = x[0];
    for (let i = 0; i < x.length; i++) {
        if (x[i] < maxCookies) {
            maxCookies = x[i];
        }
    }
    maxAvailable.innerHTML = maxCookies - maxCookies%1;
}


/*megnézzük melyik alapanyagból van elég a legtöbb sütihez, és attól függően kiszámoljuk, és kiírjuk, hogy a többi alapanyagból
mennyire van szüklség, és hogy ez összesen mennyi sütire lesz elég*/
function mostIngredients(x, most, sugar, egg, flour) {
    let numSugar = document.querySelector("span#sugar");
    let numEgg = document.querySelector("span#egg");
    let numFlour = document.querySelector("span#flour");
    let maxToUse = document.querySelector("span#max-to-use");
    if (most % 1 != 0) {
        let maxCookiesToUseAll = most - most % 1 + 1;
        let eggNeeded = 2 * maxCookiesToUseAll - egg;
        let flourNeeded = 20 * maxCookiesToUseAll - flour;
        let sugarNeeded = 10 * maxCookiesToUseAll - sugar;
        if (most == x[0]) {
            sugarNeeded = 10 - sugar % 10;

        } else if (most == x[1]) {
            eggNeeded = 2 - egg % 2;

        } else if (most == x[2]) {
            flourNeeded = 20 - flour % 20;
        }

        numSugar.innerHTML = sugarNeeded;
        numEgg.innerHTML = eggNeeded;
        numFlour.innerHTML = flourNeeded;
        maxToUse.innerHTML = maxCookiesToUseAll;

    } else {
        let eggNeeded = 2 * most - egg;
        let flourNeeded = 20 * most - flour;
        let sugarNeeded = 10 * most - sugar;
        numSugar.innerHTML = sugarNeeded;
        numEgg.innerHTML = eggNeeded;
        numFlour.innerHTML = flourNeeded;
        maxToUse.innerHTML = most;
    }
}