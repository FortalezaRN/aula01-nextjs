interface User {
  login: string
  name: string
}

export default async function GithubProfile() {
  const response = await fetch('https://api.github.com/users/fortalezarn')
  const user: User = await response.json()

  return (
    <div>
      <h1>Login: {user.login}</h1>
      <h1>Name: {user.name}</h1>
    </div>
  )
}
