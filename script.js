
//problem-1
//function used here to do action(change color)
function luck()
{
    document.getElementById("raja").style.background="green";
}
//problem-2
const currentHour = new Date().getHours();
//switch case used here to determine real time greeting
let greetingMessage;
switch (true)
 {
  case currentHour < 12.00:
    greetingMessage = "Good morning raja (❁´◡`❁)";
    break;
  case currentHour < 17.00:
    greetingMessage = "Good afternoon raja (❁´◡`❁)";
    break;
  case currentHour < 21.00:
    greetingMessage = "Good evening raja (❁´◡`❁)";
    break;
  default:
    const newLocal = greetingMessage = "Good night raja (❁´◡`❁)";
    break;
}
alert(greetingMessage);

