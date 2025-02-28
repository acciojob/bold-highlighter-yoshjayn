let strongTexts = document.querySelectorAll("strong")


function highlight() {
    //Write your code here
for(let s of strongTexts){
	s.style.color = "rgb(0, 128, 0)"
}

}


function return_normal() {
    //Write your code here
for(let s of strongTexts){
	s.style.color = "rgb(0, 0, 0)"
}
    
}
