export async function TestSeverSide() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <h1>Teste do btn renderizando no server-side</h1>
}
