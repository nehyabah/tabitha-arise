import React from "react";
import Header from "../Components/header";
import Banner from "../Components/banner";
import Goals from "../Components/Goals";
import ProfileSection from "../Components/ProfileSection";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Goals />
      <ProfileSection />
      <Footer />
    </div>
  );
};

export default HomePage;
