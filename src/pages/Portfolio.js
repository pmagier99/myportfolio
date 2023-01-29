import styled from 'styled-components'
import WorkOne from '../assets/portfolio/judywood.jpg'
import WorkTwo from '../assets/portfolio/nunagrooming.jpg'
import WorkThree from '../assets/portfolio/pawline.jpg'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaJsSquare} from 'react-icons/fa'
import {FaPhp} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import Title from "../components/Title";

const StyledPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Work = styled.div`
  img{
    width: 40%;
    border: 2px #F8CC34 solid;
    border-radius: 20px;
  }
  div{
    width: 40%;
    margin: 0 40px;
    h1{
      margin: 20px 0;
      color: #F8CC34; text-decoration: underline;
    }
    p{margin-top: 20px;}
    svg{font-size: 2rem; margin-right: 5px;};
  }
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px){
    img,div{width: 90%}
    flex-direction: column;
  }
  //&:hover{
  //  img{opacity: 50%};
  //  cursor: pointer;
  //
  //}
`

function Portfolio(){
    return(
        <>
        <StyledPortfolio>
            <Title name={"portfolio"}/>
            <Work>
                <img src={WorkOne} alt={"JudyWoodM4M"}/>
                <div>
                    <h1>Judy Wood M4M</h1>
                    <p>This page was created for Judy Wood. This is her portfolio website, to advert her business. On there users can sign up for her newsletter. The newsletter can be managed over the specially created admin panel.</p>
                    <p></p>
                    <p>Technology used:</p>
                    <FaHtml5/><FaCss3Alt/><FaJsSquare/><FaPhp/>
                </div>
            </Work>
            <Work>
                <img src={WorkTwo} alt={"NunaGrooming"}/>
                <div>
                    <h1>Nuna Grooming</h1>
                    <p>This website was created for Nuna Grooming. This is a one-page website to advert private business, book appointments and leave reviews. The content can be modified via specially created admin panel.</p>
                    <p>Technology used:</p>
                    <FaHtml5/><FaCss3Alt/><FaJsSquare/><FaPhp/>
                </div>
            </Work>
            <Work>
                <img src={WorkThree} alt={"PawlinePortfolio"}/>
                <div>
                    <h1>Pawline portfolio</h1>
                    <p>This is a portfolio website craeted for Pawline. The page is build of sub-pages where all her work can be seen. </p>
                    <p>Technology used:</p>
                    <FaHtml5/><FaCss3Alt/><FaJsSquare/><FaReact/>
                </div>
            </Work>

        </StyledPortfolio>
        </>
    )
}

export default Portfolio;