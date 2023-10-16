function FunctionParenthesisAndParameters() {
    const square = a => {
        return a * a;
    }
    const plusOne = a => {
        return a + 1;
    }

    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <>
            <h3>FunctionParenthesisAndParameters</h3>
            twoSquared = {twoSquared} <br />


        </>
    )
}