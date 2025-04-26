


export function ProductCard() {

    const product = {
        imageSrc: "/images/iphone-5.png",
        name: "prodct name",
        specs: ["long battery life", "great camera", "fast processor"],
        price: 100
    };

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
        <div className="product-card"
            style={{
                border: "1px solid white",
                borderRadius: "10px",
                padding: "10px",
                width: "200px",
                textAlign: "center"

            }}>
            <img src={product.imageSrc} alt="Product" className='product-image' />
            <h2>{productChecker(product.name)}</h2>
            <p>{product.specs[0]}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}