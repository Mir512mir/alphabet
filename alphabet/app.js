 function alphabetorder(str) {
     return str.split ('').sort().join ('');} 
     console.log (alphabetorder("uncopyrightable"));
       document.writeln(alphabetorder("uncopyrightable"));
  function findlongestword(str) {
       let array1 = str.match(/\w[a-z]{0,}/gi);
        
       let result = array1[0];
       console.log(array1);
  for(let i = 1 ; i < array1.length ; i++) {
    if(result.length < array1[i].length)
    {
    result = array1[i];
    }
  }
  return result;
}
    
       document.writeln(findlongestword('Web Development In Telran'));