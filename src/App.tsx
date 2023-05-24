import React, { useState } from 'react';
import './App.css';
import Transactions from './components/Transactions';
import rawData from './data/data.json';
import { IAllData } from './models';

function App() {
  const [data, setData] = useState(rawData);
  return (
    <div className="App m-auto items-center justify-center p-10 bg-slate-300 font-sans max-w-6xl h-full">
      <Transactions data={data as IAllData} />
    </div>
  );
}

export default App;
