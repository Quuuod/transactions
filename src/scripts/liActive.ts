export function liActive(currentLiId: string = 'liType0'): void {
  document.querySelectorAll('li').forEach((li) => {
    li.classList.remove('bg-slate-300');
  });
  const currentLi: HTMLLIElement | null = document.querySelector(
    `#${currentLiId}`
  );
  if (currentLi) {
    currentLi.classList.add('bg-slate-300');
  }
}
