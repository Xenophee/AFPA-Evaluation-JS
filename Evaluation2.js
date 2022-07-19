var number = Number(prompt("Entrez un chiffre "));



function tableMultiplication(number) {

    for (let i = 1; i <= 10; i++) {

        var result = i * number;
    
        console.log(`${number} * ${i} = ${result}`);
    }
};

tableMultiplication (number);




