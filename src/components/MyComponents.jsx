import React from 'react'

export const MyComponents = () => {

    const name = "Oscar López";
    const repository = "https://github.com/inesmariao/component-practice";

    const student = {
        name: "oscar",
        lastName: "López",
        mobile: "1231313131",
        linedinprofile: "https://www.linkedin.com/in/carlo-caro"
    }

    console.log(student);

  return (
    <div>
        <hr />
        <p> Este es mi primer component</p>
        <h2>Tema de React</h2>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>Comunicación</li>
        </ul>

        <hr />
        <h2>Datod del Docente</h2>
        <p>Nombre: { name }</p>
        <p>Repositorio</p>
        <p>Repositorio: {repository}</p>

        <hr />
        <h2>Datos del estudiante</h2>
        <p>Nombre: { student.name }</p>
        <p>Apellido: { student.lastName }</p>
        <p>Celular:{ student.mobile }</p>
        <p>Perfil del LinkedIn:</p>
        <p>{ student.linedinprofile }</p>
</div>

  )
}

export default MyComponents
