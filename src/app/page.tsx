import { Suspense } from 'react'
// usado para não fazer a aplicação mostrar somente quando tudo estiver carregado

import GithubProfile from './components/github-profile'
import { LoadingWaitComponent } from './components/loading-wait-componets'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo at
        vel reiciendis, corrupti ipsum, cum ad harum porro iste voluptas
        asperiores labore officia autem, molestiae libero! Facilis, quasi aut.
      </p>
      <br />
      <Suspense fallback={<p>Carregando Loading Wait</p>}>
        <LoadingWaitComponent />
      </Suspense>
      <br />
      <Suspense fallback={<p>Carregando Profile github</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
