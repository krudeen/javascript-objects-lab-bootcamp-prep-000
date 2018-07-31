var recipes = { }

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
<<<<<<< HEAD
  object[key] = value;
=======
  object[key] = value
>>>>>>> 658aae2e030eac4ec27eac2460d2198e46aa2ae2
  return object
}
 
function deleteFromObjectByKey(object, key){
<<<<<<< HEAD
  var newObj = Object.assign({ }, object)
=======
  var newObj = Object.assign({}, obj)
>>>>>>> 658aae2e030eac4ec27eac2460d2198e46aa2ae2
  delete newObj[key];
  return newObj;
  
}

<<<<<<< HEAD

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
=======
function deleteFromObjectByKey(object, key){
  delete key.object;
  return object;
}



function destructivelyDeleteFromObjectByKey(object, key){
    return object;
}
    
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object
}
>>>>>>> 658aae2e030eac4ec27eac2460d2198e46aa2ae2
