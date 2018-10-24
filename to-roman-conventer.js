function convertToRoman(num) {
    var romanBase = [
         {"I": 1},
         {"II":2},
         {"III":3},
         {"IV": 4},
         {"V":5},
         {"VI":6},
         {"VII":7},
         {"VIII":8},
         {"IX": 9},
         {"X": 10},
         {"XL": 40},
         {"L": 50},
         {"XC": 90},
         {"C": 100},
         {"CD": 400},
         {"D": 500},
         {"CM": 900},
         {"M": 1000}
        ];
    var romanEnd = "";
        for (var i = 17; i>-1; i--){
            if(num>=Object.values(romanBase[i])) {
                num -= Object.values(romanBase[i]);
                romanEnd += Object.keys(romanBase[i]);
                i++;
            }
           else if (num ==0){
               break;
           }
        }
    
 return romanEnd;
}