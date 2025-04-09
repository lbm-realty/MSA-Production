import { useEffect, useState } from "react";
import "../css/shopComponent.css";
import merch1 from "../images/merch1.png";
import merch2 from "../images/merch2.png";
import { useNavigate } from 'react-router-dom';

const ShopComponent = () => {
  const sizes = ["S", "M", "L", "XL"];
  const [selectSize, setSelectSize] = useState(new Array(3).fill(false));
  const [size, setSize] = useState(new Array(3).fill(""))
  const [amount, setAmount] = useState(new Array(3).fill(0))
  const [total, setTotal] = useState(0);
  // const [changed, setChanged] = useState(false);
  const navigate = useNavigate();

  const current_products = [
    {
      id: 1,
      source: merch1,
      name: "'25-26 Hoodie",
      price: "$39.99",
      quantity: 0,
      productSize: "" 
    },
    {
      id: 2,
      source: merch2,
      name: "'24-25 Hoodie",
      price: "$49.99",
      quantity: 0,
      productSize: "" 
    },
    {
      id: 3,
      source: merch1,
      name: "'23-24 Hoodie",
      price: "$39.99",
      quantity: 0,
      productSize: "" 
    },
  ];
  const [products, setProducts] = useState(current_products);

  useEffect(() => {
      setTotal(() => {
        return amount.reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0);
      })
      const updatedProducts = products.map((product, index) => ({
        ...product,
        quantity: amount[index],
        productSize: size[index]
      }));
      setProducts(updatedProducts)
  }, [amount, size, products]); 

  const handleCartClick = () => {
    setProducts(products);
    console.log(products);
    localStorage.setItem("cartItems", JSON.stringify(products));
    navigate("/cart");
  };
  const handleCartAmount = (index1) => {
    if (size[index1] === "") {
      alert("Please select a size");
      return;
    }
    setAmount((prevAmount) => {
      const newAmount = [...prevAmount];
      newAmount[index1] += 1
      return newAmount
    })
  }
  const handleSizeSelection = (index1, index, uniqueSize) => {
    setSize((prevSize) => {
      const currSize = [...prevSize];
      currSize[index1] = sizes[index];
      return currSize
    });
    setSelectSize((prevSize) => {
      const newSize = [...prevSize];
      newSize[index1] = !newSize[index1];
      return newSize
    })    
    console.log(selectSize);
  }
  
  return (
    <>
      <div className="outer-div-shop">
        <div className="inner-div-shop">
          <div className="header-cart">
            <h2 className="shop-header">Shop our Merch!</h2>
            <div className="cart-shop">
              <button
                onClick={handleCartClick}
                className="cart-shop-btn"
              >
                {total > 0 && (
                  <div className="cart-circle">{total}</div>
                )}
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
                  <button className="add-cart"
                    onClick={() => handleCartAmount(index1)}
                    >Add to cart</button>
                  <div className="size-arrow">
                    {!selectSize[index1] && (
                      <>
                    <button 
                      className="merch-size"
                      onClick={() => handleSizeSelection(index1)}
                      >Size
                      </button>
                      </>
                      )}
                    {selectSize[index1] && (
                      <div className="size-selection">
                        <div className="line">----</div>
                        {sizes.map((uniqueSize, index) => (
                        <>
                          <div className="size-options" onClick={() => handleSizeSelection(index1, index, uniqueSize)}>{uniqueSize}</div>
                          <div className="line">----</div>
                        </>
                      ))}
                      </div>
                    )}
                    {size[index1] && (
                        <div className="selected-size">{size[index1]}</div>
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
