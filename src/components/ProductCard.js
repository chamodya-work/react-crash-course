import './ProductCard.css';

export function ProductCard({ product, background = "yellow", clickEvent }) {


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

        <div className="container" style={{ background: "yellow" }}>
            <img src={product.imageSrc} alt="Product" className='product-image' width={100} height={200} />
            <h2>{productChecker(product.name)}</h2>
            <p>{product.specs[0]}</p>
            <p>${product.price}</p>
            <Status stockCount={product.stockCount} />
            {product.stockCount > 0 && (< button onClick={() => clickEvent(product)}>Add to Cart</button>)}

        </div>
    );


}

function Status({ stockCount }) {
    const notAvailableTemplate = <p className='availableTemplate'>Not available</p>;
    const availableTemplate = <p className='notAvailableTemplate'> {stockCount} items available</p>;

    return (
        stockCount === 0 ? notAvailableTemplate : availableTemplate
    );

}

