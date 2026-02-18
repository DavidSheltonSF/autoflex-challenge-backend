export async function fetchDeleteCommodity(id: string) {
  const response = await fetch(`http://localhost:3002/commodities/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.log(errorText);
    throw Error(errorText);
  }

  const json = await response.json();
  return json.data;
}
