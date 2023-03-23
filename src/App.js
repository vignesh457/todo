import './App.css'
import React, { useState,useEffect } from 'react'
import { Button,FormControl,Input,InputLabel } from '@material-ui/core'
import Todo from './Todo/Todo'
import { collection, doc, addDoc, getDocs, deleteDoc,  serverTimestamp, query, orderBy } from "firebase/firestore"
import {db} from './firebase'

function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState("")
  const userCollection = collection(db, "todo-app")
  const sortedUserCollection = query(userCollection,orderBy("time","desc"))
  const getTodo = async () => {  
    const table = await getDocs(sortedUserCollection)
    setTodo(table.docs.map((doc) => ({...doc.data(),id: doc.id})));
  }
  useEffect(()=>{
      getTodo();
  }, [])

  const addTodo = async (event)=>{
    event.preventDefault();
    // setTodo([...todo,{task :input}])
    setInput("")
    await addDoc( userCollection, {task: input,time: serverTimestamp()} )
    getTodo()
  }

  const deleteTodo = async (id)=>{
    const userDoc = doc(db, "todo-app",id)
    await deleteDoc(userDoc)
    getTodo()
  }

  return (
    <div className="App">
      <h1>TODO</h1> 
      <form>
        <FormControl>
          <InputLabel>Write your TODO</InputLabel>
          <Input value={input} onChange={(event)=>setInput(event.target.value)}/>
          <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
          <ul>
            {todo.map((item)=>(
              <Todo key={item.id} deleteTodo={deleteTodo} item={item} />
            ))}
          </ul>
        </FormControl>
      </form>
      
    </div>
  );
}

export default App;
