const categories = [
  "Brasil",
  "Mundo",
  "Negócios",
  "Tecnologia",
  "Futebol",
  "Política",
  "Ciência",
  "Saúde",
  "Entretenimento"
];

export function Header() {
  return (
    <header className="site-header">
      <div className="edition-line">
        <span>Vértice Journal</span>
        <span>Edição digital</span>
        <span>Atualização automática</span>
      </div>

      <a href="/" className="masthead">
        <span className="masthead-mark">V</span>
        <span className="masthead-copy">
          <strong>VÉRTICE</strong>
          <small>JOURNAL</small>
        </span>
      </a>

      <nav className="category-nav" aria-label="Editorias">
        <a href="/">Todos</a>
        {categories.map((category) => (
          <a
            key={category}
            href={`/?categoria=${encodeURIComponent(category)}`}
          >
            {category}
          </a>
        ))}
      </nav>
    </header>
  );
}
