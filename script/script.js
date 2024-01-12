document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typingText');
    const textArray = ["My name is Alona", "My nickname indeciso", "I'm student", "I`m introvert", "I'm a bit of a gamer"];
    let index = 0;
    let currentText = '';
    let isDeleting = false;
    let speedWait = 5000; // Initial delay before starting to delete
    
    function type() {
      const speed = 150; // Adjust typing speed in milliseconds
  
      if (isDeleting) {
        currentText = textArray[index].substring(0, currentText.length - 1);
      } else {
        currentText = textArray[index].substring(0, currentText.length + 1);
      }
  
      textElement.innerHTML = currentText;
  
      if (!isDeleting && currentText === textArray[index]) {
        isDeleting = true;
        setTimeout(() => {
          speedWait = 5000; // Time to wait before starting to delete
          type();
        }, speedWait);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        index = (index + 1) % textArray.length;
        speedWait = 500; // Time to wait before starting to type the next text
        setTimeout(type, speedWait);
      } else {
        setTimeout(type, isDeleting ? speed / 2 : speed);
      }
    }
  
    // Start typing when the page loads
    setTimeout(type, 1000);
  });
  
  // Обработчик события прокрутки страницы
  window.addEventListener('scroll', function () {
    // Получаем текущую позицию прокрутки
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Получаем ссылки на разделы страницы
    var aboutSection = document.getElementById('about-section');
    var hardSkillsSection = document.getElementById('hard-skills-section');
    var softSkillsSection = document.getElementById('soft-skills-section');
    var portfolioSection = document.getElementById('portfolio-section');
    var blogSection = document.getElementById('blog-section');
    var contactsSection = document.getElementById('contacts-section');

    // Получаем ссылку на навигацию
    var navigationBar = document.querySelector('.navigation-bar');

    // Функция для проверки видимости элемента на экране
    function isElementVisible(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    // Определяем, в каком разделе находится пользователь и подсвечиваем соответствующий пункт навигации
    if (isElementVisible(aboutSection)) {
      setActiveNavLink(0);
    } else if (isElementVisible(hardSkillsSection)) {
      setActiveNavLink(1);
    } else if (isElementVisible(softSkillsSection)) {
      setActiveNavLink(2);
    } else if (isElementVisible(portfolioSection)) {
      setActiveNavLink(3);
    } else if (isElementVisible(blogSection)) {
      setActiveNavLink(4);
    } else if (isElementVisible(contactsSection)) {
      setActiveNavLink(5);
    }
  });

  // Функция для установки активного состояния для пункта навигации
  function setActiveNavLink(index) {
    var navigationLinks = document.querySelectorAll('.navigation-bar a');
    navigationLinks.forEach(function (link, i) {
      link.classList.toggle('active', i === index);
    });
  }
  