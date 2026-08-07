import { useState } from "react"



interface Todo{
    id:number
    text:string
    completed:boolean

}

export default function Todo(){
    const [id ,setId] = useState<number>(0)
    const[completed,setCompleted] = useState<boolean>(true)
    const[text,setText] = useState<string>("")


    const [task,setTask] = useState<Todo[]>([])
    



    return(
        <>
            <h1 style={{padding:'10px'}}>To-Do APP</h1>
            <div>
                <input type="text" placeholder="Enter the task" value={text} onChange={(e) => {setText(e.target.value);  setCompleted(!completed); setId( (id) => id + 1 )}}></input>
                <button onClick={() => { setTask( [...task,{id,text ,completed}] )
                        setText("") 
                        
                        }}>Add</button>

                <ul>
                    {task.map((tasks) => ( 
                        <li key={id}>{tasks.text}  <button>Delete</button></li>
                    ) )}

                </ul>



            </div>
        </>
    );
}