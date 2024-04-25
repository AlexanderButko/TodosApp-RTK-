import React, {FC} from 'react';
import {ITodo} from "../../Types/todos";
import  styles from './todo.module.css'

interface ITodoProps{
    todo: ITodo,
}

const Todo : FC<ITodoProps> = ({todo }) => {
    return (
        <div className={styles.container}>
           <h3>{todo.title}</h3>
           <div>{todo.description}</div>
        </div>
    );
};

export default Todo;