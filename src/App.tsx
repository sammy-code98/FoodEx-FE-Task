import Hero from "./components/Hero"
import Waitlist from "./components/Waitlist"

function App() {
  return (
    <>
      <Hero />
      <Waitlist />
      <div className="px-6">
        <div className="px-12 py-6 mb-12 mx-auto container bg-chow-white rounded-3xl shadow-xl flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-6">
        <div className="w-full md:w-5/12">
          <h3 className="text-3xl font-semibold font-sofia text-chow-black leading-loose ">Signup  to {" "}
            <span className="bg-chow-blue text-chow-white px-3 py-1 rounded-full border-2 border-chow-black">chowafrica</span> and  say {" "}
            <span className="bg-chow-black text-chow-white px-3 py-1 rounded-full border-2 border-chow-green">goodbye 👋🏽</span> to mealtime stress.</h3>
        </div>
        <div>
          <button className='rounded-full py-4 px-12 text-chow-white bg-chow-green border-2 border-chow-white shadow-md hover:opacity-50'>JOIN WAITLIST</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
