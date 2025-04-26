


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

    return (
        <div className="product-card">
            <img src={product.imageSrc} alt="Product" className='product-image' />
            <h2>{productChecker(product.name)}</h2>
            <p>{product.specs[0]}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}