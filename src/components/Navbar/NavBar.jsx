import React from 'react'
import styled from 'styled-components'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <>
       <NavContainer>
        <h2 className='' href= "">GearStore</h2>
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

padding: .4rem;
background-color: #000;
display: flex;
align-items: center;
justify-content: space-between;

h2{
    font-weight: 400;
    font-weight: bold;
    color: #fff;
}
h2:hover{
    color: #00ce1b;
}

}

a{
    color: #fff;
    text-decoration: none;
    margin-right; 1rem;
    padding: .4rem;
    font-weight: bold;
}
a:hover{
    color: #00ce1b;
}
`




