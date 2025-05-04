import styles from './ProductCard.module.css';

export function ProductCard({ product, background = "yellow", clickEvent }) {

    let updatedStockCount = product.stockCount;

    function handleClick() {
        updatedStockCount = updatedStockCount - 1;
        clickEvent(product);
        console.log('updatedStockCount', updatedStockCount);
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
            <p>{product.specs[0]}</p>
            <p>${product.price}</p>
            <Status stockCount={updatedStockCount} />
            {updatedStockCount > 0 && (< button onClick={handleClick}>Add to Cart</button>)}

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

