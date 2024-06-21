function exe1(){
    var age=document.getElementById("age").value;
    if (age>=18){
        document.getElementById(
            "resultat").value="Majeur";
    }
    else {
        document.getElementById(
            "resultat").value="Mineur";
    }
}