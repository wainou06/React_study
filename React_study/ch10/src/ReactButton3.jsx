import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`

// 감싸기 기능을 이용해서 기존의 StyleButton의 성질을 그대로 가져온다
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

const StyleDiv = styled.div`
width: 100px;
height: 100px;
border: 1px solid green;
`

function ReactButton3() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <StyleDiv />
      </>
   )
}

export default ReactButton3
