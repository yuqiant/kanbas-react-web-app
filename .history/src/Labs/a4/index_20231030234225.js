import React from "react";
import Add from "./Add";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";


const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return (
        <>
            <h1>Assignment 4</h1>
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <Add a={1} b={2} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />

        </>
    );
};
export default Assignment4;