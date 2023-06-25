function volume_sphere() {
   let radi=document.getElementById("radius").value;
            let vol= document.getElementById("volume");
       radi=Math.abs(radi);        
	let cal=(4/3)*Math.PI*Math.pow(radi,3);
    cal=cal.toFixed(4);            
	vol.value=cal;
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
