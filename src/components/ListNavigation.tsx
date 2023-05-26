import { useNavigate } from "react-router-dom";

function ListNavigation({ tab, text }: { tab: number; text: string }) {
  const navigate = useNavigate();

  return (
    <li
      className='inline-flex cursor-pointer border-box p-5 mt-0.5 h-10 border-x-2 border-t-2 border-black rounded-t-xl items-center justify-center w-1/4 bg-slate-100 hover:bg-slate-300 active:bg-slate-400 '
      onClick={(e) => {
        document.querySelectorAll("li").forEach((li) => {
          li.classList.remove("bg-slate-300");
        });
        const target = e.target as HTMLLIElement;
        target.classList.add("bg-slate-300");
        navigate(`?tab=${tab}`);
      }}
    >
      {text}
    </li>
  );
}

export default ListNavigation;
