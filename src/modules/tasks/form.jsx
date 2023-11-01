import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import useConfig from "./useConfig";

const TaskForm = () => {
  const {
    data,
    setData,
    STATUS,
    PRIORITY,
    navigate,
    disabled,
    handleSumbit,
    loading,
    title
  } = useConfig();

  return (
    <div className="mx-auto  max-w-xl ">
      <div className="text-3xl font-semibold mb-3 ">{title}</div>
      <form className="p-10 bg-gray-50">
        <div className="mb-3">
          <label className="block  font-medium text-gray-800" htmlFor="name">
            Cliente
          </label>
          <InputText
            placeholder="Escribe el cliente"
            name="code"
            value={data.code}
            onChange={(e) => setData({ ...data, code: e.target.value })}
            className=" w-full"
          />
        </div>

        <div className="mb-3">
          <label className="block  font-medium text-gray-800" htmlFor="name">
            Nombre
          </label>
          <InputText
            placeholder="Escribe el nombre"
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className=" w-full"
          />
        </div>

        <div className="mb-4">
          <label
            className="block  font-medium text-gray-800"
            htmlFor="date_start"
          >
            Fecha de inicio
          </label>

          <Calendar
            value={data.date_start}
            onChange={(e) => setData({ ...data, date_start: e.target.value })}
            name="date_start"
            className="w-full"
            placeholder="Selecciona la fecha de inicio"
            dateFormat="dd/mm/yy"
          ></Calendar>
        </div>

        <div className="mb-4">
          <label className="block  font-medium text-gray-800" htmlFor="nombre">
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
            className="block  font-medium text-gray-800"
            htmlFor="comments"
          >
            Comentario
          </label>
          <InputText
            value={data.comments}
            onChange={(e) => setData({ ...data, comments: e.target.value })}
            placeholder="Escribe el comentario"
            className=" w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block  font-medium text-gray-800" htmlFor="nombre">
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
          <label className="block  font-medium text-gray-800" htmlFor="time">
            Tiempo
          </label>

          <InputText
            onChange={(e) => setData({ ...data, time: e.target.value })}
            name="time"
            type="time"
            value={data.time}
            className="w-full"
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
            loading={loading}
            icon="pi pi-save"
            onClick={handleSumbit}
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
