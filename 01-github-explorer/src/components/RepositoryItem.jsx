export default function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'Forms'}</p>
      <a href={props.repository?.link ?? 'https://github.com/'}>Acessar repositório</a>
    </li>
  );
}
