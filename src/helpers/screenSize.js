import {bestSellingTv} from "../constants/inventory.js";


const screenSize = generateSizeString();

function generateSizeString(tv) {
    let sizeString = "";
    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        let sizeInInches = bestSellingTv.availableSizes[i];
        let sizeInCm = Math.round(sizeInInches * 2.54);
        sizeString += `${sizeInInches} inches (${sizeInCm} cm)`;
        if (i < bestSellingTv.availableSizes.length - 1) {
            sizeString += " | ";
        }
    }
    return sizeString;
}

export default screenSize;
