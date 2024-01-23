import Aside from "@/Components/Aside";
import Items from "@/Components/Items";
import MainLayout from "@/Layouts/MainLayout";

function Pantry({ items }) {
  return (
    <>
      <MainLayout inner={<Items items={items} />} />
    </>
  );
}

export default Pantry;
