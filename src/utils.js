const API_KEY="$2b$10$UhLlTnE2/l3purW88dkLseUUsCkbZncNC4vXruc9EewZ8rNRBRByK"; // Assign this variable to your JSONBIN.io API key if you choose to use it.
const DB_NAME = "my-todo";

// Gets data from persistent storage by the given key and returns it
async function getPersistent(key) {
  const response = await fetch("https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e/latest" , {method:"GET"});
  const myjason = await response.json();
  console.log(myjason.record);
  return myjason.record
  
}

// Saves the given data into persistent storage by the given key.
// Returns 'true' on success.
async function setPersistent( key ,data) {
  const response =await fetch("https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e" ,{ 
  method: 'PUT' ,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  const jason = await response.json();
  console.log( jason);
  return true;
}



async function postdata1(){
  const response =await fetch("https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e" ,{ 
  method: 'PUT' ,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  const jason = await response.json();
  console.log( jason);
}

async function getdata1(){
  const response = await fetch("https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e/latest" , {method:"GET"});
  const myjason = await response.json();
  console.log(myjason.record);
  return myjason.record;
}

