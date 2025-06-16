// initial는 JSON 객체로 생성
const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
   // 타입명은 자유롭게 지정
   switch (action.type) {
      case 'increment':
         // ★리덕스는 항상 불변성을 유지해야 한다(새로운 객체를 만들어 반환)
         return { count: state.count + action.payload }

      case 'decrement':
         return { count: state.count - action.payload }

      default:
         // 맨처음 사이트에 들어오는 경우, action 값이 없기 때문에 initialState를 변환해주도록 저렇게 설정
         return state
   }
}

export default counterReducer
