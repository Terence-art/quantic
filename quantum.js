//quantic
var a=[]; b="1";c=0;
function quanto() {for (c=0,a.length=0;a.length<10;c++){a.push(b);console.log(a)}};
function bingo () {setInterval(quanto(),1000)};
bingo();
