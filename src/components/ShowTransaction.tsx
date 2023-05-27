import { useNavigate } from 'react-router-dom';
import { ITransactionNavigate } from '../models';

function ShowTransaction({ text, tab }: ITransactionNavigate) {
  const navigate = useNavigate();

  return (
    <div className="mb-14 mt-5 w-full flex items-center">
      <button
        onClick={() => {
          navigate(`/navigator?tab=${tab}`);
        }}
        className="text-white bg-sky-600 w-40 h-12 rounded-lg font-sans font-semibold w-3/4 mx-auto hover:bg-sky-700 active:bg-sky-900 active:scale-95"
      >
        {text}
      </button>
    </div>
  );
}
export default ShowTransaction;
