import HomeSwiper from "./components/HomeSwiper";
import Collection from "./components/Collection";
import AboutUs from "./components/AboutUs";
import OrderCard from "./components/OrderCard";
export default function HomeSlider() {
  return (
    <div>
      <HomeSwiper />
      <Collection/>
      <AboutUs />
      <OrderCard />
    </div>
  );
}
