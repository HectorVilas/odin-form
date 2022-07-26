# odin-form

# https://hectorvilas.github.io/odin-form/

<table>
<thead>
<tr>
<th><h2>English</h2></th>
<th><h2>Español</h2></th>
</tr>
</thead>
<tbody>
<tr>
<td style="vertical-align: top;"><p>Welcome to the project. This time I'm not doing anything special, just some forms practice from <a href="https://www.theodinproject.com/">The Odin Project</a>.</p>

<p>As english is not my native language, from now on I'm going to write everything in english and spanish. I just need to find a way to make it easy to read here in the README.md.</p>
<p>Click in the bottom elements to open or collapse the progress updates in english or spanish (english open by default)</p></td>

<td style="vertical-align: top;"><p>Bienvenido al proyecto. Esta vez no voy a hacer nada especial, sólo una práctica de form de <a href="https://www.theodinproject.com/">The Odin Project</a>.</p>

<p>Ya que el inglés no es mi idioma nativo, a partir de ahora voy a empezar a escribir todo en inglés y español. Solo tengo que encontrar la forma de hacerlo fácil de leer en el README.md.</p>
<p>Haga click en los elementos de abajo para abrir o colapsar la actualización del progreso en inglés o español (inglés abierto pro defecto)</p></td>
</tr>
</tbody>
</table>

<!--------------------------->
<!-- spanish version here --->
<!--------------------------->

<details style="margin-bottom: .5em;">
<summary style="background-color: #333; padding: .5em;flex:1 1 50%;"><strong>ESPAÑOL (CLICK PARA EXPANDIR)</strong></summary>
<p>A medida que progreso con el curso de frontend, y luego de haber leído un montón sobre formularios, es hora de poner todo ese nuevo conocimiento en práctica, por lo que voy a hacer una página de formulario siguiendo <a href="./others/sign-up-form.png">esta imagen de diseño</a>.</p>

<h2>Actualización 1</h2>
<p>Ahora que sé cómo quiero que se vea la página, he descargado unas pocas imágene para que la misma se vea interesante. Luego de eso dediqué demasiado tiempo experimentando con el README.md para mostrar ámbos idiomas. Usé un poco de HTML básico para eso, no sabía que era posible en este tipo de archivos.</p>

<h2>Actualización 2</h2>
<p>Intenté hacer lo que tenía en mente, pero fallé completamente. Mientras pensaba en el proyecto al hacer otras cosas, se me ocurrió una mejor forma de hacer lo que quería lograr, y ahora funciona.</p>
<p>Cuando el usuario hace click en sign up o login, los botones se ocultarán y las imágenes se moverán hacia la derecha o izquierda, revelando el formulario apropiado. Por ahora no hay formularios.</p>
<p>Para hacerlo un poco más interesante, las imágenes en la página aparecerán borrosas y luego se enfocarán, y los botones aparecerán por debajo.</p>

<h2>Actualización 3</h2>
<p>Los botones han sido estilizados un poco, haciendo que el de Sign Up sea más notable que el de Log In. El formulario me llevó algo de tiempo para empezarlo porque tuve algunos problemas con CSS. Por ahora estoy usando el texto por defecto de la muestra de Odin, quizá lo cambie por algo menos genérico en el futuro.</p>
<p>El siguiente paso sería añadir más CSS, placeholders y patterns a los inputs, o el formulario será lo menos profesional que uno podría encontrarse. He llenado algunos feos formularios en los últimos días, y la experiencia de usuario fue horrible. No quiero cometer los mismos errores.</p>
<p>En fin, acá dejo un GIF mostrando el progreso:</p>
<img src="./READMEmd/progress01.gif">

