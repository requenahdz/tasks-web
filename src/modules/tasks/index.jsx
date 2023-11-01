import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useEffect } from "react";
import useConfig from "./useConfig";
import { ProgressSpinner } from "primereact/progressspinner";
import { findInObject } from "../../utils";
export default function Tasks() {
  const { getData, collection, navigate, loading, STATUS, PRIORITY } =
    useConfig();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="text-3xl font-semibold mb-3 ">Tareas</div>

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

      {loading ? (
        <div className="card flex justify-content-center  align-items-center min-h-[300px]">
          <ProgressSpinner />
        </div>
      ) : (
        <DataTable value={collection} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="#"></Column>
          <Column field="code" header="Cliente"></Column>

          <Column field="name" header="Nombre"></Column>

          <Column field="date_start" header="Fecha inicio"></Column>
          <Column
            field="status"
            header="Estatus"
            body={(item) => {
              const find = findInObject(item.status, STATUS);
              return (
                <div
                  className={`text-white  text-center	rounded-xl	 p-1 font-semibold bg-${find.color}`}
                >
                  {find.label}
                </div>
              );
            }}
          ></Column>
          <Column field="comments" header="Comentarios"></Column>
          <Column
            field="priority"
            header="Proridad"
            body={(item) => {
              const find = findInObject(item.priority, PRIORITY);
              return (
                <div
                  className={`text-white text-center rounded-xl	 p-1 font-semibold  bg-${find.color}`}
                >
                  {find.label}
                </div>
              );
            }}
          ></Column>
          <Column field="time" header="Tiempo"></Column>
          <Column
            header="Acciones"
            body={(item) => {
              return (
                <Button
                  rounded
                  outlined
                  onClick={()=>navigate(`/tasks/${item.id}`)}
                  icon="pi pi-arrow-right"
                />
              );
            }}
          ></Column>
        </DataTable>
      )}
    </div>
  );
}
