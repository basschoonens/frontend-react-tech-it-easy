import {bestSellingTv} from "../constants/inventory.js";

// const tvDescription = `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`
// export default tvDescription;

function tvDescription(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

export default tvDescription;