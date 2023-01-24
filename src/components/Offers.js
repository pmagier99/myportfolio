import styled from 'styled-components'
import Title from "./Title";

const StyledOffers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  ul {
    margin: 0 20px;
    list-style-type: none;
    background-color: #444444;
    border: 0 transparent solid;
    border-radius: 25px;
    padding: 15px 40px;
    .title {
      color: #F8CC34;
      font-size: 1.4rem;
      margin-bottom: 15px;
    }

    li {
      font-size: 1.1rem;
    }
  }
`


function Offers(){
    return(
        <>
            <Title name={"what I offer"} />
            <StyledOffers>
                <ul>
                    <li className={"title"}>Development</li>
                    <li>I fully develop your dream website according to your idea and type of business.</li>
                </ul>
                <ul>
                    <li className={"title"}>UI/UX Design</li>
                    <li>I design your website to your needs and needs of your users.</li>
                </ul>
                <ul>
                    <li className={"title"}>Quality Assurance</li>
                    <li>I make sure your website comes with best possible quality, by fully testing a product before it is deployed.</li>
                </ul>
                <ul>
                    <li className={"title"}>Support</li>
                    <li>I am here for you whenever you need upgrades or fixes in your website.</li>
                </ul>
            </StyledOffers>
        </>
    )
}

export default Offers;