import { useState } from 'react';
import Transaction from './Transaction';
import { countType } from '../scripts/countType';
import { ITransactionTypes, DataProps } from '../models';

function Transactions({ data }: DataProps) {
  const [{ income, investment, outcome, loan }, setDataType] =
    useState<ITransactionTypes>(countType(data.data));

  return (
    <div className="w-auto mx-auto grid gap-4 grid-cols-2 grid-rows-2">
      <Transaction number={income} type="Income" text="See all" tab={0} />
      <Transaction
        number={investment}
        type="Investments"
        text="See all"
        tab={1}
      />
      <Transaction number={outcome} type="Outcome" text="See all" tab={2} />
      <Transaction number={loan} type="Loans" text="See all" tab={3} />
    </div>
  );
}

export default Transactions;
