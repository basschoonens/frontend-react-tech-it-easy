import {bestSellingTv} from "../constants/inventory.js";

// const tvPrice = `€ ${bestSellingTv.price},-`;
//
// export default tvPrice;

function tvPrice(tv) {
    return `€ ${tv.price},-`;
}

export default tvPrice;