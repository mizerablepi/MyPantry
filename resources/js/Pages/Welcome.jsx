import MainLayout from "@/Layouts/MainLayout";

function Welcome() {
  return (
    <MainLayout
      inner={<h1 className="text-2xl p-2 m-2 font-bold">Welcome</h1>}
    />
  );
}

export default Welcome;
