const App = () => (
  <main>
    <img src="/cruzeiro-edu.png" alt="" />

    <section className="info">
      <div className="container-validation">
        <div className="wrapper">
          <h2 className="label">Código de validação</h2>
          <p>
            <strong>370N713X122H</strong>
          </p>
        </div>
      </div>

      <div style={{ height: 32 }} />

      <div className="container-info">
        <div className="wrapper-info">
          <h2 className="label">Nome</h2>
          <p>
            <strong>GIULIA RAFAELA BIANCHINI</strong>
          </p>
        </div>
        <div className="wrapper-info">
          <h2 className="label">Curso</h2>

          <p className="course-name">
            <strong>
              SUPERIOR DE TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
            </strong>
          </p>
        </div>

        <div className="wrapper-footer">
          <div className="wrapper-info">
            <h2 className="label">RGM</h2>
            <p>
              <strong>03324590-8</strong>
            </p>
          </div>
          <div className="wrapper-info">
            <h2 className="label">CPF</h2>
            <p>
              <strong>081.319.789-90</strong>
            </p>
          </div>
          <div className="wrapper-info">
            <h2 className="label">Data de validade</h2>
            <p>
              <strong>31/12/2024</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export { App };
