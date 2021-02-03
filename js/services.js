function getImages(page = 1, count = 3, callBack) {

  return   $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=${count}`).then(data=>  data);

  
  
}
