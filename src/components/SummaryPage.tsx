import { useState } from "react";
import Transaction from "./Transaction";
import { IAllData, ITransactionTypes, DataProps } from "../models";
import Welcome from "./Welcome";
import { countType } from "../scripts/countType";

function SummaryPage({ data }: DataProps) {
  const [{ income, investment, outcome, loan }, setDataType] =
    useState<ITransactionTypes>(countType(data.data));
  const [total, setTotal] = useState<number>(data.total);

  return (
    <div className='App mx-auto items-center justify-center p-10 bg-slate-300 font-sans w-4/5 h-full'>
      <div className='relative flex items-center justify-center flex-wrap w-auto mx-auto p-10 bg-white rounded-lg m-10 h-96'>
        <Welcome total={total} />
      </div>

      <div className='w-auto mx-auto grid gap-4 grid-cols-2 grid-rows-2'>
        <Transaction number={income} type='Income' text='See all' tab={0} />
        <Transaction
          number={investment}
          type='Investments'
          text='See all'
          tab={1}
        />
        <Transaction number={outcome} type='Outcome' text='See all' tab={2} />
        <Transaction number={loan} type='Loans' text='See all' tab={3} />
      </div>
    </div>
  );
}

export default SummaryPage;
