# Price Watcher

#### [price--watcher.herokuapp.com](https://price--watcher.herokuapp.com/)

#### Описание:
Веб-приложение на TypeScript, React(MERN Stack)

#### Цели приложения:
	1. Дать возможность следить за ценами на товары
	2. Получать оповещение(о снижении) на mail
#### Поддерживаемые сайты:
	1. aliexpress.com
	2. amazon.com
	3. ebay.com
	4. wildberries.ru
#### Через две недели должно быть готово:
##### Минимум:
+ Подготовлена структура хранения данных
+ Почти закончена серверна часть

##### Максимум:
+ Закончена серверная часть
+ Настроена аутентификация

#### Критерии готовности:
+ Возможность авторизации
+ Удаление и добавление ссылок на товары для остлеживания
+ Работают оповещения на mail о снижении цены

#### Стек технологий:
+ Серверная часть:
	+ NodeJS
	+ ExpressJS
	+ MongoDB
	+ etc
+ Клиентская часть:
	+ TypeScript
	+ React
	+ Redux
+ Сборка:
	+ npm
	+ Webpack4

#### Схема работы:
![](https://i.imgur.com/yKcTMSL.png)

##### Способ получения цен:
1. Пользователь оставляет ссылку на товар
2. Сервер получает html страницу по ссылке 
3. Полученная страница парсится


##### Инструкция по запуску:
+ Склонировать репозиторий:<br/>
	`$ git clone https://github.com/keklol-123/myProject.git <ваша папка>`
+ Установить необходимые пакеты:<br/>
	`$ npm i`
+ Собрать и запустить проект:<br/>
	`$ npm run server`





