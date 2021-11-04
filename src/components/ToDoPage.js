import React from "react";
import {
  Todo,
  TodoContainer,
  ToDoHeader,
  TrashBin,
  ToDoDate,
} from "../assets/styled";

const ToDoPage = () => {
  return (
    <Todo>
      <TodoContainer>
        <TrashBin></TrashBin>

        <ToDoHeader>To-do list</ToDoHeader>

        <ToDoDate>November 4. 2021</ToDoDate>

        


      </TodoContainer>
    </Todo>
  );
};

export default ToDoPage;
