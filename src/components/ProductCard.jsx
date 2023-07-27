import { useNavigate } from "react-router-dom";
import { createCard } from "../apiRequest/api";

const ProductCard = ({ data }) => {
  const navigator = useNavigate();
  const addToCard = (id) => {
    if (localStorage.getItem("token") == null) {
      console.log("before");
      navigator(`/login`);
      navigator(0);
      console.log("after");
    } else {
      (async () => {
        let res = await createCard(id);
        res ? alert("add to card") : alert("not add to card");
      })();
    }
  };
  return (
    <div>
      <div className="grid gap-x-3 gap-y-4 grid-cols-4">
        {data.map((item, index) => {
          return (
            <div key={index.toString()} to={"/"}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.short_des}</p>
                  <p className="font-extrabold text-lg">${item.price}</p>

                  <div className="card-actions">
                    <button
                      onClick={() => addToCard(item.id)}
                      className="btn btn-primary"
                    >
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
