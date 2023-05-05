import Title from "../components/Title";
import styled from 'styled-components'
import {AboutMeFour, AboutMeOne, AboutMeThree, AboutMeTwo} from "../components/Strings";


const StyledAbout = styled.div`
    text-align: justify;
    width: 100%;
    margin: 0 auto;
    font-size: 1.3rem;
  
    p{
      margin: 50px auto;
      width: 70%;
    }

  @media (max-width: 1024px){
    p{width: 90%;}
  }
    
    
`


function AboutMe(){
    return(
        <>
            <Title name={"about me"} />
            <StyledAbout>
                <p>{AboutMeOne}</p>
                <p>{AboutMeTwo}</p>
                <p>{AboutMeThree}</p>
                <p>{AboutMeFour}</p>

            </StyledAbout>
        </>
    )
}

export default AboutMe;
