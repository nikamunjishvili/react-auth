import React, { useState } from "react";
import styled from "styled-components";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodoItem = () => {
    setTodos((prevItem) => [...prevItem, { text: input, checked: false }]);
    setInput("");
  };

  const handleDeleteTodoItem = (indexToDelete) => {
    setTodos((prevItems) =>
      prevItems.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleCheckboxChange = (indexToUpdate) => {
    setTodos((prevItems) =>
      prevItems.map((item, index) => {
        if (index === indexToUpdate) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  return (
    <Wrapper>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="write something..."
      />
      <Button onClick={handleAddTodoItem}>+</Button>
      <div>
        <ul>
          {todos.map((item, index) => (
            <ListWrapper key={index}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <ListItem checked={item.checked}>{item.text}</ListItem>
              <button onClick={() => handleDeleteTodoItem(index)}>X</button>
            </ListWrapper>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default TodoApp;

const Wrapper = styled.div`
  width: 300px;
`;

const Input = styled.input`
  width: 50%;
  height: 7vh;
`;

const Button = styled.button`
  width: 70px;
  height: 7vh;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ListItem = styled.li`
  list-style: none;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;