


export function ProductCard({ product, background = "cyan", ...restProps }) {


    function productChecker(name) {
        return name;
    }

    function eventHandler(product) {
        alert(`you clicked ${product.name} the price is $${product.price}`);
    }

    // const style = {
    //     border: "1px solid white",
    //     borderRadius: "10px",
    //     padding: "10px",
    //     width: "200px",
    //     textAlign: "center"

    // }

    return (
        <div className="product-card"
            style={{
                background,
                border: "1px solid white",
                borderRadius: "10px",
                padding: "10px",
                width: "100%",
                textAlign: "center"

            }}>
            <img src={product.imageSrc} alt="Product" className='product-image' style={{ ...restProps }} />
            <h2>{productChecker(product.name)}</h2>
            <p>{product.specs[0]}</p>
            <p>{product.price}</p>
            <button onClick={() => eventHandler(product)}>Add to Cart</button>
        </div>
    );
}