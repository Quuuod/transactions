import { useState } from 'react';
import { DataProps } from '../models';
import Welcome from './Welcome';
import Transactions from './Transactions';

function SummaryPage({ data }: DataProps) {
  const [total, setTotal] = useState<number>(data.total);

  return (
    <div className="App mx-auto items-center justify-center p-10 bg-slate-300 font-sans w-4/5 h-full">
      <Welcome total={total} />

      <Transactions data={data} />
    </div>
  );
}

export default SummaryPage;
