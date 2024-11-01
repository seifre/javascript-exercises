const reverseString = function(string) {
    const size = string.length;
    const stringArray = string.split("");
    let newString = '';
    for (let i = 1 ;i<=size ;i++)
    {
    
        newString+= stringArray.pop();

    }
    return newString ;


};

// Do not edit below this line
module.exports = reverseString;
