
//   console .log("Hi its me");
//  } ,  10000);
// }
new Promise(function (resolve, reject) {
  //  try starting
  resolve("thats resolve");
  //  try ending  
    
})
.then(function(data){
    //if u get success or resolved
    console.log("returned data from resolve" +data); 
})
.catch(function(error){
    console.log("returned data from reject"+error);
});