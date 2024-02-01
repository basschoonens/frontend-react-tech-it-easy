// Calculate the current stock of products

function newTotalStock(productArray){
    let totalTvStock = 0;
    productArray.forEach(product => {
        totalTvStock += product.originalStock;
    });
    return totalTvStock;
}

export default newTotalStock;