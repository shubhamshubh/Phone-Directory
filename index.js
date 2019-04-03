var name=[];
var phno=[];
var badd=document.getElementById("badd");
var form=document.getElementById("form");
var listn=document.getElementById("listn");
var main=document.getElementById("main");
var bsum=document.getElementById("bsum");
var nm=document.getElementById("name");
var ph=document.getElementById("ph");
var del=document.getElementsByClassName("delete");
var seq=document.getElementsByClassName("seq");
var i=0;
form.style.display = "none";
console.log(seq.length);
function dele(a)
{
	seq[a].style.display = "none";
}
for(var i=0;i<del.length;i++)
{
	del[i].addEventListener("click",function(){
		var a=i+1;
		dele(a);
	});
}
console.log("Yes");
badd.addEventListener("click", function(){
	form.style.display = "block";
	badd.style.display = "none";
	main.style.display = "none";
});

bsum.addEventListener("click", function(){

    var x= nm.value;
    var y= ph.value;
	name[i]=x;
	phno[i]=y;
	var html= '<div class="seq"><span class="list"> ' + x + '</span> <span class="list">' + y + '</span> <span class="list"><button> Delete </button></span></div>';
	$('#main').append(html);
	form.style.display = "none";
	badd.style.display = "block";
	main.style.display = "block";
});

