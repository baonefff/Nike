import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import Offer from "../assets/images/offer.svg"

const SpecialOffer = () => {
  return (
    <section id className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 w-full max-container">
      
      <div className="flex-1">
        <img src={Offer} 
        width={773} 
        height={687}
        className="object-contain w-full"/>
      </div>

      <div className="flex flex-col flex-1 ">
        <h2 className="text-4xl capitalize font-palanquin font-bold lg:max-w-lg"> <span className="text-coral-red">Special </span> Offer</h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalledled value that sets us apart. </p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop now' iconURL={arrowRight} />
          <Button backgroundColor ="bg-white" borderColor=" border-slate-gray" textColor="text-coral-red" hoover={"hover:bg-coral-red hover:text-white hover:bg-opacity-90"} label= 'Learn more' />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
