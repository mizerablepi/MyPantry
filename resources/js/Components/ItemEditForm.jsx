import { useState, useEffect } from "react";
import { fetchItemName } from "@/utility";
import { useForm } from "@inertiajs/react";

function ItemForm({ token, item, errors }) {
  const { patch, data, setData } = useForm({
    amount: item.pivot.amount,
  });

  console.log(data);

  const submit = (e) => {
    e.preventDefault();
    patch(`/pantry/${item.id}`);
  };

  return (
    <div className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 mb-5">
          <form className="flex flex-col items-start" onSubmit={submit}>
            <input type="hidden" name="_token" value={token} />

            <label htmlFor="name" className="font-bold">
              Item Name:
            </label>
            <input
              id="name"
              name="name"
              list="items"
              className="mb-2 border border-gray-400 rounded-lg"
              value={item.name}
              readOnly
            />

            <label htmlFor="amount" className="font-bold">
              Qty:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="mb-2 border border-gray-400 rounded-lg"
              defaultValue={data.amount}
              min={0}
              onChange={(e) => setData("amount", +e.target.value)}
            />
            {Object.keys(errors).length !== 0
              ? errors.map((err) => (
                  <div className="text-sm text-red-500 mb-2">{err}</div>
                ))
              : ""}
            <button
              type="submit"
              className="h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm transition font-bold"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ItemForm;
