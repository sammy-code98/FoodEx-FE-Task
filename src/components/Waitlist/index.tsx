import blackStar from "../../assets/icons/black-star.svg"
import cloud from "../../assets/cloud.svg"
import cloud2 from "../../assets/cloud2.svg"
import love from "../../assets/love.svg"
import foodCards from "../../assets/foodCards.png"
import person from "../../assets/person.png"


export default function Waitlist(): JSX.Element {
  return (
    <div className="w-full py-24  mx-auto px-12 md:px-0">
      <div className="py-12 flex items-center justify-between gap-2">
        <div>
          <img src={cloud} alt="cloud" className="w-full" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className='flex items-center gap-3'>
            <img src={blackStar} alt="blackStar" />
            <h3 className='text-chow-black text-sm font-medium uppercase text-center'>Join the chowafrica waitlist</h3>
            <img src={blackStar} alt="blackStar" />
          </div>

          <h2 className="text-chow-black font-semibold text-3xl md:text-4xl font-sofia text-center">Are you tired of eating the</h2>

          <div className="md:py-6 py-4 px-8 md:px-12 lg:px-24 bg-chow-orange border-2 border-chow-black rounded-full shadow-xl text-xl md:text-3xl font-sofia font-semibold text-chow-white leading-none text-center whitespace-nowrap">
            🍛 same dishes everyday? 🍝
          </div>

          <p className="text-base text-chow-black leading-relaxed md:w-4/6 text-center">Do you crave new and exciting dishes? Look no further! Chow is the perfect solution for discovering your next dish.</p>
        </div>

        <div>
          <img src={cloud2} alt="cloud2" className="w-full" />
        </div>
      </div>

      <div className="py-6 mx-auto container bg-chow-snow rounded-3xl relative overflow-hidden">
        <img
          src={love}
          alt="love"
          className="absolute top-12 left-0 w-32 md:w-48 object-contain"
        />

        <div className="py-6 px-4 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <img
            src={foodCards}
            alt="foodCards"
            className="w-full md:w-1/2 object-cover z-10"
          />
          <img
            src={person}
            alt="person"
            className="w-full md:w-1/2 object-contain z-10"
          />
        </div>

        <img
          src={love}
          alt="love"
          className="absolute bottom-12 -right-12 w-32 md:w-48 object-contain"
        />
      </div>
    </div>
  )
}
