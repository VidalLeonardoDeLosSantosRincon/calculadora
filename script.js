
document.querySelector(".CE").addEventListener("click", setear);
document.querySelector(".C").addEventListener("click", setear2);
document.querySelector(".delete").addEventListener("click", setearDeUno);
document.querySelector(".igual").addEventListener("click", calcular);

document.querySelector(".btn-clean-history").addEventListener("click", eliminarDatos);

document.querySelector(".por").addEventListener("click", tecla);
document.querySelector(".entre").addEventListener("click", tecla);
document.querySelector(".mas").addEventListener("click", tecla);
document.querySelector(".menos").addEventListener("click", tecla);
document.querySelector(".punto").addEventListener("click", tecla);
document.querySelector(".cero").addEventListener("click", tecla);
document.querySelector(".uno").addEventListener("click", tecla);
document.querySelector(".dos").addEventListener("click", tecla);
document.querySelector(".tres").addEventListener("click", tecla);
document.querySelector(".cuatro").addEventListener("click", tecla);
document.querySelector(".cinco").addEventListener("click", tecla);
document.querySelector(".seis").addEventListener("click", tecla);
document.querySelector(".siete").addEventListener("click", tecla);
document.querySelector(".ocho").addEventListener("click", tecla);
document.querySelector(".ocho").addEventListener("click", tecla);
document.querySelector(".nueve").addEventListener("click", tecla);




let screen = document.querySelector(".s1");
let screen2 = document.querySelector(".s2");

function tecla(e){

    
     
	let cadena = screen.value;
	let count = cadena.length-1,
	result = cadena.substring(count,count+1);
	
	if(
		result=="+" && e.target.value=="+" || result=="+" && e.target.value=="*" 
		|| result=="+" && e.target.value=="/" 


		|| result=="-" && e.target.value=="-" || result=="-" && e.target.value=="*" 
		|| result=="-" && e.target.value=="/" 
		
		
		|| result=="*" && e.target.value=="*" || result=="*" && e.target.value=="/"
		|| result=="*" && e.target.value=="+" || result=="*" && e.target.value=="-"
		

		|| result=="/" && e.target.value=="/" || result=="/" && e.target.value=="*" 
		|| result=="/" && e.target.value=="+" || result=="/" && e.target.value=="-"
		


		|| result=="" && e.target.value=="/" || result=="" && e.target.value=="*" 
		|| result=="" && e.target.value=="+" || result=="" && e.target.value=="-"

        || result=="." && e.target.value=="." 
		){
     		
	}
    else{


    	if(result=="" && e.target.value=="." 
    		|| result=="*"  && e.target.value=="."
    		|| result=="/"  && e.target.value=="."
    		|| result=="+"  && e.target.value=="."
    		|| result=="-"  && e.target.value=="."){

         screen.value +=`0${e.target.value}`;

                
    	}else{

               
           screen.value += e.target.value;

         		
    	}

	}
	


    
}


function teclaPresionada() {
      
      console.log("key pressed ", event.keyCode);

     if(event.keyCode==96 || event.keyCode==48 ){
     	screen.value += "0";

     }else  if(event.keyCode==97 || event.keyCode==49){
     	screen.value += "1";

     }else  if(event.keyCode==98 || event.keyCode==50){
     	screen.value += "2";

     }else  if(event.keyCode==99 || event.keyCode==51 ){
     	screen.value += "3";

     }else  if(event.keyCode==100 || event.keyCode==52){
     	screen.value += "4";

     }else  if(event.keyCode==101 || event.keyCode==53){
     	screen.value += "5";

     }else  if(event.keyCode==102 || event.keyCode==54){
     	screen.value += "6";

     }else  if(event.keyCode==103 || event.keyCode==55){
     	screen.value += "7";

     }else  if(event.keyCode==104 || event.keyCode==56){
     	screen.value += "8";

     }else  if(event.keyCode==105 || event.keyCode==57){
     	screen.value += "9";

     }

     
}




let historial = document.querySelector(".history-content");


function calcular(){

let evalo = eval(screen.value);


if(typeof(evalo)=="number" && evalo!=undefined){
	
screen2.value = screen.value+" = "+evalo;

screen.value="";


historial.innerHTML += screen2.value;
let history = historial.innerHTML;



if(typeof(window.localStorage) != 'undefined' ){ 
			 window.localStorage.setItem ("historial",history); 
		} 
		else{ 
			throw "window.localStorage, not defined"; 
		}



traerDatos();

}


}



function traerDatos(){


if(typeof(window.localStorage) != 'undefined'){ 
			hist = window.localStorage.getItem("historial"); 
			historial.innerHTML = hist+"<br>";
		} 
		else{ 
			throw "window.localStorage, not defined"; 
		}

}

function eliminarDatos(){


if(typeof(window.localStorage) != 'undefined'){ 
			window.localStorage.clear();
			traerDatos();
		} 
		else{ 
			throw "window.localStorage, not defined"; 
		}

}



function setear(){
	screen.value="";
	screen2.value="";
}
function setear2(){
	screen.value="";
}

function setearDeUno(){

	let cadena = screen.value;
	let count = cadena.length-1,
	result = cadena.substring(0,count);
	screen.value = result;
}


/*//Vidal Leonardo De Los santos Rincon 2016-3762*/