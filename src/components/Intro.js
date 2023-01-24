import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const IntroContainer = styled.div`
  height: calc(100vh - 78px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.p`
  span{color: #F8CC34}
  font-size: 8rem;
  line-height: 1;
`

const SubTitle = styled(Title)`
  font-size: 6rem;
`

const Button = styled.button`
  margin: 50px 0;
  width: 30%; 
  background-color: #272727;
  border: 3px #F8CC34 solid;
  color: #EFF1F3;
  padding: 2rem 0;
  font-size: 1.5rem;
  font-family: inherit;
  
  &:hover{background-color: #F8CC34; color: #272727; cursor: pointer}
`

function Intro(){
    return(
        <>
            <IntroContainer>
                <Title><span>Hi,</span> I'm Piotr</Title>
                <SubTitle>Your <span>Web Developer</span></SubTitle>
                <NavLink to={"/contact"}><Button>let's get in touch</Button></NavLink>
            </IntroContainer>

        </>
    );
}

export default Intro;