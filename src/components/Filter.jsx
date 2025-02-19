// needs props validation (we propably use TypeScript anyways)

const Filter = ({ getFilteredData }) => {
  return (
    <div className="Filter flex gap-6 mb-6 flex-col">
      <fieldset className="flex gap-4">
        <legend className="font-bold">Severity:</legend>

        <label className="flex gap-2">
          <input
            type="radio"
            name="severity"
            value={[]}
            defaultChecked={true}
            onChange={() => getFilteredData([])}
          />
          No filter
        </label>

        <label className="flex gap-2">
          <input
            type="radio"
            name="severity"
            value="high"
            onChange={() => getFilteredData(["severity", "high"])}
          />
          High
        </label>

        <label className="flex gap-2">
          <input
            type="radio"
            name="severity"
            value="low"
            onChange={() => getFilteredData(["severity", "low"])}
          />
          Low
        </label>
      </fieldset>
      <fieldset className="flex gap-4">
        <legend className="font-bold">Status:</legend>

        <label className="flex gap-2">
          <input
            type="radio"
            name="status"
            value={[]}
            defaultChecked={true}
            onChange={() => getFilteredData([])}
          />
          No filter
        </label>

        <label className="flex gap-2">
          <input
            type="radio"
            name="status"
            value="acknowledged"
            onChange={() => getFilteredData(["status", "acknowledged"])}
          />
          Acknowledged
        </label>

        <label className="flex gap-2">
          <input
            type="radio"
            name="status"
            value="resolved"
            onChange={() => getFilteredData(["status", "resolved"])}
          />
          Resolved
        </label>
      </fieldset>
    </div>
  );
};

export default Filter;
