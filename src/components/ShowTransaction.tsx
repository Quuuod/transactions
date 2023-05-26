import { useNavigate } from "react-router-dom";

function ShowTransaction({ text, tab }: { text: string; tab: number }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(`/navigator?tab=${tab}`);
      }}
      className='text-white bg-sky-600 w-40 h-12 rounded-lg font-sans font-semibold w-3/4 mx-auto hover:bg-sky-700 active:bg-sky-900 active:scale-95'
    >
      {text}
    </button>
  );
}
export default ShowTransaction;
