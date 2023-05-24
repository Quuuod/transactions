import ListNavigation from './ListNavigation';
import MainArrow from '../components/MainArrow';
import DataList from './DataList';
import { IAllData, DataProps } from '../models';
const tabs: string[] = ['Income', 'Outcome', 'Loans', 'Investments'];

function ListPage({ data }: DataProps) {
  return (
    <div className="flex relative mx-auto align-middle items-center justify-center border-2 rounded-xl border-black h-fit w-2/6">
      <div className="absolute top-0 w-full">
        <ul className="">
          {tabs.map((value, index) => {
            return (
              <ListNavigation key={value + index} tab={index} text={value} />
            );
          })}
        </ul>
      </div>
      <div className="flex jusify-center items-center h-fit pt-24 w-full">
        <DataList data={data} />
      </div>
      <MainArrow />
    </div>
  );
}

export default ListPage;