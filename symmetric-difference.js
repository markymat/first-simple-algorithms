function sym(args) {
let finalArr = []
let symetric = function (a,b){
let symetricArr = []
let isDouble = 0
for(var i=0;i<2;i++){
  for(var j=0;j<arguments[i].length;j++){ //getting each element of array
  isDouble=0;
        for(var k=0;k<arguments.length;k++){ //checking that element with each array
        if(arguments[k].some((x)=>x=== arguments[i][j])&&(arguments[i]!=arguments[k])){
        isDouble+=1
        }
        if((isDouble===0)&&(k===arguments.length-1)&&(symetricArr.indexOf(arguments[i][j])===-1)){
          symetricArr.push(arguments[i][j]);
		}
		}
		}
}
return symetricArr
}

finalArr = symetric(arguments[0],arguments[1])
if(arguments.length>2){
for(var i=2;i<arguments.length;i++){
  finalArr = symetric(finalArr,arguments[i])
  }
}
  return finalArr;
}