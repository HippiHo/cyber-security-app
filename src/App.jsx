import { useFetch } from "./hooks/useFetch";
import List from "./components/List";
import Filter from "./components/Filter";
import { ShieldCheckIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function App() {
  const [filteredData, setFilteredData] = useState([]);

  const { data, isPending, error } = useFetch(
    "https://front.heyering.com/detections?page=1&limit=40",
    {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    }
  );

  const getFilteredData = (newFilter) => {
    setFilteredData(data.filter((item) => item[newFilter[0]] === newFilter[1]));
  };

  return (
    <div className="App flex flex-col m-8">
      <h1 className="font-bold mb-12 text-3xl" role="heading">
        Detections
      </h1>
      {isPending && <div className="text-gray-500">Loading....</div>}
      {error && <div className="text-red-600">{error}</div>}
      {data && (
        <>
          <Filter getFilteredData={getFilteredData} />
          <div className="flex gap-2 mb-4 self-end">
            <EyeIcon className="size-6 text-blue-800" />{" "}
            <span>acknowledged</span>
            <ShieldCheckIcon className="size-6 text-green-500" />{" "}
            <span>resolved</span>
          </div>
          <List data={filteredData.length ? filteredData : data} />
        </>
      )}
    </div>
  );
}

export default App;
