import React from "react";
import ReduxExamples from "./ReduxExamples";
import Add from "./Add";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return (
        <>
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <Add a={1} b={2} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <TodoList />

        </>
    );
};
export default Assignment4;