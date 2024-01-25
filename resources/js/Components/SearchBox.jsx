function SearchBox() {
  return (
    <div className="flex rounded-full bg-gray-100 py-2 px-8">
      <input
        type="text"
        className="flex-1 border-x-0 border-t-0 bg-gray-100 focus:outline-none"
      />
    </div>
  );
}

export default SearchBox;
