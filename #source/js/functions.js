/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */

/* Проверка мобильного браузера */
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
   // Добавление класса _touch для HTML если браузер мобильный
   if (isMobile.any()) document.documentElement.classList.add('touch');
}

//==== Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================

//==== Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================


// Модуль "показать еще" (в работе) =======================================================================================================================================================================================================================

/*
Документация по работе в шаблоне:
Документация плагина:
Сниппет (HTML):
*/
