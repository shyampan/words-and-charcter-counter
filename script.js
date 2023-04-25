
let loc = 0;
let now = 0;
const ram = () => {

    if(now == 0 || loc == 0)  document.getElementById('show').innerHTML ="0" + " words " +"0" + "   character";
    
    loc = document.getElementById('message').value.length;
    now = document.getElementById('message').value;

    now = now.match( /\w+/g );
    now = now.length;
    
   
    document.getElementById('show').innerHTML = now + " words " +loc + "   character";
}
    

const shyam = ()=> {

    loc = document.getElementById('message').value.length;
    now = document.getElementById('message').value;

    now = now.match( /\w+/g );
    now = now.length;
    
    
    document.getElementById('show').innerHTML = now + " words " +loc + "   character";
    
}
    

    
   
   

