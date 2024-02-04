import './App.css';
import {inventory, bestSellingTv} from "./constants/inventory.js";
import tvDescription from "./helpers/tvDescription.js";
import tvPrice from "./helpers/tvPrice.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import techItEasy from "./assets/tech_it_easy.png"
import totalSold from "./helpers/TotalSold.js";
import totalPurchased from "./helpers/TotalPurchased.js";
import totalStock from "./helpers/TotalStock.js";
import calAvailableSizes from "./helpers/screenSize.js";
import "./constants/oefenInventory.js";

function App() {
    const handleClick = (event) => {
        console.log(event.target.innerText);
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
        <div className="outer-tv-container">
                    <span className="tv-image-wrapper">
                            <img className="tv-image" src={bestSellingTv.sourceImg} alt={"bestselling-tv"}/>
                    </span>
            <article className="inner-tv-container">
                <h1>{tvDescription(bestSellingTv)}</h1>
                <h2>{tvPrice(bestSellingTv)}</h2>
                <h3>{calAvailableSizes(bestSellingTv)}</h3>
                <div className="features-container">
                    <img className="icon" src={check}/><p>wifi</p>
                    <img className="icon" src={minus}/><p>speech</p>
                    <img className="icon" src={check}/><p>hdr</p>
                    <img className="icon" src={check}/><p>bluetooth</p>
                    <img className="icon" src={minus}/><p>ambilight</p>
                </div>
            </article>
        </div>
        <div className="buttons-container">
            <button onClick={handleClick}>Meest verkocht eerst</button>
            <button onClick={handleClick}>Goedkoopste eerst</button>
            <button onClick={handleClick}>Meest geschikt voor sport eerst</button>
        </div>
        {/*<article>*/}
        {/*    <ul>*/}
        {/*        {inventory.map((inventoryList) => (<li key={inventoryList.type}>{inventoryList.brand}</li>))}*/}
        {/*    </ul>*/}
        {/*</article>*/}
        <div>
            {inventory.map((tvItem, index) => (
                <div key={index} className="outer-tv-container">
                        <span className="tv-image-wrapper">
                            <img className="tv-image" src={tvItem.sourceImg} alt={"inventory-tv"}/>
                        </span>
                    <article className="inner-tv-container">
                        <h1>{tvDescription(tvItem)}</h1>
                        <h2>{tvPrice(tvItem)}</h2>
                        <h3>{calAvailableSizes(tvItem)}</h3>
                        <div className="features-container">
                            <ul>
                                {tvItem.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        {option.name}
                                        {optionIndex < option.length - 1 && ', '}
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


{/*<article className="inner-tv-container">*/
}
{/*<h1>{tvDescription(bestSellingTv)}</h1>*/
}
{/*<h2>{tvPrice(bestSellingTv)}</h2>*/
}
{/*<h3>{calAvailableSizes(bestSellingTv)}</h3>*/
}
{/*<div className="features-container">*/
}
{/*    <img className="icon" src={check}/><p>wifi</p>*/
}
{/*    <img className="icon" src={minus}/><p>speech</p>*/
}
{/*    <img className="icon" src={check}/><p>hdr</p>*/
}
{/*    <img className="icon" src={check}/><p>bluetooth</p>*/
}
{/*    <img className="icon" src={minus}/><p>ambilight</p>*/
}
{/*</div>*/
}
{/*</article>*/
}