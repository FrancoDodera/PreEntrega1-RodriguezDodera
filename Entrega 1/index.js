class Celular {
  constructor(marca, precio) {
    this.marca = marca;
    this.precio = precio;
  }
  //sumar iva del producto
  sumarleIva() {
    this.precio = this.precio * 1.21;
  }
}

const Samnsung = new Celular("Samnsung", 50000);
const Motorola = new Celular("Motorola", 70000);
const Iphone = new Celular("Iphone", 100000);
const Xiaomi = new Celular("Xiaomi", 90000);

console.log(Samnsung);
console.log(Motorola);
console.log(Iphone);
console.log(Xiaomi);

Samnsung.sumarleIva();
Iphone.sumarleIva();
Motorola.sumarleIva();
Xiaomi.sumarleIva();
