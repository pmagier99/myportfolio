import styled from 'styled-components'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {NavLink} from "react-router-dom";


const StyledAbout = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  font-size: 1rem;
  @media (max-width: 1024px){
    grid-template-columns: 1fr;
    div:nth-child(2){display: none}
  }
  div:nth-child(2){
    place-self: center;
    align-self: start;
    text-align: center;
  }
  
  .media{
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    font-size: 2rem;
    svg{margin: 20px 20px 0 0}
  }
  
  h2{margin: 10px 0}
  span{color: #F8CC34}
  p{text-align: justify}
  ul{
    list-style-type: none;
    li{
      margin: 20px 0;
      &:hover{color: #F8CC34}
    }
  }
`

function Footer(){
    return(
        <>
            <StyledAbout>
                <div>
                    <h2>Piotr <span>Magier</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget purus leo. Nam mi elit, efficitur pretium sodales a, tempus nec ipsum. Sed lorem lectus, molestie sed auctor sed, aliquam a nulla. Nunc feugiat felis quis dui imperdiet, ut dapibus velit tincidunt. </p>
                    <div className={"media"}>
                        <a href={"https://github.com/pmagier99"} target={"_blank"} rel="noreferrer"><FaGithub /></a>
                        <a href={"https://www.linkedin.com/in/piotrmagier/"} target={"_blank"} rel="noreferrer"><FaLinkedin /></a>
                        <a href={"mailto:pmagier99@gmail.com"}><FaEnvelope /></a>
                    </div>
                </div>

                <div>
                    <h2>Quick <span>links</span></h2>
                    <ul>
                        <NavLink to={"/about"}><li>about</li></NavLink>
                        <NavLink to={"/portfolio"}><li>portfolio</li></NavLink>
                        <NavLink to={"/contact"}><li>contact</li></NavLink>
                    </ul>
                </div>
                <p>&copy; Piotr Magier 2023</p>
            </StyledAbout>
        </>
    )
}

export default Footer