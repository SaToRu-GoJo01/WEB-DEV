var i = 9;
console.log(isNaN(i));

try{
    i.toPrecision(500);
}
catch(e){
    console.log(e.message);
}


try {
    eval("alert('Hello')");   // Missing ' will produce an error
  }
  catch(err) {
    // document.getElementById("demo").innerHTML = err.name;
    console.log(err.name);
  }