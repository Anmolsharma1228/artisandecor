import React from 'react'

import WpcLouvers from '@/app/components/ProductsPage/WpcLouvers'
import Wallpaper from '@/app/components/ProductsPage/Wallpaper.jsx'
import Curtains from '@/app/components/ProductsPage/Curtains.jsx'
import Carpet from '@/app/components/ProductsPage/Carpet'
import GymFlooring from '@/app/components/ProductsPage/GymFlooring'
import WindowBlinds from '@/app/components/ProductsPage/WindowBlinds'
import Pergola from '@/app/components/ProductsPage/Pergola'
import Decking from '@/app/components/ProductsPage/Decking'
import Cladding from '@/app/components/ProductsPage/Cladding'

export default async function Productpage({params}) {

const { slug } = await params;
  
if(slug === "wallpaper") return <Wallpaper />;
if(slug === "all-panels") return <WpcLouvers />;
if(slug === "curtains") return <Curtains />
if(slug === "carpet") return <Carpet />
if(slug === "gym-flooring") return <GymFlooring />
if(slug === "window-blinds") return <WindowBlinds />
if(slug === "pergola") return <Pergola />
if(slug === "cladding") return <Cladding />
if(slug === "decking") return <Decking />
  return <div>Product Not Found</div>
  
}
