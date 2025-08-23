import "../css/cart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const retreivedItems = localStorage.getItem("cartItems");
  const items =
    retreivedItems !== "undefined" ? JSON.parse(retreivedItems) : null;
  const [products, setProducts] = useState(items);
  const currDate = new Date();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(products));
  }, [products]);

  const handleClickIncrease = (name) => {
    setProducts(
      products.map((prevProd) => {
        return prevProd.name === name
          ? { ...prevProd, quantity: prevProd.quantity + 1 }
          : prevProd;
      })
    );
  };

  const handleClickDecrease = (name) => {
    setProducts(
      products.map((prevProd) => {
        return prevProd.name === name
          ? prevProd.quantity === 1
            ? { ...prevProd, quantity: 1 }
            : { ...prevProd, quantity: prevProd.quantity - 1 }
          : prevProd;
      })
    );
  };

  const removeItem = (product) => {
    setProducts((prevProds) => {
      prevProds.filter((item) => item.name !== product.name);
    });
  };

  const calcTotalQuant = () => {
    var total = 0;
    products
      ? products.forEach((product) => {
          total += product.quantity;
        })
      : (total = 0);
    return total;
  };

  const calcTotalAmount = () => {
    var sum = 0;
    products
      ? products.forEach((product) => {
          var currPrice = product.price * product.quantity;
          sum += currPrice;
        })
      : (sum = 0);
    return sum;
  };

  const tax = ((8.25 / 100) * calcTotalAmount()).toFixed(2);
  const grandtotal = Number(tax) + Number(calcTotalAmount());

  return (
    <div className="px-10 py-20 bg-black">
      {products ? (
        products.length > 0 ? (
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="mt-24 flex flex-col items-center text-white justify-center gap-4">
              <h3 className="bg-red-700/70 text-3xl p-2">Your Items</h3>
              {products.map(
                (item, index) =>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 p-3 border border-gray-400 rounded-2xl items-center justify-center">
                      <div className="flex justify-center">
                        <img
                          className="w-64 w-58"
                          src={`https://msa-production.onrender.com/merch/${item.id}/image`}
                          alt="merch"
                        />
                      </div>
                      <div className="flex gap-2 justify-center items-center flex-col">
                        <h5 className="text-2xl">{item.name}</h5>
                        <div className="flex gap-2 text-2xl sm:text-lg bg-gray-800 items-center justify-center border border-gray-700 rounded-full">
                            <p
                              className="text-xl cursor-pointer mb-1 border-r px-2"
                              onClick={() => handleClickDecrease(item.name)}
                            >
                              -
                            </p>
                          <h5 className="text-lg">Qty</h5>
                          <h5 className="text-lg">{item.quantity}</h5>
                          <p
                            className="text-xl mb-1 border-l cursor-pointer px-2"
                            onClick={() => handleClickIncrease(item.name)}
                          >
                            +
                          </p>
                        </div>
                        <h5 className="text-lg">
                          Size: {item.size}
                        </h5>
                        <div
                          className="bg-gray-200 cursor-pointer text-black px-2 py-1 rounded-full"
                          onClick={() => removeItem(item)}
                        >
                          Remove Item
                        </div>
                      </div>
                      <div className="px-8 sm:px-16">
                        <div className="flex items-start">
                          <div className="border-2 mt-1 border-green-600 p-2 rounded-full">
                          </div>
                          <div className="ship-arrive">
                            <h3 className="ship">Shipping</h3>
                            <h3 className="arrive">
                              Arriving by: {currDate.getDate() + 7}th {months[currDate.getMonth() - 1]}
                            </h3>
                          </div>
                        </div>
                        <h2 className="cart-note">
                         If you decide to cancel your order, please let us know
                          at texastechmsa@gmail.com
                        </h2>
                      </div>
                      <h2 className="item-price">${item.price}</h2>
                    </div>
              )}
            </div>
            <div className="flex flex-col sm:mt-24 text-white border border-gray-400 p-4 rounded-2xl">
              <h2 className="summary-header">Order Summary</h2>
              <div className="subtotal-container">
                <div className="subtotal-print">
                  <h2 className="subtotal-item">
                    Subtotal ({calcTotalQuant()})
                  </h2>
                  <h2 className="subtotal-item">
                    {" "}
                    {calcTotalAmount().toFixed(2)}
                  </h2>
                </div>
                <div className="subtotal-print">
                  <h2 className="subtotal-item">Shipping </h2>
                  <h2 className="subtotal-item">FREE </h2>
                </div>
                <div className="subtotal-print">
                  <h2 className="subtotal-item">Est Taxes</h2>
                  <h2 className="subtotal-item">{tax}</h2>
                </div>
                <div className="subtotal-print-calc">
                  <h2 className="subtotal-item-1">Total </h2>
                  <h2 className="subtotal-item-1">{grandtotal.toFixed(2)}</h2>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button onClick={() => {
                    localStorage.setItem("total", grandtotal);
                    navigate("/checkout")
                    }} className="px-2 py-1 border rounded-full hover:bg-gray-200 hover:text-black duration-300 hover:scale-105">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <h3 className="cart-header">Your cart is empty</h3>
          </div>
        )
      ) : (
        <div className="cart-empty">
          <h3 className="cart-header">Your cart is empty</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
