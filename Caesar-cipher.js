function rot13(str) { // LBH QVQ VG!
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,.?!";
  var deCoded = "";
  var indexOfLetter = 0;

  for (var i=0; i<str.length; i++) {
    indexOfLetter = alphabet.indexOf(str[i]);
    if (indexOfLetter>25){
           deCoded += str[i];
        }   
         else if(indexOfLetter>12){
         deCoded += (alphabet[indexOfLetter - 13])
         }
         else if (indexOfLetter>=0){
          deCoded +=(alphabet[indexOfLetter + 13]); 
         }
         
         else if (indexOfLetter==-1)
         {
           deCoded += " ";
         }
    }
  
  return deCoded;
}


//test rot13("SERR PBQR PNZC");