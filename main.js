const mob = document.getElementById('mob')
let minecraftMobs = [];

const cargarMobs = async () => { 
    try {
        const res = await fetch('https://minecraft-api-utch.herokuapp.com/api_minecraft/mobs/'); 
        minecraftMobs = await res.json(); 
        console.log(minecraftMobs.mobs)
        displayCharacters(minecraftMobs); 
        
    } catch (err) {
        console.error(err); 
    }
};

const displayMobs = (mobs) => { 
   
    for(let i = 0; i < Object.keys(mobs.mobs).length; i++){
 
     var li = document.createElement('li'); 
 
    var p = document.createElement('p'); 
    p.innerHTML = ""+mobs.mobs[i].education;
 
    var h2 = document.createElement('h2'); 
    h2.innerHTML = ""+mobs.mobs[i].name;
 
    var img = document.createElement('img'); 
    img.setAttribute('src', mobs.mobs[i].img);

    li.setAttribute('class', 'character');
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(img);
    charactersList.appendChild(li);}
};
 
cargarMobs(); 
 