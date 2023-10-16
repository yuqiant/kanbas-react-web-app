import React from "react";
import ConditionalOutputIfElse
    from "./ConditionalOutputInline";
import ConditionalOutputInline
    from "./ConditionalOutputInline";
const ConditionalOutput = () => {
    return (
        <>
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
        </>
    );
};
export default ConditionalOutput;