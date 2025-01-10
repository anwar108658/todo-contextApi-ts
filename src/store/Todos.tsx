import { createContext, ReactNode, useContext, useState } from "react";



export interface TodosProviderProps{
    children:ReactNode
}

export interface Todo{
    id:number,
    text:string,
    isComplete:boolean,
    date:string,
}
export interface TodoInitial{
    todos:Todo[],
    addTodoHandler:(task:string) => void
    toggelTodo:(task:number) => void
    deleteTodo:(task:number) => void
}
const TodosContext = createContext<TodoInitial | null>(null)

export const TodoProvider = ({children}:TodosProviderProps) => {

    const [todos,setTodo] = useState<Todo[]>([])
    
    const addTodoHandler = (task:string) => {
        if (!task || task.trim() === "") {
            alert("Add Todo")
            return
        }
        setTodo((prev) => {
            const newData:Todo[] = [{
                id:Math.random()*1000-1,
                text:task,
                isComplete:false,
                date:`${new Date}`, 
            },
            ...prev
            ]
            return newData
        })
    }
    const toggelTodo = (id:number) => {
        setTodo((prev) => {
            const newTodo = prev.map((todo) => {
                if (todo.id === id) {
                    return {...todo,isComplete:!todo.isComplete} 
                }
                return todo
            })
            return newTodo
        })
    }
    const deleteTodo = (id:number) => {
        setTodo((prev) => {
            return prev.filter((todo) => todo.id !== id)
        })
    }
    return <TodosContext.Provider value={{todos,addTodoHandler,toggelTodo,deleteTodo}}>
        {children}
    </TodosContext.Provider>
}

export const useTodo = () => {
    const TodoC = useContext(TodosContext)
    if (!TodoC) {
        throw new Error
    }
    return TodoC
}