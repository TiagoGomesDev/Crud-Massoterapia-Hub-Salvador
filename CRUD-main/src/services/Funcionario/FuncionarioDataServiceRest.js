import http from "../../http-common";

const getAll = () => {
  return http.get("/funcionario");
};
const get = id => {
  return http.get(`/funcionario/${id}`);
};
const create = data => {
  return http.post("/funcionario", data);
};
const update = (id, data) => {
  return http.put(`/funcionario/${id}`, data);
};
const remove = id => {
  return http.delete(`/funcionario/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/funcionario`);
};
const findByTitle = nomeAtendente => {
  return http.get(`/funcionario?nomeAtendente=${nomeAtendente}`);
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