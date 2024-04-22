import React from 'react';

function Cuadro({ alumnos }) {
  return (
    <div className="p-0 ">
      <table className="w-full h-auto border-2 ">
        <thead>
          <tr>
            <th className="px-4 py-2">Num</th>
            <th className="px-4 py-2">Apellido</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Matricula</th>
            <th className="px-4 py-2">Notas</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={index}>
              <td className="border px-2 py-2">{index + 1}</td>
              <td className="border px-2 py-2">{alumno.apellido}</td>
              <td className="border px-2 py-2">{alumno.nombre}</td>
              <td className="border px-2 py-2">{alumno.matricula}</td>
              <td className="border px-2 py-2">{alumno.notas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cuadro;
