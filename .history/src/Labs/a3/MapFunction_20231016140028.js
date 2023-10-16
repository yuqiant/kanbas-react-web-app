function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = a => {
        return a * a;
    }

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    console.log(numberArray1)
    return (
        <>
            <h4>Map</h4>
            squares = {squares}<br />




        </>


    );

}