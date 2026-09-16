
(function(){
  var b=document.querySelector('.burger'),n=document.querySelector('nav.main');
  if(b&&n){b.addEventListener('click',function(){n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'));});}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el);});
  document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear();});
  document.querySelectorAll('form[data-mailto]').forEach(function(f){
    f.addEventListener('submit',function(ev){
      ev.preventDefault();
      var g=function(n){var e=f.elements[n];return e&&e.value?e.value:'';};
      var lines=[];
      Array.prototype.forEach.call(f.querySelectorAll('[name]'),function(el){
        if(el.name) lines.push(el.name.replace(/_/g,' ')+': '+el.value);
      });
      var to=f.getAttribute('data-mailto');
      var subj=f.getAttribute('data-subject')||'Website enquiry';
      window.location.href='mailto:'+to+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(lines.join('\n'));
    });
  });
})();
