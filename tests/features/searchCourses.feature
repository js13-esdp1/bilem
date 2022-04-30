#language:ru

Функционал: Поиск курса на главной странице
  Для того, чтобы пользователь мог быстро ориентироваться
  Как обычный пользователь
  Я должен иметь возможность искать курсы по их названию.

  @search_for_courses_main_page
  Сценарий: Поиск курса по форме на главной странице
    Допустим я нахожусь на странице "Главная"
    Если я ввожу в поля формы:
      | Название курса | Java Script |
    И нажимаю на кнопку формы "Поиск"
    И я должен увидеть курсы с подходящим названием
    И я очищаю поле "Название курса"
    Если я ввожу в поля формы:
      | Название курса | Java Script |
    И отмечаю галочкой "Бесплатные курсы"
    И нажимаю на кнопку формы "Поиск"
    То я должен увидеть бесплатные курсы с подходящим названием

  @search_for_courses_toolbar
  Сценарий: Поиск курса по форме в шапке сайта
    Допустим я нахожусь на странице "Главная"
    Если я ввожу в поле поиска в шапке сайте:
      | Поиск | Java Script |
    И нажимаю на "Java Script" из списка
    То я должен увидеть курсы с подходящим названием