function SeeTransaction({ text }: { text: string }) {
  return (
    <button className="text-white bg-sky-600 w-40 h-12 rounded-lg font-sans font-semibold w-3/4  mx-auto">
      {text}
    </button>
  );
}
export default SeeTransaction;
