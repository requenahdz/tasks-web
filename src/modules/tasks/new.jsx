import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const INIT = {
  name: "",
  date_start: "",
  status: "",
  comments: "",
  priority: "",
  time: "",
};
const STATUS = [
  { label: "En progreso", value: "in_progress" },
  { label: "Terminado", value: "finished" },
  { label: "Pendiente", value: "pending" },
];
const PRIORITY = [
  { label: "Alta", value: "high" },
  { label: "Media", value: "medium" },
  { label: "Baja", value: "low" },
];

const TaskNew = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(INIT);
  const disabled = useMemo(
    () =>
      !data.name ||
      !data.date_start ||
      !data.status ||
      !data.comments ||
      !data.priority ||
      !data.time,
    [data]
  );

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://robertorequena.mx/api/A003/tasks", data)
      .then((res) => {
        setData(INIT);
        toast.success("La tarea se ha creado correctamente");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Ocurrio un error al crear la tarea");
      });
  };

  return (
    <div className="mx-auto  max-w-xl ">
      <div className="text-3xl font-semibold mb-5 ">Nueva tarea</div>
      <form className="p-10 bg-gray-50		">
        <div className="mb-3">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Nombre
          </label>
          <InputText
            placeholder="Escribe el nombre"
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="p-inputtext w-full"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="date_start"
          >
            Fecha de inicio
          </label>
          <InputText
            value={data.date_start}
            onChange={(e) => setData({ ...data, date_start: e.target.value })}
            name="date_start"
            type="date"
            className="p-inputtext w-full"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="nombre"
          >
            Estado
          </label>
          <Dropdown
            options={STATUS}
            value={data.status}
            onChange={(e) => setData({ ...data, status: e.target.value })}
            className="w-full"
            placeholder="Selecciona una opción"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="comments"
          >
            Comentario
          </label>
          <InputText
            value={data.comments}
            onChange={(e) => setData({ ...data, comments: e.target.value })}
            placeholder="Escribe el comentario"
            className="p-inputtext w-full"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="nombre"
          >
            Prioridad
          </label>
          <Dropdown
            value={data.priority}
            options={PRIORITY}
            onChange={(e) => setData({ ...data, priority: e.target.value })}
            className="w-full"
            placeholder="Selecciona una opción"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="time"
          >
            Tiempo
          </label>
          <InputText
            onChange={(e) => setData({ ...data, time: e.target.value })}
            name="time"
            type="time"
            value={data.time}
            className="p-inputtext w-full"
          />
        </div>

        <div className="flex " style={{ justifyContent: "space-between" }}>
          <Button
            label="Regresar"
            severity="secondary"
            icon="pi pi-arrow-left"
            onClick={() => navigate("/tasks")}
          />
          <Button
            label="Guardar"
            disabled={disabled}
            icon="pi pi-save"
            onClick={handleSumbit}
          />
        </div>
      </form>
    </div>
  );
};

export default TaskNew;
