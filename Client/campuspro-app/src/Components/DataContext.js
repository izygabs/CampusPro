import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useDataContext = useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async (id) => {
    let url = `/api/itemsByMerch/${id}`;

    // console.log("url :", url);
    try {
      const req = await fetch(url);
      const res = await req.json();
      const info = await res.Items;
      setData(info);
      return info;
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleter = (id) => {
    console.log(data);
    console.log("item id", id);
    const url = `/api/item/${id}`;
    const option = { method: "DELETE" };
    fetch(url, option).then((res) => alert(res.Message));

    fetcher(`/api/itemsByMerch/${id}`);
  };

  return (
    <DataContext.Provider value={{ data, deleter }}>
      {children}
    </DataContext.Provider>
  );
};

// export default DataProvider;
