import React, { Component } from "react"; // Importa React y la clase Component para crear un componente de clase.
import "./estilos/App.css"; // Importa los estilos del proyecto.
import empleadosData from "./datos/empleados.json"; // Importa los datos de empleados desde un archivo JSON.
import CmpEmpleados from "./componentes/CmpEmpleados"; //Importa el componente que mostrará la lista de empleados.

class App extends Component {

constructor(props) {
  super(props); // Llama al constructor de la clase `Component`.
  this.state = {
    empleados: empleadosData, // Carga la lista de empleados desde el JSON.
    filtro: "todos", // Estado inicial del filtro: muestra todos losempleados.
  };
}
// Método para filtrar empleados según el estado (activo/inactivo)
cambiarEstadoEmpleado = (id) => {
  this.setState((prevState) => ({
    empleados: prevState.empleados.map((empleado) =>
        empleado.id === id ? { ...empleado, activo: !empleado.activo } : empleado
    ),
  }));
};

cambiarFiltro = (event) => {
  this.setState({ filtro: event.target.value });
};

render() {
// Filtrar empleados según la opción seleccionada
  const empleadosFiltrados = this.state.empleados.filter((empleado) => {
    if (this.state.filtro === "activos") return empleado.activo;
    if (this.state.filtro === "inactivos") return !empleado.activo;
    return true; // "todos" muestra todos
  });

  return (
      <div className="container">
        <h1>Gestor de Empleados</h1>
        {/* Selector para filtrar empleados */}
        <label>Filtrar por estado: </label>
        <select onChange={this.cambiarFiltro} value={this.state.filtro}>
          <option value="todos">Todos</option>
          <option value="activos">Activos</option>
          <option value="inactivos">Inactivos</option>
        </select>
        <CmpEmpleados empleados={empleadosFiltrados}
                      cambiarEstado={this.cambiarEstadoEmpleado} />
      </div>
  );
}
}
export default App;

