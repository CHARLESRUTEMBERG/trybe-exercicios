window.onload = () => {
  // função que seleciona o contenier de paragrafos para a mudança
  // de cor de fundo e coloca o dado no localStorage.
  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color
    localStorage.setItem("backgroundColor", color)
  }
  // função que seleciona os paragrafos para a mudança
  // de cor da fonte e coloca o dado no localStorage.
  const setFontColor = (color) => {
    // pega os dados do paragrafo e coloca em um variável array
    let paragraphs = document.querySelectorAll('.paragraph');
    // como é um array é preciso de um laço de repetição para
    // para percorrer os paragrafos
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color;
    }
    localStorage.setItem('fontColor', color);
  }
  const setFontSizer = (size) => {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size;
    }
    localStorage.setItem('fontSize', size);
  }
  const setLineHeight = (height) => {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height;
    }
    localStorage.setItem('lineHeight', height);
  }
  const setFontFamily = (family) => {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family
    }
    localStorage.setItem('fontFamily', family);
  }
  // preparando o addEventListener para quando clicar no botão da cor de fundo ocorrer a mudança de cor
  let backgroundColorButtons = document.querySelectorAll('#background-color>button');
  for (let index =  0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener('click', (event) => {
      setBackgroundColor(event.target.innerHTML);
    })
  }
  //cor do texto
  let fontColorButtons = document.querySelectorAll('#font-color>button');
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener('click', (event) => {
      setFontColor(event.target.innerHTML);
    })
  }
  //tamanho da fonte
  let fontSizerButtons = document.querySelectorAll('#font-size>button');
  for (let index = 0; index < fontSizerButtons.length; index += 1) {
    fontSizerButtons[index].addEventListener('click', (event) => {
      setFontSizer(event.target.innerHTML);
    });
  };
  //Espaçamento entre linhas
  let lineHeightButtons = document.querySelectorAll("#line-height>button")
      for (let index = 0; index < lineHeightButtons.length; index += 1) {
        lineHeightButtons[index].addEventListener("click", (event) => {
          setLineHeight(event.target.innerHTML)
        });
  }
  // Tipos de fonte
  let fontFamilyButtons = document.querySelectorAll('#font-family>button');
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener('click', (event) => {
      setFontFamily(event.target.innerHTML);
    });
  }
  const initialize = () => {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) setBackgroundColor(backgroundColor);

    let fontColor = localStorage.getItem('fontColor');
    if (fontColor) setFontColor(fontColor);

    let fontSize = localStorage.getItem('fontSize');
    if (fontSize) setLineHeight(lineHeight);

    let lineHeight = localStorage.getItem('lineHeight');
    if (lineHeight) setFontFamily(lineHeight);

    let fontFamily = localStorage.getItem('fontFamily');
    if (fontFamily) setFontFamily(fontFamily);
  }
  initialize();
}
