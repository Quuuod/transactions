import { DataProps, IData } from '../models';

function DataList({ data }: DataProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-2 border-slate-400">
          <th>Name</th>
          <th>Account</th>
        </tr>
      </thead>
      <tbody>{/* как это заполнить */}</tbody>
    </table>
  );
}

export default DataList;
