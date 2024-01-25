import ItemEditForm from "@/Components/ItemEditForm";
import MainLayout from "@/Layouts/MainLayout";

function EditItem({ token, item, errors }) {
  return (
    <>
      <MainLayout
        inner={<ItemEditForm token={token} item={item} errors={errors} />}
      />
    </>
  );
}

export default EditItem;
