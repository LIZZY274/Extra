import React from 'react';
import Materia from '../mocks/Materias.js'

export function Table() {
  return (<>
  <div className="w-full">
      <div className="overflow-auto w-full ">
        <table className='w-full'>
          <thead>
            <tr>
              <th className='border border-gray-300'>Cuatrimestre</th>
              <th className='border border-gray-300'>Materias</th>
            </tr>
          </thead>
          <tbody>
            {Materia.Materias.map((cuatrimestre, index) => (
              <tr key={index}>
                <td className='border font-bold px-2 border-gray-300'>{cuatrimestre.Cuatri}</td>
                <td className='border border-gray-300'>
                  <ul className=" px-3">
                    {cuatrimestre.Materias.map((materia, index) => (
                      <li key={index}>{materia}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
  );
}
