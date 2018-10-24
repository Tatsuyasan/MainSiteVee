// Global variables
var call = "None";

// Events functions
function switchbacktotopvisibility() {
	var elem = document.getElementById('top');
	if (document.body.scrollTop > 49) {
		elem.style.visibility = "visible"; }
	else if (document.body.scrollTop <= 49) {
		elem.style.visibility = "hidden"; }
}

function coloractualmenu() {
	var menu1 = document.getElementById('menu1');
	var menu2 = document.getElementById('menu2');
	var menu3 = document.getElementById('menu3');
	var menu4 = document.getElementById('menu4');
	var scroller = document.body.scrollTop;
	menu1.className = "menu";
	menu2.className = "menu";
	menu3.className = "menu";
	menu4.className = "menu";
	if (scroller < 550) {
		menu1.className = "menuselected"; }
	if (scroller >= 550 && scroller < 1150) {
		menu2.className = "menuselected"; }
	if (scroller >= 1150 && scroller < 1750) {
		menu3.className = "menuselected"; }
	if (scroller >= 1750 ) {
		menu4.className = "menuselected"; }
}

// Events
window.onscroll = function switchtop(event) {
	coloractualmenu();
	switchbacktotopvisibility();
}

window.onmousewheel = function (event) {
	call = "User";
}

// Scrolling functions
function myscrolldown(i)
{
	if (call == "myscrolldown")
	{
		if (document.body.scrollTop + window.innerHeight > document.body.scrollHeight - 50)
		{
			document.body.scrollTop += 1;
			if (document.body.scrollTop + window.innerHeight < document.body.scrollHeight)
				setTimeout(function() { myscrolldown(i) }, 10);
		}
		else if (document.body.scrollTop < i - 100)
		{
			document.body.scrollTop += 10;
			if (document.body.scrollTop + window.innerHeight < document.body.scrollHeight)
				setTimeout(function() { myscrolldown(i) }, 10);
		}
		else if (document.body.scrollTop < i - 50)
		{
			document.body.scrollTop += 5;
			if (document.body.scrollTop + window.innerHeight < document.body.scrollHeight)
				setTimeout(function() { myscrolldown(i) }, 10);
		}
		else if (document.body.scrollTop < i)
		{
			document.body.scrollTop += 1;
			if (document.body.scrollTop + window.innerHeight < document.body.scrollHeight)
				setTimeout(function() { myscrolldown(i) }, 10);
		}
	}
}

function myscrollup(i)
{
	if (call == "myscrollup")
	{
		if (document.body.scrollTop < 50)
		{
			document.body.scrollTop -= 1;
			if (document.body.scrollTop > 0)
				setTimeout(function() { myscrollup(i) }, 10);
		}
		else if (document.body.scrollTop > i + 100)
		{
			document.body.scrollTop -= 10;
			if (document.body.scrollTop > 0)
				setTimeout(function() { myscrollup(i) }, 10);
		}
		else if (document.body.scrollTop > i + 50)
		{
			document.body.scrollTop -= 5;
			if (document.body.scrollTop + window.innerHeight > 0)
				setTimeout(function() { myscrollup(i) }, 10);
		}
		else if (document.body.scrollTop > i)
		{
			document.body.scrollTop -= 1;
			if (document.body.scrollTop > 0)
				setTimeout(function() { myscrollup(i) }, 10);
		}
	}
}

function myscroll(i)
{
	if (document.body.scrollTop < i)
	{
		call = "myscrolldown";
		myscrolldown(i);
	}
	else if (document.body.scrollTop > i)
	{
		call = "myscrollup";
		myscrollup(i);
	}
}

// Back to top visibility functions
function myshow()
{
	var elem = document.getElementById('top');
	var k = parseFloat(elem.style.opacity);
	if (k <= 0.9)
	{
			k += 0.1;
			elem.style.opacity = k;
			setTimeout(function() { myshow(); }, 15);
	}
	if (k > 0.9)
	{
		elem.style.opacity = 1.0;
		k = 1.0;
	}
}

function myhide()
{