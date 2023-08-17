export default function Table({ head, body }) {
  return (
    <div className="w-full border rounded p4">
      <table className="w-full">
        <thead>
          <tr>
            {head.map((h, key) => (
              <th
                className="text-left text-sm font-semibold text-gray-500 p-3 border-b"
                key={key}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((items, key) => (
            <tr key={key}>
              {items.map((item, key) => (
                <td key={key}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
