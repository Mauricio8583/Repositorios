import { useState } from "react"
import Button from "./components/button/Button";
import Input from "./components/input/Input"
import Repo from "./components/repo/Repo"
import { api } from "./services/api";
import { Container } from "./styles"

function App() {  

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearch = async () => {
    const {data} = await api.get(`repos/Mauricio8583/${currentRepo}`)

    if(data.id) {

      const isExist = repos.filter(repo => repo.id === data.id);

      if(isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;        
      }
      
      else{
        alert("Repositorio não encontrado")
      }
      
    }   

  }
  
  
  return (
    <Container>
      <img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png" alt="" width={72} height={72} />
      <Input onChange={(e) => setCurrentRepo(e.target.value)} value={currentRepo} />
      <Button onClick={handleSearch} />
      {repos.map( rep => <Repo repo={rep} /> )}
      
    </Container>
  )
}

export default App
