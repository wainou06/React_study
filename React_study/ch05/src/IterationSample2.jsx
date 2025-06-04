function IteratonSample2() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name, index) => <li key={index}>{name}</li>)
   console.log(nameList)

   // ★리액트에서는 요소(태그, 컴포넌트)를 반복할때 반드시 요소를 구분하기 위한 key를 지정해줘야 한다 -> key는 중복 X
   return <ul>{nameList}</ul>
}

export default IteratonSample2
