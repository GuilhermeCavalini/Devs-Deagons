import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arquiero } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arquiero ('Bruno', 7, 8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10,'ar', 4, 8)
const guerreiroJose = new Guerreiro('Jose', 8)

const personagens = [magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiroJose]

new PersonagemView(personagens).render()
