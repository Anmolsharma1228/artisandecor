import { notFound } from "next/navigation";

import WpcLouvers from "@/app/components/ProductsPage/WpcLouvers";
import Wallpaper from "@/app/components/ProductsPage/Wallpaper";
import Curtains from "@/app/components/ProductsPage/Curtains";
import Carpet from "@/app/components/ProductsPage/Carpet";
import GymFlooring from "@/app/components/ProductsPage/GymFlooring";
import WindowBlinds from "@/app/components/ProductsPage/WindowBlinds";
import Pergola from "@/app/components/ProductsPage/Pergola";
import Decking from "@/app/components/ProductsPage/Decking";
import Cladding from "@/app/components/ProductsPage/Cladding";

export default function Productpage({ params }) {
  const { slug } = params;

  switch (slug) {
    case "wallpaper":
      return <Wallpaper />;
    case "all-panels":
      return <WpcLouvers />;
    case "curtains":
      return <Curtains />;
    case "carpet":
      return <Carpet />;
    case "gym-flooring":
      return <GymFlooring />;
    case "window-blinds":
      return <WindowBlinds />;
    case "pergola":
      return <Pergola />;
    case "cladding":
      return <Cladding />;
    case "decking":
      return <Decking />;
    default:
      notFound(); 
  }
}
