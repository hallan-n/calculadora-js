const display = document.getElementById('display')
writeDisplay = (value) => {
    if (display.innerHTML == '0') {
        display.innerHTML = ''
    }
    display.innerHTML += value;
}
clearDisplay = () => display.innerHTML = '0'
clearDisplayChar = () => {
    let value = display.innerHTML.substring(0, display.innerHTML.length - 1)
    display.innerHTML = value
    if (display.innerHTML == '') {
        display.innerHTML = '0'
    }
}
result = () => {
    let value = eval(display.innerHTML)
    display.innerHTML = value
}