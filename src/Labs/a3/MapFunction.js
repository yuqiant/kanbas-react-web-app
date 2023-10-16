function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = a => {
        return a * a;
    }
    const cube = a => {
        return a * a * a;
    }

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(cube);
    console.log(numberArray1)
    return (
        <>
            <h4>Map</h4>
            squares = {squares}<br />
            cubes = {cubes}

        </>


    );

}
export default MapFunction