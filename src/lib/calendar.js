/* eslint-disable no-unused-vars */
function getDayOfWeek(date) {
  return date.getDay()
}
export function isweekend(date) {
  const dayOfWeek = getDayOfWeek(date)
  return dayOfWeek === 0 || dayOfWeek === 6
}
function getCells(dayOfWeek) {
  switch (dayOfWeek) {
    case 0:
      return 6
    case 1:
      return 0
    case 2:
      return 1
    case 3:
      return 2
    case 4:
      return 3
    case 5:
      return 4
    case 6:
      return 5
  }
}

const months = {
  june: { name: 'June', days: 30, place: 5 },
  july: { name: 'July', days: 31, place: 6 },
  august: { name: 'August', days: 31, place: 7 },
  september: { name: 'September', days: 30, place: 8 },
  october: { name: 'October', days: 31, place: 9 }
}

export const monthValues = Object.entries(months).map(([value, { name }]) => ({ value, name }))
export const monthDays = Object.entries(months).map(([monthName, { days, place }]) => {
  const value = Array.from({ length: days }, (_, i) => i + 1).map((i) => new Date(2023, place, i))

  return {
    name: monthName,
    value,
    first: getCells(getDayOfWeek(value[0]))
  }
})

export const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const getPlaceToMonth = (monthPlace) => {
  return Object.entries(months).find(([_, { place }]) => {
    return place === monthPlace
  })[0]
}
