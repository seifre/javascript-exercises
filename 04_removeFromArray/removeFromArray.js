const removeFromArray = function(arr,...args) {
    const result = [];
    for (let i = 0; i < arr.length ; i++) {
        let removeArgs = false;
        for (let j = 0; j < args.length; j++) {
           if(arr[i]===args[j]){
            removeArgs = true ;
            break;
           }
            
        }
        if (!removeArgs){
            result.push(arr[i]);
        } 
        
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
