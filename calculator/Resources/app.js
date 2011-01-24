///////
// codings for calculator



//function for factorial

function factorial(n) {
  if ((n == 0) || (n == 1))
    return 1
   else {
      result = (n * factorial(n-1) )
      return result;
   }
}

// function to find  fibonacci values 

 function calcFibo(n) {
        if (n > 2) {
            r = calcFibo(n - 2) + calcFibo(n - 1);
	return r
        } else {             
            return 1;
        }
    }


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Calculator',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Calculator',
    window:win1
});



// create text field

var blurbField = Ti.UI.createTextField({
    hintText: "Enter Number",
    height:40,
    top: 25,
    left: 10,
    right: 10,
    borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
win1.add(blurbField);



// create button1

var Button1 = Ti.UI.createButton({
    title: "1",
    top: 85,
    left: 20,
    width: 40,
    height: 35
});
win1.add(Button1);


Button1.addEventListener('click', function() {

	updatestring('1');
});



// create button2

var Button2 = Ti.UI.createButton({
    title: "2",
    top: 85,
    left: 80,
    width: 40,
    height: 35
});
win1.add(Button2);


Button2.addEventListener('click', function() {

	updatestring('2');
});

// create button3

var Button3 = Ti.UI.createButton({
    title: "3",
    top: 85,
    left: 130,
    width: 40,
    height: 35
});
win1.add(Button3);


Button3.addEventListener('click', function() 
{	
	updatestring('3');
});

// create button4

var Button4 = Ti.UI.createButton({
    title: "4",
    top: 85,
    left: 180,
    width: 40,
    height: 35
});
win1.add(Button4);


Button4.addEventListener('click', function() 
{	
	updatestring('4');
});

// create button5

var Button5 = Ti.UI.createButton({
    title: "5",
    top: 85,
    left: 240,
    width: 40,
    height: 35
});
win1.add(Button5);


Button5.addEventListener('click', function() 
{	
	updatestring('5');
});


// create button6

var Button6 = Ti.UI.createButton({
    title: "6",
    top: 135,
    left: 20,
    width: 40,
    height: 35
});
win1.add(Button6);


Button6.addEventListener('click', function() 
{	
	updatestring('6');
});

// create button7

var Button7 = Ti.UI.createButton({
    title: "7",
    top: 135,
    left: 80,
    width: 40,
    height: 35
});
win1.add(Button7);


Button7.addEventListener('click', function() 
{	
	updatestring('7');
});

// create button8

var Button8 = Ti.UI.createButton({
    title: "8",
    top: 135,
    left: 130,
    width: 40,
    height: 35
});
win1.add(Button8);


Button8.addEventListener('click', function() 
{	
	updatestring('8');
});

// create button9

var Button9 = Ti.UI.createButton({
    title: "9",
    top: 135,
    left: 180,
    width: 40,
    height: 35
});
win1.add(Button9);


Button9.addEventListener('click', function() 
{	
	updatestring('9');
});

// create button0

var Button0 = Ti.UI.createButton({
    title: "0",
    top: 135,
    left: 240,
    width: 40,
    height: 35
});
win1.add(Button0);


Button0.addEventListener('click', function() 
{	
	updatestring('0');
});



// create button plus

var ButtonA = Ti.UI.createButton({
    title: "+",
    top: 180,
    left: 20,
    width: 40,
    height: 35
});
win1.add(ButtonA);

ButtonA.addEventListener('click', function() {

	//var value = blurbField.value
	//Ti.API.log('debug',blurbField.value);
	
		updatestring('+');
});

// create button Minus

var ButtonMinus = Ti.UI.createButton({
    title: "-",
    top: 220,
    left: 20,
    width: 40,
    height: 35
});
win1.add(ButtonMinus);


ButtonMinus.addEventListener('click', function() 
{	
	updatestring('-');
});


// create button Multiply

var ButtonMul = Ti.UI.createButton({
    title: "*",
    top: 220,
    left: 80,
    width: 40,
    height: 35
});
win1.add(ButtonMul);


ButtonMul.addEventListener('click', function() 
{	
	updatestring('*');
});


// create button Division

var ButtonDiv = Ti.UI.createButton({
    title: "/",
    top: 220,
    left: 130,
    width: 40,
    height: 35
});
win1.add(ButtonDiv);


ButtonDiv.addEventListener('click', function() 
{	
	updatestring('/');
});

// create button for fibonacci values

var ButtonFibo = Ti.UI.createButton({
    title: "Fib",
    top: 180,
    left: 80,
    width: 40,
    height: 35
});
win1.add(ButtonFibo);



ButtonFibo.addEventListener('click', function() {

	var value = blurbField.value
	Ti.API.log('debug',blurbField.value);
	if(isNaN(value)){
	
	alert('please enter a number' );
		blurbField.value='';
		
	}else{
		var number = parseInt(blurbField.value);
		calcFibo(number);
		blurbField.value = 'Fibonacci Series of ' + number + ' is ' + r;
	}
});



// create buttonanswer

var Button_ans = Ti.UI.createButton({
    title: "=",
    top: 180,
    width: 50,
    left: 180,
    height: 35
});
win1.add(Button_ans);


Button_ans.addEventListener('click', function() {

	var equ = eval(inputstring);
	inputstring = '';
	updatestring(equ);
});


// create factorial_button

var ButtonF = Ti.UI.createButton({
    title: "!",
    top: 180,
    width: 40,
    right: 150,
    height: 35
});
win1.add(ButtonF);



ButtonF.addEventListener('click', function() {
//alert('clicked button');
	var value = blurbField.value
	Ti.API.log('debug',blurbField.value);
	if(isNaN(value)){
	
	alert('please enter a number' );
		blurbField.value='';
		
	}else{
		var number = parseInt(blurbField.value);
		factorial(number);
		blurbField.value = 'Factorial of ' + number + ' is ' + result;
	}
});




// create button_clear

var ButtonC = Ti.UI.createButton({
    title: "AC",
    top: 180,
    width: 40,
    left: 240,
    height: 35
});
win1.add(ButtonC);


ButtonC.addEventListener('click', function() {

	var value = blurbField.value
	blurbField.value='';
	inputstring = '';
});


// function

var inputstring="";
function updatestring(value)
{
inputstring += value;
blurbField.value=inputstring;

}

//
//  add tabs
//
tabGroup.addTab(tab1);  
  


// open tab group
tabGroup.open();
