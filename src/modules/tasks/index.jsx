import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

export default function Tasks() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get("http://robertorequena.mx/api/A003/tasks", data)
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((error) => {
        console.error(error);
        toast.error('Ocurrio un error al crear la tarea')
      });
  };

  return (
    <div>
      <div className="text-3xl font-semibold mb-5 ">Tareas</div>

      <div className="flex w-full mb-3" style={{ justifyContent: "end" }}>
        <Button
          className="ml-3"
          label="Exportar"
          icon="pi pi-file-excel"
          severity="success"
        />
        <Button
          className="ml-3"
          onClick={() => navigate("/tasks/new")}
          label="Nuevo"
          icon="pi pi-plus"
        />
      </div>

      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="#"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="date_start" header="Fecha inicio"></Column>
        <Column field="status" header="Estatus"></Column>
        <Column field="comments" header="Comentarios"></Column>
        <Column field="priority" header="Proridad"></Column>
        <Column field="time" header="Tiempo"></Column>
      </DataTable>
    </div>
  );
}
