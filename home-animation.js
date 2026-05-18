const serviceCardsCnt = document.querySelector(".service .cards-cnt");
const commentsCardsCnt = document.querySelector(".comments .cards-cnt");
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting || entries[1].isIntersecting) {
        entries[0]?.target.classList.add("show");
        entries[1]?.target.classList.add("show");
    }
}, {});
observer.observe(serviceCardsCnt);
observer.observe(commentsCardsCnt);
