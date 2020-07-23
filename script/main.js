let myImage = document.querySelector('img');

myImage.onclick = function(){
	let  mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/krishna.jpg')
		{myImage.setAttribute('src','images/kanha.jpg');}
	else
	{
		myImage.setAttribute('src','images/krishna.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('Please Enter Your Name.');
	if(!myName){
		setUserName();
	}
	else{
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Hare krishna, '+myName+' Pr.';}
}

if(!localStorage.getItem('name'))
{
	setUserName();
}
else
{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hare krishna, '+storedName+' Pr.';
}

myButton.onclick = function(){
	setUserName();
}