<h2>Actualización 4</h2>
<p>El formulario al fin progresa. Me costó encontrar la forma de lograr lo que tenía en mente. Los inputs ahora tienen placeholders, los estilicé un poco y luego me encontré con un problema: ¿cómo puedo hacer que el formulario muestre mensajes de error? Luego de testear un montón, finalmente encontré una forma de mostrar mensajes de error una vez que el usuario deja el input. De esta forma el usuario no será molestado con mensajes de error mientras escribe o incluso antes de empezarlos. Cuando el usuario deja un input (clickea fuera o presiona tab), el espacio cambiará a un "modo agresivo", comprobando lo ingresado mientras es escrito, para hacer más fácil encontrar y arreglar errores.</p>
<p>Acá hay un GIF mostrando esto:</p>
<img src="./READMEmd/progress02.gif">
<p>También añadí un texto para los campos vacíos:</p>
<img src="./READMEmd/progress03.gif">
<p>Aún hay mucho trabajo por hacer. El formulario está muy lejos de estar terminado.</p>

<h2>Actualización 5</h2>
<p>Estuve trabajando en algo básico pero necesario.</p>
<p>Primero, trabajé en el media query, ahora los formularios son usables incluso en una ventana muy angosta. También hice un poco de estilizado.</p>
<p>Luego añadí el clásico "necesita/ya tiene una cuenta? Click aquí" para alternar entre formularios. Cuando el usuario clickea en éste, las dos imágenes pantalla completa cubrirán todo el viewport otra vez, luego se achicarán para revelar el otro formulario. Creo que se ve bastante bien.</p>
<p>Aún hay mucho trabajo por hacer. Necesito usar RegEx para patrones, limitar el tipo de input (sólo números para el teléfono) y dedicarle atención a las contraseñas.</p>

<h2>Actualización 6</h2>
<p>Los campos requeridos ahora son marcados con asteriscos, usando abbr. Un texto chico lo anuncia, con un pequeño ícono (ícono reutilizado con filtro de saturación) para hacerlo más notorio.</p>
<p>Ya que los campos no se borran luego de refrescar la página (al menos en Firefox), añadí unas pocas, simples líneas de código para verificar esos inputs. Si tienen algo escrito, comprobarán si lo ingresado es válido sin tener que clickear dentro y luego fuera del mismo, como en el comportamiento por defecto. Asumo que ésto también será útil para gente que use algún tipo de plugin para autocompletado.</p>

<h2>Actualización 7</h2>
<p>Hoy estuve horas intentando limitar el tipo de entrada en algunos campos. Los nombres no pueden contener números y los números no pueden contener letras. Mi primer idea fue añadir un event listener al input. Si se ingresa una letra en el campo de teléfono, no se escribirá, porque el valor del input será reemplazado por una copia sin el char no válido, pero ahora tengo dos problemas con esto:</p>
<ul>
  <li>el cursor se irá al final del texto ingresado</li>
  <li>la pseudoclase :invalid no funcionará</li>
</ul>
<p>Ésto resultará en una pésima experiencia de usuario, así que busqué en internet y encontré otra forma de hacerlo: con <i>.onkeydown</i></p>
<p>De esta forma sólo se requiere true o false, así que borré la última función por completo y empecé de cero con el nuevo método. Ahora el código es más corto y hace exactamente lo que quería: que la tecla presionada sea ignorada si en el campo es inválido.</p>

<h2>Actualización 8</h2>
<p>Esta vez estuve trabajando en el campo de contraseña, añadiendo un mensaje con los requisitos. Ésto funciona así:</p>
<ul>
  <li>cuando el usuario entra en el campo de contraseña, los requisitos serán mostrados</li>
  <li>si el usuario sale del campo, aún se seguirá viendo</li>
  <li>luego de que lo ingresado es válido, los requisitos se ocultarán</li>
  <li>si velve al estado inválido, los requisitos se mostrarán otra vez</li>
</ul>

<img src="./READMEmd/progress04.gif">
<h5>(El mensaje de conexión insegura ya ha sido arreglado, usé http en vez de https en el action del formulario)</h5>

