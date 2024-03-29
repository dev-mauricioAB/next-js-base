import { IPagedProducts } from "@/models/paged-products";

async function getProducts(): Promise<IPagedProducts> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: "no-store",
  });

  return response.json();
}

export async function ProductsList() {
  const { products } = await getProducts();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>Name: {product.name}</h2>
        </div>
      ))}
    </div>
  );
}
