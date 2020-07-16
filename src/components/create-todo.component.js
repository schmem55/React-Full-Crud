import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateTodo() {

  const [todoDescription,setTodoDescription] = useState("");
  const [todoResponsible,setTodoResponsible] = useState("");
  const [todoPriority,setTodoPriority] = useState("");
  const [todoCompleted,setTodoCompleted] = useState(false);
 
  function onChangeTodoDescription(e){
    setTodoDescription(e.target.value)
  }

  function onChangeTodoResponsible(e){
    setTodoResponsible(e.target.value)
  }

  function onChangeTodoPriority(e){
    setTodoPriority(e.target.value)
  }

  function onSubmit(e){
    e.preventDefault();
    console.log("form submitted:")
    console.log("todo description"+todoDescription)
    console.log("todo reponsible"+todoResponsible)

    console.log("todo priority  "+todoPriority)
    console.log("todo completed"+todoCompleted)


    setTodoDescription("")
    setTodoResponsible("")
    setTodoPriority("")
    setTodoCompleted(false)

  }
  return (
    <div style={{marginTop:20}}>
      <h3>Create new todo</h3>
      <form onSubmit={(e)=>onSubmit(e)}>
        <div className="form-group">
          <label>Description:</label>
          <input 
            type="text"
            className="form-control"
            value={todoDescription}
            onChange={(e)=>onChangeTodoDescription(e)}
          />
        </div>
        <div className="form-group">
          <label>Responsible:</label>
          <input 
            type="text"
            className="form-control"
            value={todoResponsible}
            onChange={(e)=>onChangeTodoResponsible(e)}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={todoPriority==='Low'}
              onChange={(e)=>onChangeTodoPriority(e)}
            />
            <label className="form-check-label">Low</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={todoPriority==='Medium'}
              onChange={(e)=>onChangeTodoPriority(e)}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={todoPriority==='High'}
              onChange={(e)=>onChangeTodoPriority(e)}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-group">
          <input 
            type="submit"
            value="Create TODO "
            className="btn btn-primary"
          />

        </div>
      </form>
    </div>
  );
}


