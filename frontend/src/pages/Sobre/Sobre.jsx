import React from "react";
import "./sobre.css";

export default function Sobre() {
  return (
    <>
      <section className="secao-apresentacao">
        <div className="container">
          <p className="descricao">
            O AMICE Imports é uma aplicação moderna desenvolvida para facilitar
            o gerenciamento, cadastro e importação de produtos. O sistema une
            um frontend responsivo em React com um backend robusto em Flask,
            proporcionando desempenho, organização e escalabilidade.
          </p>
        </div>
      </section>

      <section className="secao-funcionalidades">
        <div className="container">
          <h2 className="titulo-secao">Funcionalidades Principais</h2>

          <div className="grid-funcionalidades">
            <div className="card-funcionalidade">
              <div className="icon-funcionalidade">
                <i className="fas fa-boxes-stacked"></i>
              </div>
              <h3>Gerenciamento de Produtos</h3>
              <p>
                Cadastro, edição e visualização de produtos com controle de
                estoque, preços e status.
              </p>
            </div>

            <div className="card-funcionalidade">
              <div className="icon-funcionalidade">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <h3>Importação de Dados</h3>
              <p>
                Importação rápida e eficiente de produtos, ideal para lidar com
                grandes volumes de informações.
              </p>
            </div>

            <div className="card-funcionalidade">
              <div className="icon-funcionalidade">
                <i className="fas fa-database"></i>
              </div>
              <h3>Persistência de Dados</h3>
              <p>
                Armazenamento confiável de informações para fácil manutenção
                e recuperação de dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="secao-equipe">
        <div className="container">
          <h2 className="titulo-secao">Equipe de Desenvolvimento</h2>
          <p className="subtitulo-secao">
            Pessoas responsáveis por tornar o AMICE Imports realidade
          </p>

          <div className="grid-equipe">
            <div className="card-dev">
              <div className="img-dev-container">
                <img src="/images/devs/marcos.jpeg" alt="Marcos" className="img-dev" />
              </div>
              <h3 className="nome-dev">Marcos</h3>
            </div>

            <div className="card-dev">
              <div className="img-dev-container">
                <img src="/images/devs/carla.jpg" alt="Carla" className="img-dev" />
              </div>
              <h3 className="nome-dev">Carla</h3>
            </div>

            <div className="card-dev">
              <div className="img-dev-container">
                <img src="/images/devs/ingrid.jpeg" alt="Ingrid" className="img-dev" />
              </div>
              <h3 className="nome-dev">Ingrid</h3>
            </div>

            <div className="card-dev">
              <div className="img-dev-container">
                <img src="/images/devs/alex.jpg" alt="Alex" className="img-dev" />
              </div>
              <h3 className="nome-dev">Alex</h3>
            </div>

            <div className="card-dev">
              <div className="img-dev-container">
                <img src="/images/devs/emmily.jpg" alt="Emmily" className="img-dev" />
              </div>
              <h3 className="nome-dev">Emmily</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
