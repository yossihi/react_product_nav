import React, { useEffect, useState } from "react";
import { getAllProd } from "./data";
import Cart from "./Cart";
import MyContext from "./MyContext";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [userCart, setuserCart] = useState(
    JSON.parse(localStorage.getItem("userCart")) || []
  );

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("userCart")) || [];
    setuserCart(storedCart);

    setproducts(getAllProd());
  }, []);

  useEffect(() => {
    localStorage.setItem("userCart", JSON.stringify(userCart));
  }, [userCart]);

  return (
    <div style={{ display: "flex", backgroundColor: 'inherit',
    padding: '18px'}}>
      <MyContext.Provider value={{ products, userCart, setuserCart }}>
        <div style={{
          minWidth: '240px',
        }}>
          <Cart />
        </div>
      </MyContext.Provider>
      <div className="container mt-4">
        <div style={{
        justifyContent: 'space-around',
        minWidth: '550px',
        maxHeight: '500px',
        overflowX: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
        }}>
          {products.map((prod) => (
            <div key={prod.id} className="col-md-4 mb-4">
              <div
                className="card"
                style={{
                  display: "flex",
                  width: "200px",
                  backgroundImage: `url(${prod.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="card-body" style={{color: 'white'}}>
                  <h5 className="card-title" style={{ WebkitTextStroke: ' 0.6px black', fontWeight: '800'}}>{prod.desc}</h5>
                  <p className="card-text">Price: ${prod.price}</p>
                </div>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    const index = userCart.findIndex(
                      (item) => item.id === prod.id
                    );

                    if (index !== -1) {
                      const updatedCart = [...userCart];
                      updatedCart[index].quantity += 1;
                      setuserCart(updatedCart);
                    } else {
                      setuserCart((prevList) => [
                        ...prevList,
                        { ...prod, quantity: 1 },
                      ]);
                    }
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
