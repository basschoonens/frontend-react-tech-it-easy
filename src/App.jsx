import './App.css';
import {inventory, bestSellingTv} from "./constants/inventory.js";
import tvDescription from "./helpers/tvDescription.js";
import tvPrice from "./helpers/tvPrice.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import techItEasy from "./assets/tech_it_easy.png"
import outOfStockImg from "./assets/out-of-stock.png";
import totalSold from "./helpers/TotalSold.js";
import totalPurchased from "./helpers/TotalPurchased.js";
import totalStock from "./helpers/TotalStock.js";
import calAvailableSizes from "./helpers/screenSize.js";
import "./constants/oefenInventory.js";

function App() {
    const handleClick = (event) => {
        console.log(event.target.innerText);
    }

    function sortByMostSoldTv() {
        inventory.sort((a, b) => {
            return b.sold - a.sold;
        });
        console.log(inventory);
    }

    function sortByCheapestTv() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });
        console.log(inventory)
    }

    function sortBySportsReady() {
        inventory.sort((a, b) => {
        return b.refreshRate - a.refreshRate;
    });
        console.log(inventory)
}

    function sortByScreenSize() {
        inventory.sort((a, b) => {
            const maxSizeA = Math.max(...a.availableSizes);
            const maxSizeB = Math.max(...b.availableSizes);
            return maxSizeB - maxSizeA;
        });
        console.log(inventory);
    }

    // Show sold out tv's with out of stock image
    // sort the array of tv's by original stock - sold = 0
    // display the tv's that are out of stock

    function isOutOfStock(tvItem) {
        return tvItem && tvItem.originalStock && (tvItem.originalStock - tvItem.sold) === 0;
    }


    return (
    <main className="page-container">
        <span>
            <img className="logo-image" src={techItEasy} alt={"TechItEasy-logo"}/>
        </span>
        <h1>Dashboard</h1>
        <p>Verkoopoverzicht</p>
        <div className="outer-stats-container">
            <div className="sold-stat stats">
                <p>Aantal verkochte producten</p>
                <p className="soldCount">{totalSold(inventory)}</p>
            </div>
            <div className="purchased-stat stats">
                <p>Aantal ingekochte producten</p>
                <p className="purchasedCount">{totalPurchased(inventory)}</p>
            </div>
            <div className="stock-stat stats">
                <p>Aantal te verkopen producten</p>
                <p className="totalStock">{totalStock(inventory)}</p>
            </div>
        </div>
        <p>Best verkochte tv</p>
        {inventory.map((tvItem, index) => (
            <div key={index} className="outer-tv-container">
                <span className="tv-image-wrapper">
                   {isOutOfStock() ? (
                       <img className="tv-image" src={outOfStockImg} alt="out of stock" />
                   ) : (
                       <img className="tv-image" src={tvItem.sourceImg} alt="inventory-tv" />
                   )}
                </span>
                <article className="inner-tv-container">
                    <h1>{tvDescription(bestSellingTv)}</h1>
                    <h2>{tvPrice(bestSellingTv)}</h2>
                    <h3>{calAvailableSizes(bestSellingTv)}</h3>
                    <div className="features-container">
                        <ul>
                            <li><img className="icon" src={check} alt="icon"/>wifi</li>
                            <li><img className="icon" src={minus} alt="icon"/>speech</li>
                            <li><img className="icon" src={check} alt="icon"/>hdr</li>
                            <li><img className="icon" src={check} alt="icon"/>bluetooth</li>
                            <li><img className="icon" src={minus} alt="icon"/>ambilight</li>
                        </ul>
                    </div>
                </article>
            </div>
        ))}
        <div className="buttons-container">
            <button onClick={sortByMostSoldTv}>Meest verkocht eerst</button>
            <button onClick={sortByCheapestTv}>Goedkoopste eerst</button>
            <button onClick={sortBySportsReady}>Meest geschikt voor sport eerst</button>
            <button onClick={sortByScreenSize}>Sorteren op schermgrootte</button>
        </div>
        <div>
            {inventory.map((tvItem, index) => (
                <div key={index} className="outer-tv-container">
                        <span className="tv-image-wrapper">
                            {isOutOfStock(tvItem) ? (
                                <img className="tv-image" src={outOfStockImg} alt={"out-of-stock"}/>
                            ) : (
                                <img className="tv-image" src={tvItem.sourceImg} alt={"inventory-tv"}/>
                            )}
                        </span>
                    <article className="inner-tv-container">
                        <h1>{tvDescription(tvItem)}</h1>
                        <h2>{tvPrice(tvItem)}</h2>
                        <h3>{calAvailableSizes(tvItem)}</h3>
                        <div className="features-container">
                            <ul>
                                {tvItem.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        {option.applicable ? (
                                            <span>
                                                <img className="icon" src={check} alt="check"/>
                                                {option.name}
                                            </span> ) : (
                                            <span>
                                                <img className="icon" src={minus} alt="minus"/>
                                                {option.name}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                </div>
            ))}
        </div>
    </main>)
}

export default App