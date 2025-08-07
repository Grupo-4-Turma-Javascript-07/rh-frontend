import type { ReactNode } from "react";
import Maria from "./Maria";
import Edu from "./Edu";
import Igor from "./Igor";
import Julio from "./Julio";
import Larissa from "./Larissa";
import Mel from "./Mel";
import Vanessa from "./Vanessa";
import Modal from "./modal/modal";

interface Membro {
  nome: string;
  linkedin: string;
  github: string;
  foto: string;
  saibaMais: ReactNode;
}

const membros: Membro[] = [
    { 
    nome: "Maria", 
    linkedin: "https://www.linkedin.com/in/marianavarroo/", 
    github: "http://github.com/marinavarroo", 
    foto: "https://i.imgur.com/0I8nAjL.jpeg", 
    saibaMais: < Maria />
    },
    { 
    nome: "Edu", 
    linkedin: "https://www.linkedin.com/in/eduardo-garcia-junior-7aba34243/", 
    github: "https://github.com/oligEdu", 
    foto: "https://i.imgur.com/7Yk4MDt.jpeg", 
    saibaMais: < Edu />
    },
    {
    nome: "Igor", 
    linkedin: "https://www.linkedin.com/in/igorpardinholima/", 
    github: "https://github.com/igorpardinho", 
    foto: "https://i.imgur.com/lWs0aP4.jpeg", 
    saibaMais: < Igor />
    },
    { 
    nome: "Julio", 
    linkedin: "https://www.linkedin.com/in/julioteixeirafloriano/", 
    github: "https://github.com/Juliotbr", 
    foto: "https://i.imgur.com/S2R76DZ.jpeg", 
    saibaMais: < Julio />
    },
    { 
    nome: "Larissa", 
    linkedin: "https://www.linkedin.com/in/larissa-mpinheiro/",  
    github: "https://github.com/larissa-pinheiro", 
    foto: "https://i.imgur.com/4tGf1px.jpeg", 
    saibaMais: < Larissa />
    },
    { 
    nome: "Mel", 
    linkedin: "https://www.linkedin.com/in/melissa-cassia-41588921b/", 
    github: "https://github.com/melcsilva", 
    foto: "https://i.imgur.com/qXmxzeu.jpeg", 
    saibaMais: < Mel />
    },
    { 
    nome: "Vanessa", 
    linkedin: "https://www.linkedin.com/in/vanessa-targino", 
    github: "ghttps://github.com/VanessaTargino", 
    foto: "https://i.imgur.com/op9nEFR.jpeg", 
    saibaMais: < Vanessa />
    },
];

function Sobre() {
  return (
    <div 
    id='sobre' className='min-h-screen bg-background'>
      <header className='bg-nav-footer text-white flex justify-between items-center px-8 py-4'>
        <div>
          <h1 className='text-xl font-family-titulo'>RH Generation</h1>
          <p className='text-sm'>GRUPO 04</p>
        </div>
        <nav className='space-x-4'>
          <a href='#home' className='hover:underline'>Home</a>
          <a href='#sobre' className='underline font-family-texto'>Sobre Nós</a>
          <a href='#contato' className='hover:underline'>Contato</a>
        </nav>
      </header>
      <main className="py-10 px-4"></main>
      <h2 className='text-3xl text-center font-family-texto text-nav-footer mb-8'>Sobre Nós</h2>

{/* CARDS */}

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center justify-center"
          >
            <img
              src={membro.foto || 'https://via.placeholder.com/100'}
              alt={membro.nome}
              className="w-24 h-24 rounded-full border-4 border-[var(--color-azul-claro)] mb-3"
              style={{ objectFit: 'cover' }}
            />
            <h2
              className="text-lg font-bold"
              style={{
                fontFamily: 'var(--font-family-titulo)',
                color: 'var(--color-nav-footer)',
              }}
            >
              {membro.nome}
            </h2>
            <p
              className="text-sm mt-1"
              style={{ fontFamily: 'var(--font-family-texto)' }}
            >
              <strong>Linkedin: </strong>
              <a
                href={`${membro.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-azul-medio)] hover:underline"
              >
                Linkedin.com/{membro.nome}
              </a>
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: 'var(--font-family-texto)' }}
            >
              <strong>GitHub: </strong>
              <a
                href={`${membro.github}`}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-azul-medio)] hover:underline"
              >
                github.com/{membro.nome}
              </a>
            </p>
            <button
            className="mt-4 px-4 py-1 rounded-full font-family-texto text-white
              bg-azul-medio hover:bg-color-azul-footer 
              transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-family-texto)' }}
            >
              <Modal component={membro.saibaMais} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sobre;
