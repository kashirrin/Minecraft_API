const mob = document.getElementById('mob');
let minecraftMobs = [];

const cargarMobs = async () => { 
    try {
        const res = await fetch('https://minecraft-api-utch.herokuapp.com/api_minecraft/mobs/'); 
        minecraftMobs = await res.json(); 
        console.log(minecraftMobs.All_Mobs)
        displayMobs(minecraftMobs); 
        
    } catch (err) {
        console.error(err); 
    }
};

const displayMobs = (mobs) => { 
   
    for(let i = 0; i < Object.keys(mobs.All_Mobs).length; i++){
 
     var li = document.createElement('li'); 
 
    var h2 = document.createElement('h2'); 
    h2.innerHTML = ""+mobs.All_Mobs[i].name; 
 
    var img = document.createElement('img'); 
    img.setAttribute('src', mobs.All_Mobs[i].img);

    li.setAttribute('class', 'character');
    li.appendChild(h2);
    li.appendChild(img);
    mob.appendChild(li);}
};
 
cargarMobs(); 
 