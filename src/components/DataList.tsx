import { useLocation } from 'react-router-dom';
import { DataProps, TransactionsTypes } from '../models';
import { CreateDataList } from '../scripts/createDataList';
import ListTableHead from './ListTableHead';

function DataList({ data }: DataProps) {
  const location = useLocation();
  const transactionsType: number = +location.search.slice(-1);

  return (
    <div className="flex jusify-center items-center h-fit pt-24 w-full">
      <table className="w-full m-2">
        <ListTableHead />

        {CreateDataList(data.data, TransactionsTypes[transactionsType])}
      </table>
    </div>
  );
}

export default DataList;
