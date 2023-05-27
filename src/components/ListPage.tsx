import SummaryArrow from './SummaryArrow';
import DataList from './DataList';
import { DataProps } from '../models';
import ListNavigation from './ListNavigation';

function ListPage({ data }: DataProps) {
  return (
    <div className="flex my-5 relative mx-auto align-middle items-center justify-center border-2 rounded-xl border-black h-fit w-3/6">
      <ListNavigation />

      <DataList data={data} />

      <SummaryArrow />
    </div>
  );
}

export default ListPage;
