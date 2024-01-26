function RecipeCard({ recipe }) {
  console.log(recipe);
  return (
    <>
      <div className="flex flex-col justify-between items-center p-4 bg-white border rounded-xl text-gray-800 space-y-2">
        <div className="flex flex-col items-center">
          <img src={recipe.image} className="pb-2" />
          <a href={`/recipes/${recipe.id}`}>
            <h1 className="font-bold text-xl text-center px-5  hover:text-yellow-800 hover:underline cursor-pointer">
              {recipe.title}
            </h1>
          </a>
        </div>
        <div className="flex gap-4 text-xs pt-3 border-t-2 px-4">
          <span>Items in Pantry: {recipe.usedIngredientCount}</span>
          <span>Items Missing: {recipe.missedIngredientCount}</span>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
