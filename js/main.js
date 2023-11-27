window.onload = function () {

  const minOffset = 50;
  window.onscroll = function () {
    let has_class = document.body.classList.contains("is_scrolled");

    if (minOffset < document.documentElement.scrollTop) {
      if (!has_class) {
        document.body.classList.add("is_scrolled");
      }
    } else if (has_class) {
      document.body.classList.remove("is_scrolled")

    }
  }
//po-pap
  const burgerEl = document.querySelector('.burger');
  const burgerOut = document.querySelector('.header__menu-out');
  const menuEl = document.querySelector('.header__nav');
 
  // вызываем элемент и скрываем если клик был за его пределами

    const toggleMenu = function () {
    menuEl.classList.toggle("menu_show");

  }

  burgerEl.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menuEl || menuEl.contains(target);
    const its_btnMenu = target == burgerEl;
    const menu_is_active = menuEl.classList.contains("menu_show");

    if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
    }
  });

//скрываем элемент кнопкой

   burgerOut.addEventListener("click", function () {
    menuEl.classList.toggle('menu_show');
    });





  /*анимация бегущие цифры*/
  const time = 1000;
  const step = 1;
  function outNum1(num) {
    let l = document.querySelector('#out-1');
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n == num) {
        clearInterval(interval);
      }
      l.innerHTML = n;

    }, t);
  }
  outNum1(300);

  const time2 = 2000;
  const step2 = 7;
  function outNum2(num2) {
    let l2 = document.querySelector('#out-2');
    n2 = 0;
    let t2 = Math.round(time2 / (num2 / step2));
    let interval = setInterval(() => {
      n2 = n2 + step2;
      if (n2 == num2) {
        clearInterval(interval);
      }
      l2.innerHTML = n2;

    }, t2);
  }
  outNum2(1169);


  const time3 = 1500;
  const step3 = 2;
  function outNum3(num3) {
    let l3 = document.querySelector('#out-3');
    n3 = 0;
    let t3 = Math.round(time3 / (num3 / step3));
    let interval = setInterval(() => {
      n3 = n3 + step3;
      if (n3 == num3) {
        clearInterval(interval);
      }
      l3.innerHTML = n3;

    }, t3);
  }

  outNum3(724);

  const time4 = 2500;
  const step4 = 258;
  function outNum4(num4) {
    let l4 = document.querySelector('#out-4');
    n4 = 0;
    let t4 = Math.round(time4 / (num4 / step4));
    let interval = setInterval(() => {
      n4 = n4 + step4;
      if (n4 == num4) {
        clearInterval(interval);
      }
      l4.innerHTML = n4;

    }, t4);
  }

  outNum4(129774);

  const mailEl = document.querySelector('.news__mail');
  let reg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;//форма валидации e-mail
  let span = document.querySelector('.news__error');

  mailEl.addEventListener('click', function () {
    mailEl.style.backgroundColor = "#343434",
      mailEl.style.border = "1px solid #00A7D2",
      mailEl.classList.remove('is-invalid'),// удаляем класс неудачной валидации 
      span.textContent = '';
  });

  document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(mailEl);

    if (!withinBoundaries) {
      mailEl.style.backgroundColor = 'rgba(255, 255, 255, 0.19)',
        mailEl.style.border = 'none';// скрываем элемент т к клик был за его пределами
    }
  });

  document.querySelector('.news__button').onclick = function (e) {
    e.preventDefault();

    if (!validate(reg, mailEl.value)) {
      notValid(mailEl, span, 'Error message');
    } else {
      valid(mailEl, span, '');
    }
  };

  function validate(regex, mailEl) {
    return regex.test(mailEl);
  }

  function notValid(mailEl, el, mess) {
    mailEl.classList.add('is-invalid');
    el.innerHTML = mess;
  }

  function valid(mailEl, el, mess) {
    mailEl.classList.remove('is-invalid');
    mailEl.classList.add('is-valid');
    el.innerHTML = mess;
  }



}

