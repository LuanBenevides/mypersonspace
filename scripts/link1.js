function bloco1(){
    var bloco = document.getElementById("blockA"); /*Variavel padrão do bloco resetado*/
    var blocoDefault = document.getElementById("blocoPrincipal"); /*Variavel do bloco, sem interação com o menu */
    var bloco2 = document.getElementById("blockB");/*Redundancia para não ocasionar bug's com o botão 2 */
    var bloco3 = document.getElementById("blockC");/*Redundancia para não ocasionar bug's com o botão 3 */
    var bloco4 = document.getElementById("blockD");/*Redundancia para não ocasionar bug's com o botão 4 */
    var bloco5 = document.getElementById("blockE");/*Redundancia para não ocasionar bug's com o botão 5 */
    var bloco6 = document.getElementById("blockF");/*Redundancia para não ocasionar bug's com o botão 6 */
    
    if(bloco.classList.contains('link1')){
        bloco.classList.remove("link1");
        blocoDefault.classList.add("link1");
        bloco2.classList.add("link2");
        bloco3.classList.add("link3");
        bloco4.classList.add("link4");
        bloco5.classList.add("link5");
        bloco6.classList.add("link6");
    }else if(bloco.classList.contains("bloco_principal_margin")){
        bloco.classList.add("link1");
        blocoDefault.classList.remove("link1");
        bloco2.classList.add("link2");
        bloco3.classList.add("link3");
        bloco4.classList.add("link4");
        bloco5.classList.add("link5");
        bloco6.classList.add("link6");
    }
}

function bloco2(){
    var bloco2 = document.getElementById("blockB");/*Variavel padrão do bloco resetado*/
    var blocoDefault = document.getElementById("blocoPrincipal");/*Variavel do bloco, sem interação com o menu */
    var bloco = document.getElementById("blockA");/*Redundancia para não ocasionar bug's com o botão 1 */
    var bloco3 = document.getElementById("blockC");/*Redundancia para não ocasionar bug's com o botão 3 */
    var bloco4 = document.getElementById("blockD");/*Redundancia para não ocasionar bug's com o botão 4 */
    var bloco5 = document.getElementById("blockE");/*Redundancia para não ocasionar bug's com o botão 5 */
    var bloco6 = document.getElementById("blockF");/*Redundancia para não ocasionar bug's com o botão 6 */

    if(bloco2.classList.contains('link2')){
        bloco2.classList.remove("link2");
        blocoDefault.classList.add("link1");
        bloco.classList.add("link1");
        bloco3.classList.add("link3");
        bloco4.classList.add("link4");
        bloco5.classList.add("link5");
        bloco6.classList.add("link6");
    }else if(bloco2.classList.contains('bloco_principal_margin')){
        bloco2.classList.add("link2");
        blocoDefault.classList.remove("link1");
        bloco.classList.add("link1");
        bloco3.classList.add("link3");
        bloco4.classList.add("link4");
        bloco5.classList.add("link5");
        bloco6.classList.add("link6");
    }
}

