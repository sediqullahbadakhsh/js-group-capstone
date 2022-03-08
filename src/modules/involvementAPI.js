const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j6YOsY20BziHENblJkLk/';

export const postAPI = async (id) => {
  const response = await fetch(`${url}likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.text();
};

export const getAPI = async () => {
  const response = await fetch(`${url}likes`);
  const data = await response.json();
  return data;
};
