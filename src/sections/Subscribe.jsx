import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="leading-[68px] text-4xl font-palanquin font-bold lg:max-w-md ">Sign Up from <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="lg:m-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"> 
        <input type="text" 
        placeholder="subcribe@nike.com"
        className="input"
        />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button label= "Sign Up" fullWidt/>
        </div>
        
      </div>
    </section>
  )
}

export default Subscribe
