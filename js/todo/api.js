async function getTasks(id) {


   let promise = await axios.get(`https://repetitora.net/api/JS/Tasks?widgetid=${id}`);

   return promise.data;
}


async function postTask(id, title) {

    
   let promise = await axios.post(`https://repetitora.net/api/JS/Tasks?widgetid=${id}`,
   {
       title: title
   });

   return promise.data;

}

