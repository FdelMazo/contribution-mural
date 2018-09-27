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

1. Ahora hay que clonar el repositorio. Esto se hace con el comando `git clone` y lo que hace es traer todo el repo que esta en **Github** a la maquina local, con **Git**. El URL se saca del boton verde 'Clone or download'.

```
git clone https://github.com/FdelMazo/contribution-mural.git
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

6. Finalmente, hay que pasar de la maquina **local** al repositorio **online**. O sea, hacer el paso de **Git** a **Github**. Esto se hace pusheando (push como acción inversa a pull). Al repositorio online git lo conoce como `origin`, y a la rama que queremos pushear es a `master`, que es la principal y la que se muestra en el sitio.

```
git push origin master
```