import Checkbox from "./Checkbox";
import SearchBox from "./SearchBox";

function RecipeList() {
  return (
    <>
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <div className="flex justify-between ">
              <h1 className="text-3xl font-bold">Recipes</h1>
              <div className="flex items-end">
                <Checkbox id="checkbox" name="pantryItems" className="mr-2" />
                <span className="text-sm">Ingredients in Pantry</span>
              </div>
            </div>

            <hr className="my-6" />

            <SearchBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeList;
