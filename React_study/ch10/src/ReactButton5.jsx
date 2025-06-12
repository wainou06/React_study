import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

const ReactButton = (props) => {
   // 리액트 전통방식으로 만든 컴포넌트를 감싸기로 사용하고 싶다면 아래와 같이 className을 지정해준다
   return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
   background-color: salmon;
`

function ReactButton5() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </>
   )
}

export default ReactButton5
