function Card({ item }) {
  return (
    <>
      <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
        <span className="font-bold hover:text-yellow-800 hover:underline">
          {item.name}
        </span>
        <div className="text-sm text-gray-600 flex justify-between">
          <span>Qty: 1</span>
          <a
            href="#"
            className="text-red-500 cursor-pointer hover:text-red-600 hover:underline"
          >
            Remove
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
