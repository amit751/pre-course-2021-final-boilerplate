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

const data = {AMIT:1 , SORT:2};




//mytry-working

async function postdata(){
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
postdata();


//working

let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2b$10$UhLlTnE2/l3purW88dkLseUUsCkbZncNC4vXruc9EewZ8rNRBRByK");
req.send('{"sample": "Hello World"}');

// const res = async function(){
//     return await fetch("https://api.jsonbin.io/b/601585fab41a937c6d54546e");
// }
// let responJason = await res.JASON;


//getdata
let req2 = new XMLHttpRequest();

req2.onreadystatechange = () => {
  if (req2.readyState == XMLHttpRequest.DONE) {
    console.log(req2.responseText);
  }
};

req2.open("GET", "https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e/latest>", true);
req2.setRequestHeader("X-Master-Key", "$2b$10$UhLlTnE2/l3purW88dkLseUUsCkbZncNC4vXruc9EewZ8rNRBRByK");
req2.send();