import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { tabs } from '../models';
import { liActive } from '../scripts/liActive';
import ListNavigationBtn from './ListNavigationBtn';

function ListNavigation() {
  const location = useLocation();

  useEffect(() => {
    liActive(location.search.at(-1));
  }, [location.search]);

  return (
    <div className="absolute top-0 w-full">
      <ul className="">
        {tabs.map((value, index) => {
          return (
            <ListNavigationBtn key={value + index} tab={index} text={value} />
          );
        })}
      </ul>
    </div>
  );
}

export default ListNavigation;
