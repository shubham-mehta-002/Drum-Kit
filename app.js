var audios=
{
    
    "A" : "audios/clap.wav",
    "a" : "audios/clap.wav",
    "s" : "audios/hihat02.wav",
    "S" : "audios/hihat02.wav",
    "d" : "audios/deep-fat-kick.wav",
    "D" : "audios/deep-fat-kick.wav",
    "f" : "audios/open-hi-hat.wav",
    "F" : "audios/open-hi-hat.wav",
    "g" : "audios/boom-hit.wav",
    "G" : "audios/boom-hit.wav",
    "h" : "audios/ride.wav",
    "H" : "audios/ride.wav",
    "j" : "audios/snare.wav",
    "J" : "audios/snare.wav",
    "k" : "audios/tom.wav",
    "K" : "audios/tom.wav",
    "l" : "audios/tink.wav",
    "L" : "audios/tink.wav",

}
const m = document.getElementsByClassName("main");

document.addEventListener("keypress",(e) => onpress(e.key))


// KEYPRESS EVENT
function onpress(e)
{
    let aud=audios[e];
    if(!aud) return;   // if no audio is found , return back --> no need to run whole function 
    let sound=new Audio(aud)
    sound.currentTime=0;  // rewind to start 
    sound.play();        
    let q=document.querySelector("."+e);
    q.classList.add("new-style")


}


const keys= m;
for(var i=0;i<keys.length;i++)
{
    keys[i].addEventListener("transitionend",fn);
}
function fn(e)
{
    if(e.propertyName!="border-top-color")    return;
    this.classList.remove("new-style");
}

// ON CLICK EVENT

for(let k of keys)
k.addEventListener("click",onclick)
function onclick(e)
{
    var a=e.target.parentNode.classList;
    for(let l of a)
    {
        onpress(l)
    }
    
}





