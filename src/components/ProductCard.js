


export function ProductCard(props) {


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
                width: "100%",
                textAlign: "center"

            }}>
            <img src={props.product.imageSrc} alt="Product" className='product-image' />
            <h2>{productChecker(props.product.name)}</h2>
            <p>{props.product.specs[0]}</p>
            <p>{props.product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}