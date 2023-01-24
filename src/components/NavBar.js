import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
  
  h1{
    margin-right: auto;
    span{color: #F8CC34}
  }
  
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
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
`

function NavBar(){
    return(
        <>
            <StyledNavBar>
                <h1><NavLink to={"/"}>Piotr <span>Magier</span></NavLink></h1>
                <ul>
                    <NavLink to={"/about"}><li>about</li></NavLink>
                    <NavLink to={"/portfolio"}><li>portfolio</li></NavLink>
                    <NavLink to={"/contact"}><li>contact</li></NavLink>
                </ul>
            </StyledNavBar>
        </>
    )
}

export default NavBar;