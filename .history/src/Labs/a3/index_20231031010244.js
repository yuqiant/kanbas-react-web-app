import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <ConditionalOutput />
            <Classes />
            <JavaScript />
            <PathParameters />
            <Styles />
            <TodoItem />
            <TodoList />

        </div>
    );
}
export default Assignment3;