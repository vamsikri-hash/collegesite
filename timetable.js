//for section A

var modal = document.getElementById('simplemodal');
var modalbtn = document.getElementById('modalbut');
var closebtn = document.getElementsByClassName('closbtn')[0];


// listen for click

modalbtn.addEventListener('click', openmodal);

closebtn.addEventListener('click', closemodal);


//function for open

function openmodal() {
    modal.style.display = 'block';
}

//function for close

function closemodal() {
    modal.style.display = 'none';
}


//for section B
var modal1 = document.getElementById('simplemodal1');
var modalbtn1 = document.getElementById('modalbut1');
var closebtn1 = document.getElementsByClassName('closbtn1')[0];


modalbtn1.addEventListener('click', openmodal1);

closebtn1.addEventListener('click', closemodal1);


//function for open

function openmodal1() {
    modal1.style.display = 'block';
}

//function for close

function closemodal1() {
    modal1.style.display = 'none';
}

//for section C

var modal2 = document.getElementById('simplemodal2');
var modalbtn2 = document.getElementById('modalbut2');
var closebtn2 = document.getElementsByClassName('closbtn2')[0];


modalbtn2.addEventListener('click', openmodal2);

closebtn2.addEventListener('click', closemodal2);


//function for open

function openmodal2() {
    modal2.style.display = 'block';
}

//function for close

function closemodal2() {
    modal2.style.display = 'none';
}

//for section D
var modal3 = document.getElementById('simplemodal3');
var modalbtn3 = document.getElementById('modalbut3');
var closebtn3 = document.getElementsByClassName('closbtn3')[0];


modalbtn3.addEventListener('click', openmodal3);

closebtn3.addEventListener('click', closemodal3);


//function for open

function openmodal3() {
    modal3.style.display = 'block';
}

//function for close

function closemodal3() {
    modal3.style.display = 'none';
}