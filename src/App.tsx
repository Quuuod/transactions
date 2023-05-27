import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SummaryPage from './components/SummaryPage';
import ListPage from './components/ListPage';
import rawData from './data/data.json';
import { IAllData } from './models';

function App() {
  const [data, setData] = useState<IAllData>(rawData as IAllData);

  useEffect(() => {
    setData(rawData as IAllData);
  }, [rawData]); //для перерисовки при обновлении данных(если бы например тут были данные с сервера)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<SummaryPage data={data} />} />
        <Route path="/" element={<SummaryPage data={data} />} />
        <Route path="navigator" element={<ListPage data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
