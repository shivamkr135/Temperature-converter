let cel = document.getElementById('c');
let fah = document.getElementById('f');

cel.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 9/5 )+ 32;
    fah.value = f;
});

fah.addEventListener('input', function(){
      let f= this.value;
      let c = (f - 32) * 5/9;
      cel.value = c; 
});

function clearAll(){
    if(cel.value && fah.value){
       this.value == "";
    }
}