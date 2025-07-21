import { useState } from "react";
import "../css/shopComponent.css";
import merch1 from "../images/merch1.png";
import merch2 from "../images/merch2.png";
import { useNavigate } from "react-router-dom";

const ShopComponent = () => {
  const sizes = ["S", "M", "L", "XL"];
  const [selectSize, setSelectSize] = useState(new Array(3).fill(false));
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const current_products = [
    {
      id: 1,
      source: merch1,
      name: "'25-26 Hoodie",
      price: "$39.99",
      quantity: 0,
      productSize: "Size",
    },
    {
      id: 2,
      source: merch2,
      name: "'24-25 Hoodie",
      price: "$49.99",
      quantity: 0,
      productSize: "Size",
    },
    {
      id: 3,
      source: merch1,
      name: "'23-24 Hoodie",
      price: "$39.99",
      quantity: 0,
      productSize: "Size",
    },
  ];
  const [products, setProducts] = useState(current_products);

  /**
   * Make the products come from local storage, that way the product size
   * and the quantity will be saved permanently, and won't disappear on reload
   * No reason to worry about local storage being empty, and products not being
   * displayed as in this component, the user can't remove any products
   * The useEffect just has to run in the very beginning, so products can be
   * retrieved from it
  */

  const handleCartClick = () => {
    const sendData = products.filter((product) => product.quantity !== 0);
    localStorage.setItem("cartItems", JSON.stringify(sendData));
    navigate("/cart");
  };

  const handleAddToCart = (product) => {
    if (product.productSize === "Size") {
      alert("Please select a size first");
      return;
    }

    setProducts(products.map(currProduct => {
      return currProduct.name === product.name ? 
        { ...product, quantity: currProduct.quantity + 1 } :
        currProduct;
    }))

    setTotal(prevTotal => prevTotal + 1);
  };

  const handleSizeSelection = (name, prodSize) => {
    setProducts(products.map(product => {
      return product.name === name ? 
        {...product, productSize: prodSize} : 
          product
    }))
  };

  return (
    <>
      <div className="outer-div-shop">
        <div className="inner-div-shop">
          <div className="header-cart">
            <h2 className="shop-header">Shop our Merch!</h2>
            <div className="cart-shop">
              <button onClick={handleCartClick} className="cart-shop-btn">
                {total > 0 && <div className="cart-circle">{total}</div>}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  width="48px"
                  height="48px"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.7c.72 0 1.34-.38 1.66-.97l3.86-7.73c.27-.53.08-1.17-.43-1.47-.51-.3-1.17-.13-1.49.38L16.5 10H7.3L6.27 8H2V6h4.38L9.4 12l-1.14 2.03c-.2.36-.07.82.32 1.03.39.21.85.07 1.06-.27l1.38-2.47H16.5l3.53-7H7.27l-.94-2H1V2h5.21l1.61 3.4L7.16 14z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="products-outer">
            {products.map((product, index1) => (
              <div className="products-inner">
                <img
                  className="shop-product-img"
                  src={product.source}
                  alt="merch1"
                />
                <h3 className="product-name">{product.name}</h3>
                <h3 className="product-price">{product.price}</h3>
                <div className="toggle-amount-merch">
                  <button
                    className="add-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                  <div className="size-arrow">
                    {!selectSize[index1] && (
                      <>
                        <button
                          className="merch-size"
                          onClick={() => {
                            setSelectSize(prevSize => {
                              const updated = [...prevSize];
                              updated[index1] = true;
                              return updated
                            });
                          }}
                        >
                          {product.productSize}
                        </button>
                      </>
                    )}
                    {selectSize[index1] && (
                      <div className="size-selection">
                        <div className="line">----</div>
                        {sizes.map((uniqueSize) => (
                          <>
                            <div
                              className="size-options"
                              onClick={() => {
                                handleSizeSelection(product.name, uniqueSize);
                                setSelectSize(prevSize => {
                                  const updated = [...prevSize];
                                  updated[index1] = false;
                                  return updated
                                });
                              }}
                            >
                              {uniqueSize}
                            </div>
                            <div className="line">----</div>
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopComponent;
