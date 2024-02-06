// Bereken en toon de beschikbare maten van de TV's

function calAvailableSizes(tv) {
    return tv.availableSizes.map(size => {
        return `${size} inches (${Math.round(size * 2.54)} cm)`;
    }).join(" | ");
}

export default calAvailableSizes;