/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
	nombre: "",
	edad: 0,
	ciudad: "",
	interesPorJs: "",
};

const listado = [
	{
		imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
		lenguajes: "HTML y CSS",
		bimestre: "1er bimestre",
	},
	{
		imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
		lenguajes: "Javascript",
		bimestre: "2do bimestre",
	},
	{
		imgUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
		lenguajes: "React JS",
		bimestre: "3er bimestre",
	},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
	/* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

	const fechaActual = new Date(),
		anio = parseInt(fechaActual.getFullYear()),
		nombre = prompt("Ingrese su nombre"),
		edad = parseInt(prompt("Año de nacimiento")),
		ciudad = prompt("En que ciudad vives"),
		interesPorJs = confirm("Te interesa javaScript"),
		edadAcutal = anio - edad;

	datosPersona.nombre = nombre;
	datosPersona.edad = edadAcutal;
	datosPersona.ciudad = ciudad;
	datosPersona.interesPorJs = (interesPorJs === true ? "Si" : "No");

	return datosPersona;
}

function renderizarDatosUsuario() {
	/* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
	obtenerDatosDelUsuario();
	/* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

	console.log(datosPersona);

	const nuevoNombre = document.getElementById("nombre"),
		nuevaEdad = document.getElementById("edad"),
		nuevaCiudad = document.getElementById("ciudad"),
		interes = document.getElementById("javascript");

	nuevoNombre.innerText = datosPersona.nombre;
	nuevaEdad.innerText = datosPersona.edad;
	nuevaCiudad.innerText = datosPersona.ciudad;
	interes.innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
	/* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
}

function alternarColorTema() {
	/* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
