//  for fetch api, we have multiple args with url,method and headers, so for that also we can simplied the function which takes one argement at time

function fetchApi(url,method,headers){
    console.log(`fetch data foem ${url} with ${method} headers ${headers}`)

}

const curriedApiCall =(url)=>(method)=>(headers)=>fetchApi(url,method,headers);
const curreidfetchCall = curriedApiCall("https://")
curreidfetchCall('get')({'Content-Type': 'application/json'})
curreidfetchCall('post')({'Content-Type': 'application/json'})