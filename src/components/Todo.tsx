import { useState } from "react"



interface Todo{
    id:number
    text:string
    completed:boolean

}

export default function Todo(){
    const [id ,setId] = useState<number>(0)
    const[text,setText] = useState<string>("")


    const [task,setTask] = useState<Todo[]>([])


    function handleToggle(id:number){
        setTask(
            task.map(task => {
                if(task.id == id){
                    return {
                        ...task,completed: !task.completed
                    };
                }
                return task;
            })
        )
      
    }

    function deleteTask(id:number){
        setTask(
            task.filter(task => task.id != id)
        )
    }
    

    return(
        <>
            <h1 style={{padding:'10px'}}>To-Do APP</h1>
            <div>
                <input type="text" placeholder="Enter the task" value={text} onChange={(e) => {setText(e.target.value)}}></input>
                <button onClick={() => {if(text.trim()=== "")return; setTask( [...task,{id,text,completed:false}] )
                        setText("") 
                        setId( (id) => id + 1 )
                        }}>Add</button>

                <ul>
                    {task.map((task) => ( 
                        <li key={task.id} style={{
                            textDecoration:task.completed?"line-through":'none'}}>
                            
                            
                            
                            {task.text}&nbsp;
                            <input type="checkbox" onClick={()=>handleToggle(task.id)}></input>&nbsp;
                            <button onClick={()=>{deleteTask(task.id)}}>delete</button>
                        </li>
                    ) )}

                </ul>



            </div>
        </>
    );
}