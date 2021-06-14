let FUNCIONARIOS = [
  {nomeAtendente: 'Ana', telefone: '(71)9863-6784', codigo: '752568', email: 'teste@teste.com',enderecoCompleto: 'Barra', dataNascimento: '2000-29-02', cartTrabalho: '451235', published: 'Published'},
  {nomeAtendente: 'Brito', telefone: '(71)9262-6784', codigo: '253568',email: 'exemplo@exemplo.com', enderecoCompleto: 'Pituba', dataNascimento: '1999-29-02', cartTrabalho: '381235', published: 'Published'},
]
const getAll = () => {
  return FUNCIONARIOS;
};

const getById = (nomeAtendente) => {
  if (nomeAtendente === "") return FUNCIONARIOS
  //var filtrado = FUNCIONARIOS.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
  //var filtrado = FUNCIONARIOS.filter((obj) => obj.title == title ); // retorna os objs que são iguais
  var filtrado = FUNCIONARIOS.filter((obj) => obj.nomeAtendente.includes(nomeAtendente) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return FUNCIONARIOS.push(data);
};

const update = (key, data) => {
  console.log(key)
  FUNCIONARIOS.forEach(function(item) {
    if (item.nomeAtendente === key){
      item.nomeAtendente = data.nomeAtendente
      item.telefone = data.telefone
      item.codigo = data.codigo
      item.email = data.email
      item.enderecoCompleto = data.enderecoCompleto
      item.dataNascimento = data.dataNascimento
      item.cartTrabalho = data.cartTrabalho
    }
  });
  return 
};

const remove = (key) => {
  return FUNCIONARIOS.splice(FUNCIONARIOS.indexOf(key), 1);
};

const removeAll = () => {
  FUNCIONARIOS=[]
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getById
};
