import './css/TodoTemplate.css'

function TodoTemplate({ children }) {
   // const { children } = props
   return (
      <div className="TodoTemplate">
         <div className="app-title">TODO LIST</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default TodoTemplate
