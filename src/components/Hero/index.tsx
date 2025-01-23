import { useEffect, useState } from "react"
import Carousel from "../Card/Carousel"
import appLogo from "../../assets/appLogo.svg"
import instagram from "../../assets/icons/instagram.png"
import facebook from "../../assets/icons/facebook.png"
import twitter from "../../assets/icons/twitter.png"
import whiteStar from "../../assets/icons/white-star.svg"
import heroPattern from "../../assets/hero-pattern.png"
import hamburger from "../../assets/harmbuger.svg"
import mobileLogo from "../../assets/mobileLogo.svg"
import phoneImg from "../../assets/phone.svg"
import { cardData } from "../../utils/staticData"


export default function Hero(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleClick = () => setMenuOpen(!menuOpen);
  const texts = ["Asap!", "Now! Now!", "as e dey hot!", "Kia Kia!"]
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <div className='w-full h-screen px-2  py-4'>
      <div className="w-full py-4 px-3 bg-white shadow-sm block md:hidden">
        <nav className="flex justify-between">
          <div>
            <img src={mobileLogo} alt="mobileLogo" />
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-chow-orange text-chow-white rounded-full px-6 py-2">JOIN WAITLIST</button>
            <button type="button" onClick={handleClick}>
              <img src={hamburger} alt="harmbuger" />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <nav className="px-4 py-6 flex flex-col  justify-start space-y-6 lg:hidden">
            <ul className='space-y-6'>
              <li className='text-base font-medium font-sofia text-chow-black cursor-pointer'>
                <span className='bg-chow-orange px-0.5 py-3 rounded mr-4'></span>
                Home
              </li>
            </ul>
            <div className='flex items-center gap-2'>
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </nav>
        )}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-8 gap-4'>

        <div className='space-y-6 hidden md:block'>
          <a href="/">
            <img src={appLogo} alt="appLogo" />
          </a>
          <div className='py-8'>
            <ul className='space-y-6'>
              <li className='text-base font-medium font-sofia text-chow-black cursor-pointer'>
                <a href="/">
                <span className='bg-chow-orange px-0.5 py-3 rounded mr-4'></span>
                  Home
                </a>
              </li>
              <li className='text-base font-medium font-sofia text-chow-black cursor-pointer px-4'>Join Waitlist</li>
            </ul>
          </div>

          <div className='flex items-center gap-2'>
            <a href="/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="/">
              <img src={instagram} alt="instagram" />
            </a>
          </div>

          <div className='absolute bottom-0'>
            <img src={heroPattern} alt="hero-pattern" className='w-full object-cover' />
          </div>
        </div>


        <div className='md:col-start-2 col-span-12 md:col-span-7 bg-chow-black w-full rounded-xl md:rounded-3xl py-6 space-y-12 relative'>

          <div className='flex flex-col justify-center items-center py-14 space-y-8'>
            <div className='flex items-center gap-3'>
              <img src={whiteStar} alt="whiteStar" />
              <h3 className='text-chow-white text-base font-medium'>Join the chow africa waitlist</h3>
              <img src={whiteStar} alt="whiteStar" />
            </div>

            <h1 className='text-5xl md:text-7xl font-semibold text-chow-white text-center'>Find chow, {" "}
              <span
                className="text-chow-green font-courgette relative after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-chow-orange after:rounded-full"
                style={{ display: "inline-block", position: "relative" }}
              >
                {texts[currentTextIndex]}
              </span>
            </h1>
            <p className='text-chow-white text-center leading-relaxed text-base w-80 '>The patient dog eats left overs. Be the first to know when we launch. Join our Waitlist 😎</p>

            <div className='py-4 px-6 flex items-center flex-col md:flex-row gap-5 w-full md:w-1/2'>
              <input type="email" placeholder='Enter your email' className='rounded-md p-4 w-full' />
              <button className='rounded-full py-4 px-12 md:w-1/2 text-chow-white bg-chow-green border-2 border-chow-white  hover:opacity-50'>JOIN WAITLIST</button>
            </div>
          </div>

          <div className="absolute right-1/4 bottom-0 transform translate-x-1/4 md:translate-x-1/2   z-10 md:w-1/3 w-1/2">
            <img src={phoneImg} alt="phone" className="w-full md:w-1/2 object-contain" />
          </div>

          <div className="hidden md:block absolute bottom-32 z-0">
            <div className="w-[368px] h-[368px] p-4 rounded-full border-4 border-chow-orange"></div>
          </div>

          <div className="overflow-hidden relative z-0">
            <Carousel cardData={cardData} />
          </div>
        </div>
      </div>
    </div >
  )
}
