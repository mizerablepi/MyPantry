import Card from "./Card";

function Items({ items, token }) {
  return (
    <>
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <div className="flex justify-between ">
              <h1 className="text-3xl font-bold">Items In Stock</h1>
              <a href="/pantry/create">
                <button
                  type="button"
                  className="h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm transition font-bold"
                >
                  Add +
                </button>
              </a>
            </div>

            <hr className="my-6" />

            <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
              {items.map((item, index) => (
                <Card item={item} key={index} token={token} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
