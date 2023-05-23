import React, { ReactElement } from 'react';
import './App.css';
import TransactionContainer from './components/TransactionsContainer';
import rawData from './data/data.json';
import { IAllData } from './models';

function App(): ReactElement {
  return (
    <div className="App m-auto items-center justify-center p-10 bg-slate-300 font-sans max-w-6xl h-full">
      <TransactionContainer data={rawData as IAllData} />
    </div>
  );
}

export default App;
