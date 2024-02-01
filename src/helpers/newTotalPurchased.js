// Bereken het aantal ingekochte producten
// --------------------------------------------------------

// export default function newTotalPurchased(products) {
//     let totalTvPurchased = 0;
//     for (let i = 0; i < products.length; i++) {
//         totalTvPurchased += products[i].originalStock;
//     }
//     return totalTvPurchased;
// }


function newTotalPurchased(productArray) {
    let totalTvPurchased = 0;
    productArray.forEach(product => {
        totalTvPurchased += product.originalStock;
    });
    return totalTvPurchased;
}

export default newTotalPurchased;