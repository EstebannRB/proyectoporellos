var input = document.getElementsByClassName('formulario__input');
for(var i =0; i < inputs.length; i++){
input[i].addEventListener('keyup', function(){
    if(this.value.length>=1) {
        this.nextElementSibling.classlist.add('fijar')
    } else {
        this.nextElementSibling.classlist.remove('fijar')
    }
})

}