function getImages(page = 1, count = 3, callBack) {

    $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=${count}`, {
        success: callBack
    });
  
}
