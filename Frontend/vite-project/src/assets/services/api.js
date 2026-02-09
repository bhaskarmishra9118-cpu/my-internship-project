export const getProducts = async () => {
  await fetch("http://localhost:3000/products");
  return responce.json();
}