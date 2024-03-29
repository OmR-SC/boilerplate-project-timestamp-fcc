
# Timestamp Microservice de freeCodeCamp

## Descripción

Este es un proyecto de desafio de freeCodeCamp. El mismo consiste en realizar una aplicación que permite asignar ejercicios a los usuarios y poder ver un listado de todos los ejercicios asignados y poder filtrarlos por fecha o cantidad.

## Tecnologias

- Express
- Node js
- JavaScript
- HTML
- CSS

## Retos

- Se tuvo que repasar la case Date y sus diversas funciones de JavaScript


## Razón

A fin de mejorar mis conocimientos en express y completar el curso *Back End Development and APIs* de freeCodeCamp.

## Instalación

1- Clonar el repositorio

2- Instalar las dependencias del proyecto

3- Iniciar la aplicación

```sh
npm install
npm run start
```
## Como usar la aplicación:

La aplicacion consta de una pagina web.

Esta pagina tiene 2 URLs de ejemplo del funcionmiento de la aplicación:

- Una que retorna información de la fecha suministrada en formato string

- Otra que retorna información de la fecha suministrada en formato unix

Existe un endpoint que está a la escucha de que se le suministre una fecha y apartir de la misma regresar un json con la fecha convertida en DateString y Unix.


### Rutas o Endpoints 

Página principal con las URls: **/ [GET]**

Ruta para que eretorna la fecha actual en formato DateString y Unix: **/api/ [GET]**

Ruta para que está a la escucha de la fecha (Date): **/api/:date [GET]**

> Nota: Las fecha deben ser suministradas en formato yyyy-mm-dd o Unix: 1451001600000.

### Proyecto original

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

## Licencia

MIT License

Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

