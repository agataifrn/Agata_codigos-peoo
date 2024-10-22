const url = "https://worldtimeapi.org/api/timezone/"
const select = document.getElementById('timezones');
const resultado = document.getElementById('resultado');

fetch(url)
      .then(response => response.json())
      .then(timezones => {
        timezones.forEach (timezone => {
            const option = document.createElement('option');
            option.value = timezone;
            option.textContent = timezone;
            select.appendChild(option);
        });
});
// Recupera as timezones


function exibir_fuso() {
    const timezone = document.getElementById('timezones').value;
    const urltimezone = `https://worldtimeapi.org/api/timezone/${timezone}`;

    fetch(urltimezone)
        .then(response => response.json())
        .then(fuso => {
                const datetime = fuso.datetime;
                let [data, hora] = datetime.split('T');
                let [ano, mes, dia] = data.split('-');
                
                hora = hora.split('.')[0];
                data = `${dia}/${mes}/${ano}/`;
                
                resultado.innerHTML +=
                 `<br><b>${timezone}</b>: ${data} ${hora} (${datetime})<br>`
        });
}
// Lista as timezones
