export async function LoadingWaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <h1>Timeout de 2000</h1>
}
