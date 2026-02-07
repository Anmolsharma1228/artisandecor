import WpcLouvers from "@/app/components/ProductsPage/WpcLouvers";
import Wallpaper from "@/app/components/ProductsPage/Wallpaper";
import Curtains from "@/app/components/ProductsPage/Curtains";
import Carpet from "@/app/components/ProductsPage/Carpet";
import GymFlooring from "@/app/components/ProductsPage/GymFlooring";
import WindowBlinds from "@/app/components/ProductsPage/WindowBlinds";
import Pergola from "@/app/components/ProductsPage/Pergola";
import Decking from "@/app/components/ProductsPage/Decking";
import Cladding from "@/app/components/ProductsPage/Cladding";

// ✅ SEO METADATA
export async function generateMetadata({ params }) {
  const { slug } = params;

  const seoMap = {
    wallpaper: {
      title: "Premium Wallpaper for Walls | Artisan Decor",
      description:
        "Explore premium wallpaper designs for homes and offices. Modern, luxury & custom wall wallpapers by Artisan Decor.",
    },
    "all-panels": {
      title: "WPC Louvers & Wall Panels | Artisan Decor",
      description:
        "High-quality WPC louvers and wall panels for modern interiors. Durable, stylish & easy to maintain.",
    },
    curtains: {
      title: "Luxury Curtains & Drapes for Home | Artisan Decor",
      description:
        "Shop premium curtains and drapes for living rooms, bedrooms & offices. Elegant designs by Artisan Decor.",
    },
    carpet: {
      title: "Designer Carpets & Flooring Solutions | Artisan Decor",
      description:
        "Premium carpets for homes, offices & commercial spaces. Stylish, durable & comfortable flooring solutions.",
    },
    "gym-flooring": {
      title: "Gym Flooring Solutions | Rubber & Sports Flooring",
      description:
        "Professional gym flooring solutions including rubber & sports flooring for fitness centers and home gyms.",
    },
    "window-blinds": {
      title: "Window Blinds for Home & Office | Artisan Decor",
      description:
        "Modern window blinds including roller, zebra & wooden blinds for homes and offices.",
    },
    pergola: {
      title: "Outdoor Pergola Design & Installation | Artisan Decor",
      description:
        "Premium outdoor pergola design and installation services for terraces, gardens & patios.",
    },
    decking: {
      title: "Outdoor Decking Solutions | WPC & Wooden Decking",
      description:
        "Durable outdoor decking solutions using WPC and wooden decking for balconies and open spaces.",
    },
    cladding: {
      title: "Wall Cladding Solutions | Interior & Exterior",
      description:
        "Premium wall cladding solutions for interior and exterior walls. Stylish & weather-resistant designs.",
    },
  };

  return (
    seoMap[slug] || {
      title: "Premium Interior Products | Artisan Decor",
      description:
        "Explore premium interior decor products including wallpapers, panels, flooring and more by Artisan Decor.",
    }
  );
}

// ✅ PAGE RENDERING
export default async function ProductPage({ params }) {
  const { slug } = await params;

  if (slug === "wallpaper") return <Wallpaper />;
  if (slug === "all-type-panels") return <WpcLouvers />;
  if (slug === "curtains") return <Curtains />;
  if (slug === "carpet") return <Carpet />;
  if (slug === "gym-flooring") return <GymFlooring />;
  if (slug === "window-blinds") return <WindowBlinds />;
  if (slug === "pergola") return <Pergola />;
  if (slug === "decking") return <Decking />;
  if (slug === "cladding") return <Cladding />;

  return <div>Product Not Found</div>;
}
