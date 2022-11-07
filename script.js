( function () {
    const pic = ["1","2","3","4","5","6"];

    const buttons = document.querySelectorAll(".btn")
    const imgDiv = document.querySelector(".img-container")
    let counter = 0
    buttons.forEach(function(button){
        button.addEventListener("click", function(e) {
            if (button.classList.contains('btn-left')){
                counter--
                if(counter <0){
                    counter = pic.length - 1
                }
                imgDiv.style.background = `url('img/${pic[counter]}.jpg')`
            }

            if (button.classList.contains('btn-right')){
                counter++
                if(counter > pic.length - 1){
                    counter = 0
                }
                imgDiv.style.background = `url('img/${pic[counter]}.jpg')`
            }
        })
    })




}) ();