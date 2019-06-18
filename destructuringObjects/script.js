const personalInformation = {
    fn: 'Dylan',
    ln: 'Bob'
}

const {fn, ln} = personalInformation;
var text = `${fn} ${ln}`;
document.getElementById('eg').innerHTML= `${fn} ${ln}`;
document.getElementById('id').innerHTML= text;