//testing the API

async function getSystemElements(){
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.pandascore.co/leagues?token=nj-MFyWKZ9dcHkCJRdFayjnhLzlhlxaVi4wp7T93239-NZRr0gg');
    const body = await response.json();

    try{
        return body;
    }catch{
        console.log('error happened', e)
    }

}

async function create(){
    const data = await getSystemElements();
    
    
    try{
        console.log(data)
        
    }catch{
        console.log("error")
    }

    
}

create();