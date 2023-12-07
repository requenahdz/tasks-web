export const INIT = {
  id: null,
  code: "",
  name: "",
  date_start: "",
  status: "",
  comments: "",
  priority: "",
  time: "",
  active: 1,
};

export const INIT_FILTERS = {
  active: true,
  name: "",
  customer: "",
};
export const STATUS = [
  { label: "En progreso", value: "in_progress", color: "purple-600" },
  { label: "Terminado", value: "finished", color: "teal-600" },
  { label: "Pendiente", value: "pending", color: "cyan-600" },
];
export const PRIORITY = [
  { label: "Alta", value: "high", color: "red-500", level: 1 },
  { label: "Media", value: "medium", color: "yellow-500", level: 2 },
  { label: "Baja", value: "low", color: "green-500", level: 3 },
];
