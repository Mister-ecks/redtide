import React from 'react'
import Image from 'next/image'
import MobileLeftHand from "@/assets/images/MobileLH.svg"
import MobileRightHand from "@/assets/images/MobileRH.svg"
import DesktopLeftHand from "@/assets/images/DesktopLH.svg"
import DesktopRightHand from "@/assets/images/DesktopRH.svg"

const HeroImages = () => {
  return (
    <div>
        {/* Mobile Image*/}
        <div className="flex justify-between items-center md:hidden">
            <Image src={MobileLeftHand} alt='mobile left hand'/>
            <Image src={MobileRightHand} alt='mobile right hand'/>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center md:mt-[-3rem]">
            <Image src={DesktopLeftHand} alt='Desktop left hand'/>
            <Image src={DesktopRightHand} alt='Desktop Right Hand'/>
        </div>
    </div>
  )
}

export default HeroImages