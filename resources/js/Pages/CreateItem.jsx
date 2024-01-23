import ItemForm from "@/Components/ItemForm";
import MainLayout from "@/Layouts/MainLayout";

function CreateItem() {
  return (
    <>
      <MainLayout inner={<ItemForm />} />
    </>
  );
}

export default CreateItem;
