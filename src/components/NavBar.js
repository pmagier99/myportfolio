import styled from 'styled-components'

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 70vw;
  margin: 40px auto;
  
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
      &:hover{
        color: #F8CC34;
        cursor: pointer;
        border-bottom: 1px #F8CC34 solid;
      }
    }
  }
`

function NavBar(){
    return(
        <>
            <StyledNavBar>
                <h1>Piotr <span>Magier</span></h1>
                <ul>
                    <li>about me</li>
                    <li>portfolio</li>
                    <li>contact</li>
                </ul>
            </StyledNavBar>
        </>
    )
}

export default NavBar;