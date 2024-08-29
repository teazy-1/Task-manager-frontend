import { useEffect, useState } from "react";

//custom hook to fetch data from a provided url inside a container called basUrUrl in app.jsx
export const useFetch = (url) => {
  const [data, setData] = useState(null); // state to store fetched data, initial null

  useEffect(() => {
    const getData = async () => {
      //async function to fecth data
      const response = await fetch(url); // fetch data from the provided url
      const jData = await response.json(); // parse reponse json data and keep inside the jdata

      setData(jData.tasks ? jData.tasks : jData.task); // update the data state that was formally null with setData .....updating the data with fetched data
    };

    setTimeout(async () => {
      await getData(); //invoking the getData function
    }, 3000);
  }, []);

  return { data }; //return
};
