// Array methode die een lijst van alle TV merken weergeeft
// Laat de lijst zien op de webpagina

// creeër een variabele die de lijst met merknamen kan bevatten.
// maak een functie die de merken ophaalt
// Return die merken in de variabele
// Geef het in een format weer op de site

function tvBrandList (inventory) {
    return inventory.map((tv) => tv.brand);
}

export default tvBrandList;