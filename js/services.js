/* function getImages(page = 1, count = 3) {

  return   $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=${count}`).then(data=>  data);

  
  
} */

function getImages(page = 1, count = 3) {
  return axios
    .get(`https://repetitora.net/api/JS/Images?page=${page}&count=${count}`)
    .then((data) => data.data);
}
