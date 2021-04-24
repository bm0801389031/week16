//function statement named getCount with parameter str
function getCount(str) {
    //return str match parameter aeiou ig[[i means that it does
    //not take in to account whether it is upper case or lower]]
    //OR empty array[[ie we will get an ampty array if match
    //does not find a match giving a null which in turn
    //jumps to the empty string and the empty string length
    //is 0 so the asnwer would be zero matches in that case]]
        return (str.match(/[aeiou]/ig)||[]).length;
    }
    
    
    