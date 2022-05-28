const btnDelete = document.querySelector(".btn__delete");
const labelEle = document.querySelector(".label__confirm");
const modalEle = document.getElementById("modal");
const btnCancel = document.querySelector(".btn__cancel");
const btnConfirm = document.querySelector(".btn__confirm");
const main = document.querySelector(".main");
const mainText = document.querySelector(".main__text");

btnDelete.addEventListener("click", () => {
    modalEle.classList.add("display");
    labelEle.classList.add("display");
});

const hidden = function () {
    modalEle.classList.remove("display");
    labelEle.classList.remove("display");
};

modalEle.addEventListener("click", hidden);
btnCancel.addEventListener("click", hidden);
btnConfirm.addEventListener("click", () => {
    modalEle.classList.remove("display");
    labelEle.classList.remove("display");
    main.removeChild(mainText);
    btnDelete.classList.add("hidden");
});
