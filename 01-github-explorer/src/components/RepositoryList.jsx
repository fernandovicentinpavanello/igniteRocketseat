const repositoryName = 'unform';

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul> 
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">
            Acessar repo
          </a>
        </li>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">
            Acessar repo
          </a>
        </li>
      </ul>
    </section>
  )
}
