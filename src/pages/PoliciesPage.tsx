import { useEffect }from 'react';

const PrivacyPolicy = () => (

  <section id="privacy-policy"><br />
    <h1 className="text-blue-600 hover:text-pink-600 transition-colors">Política de Privacidade</h1>
    <p>Última atualização: 24/03/2025
      <br /><br />
      Nós, da <a href="/marketing-website" target="_blank" rel="noopener noreferrer"
        className="text-blue-600 hover:text-pink-600 transition-colors"
      >
        Epic Figure Studio
      </a>,
      respeitamos sua privacidade e nos comprometemos a protegê-la. <br />Esta Política de Privacidade descreve como lidamos com as informações pessoais e o uso de dados no nosso site. <br />Ao usar este site, você concorda com as práticas descritas abaixo.
      <br /><br />
      1. Dados Pessoais Coletados<br />
      No momento, não coletamos nenhum dado pessoal, como nome, email, endereço ou qualquer outra informação identificável diretamente. O site não usa cookies para rastrear a navegação dos usuários.
      <br /><br />
      2. Não Coletamos Informações Pessoais<br />
      Nosso site não coleta nem armazena informações pessoais de visitantes, como nome, email, ou qualquer outro dado sensível. Não há sistemas de rastreamento ou monitoramento de dados.
      <br /><br />
      3. Como Entrar em Contato<br />
      Caso tenha alguma dúvida sobre nossa Política de Privacidade ou queira entrar em contato conosco, use as seguintes formas de comunicação:
      <br />
      E-mail: epic.figure.studio@gmail.com <br />
      Telefone: (+55) 0800 9696-9898<br /><br />
      4. Alterações na Política de Privacidade<br />
      Podemos atualizar nossa Política de Privacidade de tempos em tempos. Recomendamos que você revise periodicamente esta página para estar ciente de quaisquer modificações.</p><br /><br />
  </section>
);

const TermsOfUse = () => (
  <section id="terms-of-use">
    <h2 className="text-blue-600 hover:text-pink-600 transition-colors">Termos de Uso</h2>
    <p>Última atualização: 24/03/2025
      <br /><br />
      Estes Termos de Uso regulam o uso deste site, o qual é de propriedade e operado por <a href="/marketing-website" target="_blank" rel="noopener noreferrer"
        className="text-blue-600 hover:text-pink-600 transition-colors"
      >
        Epic Figure Studio
      </a>. <br />Ao acessar e usar este site, você concorda em cumprir e estar vinculado a estes Termos de Uso.
      <br /><br />
      1. Uso do Site
      <br />Este site é fornecido exclusivamente para fins informativos. Ao utilizar este site, você concorda em não usar suas funcionalidades para qualquer atividade ilegal, prejudicial ou que viole os direitos de terceiros.
      <br /><br />
      2. Responsabilidade do Usuário<br />
      Você concorda em usar o site de maneira responsável e de acordo com a legislação aplicável. Qualquer uso indevido, incluindo a tentativa de coletar dados de outros usuários ou comprometer a segurança do site, resultará em ações legais e bloqueio de acesso.
      <br /><br />
      3. Direitos Autorais<br />
      Todo o conteúdo disponível neste site, incluindo textos, gráficos, imagens, e design, é protegido por direitos autorais e não pode ser copiado, distribuído ou alterado sem a permissão prévia e por escrito da <a href="/marketing-website" target="_blank" rel="noopener noreferrer"
        className="text-blue-600 hover:text-pink-600 transition-colors"
      >
        Epic Figure Studio
      </a>.
      <br /><br />
      4. Modificações<br />
      Reservamos o direito de modificar, adicionar ou excluir qualquer conteúdo ou funcionalidade deste site a qualquer momento, sem aviso prévio.
      <br /><br />
      5. Limitação de Responsabilidade<br />
      Não garantimos que o site esteja sempre disponível ou livre de erros. Em nenhuma circunstância a <a href="/marketing-website" target="_blank" rel="noopener noreferrer"
        className="text-blue-600 hover:text-pink-600 transition-colors"
      >
        Epic Figure Studio
      </a> será responsável por danos diretos ou indiretos resultantes do uso ou impossibilidade de uso deste site.
      <br /><br />
      6. Como Entrar em Contato<br />
      Caso tenha dúvidas ou questões sobre os Termos de Uso ou qualquer outra preocupação, entre em contato conosco por e-mail ou telefone.
      <br />
      E-mail: epic.figure.studio@gmail.com<br />
      Telefone: (+55) 0800 9696-9898</p><br /><br />
  </section>
);

const CookiePolicy = () => (
  <section id="cookie-policy">
    <h2 className="text-blue-600 hover:text-pink-600 transition-colors">Política de Cookies</h2>
    <p>
      Última atualização: 24/03/2025<br /><br />

      Nosso site não utiliza cookies para coleta de dados pessoais ou informações de navegação. Portanto, não armazenamos ou rastreamos informações do usuário via cookies.<br />
      <br />
      O que são Cookies?<br />
      Cookies são pequenos arquivos de texto armazenados no dispositivo de um usuário enquanto ele navega em um site. Eles são usados para personalizar a experiência do usuário, armazenar preferências ou lembrar informações. No entanto, nosso site não utiliza cookies.<br />
      <br />
      Alterações nesta Política<br />
      Se decidirmos utilizar cookies no futuro, atualizaremos esta página para refletir a mudança em nossa política. <br />Certifique-se de revisar regularmente para se manter atualizado.</p><br />
  </section>
);

const PoliciesPage = () => {
  // Garante que a página sempre comece do topo ao ser carregada
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">Políticas de Privacidade e Termos de Uso</h1>

      <nav>
        <ul className="flex space-x-6 justify-center mb-8">
          <li><a href="#privacy-policy" className="text-blue-500 hover:underline">Política de Privacidade</a></li>
          <li><a href="#terms-of-use" className="text-blue-500 hover:underline">Termos de Uso</a></li>
          <li><a href="#cookie-policy" className="text-blue-500 hover:underline">Política de Cookies</a></li>
        </ul>
      </nav>

      <div>
        <PrivacyPolicy />
        <TermsOfUse />
        <CookiePolicy />
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          Voltar ao Topo
        </button>
      </div>
    </div>
  );
};

export default PoliciesPage;
