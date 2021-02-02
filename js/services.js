function getImages(page = 1, count = 3, callBack) {

  let promise =   $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=${count}`).then(data=>  data);

  return promise;
  
}
