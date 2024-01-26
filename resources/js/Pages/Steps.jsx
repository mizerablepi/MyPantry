import StepsCard from "@/Components/StepsCard";
import MainLayout from "@/Layouts/MainLayout";

function Steps({ recipe, title }) {
  return (
    <>
      <MainLayout inner={<StepsCard recipe={recipe} title={title} />} />
    </>
  );
}

export default Steps;
