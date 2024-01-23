import { useState, useEffect, useRef, createElement } from "react";
import { fetchItemName } from "@/utility";

function ItemForm() {
  const [item, setItem] = useState("");
  const [datalist, setDatalist] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const assignData = async () => {
      const data = await fetchItemName(item, signal);
      setDatalist(data);
    };
    assignData();

    return () => {
      controller.abort();
    };
  }, [item]);

  return (
    <div className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 mb-5">
          <form
            action="/pantry"
            method="post"
            className="flex flex-col items-start"
          >
            <label htmlFor="name" className="font-bold">
              Item Name:
            </label>
            <input
              id="name"
              name="name"
              list="items"
              className="mb-2 border border-gray-400 rounded-lg"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              autoComplete="false"
            />

            <datalist id="items">
              {datalist.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </datalist>

            <label htmlFor="amount" className="font-bold">
              Qty:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="mb-2 border border-gray-400 rounded-lg"
            />
            <button
              type="submit"
              className="h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm transition font-bold"
            >
              Add +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ItemForm;
