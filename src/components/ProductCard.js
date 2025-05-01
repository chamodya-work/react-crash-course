


export function ProductCard({ product, background = "cyan", clickEvent }) {


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
                background,
                border: "1px solid white",
                borderRadius: "10px",
                padding: "10px",
                width: "100%",
                textAlign: "center",
                color: "black"

            }}>
            <img src={product.imageSrc} alt="Product" className='product-image' width={100} height={200} />
            <h2>{productChecker(product.name)}</h2>
            <p>{product.specs[0]}</p>
            <p>${product.price}</p>
            <button onClick={() => clickEvent(product)}>Add to Cart</button>
        </div>
    );
}