<p>Ésto es sólo algo visual. Ahora mismo el formulario sólo revisa el largo mínimo (minlength). El siguiente paso será finalmente añadir regEx para verificar esos requisitos.</p>

<h2>Actualización 9</h2>
<p>He escrito un poco de JavaScript para marcar como válido los requisitos en la lista bajo el campo de contraseña. Ahora éste comprobará cada caracter cuando se presione una tecla, así que si un requisito no es cumplido, se mostrará nuevamente como no válido.
</p>
<img src="./READMEmd/progress05.gif">
<p>Debo aclarar que los requisitos se ocultan porque el largo mínimo (minlength) es cumplido, no porque todos los requisitos sean válidos. Éste será mi siguiente paso.</p>

<h2>Actualización 10</h2>
<p>Escribí un poco de código para la confirmación de contraseñ. Cuando el usuario escribe en éste o el otro campo de contraseña, éste cambiará el estado a válido o inválido por cada tecla presionada.</p>
<img src="./READMEmd/progress06.gif">
<p>Para desafiarme a mí mismo un poco, hice que el campo de número telefónico sea opciona. Ésto requirió jugar un poco con el CSS para hacer que deje de mostrar el mensaje global de "campo requerido", ambién hice que no muestre ningún estado si el campo se encuentra vacío. Logré hacer ésto sólo con selectores avanzados de CSS, fue desafiante y entretenido, esos métodos son muy poderosos.</p>
<p>También aprendí sobre regEx, fue muy difícil, pero logré escribir un patrón para emails por mi cuenta. Lo puse a prueba en regex101.com con un listado de emails en formatos válidos e inválidos para probar, y el resultado fue satisfactorio.</p>
<p>Luego la contraseña, y tengo una confesión: copié el patrón de ihateregex.io/expr/password. Lo intenté por mi cuenta, pero sin éxito. Algunos requisitos funcionaban, otros no. Luego buscando más información, encontré el patrón perfecto con los mismos requisitos que el mío. El dev que nunca haya copiado y pegado código ajeno que tire la primer piedra, jej. Prometo que voy a dedicarle más tiempo al regex hasta agarrarle la mano.</p>
<p>Otra adición fue una barra de progreso para mostrar qué tan segura es la contraseña. Es sólo algo estético, no sé si esos valores realmente hacen que una contraseña sea más segura. La barra añade un punto por cada requisito cumplido, y otros dos puntos por largo extra.</p>
<img src="./READMEmd/progress07.gif">
<p>Y, finalmente, usé .preventDefault() en el botón de submit. Si el "confirmar contraseña" no tiene la clase "valid" (válido), no se enviará el formulario. El resto de los campos ya tienen un patrón y el atributo required (requerido), así que no sería necesario comprobar éstos. Creo que ésto es suficiente desde el lado del frontend del formulario, para no enviar basura al backend.</p>
<p>Lo último que añadí fue un pequeño brillo en los campos resaltados y activos. Fue una recomendación de un amigo, y se ve bien.</p>

<h1>Pensamientos finales</h1>
<p>He procrastinado la sección de formularios del curso, incluso he empezado un proyecto personal (un juego de Solitario, divertido proyecto que me llevó un mes para acabar, <a href="https://hectorvilas.github.io/solitaire/">click acá para jugarlo</a>), sólo porque los formularios me parecían aburridos. Bueno, lo eran, mucho, pero luego de progresar, los encontraba caeda vez más interesantes.</p>
<p>Luego empecé con este proyecto de práctica, pensé que iba a ser fácil, pues no, sí que estaba equivocado.</p>
<p>Ahora que finalmente acabé el proyecto, puedo ver cuánto trabajo requiere incluso el formulario más simple. Ahora tengo respeto por los formularios, y desprecio a esos que hacen un mal trabajo, creando una mala experiencia para el usuario, por no respetar los formularios.</p>
<p>Este proyecto fue divertido, y aprendí un montón. No puedo esperar para ver la siguiente parte del curso.</p>
<p>¡Los veo en mi siguiente proyecto!</p>

