import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = ({ products }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products products={products} />
    </>
  );
};

export default Home;
