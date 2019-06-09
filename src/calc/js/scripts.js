document.querySelector('.keyboard').onclick=function(event){
    const e = event.target;
    const text = e.innerText;
    console.log('кликнули по ', e.innerHTML)
    if(text<10) {
        console.log('кликнули по цифре =>', text);
        numberClickHandler(text);
    }
    else if(text == '<') {deleteHandler()}
    else if(text == '*') console.log('умножить')
    else if(text == '/') console.log('знак деления') 
    else if(text == '+') console.log('знак плюс') 
    else if(text == '-') console.log('знак минус') 
    else if(text == '=') console.log('знак равно')
    else console.warn('кликнули мимо обработчиков!!')
}



/*
* отработка нажатий кнопок
*/
function numberClickHandler(num) {
    console.log('Запустился обработчик нажатий на кнопки');
    const el = document.querySelector('.display>p')
    const old = parseInt(el.innerText)
    let newNum;
    if(Number.isNaN(old) || old === 0){
        console.log("не число было на дисплее или 0")
        newNum = num
    }else{
        console.log("было ЧИСЛО на дисплее!")
        newNum = old+num;
    }

    if(newNum>179e+17) {
        newNum = old
        alert('превышение размера памяти js!')
    }
    
    el.innerText = newNum;

}

/*
* отработка удаления символа
*/
function deleteHandler() {
    const el = document.querySelector('.display>p')
    const old = el.innerText
    let newNum;
    if(Number.isNaN(old) || old < 10) {
        console.log("не число было на дисплее или менее 10")
        newNum = 0
    } else {
        console.log("было ЧИСЛО на дисплее!")
        newNum = old.substring(0, old.length - 1);
    }
    el.innerText = newNum;
}


/*
* отработка нажатий кнопок с клавиатуры!
*/
window.onkeypress = function (ev) {
    console.log(ev.key)
    if(ev.key<10) {
        numberClickHandler(ev.key);
    }
}


document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
function KeyCheck(event) {
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8: deleteHandler()// нажали backspace
        break; 
      case 46:// нажали delete (mac: fn+backspace)
        break;
      default:
        break;
   }
}