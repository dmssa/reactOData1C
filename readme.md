***С помощью OData создаём сайт интернет магазина с сортировкой, поиском и корзиной.***
Установка:
 * скачиваем build/1C/1Cv8.1CD, добавляем в список ИБ
 * публикуем в конфигураторе интерфейс OData, запоминаем имя сервера
 * в обработке _Сервис\Настройки сайта_ в режиме 1С Предприятие указываем имя сервера и папку корневого каталога сайта. Для apache по умолчанию это _каталог установки\htdocs_. **В неё распакуются файлы сайта!** Если там нет ничего ценного жмём записать
 * закрываем 1С Предприятие, если это учебная версия
 * открываем в браузере http://localhost
	
Конфигурация создавалась на платформе 1C 8.3.14.1694, apache 2.2.

![Результат](https://raw.githubusercontent.com/dmssa/images/master/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0.png)
