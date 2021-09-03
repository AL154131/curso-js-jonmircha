function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(
      `Error: El valor "${value}" ingresado no es un numero`
    );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

const funcionAsincrona = async () => {
  try {
    console.log("Inicio de funcion asincrona");

    let obj = await cuadradoPromise(0);
    console.log(obj);

    obj = await cuadradoPromise(1);
    console.log(obj);

    obj = await cuadradoPromise(2);
    console.log(obj);

    obj = await cuadradoPromise("3");
    console.log(obj);

    obj = await cuadradoPromise(4);
    console.log(obj);
  } catch (error) {
    console.error(error);
  }
};

funcionAsincrona();
