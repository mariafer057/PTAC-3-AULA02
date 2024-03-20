
const url = "https://back-end-ifms-omega.vercel.app/campi";

export default async function Home() {

  const resposta = await fetch(url,{
    cache:"no-cache"
  });
  const campi = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campi.map((campus) =>
        <div>
             <p>{campus.nome_campus}</p>
        </div>
      )}
    </main>
  )
}

