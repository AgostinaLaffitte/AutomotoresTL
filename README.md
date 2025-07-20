Este proyecto es una aplicación web desarrollada con Angular para la gestión y visualización de un listado de vehículos, incluyendo detalles de cada uno y una sección de contacto.

## Temática Elegida
La temática elegida para este proyecto es un **concesionario de automóviles** con un enfoque en la visualización de su inventario y la información de contacto. Permite a los usuarios navegar por una lista de vehículos y ver sus detalles individuales.

## Datos del Estudiante

* **Nombre y Apellido:** [Agostina laffitte]
* **DNI:** [47089344]
* **Email:** [agoslaffitte17@gmail.com]
* **Sede:** Tandil

## Requisitos Mínimos Cumplidos

Este proyecto cumple con los siguientes requisitos mínimos:

* **Ruteo:** Implementación de rutas para la lista de vehículos (`/vehicles`), detalles de vehículos (`/vehicles/:id`) y contacto (`/about`).
* **Componentes:** La página principal (`App`) carga dinámicamente otros componentes (`AutomotiveList`, `VehicleDetail`, `Contact`) según la ruta.
* **Interfaces:** Utilización de la interfaz `Vehicle` para tipar los datos de los automóviles.
* **Directivas de Control de Flujo:** Uso de `*ngFor` para iterar sobre listas (vehículos, imágenes) y `*ngIf` para renderizar condicionalmente elementos (detalles del vehículo).
* **Comunicación entre Componentes:** Implementación de un servicio compartido (`VehicleDataService`) para la gestión y provisión de datos de vehículos a `AutomotiveList` y `VehicleDetail`.

