import './App.css';
import {inventory, bestSellingTv} from "./constants/inventory.js";
import tvDescription from "./helpers/tvDescription.js";
import tvPrice from "./helpers/tvPrice.js";
import screenSize from "./helpers/screenSize.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import newTotalSold from "./helpers/newTotalSold.js";
import newTotalPurchased from "./helpers/newTotalPurchased.js";
import newTotalStock from "./helpers/newTotalStock.js";

function App() {

    const handleClick = (event) => {
        console.log(event.target.innerText);
    }

    return (
        <main className="page-container">
            <h1>Tech it easy dashboard</h1>
            <p>Verkoopoverzicht</p>
            <div className="outer-stats-container">
                <div className="sold-stat stats">
                    <p>Aantal verkochte producten</p>
                    <p className="soldCount">{newTotalSold(inventory)}</p>
                </div>
                <div className="purchased-stat stats">
                    <p>Aantal ingekochte producten</p>
                    <p className="purchasedCount">{newTotalPurchased(inventory)}</p>
                </div>
                <div className="stock-stat stats">
                    <p>Aantal te verkopen producten</p>
                    <p className="totalStock">{newTotalStock(inventory)}</p>
                </div>
            </div>
            <p>Best verkochte tv</p>
            <div className="outer-tv-container">
                    <span className="tv-image-wrapper">
                            <img className="tv-image" src={bestSellingTv.sourceImg} alt={"bestselling-tv"}/>
                    </span>
                <article className="inner-tv-container">
                    <h1>{tvDescription}</h1>
                    <h2>{tvPrice}</h2>
                    <h3>{screenSize}</h3>
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
        </main>
    )
}

export default App