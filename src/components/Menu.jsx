import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const items = [
    {
      label: "Dashboard",
      icon: "pi pi-chart-bar",
      command: () => {navigate('/') }
    },

    {
      label: "Tareas",
      icon: "pi pi- pi-list",
      command: () => {navigate('/tasks') }
    },
  ];


  return <Menubar model={items}   />

}
