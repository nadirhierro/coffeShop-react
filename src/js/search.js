import removeAccents from "./removeAccents";

// función para buscar, contempla que las palabras no estén en orden,
// busca que todas las palabras ingresadas estén dentro del nombre del producto
export default function search(userInput, productsArray) {
  let foundedProducts = [];
  let minInput = userInput.toLowerCase(); // lo transformo a minúscula
  let cleanInput = removeAccents(minInput); // le saco acentos o carácteres extraños
  let arrayInput = cleanInput.split(" "); // armo un array con las palabras
  // itero los productos
  productsArray.forEach((product) => {
    let productLower = product.title.toLowerCase(); // tomo el nombre del producto y lo pongo en minúscula
    let cleanProduct = removeAccents(productLower); // le saco acentos (no es que yo lo ingrese con acentos, pero supongamos que puede fallar)
    let count = 0; // variable contar para luego chequear si todas las palabras están en el producto
    //ahora itero las palabras
    arrayInput.forEach((word) => {
      // si la palabra se encuentra en el nombre, entonces cuento
      if (cleanProduct.indexOf(word) > -1) {
        count++;
      }
    });
    // si conté tantas veces como palabras ingresadas, entonces el producto ingresa como buscado
    if (count === arrayInput.length) {
      foundedProducts.push(product);
    }
  });
  if (foundedProducts.length > 0) {
    return foundedProducts;
  } else {
    return null;
  }
}
