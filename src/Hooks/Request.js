import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Request(url) {
  const [req, setReq] = useState({
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    setReq({
      loading: true,
      error: false,
      data: null,
    });
    axios
      .get(url)
      .then((response) => {
        setReq({
          loading: false,
          error: false,
          data: response.data,
        });
      })
      .catch(() => {
        setReq({
          loading: false,
          error: true,
          data: null,
        });
      });
  }, [url]);
  return req;
}
