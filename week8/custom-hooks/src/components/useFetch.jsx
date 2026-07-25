import { useEffect, useState } from "react";

export default function useFetch(url) {
  console.log(url);
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false)

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  };
  useEffect(() => {
    // setLoading(true);
    getData();
    // setLoading(false);
  }, [url]);

  return [data, loading];
}


// usage of useFetch

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <h1>Hello World!</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
