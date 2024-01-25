import Aside from "@/Components/Aside";

function MainLayout({ inner, token = "" }) {
  return (
    <>
      <div className="relative bg-yellow-50 overflow-hidden min-h-screen">
        <Aside token={token} />

        <main className="md:ml-60 max-h-screen overflow-auto">{inner}</main>
      </div>
    </>
  );
}

export default MainLayout;
