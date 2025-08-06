import React from "react";

interface Membro {
  nome: string;
  linkedin: string;
  github: string;
  foto: string;
  saibaMais: string;
}

const membros: Membro[] = [
  { nome: "Maria", linkedin: "linkedin.com", github: "github.com", foto: "https://i.imgur.com/0I8nAjL.jpeg", saibaMais: "/Maria"},
  { nome: "Edu", linkedin: "linkedin.com", github: "github.com", foto: "https://i.imgur.com/7Yk4MDt.jpeg", saibaMais: "/Edu" },
  { nome: "Igor", linkedin: "linkedin.com", github: "github.com", foto: "https://i.imgur.com/lWs0aP4.jpeg", saibaMais: "/Igor" },
  { nome: "Julio", linkedin: "linkedin.com", github: "github.com", foto: "https://i.imgur.com/S2R76DZ.jpeg", saibaMais: "/Julio" },
  { nome: "Larissa", linkedin: <a href="https://www.linkedin.com/in/larissa-mpinheiro/"></a>,  github: <a href="https://github.com/larissa-pinheiro"></a>, foto: "https://i.imgur.com/4tGf1px.jpeg", saibaMais: "/Larissa" },
  { nome: "Mel", linkedin: "linkedin.com", github: "github.com", foto: "https://i.imgur.com/qXmxzeu.jpeg", saibaMais: "/Mel" },
  { nome: "Vanessa", linkedin: "linkedin.com", github: "github.com", foto: "https://i.imgur.com/op9nEFR.jpeg", saibaMais: "/Vanessa" },
];

function Sobre() {
  return (
    <div id="Sobre" className="min-h-screen bg-[var(--color-background)] px-6 py-10 text-center">
      <h1
        className="text-3xl font-bold mb-8"
        style={{ fontFamily: "var(--font-family-titulo)", color: "var(--color-nav-footer)" }}
      >
        Sobre nós
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center"
          >
            <img
              src={membro.foto || "https://via.placeholder.com/100"}
              alt={membro.nome}
              className="w-24 h-24 rounded-full border-4 border-[var(--color-azul-claro)] mb-3"
              style={{ objectFit: "cover" }}
            />
            <h2
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-family-titulo)", color: "var(--color-nav-footer)" }}
            >
              {membro.nome}
            </h2>
            <p className="text-sm mt-1" style={{ fontFamily: "var(--font-family-texto)" }}>
              <strong>Linkedin: </strong>
              <a
                href={`https://${membro.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-azul-medio)] hover:underline"
              >
                {membro.linkedin}
              </a>
            </p>
            <p className="text-sm" style={{ fontFamily: "var(--font-family-texto)" }}>
              <strong>GitHub: </strong>
              <a
                href={`https://${membro.github}`}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-azul-medio)] hover:underline"
              >
                {membro.github}
              </a>
            </p>
            <button
              className="mt-4 px-4 py-1 rounded-full font-bold text-white bg-[var(--color-azul-medio)] hover:bg-[var(--color-nav-footer)] transition-colors cursor-pointer"
              style={{ fontFamily: "var(--font-family-texto)" }}
              
            >
              <a href="{membro.saibaMais}">Saiba mais</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;
