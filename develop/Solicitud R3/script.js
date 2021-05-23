const videoButtom = document.querySelector(".video-buttom");
const videoModal = document.querySelector("#video-modal");
const wrapper = document.querySelector(".wrapper");
const modalContainer = document.querySelector(".modal-container");
const btns = document.querySelectorAll(".btn")

console.log(modalContainer)


btns.forEach(function(btn){
    btn.addEventListener("click", function(event) {
        let styles = event.currentTarget.classList;
        if (styles.contains("video-buttom")) {
            modalContainer.classList.add("open");
            videoButtom.classList.add("open");
            videoModal.play(); 
        }
            else if (styles.contains("video-close-btn")) {
                modalContainer.classList.remove("open");
                videoButtom.classList.remove("open");
                videoModal.pause(); 
            }
    });
})
