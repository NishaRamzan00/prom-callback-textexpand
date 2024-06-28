// document.getElementById('checkDriver').addEventListener('click', function() {
//     let arrived = Math.random() >= 0.5; 

//     let promise = new Promise(function(resolve, reject) {

        
//         if (arrived) {
//             resolve('driver arrived');
//         } else {
//             reject('driver not available');
//         }
//     });

//     promise
//     .then(function(message) {
//         console.log(message); 
//     })
//     .catch(function(error) {
//         console.log(error); 
//     });
// });


// function expandText(){
//     let shortText="orem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid similique et officia ";
//     let longText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nostrum debitis perspiciatis voluptates libero, animi beatae dolorum praesentium amet error nemo, maiores, dolor soluta quisquam maxime fugiat. Repudiandae, molestias nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolore cumque deleniti error suscipit dolorum deserunt nemo id placeat saepe assumenda ducimus officiis quo voluptatum quae perferendis, veniam reiciendis harum!";
//     let paragraph= document.getElementById("para");
// let link=document.getElementById("link");

// if(link.innerHTML==="Read more"){
//     paragraph.textContent=longText;
//     link.textContent="See less";
// }

//     else {
//         paragraph.textContent=shortText;
//         link.textContent="Read more";
//     }
// }

function fetchData(callback) {
    setTimeout(() => {
        let data = "Data fetched successfully";
        callback(null, data); 
    }, 2000);
}

function Data(error, data) {
    if (error) {
        console.log("Error fetching data:", error);
    } else {
        console.log("Data received:", data);
    }
}

fetchData(Data);
