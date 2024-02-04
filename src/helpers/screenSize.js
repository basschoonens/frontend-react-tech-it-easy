// function screenSizeString(tv) {
//
//     let sizeString = "";
//
//     for (let i = 0; i < tv.availableSizes.length; i++) {
//         let sizeInInches = tv.availableSizes[i];
//         let sizeInCm = Math.round(sizeInInches * 2.54);
//         sizeString += `${sizeInInches} inches (${sizeInCm} cm)`;
//
//         if (i < tv.availableSizes.length - 1) {
//             sizeString += " | ";
//         }
//     }
//
//     return sizeString;
// }
//
// export default screenSizeString;

function calAvailableSizes(tv) {
    return tv.availableSizes.map(size => {
        return `${size} inches (${Math.round(size * 2.54)} cm)`;
    }).join(" | ");
}

export default calAvailableSizes;