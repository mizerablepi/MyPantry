import { useForm } from "@inertiajs/react";

function Card({ item, token }) {
  const { delete: destroy } = useForm();

  const submit = (e) => {
    e.preventDefault();
    destroy(`/pantry/${item.id}`);
  };

  return (
    <>
      <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
        <div className="flex justify-start gap-2">
          <span className="font-bold hover:text-yellow-800 hover:underline">
            {item.name}
          </span>
          <a
            href={`/pantry/${item.id}/edit`}
            className="text-xs align-bottom text-blue-400 hover:text-blue-500 hover:underline pt-1"
          >
            Edit
          </a>
        </div>
        <div className="text-sm text-gray-600 flex justify-between">
          <span>Qty: {item.pivot.amount}</span>
          <form onSubmit={submit}>
            <input type="hidden" name="_token" value={token} />
            <button
              type="submit"
              className="text-red-500 cursor-pointer hover:text-white hover:font-bold hover:bg-red-500 hover:px-1 hover:rounded-md"
            >
              Remove
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Card;
