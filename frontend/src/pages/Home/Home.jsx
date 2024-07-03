import MainTemplate from "../../components/templates/MainTemplate/MainTemplate";
import Banner from "../../components/organisms/Banner/Banner";
import Steps from "../../components/organisms/Steps/Steps";
import DogList from "../../components/organisms/DogList/DogList";
import FAQ from "../../components/organisms/FAQ/Faq";

const Home = () => {
  return (
    <MainTemplate>
      <Banner />
      <Steps />
      <DogList />
      <FAQ />
    </MainTemplate>
  );
};

export default Home;
