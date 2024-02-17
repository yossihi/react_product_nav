import React, { useContext, useEffect, useState } from "react";
import MyContext from "./MyContext";
import Total from "./Total";

const Cart = () => {
  const { userCart, setuserCart } = useContext(MyContext);
  const [prodNum, setProdNum] = useState(0);

  useEffect(() => {
    let total = 0;
    userCart.forEach((element) => {
      total += element.quantity;
    });
    setProdNum(total);
  }, [userCart]);

  const handleDelete = (productId) => {
    const updatedCart = userCart
      .map((product) => {
        if (product.id === productId) {
          if (product.quantity > 0) {
            return { ...product, quantity: product.quantity - 1 };
          }
        }
        return product;
      })
      .filter((product) => product.quantity > 0);

    setuserCart(updatedCart);
  };

  return (
    <div>
      <p class="d-inline-flex gap-1">
        <button
          className="btn btn-success collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          My Cart: {prodNum}
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body" style={{maxHeight: '450px', overflowX: 'auto',border: '1px solid',borderRadius: '18px'}}>
          <h5>{prodNum} products</h5>
          {Object.keys(userCart).map((productId) => {
            const product = userCart[productId];
            return (
              <div
                key={productId}
                style={{
                  border: "1px solid",
                  borderRadius: "8px",
                  margin: "10px",
                  padding: "5px",
                }}
              >
                <p>
                  Description: {product.desc}
                  <br />
                  Price: ${product.price}
                  <br />
                  Quantity: {product.quantity}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Del
                </button>
              </div>
            );
          })}
          <Total/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
