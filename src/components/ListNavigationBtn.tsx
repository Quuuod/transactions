import { useNavigate } from 'react-router-dom';
import { ITransactionNavigate } from '../models';

function ListNavigationBtn({ tab, text }: ITransactionNavigate) {
  const navigate = useNavigate();

  return (
    <li
      id={`liType${tab}`}
      className="inline-flex cursor-pointer border-box p-5 mt-0.5 h-10 border-x-2 border-t-2 border-black rounded-t-xl items-center justify-center w-1/4 bg-slate-100 hover:bg-slate-300 active:bg-slate-400 "
      onClick={(e) => {
        navigate(`?tab=${tab}`);
      }}
    >
      {text}
    </li>
  );
}

export default ListNavigationBtn;
