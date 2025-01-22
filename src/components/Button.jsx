
const Button = ({label, iconURL, backgroundColor, textColor, borderColor, hoover, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} ${hoover}` : 'bg-coral-red  text-white border-coral-red hover:bg-white hover:text-coral-red hover:bg-opacity-90'} ${fullWidth && 'w-full'} `}>
        {label}
        {iconURL && 
        <img src= {iconURL} alt="arrow right" className="ml-2 rounded-full w-5 h-5 "/>}
    </button>
  )
}

export default Button
