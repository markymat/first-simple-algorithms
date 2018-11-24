function updateInventory(arr1, arr2) {
   
var currentIn = arr1;
var newIn = arr2

if(arr1.length===0){
    currentIn=newIn;
} else {

for(var i=0;i<newIn.length;i++){
    for(var j=0; j<currentIn.length;j++){
    if(currentIn[j][1] === newIn[i][1]){
    currentIn[j][0] += newIn[i][0]; //if conditions are checked, add values of new inventory to currentInventory
    break;
    } 
    else if( ((currentIn.length-1)===j)){ //if last element is not even to newest last element, then.. add it to        list
    currentIn.push(newIn[i]);
    j+=1; //adding value to for loop because of pushing new item
}
}
}}

    currentIn = currentIn.sort((a,b)=>{
        if(a[1]<b[1]){return -1}
        else if(a[1]>b[1]){return 1}
        else {return 0}
    })
    return currentIn;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);