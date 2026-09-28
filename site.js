(function () {
  'use strict';

  function renderSharedChrome() {
    var page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var links = [
      ['index.html', 'خانه'],
      ['about.html', 'درباره ما'],
      ['fields.html', 'زمینه‌های فعالیت'],
      ['equipment.html', 'تجهیزات'],
      ['products.html', 'محصولات'],
      ['projects.html', 'پروژه‌ها'],
      ['clients.html', 'کارفرمایان'],
      ['rankings.html', 'رتبه‌ها']
    ];
    var nav = document.querySelector('.nav');
    if (nav) {
      nav.innerHTML = '<div class="wrap nav-inner">' +
        '<a href="index.html" class="brand"><img class="brand-logo" src="images/company-logo.png" alt="لوگوی تدبیر نیروی آتی"><span>تدبیر نیروی آتی<small>مهندسین مشاور</small></span></a>' +
        '<div class="navlinks" id="site-navigation">' + links.map(function (item) {
          return '<a href="' + item[0] + '"' + (page === item[0] ? ' class="active"' : '') + '>' + item[1] + '</a>';
        }).join('') +
        '<a href="contact.html" class="nav-contact' + (page === 'contact.html' ? ' active' : '') + '">تماس با ما</a></div>' +
        '<button class="nav-toggle" type="button" aria-label="باز کردن منوی سایت" aria-expanded="false" aria-controls="site-navigation"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>' +
        '</div>';
    }

    var footer = document.querySelector('footer');
    if (footer) {
      footer.className = 'tna-wave-footer';
      footer.innerHTML = '<div class="wrap tna-footer-main">' +
        '<div class="tna-footer-col"><a class="tna-footer-brand" href="index.html"><img src="images/company-logo.png" alt="لوگوی تدبیر نیروی آتی"><span>تدبیر نیروی آتی<small>مهندسین مشاور</small></span></a><p class="tna-footer-intro">ارائه‌دهنده خدمات تخصصی نقشه‌برداری، GIS، هیدروگرافی، کاداستر و خدمات مهندسی داده‌های مکانی برای پروژه‌های عمرانی و زیرساختی.</p></div>' +
        '<div class="tna-footer-col"><strong class="tna-footer-label">خدمات ما</strong><a href="fields.html">نقشه‌برداری و GIS</a><a href="fields.html">هیدروگرافی</a><a href="fields.html">کاداستر و املاک</a><a href="fields.html">طراحی و نظارت</a><a href="projects.html">پروژه‌های اجرایی</a></div>' +
        '<div class="tna-footer-col"><strong class="tna-footer-label">دسترسی سریع</strong><a href="index.html">خانه</a><a href="about.html">درباره شرکت</a><a href="projects.html">پروژه‌ها</a><a href="clients.html">کارفرمایان</a><a href="contact.html">تماس با ما</a></div>' +
        '<div class="tna-footer-col tna-footer-contact"><strong class="tna-footer-label">اطلاعات تماس</strong><a class="tna-contact-row" href="mailto:Tadbirnirooyeati@gmail.com"><b class="tna-contact-icon">✉</b><span>Tadbirnirooyeati@gmail.com</span></a><span class="tna-contact-row"><b class="tna-contact-icon">⌖</b><span>اصفهان، ایران</span></span><div class="tna-socials"><a href="https://www.instagram.com/tadbir.nirooye.ati" aria-label="اینستاگرام" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.2" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.05" stroke="currentColor" stroke-width="1.8"/><circle cx="17.65" cy="6.45" r="1.15" fill="currentColor"/></svg></a></div></div>' +
        '</div><div class="wrap tna-footer-bottom"><span>© تمامی حقوق برای تدبیر نیروی آتی محفوظ است.</span><span>نقشه‌برداری · GIS · هیدروگرافی · خدمات مهندسی</span></div>';
    }
  }

  function initMenu() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.navlinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (element) { element.classList.add('show'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    elements.forEach(function (element) { observer.observe(element); });
  }

  function initDomainSlider() {
    var root = document.getElementById('domain-slider');
    if (!root) return;
    var data = [
      {en:'SURVEYING / GEOMATICS', title:'نقشه‌برداری زمینی<br><em>با دقت مهندسی</em>', desc:'برداشت دقیق زمینی، تهیه نقشه‌های توپوگرافی و کنترل عملیات اجرایی برای تصمیم‌گیری مطمئن.', image:'images/slider/optimized/terrestrial-survey.jpg'},
      {en:'AERIAL MAPPING / UAV', title:'نقشه‌برداری هوایی<br><em>از بالا، دقیق‌تر</em>', desc:'برداشت هوایی و تولید مدل‌های رقومی زمین برای پوشش سریع و کامل پروژه‌های گسترده.', image:'images/slider/optimized/aerial-survey.jpg'},
      {en:'INDUSTRIAL SURVEYING', title:'نقشه‌برداری صنعتی<br><em>برای زیرساخت‌های حساس</em>', desc:'کنترل هندسی، جانمایی تجهیزات و پایش دقیق عملیات در سایت‌های صنعتی و نیروگاهی.', image:'images/slider/optimized/industrial-survey.jpg'},
      {en:'ARCHITECTURAL / BUILDING', title:'نقشه‌برداری ساختمانی<br><em>هر خط، دقیق و قابل اجرا</em>', desc:'برداشت ازبیلت، کنترل سازه و پیاده‌سازی نقشه‌های معماری و عمرانی در تمام مراحل ساخت.', image:'images/slider/optimized/building-survey.jpg'},
      {en:'GIS / SPATIAL DATA', title:'GIS و اطلاعات مکانی<br><em>داده‌ای برای تصمیم</em>', desc:'تولید، مدیریت و تحلیل داده‌های مکانی برای شناخت بهتر زمین و مدیریت هوشمند پروژه.', image:'images/slider/optimized/gis-spatial-data.jpg'},
      {en:'HYDROGRAPHIC SURVEY', title:'هیدروگرافی<br><em>شناخت دقیق بستر آب</em>', desc:'مطالعه عمق و بستر رودخانه‌ها، مخازن و پهنه‌های آبی با تجهیزات و روش‌های تخصصی.', image:'images/slider/optimized/hydrography.jpg'},
      {en:'CADASTRE / LAND', title:'کاداستر و املاک<br><em>مرزهایی روشن</em>', desc:'تعیین حدود، تهیه نقشه‌های ثبتی و سامان‌دهی اطلاعات اراضی برای تصمیم‌های مطمئن.', image:'images/slider/optimized/cadastre-gis.jpg'}
    ];
    var dots = root.querySelectorAll('.domain-dot');
    var bg = root.querySelector('.domain-bg');
    var en = document.getElementById('domain-en');
    var title = document.getElementById('domain-title');
    var desc = document.getElementById('domain-description');
    var index = document.getElementById('domain-index');
    var current = 0;
    var timer;

    function show(next) {
      current = (next + data.length) % data.length;
      var item = data[current];
      bg.style.opacity = '0';
      window.setTimeout(function () {
        bg.style.backgroundImage = 'url("' + item.image + '")';
        en.textContent = item.en;
        title.innerHTML = item.title;
        desc.textContent = item.desc;
        index.textContent = String(current + 1).padStart(2, '0');
        bg.style.opacity = '1';
      }, 160);
      dots.forEach(function (dot, i) {
        var active = i === current;
        dot.classList.toggle('active', active);
        dot.setAttribute('aria-selected', String(active));
      });
      if (window.matchMedia('(max-width: 900px)').matches) {
        var controls = root.querySelector('.domain-controls');
        var controlsRect = controls.getBoundingClientRect();
        var activeRect = dots[current].getBoundingClientRect();
        var offset = activeRect.left + activeRect.width / 2 - (controlsRect.left + controlsRect.width / 2);
        controls.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(function () { show(current + 1); }, 6500);
    }
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () { show(Number(dot.dataset.domain)); restart(); });
    });
    root.querySelector('.domain-prev').addEventListener('click', function () { show(current - 1); restart(); });
    root.querySelector('.domain-next').addEventListener('click', function () { show(current + 1); restart(); });
    root.addEventListener('mouseenter', function () { window.clearInterval(timer); });
    root.addEventListener('mouseleave', restart);
    show(0);
    restart();
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderSharedChrome();
    initMenu();
    initReveal();
    initDomainSlider();
  });
}());
