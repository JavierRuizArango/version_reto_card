import Info from "./Views/info/Info";
import About from "./Views/about/About";
import Interest from "./Views/interest/Interest";
import Footer from "./Views/footer/Footer";
import "./InformationCardMainView.css";

const InformationCardMainView = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
};

export default InformationCardMainView;
