import TodoItem from "./todoItem";
import { data } from "./data";
import TodoController from "./TodoController";

const simpleTodo:TodoItem[] = data.map(
    (item)=>new TodoItem(item.id,item.task,item.complete)
);

const myTodoCollection = new TodoController("my Todo List", simpleTodo);

myTodoCollection.addTodo("JavaScript 학습하기.")
myTodoCollection.addTodo("친구만나기")

myTodoCollection.makeComplete(3,true)

console.log(`${myTodoCollection.userName}`)

myTodoCollection.getTodoItems(true).forEach((item)=>item.printDetails())
console.log("=============================================")
myTodoCollection.getTodoItems(false).forEach((item)=>item.printDetails())
myTodoCollection.remvoeComplete()
console.log("=============================================")
myTodoCollection.getTodoItems(true).forEach((item)=>item.printDetails())
