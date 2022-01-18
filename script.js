const decriptString = (regex, obj) => {
    let text = document.querySelector('#message')
    if(!/^[a-z0-9 ]*$/.test(text.value)) {
        return ;
    }
    document.querySelector('#response').innerHTML = obj.a ? 'criptografada:' : 'descriptografada:'
    response.value = text.value.replace(regex, key => obj[key])
    text.value = ''
}

const cript = document.querySelector('#criptograph')
const descriptograph = document.querySelector('#descriptograph')
const copy = document.querySelector('#copy')
const response = document.querySelector('#response');


cript.addEventListener('click', () => {
    decriptString(/[aeiou]/g,
        {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'})
})


descriptograph.addEventListener('click', () => {
    decriptString(/ai|enter|imes|ober|ufat/g, 
        {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'})
})

copy.addEventListener('click', () => {
    response.select();
    response.setSelectionRange(0, 99999); /*For mobile devices */
    navigator.clipboard.writeText(response.value);
})