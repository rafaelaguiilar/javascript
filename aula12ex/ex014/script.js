function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
            // BOM DIA!
            img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
            // BOA TARDE!
            img.src = 'fototarde.png'
    } else {
            //BOA NOITE!  
            img.src = 'fotonoite.png'  
    }
}