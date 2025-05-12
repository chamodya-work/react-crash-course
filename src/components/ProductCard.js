import styles from './ProductCard.module.css';
import { use, useState } from 'react';

export function ProductCard({ product, background = "yellow", clickEvent }) {

    const [updatedStockCount, setStockCount] = useState(product.stockCount);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setStockCount(prevUpdateCount => prevUpdateCount - 1);//callBack function use for safer
        clickEvent(product);
    }
    function handleTwoClick() {
        setStockCount(prevStockCount => prevStockCount - 1);
        setStockCount(prevStockCount => prevStockCount - 1);//callback function

    }



    function productChecker(name) {
        return name;
    }



    // const style = {
    //     border: "1px solid white",
    //     borderRadius: "10px",
    //     padding: "10px",
    //     width: "200px",
    //     textAlign: "center"

    // }

    return (

        <div className={styles.container} style={{ background: "yellow" }}>
            <img src={product.imageSrc} alt="Product" className='product-image' width={100} height={200} />
            <h2>{productChecker(product.name)}</h2>
            <p><b>SPECIFICATION </b><button className={styles.specButton} onClick={() => setShowMore(!showMore)}>{showMore ? "show" : "hide"}</button></p>

            {!showMore &&
                <div>
                    <p>{product.specs[0]}</p>
                    <p>${product.price}</p>
                </div>
            }

            <Status stockCount={updatedStockCount} />
            {updatedStockCount > 0 && (< button onClick={handleClick}>Add to Cart</button>)}
            {updatedStockCount > 1 && (<button onClick={handleTwoClick}>Add two items</button>)}

        </div>
    );


}

function Status({ stockCount }) {
    const notAvailableTemplate = <p className={styles.availableTemplate}>Not available</p>;
    const availableTemplate = <p className={styles.notAvailableTemplate}> {stockCount} items available</p>;

    return (
        stockCount === 0 ? notAvailableTemplate : availableTemplate

    );

}

