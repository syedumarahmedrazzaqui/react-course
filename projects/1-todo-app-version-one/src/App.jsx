import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"
//we can do self close the tag <AppName /> like this aur we can close with both open and close tag <AppName></AppName>
//we have to use className instead of class in jsx
//we can make many components and attach it on app.jsx but we have to export it from there file and import on our app.jsx file

function App() {
  
  return <center className="todo-container">
    <AppName/>
      <div className="container ">
        <AddTodo />
        <TodoItem1></TodoItem1>
        <TodoItem2 />
      </div>
      
  </center>
}

export default App

