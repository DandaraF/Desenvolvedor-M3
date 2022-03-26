{
  /* <script>

      function OpenColors(){

        ShowButtonClose();
        colors = ["amarelo", "azul", "branco", "cinza", "laranja", 
                  "verde", "vermelho", "preto", "rosa", "vinho"]

        const color = colors.map((color, index) => {
        return `
          <input type="checkbox" id=${color} name=${color} value=${color}>
          <label for=${color}> ${color}</label>
       `;
      });

        document.querySelector("#checkbox-colors").innerHTML = color.join("");
      }

      function ShowButtonClose(){

        const element = document.getElementById("btn-colors");
        element.parentNode.removeChild(element);

        const btnCloser = document.getElementById("colors");
        btnCloser.innerHTML = '<button onclick="CloseColors()">V</button>'
      }

      function CloseColors(){
        const element = document.getElementById("colors");
        element.parentNode.removeChild(element);
        
        const optionsCheckbox = document.getElementById("checkbox-colors");
        optionsCheckbox.parentNode.removeChild(optionsCheckbox);

        const btnOpen = document.getElementById("colors");
        btnOpen.innerHTML = '<button id="btn-colors" onclick="OpenColors()">X</button>'
      }
       

    </script> */
}
