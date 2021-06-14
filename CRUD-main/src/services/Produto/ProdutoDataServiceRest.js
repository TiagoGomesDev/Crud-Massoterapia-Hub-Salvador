import http from "../../http-common";

const getAll = () => {
  return http.get("/produto");
};
const get = id => {
  return http.get(`/produto/${id}`);
};
const create = data => {
  return http.post("/produto", data);
};
const update = (id, data) => {
  return http.put(`/produto/${id}`, data);
};
const remove = id => {
  return http.delete(`/produto/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/produto`);
};
const findByTitle = title => {
  return http.get(`/produto?title=${title}`);
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