import React from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div className="flex items-center h-auto justify-center mt-8 gap-3 flex-wrap">
      <Link to={`/view-product/1`}>
        <Card
          name={"product"}
          productImage={
            "https://m.media-amazon.com/images/I/710CU6ANgmL._SL1500_.jpg"
          }
          price={"200"}
        />
      </Link>
      <Card
        name={"product"}
        productImage={
          "https://m.media-amazon.com/images/I/710CU6ANgmL._SL1500_.jpg"
        }
        price={"200"}
      />
      <Card
        name={"product"}
        productImage={
          "https://m.media-amazon.com/images/I/710CU6ANgmL._SL1500_.jpg"
        }
        price={"200"}
      />
      <Card
        name={"product"}
        productImage={
          "https://m.media-amazon.com/images/I/710CU6ANgmL._SL1500_.jpg"
        }
        price={"200"}
      />
      <Card
        name={"product"}
        productImage={
          "https://m.media-amazon.com/images/I/710CU6ANgmL._SL1500_.jpg"
        }
        price={"200"}
      />
      <Card
        name={"product"}
        productImage={
          "https://m.media-amazon.com/images/I/710CU6ANgmL._SL1500_.jpg"
        }
        price={"200"}
      />
      <Card
        name={"product"}
        productImage={
          "https://m.media-amazon.com/images/I/710CU6ANgmL._SL1500_.jpg"
        }
        price={"200"}
      />
      <Card
        name={"product"}
        productImage={
          "https://m.media-amazon.com/images/I/710CU6ANgmL._SL1500_.jpg"
        }
        price={"200"}
      />
    </div>
  );
}

export default AdminHome;
