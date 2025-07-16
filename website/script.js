const btn_enviar = document.getElementById('enviar');
let estado_civil = document.querySelector(".estado-civil");
const input_data = document.querySelector(".data-nascimento");

document.getElementById('formulario').addEventListener('submit', function(event) {
	let form = event.target;	
	var area_interesse = document.querySelectorAll('input[name="area"]:checked');
	console.log(area_interesse.length);
	if (area_interesse.length > 0){
		if (form.checkValidity()) {
			alert("Cadastro enviado com sucesso!");
			return true;
		}		
	} else{			
		event.preventDefault();
		alert("Por favor, escolha ao menos uma área de interesse.");
		return false;
		
	}		
})

estado_civil.addEventListener("change", function(){
	if(estado_civil.value == 'solteiro'){
	
		const data_atual = new Date();	
		let data_nascimento_input = document.querySelector(".data-nascimento").value;
		let data_nascimento = new Date(data_nascimento_input);
		
		let idade = data_atual.getTime() - data_nascimento.getTime();
		
		const milissegundosPorAno = 1000 * 60 * 60 * 24 * 365.25;
		
		idade = Math.floor(idade / milissegundosPorAno);
		
		if(idade <= 15){
			alert("Não é possível concluir cadastro de pessoa solteira menor de 16 anos.");
			estado_civil.value = 'casado';
		}
	}	
	console.log(estado_civil.value);	
})

input_data.addEventListener("change", function(){
	estado_civil = document.querySelector(".estado-civil");
	if(estado_civil.value == 'solteiro'){
	
		const data_atual = new Date();	
		let data_nascimento_input = document.querySelector(".data-nascimento").value;
		let data_nascimento = new Date(data_nascimento_input);
		
		let idade = data_atual.getTime() - data_nascimento.getTime();
		
		const milissegundosPorAno = 1000 * 60 * 60 * 24 * 365.25;
		
		idade = Math.floor(idade / milissegundosPorAno);
		
		if(idade <= 15){
			alert("Não é possível concluir cadastro de pessoa solteira menor de 16 anos.");
			estado_civil.value = 'casado';
		}
	}	
	console.log(estado_civil.value);	
})