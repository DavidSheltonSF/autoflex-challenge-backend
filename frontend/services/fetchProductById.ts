export async function fetchProductById(id: string) {
  const response = await fetch(`http://localhost:3002/products/${id}`);

  if (!response.ok) {
    const errorText = await response.text();
    console.log(errorText);
    throw Error(errorText);
  }

  const json = await response.json();
  return json.data;
}
