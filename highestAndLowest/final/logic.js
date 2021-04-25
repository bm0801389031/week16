//function statement named highAndLow with parameter numbers
function highAndLow(numbers){
    //numbers assigned to numbers split method pattern as space
    //map method with function for every element Number conversion
      numbers = numbers.split(' ').map(Number);
    //return Math.max strict function with apply method plus empty string
    //with space to convert to string from number and give the two
    //numbers a space in between
      return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
    }