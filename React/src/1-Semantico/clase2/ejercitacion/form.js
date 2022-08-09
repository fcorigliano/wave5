const React = require("react");

/**
 *********************Punto 1************************
 Crear 3 inputs (name,email y phone) con sus labels correspondientes
 
 *********************Punto 2*************************
 Crear un select cuyo label sea 'Countries'
 las opciones deben ser (Argentina, Chile, Colombia, Venezuela, México, Bolivia,Uruguay) 
 
 *********************Punto 3************************
 Crear dos radio button (envio y retiro) con sus labels correspondientes
 
 *********************Punto 4************************
 Crear al menos 2 checkbox (Reloj y Notebook) con sus labels correspondientes
 */



function Form() {
	return (
		<>
			<form>
				<fieldset>
					<legend>Punto 1</legend>
					<label htmlFor='name'>Name</label>
					<input id='name' type='text' placeholder='Facundo Corigliano'></input>
					<label htmlFor='email'>Email</label>
					<input id='email' type='email' placeholder='facundo.corigliano@mercadolibre.com'></input>
					<label htmlFor='phone'>Phone</label>
					<input id='phone' type='number' placeholder='15-3897-6517'></input>
				</fieldset>
			</form>

			<form>
				<fieldset>
					<legend>Punto 2</legend>
					<label htmlFor='countries'>Countries</label>
					<select id='countries'>
						<option value='Argentina'>Argentina</option>
						<option value='Chile'>Chile</option>
						<option value='Uruguay'>Uruguay</option>
						<option value='Bolivia'>Bolivia</option>
						<option value='Colombia'>Colombia</option>
						<option value='México'>México</option>
						<option value='Venezuela'>Venezuela</option>
					</select>
				</fieldset>
			</form>

			<form>
				<fieldset>
					<legend>Punto 3</legend>
					<label htmlFor='envio'>Envio</label>
					<input id='envio' type='radio' name='logistica'></input>

					<label htmlFor='retiro'>Retiro</label>
					<input id='retiro' type='radio' name='logistica'></input>
				</fieldset>
			</form>

			<form>
				<fieldset>
					<legend>Punto 4</legend>
					<label htmlFor='bicicleta'>Bicicleta</label>
					<input id='bicicleta' type='checkbox'></input>

					<label htmlFor='reloj'>Reloj</label>
					<input id='reloj' type='checkbox'></input>

					<label htmlFor='notebook'>Notebook</label>
					<input id='notebook' type='checkbox'></input>
				</fieldset>
			</form>
		</>
	);
}

export default Form
