let out = document.querySelector(".out");
let page = document.querySelector(".page");
let count = document.querySelector(".count");
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
  out.innerHTML = "";
  let promise = await getImages(page.value, count.value);
 onReceiveData(promise);
});

function onReceiveData(data) {
  data.forEach((i) => {
    let img = document.createElement("img");
    img.src = i.thumbnail;
    document.querySelector(".out").append(img);
  });
}
