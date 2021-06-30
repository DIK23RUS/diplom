// 1.Jquery не запустится, пока не будет готов html документ
jQuery('document').ready(function(){ 
    
    const   noteTitleEl = $('.js-noteTitle'),
            noteTextEl = $('.js-note'),
            noteListEl = $('.js-noteList'),
            emptyListEl = $('.js-empty-list'),
            addedNoteEl = $('.js-addedNote'),
            formEl = $('.js-form')
    
    // 2.Создаем функцию с именем addNote
    function addNote(){ 
    
        // 3.Вводим переменную title и note с соответствующими значениями
        const noteTitle = noteTitleEl.val(), 
              noteText = noteTextEl.val()
    
            // 6.Прячем надпись "Список пуст..."
            emptyListEl.hide();
            
            // 7.После элемента с классом .toDoList вставляются указаные элементы. То есть, добавляем комментарий. Для упрощения, верстаем в html, потом переносим сюда.
            noteListEl.append(`

                    <li class="addet-toDoList-item js-addedNote">
                        <article>
                            <header class="container">
                                <h3 class="title">${noteTitle}</h3>
                                <button aria-label="Удалить дело" class="delete js-delete" type="reset"></button>
                                <button aria-label="Скрыть текст заметки" class="more js-hide" type="button"></button>
                            </header>

                            <p class="comments js-comments">${noteText}</p>
                        </article>
                    </li>
            `);
    }; 
    
    // 8.Создаем обработчик события по клику click для элемента с классом js.form в котором выполнится наша функция addNote
    formEl.on('submit', function(e){
        
        // 5.Сбрасываем стандарное поведение формы при отправке
        e.preventDefault();
        
        addNote();
        
        // ????.Очищаем поля ввода после добавления заметки
        this.reset();
    });

    
    // 9. Создаем функцию удаления заметки по нажатию на кноку "удалить" с использованием делегирования от ближайшего элемента, который "существует" при загрузке документа
    noteListEl.on('click', '.js-delete', function onDeleteBtn(){
        
        // 10.Вводим переменную для того, чтобы указывать конкретную заметку подлежащую удалению
        const noteListItemEl = $(this).closest('.js-addedNote');
        
        // 11.Приводим функцию удаления в действие
        noteListItemEl.remove();
        
        
        // 12.Создаем условие, при котором, если число заметок равно нулю, тогда запись "Список пуст..." возвращается
        if (noteListEl.children().length ==0) {
            emptyListEl.show();
        }
    });
    
    // 13.Создаем функцию которая отвечает за сворачивание текста заметки с использованием делегирования, а так же  поворот стрелки
    noteListEl.on('click', '.js-hide', function moreHideBtn(){
        $(this).closest('.js-addedNote').find('.js-comments').slideToggle();
        $(this).toggleClass('hide');
        if($(this).attr("aria-label") == "Скрыть текст заметки") {
            $(this).attr("aria-label","Показать текст заметки");
        }
        else {
            $(this).attr("aria-label","Скрыть текст заметки");
        }
        
    });
    
}); 