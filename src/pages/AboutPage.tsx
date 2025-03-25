const AboutPage = () => {

  return (
    
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 flex justify-center mt-8">
      
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text">
      <h1 className="text-3xl font-semibold mb-12 text-center">Quem Somos</h1>
      <div>
      <section id="about"><br/>
  <p>A Epic Figures Studio nasceu da paixão pelo colecionismo e pela arte dos action figures. Nossa missão é transformar seus personagens favoritos em peças altamente detalhadas, com qualidade premium e design impecável.
  </p>      <p>
  Com uma equipe dedicada de artistas e designers, criamos figuras de ação que capturam a essência dos heróis e vilões das histórias que marcaram gerações. Seja você um fã de animes, quadrinhos ou filmes, cada peça é projetada com um nível de realismo impressionante, utilizando materiais de alta qualidade e técnicas de pintura que garantem fidelidade absoluta aos personagens.
    </p>
    <p>Nosso catálogo abrange desde figuras articuladas até edições limitadas para colecionadores exigentes. Além disso, oferecemos action figures originais, criados exclusivamente por nossa equipe, trazendo personagens inéditos e designs inovadores para enriquecer ainda mais sua coleção.</p><br/>
    <p>Na Epic Figures Studio, acreditamos que colecionar é mais do que um hobby: é uma forma de expressar sua paixão e conexão com os mundos que ama. Estamos aqui para tornar essa experiência inesquecível.

Junte-se a nós e eleve sua coleção ao próximo nível!</p><br/>
    <h4 className="text-blue-700  transition-colors text-3xl text-center mb-4">Contatos</h4>
    <p>
    <b>Produtos e pedidos:</b> Entre em contato diretamente com Epic Figure Studio. <br/><br/>
    E-mail: epic.figure.studio@gmail.com<br />
    Telefone: (+55) 0800 9696-9898<br /></p>
  <br/>
</section>
      </div>
      
      <div className="flex justify-center mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-blue-900 transition-colors"
        >
          Voltar ao Topo
        </button>
      </div>
    </div>
    </main>
  );
};

export default AboutPage;


