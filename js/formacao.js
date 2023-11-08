function alternanciaEntreInstituicoesEducacionais() {

  let textoDescricaoFormacao = {
    "Rocketseat": " Rocketseat, uma escola de programação onde mais de 50 mil pessoas, já passaram pelo seu programa de aprendizagem. A Rocketseat é uma referência em educação online na área da tecnologia, oferecendo cursos em linguagens de programação como JavaScript, React, Node.js e muito mais.\n\n Além disso, a Rocketseat é a maior comunidade de desenvolvedores da América Latina, promovendo eventos incríveis para conectar, inspirar e capacitar os profissionais da área.\n\n Eu tive a oportunidade de participar de dois desses eventos: o Next Level Week e o AI para Dev, que foram experiências incríveis para ampliar meus conhecimentos, buscar crescimento na minha carreira e me aproximar das oportunidades que desejo.",
    "Microsoft Learn": "Microsoft Learn é mais do que uma plataforma de aprendizado on-line. É uma oportunidade de adquirir conhecimentos práticos e atualizados sobre as tecnologias presente no mercado.\n\n Como desenvolvedor front-end, eu pude aprender sobre React.js, uma das bibliotecas mais populares e poderosas para criar interfaces de usuário dinâmicas e responsivas.\n\n Microsoft Learn oferece cursos gratuitos, mais de 80 horas de conteúdo gratuito, localizado em 23 idiomas, bem como treinamento em uma ampla variedade de tópicos relacionados à tecnologia, desde o desenvolvimento web, inteligência artificial, plataformas como Azure, Dynamics, Power Apps, Flow e muito mais.",
    "ONE": "O ONE é um programa de educação e empregabilidade com um propósito social de capacitar indivíduos no campo da tecnologia e conectá-los com oportunidades de emprego em parceria com diversas empresas.\n\n Uma dessas valiosas parcerias é com a Alura, a plataforma que me proporcionou a oportunidade de realizar cursos online e adquirir conhecimentos essenciais para o meu desenvolvimento.\n\nEste programa é totalmente online e gratuito, ele é projetado para aqueles que não tiveram acesso a uma educação de alta qualidade e buscam transformar suas perspectivas sociais.\n\nO programa tem uma duração de seis meses e é dividido em quatro trilhas de aprendizado disponíveis na plataforma, totalizando mais de 560 horas de conteúdo enriquecedor."
  };

  let instituicaoEducacional = document.querySelector(".instituicao-educacional");
  let formacaoDescricao = document.querySelector(".formacao_descricao");

  instituicaoEducacional.textContent = "ONE";
  formacaoDescricao.textContent = textoDescricaoFormacao.ONE;

  const alternarInstituicao = () => {

    let keys = Object.keys(textoDescricaoFormacao);
    let index = 0;

    setInterval(() => {

      let key = keys[index];

      instituicaoEducacional.textContent = key;
      formacaoDescricao.textContent = textoDescricaoFormacao[key];

      index = (index + 1) % keys.length;
    }, 8000);
  }

  alternarInstituicao();
}
alternanciaEntreInstituicoesEducacionais();
