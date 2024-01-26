import RecipeList from "@/Components/RecipeList";
import MainLayout from "@/Layouts/MainLayout";

function Recipe({ recipes }) {
  return <MainLayout inner={<RecipeList recipes={recipes} />} />;
}

export default Recipe;
