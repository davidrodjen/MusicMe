window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");

    console.log(sounds);

    //ForEach utilizies all the sounds in the collection created above
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].play();
        });
    });
});


