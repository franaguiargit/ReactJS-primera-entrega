import React from 'react'
import styled from 'styled-components'
import CartWidget from './CartWidget/CartWidget'

function NavBar() {
  return (
    <>
       <NavContainer>
        <h2><span className='gear'>Gear </span><span className='store'>Store</span></h2>
        <div>
            <a href="">Home</a>
            <a href="">Monitors</a>
            <a href="">Keyboards</a>
            <a href="">Mousepads</a>
            <a href="">Mouse</a>
            
        </div>
   {     <>
        <CartWidget/>
        </>}
       </NavContainer>
    </>
  )
}

export default NavBar

const NavContainer = styled.nav`
    h2{
    font-weight: 400;
     span{
        font-weight: bold;
    }
}
.gear{
    color: #f0f8ff;
    -webkit-text-stroke: 0.5px black;
}
.store{
    -webkit-text-stroke: 0.5px white;
}
padding: .4rem;
background-color: #2a2a2a;
display: flex;
align-items: center;
justify-content: space-between;

a{
    color: white;
    text-decoration: none;
    margin-right; 1rem;
    padding: .4rem;
}

`




