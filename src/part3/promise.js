function fetchData(id, callback) {
  setTimeout(() => {
    const data = {
      userId: id,
      title: "This is the title for" + id,
    };
    callback(null, data);
  }, 1000);
}

// Pyramid of Doom : Callback hell
// console.log("Staring fetching data");
// fetchData(1, function (err, data1) {
//   if (err) {
//     console.error("Error fetching data for user 1:", err);
//   } else {
//     console.log("Data for user 1:", data1);
//     fetchData(2, function (err, data2) {
//       if (err) {
//         console.error("Error fetching data for user 2:", err);
//       } else {
//         console.log("Data for user 2:", data2);
//         fetchData(3, function (err, data3) {
//           if (err) {
//             console.error("Error fetching data for user 3:", err);
//           } else {
//             console.log("Data for user 3:", data3);
//           }
//         });
//         fetchData(4, function (err, data4) {
//           if (err) {
//             console.error("Error fetching data for user 4:", err);
//           } else {
//             console.log("Data for user 4:", data4);
//           }
//         });
//         fetchData(5, function (err, data5) {
//           if (err) {
//             console.error("Error fetching data for user 5:", err);
//           } else {
//             console.log("Data for user 5:", data5);
//           }
//         });
//       }
//     });
//   }
// });


const promise = new Promise((resolve, reject) => {
      if(true) {
        resolve("Success")
      } else {
        reject("Oops")
      }
})

promise.then((response) =>{
      return "Result " + response
     })
       .then((response) => console.log(response))
       .catch((err) => console.log("Error " + err))



let capsuleDispo = true
let demandeCapsule = new Promise((resolve, reject) => {
    // délais d'attente
    setTimeout(() => {
        if(capsuleDispo) {
            resolve("Voila vos capsules")
        } else {
            reject("Les capsules sont indisponibles")
        }
    }, 5000)
})

demandeCapsule.then((response) => console.log(response + " Je veux une poche avec !"))
              .catch((err) => console.log(err + " J'arrete le café"))
              .finally(() => console.log("J'aime le café"))


 function fetchData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
              userId: id,
              title: "This is the title for" + id,
            };
            resolve(data);
          }, 1000);
    })
}     

// // BAD 
// fetchData(1).then((data1) => {
//     console.log(data1)
//     fetchData(2).then((data2) => {
//         console.log(data2)
//          fetchData(3).then((data3) => {
//             console.log(data3)
//     })
//     })
// } )

// Chainage de then 
fetchData(1)
.then((d1) => {
   console.log(d1)
   return fetchData(2)
})
.then((d2) => {
    console.log(d2)
    return fetchData(3)
})
.then((d3) => {
    console.log(d3)
    return fetchData(4)
})
// Promise ALL 










