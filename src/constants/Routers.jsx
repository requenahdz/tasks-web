import DashboardContainer from "../modules/dashboard";
import TaskContainer from "../modules/tasks";
import TaskFormContainer from "../modules/tasks/form";

const Routers = [
  {
    key: "dashboard",
    name: "Dashboard",
    path: "/",
    parent: "dashboard",
    element: <DashboardContainer />,
  },
  //access
  {
    key: "access",
    name: "Nueva tarea",
    path: "/tasks",
    element: <TaskContainer />,
  },
  {
    key: "access",
    name: "Tareas",
    path: "/tasks/new",
    element: <TaskFormContainer />,
  },
  {
    key: "access",
    name: "Tareas",
    path: "/tasks/:id",
    element: <TaskFormContainer />,
  },
];
export default Routers;
