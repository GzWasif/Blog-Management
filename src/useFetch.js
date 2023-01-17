import { useEffect, useState } from "react";

/* eslint-disable no-unused-vars */
const useFetch = (url) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  const [isPendeing, setisPending] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data");
            // eslint-disable-next-line no-unreachable
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setData(data);
          setisPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setisPending(false);
            setError(err.message);
          }
        });

      return () => {
        abortCont.abort();
      };
    }, 1000);
  }, [url]);

  return { data, isPendeing, error };
};

export default useFetch;
