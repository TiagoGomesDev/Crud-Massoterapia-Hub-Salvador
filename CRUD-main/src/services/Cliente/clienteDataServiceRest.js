import http from "../../http-common";

const getAll = () => {
  return http.get("/Cliente");
};
const get = id => {
  return http.get(`/Cliente/${id}`);
};
const create = data => {
  return http.post("/Cliente", data);
};
const update = (id, data) => {
  return http.put(`/Cliente/${id}`, data);
};
const remove = id => {
  return http.delete(`/Cliente/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/Cliente`);
};
const findByTitle = nomeCliente => {
  return http.get(`/Cliente?nomeCliente=${nomeCliente}`);
};

const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
}
export default exportedObject

