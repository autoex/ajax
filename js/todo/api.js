async function getTasks(id) {
  let promise = await axios.get(
    `https://repetitora.net/api/JS/Tasks?widgetid=${id}&count=30`
  );

  return promise.data;
}

async function postTask(id, title) {
  let promise = await axios.post(`https://repetitora.net/api/JS/Tasks`, {
    widgetid: id,
    title: title,
  });

  return promise.data;
}

async function updateTask(id, title) {
  let promise = await axios.put(`https://repetitora.net/api/JS/Tasks`, {
    widgetid: id,
    title: title,
  });

  return promise.data;
}

async function deleteTask(id, idTask) {
  let promise = await axios.delete(`https://repetitora.net/api/JS/Tasks?widgetid=${id}&taskId=${idTask}`);

  return promise.data;
}
