// Bereken het aantal ingekochte producten
// --------------------------------------------------------

// export default function newTotalPurchased(products) {
//     let totalTvPurchased = 0;
//     for (let i = 0; i < products.length; i++) {
//         totalTvPurchased += products[i].originalStock;
//     }
//     return totalTvPurchased;
// }


export default function newTotalPurchased(products) {
    let totalTvPurchased = 0;
    products.forEach(products => {
        totalTvPurchased += products.originalStock;
    });
    return totalTvPurchased;
}