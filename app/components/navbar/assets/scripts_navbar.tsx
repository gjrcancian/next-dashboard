export class ScriptsNavbar {
        constructor() {
          // Se necessário, você pode inicializar coisas aqui
        }
      
         exibirEsconderSubMenu(sub_menu = '') {
          const minhaDiv = document.getElementById(sub_menu);
      
          if (minhaDiv) {
            if (minhaDiv.classList.contains("hidden")) {
              // Se a classe "hidden" existir, remova-a.
              minhaDiv.classList.remove("hidden");
            } else {
              // Se a classe "hidden" não existir, inclua-a.
              minhaDiv.classList.add("hidden");
            }
          }
        }
      }