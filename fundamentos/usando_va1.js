// Uma variável definida com var só tem dois escopos possíveis (falando no
// sentido dos browsers - objeto window), global ou local dentro de uma função.
// Quando você declara uma variável do tipo var dentro de uma função ela só é
// visível dentro do escopo da função.
// Quando você declara uma variável do tipo var fora de uma função ela é global.
// FUJA DO ESCOPO GLOBAL!!! Pois ela uma alteração nela pode sobrescrever
// outras variáveis com mesmo nome mas que tem escopos diferentes.

// Aninhamento de blocos para exemplificar os escopos
{
	{
		{
			{
				var sera = 'Será???';
				console.log(sera);
			}
		}
	}
}
console.log(sera);

function teste() {
	var local = 123;
	console.log(local);
}

teste();
// Vai acusar um erro pois a variável do tipo var declarada dentro da função só
// possui escopo dentro daquela função.
// console.log(local); 