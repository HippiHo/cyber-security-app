import { v4 as uuidv4 } from "uuid";
import { getReadableTime } from "../utils/getTime";
import { ShieldCheckIcon, EyeIcon } from "@heroicons/react/24/solid";

// needs props validation (later I would propably use TypeScript anyways)

const Row = ({ columns, item }) => {
  return (
    <div className="Row rounded-md flex flex-row hover:bg-orange-200 hover:shadow-lg hover:shadow-orange-700 hover:ring-2 hover:ring-orange-500 hover:font-semibold">
      {columns.map((column) =>
        column.accessor !== "status" ? (
          <div className={"p-1 odd:bg-gray-300 " + column.width} key={uuidv4()}>
            {column.isTime
              ? getReadableTime(item[column.accessor])
              : item[column.accessor]}
          </div>
        ) : (
          <div className={"p-1 odd:bg-gray-300 " + column.width} key={uuidv4()}>
            {item.status === "acknowledged" ? (
              <div className="flex gap-1">
                <EyeIcon className="size-6 text-blue-800" />
                {`${item.acknowledgedBy} ${getReadableTime(
                  item.acknowledgedAt
                )}`}
              </div>
            ) : (
              <div className="flex flex-col">
                <span className="flex">
                  <ShieldCheckIcon className="size-6 text-green-500" />
                  {item.resolutionStatus}
                </span>
                <span>{`${item.resolvedBy} ${getReadableTime(
                  item.resolvedAt
                )}`}</span>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Row;
