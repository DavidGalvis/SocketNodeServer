# SocketNodeServer
Este demo ha sido creado para establecer un hilo de comunicación por sockets entre este servidor desarrollado en nodeJs y un[ cliente socket.io android](https://github.com/DavidGalvis/SocketAndroidClient).

Las funcionalidades incluidas son:

* Establecer comunicación con el cliente.
* Enviar mensaje estático de prueba al cliente con la siguiente estructura:

```
{
	"id":1,
	"documents":[
		{"id":2,"name":"Docuento​​ uno","precio":2500},
		{"id":3,"name":"Docuento​​ dos","precio":7500}],
	"subsidiary":{
		"id":1,
		"name":"Nombre",
		"address":"Las​​ verbenas​​ 8961"
	}
}
```
### Prerequisitos

* [Node v8.6.0](https://nodejs.org/en/blog/release/v8.6.0/)

### Instalación

* Instalar la versión conrrespondiente de nodeJS.
* Ejecutar el siguiente comando:

```
npm install
```

### Ejecución del proyecto

Se debe arrancar el proyecto con el siguiente comando:

```
node index.js
```
* Si deseas ejecutar el servidor en un puerto diferente:

```
PORT=port_number node index.js
```

Donde **port_number** es el número de puerto en el que deseas ejecutar el servidor.

### Pruebas de comunicación

Se debe generar una petición POST a la dirección: server_ip:port_number + "/sendOrder"

Donde **port_number** es la dirección ip actual del servidor nodeJs y **port_number** es el número de puerto en el que ejecutaste el servidor.

La petición debe tener un **Body** con la siguiente estructura:
```
{
	"id":1,
	"documents":[
		{"id":2,"name":"Docuento​​ uno","precio":2500},
		{"id":3,"name":"Docuento​​ dos","precio":7500}],
	"subsidiary":{
		"id":1,
		"name":"Nombre",
		"address":"Las​​ verbenas​​ 8961"
	}
}
```

## Licencia

Este proyecto está creado bajo licencia MIT - revisa el archivo [LICENSE.md](LICENSE.md) para más detalles.


