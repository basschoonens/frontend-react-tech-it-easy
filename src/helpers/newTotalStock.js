// Calculate the current stock of products

import newTotalPurchased from "./newTotalPurchased.js";
import newTotalSold from "./newTotalSold.js";

function newTotalStock(ProductArray){

    const totalPurchased = newTotalPurchased(ProductArray);
    const totalTvSold = newTotalSold(ProductArray);

    return totalPurchased - totalTvSold;
}

export default newTotalStock;