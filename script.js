/* NexaHost — script.js v2.1.0 */

// ── THEME (toutes les pages) ──
var ht = document.documentElement;
ht.setAttribute('data-theme', localStorage.getItem('nh-theme') || 'dark');

// Theme toggle — index.html utilise #theme-btn, autres pages utilisent #themeToggle
var themeBtn = document.getElementById('theme-btn') || document.getElementById('themeToggle');
if (themeBtn) {
  if (themeBtn.id === 'theme-btn') {
    themeBtn.textContent = ht.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }
  themeBtn.addEventListener('click', function(){
    var next = ht.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    ht.setAttribute('data-theme', next);
    localStorage.setItem('nh-theme', next);
    if (themeBtn.id === 'theme-btn') themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

// ── LOADER (toutes les pages) ──
var loader = document.getElementById('loader');
function hideLoader() {
  if (!loader) return;
  loader.style.opacity = '0';
  loader.style.transition = 'opacity 0.4s';
  setTimeout(function(){ loader.style.display = 'none'; }, 450);
}
setTimeout(hideLoader, 1600);

// ── NAVBAR SCROLL (toutes les pages) ──
var navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', function(){
    navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,.4)' : '';
  }, {passive:true});
}

// ── ÉLÉMENTS INDEX.HTML UNIQUEMENT ──

// Notif banner
var notif = document.getElementById('notif');
var notifX = document.getElementById('notif-x');
if (notif && notifX) {
  notifX.addEventListener('click', function(){
    notif.style.display = 'none';
  });
}

// Cookie banner
var cookie = document.getElementById('cookie');
if (cookie) {
  if (localStorage.getItem('ck')) {
    cookie.style.display = 'none';
  }
  var ckAccept = document.getElementById('ck-accept');
  var ckRefuse = document.getElementById('ck-refuse');
  if (ckAccept) ckAccept.addEventListener('click', function(){
    cookie.style.display = 'none';
    localStorage.setItem('ck', '1');
  });
  if (ckRefuse) ckRefuse.addEventListener('click', function(){
    cookie.style.display = 'none';
    localStorage.setItem('ck', '0');
  });
}

// Back to top
var btt = document.getElementById('btt');
if (btt) {
  window.addEventListener('scroll', function(){
    btt.classList.toggle('show', window.scrollY > 400);
  }, {passive:true});
  btt.addEventListener('click', function(){
    window.scrollTo({top:0,behavior:'smooth'});
  });
}

// Burger menu
var burger = document.getElementById('burger');
var navMob = document.getElementById('nav-mob');
if (burger && navMob) {
  burger.addEventListener('click', function(){
    var o = navMob.classList.toggle('open');
    burger.classList.toggle('open', o);
  });
  navMob.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navMob.classList.remove('open');
      burger.classList.remove('open');
    });
  });
}

// Compteurs hero
var counted = false;
function runCounters() {
  if (counted) return; counted = true;
  function count(el, target, suffix, isFloat) {
    if (!el) return;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts-start)/1800, 1), e = 1-Math.pow(1-p,3);
      el.textContent = isFloat ? (99+e*0.99).toFixed(2)+suffix : Math.floor(e*target)+suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  count(document.getElementById('c1'), 9999, '%', true);
  count(document.getElementById('c2'), 500, '+', false);
  count(document.getElementById('c3'), 60, 's', false);
}
var statsEl = document.querySelector('.stats');
if (statsEl) {
  new IntersectionObserver(function(entries){
    if (entries[0].isIntersecting) runCounters();
  }, {threshold:.5}).observe(statsEl);
}

// Tabs
document.querySelectorAll('.tabs').forEach(function(tg){
  tg.addEventListener('click', function(e){
    var btn = e.target.closest('.tab');
    if (!btn) return;
    tg.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('on'); });
    btn.classList.add('on');
    var section = tg.closest('section');
    section.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('on'); });
    var target = section.querySelector('#tab-'+btn.dataset.tab);
    if (target) target.classList.add('on');
  });
});

// FAQ
document.querySelectorAll('.faq-q').forEach(function(btn){
  btn.addEventListener('click', function(){
    var open = btn.classList.contains('open');
    document.querySelectorAll('.faq-q').forEach(function(q){
      q.classList.remove('open');
      q.nextElementSibling.classList.remove('open');
    });
    if (!open) {
      btn.classList.add('open');
      btn.nextElementSibling.classList.add('open');
    }
  });
});

