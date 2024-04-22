import React from "react";

function Perfil() {
  return (
    <>
      <header className="w-full  pl-5 p-3 bg-[#a2c2e6] text-black flex items-center justify-between">
        <div className="flex gap-5">
          
          <div>
            <input className="rounded p-2" type="text" placeholder="Buscar" />
          </div>

          <nav>
            <ul className="flex gap-5 flex items-center ">
              <li className="bg-[#ffffff] p-2 rounded">
                <a href="#">Grafica</a>
              </li>
              <li className="bg-[#ffffff] p-2 rounded">
                <a href="#">Alumnos</a>
              </li>
              <li className="bg-[#ffffff] p-2 rounded">
                <a href="#">Docentes</a>
              </li>
              <li className="bg-[#ffffff] p-2 rounded">
                <a href="#">Comunicados</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <ul className="flex gap-5">
              <li className="bg-[#ffffff] p-2 rounded">
                <a href=""> Ver mas</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Perfil;
