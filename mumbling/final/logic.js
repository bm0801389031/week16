//function statement named accum with parameter s
function accum(s) {
    //return s property with split method split at each letter
    //map method to creat a function on each element
    //map method with two parameters c as element name and second param
    //called i to indicate the index of each element
    //and the function applied to each element c toUppercase method
    //which returns a string with the element capitalized then a plus
    //as an added applied function to each element wich returns a 
    //lower case letter with the array. this was applied to the same
    //element index. then a repeat method which repeats the lowercase
    //by the index number. then join method to comply with the test rules
    //this returns every function separated by a dash
        return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
    }
    