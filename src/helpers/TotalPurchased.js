// Bereken het aantal ingekochte producten
// --------------------------------------------------------

function totalPurchased(productArray) {
    let totalTvPurchased = 0;
    productArray.forEach(product => {
        totalTvPurchased += product.originalStock;
    });
    return totalTvPurchased;
}

export default totalPurchased;