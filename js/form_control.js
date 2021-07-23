"use strict"

document.addEventListener('DOMContentLoaded', function (){
    const form_1 = document.getElementById('form-1');
    const form_2 = document.getElementById('form-2');

    form_1.addEventListener('submit', formSend);
    form_2.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let  error_1 = formValidate_1(form_1);
        let  error_2 = formValidate_2(form_2);

        let formData_1 = new FormData(form_1);
        let formData_2 = new FormData(form_2);

        if (error_1===0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData_1
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form_1.reset();
            }else {
                alert('Ошибка JS-1');
            }
        }else {
            if (error_2===0){
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData_2
                });
                if (response.ok){
                    let result = await response.json();
                    alert(result.message);
                    form_2.reset();
                }else {
                    alert('Ошибка JS-2');
                }
            }else {
                alert('Заполните обязательные поля');
            }
        }
    }

    function formValidate_1(e) {
        let error_1 = 0;
        let formReq = document.querySelectorAll('.js_req_1');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === '') {
                formAddError(input);
                error_1++;
            }
        }
        return error_1;
    }


    function formValidate_2(e) {
        let error_2 = 0;
        let formReq = document.querySelectorAll('.js_req_2');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('js_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error_2++;
                }
            }else {
                if (input.value === '') {
                    formAddError(input);
                    error_2++;
                }
            }
        }
        return error_2;
    }

    function formAddError(input) {
        input.parentElement.classList.add('js_error');
        input.classList.add('js_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('js_error');
        input.classList.remove('js_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});