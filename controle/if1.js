function soBoaNoticia(nota) {
	if (nota >= 7) {
		console.log(`Aprovado com ${nota}`);
	}
}

soBoaNoticia(6);
soBoaNoticia(7);
soBoaNoticia(8);

function seForVerdade(valor) {
	if (valor) {
		console.log(`É verdade... ${valor}`);
	}
}

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);
seForVerdade(-1);
seForVerdade(' ');
seForVerdade('?');
seForVerdade([]);
seForVerdade([1, 2]);
seForVerdade({});
