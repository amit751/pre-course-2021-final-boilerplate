const API_KEY=""; // Assign this variable to your JSONBIN.io API key if you choose to use it.
const DB_NAME = "my-todo";

// Gets data from persistent storage by the given key and returns it
async function getPersistent(key) {
  return [];
}

// Saves the given data into persistent storage by the given key.
// Returns 'true' on success.
async function setPersistent(key, data) {
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
};

