export function getUniqueEmail() {
  const randomName = "testuser" + Math.floor(Math.random() * 1000)
  const domain = "gmail.com"
  const newEmail = randomName + "@" + domain
  return newEmail
}