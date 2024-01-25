import MainLayout from "@/Layouts/MainLayout";

function Welcome({ auth, token }) {
  return (
    <MainLayout
      inner={
        <h1 className="text-2xl p-2 m-2 font-bold">Welcome,{auth.user.name}</h1>
      }
      token={token}
    />
  );
}

export default Welcome;
