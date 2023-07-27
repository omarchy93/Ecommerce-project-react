import React, { useEffect, useState } from "react";

import Layout from "../layout/Layout";
import { CardList, removeItemCard } from "../apiRequest/api";
import { useNavigate } from "react-router-dom";

const CardPage = () => {
  const [list, setList] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    (async () => {
      let res = await CardList();

      setList(res.data);
    })();
  });
  const removeCard = (product_id) => {
    if (localStorage.getItem("token") == null) {
      navigator(`/login`);
      navigator(0);
    } else {
      (async () => {
        let res = await removeItemCard(product_id);

        res ? alert("remove form card") : alert("not remove form card");
      })();
    }
  };
  return (
    <Layout>
      <div>
        <div className="grid gap-x-3 gap-y-4 grid-cols-4">
          {list.map((item, index) => {
            return (
              <div key={index.toString()} to={"/"}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.product.title}</h2>
                    <p>{item.product.short_des}</p>
                    <p className="font-extrabold text-lg">
                      ${item.product.price}
                    </p>

                    <div className="card-actions">
                      <button
                        onClick={() => removeCard(item.product.id)}
                        className="btn btn-primary"
                      >
                        Remove Card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CardPage;
