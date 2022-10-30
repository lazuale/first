let result = '';

const value = 15;

for (let i = 1; i < value; i++) {

    for (let j = 0; j < i; j++){
        result += '*';
    }

    result += '\n';
}

console.log(result);