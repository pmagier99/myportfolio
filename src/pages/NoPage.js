import styled from 'styled-components'

const StyledNoPage = styled.h1`
  span{color: #F8CC34}
  margin-top: 300px;
  
`
function NoPage(){
    return(
        <>
           <StyledNoPage><span>Error 404:</span> Page not found!</StyledNoPage>
        </>
    )
}

export default NoPage