import styled from 'styled-components'

const StyledTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  h2{font-size: 2rem; margin: 100px 10px;}
  div{
    height: 3px;
    width: 250px;
    background-color: #F8CC34;
  }
`

function Title(props){
    return (
        <>
            <StyledTitle><div></div><h2>{props.name}</h2><div></div></StyledTitle>
        </>
    )
}

export default Title;