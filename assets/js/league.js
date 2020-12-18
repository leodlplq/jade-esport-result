window.addEventListener('load', ()=>{
    let leagues;
    let game;
    let token = "6LaTSNDKfKL7MRAo_mXEtywNTIaWfYy23jPuk4J7MX394vSkY7E";
    let _leagues = document.querySelector('.leagues');
    let _leaguesAll = document.querySelector('.leagues_all');
    let url = window.location.href.split("/");
    console.log(url);
    if(url.includes('rl')){
        game = "rl";
    }else if(url.includes('csgo')){
        game = "csgo";
    }else if(url.includes('fifa')){
        game = "fifa";
    }else{
        game = "lol";
    }


    async function getLeaguesFromAPI(game){

        let response = await fetch(`https://api.pandascore.co/${game}/leagues?token=${token}&per_page=100&page=0`);
        let body = await response.json();
        
       

        try{
            return body;
        }catch{
            console.log('error happened', e);
        }
    }

    async function getDataIntoVariables(){
        leagues = await getLeaguesFromAPI(game);
        displayLeagues(4, leagues);
        
    }

    async function displayAllLeagues(){
        leagues = await getLeaguesFromAPI(game);
        displayLeagues(leagues.length, leagues);
    }

    async function displayLeagues(i, data){
            
            
        console.log(i, data)

        for(let j = 0; j<i; j++){

            
            let divtoAdd= document.createElement('div');
            divtoAdd.classList.add('league');
            let imgDiv = document.createElement('div');
            imgDiv.classList.add('img_league');
            let img = document.createElement('img');
            let name = document.createElement('span');
            name.classList.add('name_league');
            
           

            
            if(data[j].image_url == null){
                img.setAttribute("src", `/assets/img/no-images.png`)
            } else {
                img.setAttribute("src", `${data[j].image_url}`)
            }

            name.innerHTML = data[j].name;
            

            imgDiv.appendChild(img);
            divtoAdd.appendChild(imgDiv);
            divtoAdd.appendChild(name);
            

            if(url.includes('leagues')){
                _leaguesAll.appendChild(divtoAdd);
            } else{
                _leagues.appendChild(divtoAdd);
            }
            

            


        }              
       
    }

    
    
    if(url.includes('leagues')){
        displayAllLeagues();
    } else{
        getDataIntoVariables();
    }

    

});

