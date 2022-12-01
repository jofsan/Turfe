var volta = 0
function largada() {
    var sorteCV1 = 0
    var sorteCV2 = 0
    var sorteCV3 = 0
    var somaSorteCV1 = 0
    var somaSorteCV2 = 0
    var somaSorteCV3 = 0
    menssagem.innerHTML = ` `

    if (volta <= 8) {
        volta++
    }

    for (var index = 0; index < volta; index++) {
        sorteCV1 = (Math.random() * 2 + 7);
        sorteCV2 = (Math.random() * 2 + 7);
        sorteCV3 = (Math.random() * 2 + 7);
        somaSorteCV1 += sorteCV1
        somaSorteCV2 += sorteCV2
        somaSorteCV3 += sorteCV3
        c1.style.marginLeft = `${(somaSorteCV1 * 2).toFixed(1)}px`;
        c2.style.marginLeft = `${(somaSorteCV2 * 2).toFixed(1)}px`;
        c3.style.marginLeft = `${(somaSorteCV3 * 2).toFixed(1)}px`;
        console.log((sorteCV1 * 2).toFixed(0))
        if (volta < 8) {
            c1.style.backgroundColor = "rgb(0, 59, 0)";
            c2.style.backgroundColor = "rgb(0, 59, 0)";
            c3.style.backgroundColor = "rgb(0, 59, 0)";
        }

        if (volta > 7) {
            if (somaSorteCV1 < somaSorteCV2 && somaSorteCV1 < somaSorteCV3) {
                if (somaSorteCV2 < somaSorteCV3) {
                    c2.style.backgroundColor = "blue";
                    c2.style.marginLeft = "150px";
                    menssagem.innerHTML += `<b><u>Em 2º Lugar</u> –</b> Cavalo 2<br>`
                    menssagem.innerHTML += `<b><u>Em 3º Lugar</u> –</b> Cavalo 3<br>`

                } else {
                    c3.style.backgroundColor = "blue";
                    c3.style.marginLeft = "150px";
                    menssagem.innerHTML += `<b><u>Em 2º Lugar</u> –</b> Cavalo 3`
                    menssagem.innerHTML += `<b><u>Em 3º Lugar</u> –</b> Cavalo 2`
                }
                menssagem.innerHTML += `<b><u>Em 1º Lugar</u> –</b> Cavalo1`
                c1.style.marginLeft = "300px";
                c1.style.backgroundColor = "yellow";
                volta = 0
            } else if (somaSorteCV2 < somaSorteCV3 && somaSorteCV2 < somaSorteCV1) {
                if (somaSorteCV1 < somaSorteCV3) {
                    c1.style.backgroundColor = "blue";
                    c1.style.marginLeft = "150px";
                    menssagem.innerHTML += `<b><u>Em 2º Lugar</u> –</b> Cavalo 1<br>`
                    menssagem.innerHTML += `<b><u>Em 3º Lugar</u> –</b> Cavalo 3<br>`

                } else {
                    c3.style.backgroundColor = "blue";
                    c3.style.marginLeft = "150px";
                    menssagem.innerHTML += `<b><u>Em 2º Lugar</u> –</b> Cavalo 3`
                    menssagem.innerHTML += `<b><u>Em 3º Lugar</u> –</b> Cavalo 1`

                }
                menssagem.innerHTML += `<b><u>Em 1º Lugar</u> –</b> Cavalo2`
                c2.style.marginLeft = "300px";
                c2.style.backgroundColor = "yellow";
                volta = 0
            } else {
                if (somaSorteCV1 < somaSorteCV2) {
                    c1.style.backgroundColor = "blue";
                    c1.style.marginLeft = "150px";
                    menssagem.innerHTML += `<b><u>Em 2º Lugar</u> –</b> Cavalo 1<br>`
                    menssagem.innerHTML += `<b><u>Em 3º Lugar</u> –</b> Cavalo 2 <br>`
                } else {
                    c2.style.backgroundColor = "blue";
                    c2.style.marginLeft = "150px";
                    menssagem.innerHTML += `<b><u>Em 2º Lugar</u> –</b> Cavalo 2<br>`
                    menssagem.innerHTML += `<b><u>Em 3º Lugar</u> –</b> Cavalo 1<br>`
                }
                menssagem.innerHTML += `<b><u>Em 1º Lugar</u> –</b> Cavalo 3`
                c3.style.marginLeft = "300px";
                c3.style.backgroundColor = "yellow";
                volta = 0
            }
            break
        }

        menssagem.innerHTML += `<b>Volta ${index + 1}</b>-Cavalo01 – ${(sorteCV1).toFixed(1)} – ${(somaSorteCV1).toFixed(1)} – Cavalo02 – 
            ${(sorteCV2).toFixed(1)}  
            – ${(somaSorteCV2).toFixed(1)} - Cavalo03 – ${(sorteCV3).toFixed(1)}  – ${(somaSorteCV3).toFixed(1)}<br> `
    }

}