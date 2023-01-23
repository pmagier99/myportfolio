import styled from 'styled-components'
import WorkOne from '../assets/judywood.png'
import WorkTwo from '../assets/nunadoggrooming.png'
import WorkThree from '../assets/pawline.png'

const Title = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  h2{font-size: 2rem; margin: 40px 10px;}
  div{
    height: 3px;
    width: 250px;
    background-color: #F8CC34;  
  }
`

const Works = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  img{
    width: 100%;
    border: 1px #F8CC34 solid;
    border-radius: 20px;
  }
`

const Button = styled.div`
  text-align: center;
  margin: 20px auto;
  width: 10%;
  background-color: #272727;
  border: 3px #F8CC34 solid;
  color: #EFF1F3;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-family: inherit;
  &:hover{background-color: #F8CC34; color: #272727}
`

function Portfolio(){
    return(
        <>
            <Title><div></div><h2>portfolio</h2><div></div></Title>
            <Works>
                <a href={"https://judywoodm4m.com/"} target={"_blank"} rel="noreferrer"><img src={WorkOne} alt={"JudyWoodM4M"} /></a>
                <a href={"http://www.nunagrooming.co.uk/"} target={"_blank"} rel="noreferrer"><img src={WorkTwo} alt={"NunaGrooming"}/></a>
                <a href={"https://pawline-art.netlify.app/"} target={"_blank"} rel="noreferrer"><img src={WorkThree} alt={"PawlinePortfolio"}/></a>
            </Works>
            <Button>view more</Button>
        </>
    )
}

export default Portfolio;