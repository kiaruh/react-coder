window.addEventListener('load', function(){
    let form = document.querySelector('.contact-form')
    let mensajeEmail = document.querySelector('.email-text-warning')
    let email = document.querySelector('.email')

    let mensajeComment = document.querySelector('.comment-text-warning')
    let comment = document.querySelector('.comment')

    email.addEventListener('input', validateEmail, false)
    email.addEventListener('blur', validateEmail, false)

    comment.addEventListener('input', validateComment, false)
    comment.addEventListener('blur', validateComment, false)

    let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validateEmail() 
        validateComment()
    })

    function validateEmail(e) {
        if (!email.value) {
            mensajeEmail.innerHTML = 'Escribe tu Email'
        } else if (!regexEmail.test(email.value)) {
            mensajeEmail.innerHTML = 'El formano no es del tipo email'
        } else {
            mensajeEmail.innerHTML = ' '
        }
    }

    function validateComment(e) {
        if (!comment.value) {
            mensajeComment.innerHTML = 'Escribe tu comentario'
        } else {
            mensajeComment.innerHTML = ' '
            form.addEventListener('submit', () => form.submit())
        }
    }

})