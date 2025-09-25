import { useState } from "react";
import "../css/shopComponent.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ShopComponent = () => {
  const sizes = ["S", "M", "L", "XL"];
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [selectSize, setSelectSize] = useState(
    new Array(products.length).fill("")
  );
  const [isSizeOpen, setIsSizeOpen] = useState(
    new Array(products.length).fill(false)
  );
  const [added, setAdded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [outOfStock, setOutOfStock] = useState(
    new Array(products.length).fill(false)
  );
  const [cartProduct, setCartProduct] = useState([]);

  /**
   * Make the products come from local storage, that way the product size
   * and the quantity will be saved permanently, and won't disappear on reload
   * No reason to worry about local storage being empty, and products not being
   * displayed as in this component, the user can't remove any products
   * The useEffect just has to run in the beginning, so products can be
   * retrieved from it
   */

  useEffect(() => {
    setSelectSize(new Array(products.length).fill(""));
    setIsSizeOpen(new Array(products.length).fill(false));
    setOutOfStock(new Array(products.length).fill(false));
    setCartProduct(new Array(products.length).fill({
    id: "",
    name: "",
    price: null,
    size: "",
    quantity: 0,
  }));
  
  }, [products])

  useEffect(() => {
    setIsSizeOpen(isSizeOpen);
    setSelectSize(selectSize);

  }, [isSizeOpen, selectSize]);

  useEffect(() => {
    const fetchMerch = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_PRODUCTION}/all-merch`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const res = await response.json();

        if (response.ok) {
          setProducts(res);
        } else alert(res);
      } catch (err) {
        alert(err);
      }
    };

    fetchMerch();
  }, []);

  const handleCartClick = () => {
    const cartItems = cartProduct.filter((prod) => prod.quantity !== 0)
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate("/cart");
  };

  const handleAddToCart = (index, product) => {
    if (selectSize[index].trim().length < 1) {
      alert("Please select a size first");
      return;
    }

    setCartProduct((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        id: product._id,
        name: product.name,
        price: product.price,
        size: selectSize[index],
        quantity: updated[index].quantity + 1 
      }
      return updated;
    });

    setTotal((prevTotal) => prevTotal + 1);
    handleShowMessage();
  };

  const handleShowMessage = () => {
    setAdded(true);
    setTimeout(() => setVisible(true), 50);

    setTimeout(() => setVisible(false), 600);
    setTimeout(() => setAdded(false), 1000);
  };

  const handleSizeSelection = (product, index1, chosenSize) => {
    const isOut = product.amount.some(
      (a) => a.size === chosenSize && a.stock === 0
    );
    setOutOfStock((prev) => ({ ...prev, [index1]: isOut }));
  };

  return (
    <>
      <div className="px-6 py-32 text-white bg-black flex justify-center">
        {added && (
          <div
            className={`fixed ease-in-out top-1/2 left-1/2 -translate-x-1/2 
                          -translate-y-1/2  bg-gray-400 px-6 py-3 rounded-full
                          transition-opacity duration-700 ${
                            visible ? "opacity-100" : "opacity-0"
                          }`}
          >
            <p className="text-black font-bold text-xl">Item added!</p>
          </div>
        )}
        <div className="mt-20 bg-gray-900/45 p-4">
          <div className="flex justify-between sm:justify-around items-center">
            <p className="bg-red-800/65 font-bold text-3xl p-2">
              Shop our Merch!
            </p>
            <div className="bg-red-800/65">
              <button onClick={handleCartClick} className="text-xl">
                {total > 0 && (
                  <div className="bg-gray-100 rounded-full absolute ml-10 px-2 text-black">
                    {total}
                  </div>
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
          <div className="flex flex-col gap-4 sm:flex-row justify-center items-center py-8 px-2">
            {products.map((product, index1) => (
              <div className="p-4 bg-gray-700/20 gap-2 flex flex-col items-center w-full">
                <img
                  className="sm:h-80 sm:w-64"
                  src={`${process.env.REACT_APP_PRODUCTION}/merch/${product._id}/image`}
                  alt="merch1"
                />
                <p className="text-2xl">{product.name}</p>
                <p className="text-2xl">${product.price}</p>
                <div className="flex gap-3 items-center justify-center">
                  <button
                    className={`${outOfStock[index1] ? "bg-gray-200/70" : "bg-gray-100"} px-2 text-xl rounded-md text-black`}
                    onClick={!outOfStock[index1] ? (() => {
                      handleAddToCart(index1, product);
                    }) : (() => null)
                  }
                  >
                    Add to cart
                  </button>
                  <div className="bg-gray-100 rounded-md text-black items-center">
                    {!isSizeOpen[index1] && (
                      <>
                        <button
                          className="text-black text-xl px-2"
                          onClick={() => {
                            setIsSizeOpen((prev) => ({
                              ...prev,
                              [index1]: !prev[index1],
                            }));
                          }}
                        >
                          {selectSize[index1] ? selectSize[index1] : "Size"}
                        </button>
                      </>
                    )}
                    {isSizeOpen[index1] && (
                      <div className="p-3">
                        <div className="text-black"></div>
                        {sizes.map((uniqueSize) => (
                          <>
                            <div
                              className="flex flex-col cursor-pointer items-center"
                              onClick={() => {
                                // handleSizeSelection(product.name, uniqueSize);
                                setSelectSize((prev) => ({
                                  ...prev,
                                  [index1]: uniqueSize,
                                }));
                                setIsSizeOpen((prev) => ({
                                  ...prev,
                                  [index1]: !prev[index1],
                                }));
                                handleSizeSelection(product, index1, uniqueSize);
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
                {outOfStock[index1] && (
                  <div className="px-2 py-1 mt-1 text-red-700 border-[1.5px] border-red-800 rounded-lg">
                    <p>Out of Stock</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopComponent;

// import { motion } from "framer-motion";

// const ShopComponent = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <div className="text-center mt-14 sm:mt-20 px-6">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
//           Our <span className="text-red-600">Exclusive</span> merch is 
//           <span className="block text-red-500 animate-pulse mt-2">dropping soon!</span>.
//         </h1>
//         <p className="text-gray-400 text-lg md:text-xl mt-2">Watch this space</p>
//         <div className="mt-6 w-40 mx-auto h-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
//       </div>
//     </div>
//   )  
// };

// export default ShopComponent;