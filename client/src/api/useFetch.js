import { useState, useCallback } from "react";

const useFetch = ({ url, payload }) => {
  const [res, setRes] = useState({ data: null, error: null, isLoading: false });
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ ...payload }),
  };

  const callAPI = useCallback(async () => {
    try {
      setRes((prevState) => ({ ...prevState, isLoading: true }));
      const res = await fetch(url, options);
      setRes({ data: await res.json(), error: null, isLoading: false });
    } catch (error) {
      setRes({ data: null, error, isLoading: false });
    }
  }, [url, payload]);
  return [res, callAPI];
};

export default useFetch;
