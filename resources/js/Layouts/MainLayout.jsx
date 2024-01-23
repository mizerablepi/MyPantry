import Aside from "@/Components/Aside";
import Items from "@/Components/Items";

function MainLayout({ inner }) {
  // console.log(items[0].name);
  return (
    <>
      <div className="relative bg-yellow-50 overflow-hidden min-h-screen">
        <Aside />

        <main className="md:ml-60 max-h-screen overflow-auto">{inner}</main>
      </div>
    </>
  );
}

export default MainLayout;
