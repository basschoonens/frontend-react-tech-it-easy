// Calculate the current stock of products

import TotalPurchased from "./TotalPurchased.js";
import TotalSold from "./TotalSold.js";

function totalStock(ProductArray){

    const totalPurchased = TotalPurchased(ProductArray);
    const totalTvSold = TotalSold(ProductArray);

    return totalPurchased - totalTvSold;
}

export default totalStock;