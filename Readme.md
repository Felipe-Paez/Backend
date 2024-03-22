# Nombre del Proyecto

Descripción breve o resumen del proyecto.

## Instalación Docker

docker build -t backend-prov .

# Run Docker 

docker run -p 4000:4000 backend-prov


# uso docker-compose

docker-compose build
docker-compose up 


# ANOTACIONES 

- se evidencia la descarga del archivo node_modules dentro del repositorio :(  esto impide la correcta ejecucion de docker 

- no posee ruta /api/healt