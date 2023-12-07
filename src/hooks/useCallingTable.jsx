import axios from "axios";
import { useState } from "react";
import { convertObjectToUri } from "../utils";
const useCallingTable = (options) => {
  const { url } = options;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (tpmFilter) => {
    setLoading(true);
    axios
      .get(url + convertObjectToUri(tpmFilter))
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const recharge = async (filter) => {
    getData(filter);
  };

  return { items, loading, recharge };
};
export default useCallingTable;
