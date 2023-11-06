import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
import { useParams } from "react-router-dom";

const INIT = {
  id: null,
  code: "",
  name: "",
  date_start: "",
  status: "",
  comments: "",
  priority: "",
  time: "",
};
const STATUS = [
  { label: "En progreso", value: "in_progress", color: "purple-600" },
  { label: "Terminado", value: "finished", color: "teal-600" },
  { label: "Pendiente", value: "pending", color: "cyan-600" },
];
const PRIORITY = [
  { label: "Alta", value: "high", color: "red-500", level: 1 },
  { label: "Media", value: "medium", color: "yellow-500", level: 2 },
  { label: "Baja", value: "low", color: "green-500", level: 3 },
];

const API_URL = "https://robertorequena.mx/api/A003/tasks";

const useConfig = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const title = useMemo(() => (id ? "Editar tarea" : "Crear tarea"), [id]);

  const sendData = useMemo(
    () => ({
      ...data,
      date_start: moment(data.date_start).format("YYYY-MM-DD"),
    }),
    [data]
  );

  useEffect(() => {
    if (id) {
      getDataById();
    }
  }, [id]);

  const navigate = useNavigate();

  const disabled = useMemo(
    () =>
      !data.name ||
      !data.date_start ||
      !data.status ||
      !data.comments ||
      !data.priority
    [data]
  );
  const getData = async () => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => {
        let tpm = res.data;
        tpm = tpm.sort(function (a, b) {
          const priorityObj = {};
          for (const priority of PRIORITY) {
            priorityObj[priority.value] = priority.level;
          }
          console.log(priorityObj);
          return priorityObj[a.priority] - priorityObj[b.priority];
        });

        setCollection(tpm);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getDataById = async () => {
    setLoading(true);
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const storeData = () => {
    setLoading(true);
    axios
      .post(API_URL, sendData)
      .then(() => {
        setData(INIT);
        toast.success("La tarea se ha creado correctamente");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Ocurrio un error al crear la tarea");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateData = () => {
    setLoading(true);
    axios
      .put(`${API_URL}/${id}`, sendData)
      .then(() => {
        toast.success("La tarea se ha actualizado correctamente");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Ocurrio un error al actualizar la tarea");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (data.id) {
      updateData();
    } else {
      storeData();
    }
  };

  return {
    INIT,
    STATUS,
    PRIORITY,
    getData,
    handleSumbit,
    disabled,
    data,
    setData,
    collection,
    setCollection,
    navigate,
    loading,
    title,
  };
};
export default useConfig;
