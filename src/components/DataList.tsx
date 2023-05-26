import { DataProps, TransactionsTypes } from "../models";
import { useLocation } from "react-router-dom";
import { CreateDataList } from "../scripts/createDataList";

function DataList({ data }: DataProps) {
  const location = useLocation();
  const transactionsType: number = +location.search.slice(-1);
  console.log(transactionsType);

  return (
    <table className='w-full m-2'>
      <thead>
        <tr className='border-b-2 border-slate-300 text-left'>
          <th>Name</th>
          <th>Account</th>
        </tr>
      </thead>
      {CreateDataList(data.data, TransactionsTypes[transactionsType])}
    </table>
  );
}

export default DataList;
