const { I } = inject();

Given('навожу курсор на категорию', () => {
  I.moveCursorTo('.category__title');
  I.wait(1);
});

Given('навожу курсор на подкатегорию', () => {
  I.moveCursorTo('.subcategory__title');
  I.wait(1);
});

Given('нажимаю на ссылку добавления новой подкатегории', () => {
  I.click('.add-sub-btn');
});

Given('нажимаю на кнопку редактировать подкатегорию', () => {
  I.click('.edit-subcategory');
  I.wait(1);
});

Given('нажимаю на кнопку удалить подкатегорию', () => {
  I.click('.remove-subcategory');
  I.wait(1);
});


Given('нажимаю на подкатегорию', () => {
  I.click('.linkCat');
  I.wait(1);
});

Then('я должен увидеть курсы подкатегории', () => {
  I.seeElement('.card');
  I.wait(2);
});
