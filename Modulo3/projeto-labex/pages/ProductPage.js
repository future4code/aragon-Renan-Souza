import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProductPage() {
  const { id } = useParams();

  return (
    <section>
      <Header />
      <h1>Página do produto {id}</h1>
    </section>
  );
}

export default ProductPage;
