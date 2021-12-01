import logo from './logo.svg';
import phage from './phage.svg';
import './App.css';

function App() {
    console.log("Buenas buenas gente linda")
  return (
    <div className="App">
      <header className="App-header">
        <div  className="App-logo" alt="logo" >
    🧬∅ Karen Palacio ∅🧬
      </div>
        <p className="title">
        Laboratorio de live coding_<br />+]+]+[+[+<br />
        <b>Visuales con Hydra</b>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Roboto+Mono&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
      <title>Santo Noise Hydra </title>
      </header>
      <body>
            <section>
          <h1 className="section-title">
          ☞ info general 
          </h1>
              <b>Lugar:</b> La cúpula. Humberto Primo 14, depto 7. Córdoba, Argentina<br />
              <b>Día:</b> Martes 29 de Noviembre, 2021.<br />
              <b>Horario:</b> de 10:30 a 14:30 hs.<br />
              <b>No se asumirán conocimientos previos</b><br />
              <b>Requisitos:</b> llevar compu. En lo posible, llevar zapatillas, alargadores, etc.<br /><br />
               <b>Descripción:</b> <br /><p className="descripcion">Le livecoder de visuales puede, en vivo, a través de la programación improvisada, generar juegos semánticos con el espacio y los sonidos de un evento. Puede contrastar, reforzar o resemantizar. Puede interactuar con la arquitectura, puede dirigir la mirada, y puede transmitir información con intención. También puede proyectar lindas luces de colores. <br />
      En este laboratorio se va a introducir a Hydra; el proyecto de Software Libre de Olivia Jack ( <a href='https://www.instagram.com/o_jack/' target="_blank">@o_jack</a> ), en un formato vivencial, práctico y experimental. <br />
¿Qué implica programar visuales? ¿Qué implica hacer una performance en vivo? ¿Cómo se generan sentidos a través de la práctica? </p><br />

            </section>
            <section>
          <h1 className="section-title">
          ☞ apuntes de clase
          </h1>
      <a href="https://docs.google.com/presentation/d/1or4vHQNbCbXCh4Smn3_J0GQL1Rrb_k-80J3d0bqBZX4/edit?usp=sharing" target="_blank">Filminas de la clase</a><br />
     <i> pronto más links... TM</i>
            </section>
            <section>
          <h1 className="section-title">
          ☞ links
          </h1>
      <a href='https://github.com/ojack/hydra' target="_blank"> Código fuente de hydra + instrucciones de instalación </a><br />
      <a href='https://hydra.ojack.xyz/'  target="_blank"> Usar hydra online</a><br />
      <a href='https://github.com/ojack/hydra/blob/main/docs/funcs.md'  target="_blank"> Lista de funciones/módulos de hydra + sus parámetros</a><br />
     <i> pronto más links... TM</i>
            </section>
      </body>
            <footer>
          <h1 className="section-title">
         ☞ contacto 
          </h1>
        <b>Karen Palacio</b> // 
      <a href='https://www.instagram.com/kardaver/' target="_blank"> instagram.com/kardaver</a> // 
      karen.palacio.1994@gmail.com<br /><br />GAGTTGCCGGGA<br /><br />
      <img src={phage} alt="bacteriofago" /><br />
            </footer>
    </div>
  );
}

export default App;
