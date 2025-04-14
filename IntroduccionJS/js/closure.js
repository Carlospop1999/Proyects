function crearContador() {
    let contador = 0;
    return {
      incrementar: function() {
        contador++;
        return contador;
      },
      resetear: function() {
        contador = 0;
      }
    };
  }
  
  const contador = crearContador();
  console.log(contador.incrementar()); // 1
  console.log(contador.incrementar()); // 2
  contador.resetear();
  console.log(contador.incrementar()); // 1
  