import Header from "../../organisms/Header/Header";
import Footer from "../../molecules/Footer/Footer";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
