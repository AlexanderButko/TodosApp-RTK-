import React, {FC, useState} from 'react';
import {ITodo} from "../Types/todos";
import Todo from "./todo/Todo";

const TodosList : FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([
        {id: 1, title: 'Задача 1', description: 'Описание 1'},
        {id: 2, title: 'Задача 2', description: 'Описание 2'},
        {id: 3, title: 'Задача 3', description: 'Описание 3'},
        {id: 4, title: 'Задача 4', description: 'Описание 4'}
    ])
    return (
        <div>
            {todos.map(todo => <Todo
                todo = {todo}
            />)}
        </div>
    );
};

export default TodosList;