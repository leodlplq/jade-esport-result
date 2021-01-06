window.addEventListener('load', ()=>{
    let teamsData;
    let game;
    let token = "6LaTSNDKfKL7MRAo_mXEtywNTIaWfYy23jPuk4J7MX394vSkY7E";
    let _teams = document.querySelector('.teams');
    let _teamsAll = document.querySelector('.teams_all');
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


    async function getTeamsFromAPI(game){
        let teams = [];
        let teamsId = [];
        let i = 0;

        do{
            let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.pandascore.co/${game}/teams?token=${token}&per_page=100&page=${i}`);
            var body = await response.json();
            i++;
            body.forEach(element => {
                if(!teamsId.includes(element.id)){
                    console.log('pas dans le tab')
                    teams.push(element);
                    teamsId.push(element.id);
                }else{
                    console.log('dans le tab')
                }
                
            });
        }while(body.length != 0);
        
        
       

        try{
            return teams;
        }catch{
            console.log('error happened', e);
        }
    }

    async function getDataIntoVariables(){
        teamsData = await getTeamsFromAPI(game);
        displayTeams(4, teamsData);
        
    }

    async function displayAllTeams(){
        teamsData = await getTeamsFromAPI(game);
        displayTeams(teamsData.length, teamsData);
    }

    async function displayTeams(i, data){
            
            
        console.log(i, data)
        
        for(let j = data.length-1; j> data.length - i -1; j--){

            
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

            if(data[j].acronym == null){
                name.innerHTML = data[j].name;
            } else {
                name.innerHTML = "["+data[j].acronym +"] "+ data[j].name;
            }

            
            

            imgDiv.appendChild(img);
            divtoAdd.appendChild(imgDiv);
            divtoAdd.appendChild(name);
            

            if(url.includes('teams')){
                _teamsAll.appendChild(divtoAdd);
            } else{
                _teams.appendChild(divtoAdd);
            }
            

            


        }              
       
    }

    
    
    if(url.includes('teams')){
        displayAllTeams();
    } else{
        getDataIntoVariables();
    }

    

});

