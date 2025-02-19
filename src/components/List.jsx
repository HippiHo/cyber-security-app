import Row from "./Row";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

// needs props validation (later I would propably use TypeScript anyways)
// this list looks more like a table to me

const List = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        header: "Service",
        accessor: "service",
        width: "w-2/12 min-w-[170px]",
        isTime: false,
      },
      {
        header: "Title",
        accessor: "title",
        width: "w-2/12 min-w-[200px]",
        isTime: false,
      },
      {
        header: "Severity",
        accessor: "severity",
        width: "w-1/12 min-w-[80px]",
        isTime: false,
      },
      {
        header: "Category",
        accessor: "categoryRef",
        width: "w-3/12 min-w-[250px]",
        isTime: false,
      },
      {
        header: "Triggered at",
        accessor: "triggeredAt",
        width: "w-1/12 min-w-[100px]",
        isTime: true,
      },
      {
        header: "Status",
        accessor: "status",
        width: "w-3/12 min-w-[300px]",
        isTime: false,
      },
    ],
    []
  );

  return (
    <div className="List overflow-y-hidden overflow-y-scroll relative rounded-md">
      <div className="ListHaeder flex w-full rounded-md sticky top-0">
        {columns.map((column) => (
          <div
            key={uuidv4()}
            className={
              "rounded-t-md p-1 bg-blue-300 odd:bg-blue-400 text-lg font-bold " +
              column.width
            }
          >
            {column.header}
          </div>
        ))}
      </div>
      <div className="ListBody flex flex-col gap-2">
        {data.map((item) => (
          <Row key={uuidv4()} columns={columns} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
