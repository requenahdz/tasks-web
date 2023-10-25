import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
const data = [
  {
    code: "001",
    name: "Producto A",
    date_start: "2023-10-24",
    status: "En progreso",
    comments: "Comentario 1",
    priority: "Alta",
    time: "3 horas",
  },
  {
    code: "002",
    name: "Producto B",
    date_start: "2023-10-25",
    status: "Terminado",
    comments: "Comentario 2",
    priority: "Baja",
    time: "1 hora",
  },
  {
    code: "003",
    name: "Producto C",
    date_start: "2023-10-26",
    status: "Pendiente",
    comments: "Comentario 3",
    priority: "Media",
    time: "2 horas",
  },
  {
    code: "004",
    name: "Producto D",
    date_start: "2023-10-27",
    status: "En progreso",
    comments: "Comentario 4",
    priority: "Alta",
    time: "4 horas",
  },
  {
    code: "005",
    name: "Producto E",
    date_start: "2023-10-28",
    status: "Terminado",
    comments: "Comentario 5",
    priority: "Baja",
    time: "1.5 horas",
  },
  {
    code: "006",
    name: "Producto F",
    date_start: "2023-10-29",
    status: "Pendiente",
    comments: "Comentario 6",
    priority: "Media",
    time: "2.5 horas",
  },
  {
    code: "007",
    name: "Producto G",
    date_start: "2023-10-30",
    status: "En progreso",
    comments: "Comentario 7",
    priority: "Alta",
    time: "3.5 horas",
  },
  {
    code: "008",
    name: "Producto H",
    date_start: "2023-10-31",
    status: "Terminado",
    comments: "Comentario 8",
    priority: "Baja",
    time: "0.5 horas",
  },
  {
    code: "009",
    name: "Producto I",
    date_start: "2023-11-01",
    status: "Pendiente",
    comments: "Comentario 9",
    priority: "Media",
    time: "2 horas",
  },
  {
    code: "010",
    name: "Producto J",
    date_start: "2023-11-02",
    status: "En progreso",
    comments: "Comentario 10",
    priority: "Alta",
    time: "2 horas",
  },
];

console.log(data);

export default function Tasks() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-3xl">Tareas</h1>

      <div className="flex w-full my-5" style={{ justifyContent: "end" }}>
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
        <Column field="code" header="ID"></Column>
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
