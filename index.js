function myEach(collection, callback) {
    let newCollection = createArray(collection);
    for (const each of newCollection){
        callback(each)
    }
    return collection
}

function createArray(collection){
    if(Array.isArray(collection)){
        return collection
    } else {
        return Object.values(collection)
    }
}

function myMap(collection, callback){
    let newCollection = createArray(collection)
    let finalNumbers = newCollection.map(element => callback(element))
    return finalNumbers
}

function myReduce(collection, callback, acc){
    let newCollection = createArray(collection)
    // if (!acc) {  
    //     acc = newCollection[0];  
    //     newCollection = newCollection -- newCollection[0]  
    //   }
    let total = collection.reduce(function(previousValue, currentValue) { 
    return callback(previousValue, currentValue)
})
}

// next function works in replit, but not passig the test
function myFind(collection, predicate){
    let newCollection = createArray(collection)
    newCollection.find(element => {
        if(predicate(element)){
            return element;
        }
})}

function myFilter(collection, predicate){
    let newCollection = createArray(collection)
    let result =[]
    newCollection.filter(element => {
        if (predicate(element)) {
            result.push(element)
        }
    })
    return result
}

function mySize(collection){
    let newCollection = createArray(collection)
    return newCollection.length
}

function myFirst(array, num){
    if (num == null){
        return array[0]
    } else {
        return array.slice(0,num)
    }
}

function myLast(array, num){
    if (num == null){
        return array[array.length-1];
    } else {
        return array.slice(-num);
    }
}

function myKeys(obj){
    let newArray =[];
    newArray = Object.keys(obj)
    return newArray
}
function myValues(obj){
    let newArray =[];
    newArray = Object.values(obj)
    return newArray;
}