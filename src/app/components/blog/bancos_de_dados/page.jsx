/*import Header from "../components/header/Header";
import BottomShadowHeader from "../components/bottomshadow/BottomShadow";
import ContainerDad from "../components/container/ContainerDad";
import ContainerRep from "../components/container/Container";
import TopicsBar from "../components/topicsbar/TopicsBar";
import Image from "next/image"; 
import ScrollToTopButton from "../ScrollUpBtn";

export default function databasesBlog() {
    return (
        <main>
        <Header/>
        <div className="flex flex-col">
        <BottomShadowHeader/>
        <ContainerDad>
      <ContainerRep>
      <h1 className="text-2xl text-bold text-blue-dark self-center border-b-2 pb-2 pl-2 pr-2
          border-black shadow-[4px_3px_4px_2px] shadow-indigo-600 
          lowone:text-[18px] lowone:pr-0 lowone:pl-0">Desvendando o Mundo da Organização de Dados</h1>
        <Image className="w-[500px] self-center mt-2 mb-2 rounded-xl" src={DatabasesRepresentation} alt="Databases image representation"/>
<h3 className="text-xl">Bancos de dados desempenham um papel fundamental na era digital, servindo como os guardiões virtuais 
de informações essenciais que impulsionam uma variedade de aplicativos e sistemas. Imagine uma vasta biblioteca
 digital onde dados são meticulosamente organizados, facilmente recuperados e gerenciados de maneira eficiente.
 Este é o universo fascinante dos bancos de dados.</h3>
<br />
<h1 className="text-xl text-purple-700 text-bold">Pra que servem?</h1> 
<h4>No cenário tecnológico atual, onde a quantidade de dados gerados cresce exponencialmente a cada momento, os bancos de
 dados são a espinha dorsal que sustenta desde simples aplicativos móveis até complexos sistemas corporativos. Eles
  proporcionam uma estrutura organizada para armazenar, recuperar, gerenciar e atualizar informações de forma confiável e escalável.</h4>
  <br />
<h4>Nesta jornada pelo reino dos bancos de dados, exploraremos os conceitos fundamentais que regem essas poderosas 
ferramentas. Desde modelos de dados até sistemas de gerenciamento de bancos de dados (SGBDs), mergulharemos nas 
principais tecnologias que moldam o cenário de armazenamento e recuperação de dados. Prepare-se para desvendar os mistérios
 por trás da arquitetura de bancos de dados e descobrir como eles capacitam aplicativos a oferecerem experiências digitais
  eficientes e eficazes. Vamos explorar juntos o fascinante mundo dos bancos de dados!</h4>
  <h1 className="text-2xl text-bold text-blue-dark">Bancos de dados Relacionais VS Não Relacionais</h1>
  <Image src={SecureDatabases} className="self-center w-[400px] mt-2 mb-2 font-bold" alt="image of representation database security"/>
        <p>Em um universo cada vez mais digital, onde a informação flui como uma corrente incessante, os bancos de dados desempenham 
            um papel crucial na organização e gestão dessas vastas quantidades de dados. Dentro desse reino digital, surgem duas 
            vertentes distintas: os bancos de dados relacionais e os não-relacionais.

Ao adentrarmos nesse ecossistema fascinante, descobrimos que a escolha entre essas duas abordagens vai muito além da mera preferência. 
É uma jornada pela qual desenvolvedores e arquitetos de sistemas navegam para decidir como estruturar e acessar informações cruciais</p>

<h1 className="text-2xl text-blue-dark font-semibold mt-2 mb-2">Bancos de Dados Relacionais: A Orquestra da Estrutura</h1>

Os bancos de dados relacionais, como MySQL, PostgreSQL e Oracle, formam a espinha dorsal de muitos sistemas há décadas. 
Caracterizados por tabelas interconectadas, esses sistemas seguem um modelo organizado e estruturado. As relações entre as tabelas 
são claramente definidas por chaves primárias e estrangeiras, proporcionando integridade e consistência aos dados.

<div className="flex justify-around">
        <Image className="w-[25%]" src={MysqlLogo} alt="mysql logo"/> <Image className="w-[25%]" src={PostgreeLogo} alt="Postgree LOGO"/> 
        <Image className="w-[25%]" src={Oracle} alt="Oracle logo"/>
</div>
<br />
<h1 className="text-2xl text-blue-dark font-semibold mt-2 mb-2">Bancos de Dados Não-Relacionais: A Liberdade Desencadeada</h1>

Por outro lado, os bancos de dados não-relacionais, exemplificados por MongoDB, Cassandra e Redis, desafiam as estruturas 
tradicionais. Abraçando a flexibilidade, esses sistemas armazenam dados de maneira mais livre, muitas vezes usando formatos como 
documentos, pares chave-valor ou grafos. Essa abordagem é particularmente vantajosa para projetos com esquemas dinâmicos ou que 
exigem escalabilidade horizontal.
<div className="flex justify-around">
        <Image className="w-[25%]" src={MongoLogo} alt="mongodb logo"/> 
        <Image className="w-[25%]" src={CassandraLogo} alt="Cassandra db LOGO"/> 
        <Image className="w-[25%]" src={RedisLogo} alt="Redis db logo"/>
</div>
<br />
<h1 className="text-2xl text-purple-700 font-bold mt-2 mb-2">Escolhendo a Melhor Trilha para seu Projeto</h1>

A escolha entre bancos de dados relacionais e não-relacionais é guiada pela natureza do projeto. Projetos que exigem consistência
 rigorosa, transações complexas e relações bem definidas muitas vezes prosperam em um ambiente relacional. Por outro lado, 
 iniciativas que priorizam escalabilidade, flexibilidade e lidam com dados semi-estruturados ou não-estruturados encontram nos bancos
  não-relacionais a sua melhor morada.
<br />
Ao final, a decisão entre essas duas abordagens não é uma batalha entre certo e errado, mas sim uma adaptação inteligente às
 necessidades específicas do projeto em questão. Então, antes de escolher a trilha, avalie as demandas do terreno que você pretende
  explorar.

  <p className="mt-6">Ao explorar o universo dos bancos de dados, desvendamos o papel vital que desempenham na era digital. Essas ferramentas não apenas armazenam, mas estruturam dados, impulsionando desde aplicativos cotidianos até sistemas corporativos complexos.

A dicotomia entre bancos de dados relacionais e não-relacionais revela escolhas estratégicas. Relacionais oferecem consistência, enquanto não-relacionais proporcionam flexibilidade. A decisão depende da natureza do projeto: consistência e relações bem definidas ou escalabilidade e liberdade estrutural.

Assim, a escolha inteligente entre essas abordagens molda a jornada digital do seu projeto. Em um mundo onde a informação é a moeda, a decisão sábia desses guardiões digitais é essencial para o sucesso tecnológico. Que essas reflexões guiem sua navegação no vasto oceano dos bancos de dados, onde cada escolha impacta a jornada digital do seu projeto.</p>
      </ContainerRep>
      <TopicsBar/>
      </ContainerDad>
        </div>
        <ScrollToTopButton/>
        </main>
    );
}*/