</details>

<!--------------------------->
<!-- english version here --->
<!--------------------------->

---

<details open>
<summary style="background-color: #333; padding: .5em;flex:1 1 50%;"><strong>ENGLISH</strong></summary>
<p>As I'm progressing in the frontend course, and after reading a lot about forms, it's time to put all this new knowledge in practice, so I'm doing a simple form page following <a href="./others/sign-up-form.png">this design image</a>.</p>

<h2>Update 1</h2>
<p>Now that I know how I want the page to look, I downloaded a few images so the page can look interesting. After that I spent too much time experimenting with the the README.md to show both languages. I used some basic HTML for it, I didn't know it was possible in this kind of files.</p>

<h2>Update 2</h2>
<p>I tried to make what I had in mind, but I failed completely. After thinking while doing something else, I came with a better approach for what I wanted to do, and it works now.</p>
<p>When the user clicks on sign up or login, the buttons will hide and the images will move to left or right, revealing the appropiate form. There's no forms for now.</p>
<p>To make it a little more interesting, the images in the page will appear blurred and then unblur on load, and the buttons will reveal from the bottom.</p>

<h2>Update 3</h2>
<p>The buttons has been styled a little, making the Sign Up button more noticeably than the Log In one. The form took me some time to get it started because I had some problems with CSS. For now I'm using the default Odin sample's text, I may change it for something else in the future to make it look less generic.</p>
<p>The next step would be adding some CSS, placeholders and patterns to the inputs, or the form will be the least proffesional you can find out there. I've been filling some ugly forms in the last days, and the user experience has been horrible. I don't want to make the same mistakes.</p>
<p>Anyways, here's a little GIF showing the progress:</p>
<img src="./READMEmd/progress01.gif">


<h2>Update 4</h2>
<p>The form is finally progressing. I had a hard time trying to figure how to achieve what I wanted to do. The inputs now have placeholders, I styled it a little and then I had a problem: how can I make the form show error messages? After a lot of testing, I finally found a way to show error messages once the user leaves the input field. This way the user won't get annoyed seeing error messages while typing or even before starting with them. Once the user leaves an input (click away or tab), the field will change to an "agressive mode", checking the inputs while these are being typed, to make it easier to the user to fix any mistakes.</p>
<p>Here's a GIF showing it:</p>
<img src="./READMEmd/progress02.gif">
<p>I also added a little text to empty fields:</p>
<img src="./READMEmd/progress03.gif">
<p>There's still a LOT of work to do. This form is way far from finished.</p>

<h2>Update 5</h2>
<p>I've been working on something pretty basic but necessary.</p>
<p>First, I've been working in the media query, now the forms are usable even in a very narrow window. Also a little of styling.</p>
<p>Then I added the classic "need/have an accout? Click here" to swap between forms. When the user clicks on it, the two fulscreen images will cover the viewport again, then will shrink to reveal the other form. I think it looks pretty good.</p>
<p>There's still a lot of work to do. I need to use RegEx for patterns, limit the input type (only numbers in the Phone field) and give some attention to the password.</p>


<h2>Update 6</h2>
<p>Required fields are now marked with an asterisk, using abbr. A small text announces it, with a little icon (reutilized icon with saturation filter) to make it more notorious.</p>
<p>As the input fields doesn't get deleted after refreshing the page (at least on Firefox), I added a few, simple lines of code to check for those inputs. If there's something written, it will check if the input is valid without having to first click on it and then away, like in the default behaviour. I'm guessing it will also be useful for people using some kind of form autocompletion plugins.</p>

