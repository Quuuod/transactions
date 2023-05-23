import { useState } from 'react';
import Transaction from './Transaction';
import { IAllData, IDataTypes } from '../models';
import Welcome from './Welcome';
import { countType } from '../scripts/countType';

interface DataProps {
  data: IAllData;
}

function TransactionsContainer({ data }: DataProps) {
  const [dataType, setDataType] = useState<IDataTypes>(countType(data.data));
  const { income, investment, outcome, loan } = dataType;
  return (
    <>
      <div className="relative flex items-center justify-center flex-wrap w-auto mx-auto p-10 bg-white rounded-lg m-10 h-96">
        <Welcome total={data.total} />
      </div>

      <div className="w-auto mx-auto grid gap-4 grid-cols-2 grid-rows-2">
        <Transaction amount={income} type="Income" text="See all" />
        <Transaction amount={investment} type="Investments" text="See all" />
        <Transaction amount={outcome} type="Outcome" text="See all" />
        <Transaction amount={loan} type="Loans" text="See all" />
      </div>
    </>
  );
}

export default TransactionsContainer;
