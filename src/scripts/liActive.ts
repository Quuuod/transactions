export function liActive(currentLiType: string = '0'): void {
  document.querySelectorAll('li').forEach((li) => {
    li.classList.remove('bg-slate-300');
  });
  const currentLi: HTMLLIElement | null = document.querySelector(
    `#liType${currentLiType}`
  );
  if (currentLi) {
    currentLi.classList.add('bg-slate-300');
  } else console.log('Wrong transaction type');
}
