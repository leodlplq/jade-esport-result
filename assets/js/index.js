// //testing the API
// let _div = document.querySelector('.test');
// async function getSystemElements(){
//     const response = await fetch('https://api.pandascore.co/rl/teams?token=nj-MFyWKZ9dcHkCJRdFayjnhLzlhlxaVi4wp7T93239-NZRr0gg&per_page=100&page=2');
//     const body = await response.json();

//     try{
//         return body;
//     }catch{
//         console.log('error happened', e)
//     }

// }

// async function create(){
//     const data = await getSystemElements();
    
    
//     try{
//         console.log(data)
//         data.forEach(el=>{
//             let divtoAdd= document.createElement('div');
//             let img = document.createElement('img');
//             let text = document.createElement('span');
            
//             img.setAttribute("src", `${el.image_url}`);
//             text.innerHTML = el.name;
//             divtoAdd.appendChild(img);
//             divtoAdd.appendChild(text)
            
//             _div.appendChild(divtoAdd)
//         });
       
        
//     }catch{
//         console.log("error")
//     }

    
// }

// create();