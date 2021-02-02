let out = document.querySelector(".out");
let page = document.querySelector(".page");
let count = document.querySelector(".count");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    out.innerHTML ='';
  getImages(page.value, count.value, onReceiveData);
});

function onReceiveData(data) {
  data.forEach((i) => {
    let img = document.createElement("img");
    img.src = i.thumbnail;
    document.querySelector(".out").append(img);
  });
}
