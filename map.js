(function () {
  'use strict';

  var wrap = document.querySelector('.iran-map-wrap');
  var layer = document.querySelector('.map-points');
  if (!wrap || !layer) return;

  var image = wrap.querySelector('.iran-map-image');
  var city = document.getElementById('map-city');
  var count = document.getElementById('map-count');
  var detail = document.getElementById('map-detail');
  var data = [
    ['اصفهان', '۵۲ پروژه', 'نقشه‌برداری، GIS و خدمات مهندسی خطوط انتقال', '39%', '58%'],
    ['تهران', '۳ پروژه', 'نظارت نقشه‌برداری و پروژه‌های عمرانی', '39%', '35%'],
    ['یزد', '۵ پروژه', 'نقشه‌برداری هوایی و پروژه‌های خطوط انتقال', '50%', '64%'],
    ['کاشان', '۶ پروژه', 'پلان و پروفیل، GIS و نظارت خط', '36%', '47%'],
    ['اردبیل', '۴ پروژه', 'نقشه‌برداری طرح‌های هادی و اطلاعات مکانی', '29%', '20%'],
    ['آذربایجان', '۶ پروژه', 'جمع‌آوری اطلاعات مکانی و GIS خطوط', '20%', '19%'],
    ['اهواز', '۲ پروژه', 'پروژه‌های GIS و ازبیلت خطوط', '26%', '61%'],
    ['فارس و یاسوج', '۴ پروژه', 'ازبیلت، GIS و نقشه‌برداری خطوط', '40%', '72%'],
    ['همدان', '۲ پروژه', 'نقشه‌برداری هوایی و خدمات تخصصی', '31%', '37%']
  ];

  if (image) {
    image.src = 'images/iran-map-moshanir.svg';
    image.alt = 'نقشه ساده ایران و پراکندگی پروژه‌های تدبیر نیروی آتی';
  }
  wrap.querySelectorAll('.iran-map-point-layer,.iran-map-geo').forEach(function (item) { item.remove(); });
  layer.innerHTML = '';

  data.forEach(function (item, index) {
    var point = document.createElement('button');
    point.type = 'button';
    point.className = 'map-point' + (index === 0 ? ' active' : '');
    point.style.setProperty('--x', item[3]);
    point.style.setProperty('--y', item[4]);
    point.setAttribute('aria-label', item[0]);
    point.innerHTML = '<span></span><b>' + item[0] + '</b>';
    point.addEventListener('click', function () {
      layer.querySelectorAll('.map-point').forEach(function (itemPoint) { itemPoint.classList.remove('active'); });
      point.classList.add('active');
      if (city) city.textContent = item[0];
      if (count) count.textContent = item[1];
      if (detail) detail.textContent = item[2];
    });
    layer.appendChild(point);
  });
}());
