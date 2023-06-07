export const getInitials = (name) => {
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('')
}

export const getTokenFromStorage = () => {
  const storage = JSON.parse(localStorage.getItem('persist:root')) || null
  return storage ? JSON.parse(storage?.user)?.token || null : null
}

export const convertDifficulty = (diff) => {
  return diff
    .split('_')
    .map((part) => part[0].toUpperCase() + part.substring(1).toLowerCase())
    .join(' ')
}
