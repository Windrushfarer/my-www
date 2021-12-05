const MONTHS = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']

export function formatDateTime(datetime: string): string {
  const date = new Date(datetime)

  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}