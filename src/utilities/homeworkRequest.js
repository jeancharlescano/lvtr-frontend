import axios from "axios";

export const postHomework = async (homework) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3000/api/homeworks/`, homework)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAllHomeworks = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/api/homeworks/`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export async function deleteHomework(id) {
  return await axios
    .delete(`http://localhost:3000/api/homeworks/delete/${id}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}
