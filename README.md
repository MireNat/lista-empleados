# Gestor de Empleados

Una aplicación web desarrollada con React que permite gestionar y filtrar empleados según su estado (activo/inactivo).

## Características

- Visualización de empleados en tarjetas
- Filtrado de empleados por estado (todos, activos, inactivos)
- Cambio de estado de cada empleado mediante un botón
- Interfaz responsiva y amigable

## Tecnologías utilizadas

- React.js
- JavaScript (ES6+)
- CSS3

## Estructura del proyecto

```
gestor-empleados/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── componentes/
│   │   ├── CmpEmpleado.js    # Componente para mostrar un empleado individual
│   │   └── CmpEmpleados.js   # Componente que renderiza la lista de empleados
│   ├── datos/
│   │   └── empleados.json    # Datos de los empleados en formato JSON
│   ├── estilos/
│   │   └── App.css           # Estilos de la aplicación
│   ├── App.js                # Componente principal de la aplicación
│   └── index.js              # Punto de entrada de React
├── package.json
└── README.md
```

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/gestor-empleados.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd gestor-empleados
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Inicia la aplicación:
   ```
   npm start
   ```

5. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## Uso

- Para **ver todos los empleados**: Selecciona "Todos" en el selector de filtro
- Para **ver solo empleados activos**: Selecciona "Activos" en el selector de filtro
- Para **ver solo empleados inactivos**: Selecciona "Inactivos" en el selector de filtro
- Para **cambiar el estado de un empleado**: Haz clic en el botón "Cambiar Estado" en la tarjeta del empleado

## Estructura de datos

Cada empleado en el sistema tiene la siguiente estructura:

```json
{
  "id": 1,
  "apellido": "Perez",
  "nombre": "Juan",
  "cargo": "Administrador",
  "estado": "Inactivo",
  "activo": false
}
```

## Personalización

Puedes personalizar fácilmente esta aplicación:

- Añade más empleados al archivo `empleados.json`
- Modifica los estilos en `App.css`
- Añade nuevos campos a los registros de empleados (como departamento, fecha de contratación, etc.)

## Autor

Mireya Huanca https://github.com/MireNat