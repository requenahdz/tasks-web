import DashboardContainer from "../modules/dashboard";
import TaskContainer from "../modules/tasks";
import TaskNewContainer from "../modules/tasks/new";

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
    element: <TaskNewContainer />,
  },
];
export default Routers;
