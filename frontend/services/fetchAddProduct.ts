export async function fetchAddProduct(formData: FormData) {
  const code = formData.get('code');
  const name = formData.get('name');
  const price = formData.get('price');

  const response = await fetch('http://localhost:3002/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, name, price }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.log(errorText);
    throw Error(errorText);
  }

  const json = await response.json();
  return json.data;
}
