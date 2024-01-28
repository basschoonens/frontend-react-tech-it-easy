import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import soldCount from "./helpers/totalSold.js";
import purchasedCount from "./helpers/totalPurchased.js";
import totalStock from "./helpers/totalStock.js";
import tvDescription from "./helpers/tvDescription.js";
import tvPrice from "./helpers/tvPrice.js";
import screenSize from "./helpers/screenSize.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {

        const handleClick = (event) => {
            console.log(event.target.innerText);
        }

    return (
        <>
        <h1>Tech it easy dashboard</h1>
            <p>Verkoopoverzicht</p>
            <div className="outer-stats-container">
                <div className="sold-stat">
                    <p>Aantal verkochte producten</p>
                    <p className={"soldCount"}>{soldCount}</p>
                </div>
                <div className="purchased-stat">
                    <p>Aantal ingekochte producten</p>
                    <p className={"purchasedCount"}>{purchasedCount}</p>
                </div>
                <div className="stock-stat">
                    <p>Aantal te verkopen producten</p>
                    <p className={"totalStock"}>{totalStock}</p>
                </div>
            </div>
            <p>Best verkochte tv</p>
            <div className="outer-container">
                <span className="tv-image-wrapper">
                        <img className="tv-image" src={bestSellingTv.sourceImg} alt={"bestselling-tv"}/>
                </span>
                    <article className="inner-container">
                        <h1>{tvDescription}</h1>
                        <h2>{tvPrice}</h2>
                        <h3>{screenSize}</h3>
                        <div className="feature-buttons">
                            <img className="buttons" src={check}/><p>wifi</p>
                            <img className="buttons" src={minus}/><p>speech</p>
                            <img className="buttons" src={check}/><p>hdr</p>
                            <img className="buttons" src={check}/><p>bluetooth</p>
                            <img className="buttons" src={minus}/><p>ambilight</p>
                        </div>
                    </article>
            </div>
            <button onClick={handleClick}>Meest verkocht eerst</button>
            <button onClick={handleClick}>Goedkoopste eerst</button>
            <button onClick={handleClick}>Meest geschikt voor sport eerst</button>
        </>
    )
}

export default App