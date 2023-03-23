import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import css from './Todo.module.css'
import DeleteIcon from '@material-ui/icons/Delete';


function Todo(props) {
  return (
    <div className={css.card}>
        <List>
            <ListItem>
                <ListItemText primary={props.item.task}/>
                {/* <button onClick={(event)=>{
                  event.preventDefault()
                  props.deleteTodo(props.item.id)
                  }} >Remove</button> */}
                  <DeleteIcon color="secondary" onClick={(event)=>{
                  event.preventDefault()
                  props.deleteTodo(props.item.id)
                  }} />
            </ListItem>
        </List>
    </div>
  )
}

export default Todo