function bloco3(){
    var bloco3 = document.getElementById("blockC");/*Variavel padrão do bloco resetado*/
    var blocoDefault = document.getElementById("blocoPrincipal");/*Variavel do bloco, sem interação com o menu */
    var bloco = document.getElementById("blockA");/*Redundancia para não ocasionar bug's com o botão 1 */
    var bloco2 = document.getElementById("blockB");/*Redundancia para não ocasionar bug's com o botão 2 */
    var bloco4 = document.getElementById("blockD");/*Redundancia para não ocasionar bug's com o botão 4 */
    var bloco5 = document.getElementById("blockE");/*Redundancia para não ocasionar bug's com o botão 5 */
    var bloco6 = document.getElementById("blockF");/*Redundancia para não ocasionar bug's com o botão 6 */

    if(bloco3.classList.contains('link3')){
        bloco3.classList.remove("link3");
        blocoDefault.classList.add("link1");
        bloco.classList.add("link1");
        bloco2.classList.add("link2");
        bloco4.classList.add("link4");
        bloco5.classList.add("link5");
        bloco6.classList.add("link6");
    }else if(bloco3.classList.contains('bloco_principal_margin')){
        bloco3.classList.add("link3");
        blocoDefault.classList.remove("link1");
        bloco.classList.add("link1");
        bloco2.classList.add("link2");
        bloco4.classList.add("link4");
        bloco5.classList.add("link5");
        bloco6.classList.add("link6");
    }
}
function bloco4(){
    var bloco4 = document.getElementById("blockD");/*Variavel padrão do bloco resetado*/
    var blocoDefault = document.getElementById("blocoPrincipal");/*Variavel do bloco, sem interação com o menu */
    var bloco = document.getElementById("blockA");/*Redundancia para não ocasionar bug's com o botão 1 */
    var bloco2 = document.getElementById("blockB");/*Redundancia para não ocasionar bug's com o botão 2 */
    var bloco3 = document.getElementById("blockC");/*Redundancia para não ocasionar bug's com o botão 3 */
    var bloco5 = document.getElementById("blockE");/*Redundancia para não ocasionar bug's com o botão 5 */
    var bloco6 = document.getElementById("blockF");/*Redundancia para não ocasionar bug's com o botão 6 */

    if(bloco4.classList.contains('link4')){
        bloco4.classList.remove("link4");
        blocoDefault.classList.add("link1");
        bloco.classList.add("link1");
        bloco2.classList.add("link2");
        bloco3.classList.add("link3");
        bloco5.classList.add("link5");
        bloco6.classList.add("link6");
    }else if(bloco4.classList.contains('bloco_principal_margin')){
        bloco4.classList.add("link4");
        blocoDefault.classList.remove("link1");
        bloco.classList.add("link1");
        bloco2.classList.add("link2");
        bloco3.classList.add("link3");
        bloco5.classList.add("link5");
        bloco6.classList.add("link6");
    }
}

function bloco5(){
    var bloco5 = document.getElementById("blockE");/*Variavel padrão do bloco resetado*/
    var blocoDefault = document.getElementById("blocoPrincipal");/*Variavel do bloco, sem interação com o menu */
    var bloco = document.getElementById("blockA");/*Redundancia para não ocasionar bug's com o botão 1 */
    var bloco2 = document.getElementById("blockB");/*Redundancia para não ocasionar bug's com o botão 2 */
    var bloco3 = document.getElementById("blockC");/*Redundancia para não ocasionar bug's com o botão 3 */
    var bloco4 = document.getElementById("blockD");/*Redundancia para não ocasionar bug's com o botão 4 */
    var bloco6 = document.getElementById("blockF");/*Redundancia para não ocasionar bug's com o botão 6 */

    if(bloco5.classList.contains('link5')){
        bloco5.classList.remove("link5");
        blocoDefault.classList.add("link1");
        bloco.classList.add("link1");
        bloco2.classList.add("link2");
        bloco3.classList.add("link3");
        bloco4.classList.add("link4");
        bloco6.classList.add("link6");
    }else if(bloco5.classList.contains('bloco_principal_margin')){
        bloco5.classList.add("link5");
        blocoDefault.classList.remove("link1");
        bloco.classList.add("link1");
        bloco2.classList.add("link2");
        bloco3.classList.add("link3");
        bloco4.classList.add("link4");
        bloco6.classList.add("link6");
    }
}
function bloco6(){
    var bloco6 = document.getElementById("blockF");/*Variavel padrão do bloco resetado*/
    var blocoDefault = document.getElementById("blocoPrincipal");/*Variavel do bloco, sem interação com o menu */
    var bloco = document.getElementById("blockA");/*Redundancia para não ocasionar bug's com o botão 1 */
    var bloco2 = document.getElementById("blockB");/*Redundancia para não ocasionar bug's com o botão 2 */
    var bloco3 = document.getElementById("blockC");/*Redundancia para não ocasionar bug's com o botão 3 */
    var bloco4 = document.getElementById("blockD");/*Redundancia para não ocasionar bug's com o botão 4 */
    var bloco5 = document.getElementById("blockE");/*Redundancia para não ocasionar bug's com o botão 5 */

    if(bloco6.classList.contains('link6')){
        bloco6.classList.remove("link6");
        blocoDefault.classList.add("link1");
        bloco.classList.add("link1");
        bloco2.classList.add("link2");
        bloco3.classList.add("link3");
        bloco4.classList.add("link4");
        bloco5.classList.add("link5");
    }else if(bloco6.classList.contains('bloco_principal_margin')){
        bloco6.classList.add("link6");
        blocoDefault.classList.remove("link1");
        bloco.classList.add("link1");
        bloco2.classList.add("link2");
        bloco3.classList.add("link3");
        bloco4.classList.add("link4");
        bloco5.classList.add("link5");
    }
}