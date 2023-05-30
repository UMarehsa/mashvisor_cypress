export function getUniqueEmail() {
    const randomName = "testuser" + Math.floor(Math.random() * 1000)
    const domain = "gmail.com"
    const newEmail = randomName + "@" + domain
    return newEmail
  }

export  function generateRandomPassword() {
    let result = ''
    for (let i = 0; i < 5; i++) {
      result += Math.floor(Math.random() * 10)
    }
    return result
  }
  