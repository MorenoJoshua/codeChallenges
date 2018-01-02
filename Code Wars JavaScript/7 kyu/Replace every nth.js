function replaceNth(text, n, oldValue, newValue) {
  var count = 1;
  var splitString = text.split("");
  
  if ( n < 0 ){
    return text
  }
  
  for( var i = 0; i < splitString.length; i++){
    if (splitString[i] === oldValue){
      if(count % n === 0){splitString.splice(i, 1, newValue);}
      count += 1;
    }
  }
  
  return splitString.join("");

}