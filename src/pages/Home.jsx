import React from "react";
import MainLayout from "../components/layouts/MainLayout";

const Home = ({ logout }) => {
  return (
    <MainLayout>
      <h1>This is Home Page!</h1>
      <button onClick={() => logout(false)}>logout</button>
    </MainLayout>
  );
};

export default Home;
