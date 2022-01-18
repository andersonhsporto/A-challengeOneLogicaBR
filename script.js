const criptograph = document.querySelector('#criptograph')
const descriptograph = document.querySelector('#descriptograph')
const copy = document.querySelector('#copy')
const response = document.querySelector('#response');


const tradutor = (regex, obj) => {
    let text = document.querySelector('#message')
    if(!/^[a-z0-9 ]*$/.test(text.value)) {
        alert('Informe um texto sem acentuação, caracteres especiais ou letras maiúsculas!')
        return 
    }
    document.querySelector('#response').innerHTML = obj.a ? 'criptografada:' : 'descriptografada:'
    
    response.value = text.value.replace(regex, key => obj[key])
    text.value = ''
}

// $criptograph.prop('disabled', true);

criptograph.addEventListener('click', () => {
    tradutor(/[aeiou]/g, 
        {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'})
})


descriptograph.addEventListener('click', () => {
    tradutor(/ai|enter|imes|ober|ufat/g, 
        {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'})
})


copy.addEventListener('click', () => {
    response.select();
    response.setSelectionRange(0, 99999); /*For mobile devices */
    navigator.clipboard.writeText(response.value);
})
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador:
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
