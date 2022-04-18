const mongoose = require('mongoose');
const config = require("./config");
const User = require("./models/User");
const { nanoid } = require("nanoid");
const Category = require("./models/Category");

const run = async () => {
    await mongoose.connect(config.mongo.db, config.mongo.options);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    await User.create({
        email: 'user@bilem.com',
        password: '123asdA!',
        displayName: 'User',
        token: nanoid(),
        role: 'user'
    }, {
        email: 'admin@bilem.com',
        password: '123asdA!',
        displayName: 'Admin',
        token: nanoid(),
        role: 'admin'
    });

    const [
        programming, finance, design, business,
        personalGrowth, marketing, art,
        beauty, photo, fitness, music, exam, schoolLessons, smm
    ] = await Category.create({
        title: 'Программирование'
    }, {
        title: 'Финансы и бухгалтерский учет'
    }, {
        title: 'Дизайн'
    }, {
        title: 'Бизнес'
    }, {
        title: 'Личностный рост'
    }, {
        title: 'Маркетинг'
    }, {
        title: 'Искусство и ремесло'
    }, {
        title: 'Красота и косметика'
    }, {
        title: 'Фотография и видео'
    }, {
        title: 'Здоровье и фитнес'
    }, {
        title: 'Музыка'
    }, {
        title: 'Подготовка к экзаменам'
    }, {
        title: 'Школьные дисциплины'
    }, {
        title: 'SMM'
    });


    await mongoose.connection.close();
};

run().catch(e => console.error(e));
