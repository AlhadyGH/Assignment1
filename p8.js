function divisble (num){
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Divisible by both");
    } else {
        console.log("Not divisible by both");
    }
}
divisble (15)