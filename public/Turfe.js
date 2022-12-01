var volta =0
    function largada() {
        var sorteCV1 = 0
        var sorteCV2 = 0
        var sorteCV3 = 0
        var somaSorteCV1 = 0
        var somaSorteCV2 = 0
        var somaSorteCV3 = 0
        menssagem.innerHTML = ` `
       
        volta ++

        for (var index = 0; index < volta; index++) {
            sorteCV1 = (Math.random() * 2 + 7);
            sorteCV2 = (Math.random() * 2 + 7);
            sorteCV3 = (Math.random() * 2 + 7);
            somaSorteCV1 += sorteCV1
            somaSorteCV2 += sorteCV2
            somaSorteCV3 += sorteCV3
            if(volta == 8){
                break
            }
        
            menssagem.innerHTML += `<b>Volta ${index+1}</b>Cavalo01 – ${(sorteCV1).toFixed(1)} – ${(somaSorteCV1).toFixed(1)} – Cavalo02 – 
            ${(sorteCV2).toFixed(1)}  
            – ${(somaSorteCV2).toFixed(1)} - Cavalo03 – ${(sorteCV3).toFixed(1)}  – ${(somaSorteCV3).toFixed(1)}<br> `
        }

    }