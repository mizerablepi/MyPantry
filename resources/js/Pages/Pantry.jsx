import Items from "@/Components/Items";
import MainLayout from "@/Layouts/MainLayout";

function Pantry({ items, token }) {
  return (
    <>
      <MainLayout inner={<Items items={items} token={token} />} token={token} />
    </>
  );
}

export default Pantry;
