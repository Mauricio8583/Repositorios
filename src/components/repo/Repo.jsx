import { RepoContainer } from "./styles";

export default function Repo({repo}) {  

  return (
    <RepoContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank">Ver Repositorio</a><br />
        <a href="#" className="remover">Remover</a>
        <hr />
    </RepoContainer>
  )
}
