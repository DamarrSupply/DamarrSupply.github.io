function accordian() {
    var accordian = document.getElementsByClassName("accordion");

    for (let index = 0; index < accordian.length; index++) {
        accordian[index].addEventListener("click", function () {
            this.classList.toggle("active");

            if (this.nextElementSibling.style.display === "block") {
                this.nextElementSibling.style.display = "none";
            } else {
                this.nextElementSibling.style.display = "block";
            }
        });
    }
}