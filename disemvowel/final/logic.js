//function statement named disemvowel with parameter str
function disemvowel(str) {
    //return replace with str as property regular expression
    //that looks for words aeiou globally and incasesensitive
    //replaced with a blank
      return str.replace(/[aeiou]/gi, '');
    }