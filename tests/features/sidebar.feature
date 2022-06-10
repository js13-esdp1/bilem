#language:ru

Функционал: Отображение боковой панели на странице преподавания для залогиненного пользователя
  Для того, чтобы пользователь мог пользоваться всем функционалом сайта
  Как обычный пользователь
  Я должен иметь возможность видеть боковую панель на странице преподавания

  @check_sidebar
  Сценарий: Проверка на отображение боковой панели на странице преподавания
    Допустим я залогиненный "пользователь"
    И я нахожусь на странице "Преподавание"
    То я должен увидеть элемент страницы с содержимым "Статистика,Курсы,Уроки,Новый курс"
    Если нажимаю на кнопку "Статистика"
    То я нахожусь на странице "Статистика"
    Если нажимаю на кнопку "Курсы"
    То я нахожусь на странице "Преподавание"
    Если нажимаю на кнопку "Уроки"
    То я нахожусь на странице "Уроки"
    Если нажимаю на кнопку "Новый курс"
    То я нахожусь на странице "Новый курс"

