import React from 'react'

import WpcLouvers from '../../components/ProductsPage/WpcLouvers'
import Wallpaper from '../../components/ProductsPage/Wallpaper.jsx'
import UvSheets from '../../components/ProductsPage/UvSheets.jsx'
import Curtains from '../../components/ProductsPage/Curtains.jsx'

export default async function Productpage({params}) {

const { slug } = await params;
  
if(slug === "wallpaper") return <Wallpaper />;
if(slug === "all-panels") return <WpcLouvers />;
if(slug === "uv-sheets") return <UvSheets />;
if(slug === "curtains") return <Curtains />
  return <div>Product Not Found</div>
  
}
