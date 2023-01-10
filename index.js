setInterval (myWatch, 1000)


function myWatch() {
    let d = new Date ()
    document.getElementById("time-el").innerHTML = 
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds()
    
}
