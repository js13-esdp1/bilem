#language:ru
#noinspection NonAsciiCharacters

Функционал: CRUD (новой) категории
  Для того, чтобы пользователь мог найти подходящую для себя категорию
  Как администратор
  Я должен иметь возможность создать/редактировать/удалить категорию

  @newCategory
  Сценарий: Создание новой категории
    Допустим я залогиненный "администратор"
    И навожу курсор на Категории в разделе toolbar
    И нажимаю на ссылку +
    И я нахожусь на странице "Создание категории"
    И убираю курсор
    Если я ввожу в поля формы:
      | Название новой категории | Бизнес и право |
    И нажимаю на кнопку формы "Создать"
    То я должен увидеть текст "Успешное создание категории!"

  @deleteCategory
  Сценарий: Удаление категории
    Допустим я залогиненный "администратор"
    И навожу курсор на Категории в разделе toolbar
    И нажимаю на кнопку удалить
    И убираю курсор
    То я должен увидеть текст "Успешное удаление категории!"

  @editCategory
  Сценарий: Редактирование категории
    Допустим я залогиненный "администратор"
    И навожу курсор на Категории в разделе toolbar
    И нажимаю на кнопку удалить подкатегорию
    И убираю курсор
    И я очищаю поле "Измененное название"
    Если я ввожу в поля формы:
      | Измененное название | ТЕСТ |
    И нажимаю на кнопку формы "Обновить"
    То я должен увидеть текст "Название категории изменено!"