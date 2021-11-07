import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Todo,
  TodoContainer,
  ToDoHeader,
  ToDoDate,
  DeleteButton,
  ListContainer,
  Inputs,
  PlusButton,
  MinusButton,
  InputBox,
  InputArea,
  AddButton,
  TrashButton,
} from "../assets/styled";

const ToDoPage = () => {
  const [plan, setPlan] = useState("");
  const [todos, setTodos] = useState([
    {
      name: "Asnak",
      active: false,
    },
  ]);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setPlan(e.target.value);
    }
  };

  const addTodo = (event) => {
    if (plan.length > 0) {
      setTodos((prev) => [...prev, { name: plan, active: false }]);
    }
  };

  const handleDelete = (todoIndex) => {
    setTodos((prev) => prev.filter((necessary, index) => index !== todoIndex));
  };

  const handleLine = (todoIndex) => {
    let tod = todos;
    tod.map((element, index) => {
      if (index == todoIndex) {
        tod[index].active = !tod[index].active;
        console.log(todos);
      }
    });
    setTodos([...tod]);
  };

  const handleOpenBox = () => {
    setOpen(!open);
  };

  setInterval(omerTimer, 1000);
  function omerTimer() {
    let today = new Date().toLocaleString()
    document.getElementById("date").textContent = today.substr(0, 10)
    document.getElementById("time").textContent = today.substr(11)
  }


  return (
    <Todo>
      <TodoContainer>
        <TrashButton
          startIcon={<DeleteIcon style={{ fontSize: 50 }} />}
          onClick={() => setTodos([])}
        ></TrashButton>

        <ToDoHeader>To-do list</ToDoHeader>

        <ToDoDate id="date"></ToDoDate>
        <ToDoDate id="time"></ToDoDate>
    

        <div style={{ height: 300, overflow: "auto" }}>
          {todos.map((element, index) => (
            <ListContainer key={index}>
              <Inputs className={!element.active ? "" : "line"}>
                {element.name}
              </Inputs>
              <DeleteButton
                className="deleteButton"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(index)}
              ></DeleteButton>
              <Checkbox
                icon={<CircleOutlinedIcon />}
                checkedIcon={<CheckCircleOutlinedIcon />}
                checked={element.active}
                onChange={() => handleLine(index)}
              ></Checkbox>
            </ListContainer>
          ))}
        </div>

        <PlusButton className={open ? "hidden" : ""} onClick={handleOpenBox}>
          +
        </PlusButton>
        <MinusButton className={open ? "" : "hidden"} onClick={handleOpenBox}>
          -
        </MinusButton>

        <InputBox id="input-box" className={open ? "" : "hide"}>
          <InputArea
            type="text"
            id="input-area"
            placeholder="Type your task..."
            value={plan}
            onChange={handleChange}
          ></InputArea>
          <AddButton
            onClick={addTodo}
            startIcon={<AddCircleOutlineIcon />}
          ></AddButton>
        </InputBox>
      </TodoContainer>
    </Todo>
  );
};

export default ToDoPage;
