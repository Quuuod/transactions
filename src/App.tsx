import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SummaryPage from './components/SummaryPage';
import ListPage from './components/ListPage';
import rawData from './data/data.json';
import { IAllData } from './models';

function App() {
  const [data, setData] = useState(rawData);

  useEffect(() => {
    setData(rawData);
  }, [rawData]); //для перерисовки при обновлении данных

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<SummaryPage data={data as IAllData} />} />
        <Route path="/" element={<SummaryPage data={data as IAllData} />} />
        <Route
          path="navigator"
          element={<ListPage data={data as IAllData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
