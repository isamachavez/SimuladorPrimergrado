

        // Función simulada para manejar el envío del cuestionario
        function handleQuizSubmit(event) {
            event.preventDefault(); // Evitar la recarga de la página por defecto
            alert('Cuestionario enviado (simulación).');
            // Aquí iría la lógica para enviar los datos del formulario
        }

        // Evento para el envío del formulario (opcional, ya que el temporizador lo envía automáticamente)
        quizForm.addEventListener('submit', handleQuizSubmit);

function contarSeleccion() {

            const checkboxes = document.querySelectorAll('input[name="grupo"]');

            let totalSeleccionadas = 0;
              checkboxes.forEach(checkbox => {

                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });
            if (totalSeleccionadas > 8) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 8 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
/*3*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });

            if (totalSeleccionadas > 3) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 3 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
        /*11*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });

            if (totalSeleccionadas > 5) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 5 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
        /*17*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });
            if (totalSeleccionadas > 3) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 3 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
        /*21*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });

            if (totalSeleccionadas > 11) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 11 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
        /*22*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });

            if (totalSeleccionadas > 6) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 6 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
           }
        }
        /*23*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });

            if (totalSeleccionadas > 5) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 5 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
        /*25*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });

            if (totalSeleccionadas > 5) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 5 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
        /*30*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });

            if (totalSeleccionadas > 4) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 4 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
        /*42*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                   totalSeleccionadas++;
                }
            });

            if (totalSeleccionadas > 5) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 5 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
               if (lastChecked) {
                    lastChecked.checked = false;
                }
           } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
        /*49*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });
        
            if (totalSeleccionadas > 7) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 7 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }
        /*50*/
        function contarSeleccion() {
            const checkboxes = document.querySelectorAll('input[name="grupo1"]');
            let totalSeleccionadas = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalSeleccionadas++;
                }
            });

        if (totalSeleccionadas > 3) {
                document.getElementById('mensaje').textContent = "Solo puedes seleccionar hasta 3 opciones.";
                const lastChecked = Array.from(checkboxes).reverse().find(checkbox => checkbox.checked);
                if (lastChecked) {
                    lastChecked.checked = false;
                }
            } else {
                document.getElementById('mensaje').textContent = ""; 
            }
        }

        function calcularPuntaje() {
            let puntaje = 0;
            const totalPreguntas = 50; 
        

            const respuestasCorrectas = {
                manzana: "4", 
                serie: ["4", "7","0","2","7","10","1","2"], 
                figuras: ["Círculo", "Cuadrado","Triángulo"], 
                nocion: ["Alta","Baja"], 
                numero: "10", 
                numeroAntesDelDiez: "9",
                animalEnElAgua: "Pez", 
                animalCuatroPatas: "Perro", 
                vocales: ["I", "A","E","0","U"], 
                trazos: "Vertical",
                colorCamiseta: "Roja", 
                colorSol: "Amarillo" ,
                hermanos: ["SI","NO"], 
                actividadFavorita: "Jugar con mis amigos", 
                coloresBandera: ["Amarillo", "Azul", "Rojo"], 
                coloresUnidadEducativa: ["Blanco","Rojo"], 
                coincideSombras: "SI", 
                abejitaMusica: "Abejita Chiquitita Plim Pim",
                partesCuerpo: ["Cabello", "Ojos", "Nariz", "Brazos", "Pies", "Cabeza", "Manos", "Piernas", "Cuello","Boca","Orejas"], 
                utilesEscolares: ["Lápiz", "Colores", "Borrador", "Sacapuntas", "Cuadernos","Mochila"],
                accionesAula: ["Escuchar atentamente", "Tener una actitud respetuosa", "Cuidar el materialescolar", "Mantener la limpieza", "Respetar el turno de palabra"], 
                genero: ["Masculino","Femenino"],
                comidaSaludable: ["Manzana", "Plátano", "Brócoli", "Lechuga", "Fresas"], 
                serResponsable: "Cumplir con tus obligaciones", 
                respeto: "Tratar a las personas con amabilidad y consideracion", 
                caida: "Llamar a un adulto para que te ayude",
                comportamientoAula: "Escuchando y prestando atención", 
                utilesAseo: ["Cepillo dental", "Jabón de baño", "Shampoo", "Toalla"],
                tecnica: "Enrollado", 
                recortado: "Cuadrado", 
                coloreado: "Vertical",
                materialesPintura: "Pinturas, pinceles y lápices", 
                formaCirculo: "Redonda", 
                formaTriangulo: "De tres lados", 
                figuraGeometrica: "Triángulo", 
                plastilina: "Hacer figuras y moldear", 
                colorHojas: "Verde", 
                pegarImagenes: "Goma",
                animalesDomesticos: ["Perro", "Gato"], 
                partesPlanta: ["Hojas", "Tallo", "Raíz", "Flor", "Fruto"], 
                esNoche: "Noche", 
                esCampo: "Campo", 
                tipoViviendaPaja: "Paja", 
                tipoViviendaAdobe: "Adobe",
                tipoViviendaLadrillo: "Ladrillo", 
                tipoViviendaMadera: "Madera",
                partesCasa: ["Dormitorio", "Sala", "Garage", "Cocina", "Baño", "Comedor", "Balcón"], 
               coloresSemaforo: ["Rojo", "Amarillo", "Verde"]




            };
   
            const manzanaSeleccionada = document.querySelector('input[name="manzana"]:checked');
            if (manzanaSeleccionada && manzanaSeleccionada.value === respuestasCorrectas.manzana) {
                puntaje += 0.05;
            }
        

            const serieSeleccionadas = document.querySelectorAll('input[name="serie"]:checked');
            const respuestasSerie = Array.from(serieSeleccionadas).map(input => input.value);
            if (respuestasSerie.length === respuestasCorrectas.serie.length && respuestasSerie.every(value => respuestasCorrectas.serie.includes(value))) {
                puntaje += 0.05;
            }
        

            const figurasSeleccionadas = document.querySelectorAll('input[name="figura"]:checked');
            const respuestasFiguras = Array.from(figurasSeleccionadas).map(input => input.value);
            if (respuestasFiguras.length === respuestasCorrectas.figuras.length && respuestasFiguras.every(value => respuestasCorrectas.figuras.includes(value))) {
                puntaje += 0.05;
            }
            
            const nocionSeleccionada = document.querySelector('input[name="nocion"]:checked');
            if (nocionSeleccionada && nocionSeleccionada.value === respuestasCorrectas.nocion) {
                puntaje += 0.05;
            }
        
 
            const numeroSeleccionado = document.querySelector('input[name="numero"]:checked');
            if (numeroSeleccionado && numeroSeleccionado.value === respuestasCorrectas.numero) {
                puntaje += 0.05;
            }
            }
            const animalSeleccionado = document.querySelector('input[name="grupo2"]:checked');
            if (animalSeleccionado && animalSeleccionado.value === respuestasCorrectas.animalEnElAgua) {
                puntaje += 0.05;
            }
            const animalCuatroPatasSeleccionado = document.querySelector('input[name="grupo2"]:checked');
            if (animalCuatroPatasSeleccionado && animalCuatroPatasSeleccionado.value === respuestasCorrectas.animalCuatroPatas) {
                puntaje += 0.05;
            }
            const seleccionadasVocales = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.value);
            if (respuestasCorrectas.vocales.every(vocal => seleccionadasVocales.includes(vocal))) {
                puntaje += 0.05;
            }
            const trazosSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (trazosSeleccionado && trazosSeleccionado.value === respuestasCorrectas.trazos) {
                puntaje += 0.05;
            }
            const colorCamisetaSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (colorCamisetaSeleccionado && colorCamisetaSeleccionado.value === respuestasCorrectas.colorCamiseta) {
                puntaje += 0.05;
            }            
            if (colorSolSeleccionado && colorSolSeleccionado.value === respuestasCorrectas.colorSol) {
                puntaje += 0.05;
            }
            const hermanosSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (hermanosSeleccionado && hermanosSeleccionado.value === respuestasCorrectas.hermanos) {
                puntaje += 0.05;
            }
            const actividadSeleccionada = document.querySelector('input[name="grupo1"]:checked');
            if (actividadSeleccionada && actividadSeleccionada.value === respuestasCorrectas.actividadFavorita) {
                puntaje += 0.05;
            }
            const coloresSeleccionados = document.querySelectorAll('input[name="grupo1"]:checked');
            const respuestasColores = Array.from(coloresSeleccionados).map(input => input.value);
            if (respuestasColores.length === respuestasCorrectas.coloresBandera.length && respuestasColores.every(value => respuestasCorrectas.coloresBandera.includes(value))) {
                puntaje += 0.05;
            }
            const unidadEducativaSeleccionada = document.querySelector('input[name="grupo1"]:checked');
            if (unidadEducativaSeleccionada && unidadEducativaSeleccionada.value === respuestasCorrectas.coloresUnidadEducativa) {
                puntaje += 0.05;
            }
            const sombrasSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (sombrasSeleccionado && sombrasSeleccionado.value === respuestasCorrectas.coincideSombras) {
                puntaje += 0.05;
            }
            const abejitaSeleccionada = document.querySelector('input[name="grupo1"]:checked');
            if (abejitaSeleccionada && abejitaSeleccionada.value === respuestasCorrectas.abejitaMusica) {
                puntaje += 0.05;
            }
            const partesCuerpoSeleccionadas = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (partesCuerpoSeleccionadas.length === respuestasCorrectas.partesCuerpo.length && partesCuerpoSeleccionadas.every(value => respuestasCorrectas.partesCuerpo.includes(value))) {
                puntaje += 0.05;
            }
            const utilesEscolaresSeleccionados = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (utilesEscolaresSeleccionados.length === respuestasCorrectas.utilesEscolares.length && utilesEscolaresSeleccionados.every(value => respuestasCorrectas.utilesEscolares.includes(value))) {
                puntaje += 0.05;
            }
            const accionesAulaSeleccionadas = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (accionesAulaSeleccionadas.length === respuestasCorrectas.accionesAula.length && accionesAulaSeleccionadas.every(value => respuestasCorrectas.accionesAula.includes(value))) {
                puntaje += 0.05;
            }
            const generoSeleccionado = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (generoSeleccionado.length === 1 && respuestasCorrectas.genero.includes(generoSeleccionado[0])) {
                puntaje += 0.05;
            }
            const comidaSaludableSeleccionadas = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (comidaSaludableSeleccionadas.length === respuestasCorrectas.comidaSaludable.length && comidaSaludableSeleccionadas.every(value => respuestasCorrectas.comidaSaludable.includes(value))) {
                puntaje += 0.05;
            }
            const serResponsableSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (serResponsableSeleccionado && serResponsableSeleccionado.nextElementSibling.textContent === respuestasCorrectas.serResponsable) {
                puntaje += 0.05;
            }
            const respetoSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (respetoSeleccionado && respetoSeleccionado.nextElementSibling.textContent === respuestasCorrectas.respeto) {
                puntaje += 0.05;
            }
            const caidaSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (caidaSeleccionado && caidaSeleccionado.nextElementSibling.textContent === respuestasCorrectas.caida) {
                puntaje += 0.05;
            }
            const comportamientoAulaSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (comportamientoAulaSeleccionado && comportamientoAulaSeleccionado.nextElementSibling.textContent === respuestasCorrectas.comportamientoAula) {
                puntaje += 0.05;
            }
            const utilesAseoSeleccionados = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (utilesAseoSeleccionados.length === respuestasCorrectas.utilesAseo.length && utilesAseoSeleccionados.every(value => respuestasCorrectas.utilesAseo.includes(value))) {
                puntaje += 0.05;
            }
            const tecnicaSeleccionada = document.querySelector('input[name="grupo1"]:checked');
            if (tecnicaSeleccionada && tecnicaSeleccionada.nextElementSibling.textContent === respuestasCorrectas.tecnica) {
                puntaje += 0.05;
            }
            const recortadoSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (recortadoSeleccionado && recortadoSeleccionado.nextElementSibling.textContent === respuestasCorrectas.recortado) {
                puntaje += 0.05;
            }
            const coloreadoSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (coloreadoSeleccionado && coloreadoSeleccionado.nextElementSibling.textContent === respuestasCorrectas.coloreado) {
                puntaje += 0.05;
            }
            const materialesPinturaSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (materialesPinturaSeleccionado && materialesPinturaSeleccionado.nextElementSibling.textContent === respuestasCorrectas.materialesPintura) {
                puntaje += 0.05;
            }
            const formaCirculoSeleccionada = document.querySelector('input[name="grupo1"]:checked');
            if (formaCirculoSeleccionada && formaCirculoSeleccionada.nextElementSibling.textContent === respuestasCorrectas.formaCirculo) {
                puntaje += 0.05;
            }
            const formaTrianguloSeleccionada = document.querySelector('input[name="grupo1"]:checked');
            if (formaTrianguloSeleccionada && formaTrianguloSeleccionada.nextElementSibling.textContent === respuestasCorrectas.formaTriangulo) {
                puntaje += 0.05;
            }
            const figuraGeometricaSeleccionada = document.querySelector('input[name="grupo1"]:checked');
            if (figuraGeometricaSeleccionada && figuraGeometricaSeleccionada.nextElementSibling.textContent === respuestasCorrectas.figuraGeometrica) {
                puntaje += 0.05;
            }
            const plastilinaSeleccionada = document.querySelector('input[name="grupo1"]:checked');
            if (plastilinaSeleccionada && plastilinaSeleccionada.nextElementSibling.textContent === respuestasCorrectas.plastilina) {
                puntaje += 0.05;
            }
            const colorHojasSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (colorHojasSeleccionado && colorHojasSeleccionado.nextElementSibling.textContent === respuestasCorrectas.colorHojas) {
                puntaje += 0.05;
            }
            const pegarImagenesSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (pegarImagenesSeleccionado && pegarImagenesSeleccionado.nextElementSibling.textContent === respuestasCorrectas.pegarImagenes) {
                puntaje += 0.05;
            }
            const animalesDomesticosSeleccionados = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (animalesDomesticosSeleccionados.length === respuestasCorrectas.animalesDomesticos.length && animalesDomesticosSeleccionados.every(value => respuestasCorrectas.animalesDomesticos.includes(value))) {
                puntaje += 0.05;
            }
            const partesPlantaSeleccionadas = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (partesPlantaSeleccionadas.length === respuestasCorrectas.partesPlanta.length && partesPlantaSeleccionadas.every(value => respuestasCorrectas.partesPlanta.includes(value))) {
                puntaje += 0.05;
            }
            const esNocheSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (esNocheSeleccionado && esNocheSeleccionado.nextElementSibling.textContent === respuestasCorrectas.esNoche) {
                puntaje += 0.05;
            }
            const esCampoSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (esCampoSeleccionado && esCampoSeleccionado.nextElementSibling.textContent === respuestasCorrectas.esCampo) {
                puntaje += 0.05;
            }
            const tipoViviendaPajaSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (tipoViviendaPajaSeleccionado && tipoViviendaPajaSeleccionado.nextElementSibling.textContent === respuestasCorrectas.tipoViviendaPaja) {
                puntaje += 0.05;
            }
            const tipoViviendaAdobeSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (tipoViviendaAdobeSeleccionado && tipoViviendaAdobeSeleccionado.nextElementSibling.textContent === respuestasCorrectas.tipoViviendaAdobe) {
                puntaje += 0.05;
            }
            const tipoViviendaLadrilloSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (tipoViviendaLadrilloSeleccionado && tipoViviendaLadrilloSeleccionado.nextElementSibling.textContent === respuestasCorrectas.tipoViviendaLadrillo) {
                puntaje += 0.05;
            }
            const tipoViviendaMaderaSeleccionado = document.querySelector('input[name="grupo1"]:checked');
            if (tipoViviendaMaderaSeleccionado && tipoViviendaMaderaSeleccionado.nextElementSibling.textContent === respuestasCorrectas.tipoViviendaMadera) {
                puntaje += 0.05;
            }
            const partesCasaSeleccionadas = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (partesCasaSeleccionadas.length === respuestasCorrectas.partesCasa.length && partesCasaSeleccionadas.every(value => respuestasCorrectas.partesCasa.includes(value))) {
                puntaje += 0.05;
            }
            const coloresSemaforoSeleccionados = Array.from(document.querySelectorAll('input[name="grupo1"]:checked')).map(input => input.nextElementSibling.textContent);
            if (coloresSemaforoSeleccionados.length === respuestasCorrectas.coloresSemaforo.length && coloresSemaforoSeleccionados.every(value => respuestasCorrectas.coloresSemaforo.includes(value))) {
                puntaje += 0.05;
            }
            const calificacion = puntaje; 
    function calcularPuntaje() {
        let totalPreguntas = 50; // Total de preguntas
        let puntaje = 0;

        // Respuestas correctas
        const respuestasCorrectas = {
            "paralelo": "4", // Respuesta correcta para la pregunta 1
            // Agrega más respuestas correctas aquí
            "colorSemaforo": ["Rojo", "Amarillo", "Verde"], // Respuestas correctas para la pregunta 50
            // Ejemplo de otras preguntas
            "grupo4": "Alta", // Respuesta correcta para la pregunta 4
            "grupo6": "10", // Respuesta correcta para la pregunta 6
            // Agrega más respuestas correctas según sea necesario
        };

        // Verificar respuestas de radio
        for (let pregunta in respuestasCorrectas) {
            const respuestaSeleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
            if (respuestaSeleccionada) {
                if (respuestaSeleccionada.value === respuestasCorrectas[pregunta]) {
                    puntaje++;
                }
            } else if (Array.isArray(respuestasCorrectas[pregunta])) {
                // Verificar respuestas de checkbox
                const checkboxes = document.querySelectorAll(`input[name="${pregunta}"]:checked`);
                const respuestasSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.value);
                if (JSON.stringify(respuestasSeleccionadas) === JSON.stringify(respuestasCorrectas[pregunta])) {
                    puntaje++;
                }
            }
        }

        // Calcular el porcentaje
        const porcentaje = (puntaje / totalPreguntas) * 100;

        // Mostrar el resultado
        document.getElementById("resultado").innerText = `Tu puntaje es: ${puntaje} de ${totalPreguntas} (${porcentaje.toFixed(2)}%)`;
    }

        function iniciarSesion() {
    
            const usuario = document.getElementById('username').value;

            const contrasena = document.getElementById('password').value;

            const mensaje = document.getElementById('mensaje');



            if (usuario === "ueeloyalfaro@gmail.com" && contrasena === "eloy123") {

                mensaje.textContent = ""; 

                document.getElementById('login').style.display = 'none'; 

                document.getElementById('cuestionario').style.display = 'block';

            } else {

                mensaje.textContent = "Usuario o contraseña incorrectos.";

            }
        }


        let timeLeft = 40 * 60; // 40 minutos en segundos
        const timerElement = document.getElementById("timer");
        const submitBtn = document.getElementById("submitBtn");
        const resultElement = document.getElementById("result");
        const scoreElement = document.getElementById("score");

        const interval = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Tiempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(interval);
                submitQuiz();
            }
        }, 1000);

        submitBtn.addEventListener("click", () => {
            clearInterval(interval);
            submitQuiz();
        });

        function submitQuiz() {
            const answers = {
                q1: document.getElementById("q1").value.toLowerCase(),
                q2: parseInt(document.getElementById("q2").value),
                q3: document.getElementById("q3").value.toLowerCase(),
            };

            let score = 0;
            if (answers.q1 === "parís") score++;
            if (answers.q2 === 8) score++;
            if (answers.q3 === "cervantes") score++;

            scoreElement.textContent = `${score} / 3`;
            resultElement.style.display = "block";
        }
   