/*script for the slide show*/
var i = 1;
	function changeImage() {
		if(i==1)
       		document.getElementById("slideimg").src="https://i.pinimg.com/474x/de/cb/7b/decb7b925ec7b6893ff8fbb512ec9024.jpg";
		else if(i==2)
      		 document.getElementById("slideimg").src="https://i.pinimg.com/474x/48/1a/4b/481a4ba27b2455900a851b8220df7b98.jpg";
		else if(i==3)
      		 document.getElementById("slideimg").src="https://i.pinimg.com/474x/dc/a5/f1/dca5f1571fc50aee71315cff6def14ae.jpg";
      	else if(i==4)
      		 document.getElementById("slideimg").src="https://i.pinimg.com/474x/d3/bc/d5/d3bcd5401e1875c04bce6823546b0e6f.jpg";
      	else if(i==5)
      		 document.getElementById("slideimg").src="https://i.pinimg.com/236x/29/b7/37/29b737bb256fa89406b5b39ecd3d365e.jpg";
	   
		i++;
		if(i==6)
		  i=1;
	}
function start(){
	var time = setInterval( "changeImage()", 1000); 
}
