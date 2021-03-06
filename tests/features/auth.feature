#language:ru
#noinspection NonAsciiCharacters

Функционал: Вход пользователя
  Для того, чтобы пользоваться онлайн-платформой для курсов
  Как обычный пользователь
  Я должен иметь возможность зарегистрироваться или войти

  @register
  Сценарий: Регистрация
    Допустим я нахожусь на странице "Регистрация"
    Если я ввожу в поля формы:
      | email | test2@test.com |
      | Имя | Test |
      | Пароль | 123asdA! |
      | Повтор пароля | 123asdA! |
    И нажимаю на кнопку формы регистрации "Зарегистрироваться"
    То я должен увидеть текст "Успешная регистрация"

  @login
  Сценарий: Логин
  Допустим я залогиненный "администратор"
