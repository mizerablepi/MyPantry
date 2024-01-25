import RecipeList from "@/Components/RecipeList";
import MainLayout from "@/Layouts/MainLayout";

function Recipe() {
  return <MainLayout inner={<RecipeList />} />;
}

export default Recipe;
