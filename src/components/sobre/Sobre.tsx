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
    linkedin: "linkedin.com", 
    github: "github.com", 
    foto: "https://i.imgur.com/0I8nAjL.jpeg", 
    saibaMais: < Maria />
    },
    { 
    nome: "Edu", 
    linkedin: "linkedin.com", 
    github: "https://www.linkedin.com/in/eduardo-garcia-junior-7aba34243/", 
    foto: "https://i.imgur.com/7Yk4MDt.jpeg", 
    saibaMais: < Edu />
    },
    { 
    nome: "Igor", 
    linkedin: "linkedin.com", 
    github: "github.com", 
    foto: "https://i.imgur.com/lWs0aP4.jpeg", 
    saibaMais: < Igor />
    },
    { 
    nome: "Julio", 
    linkedin: "linkedin.com", 
    github: "github.com", 
    foto: "https://i.imgur.com/S2R76DZ.jpeg", 
    saibaMais: < Julio />
    },
    { 
    nome: "Larissa", 
    linkedin: "linkedin.com",  github: "github.com", 
    foto: "https://i.imgur.com/4tGf1px.jpeg", 
    saibaMais: < Larissa />
    },
    { 
    nome: "Mel", 
    linkedin: "linkedin.com", 
    github: "github.com", 
    foto: "https://i.imgur.com/qXmxzeu.jpeg", 
    saibaMais: < Mel />
    },
    { 
    nome: "Vanessa", 
    linkedin: "linkedin.com", 
    github: "github.com", 
    foto: "https://i.imgur.com/op9nEFR.jpeg", saibaMais: < Vanessa />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center"
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
                github.com
              </a>
            </p>
            <button
            className="mt-4 px-4 py-1 rounded-full font-family-texto text-white bg-[var(--color-azul-medio)] hover:bg-[var(--color-azul-footer)] transition-colors cursor-pointer"
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
