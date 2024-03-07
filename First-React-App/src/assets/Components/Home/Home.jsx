import React from "react";
import Banner from "../Banner/Banner.jsx";
import Card from "../InfoCard/Card.jsx";

function Home() {
  return (
    <>
      <Banner />
      <h1 className="text-6xl font-extrabold text-center text-red-700 p-10">
        End-to-end shopping experience!
      </h1>
      <div className="cards flex mt-5 justify-center gap-9">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Home;
