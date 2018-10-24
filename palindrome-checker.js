function palindrome(str) {
  // Good luck!
  var reg = new RegExp("[_\\W]","g");
  var newStr = str.replace(reg,"").toLowerCase();
  var backStr = "";

  for(var i=newStr.length-1;i>=0;i--){
    backStr += newStr[i];
  }
  if (newStr === backStr){
  return true;
  } else {
    return false;}
}
