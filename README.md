# contribution-mural

https://fdelmazo.github.io/contribution-mural/

## ¿Cómo contribuir?

Primero hay que asegurarse tener Git instalado y configurado y crearse una cuenta de Github.

```
sudo apt install git
git config --global user.name "Mi nombre"
git config --global user.email "Mi mail"

// Después, hacerse una cuenta en Github, no tiene porque ser el mismo nombre/mail.
```

1. Para poder contribuir a un proyecto en Github, primero hay que hacer un fork de este, es decir un clon exacto al que tengamos acceso. Esto se hace tocando en el botón `fork` arriba a la derecha del repo, en Github.

2. Ahora, ya en el repo forkeado, hay que clonar el repositorio. Esto se hace con el comando `git clone` y lo que hace es traer todo el repo que esta en **Github** a la máquina local, con **Git**. El URL se saca del botón verde 'Clone or download'.

```
git clone https://github.com/MiUsuarioDeGithub/contribution-mural.git
```

3. Si lo clonaste antes, no te olvides de actualizar para estar al día. Siempre antes de empezar a trabajar hay que hacer un `git pull`

```
git pull
```

4.  Ahora es cuando se hacen los cambios. Metete en los archivos y agrega lo que quieras. Lo que quieras es lo que quieras! Se pueden agregar más funciones en `index.js`, distintos colores en `style.css`, algún gif raro en la carpeta `media` o cualquier otra cosa. Si querés poner una imagen o gif y que se vea en el mural podes hacerlo agregando un elemento a `content.js`. Respetá el orden de llegada y agregalo al final!

```
{
    "src": "media/UnaImagen.png",
    "data_author": "CuentaDeGithub",
    "alt": "Una quote!"
}
```

5. Ahora ya se hicieron todos los cambios y empezamos a trabajar con Git. Primero hay que pasar del `workspace` (la computadora) al `index` para que Git sepa que querés trackear los cambios en un archivo. Esto se hace con `git add`.

```
git add content.js
git add media/UnaImagen.png
```

6. Después, desde el `index` hay que comentar los cambios para que el repo de **Git** (No Github!!) sepa que los cambios ya están hechos (en vez de solamente trackearlos), commiteándolos. El mensaje tiene que ser descriptivo!!

```
git commit -m 'Agrego una imagen al mural...'
```

7. Para terminar del lado de **Git**, hay que pasar de la máquina **local** al repositorio **online**. O sea, hacer el paso de **Git** a **Github**. Esto se hace pusheando (push como acción inversa a pull). Al repositorio online git lo conoce como `origin`, y a la rama que queremos pushear es a `master`, que es la principal y la que se muestra en el sitio.

```
git push origin master
```

8. Para finalizar, hay que hacer un `pull request`. Esta es una funcionalidad de **Github** (no Git!!) que es decirle al autor original que querés agregar algo a su repositorio. Entonces hay que ir al fork hecho y clickear en el botón `new pull request` y decirle que queremos mergear **desde** un fork, **hasta** la rama master del repositorio original. Si al autor original le gustan los cambios y los acepta, se hace el merge y pasan todos los commits del fork al repo original. Después de eso ya se puede borrar el fork y los cambios deberían reflejarse en el sitio web.
