import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((Response) => Response.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </Layout>
  );
};

export default Home;
