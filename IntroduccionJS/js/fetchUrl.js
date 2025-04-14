async function fetchMultiples(urls) {
    try {
      // Mapeamos cada URL a una promesa fetch
      const promesas = urls.map(url => fetch(url).then(res => res.json()));
      
      // Esperamos a que todas las promesas se resuelvan
      const resultados = await Promise.all(promesas);
  
      return resultados;
    } catch (error) {
      console.error("Ocurrió un error al obtener los datos:", error);
      return [];
    }
  }
  
  // Ejemplo de uso:
  const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
  ];
  
  fetchMultiples(urls).then(data => {
    console.log("Usuarios:", data[0]);
    console.log("Posts:", data[1]);
    console.log("Comentarios:", data[2]);
  });
  