function map (array ,callback){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        const elements = array[i];
        newArray.push(callback(elements));
        
    }
    return newArray
}

function reduce (array, callback,startingPoint){
    let value;
    if(startingPoint !== undefined){
        value = startingPoint;
        for(const element of array){
            value = callback(value, element);
            console.log(value)
        }
    }else {
        value = array[0];
        console.log(value)
        array= array.slice(1)
        console.log(value)
        for( const element of array){
            value = callback(value, element);
            console.log(value)
        }

    }
    return value;
}


