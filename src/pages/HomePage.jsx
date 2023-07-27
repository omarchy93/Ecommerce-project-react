import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Layout from "../layout/Layout";
import { productList } from "../apiRequest/api";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await productList();
      setData(res.data);
    })();
  });
  return (
    <div>
      <Layout>
        {data.length > 0 ? <ProductCard data={data} /> : "its loading...."}
      </Layout>
    </div>
  );
};

export default HomePage;
