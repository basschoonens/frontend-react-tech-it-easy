import {inventory} from './inventory.js';


// Maak een array van alle tv-type namen
// Log in de console

export const tvTypes = inventory.map((inventory) => {
    return inventory.type;
});

console.log(tvTypes);

// Maak een array van alle uitverkochte tv's
// Log in de console

export const soldOutTv = inventory.filter(tv => {
    if (tv.originalStock - tv.sold === 0) {
        return tv;
    }
});

console.log(soldOutTv);

// Maak een array methode die de infomatie van TV type NH3216SMART teruggeeft
// Log in de console

export const tvInfo = inventory.find(tv => {
    if (tv.type === 'NH3216SMART') {
        return tv;
    }
});

console.log(tvInfo);


// Maak een array lijst van de merk- en tv-namen die geschikt zijn voor sport-kijkers
// Log in de console
// format: {name: brand + name, suitable: true/false}

export const sportTv = inventory.map(tv=> ({
    name: tv.brand + ' ' + tv.type,
    suitable: tv.refreshRate >= 100
}));

console.log(sportTv);


// Array met tv's 65 inch of groter
// Log in de console

export const largeTv = inventory.filter(tv => {
    let tvSixtyFive = "";
    for (let i = 0; i < tv.availableSizes.length; i++) {
        if (tv.availableSizes[i] >= 65) {
            tvSixtyFive = tv.availableSizes[i];
        }
    }
    return tvSixtyFive;
});

console.log(largeTv);


// Array met tv's die over ambilight beschikken
// Log in de console

export const ambilightTv = inventory.filter(tv => {
    const hasAmbilight = tv.options.some(option => option.name === "ambilight" && option.applicable);
    return hasAmbilight;
});

console.log(ambilightTv);