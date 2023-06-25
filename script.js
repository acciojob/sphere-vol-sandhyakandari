function volume_sphere() {
   let radi=document.getElementById("radius").value;
            let vol= document.getElementById("volume");
            let cal=(4/3)*(22/7)*(radi*radi*radi);
           // console.log(radi.value);
              vol.value=cal;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
