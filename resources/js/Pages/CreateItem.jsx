import ItemForm from "@/Components/ItemForm";
import MainLayout from "@/Layouts/MainLayout";

function CreateItem({ token, errors }) {
  return (
    <>
      <MainLayout inner={<ItemForm token={token} errors={errors} />} />
    </>
  );
}

export default CreateItem;
