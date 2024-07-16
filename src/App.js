function App() {
    
  return (
    <div className="App">
          <header className="d-flex justify-content-between align-items-center">
            <p className="my-auto">aluraflix</p>
            <section>
              <button className='homeButton'>home</button>
              <button className='newvideoButton' id="newvideoButton">novo vídeo</button>
            </section>
          </header>
          <main className='banner'>
            <section className="black d-flex align-items-end">
              <div className="ballon container-fluid d-flex p-5 gap-5 justify-content-between">
                <div className="col-sm-12 col-md-6 d-flex flex-column">
                  <div className="makeArtistica fs-1 text-center">make artistica</div>
                  <div className="makeArtisticaText text-white">
                    <p className="title fs-2">maquiagem artistica de terror</p>
                    <p className="text">Eu estou aqui para dizer que neste vídeo a gente vai aprender a começar uma maquiagem artística inspirada no tema de terror, com dicas incríveis para você arrasar no Halloween ou em qualquer evento assustador. Vamos ver algumas técnicas sobre como conseguir efeitos realistas e de quebra conhecer alguns produtos sensacionais para fazer a sua maquiagem durar mais. Tudo em 22 minutos neste vídeo feito com todo o carinho do mundo para te ajudar a criar um visual aterrorizante!</p>
                  </div>
                </div>

                <iframe className="col-sm-10 col-md-5" src="https://www.youtube.com/embed/1cIZJKBRXrI?si=mkVOnz1uUVkOGhrf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </section>
          </main>

          <section className="editarVideo" id="editVideo">
            <i className="bi-x-circle fs-1" id="closer"/>
            <div>

              <h1 className="">editar card:</h1>
              <p className="fs-5">nome:</p>
              <input type="text" id="nome"/>
              <p className="fs-5">link do vídeo:</p>
              <input type="text" id="linkVideo" />
              <p className="fs-5">link da imagem de capa:</p>
              <input type="text" id="linkImage"/>
              <p className="fs-5">categoria:</p>
              <input type="text" id="categoria"/>

            </div>
            <div className="buttons">
              <button className="salvar" id="salvar">salvar</button>
              <button className="limpar" id="limpar">limpar</button>
            </div>
          </section>


          <section className="newVideo p-5" id="newVideo">
            <i className="bi-x-circle fs-1 cursor" id="closerNewVideo"/>
            <h1 className="m-5 mb-4 text-uppercase text-center">novo vídeo</h1>
            <p className="text-uppercase text-center mb-5">complete o fomulário para criar um novo card de vídeo</p>
            <hr/>
            <h2>Criar Card</h2>
            <hr/>
            <div className="d-flex gap-5 justify-content-evenly">
              <div className="d-flex flex-column col-12 col-sm-12 col-lg-5">
                <p>Título</p>
                <input type="text" required id="nomeNovo"/>
              </div>
              <div className="d-flex flex-column col-12 col-sm-12 col-lg-5">
                <p>Categoria</p>
                <input type="text" required id="categoriaNovo"/>
              </div>
            </div>
            <div className="d-flex gap-5 justify-content-evenly m-5">
              <div className="d-flex flex-column col-12 col-sm-12 col-lg-5">
                <p>Link da imagem:</p>
                <input type="text" required id="linkImageNovo"/>
              </div>
              <div className="d-flex flex-column col-12 col-sm-12 col-lg-5">
                <p>Link do vídeo:</p>
                <input type="text" required id="linkVideoNovo"/>
              </div>
            </div>
            <div className="d-flex justify-content-evenly">
              <button className="salvar" id="salvarNewVideo">salvar</button>
              <button className="limpar" id="limparNewVideo">limpar</button>
            </div>
          </section>
    </div>
  );
}

export default App;
