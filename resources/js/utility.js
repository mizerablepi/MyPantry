export async function fetchItemName(string, signal) {
  const res = await fetch(
    import.meta.env.VITE_API_ITEM_AUTOCOMPLETE_URL +
      `?apiKey=${import.meta.env.VITE_API_KEY}&query=${string}&number=5`,
    {
      signal,
    }
  );
  const data = await res.json();
  return data;
}