<h2>Update 7</h2>
<p>Today I spent hours trying to limit the input type in some fields. Names can't contain numbers and numbers can't contain letters. My first approach was adding an event listener to the input. If the input is a letter in the phone field, it won't be written, because the input value will be replaced for a copy without the invalid chars, but I had two problems with it:</p>
<ul>
  <li>the cursor will jump to the end of the string</li>
  <li>the :invalid pseudoclass won't be triggered</li>
</ul>
<p>This will result in a lousy user experience, so I searched on the internet and found another way: the <i>.onkeydown</i></p>
<p>This way it only requires a true or false, so I deleted the last function completely and started again with this new method. Now the code is shorter, and it does exactly what I wanted: the pressed key will be ignored if the field is invalid.</p>

<h2>Update 8</h2>
<p>This time I've been working in the password field, adding a message with the requirements. It works like this:</p>
<ul>
  <li>when user focus the password field, the requirements will show</li>
  <li>if user unfocus, it will still show</li>
  <li>after the input is valid, the requirements will hide</li>
  <li>if it goes back to invalid, requirements will show again</li>
</ul>

<img src="./READMEmd/progress04.gif">
<h5>(The insecure connection has been fixed, I was using http instead of https for the form action)</h5>

<p>This is just something visual. Right now the form is just checking the minlength. The next step will be finally adding regEx to check for those requirements.</p>

<h2>Update 9</h2>
<p>I wrote a little of JavaScript to mark as valid the requirements in the list under the password field. Now it will check for each char on each keypress, so if a requirement is not met, it will show again as invalid.</p>
<img src="./READMEmd/progress05.gif">
<p>I should clarify, the requirements are hidden because the minlength is met, not because all the requirements are valid. This is my next step.</p>


<h2>Update 10</h2>
<p>I wrote a little code for the "confirm password". When the user writes in this one or the first password field, it will change state to valid or invalid on each keypress.</p>
<img src="./READMEmd/progress06.gif">
<p>To challenge myself a little, I made the "phone number" field optional. It required a little fiddling with CSS to make it stop showing the global "required field" message, also made it to not show any status if the field is empty. I managed to do it with only advanced CSS selectors, it was challenging but fun, those methods are powerful.</p>
<p>I also learned about regEx, it was really hard, but managed to write the pattern for emails by myself. I tried it in regex101.com with a list of valid and invalid email formats for testing, and the result was satisfactory.</p>
<p>Then the password, and I have a confession: I just took the pattern from ihateregex.io/expr/password. I tried myself, but without success. Some checks worked, some didn't. Then looking for more info, found this perfect pattern with the same requirements as mine. The dev that never copypasted code can throw the first rock, heh. I promise I'll spend more time trying to get a grasp of regEx.</p>
<p>Another adition was a progress bar to show password strength. It's just for decoration, I don't know if those values really makes the password stronger. The bar will add one point for each requirement met, and two extra points for extra length.</p>
<img src="./READMEmd/progress07.gif">
<p>And finally, I used .preventDefault() in the submit button. If the "confirm password" doesn't have a "valid" class, it won't submit. The rest of the fields have a pattern and a required attribute, so it was unnecesary there. I think this is enough for the frontend side of the form, to not send garbage to the backend.</p>
<p>The last thing I added was a little glow in the focused and active fields. It was a recomendation from a friend, and it looks good.</p>



<h1>Final thoughts</h1>
<p>I've procrastinated the forms section of the course, I've even started a personal project (a solitaire game, fun project that took me a month to finish, <a href="https://hectorvilas.github.io/solitaire/">click here to play</a>), just because I found forms boring. Well, it was, very, but after progressing, It was getting better and better.</p>
<p>Then I started with this practice project, I thought it was going to be a piece of cake, but oh boy, I was wrong.</p>
<p>Now that I finally finished the project, I can see how much work it requires to make even the simplest form. Now I have respect for forms, and despise those who make a lousy form with bad user experience for not respecting it.</p>
<p>This project was fun, and I learned a lot. I can't wait to see the next part of the course.</p>
<p>See ya in my next project!</p>

</details>