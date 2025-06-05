export const PATHNAMES = ['home', 'work', 'contact']

export const generateRandomGuid = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2)
