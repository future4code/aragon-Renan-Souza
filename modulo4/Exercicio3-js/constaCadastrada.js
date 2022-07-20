const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const login = (email, password) => {
	if (email.includes("@") &&
	password.length>=6) {
		for (let i=0; i <= contas.length; i++) {
			const validacaoEmail = 
			contas[i].email === email 
			const validacaoPassaword = 
			contas[i].password === password
			const autoriza = validacaoEmail &&
			validacaoPassaword
			if (autoriza) {
				return "login bem sucedido"
			} else {
				return "email ou senha incorretos"
			}
		}
	} else {
		return "email invalido ou senha com menos de 6 caracteres"
	}
}