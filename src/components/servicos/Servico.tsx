function Servico() {
  return (
    <div className="min-h-screen flex flex-col scroll-mt-20">
      <main className="flex-1 bg-background px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-nav-footer">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">Nossa História</h2>
            <p>
              Desde a nossa fundação, temos como propósito conectar talentos às
              oportunidades certas. Ao longo dos anos, construímos uma
              trajetória sólida no setor de Recursos Humanos, oferecendo
              soluções personalizadas que atendem às necessidades específicas de
              cada empresa parceira. Com uma equipe especializada e comprometida
              com a excelência, já ajudamos dezenas de organizações a
              transformarem seus processos de recrutamento, seleção, treinamento
              e desenvolvimento. Nossa missão vai além de preencher vagas:
              buscamos impulsionar carreiras, fortalecer equipes e contribuir
              para o crescimento sustentável dos nossos clientes. Hoje, somos
              referência em RH estratégico, guiados por valores como ética,
              transparência e inovação. E seguimos em constante evolução,
              acreditando no poder das pessoas como principal motor de
              transformação nas empresas.
            </p>
          </section>
          <section className=" bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">Serviços Ofertados</h2>
            <p>
              Sistema possibilita a jornada do candidato desde a inscrição até a
              entrega de documentação aba de solicitação das vagas Possibilidade
              de criar fluxos de aprovação para os gestores e RH Book de testes
              técnicos, comportamentais e personalizáveis Parametrização de
              questionários e formulários utilizados pela empresa tanto no
              processo de recrutamento, quanto no período de entrega de docs
              Parametrização de feedbacks automáticos para cada etapa do
              processo E MUITO MAIS
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Servico;
