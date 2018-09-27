# contribution-mural

## Cómo contribuir?

Facil!

0. Primero hay que asegurarse tener Git instalado y configurado y crearse una cuenta de Github.

```
sudo apt install git
git config --global user.name "Mi nombre"
git config --global user.email "Mi mail"

// Después, hacerse una cuenta en Github, no tiene porque ser el mismo nombre/mail.
```

0.5. Para poder contribuir a un proyecto en Github, primero hay que hacer un fork de este, es decir un clon exacto al que tengamos acceso. Luego, se le pide al autor original que revise los cambios y los agregue (hacer un merge, o sea una fusión del fork nuevo y el repo original) al repo original. Esto se hace tocando en el boton `fork` arriba a la derecha del repo, en github.

1. Ahora, ya en el repo forkeado, hay que clonar el repositorio. Esto se hace con el comando `git clone` y lo que hace es traer todo el repo que esta en **Github** a la maquina local, con **Git**. El URL se saca del boton verde 'Clone or download'.

```
git clone https://github.com/MiUsuarioDeGithub/contribution-mural.git
```

2. Si lo clonaste antes, no te olvides de actualizar para estar al día. Siempre antes de empezar a trabajar hay que hacer un `git pull`

```
git pull
```

3.  Ahora es cuando se hacen los cambios. Metete en y agrega lo que quieras. Lo que quieras es lo que quieras! Más funciones en `index.js`, distintos colores en `style.css` algun gif raro en la carpeta `media`. Si querés poner una imagen o gif y que se vea en el mural podes hacerlo agregando la siguiente linea a `index.html`

```
<img class='img' src="media/UnaImagen.png o media/UnGif.gif" data-author='MiUsuarioDeGithub' alt="Un comentario!">  
```

4. Hay que pasar del `workspace` (la computadora) al `index` para que Git sepa que queres trackear los cambios en un archivo. Esto se hace con `git add`.

```
git add index.html
```

5. Después, desde el `index` hay que cementar los cambios para que el repo de **Git** (No Github!!), commiteandolos. El mensaje tiene que ser descriptivo!!

```
git commit -m 'Agrego una imagen al mural...'
```

6. Para terminar del lado de **Git**, hay que pasar de la maquina **local** al repositorio **online**. O sea, hacer el paso de **Git** a **Github**. Esto se hace pusheando (push como acción inversa a pull). Al repositorio online git lo conoce como `origin`, y a la rama que queremos pushear es a `master`, que es la principal y la que se muestra en el sitio.

```
git push origin master
```

7. Para finalizar, hay que hacer un `pull request`. Esta es una funcionalidad de **Github** (no Git!!) que es decirle al autor original que querés agregar algo a su repositorio. Entonces hay que ir al repositorio original y clickear en el boton `new pull request` y decirle que queremos mergear **desde** mi fork, **hasta** la rama master del repositorio original. Si al autor original le gustan los cambios y los acepta, se hace el merge y pasan todos los commits del fork al repo original. Después de eso ya se puede borrar el fork.
