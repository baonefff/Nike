import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='http://localhost:5173/'><img src={headerLogo} alt='Logo' width={130} height={29}/></a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map(item => {
                return (
                    <li key={item.label}><a href={item.href} className='font-montserrat leading-normal text-lg'>{item.label}</a></li>
                );
            })}
        </ul>
        <div className='hidden max-lg:block'>
            <img 
                src= {hamburger}
                alt='Hamburger'
                width={25}
                height={25}
            />
        </div>
      </nav>
    </header>
  )
}

export default Nav
