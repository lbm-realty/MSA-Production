import "../css/cart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const retreivedItems = localStorage.getItem("cartItems");
  const items =
    retreivedItems !== "undefined" ? JSON.parse(retreivedItems) : null;
  const [products, setProducts] = useState(items);

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
          var currPrice = product.price.slice(1) * product.quantity;
          sum += currPrice;
        })
      : (sum = 0);
    return sum;
  };

  const tax = ((8.25 / 100) * calcTotalAmount()).toFixed(2);
  const grandtotal = Number(tax) + Number(calcTotalAmount());

  return (
    <div className="cart-outer">
      {products ? (
        products.length > 0 ? (
          <div className="cart-full">
            <div className="cart-inner">
              <h3 className="cart-header">Your Items</h3>
              {products.map(
                (item, index) =>
                  item.quantity > 0 && (
                    <div className="cart-items">
                      <div className="">
                        <img
                          className="cart-product-img"
                          src={item.source}
                          alt="merch1"
                        />
                      </div>
                      <div className="item-name-quant">
                        <h2 className="cart-item-name">{item.name}</h2>
                        <div className="quant-inc-btn">
                          <button
                            className="cart-quant-inc-btn"
                            onClick={() => handleClickDecrease(item.name)}
                          >
                            -
                          </button>
                          <h5 className="quant-1">Qty</h5>
                          <h5 className="quant-2">{item.quantity}</h5>
                          <button
                            className="cart-quant-dec-btn"
                            onClick={() => handleClickIncrease(item.name)}
                          >
                            +
                          </button>
                        </div>
                        <div className="size-display">
                          Size: {products[index].productSize}
                        </div>
                        <div
                          className="remove-item"
                          onClick={() => removeItem(item)}
                        >
                          Remove Item
                        </div>
                      </div>
                      <div className="middle-element">
                        <div className="shipping-arrives">
                          <div className="green-circle">
                            <div className="green"></div>
                          </div>
                          <div className="ship-arrive">
                            <h3 className="ship">Shipping</h3>
                            <h3 className="arrive">
                              Arriving by: Monday, 13th March
                            </h3>
                          </div>
                        </div>
                        <h2 className="cart-note">
                          If you decide to cancel your order, please let us know
                          at texastechmsa@gmail.com
                        </h2>
                      </div>
                      <h2 className="item-price">{item.price}</h2>
                    </div>
                  )
              )}
            </div>
            <div className="order-summary">
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
                <div className="checkout-div">
                  <button onClick={() => navigate("/checkout")} className="checkout">Checkout</button>
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
