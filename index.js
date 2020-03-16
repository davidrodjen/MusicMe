window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelectorAll(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];




    

    console.log(sounds);

    //ForEach utilizies all the sounds in the collection created above
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            // Pass the index to assign color into the create bubbles
            createBubbles(index);
        });
    });

    //Create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jum 1s ease";
    }
});


