import { useFetch } from "./hooks/useFetch";
import { getReadableTime } from "./utils/getTime";

function App() {
  const { data, isPending, error } = useFetch(
    "https://front.heyering.com/detections?page=1&limit=50",
    {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    }
  );

  return (
    <div className="App flex items-center justify-center flex-col m-8">
      <h1 className="font-bold text-2xl">Detections</h1>
      {isPending && <div className="text-gray-500">Loading....</div>}
      {error && <div className="text-red-600">{error}</div>}
      {data &&
        data.map((detection) => (
          <p className="" key={detection.title}>
            <b>{detection.title}</b> was triggered:{" "}
            <b>{getReadableTime(detection.triggeredAt)}</b>
          </p>
        ))}
    </div>
  );
}

export default App;
