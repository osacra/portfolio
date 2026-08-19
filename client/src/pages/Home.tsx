/* Direção visual: Oficina Digital — neo-brutalismo editorial, assimetria funcional, carvão, marfim e açafrão. */
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const heroImage = "/manus-storage/portfolio-hero_d0d3f348.jpg";
const interfaceImage = "/manus-storage/project-interface_82d5fded.jpg";
const mobileImage = "/manus-storage/project-mobile_0d9f48c3.jpg";
const markImage = "/manus-storage/portfolio-mark_e469cf54.png";

const stacks = [
  { label: "Interface", items: "React · TypeScript · Next.js" },
  { label: "Produto", items: "Design systems · UX · Prototipação" },
  { label: "Back-end", items: "Node.js · APIs · Bancos de dados" },
  { label: "Entrega", items: "Git · Testes · Deploy contínuo" },
];

const projects = [
  { number: "01", type: "Produto digital", title: "Sistema modular", description: "Uma interface pensada para transformar informação dispersa em uma experiência clara, navegável e pronta para crescer.", image: interfaceImage, tags: ["React", "Produto", "UI"] },
  { number: "02", type: "Experimento", title: "Experiência em movimento", description: "Um estudo de interface mobile sobre ritmo, hierarquia e as pequenas decisões que tornam um fluxo mais compreensível.", image: mobileImage, tags: ["Mobile", "UX", "Código"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "seu.email@exemplo.com";

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="site-shell">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Voltar ao início">
          <img src={markImage} alt="" className="brand-mark" />
          <span>osacra<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#stacks" onClick={() => setMenuOpen(false)}>Stacks</a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="nav-cta">Vamos conversar <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Desenvolvedor · designer de produto</p>
          <h1>Interfaces que reduzem ruído <em>e aumentam decisão.</em></h1>
          <p className="hero-intro">Eu desenho e construo produtos digitais com atenção ao detalhe, clareza técnica e curiosidade por tudo que acontece entre a ideia e a tela.</p>
          <div className="hero-actions">
            <a href="#projetos" className="button button-dark">Ver projetos <ArrowUpRight size={17} /></a>
            <a href="#sobre" className="text-link">Conhecer meu processo <span>↘</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={heroImage} alt="Composição abstrata de uma bancada digital com elementos de interface" /></div>
          <div className="hero-note note-top">Disponível para<br />novos projetos <Sparkles size={15} /></div>
          <div className="hero-note note-bottom"><span>COORD.</span> 23° 31' 14" S<br /><span>STATUS</span> em construção</div>
        </div>
        <div className="hero-index">01 <span>/</span> 06</div>
      </section>

      <section id="sobre" className="about-section section-pad">
        <div className="section-marker">02 <span>Sobre o trabalho</span></div>
        <div className="about-grid">
          <h2>O detalhe também<br /><span>é uma decisão.</span></h2>
          <div className="about-text"><p>Meu trabalho fica no encontro entre produto, design e tecnologia. Gosto de entender o problema antes de escolher a ferramenta — e de deixar cada sistema mais simples do que encontrei.</p><p>Reúno aqui projetos, experimentos e decisões de produto. Cada peça funciona como um recorte do meu jeito de pensar: observar, estruturar e construir sem adicionar ruído.</p><a className="inline-arrow" href="#contato">Falar sobre uma ideia <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section id="stacks" className="stack-section section-pad">
        <div className="section-marker light">03 <span>Ferramentas de trabalho</span></div>
        <div className="stack-heading"><h2>Minha caixa<br /><em>de ferramentas.</em></h2><p>O melhor stack é aquele que desaparece para o usuário e dá espaço para a experiência aparecer.</p></div>
        <div className="stack-list">{stacks.map((stack, index) => <div className="stack-row" key={stack.label}><span className="stack-index">0{index + 1}</span><span className="stack-label">{stack.label}</span><span className="stack-items">{stack.items}</span><ArrowUpRight size={20} /></div>)}</div>
      </section>

      <section id="projetos" className="projects-section section-pad">
        <div className="section-marker">04 <span>Projetos selecionados</span></div>
        <div className="projects-heading"><h2>Veja como a ideia<br /><em>virou produto.</em></h2><p>Uma seleção editável para você contar o que construiu, por que construiu e o que aprendeu no caminho.</p></div>
        <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-image"><img src={project.image} alt="" /><span className="project-number">{project.number}</span></div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contato" aria-label={`Saiba mais sobre ${project.title}`}><ArrowUpRight size={21} /></a></div></div></article>)}</div>
      </section>

      <section className="process-section section-pad"><div className="section-marker">05 <span>Como eu trabalho</span></div><div className="process-grid"><h2>Menos mágica.<br /><em>Mais método.</em></h2><div className="process-steps"><div><span>01</span><h3>Entender</h3><p>Faço as perguntas certas antes de abrir o editor.</p></div><div><span>02</span><h3>Estruturar</h3><p>Transformo complexidade em fluxos que fazem sentido.</p></div><div><span>03</span><h3>Construir</h3><p>Entrego com cuidado, feedback curto e código legível.</p></div></div></div></section>

      <section id="contato" className="contact-section section-pad"><div className="section-marker">06 <span>Próximo passo</span></div><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line" /> Tem uma ideia na bancada?</p><h2>Vamos tirar<br /><em>do papel.</em></h2><div className="contact-actions"><a href={`mailto:${email}`} className="button button-saffron"><Mail size={17} /> Enviar um e-mail</a><button className="copy-button" onClick={copyEmail}>{copied ? <><Check size={16} /> Copiado</> : <><Copy size={16} /> Copiar e-mail</>}</button></div></div><div className="contact-social"><a href="#top"><Github size={18} /> GitHub</a><a href="#top"><Linkedin size={18} /> LinkedIn</a></div></section>

      <footer className="site-footer"><span>© 2026 osacra</span><span>osacra / interface & produto<span className="brand-dot">.</span></span><a href="#top">Voltar ao topo ↑</a></footer>
    </main>
  );
}
