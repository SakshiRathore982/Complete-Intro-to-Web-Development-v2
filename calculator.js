let rtotal = 0;
let buffer = "0";
let prevoperator=null;
const screen = document.querySelector(".screen");
document.querySelector('.calc-button').addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
})
function buttonClick(value)
{
    if (isNaN(parseInt(value)))
    {
        handleSymbol(value);
    }
    else {
        handleNumber(value);
    }rerender();
}
function handleNumber(value) {
    if (buffer == "0")
    {
        buffer = value;
    }
    else  {
        buffer += value;
        }
    
}
function handleSymbol(value)
{
  switch(value)
  {
      case "C":
          buffer = 0;
          rtotal = 0;
          prevoperator = null;
          break;
      case "=":
          if (prevoperator === null) {
              return;
          }
          flushOperation(parseInt(buffer));
          prevoperator = null;
          buffer = " "+ rtotal;
          rtotal = 0;
          break;
      case "←":
          if (buffer.length === 1) {
              buffer = "0";
          }
          else {
              buffer = buffer.substring(0, buffer.length - 1);
          }
          break;
      default:
          handleMath(value);
          break;
  }
}
function handleMath(value)
{
    const intBuffer = parseInt(buffer);
    if (rtotal == 0)
    {
        rtotal = intBuffer;
    }
    else {
        flushOperation(intBuffer);
    }
    prevoperator = value;
    buffer = " ";
}
function flushOperation(intBuffer)
{
    if (prevoperator == "+") {
        rtotal += intBuffer;
    } else if (prevoperator == "-") {
        rtotal -= intBuffer;
    }else if (prevoperator == "*") {
        rtotal *= intBuffer;
    }else if (prevoperator == "/") {
        rtotal /= intBuffer;
    }
}
function rerender()
{
    screen.innerText = buffer;
}