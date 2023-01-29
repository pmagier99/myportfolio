import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import {FaUserAlt} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {FaFolder} from 'react-icons/fa'


const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;

  .mobileNavBar{display:none;}
  
  h1{
    margin-right: auto;
    span{color: #F8CC34}
  }
  
  .desktopNavBar{display: flex;}
  
  .desktopNavBar, .mobileNavBar {
    padding: 0;
    list-style-type: none;
    justify-content: flex-end;
    font-weight: bold;
    font-size: 1.6rem;
    li {
      display: inline-block;
      margin: 0 20px;
      border-bottom: 1px #272727 solid;
      &:hover{
        color: #F8CC34;
        border-bottom: 1px #F8CC34 solid;
      }
    }
  }
  @media (max-width: 1024px){
    .desktopNavBar{display: none;}
    .mobileNavBar{display: flex}
  }
`

function NavBar(){
    return(
        <>
            <StyledNavBar>
                <h1><NavLink to={"/"}>Piotr <span>Magier</span></NavLink></h1>
                <ul className={"desktopNavBar"}>
                    <NavLink to={"/about"}><li>about</li></NavLink>
                    <NavLink to={"/portfolio"}><li>portfolio</li></NavLink>
                    <NavLink to={"/contact"}><li>contact</li></NavLink>
                </ul>

                <ul className={"mobileNavBar"}>
                    <NavLink to={"/about"}><li><FaUserAlt/></li></NavLink>
                    <NavLink to={"/portfolio"}><li><FaFolder/></li></NavLink>
                    <NavLink to={"/contact"}><li><FaEnvelope/></li></NavLink>
                </ul>

            </StyledNavBar>
        </>
    )
}

export default NavBar;