import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Testimonials from "./Components/Testimonials";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container p-3 h-100 my-3">
      <Navbar />
      <Header />
      <Main />
      <Testimonials />
      <div className="container">
        <button type="button" class="btn btn-primary">
          Get Started
        </button>
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
