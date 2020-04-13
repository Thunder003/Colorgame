var numsquare=6;
var colors=randomcolori(numsquare);
var pickedcolor=pickcolor1();
var h1=document.querySelector("h1");
var colordisp=document.getElementById("rgb");
colordisp.textContent=pickedcolor;
var mess=document.querySelector("#mess");
var squares=document.querySelectorAll(".square");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquare=3;
	colors=randomcolori(numsquare);
	pickedcolor=pickcolor1();
	colordisp.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display="none";
	}
});

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsquare=6;
	colors=randomcolori(numsquare);
	pickedcolor=pickcolor2();
	colordisp.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});


reset.addEventListener("click",function()
{
	colors=randomcolori(numsquare);
	pickedcolor=pickcolor2();
	colordisp.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	mess.textContent="";
	h1.style.backgroundColor="steelblue";
	reset.textContent="NEW COLOR";
});

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function()
	{
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor === pickedcolor){
			mess.textContent="CORRECT"; 	
			changedcolor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			reset.textContent="PLAY AGAIN";
		}
		else
			{
				this.style.backgroundColor="#23232	3";
				mess.textContent="TRY AGAIN"
			}
	});
}

function changedcolor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor1()
{
	var coco=Math.floor(Math.random()*3)
	return colors[coco];
}

function pickcolor2()
{
	var coco=Math.floor(Math.random()*6)
	return colors[coco];
}

function randomcolori(num)
{
	var ar=[];
	for(var i=0;i<num;i++)
	{
		ar.push(ranicolor())
	}
	return ar;
}

function ranicolor()
{
	var r=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}