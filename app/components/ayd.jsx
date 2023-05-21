
import resina1 from '../../public/img/Diseñoresina/resina1.jpeg'
import resina2 from '../../public/img/Diseñoresina/resina2.jpeg'

function Slide(
 { imagen,imagen2}
  ) {
  const slide = () => {
    const slideValue = document.getElementById("slider").value;
    document.getElementById("my-img").style.clipPath = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`;
  };

  return (
    <>
        <style >
          {`
          .containerAYD {
            height: 55vmin;
            width: 90vmin;
            position: relative;
            overflow: hidden;
          }
          .imgAYD  {
            width: 100%;
            height: 100%;
            position: absolute;
            border-radius: 10px;
          }
          #my-img {
            clip-path: polygon(0 0 , 50% 0, 50% 100%, 0 100%);
          }
          #slider {
            position: relative;
            -webkit-appearance: none;
            width: calc(100% + 40px);
            height: 100%;
            margin-left: -20px;
            background-color: transparent;
            outline: none;
          }
          #slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 150px;
            width: 150px;
            background-size: contain;
            cursor: pointer;
            visibility: hidden;
          }
          `}
        </style>

        <div className="containerAYD contenedor">
          <img className='imgAYD' src={imagen} />
          <img className='imgAYD' id="my-img" src={imagen2 } />
          <input type="range" min="0" max="100" value="50" id="slider" onInput={slide} />
        </div>

        <div className="container contenedor row text-center">
          <div className="col-6">
            <p className='font-weight-bold'>Antes</p>
          </div>
          <div className="col-6">
            <p className='font-weight-bold'>Después</p>
          </div>
        </div>

        <script>
          {`
          function slide() {
            let slideValue = document.getElementById("slider").value;
            document.getElementById("my-img").style.clipPath = \`polygon(0 0, \${slideValue}% 0, \${slideValue}% 100%, 0 100%)\`;
            console.log(\`polygon(0 0, \${slideValue}% 0, \${slideValue}% 100%, 0 100%)\`);
          }
          `}
        </script>
    </>
  );
}

export default Slide;
