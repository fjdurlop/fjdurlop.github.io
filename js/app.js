class Oferta{
	constructor(curso,tipo){
		this.curso = curso;
		this.tipo = tipo;
	}

	oferta2x1(){
		return `\n\nEl curso de: ${this.curso} impartido con la modalidad de: ${this.tipo} se encuentra al 2 x 1`;
	}

	oferta3x2(){
		return `\n\nEl curso de: ${this.curso} impartido con la modalidad de: ${this.tipo} se encuentra al 3 x 2`;
	}

	descuento(porcentaje){
		return `\n\nEl curso de: ${this.curso} impartido con la modalidad de: ${this.tipo} tiene el ${porcentaje}% de descuento`;
	}
}

const Oferta1 = new Oferta('C++','Sabatino');
const Oferta2 = new Oferta('Python','Intensivo');
const Oferta3 = new Oferta('Python','Semestral');



