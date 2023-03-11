# Instalar docker y docker compose
    --LINUX--
    sudo apt-get update 
    sudo snap install docker            
    sudo apt  install docker-compose o sudo apt-get install docker-compose-plugin , si el  anterior no funciona

    --WINDOWS
    https://docs.docker.com/get-docker/

# abrir terminal en el proyecto y tirar lo siguiente
    docker build -t node-docker .
    docker-compose up -d
    ## utilizar sudo si hay problemas de autentificacion

    si te sale algo como esto, termina los procesos de esos puestos (5432 es postgres por defecto  y 8080 es para al pgadmin por el navegador)
            listen tcp4 0.0.0.0:5432: bind: address already in use
            listen tcp4 0.0.0.0:8080: bind: address already in use

# abrir el navegador y pegar la siguiente url
   
    http://localhost:13000/setup para inicializar la base de datos
    http://localhost:13000 utilizar POSTMAN (GET, POST)

# loguearse al pgadmin4 con el usuario y contraseña puesto en el archivo docker-compose.yml
    http://localhost:8080 para pgadmin en navegador
    EMAIL: admin@admin.com
    PASSWORD: admin
    
# Para usar pgadmin tenes que conectarte al server con las variables de entorno puesta en el archivo docker-compose.yml, el nombre del servidor puede ser cualquiera
    Hostname/addres: postgres
    Port: 5432
    Username: root
    Password: root
    
