let counterFunc = (counter) => {
    if (counter > 100) {
        counter = 0;
    } else {
        counter++;
    }
    return counter;
}
console.log(counterFunc(73))