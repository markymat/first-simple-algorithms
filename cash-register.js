function checkCashRegister(price, cash, cid) {
var round = function(num){return Math.round( num * 100 + Number.EPSILON ) / 100}  // rounding function for further problems with subtracting 
var moneyTotal = 0; // for fast check, is there enough money in deposit
var change = round(cash - price); // call it change flag,  you subtrac money from here - it triggers actions when condition will be fullfiled
var changeWithUnits = [["PENNY",0],["NICKEL",0],["DIME",0],["QUARTER",0],["ONE",0],["FIVE", 0],["TEN",0],["TWENTY",0],["ONE HUNDRED",0]]; // the final change array, that will be displayed for user, 
var status = {status: "", change: []} 
var currencyUnits = [["PENNY",0.01],["NICKEL",0.05],["DIME",0.1],["QUARTER",0.25],["ONE",1],["FIVE", 5],["TEN",10],["TWENTY",20],["ONE HUNDRED",100]]; // currency units that will be subtracted from deposit and added to change array

for(var i=0; i<cid.length; i++){
   moneyTotal += cid[i][1];
}  //estimating moneyTotal

for(i=8; i>-1; i--){
 if (currencyUnits[i][1]<=change && cid[i][1]>0){
   cid[i][1] = round(cid[i][1] - currencyUnits[i][1]);
   change = round(change - currencyUnits[i][1]); 
   changeWithUnits[i][1] = round(changeWithUnits[i][1] + currencyUnits[i][1]);
 
    if ((round(change) === 0 ) && (round(cash)  === round(moneyTotal + price))){ 
     status.status = "CLOSED";
     status.change = changeWithUnits;
     return status;
     } 
    else if (change===0){  //for returned change, with some more money in deposit
     status.status = "OPEN";
     status.change = changeWithUnits.filter((x)=> x[1]>0).sort((a,b)=> a[1]<b[1] );
     return status
     } 
    else if (currencyUnits[i][1]<=change){
      i+=1;
     }
  }
}

  if (round(change)>0){
    status.status = "INSUFFICIENT_FUNDS";
    return status;
  }

}
//test it checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);