import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

const ReactButton = (props) => {
   return <button>{props.children}</button>
}

// 적용 X
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton4() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </>
   )
}

export default ReactButton4
