export async function fetchItemName(string, signal) {
  const res = await fetch(`/api/autocomplete?string=${string}`, {
    signal,
  });
  const data = await res.json();
  return data;
}
