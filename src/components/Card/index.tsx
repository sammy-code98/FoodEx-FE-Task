import thumb from "../../assets/icons/thumb-up.svg"

type cardProps = {
  name: string;
  img: string;
}
export default function Card({ name, img }: cardProps): JSX.Element {
  return (   
    <div className="p-4 w-[245px] h-[289px] bg-chow-white rounded-xl space-y-3 sm:w-auto sm:h-auto">
      <div className="p-6 bg-chow-snow flex justify-center items-center rounded-xl">
        <img src={img} alt="food" className="w-full h-full object-cover" />
      </div>

      <div className="py-6 space-y-4">
        <h4 className="text-xl font-semibold text-chow-black">{name}</h4>
        <div className="bg-chow-brown-light text-chow-brown-dark uppercase font-medium text-sm rounded-full py-1 px-2 w-32 sm:w-36 md:w-40 lg:w-44 ">
          🍲 Continental
        </div>
        <div className="flex items-center gap-4 text-sm text-chow-black">
          <div className="flex gap-2 items-center">
            <img src={thumb} alt="thumb" className="w-4 h-4" />
            120picks{" "}
          </div>
          <span className="text-2xl text-chow-brown-dark -mt-3">.</span> Approx. ₦3,000
        </div>
      </div>
    </div>
  )
}
