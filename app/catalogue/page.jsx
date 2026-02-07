import CataloguePage from "../components/Catalogue";

// ✅ SEO METADATA (SERVER SIDE)
export const metadata = {
  title: "Product Catalogue | Wallpapers, Panels & Interior Products",
  description:
    "Explore the Artisan Decor product catalogue featuring premium wallpapers, WPC panels, curtains, flooring, pergolas and interior decor solutions.",
  
  keywords: [
    "artisan decor catalogue",
    "interior design products",
    "wallpaper catalogue",
    "wpc panels",
    "curtains and blinds",
    "interior decor materials",
  ],

  openGraph: {
    title: "Artisan Decor Product Catalogue",
    description:
      "Discover premium interior decor products crafted for elegant living.",
    url: "https://yourwebsite.com/catalogue",
    siteName: "Artisan Decor",
    type: "website",
  },
};

export default function Page() {
  return <CataloguePage />;
}
