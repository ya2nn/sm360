import { Outlet, Link } from 'react-router-dom'
import React from "react";

import Container from '../../dist/grid/Container'

const Navigation = () => {
  return (
    <>
      <header className='flex h-[50px] items-center bg-[#2CD5C4]'>
        <Container>
          <nav>
            <ul className='flex space-x-6'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/en/new-inventory'>New Inventory Listing</Link>
              </li>
              <li>
                <Link to='/inventory-vdp'>Inventory Details</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </header>

      <Outlet />
    </>
  )
}

export default Navigation