import { useFetch } from "./hooks/useFetch";
import List from "./components/List";
import { ShieldCheckIcon, EyeIcon } from "@heroicons/react/24/solid";

function App() {
  const { data, isPending, error } = useFetch(
    "https://front.heyering.com/detections?page=1&limit=40",
    {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    }
  );

  return (
    <div className="App flex flex-col m-8">
      <h1 className="font-bold mb-12 text-3xl">Detections</h1>
      {isPending && <div className="text-gray-500">Loading....</div>}
      {error && <div className="text-red-600">{error}</div>}
      {data && (
        <>
          <div className="flex gap-2 mb-4">
            <EyeIcon className="size-6 text-blue-800" />{" "}
            <span>acknowledged</span>
            <ShieldCheckIcon className="size-6 text-green-500" />{" "}
            <span>resolved</span>
          </div>
          <List data={data} />
        </>
      )}
    </div>
  );
}

export default App;
