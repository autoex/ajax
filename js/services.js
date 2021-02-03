/* function getImages(page = 1, count = 3) {

  return   $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=${count}`).then(data=>  data);

  
  
} */

async function getImages(page = 1, count = 3) {
 let response = await axios.get(`https://repetitora.net/api/JS/Images?page=${page}&count=${count}`);
   return response.data;
}
