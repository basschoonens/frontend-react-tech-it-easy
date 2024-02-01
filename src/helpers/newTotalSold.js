// maak een methode die totalsold uitrekent
// en deze methode exporteer je
// importeer deze methode in de App.js

// export default function newTotalSold(products) {
//     let totalTvSold = 0;
//     for (let i = 0; i < products.length; i++) {
//         totalTvSold += products[i].sold;
//     }
//     return totalTvSold;
// }
//

function newTotalSold(productArray){
    let totalTvSold = 0;
    productArray.forEach(product => {
        totalTvSold += product.sold;
    });
    return totalTvSold;
}

export default newTotalSold;
