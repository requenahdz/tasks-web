import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
const TaskNew = () => {
  return (
    <div>
      <h1 className="text-3xl">Nueva tarea</h1>

      <div className="flex-col">
        <label htmlFor="name" >Username</label>
        <InputText name="name" placeholder="Nombre" />
      </div>


    </div>
  );
};

export default TaskNew;
