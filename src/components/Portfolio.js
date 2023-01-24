import styled from 'styled-components'
import WorkOne from '../assets/judywood.png'
import WorkTwo from '../assets/nunadoggrooming.png'
import WorkThree from '../assets/pawline.png'
import {FaArrowRight} from 'react-icons/fa'

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
    border: 2px #F8CC34 solid;
    border-radius: 20px;
    &:hover{
      opacity: 50%;
    }
  }
  a{
    display: flex; align-items: center;
    place-self: center;
    font-size: 1.3rem;
    svg{margin: 0 5px;}
    &:hover{color: #F8CC34}
  }
`

function Portfolio(){
    return(
        <>
            <Title><div></div><h2>portfolio</h2><div></div></Title>
            <Works>
                <a href={"https://judywoodm4m.com/"} target={"_blank"} rel="noreferrer"><img src={WorkOne} alt={"JudyWoodM4M"} /></a>
                <a href={"http://www.nunagrooming.co.uk/"} target={"_blank"} rel="noreferrer"><img src={WorkTwo} alt={"NunaGrooming"}/></a>
                <a href={"https://pawline-art.netlify.app/"} target={"_blank"} rel="noreferrer"><img src={WorkThree} alt={"PawlinePortfolio"}/></a>
                <a href={"#"}><div>
                    View more
                    <FaArrowRight/>
                </div></a>
            </Works>
        </>
    )
}

export default Portfolio;