window.addEventListener('load', ()=>{
    let game;
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

    let matches;
    let token = "6LaTSNDKfKL7MRAo_mXEtywNTIaWfYy23jPuk4J7MX394vSkY7E";
    let _matches = document.querySelector('.matches');

    console.log(game)

    async function getMatchesFromAPI(game){

        let response = await fetch(`https://api.pandascore.co/${game}/matches/past?token=${token}&per_page=100&page=0`);
        let body = await response.json();
        
       

        try{
            return body;
        }catch{
            console.log('error happened', e);
        }
    }

    async function getDataIntoVariables(){
        matches = await getMatchesFromAPI(game);
        displayMatches(2, matches);
        
    }

    async function displayMatches(i, data){
            
            
        console.log(i, data)

        for(let j = 0; j<i; j++){

            let divtoAddAll= document.createElement('div');
            divtoAddAll.classList.add('match');
            let divtoAdd= document.createElement('div');
            divtoAdd.classList.add('team_match');
            let divtoAdd2= document.createElement('div');
            divtoAdd2.classList.add('team_match');
            let imgDiv = document.createElement('div');
            imgDiv.classList.add('img_match');
            let imgDiv2 = document.createElement('div');
            imgDiv2.classList.add('img_match');
            let img = document.createElement('img');
            let name = document.createElement('span');
            name.classList.add('name_match');
            let score = document.createElement('span');
            score.classList.add('score');
            let img2 = document.createElement('img');
            let name2 = document.createElement('span');
            name2.classList.add('name_match');
            let score2 = document.createElement('span');
            score2.classList.add('score');
            let id1 = data[j].opponents[0].opponent.id;
            let id2 = data[j].opponents[1].opponent.id;

            
            if(data[j].opponents[0].opponent.image_url == null){
                img.setAttribute("src", `/assets/img/no-images.png`)
            } else {
                img.setAttribute("src", `${data[j].opponents[0].opponent.image_url}`)
            }

            if(data[j].opponents[1].opponent.image_url == null){
                img2.setAttribute("src", `/assets/img/no-images.png`);
            } else {
                console.log('lol faut mettre mtn encule')
                img2.setAttribute("src", `${data[j].opponents[1].opponent.image_url}`)
            }
            
            if(data[j].opponents[0].opponent.acronym == null){
                name.innerHTML = data[j].opponents[0].opponent.name;
            } else {
                name.innerHTML = "["+data[j].opponents[0].opponent.acronym +"] "+ data[j].opponents[0].opponent.name;
            }

            if(data[j].opponents[1].opponent.acronym == null){
                name2.innerHTML = data[j].opponents[1].opponent.name;
            } else {
                name2.innerHTML = "["+data[j].opponents[1].opponent.acronym +"] "+ data[j].opponents[0].opponent.name;
            }
            console.log(data[j].results[0].team_id == id1);
            console.log(data[j].results[1].team_id == id2);
            score.innerHTML = data[j].results[0].team_id == id1 ? data[j].results[0].score : data[j].results[1].score;

            score2.innerHTML = data[j].results[1].team_id == id2 ? data[j].results[1].score : data[j].results[0].score;

            console.log(img2, name2, score2);
            imgDiv.appendChild(img);
            imgDiv2.appendChild(img2);
            divtoAdd.appendChild(imgDiv);
            divtoAdd.appendChild(name);
            divtoAdd.appendChild(score);
            divtoAdd2.appendChild(imgDiv2);
            divtoAdd2.appendChild(name2);
            divtoAdd2.appendChild(score2);
            divtoAddAll.appendChild(divtoAdd);
            divtoAddAll.appendChild(divtoAdd2);
            console.log(divtoAdd2);

            _matches.appendChild(divtoAddAll);

            


        }              
       
    }



    getDataIntoVariables();

});

