import {inventory, bestSellingTv} from '../constants/inventory.js';

// Hoeveel tv's zijn er ingekocht.

const purchasedCount = totalPurchased();

function totalPurchased() {

        let totalTvPurchased = 0;
        for (let i = 0; i < inventory.length; i++) {
            totalTvPurchased += inventory[i].originalStock;
        }
        return totalTvPurchased + bestSellingTv.originalStock;
}

export default purchasedCount;