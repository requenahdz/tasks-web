import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
const TaskNew = () => {
  return (
    <div>
      <h1 className="text-3xl">Nueva tarea</h1>

      <div className="w-full max-w-screen-sm mx-auto">
        <div className="w-full max-w-screen-sm mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <InputText
                id="nombre"
                className="mt-1 p-inputtext"
                placeholder="Escribe tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="apellido"
                className="block text-sm font-medium text-gray-700"
              >
                Apellido
              </label>
              <InputText
                id="apellido"
                className="mt-1 p-inputtext"
                placeholder="Escribe tu apellido"
              />
            </div>
            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <InputText
                id="correo"
                className="mt-1 p-inputtext"
                placeholder="Escribe tu correo electrónico"
              />
            </div>
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700"
              >
                Teléfono
              </label>
              <InputText
                id="telefono"
                className="mt-1 p-inputtext"
                placeholder="Escribe tu número de teléfono"
              />
            </div>
          </div>
          <div className="mt-4">
            <Button
              label="Enviar"
         
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskNew;
