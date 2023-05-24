import { useNavigate } from 'react-router-dom';

function MainArrow() {
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-5 left-5 w-16 h-16 border text-6xl text-center rounded-xl bg-slate-100 hover:bg-slate-300 active:bg-slate-400 cursor-pointer"
      onClick={() => navigate('/')}
    >
      &#10094;
    </div>
  );
}

export default MainArrow;
