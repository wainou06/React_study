import styled from 'styled-components'

const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};
   font-size: ${(props) => props.size || '10px'};

   // &는 현재 컴포넌트를 의미
   // 가상클래스(:hover, :focus, :active)나 가상요소(::before, ::after)와 결합해서 사용
   &:hover {
      background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
   }
`

function ReactButton6() {
   return (
      <>
         <PrimaryButton size="20px" primary>
            Normal
         </PrimaryButton>
         <PrimaryButton>Normal</PrimaryButton>
      </>
   )
}

export default ReactButton6
