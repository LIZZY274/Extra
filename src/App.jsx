import React from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import datos from "./mocks/datos.json";
import data from "./mocks/data.json";
import { Table } from "./components/Table";
import Cuadro from "./components/Cuadro";
import alumnos from './mocks/dataAlumnos.json'
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <main className="p-5 w-full  flex flex-col gap-5">
        <div>
          <section className="grid  grid-cols-12 w-full gap-7">
            <div className="w-full relative rounded-lg col-span-4 bg-white shadow-lg p-2 flex justify-center items-center">
              <div className="w-full h-72 lg:h-120">
                <BarChart datos={datos} />
              </div>
            </div>

            <div className="w-full  rounded-lg col-span-8 bg-white shadow-lg p-2">
              <div className="w-full md:h-60 lg:h-120">
                <LineChart datos={data} />
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="grid grid-cols-12 w-full gap-7">
            <div className="w-full  rounded-lg col-span-8 bg-white shadow-lg p-2">
              <div className="w-full h-72 lg:h-120 overflow-y-auto">
                <div className="h-auto">
                  <Table />
                </div>
              </div>
            </div>
            <div className="w-full  rounded-lg col-span-4 bg-white shadow-lg p-2">
              <div className="w-full md:h-60 overflow-y-scroll">
                <div>
                  <Cuadro alumnos={alumnos} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
