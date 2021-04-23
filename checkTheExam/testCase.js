//function statement named checkExam with parameters
//array1 and array2
function checkExam(array1, array2){
    //set a variable named score to zero
        var score = 0;
    //for loop initialization variable i assigned to zero; condition
    //i is less than array1.length; final expression i plus plus
        for (var i = 0; i < array1.length; i++){
    //statement//
    //if array1 index i equal to array2 index i 
            if (array1[i] == array2[i]) {
                //score plus equals 4 [ie score variable equals 
                //score plus 4]
                score += 4;
            }
            //else if [move on to next string if previous does not apply]
            // if array2 index i equals empty string
            else if (array2[i] === ''){
                //score plus equals 0[ie score variable equals score plus 0]
                score += 0
            }
            //else[ie move on to the next string if prev does not apply]
            else {
                //score minus equals 1
                //[[ie score variable equals score minus one]]
                score -= 1
            }
        }
        //if conditional statement with score less than 0 condition
        if (score < 0) {
            //statement to be executed if condition is truthy 
            //score equal zero
            score = 0
        }
        //return score
        return score
    }
    
    
    