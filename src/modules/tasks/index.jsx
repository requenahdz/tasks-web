import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { ProgressSpinner } from "primereact/progressspinner";
import { PRIORITY, STATUS } from "../../constants/Tasks";
import { findInObject } from "../../utils";
import Status from "../../components/Status";
import moment from "moment";
import useCallingTable from "../../hooks/useCallingTable";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSearchFilter from "../../hooks/useSearchFilter";
import { INIT_FILTERS } from "../../constants/Tasks";

export default function Tasks() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState(INIT_FILTERS);

  const { items, loading, recharge } = useCallingTable({
    url: "https://robertorequena.mx/api/A003/tasks",
  });
  useSearchFilter(filters, () => recharge(filters));

  return (
    <div>
      <div className="text-3xl font-semibold mb-3 ">Tareas</div>

      <div className="flex  justify-between w-full mb-3">
        <div className="flex items-center">
          <div className="filter m-3">
            <InputText
              placeholder="Busca por cliente"
              name="customer"
              value={filters.customer}
              onChange={(e) =>
                setFilters({ ...filters, customer: e.target.value })
              }
              className="w-full"
            />
          </div>

          <div className="filter m-3">
            <InputText
              placeholder="Busca por nombre"
              name="name"
              value={filters.name}
              className="w-full"
              onChange={(e) =>
                setFilters({ ...filters, name: e.target.value })
              }
            />
          </div>

          <div className="filter">
            <label className="mr-1" htmlFor="active">
              Activo
            </label>
            <Checkbox
              inputId="active"
              checked={!!filters.active}
              onChange={(e) => setFilters({ ...filters, active: e.checked })}
            />
          </div>
        </div>
        <div>
          <Button
            className="ml-3"
            label="Exportar"
            icon="pi pi-file-excel"
            severity="success"
            onClick={() => {
              alert("Proximamente...");
            }}
          />
          <Button
            className="ml-3"
            onClick={() => navigate("/tasks/new")}
            label="Nuevo"
            icon="pi pi-plus"
          />
        </div>
      </div>

      {loading ? (
        <div className="card flex justify-content-center  align-items-center min-h-[300px]">
          <ProgressSpinner />
        </div>
      ) : (
        <DataTable value={items} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="#"></Column>
          <Column field="code" header="Cliente"></Column>

          <Column
            field="name"
            header="Nombre"
            style={{ maxWidth: "150px" }}
          ></Column>

          <Column
            field="date_start"
            header="Fecha inicio"
            style={{ minWidth: "130px" }}
            body={(item) => moment(item.date_start).format("DD/MM/YYYY")}
          ></Column>
          <Column
            field="status"
            header="Estatus"
            style={{ minWidth: "130px" }}
            body={(item) => {
              const find = findInObject(item.status, STATUS);
              return <Status label={find.label} color={find.color} />;
            }}
          ></Column>
          <Column
            field="comments"
            header="Comentarios"
            style={{ maxWidth: "600px" }}
          ></Column>
          <Column
            field="priority"
            header="Proridad"
            body={(item) => {
              const find = findInObject(item.priority, PRIORITY);
              return <Status label={find.label} color={find.color} />;
            }}
          ></Column>
          <Column
            field="time"
            header="Tiempo"
            body={(item) => {
              return (
                <>{moment().diff(moment(item.created_at), "hours") + " hrs"}</>
              );
            }}
          ></Column>
          <Column
            header="Acciones"
            body={(item) => {
              return (
                <Button
                  rounded
                  outlined
                  onClick={() => navigate(`/tasks/${item.id}`)}
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
