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
        <h1>Begin hier met met maken van de applicatie!</h1>
            <p>Het totale aantal verkocht is:</p><p className={"soldCount"}>{soldCount}</p>
            <p>Het totale aantal ingekochte tv's is:</p><p className={"purchasedCount"}>{purchasedCount}</p>
            <p>Het totale nog te verkopen tv's is:</p><p className={"totalStock"}>{totalStock}</p>
            <p>{tvDescription}</p>
            <p>{tvPrice}</p>
            <p>{screenSize}</p>

            <div className="outer-container">
                <img src={bestSellingTv.sourceImg} alt={"bestselling-tv"}/>
                <article className="inner-container">
                    <p>{tvDescription}</p>
                    <p>{tvPrice}</p>
                    <p>{screenSize}</p>
                    <div className="feature-buttons">
                        <img className="buttons" src={check}/><p>wifi</p>
                        <img className="buttons" src={minus}/><p>speech</p>
                        <img className="buttons" src={check}/><p>hdr</p>
                        <img className="buttons" src={check}/><p>bluetooth</p>
                        <img className="buttons" src={minus}/><p>ambilight</p>
                    </div>
                    <button onClick={handleClick}>Meest verkocht eerst</button>
                    <button onClick={handleClick}>Goedkoopste eerst</button>
                    <button onClick={handleClick}>Meest geschikt voor sport eerst</button>
                </article>
            </div>
        </>
    )
}

export default App