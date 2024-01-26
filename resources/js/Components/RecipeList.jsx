import { fetchRecipes } from "@/utility";
import Checkbox from "./Checkbox";
import SearchBox from "./SearchBox";
import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";

function RecipeList({ recipes = [] }) {
  // const [recipes, setRecipes] = useState([]);
  // useEffect(() => {
  //   fetchRecipes()
  // }, []);
  // console.log(recipes);

  return (
    <>
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <div className="flex justify-between ">
              <h1 className="text-3xl font-bold">Recipes based on pantry</h1>
              {/* <div className="flex items-end">
                <Checkbox id="checkbox" name="pantryItems" className="mr-2" />
                <span className="text-sm">Ingredients in Pantry</span>
              </div> */}
            </div>

            <hr className="my-6" />

            {/* <SearchBox /> */}

            <div className="grid grid-cols-2 gap-4">
              {recipes.map((recipe) => {
                return <RecipeCard recipe={recipe} key={recipe.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeList;
