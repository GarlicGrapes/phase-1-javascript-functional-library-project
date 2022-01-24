function myEach (collection, callback) {
    
    if (typeof collection == 'object') {
      let map = Object.assign({}, collection)
      let keys = Object.keys(collection)
      for (let each of keys) {
          callback(map[each])
      }  
    }
    if (typeof collection == 'array') {
        for (let each of [...collection]) {
            callback(each)
        }
    }
    return collection
}

function myMap (collection, callback) {
    let newArray = []
    if (typeof collection == 'object') {
        let map = Object.assign({}, collection)
        let keys = Object.keys(collection)
        for (let each of keys) {
            newArray.push(callback(map[each]))
        }  
      }
      if (typeof collection == 'array') {
          for (let each of [...collection]) {
              newArray.push(callback(each))
          }
      }
    return newArray
}

// function myReduce (collection, callback, acc) {
//     let accDup = 0
//     let total = 0
//     if (typeof acc != 'undefined') {accDup = acc}
//     if (Array.isArray(collection) == false && typeof collection == 'object')  {
//         let map = Object.assign({}, collection)
//         let keys = Object.keys(collection)
//         let newArray = []
//         for (let each of keys) {
//             newArray.push((map[each]))
//         }  
//         newArray = newArray.slice(accDup)
//         for (let each of newArray) {
//             total += callback(each)
//         }
//       }
//       if (Array.isArray(collection) == true) {
//           let newArray = [...collection]
//           newArray = newArray.slice(accDup)
//           for (let each of [...collection]) {
//               accDup += (callback(each))
//           }
//       }
//       return total
// }
const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
  
    // The if statement below handles the case where no start value is passed in 
    // for the accumulator
    // If acc is null, it is set equal to the first value in newCollection
    // That first value is then sliced out of newCollection since it has already
    // been accounted for
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }