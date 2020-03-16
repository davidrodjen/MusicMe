window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");



    //ForEach utilizies all the sounds in the collection created above
    pads.ForEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index.play]
        });
    });
});


