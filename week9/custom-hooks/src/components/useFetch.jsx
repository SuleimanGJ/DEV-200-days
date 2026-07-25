import { useEffect, useState } from "react";

export default function useFetch(url) {
  console.log(url);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {setData(result); setLoading(false);});
  };
  useEffect(() => {
    getData();
  }, [url]);

//   return {data, loading}
  return [data, loading];
}


// usage of useFetch

//   const [data, loading] = useFetch("https://jsonplaceholder.typicode.com/todos");

// if (loading) return <div>Loading...</div>;
//   return (
//     <>
//       <h1>Hello World!</h1>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
