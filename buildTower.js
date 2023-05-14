const buildTower = (n) => {
    const text = [];
    let textString = '*'
    for (i = 0; i < n; i++) {
        text.push(textString)
        textString += '**'
        for (j = 0; j < i; j++) {
            text[j] = ' ' + text[j] + ' '
        }
    }
    return text
}

console.log(buildTower(6))