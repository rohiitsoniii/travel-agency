import React from 'react'
import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'

const NavItems = () => {

  const user = {
    name: 'John Doe',
    imageUrl: '/assets/images/david.webp',
    email: 'FV2Tt@example.com'
  }
  return (
    <section className='nav-items'>
        <Link to='/'>
            <img src="/assets/icons/logo.svg"    alt="logo" className='size-[30px]' />
            <h1>Touristo</h1>
        </Link>

        <div className='container'>
          <nav>
            {sidebarItems.map(({id, icon, label, href}) => (
              <NavLink key={id} to={href}>
                {({isActive}:{isActive: boolean})=> (
                  <div className={cn('group nav-itmes',{
                    'bg-primary-100 !text-white': isActive
                  })}>
                    <img
                        src={icon}
                        alt={label}
                        className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : ''}`}
                      />

                    {label}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>
          <footer className='nav-footer'>
            <img src={user?.imageUrl || '/assets/images/david.webp'} className='size-10 rounded-full' alt={user?.name || "John Doe"} />
          </footer>
        </div>
    </section>
  )
}

export default NavItems