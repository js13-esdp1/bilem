#language:ru

Функционал: Страница "Мои курсы"
  Для того, чтобы видеть курсы, которые прохожу и хочу пройти
  Как обычный пользователь
  Я должен иметь возможность просматривать

  @learningCourses
  Сценарий: Курсы, которые прохожу
    Допустим я залогиненный "администратор"
    Когда я кликаю по карточке курса
    И я вижу название курса
    И нажимаю на кнопку "Поступить на курс"
    И я должен увидеть текст "Добавлен в мои курсы"
    Допустим я нахожусь на странице "Мои курсы"
    То я должен увидеть курсы, которые прохожу

  @favoriteCourses
  Сценарий: Курсы, которые хочу пройти
    Допустим я залогиненный "администратор"
    Когда я кликаю по карточке курса
    И я вижу название курса
    И нажимаю на кнопку "Хочу пройти"
    И я должен увидеть текст "Добавлен в список желаний"
    Допустим я нахожусь на странице "Хочу пройти"
    То я должен увидеть курсы, которые хочу пройти