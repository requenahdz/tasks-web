import { Menubar } from "primereact/menubar";
export default function Menu() {
  const items = [
    {
      label: "Dashboard",
      icon: "pi pi-chart-bar",
    },

    {
      label: "Tareas",
      icon: "pi pi- pi-list",
    },
    {
        label: "Categorias",
        icon: "pi pi- pi-check-square",
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

  return <Menubar model={items} start={start} />;
}