// Calculateur
var cpuR = document.getElementById('cpuR');
var ramR = document.getElementById('ramR');
var ssdR = document.getElementById('ssdR');
function fmts(gb){ return gb>=1000?(gb/1000).toFixed(1)+' To':gb+' Go'; }
function calc(){
  if(!cpuR) return;
  var cpu=+cpuR.value, ram=+ramR.value, ssd=+ssdR.value;
  document.getElementById('cpuVal').textContent = cpu+' vCPU';
  document.getElementById('ramVal').textContent = ram+' Go';
  document.getElementById('ssdVal').textContent = fmts(ssd);
  document.getElementById('rCpu').textContent = cpu+' vCPU';
  document.getElementById('rRam').textContent = ram+' Go';
  document.getElementById('rSsd').textContent = fmts(ssd);
  var p = cpu*.8+ram*.3+ssd*.008;
  if(document.getElementById('oSnap') && document.getElementById('oSnap').checked) p+=1.5;
  if(document.getElementById('oBack') && document.getElementById('oBack').checked) p+=2;
  if(document.getElementById('oDdos') && document.getElementById('oDdos').checked) p+=3;
  if(document.getElementById('oIPv4') && document.getElementById('oIPv4').checked) p+=1;
  p=Math.max(p,1.99);
  document.getElementById('calcP').textContent = p.toFixed(2).replace('.',',');
  document.getElementById('calcA').textContent = (p*12).toFixed(2).replace('.',',');
}
if(cpuR) {
  [cpuR,ramR,ssdR].forEach(function(s){ s.addEventListener('input',calc); });
  ['oSnap','oBack','oDdos','oIPv4'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.addEventListener('change',calc);
  });
  calc();
}

// Formulaire contact
var PROMOS = {NEXA20:'20% de réduction 🎉',BIENVENUE:'Premier mois offert ✅',PRO10:'10% offres Pro 💼',GAME5:'5€ sur Game Server 🎮'};
var cform = document.getElementById('cform');
if(cform) {
  cform.addEventListener('submit', function(e){
    e.preventDefault();
    var ok = document.getElementById('form-ok');
    if(ok) { ok.classList.add('show'); setTimeout(function(){ ok.classList.remove('show'); }, 5000); }
    e.target.reset();
    var pr = document.getElementById('promo-res');
    if(pr) pr.textContent='';
  });
}
var promoBtn = document.getElementById('promo-btn');
if(promoBtn) {
  promoBtn.addEventListener('click', function(){
    var code = (document.getElementById('promo-in').value||'').trim().toUpperCase();
    var res = document.getElementById('promo-res');
    if(PROMOS[code]){ res.textContent='✅ '+PROMOS[code]; res.className='promo-res ok'; }
    else { res.textContent='❌ Code invalide ou expiré.'; res.className='promo-res err'; }
  });
}

// Tooltips carte datacenters
var tip = document.getElementById('dc-tip');
document.querySelectorAll('.dc-pt').forEach(function(pt){
  pt.addEventListener('mouseenter', function(){
    if(!tip) return;
    var svgR = pt.closest('svg').getBoundingClientRect(), ptR = pt.getBoundingClientRect();
    document.getElementById('dct-city').textContent    = pt.dataset.city;
    document.getElementById('dct-country').textContent = pt.dataset.country;
    document.getElementById('dct-tier').textContent    = pt.dataset.tier;
    document.getElementById('dct-lat').textContent     = pt.dataset.lat;
    document.getElementById('dct-cap').textContent     = pt.dataset.cap;
    tip.style.left = (ptR.left-svgR.left+12)+'px';
    tip.style.top  = (ptR.top-svgR.top-10)+'px';
    tip.style.display='block';
  });
  pt.addEventListener('mouseleave', function(){ if(tip) tip.style.display='none'; });
});

// Scroll reveal (blog, panel, status)
var revealEls = document.querySelectorAll('.reveal');
if (revealEls.length > 0) {
  var revObs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('visible'); revObs.unobserve(e.target); }
    });
  }, {threshold:0.08});
  revealEls.forEach(function(el){ revObs.observe(el); });
}
