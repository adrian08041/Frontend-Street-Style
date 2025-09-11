import { data } from "@/data";
import { ProductList } from "../ui/product-list";

export const MostViewedProducts = async () => {
  let products;

  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center md:text-left">
        Produtos mais vistos
      </h2>
      <p className="text-gray-500 text-center md:text-left">
        Campeões de visualização da nossa loja.
      </p>
      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  );
};

