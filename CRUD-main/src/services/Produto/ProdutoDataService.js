let PRODUCTS = [
    {title: 'Ola', description: 'Ola', preco:'R$ 100',quant:' 200', published: 'Published'},
    {title: 'Teste', description: 'Teste', preco:'R$ 200',quant:' 200', published: 'Published'}
  ]
  
  const getAll = () => {
    return PRODUCTS;
  };
  
  const getById = (title) => {
    if (title === "") return PRODUCTS
    //var filtrado = PRODUCTS.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
    //var filtrado = PRODUCTS.filter((obj) => obj.title == title ); // retorna os objs que são iguais
    var filtrado = PRODUCTS.filter((obj) => obj.title.includes(title) ); // retorna os objs que contém 
    return filtrado
  };

  const create = (data) => {
    return PRODUCTS.push(data);
  };

  const update = (key, data) => {
    console.log('chave', key)
    PRODUCTS.forEach(function(item) {
      
      if (item.title === key){
        item.title = data.title
        item.description = data.description
        item.preco = data.preco
        item.quant = data.quant
        item.published = data.published
      }
    });
    return 
  };

  const remove = (key) => {
    return PRODUCTS.splice(PRODUCTS.indexOf(key), 1);
  };
  
  const removeAll = () => {
    PRODUCTS=[]
  };
  
  export default {
    getAll,
    create,
    update,
    remove , 
    removeAll ,
    getById
  };
  