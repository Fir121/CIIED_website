// SCROLL EFFECTS - Header Shadow, BITS PARALLAX 
addEventListener('scroll', (event) => {

    // Parallax
    if (document.getElementById("conts").getBoundingClientRect().top >= document.getElementById('bitsimage').getBoundingClientRect().height){
        document.getElementById("conts").style.marginTop = "0"+'px';
        document.getElementById("conts").style.marginTop = "0px";
        document.getElementById("bitsimage").style.position = "relative";
    }
    else if (document.getElementById("bitsimage").getBoundingClientRect().top <= 0){
        document.getElementById("conts").style.marginTop = document.getElementById('bitsimage').getBoundingClientRect().height+'px';
        document.getElementById("bitsimage").style.position = "fixed";
        document.getElementById("bitsimage").style.top = "0";
    }
    else{
        document.getElementById("conts").style.marginTop = "0"+'px';
        document.getElementById("conts").style.marginTop = "0px";
        document.getElementById("bitsimage").style.position = "relative";
    }

    //  Header Shadow
    if (this.scrollY == 0){
        document.getElementById("topnav").style.boxShadow  = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        
        acronym = document.getElementsByClassName("hidethis");
        for (let i=0; i<acronym.length; i++){
            acronym[i].style.opacity = "1";
        }
    }
    else{
        document.getElementById("topnav").style.boxShadow  = "0 0 0 0";

        acronym = document.getElementsByClassName("hidethis");
        for (let i=0; i<acronym.length; i++){
            acronym[i].style.opacity = "0";
        }
    }
});

// Parallax CIIED Bg background
function changeMargin(){
    document.getElementById("prlx-div").style.marginTop = document.getElementById('topnav').getBoundingClientRect().height+'px';
}

new ResizeObserver(changeMargin).observe(document.getElementById("prlx-div"));