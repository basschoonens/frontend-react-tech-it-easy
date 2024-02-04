// maak een methode die totalsold uitrekent
// en deze methode exporteer je
// importeer deze methode in de App.js


function totalSold(productArray){
    let totalTvSold = 0;
    productArray.forEach(product => {
        totalTvSold += product.sold;
    });
    return totalTvSold;
}

export default totalSold;
