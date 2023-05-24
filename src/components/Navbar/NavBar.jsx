import React from 'react'
import styled from 'styled-components'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"

function NavBar() {
    return (
        <>
            <NavContainer>
                <Link to={"/"}>
                    <h2 className='' href="">GearStore</h2>

                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}> Home </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/Monitors"}> Monitors </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/Keyboards"}> Keyboards </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/Mousepads"}> Mousepads </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/Mouse"}> Mouse </NavLink>
                        </li>

                    </ul>
                </nav>

                {<>
                    <CartWidget />
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

  h2 {
    font-weight: 400;
    font-weight: bold;
    color: #fff;
  }

  h2:hover {
    color: #00ce1b;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: .4rem;
    font-weight: bold;
  }

  a:hover {
    color: #00ce1b;
  }
`;




