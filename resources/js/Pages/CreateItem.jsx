import ItemForm from "@/Components/ItemForm";
import MainLayout from "@/Layouts/MainLayout";

function CreateItem({ token }) {
  return (
    <>
      <MainLayout inner={<ItemForm token={token} />} />
    </>
  );
}

export default CreateItem;
