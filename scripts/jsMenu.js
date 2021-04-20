
function openCloseMenu(){

    var receptor_menu = document.getElementById('menu_00');
    var margin_main = document.getElementById("blocoPrincipal");
    
    var bloco = document.getElementById("blockA");/*Redundancia para evitar distorção do layout quando selecionar o bt 1 */
    var bloco2 = document.getElementById("blockB");/*Redundancia para evitar distorção do layout quando selecionar o bt 2 */
    var bloco3 = document.getElementById("blockC");/*Redundancia para evitar distorção do layout quando selecionar o bt 3 */
    var bloco4 = document.getElementById("blockD");/*Redundancia para evitar distorção do layout quando selecionar o bt 4 */
    var bloco5 = document.getElementById("blockE");/*Redundancia para evitar distorção do layout quando selecionar o bt 5 */
    var bloco6 = document.getElementById("blockF");/*Redundancia para evitar distorção do layout quando selecionar o bt 6 */
    if(receptor_menu.classList.contains('menuPadrao')){
        receptor_menu.classList.add("menu");
        receptor_menu.classList.remove("menuPadrao");
        margin_main.classList.add("bloco_principal_margin");
        margin_main.classList.remove("bloco_principal");

    }else if(receptor_menu.classList.contains('menu')){
        receptor_menu.classList.add("menuPadrao");
        receptor_menu.classList.remove("menu");
        margin_main.classList.add("bloco_principal");
        margin_main.classList.remove("bloco_principal_margin");

        /*Lógica para evitar a inconsistência do layout na alternância dos botões*/
        margin_main.classList.remove("link1");
        bloco.classList.add("link1");
        bloco2.classList.add("link2");
        bloco3.classList.add("link3");
        bloco4.classList.add("link4");
        bloco5.classList.add("link5");
        bloco6.classList.add("link6");
    }

}