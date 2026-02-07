import WallDesign from "@/app/components/servicepages/WallDesign";
import HomeInterior from "@/app/components/servicepages/HomeInterior";
import OfficeInterior from "@/app/components/servicepages/OfficeInterior";
import FalseCeiling from "@/app/components/servicepages/FalseCeiling";
import FurnitureWork from "@/app/components/servicepages/FurnitureWork";

// SEO METADATA
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const seoMap = {
    "wall-design": {
      title: "Premium Wall Design Services in Delhi NCR | Artisan Decor",
      description:
        "Transform your interiors with premium wall design services in Delhi NCR.",
    },
    "false-ceiling": {
      title: "False Ceiling Design for Homes & Offices | Artisan Decor",
      description:
        "Modern false ceiling design services including gypsum & POP ceilings.",
    },
    "furniture-work": {
      title: "Custom Furniture Design & Installation | Artisan Decor",
      description:
        "High-quality custom furniture design for homes and offices.",
    },
    "home-interior": {
      title: "Home Interior Design Services | Artisan Decor",
      description:
        "Premium home interior design solutions by Artisan Decor.",
    },
    "office-interior": {
      title: "Office Interior Design Services | Artisan Decor",
      description:
        "Professional office interior design services by Artisan Decor.",
    },
  };

  return seoMap[slug] || {
    title: "Interior Design Services | Artisan Decor",
    description:
      "Premium interior décor and design services for homes and offices.",
  };
}

// PAGE RENDERING
export default async function ServicePage({ params }) {
  const { slug } = await params;

  switch (slug) {
    case "wall-design":
      return <WallDesign />;

    case "false-ceiling":
      return <FalseCeiling />;

    case "furniture-work":
      return <FurnitureWork />;

    case "home-interior":
      return <HomeInterior />;

    case "office-interior":
      return <OfficeInterior />;

    default:
      return <div>Service Not Found</div>;
  }
}
