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
    {
      label: "Categorias",
      icon: "pi pi- pi-check-square",
      command: () => {navigate('/categories') }
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );

  return <Menubar  model={items} start={start} />;
}
