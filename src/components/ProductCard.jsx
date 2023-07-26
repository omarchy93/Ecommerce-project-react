import { Link } from "react-router-dom";

//
const ProductCard = ({ data }) => {
  return (
    <div>
      <div className="grid gap-x-3 gap-y-4 grid-cols-4">
        {data.map((item, index) => {
          return (
            <Link key={index.toString()} to={"/"}>
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
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
