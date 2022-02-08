const doc = document;
const $ = id => doc.getElementById(id),
      $c = (cls, p = doc) => [...p.getElementsByClassName(cls)],
      $t = (tag, p = doc) => [...p.getElementsByTagName(tag)];
const El = (tag, cls, prop) => {
  let e = doc.createElement(tag);
  if (cls) e.className = cls;
  if (prop) Object.assign(e, prop);
  return e;
};
const css = (obj, style, except = -1, estyle) => {
  if (obj.style) {
    Object.assign(obj.style, style);
  } else {
    for (let i = obj.length; i--;) {
      Object.assign(obj[i].style, i === except ? estyle : style);
    }
  }
};
let a = Array.prototype;
a.for = function (f) {
  for (let i = 0, l = this.length; i < l; i++) f(this[i], i);
};
let p = HTMLElement.prototype;
p.ap = function (...a) {
  a.for(o => this.append(o));
  return a[0];
};
p.tx = function (txt) {
  this.innerText = txt;
  return this;
};
Object.defineProperties(p, {
  ch: {
    get() {
      return this.children;
    }
  },
  pN: {
    get() {
      return this.parentNode;
    }
  }
});

const params = new URLSearchParams(location.search);
const lang = params.get('lang');
doc.body.className = params.get('theme');

fetch(lang ? '/' + lang + '/doc.html' : '/doc.html')
.then(r => r.text())
.then(html => {
  const check = (e, val) => {
    if (e.innerText.includes(val)) {
      con.scrollTo(0, e.offsetTop - 32);
      e.style.background = 'var(--bgl)';
      setTimeout(e => css(e, {
        background: '',
        transition: 'background 1s'
      }), 500, e);
      return true;
    }
  };
  const loc = location.hash.slice(1);
  const cat = $('cat'), con = $('con');
  con.innerHTML = html;
  html.match(/h[234]>[^<]+<\/h[234]/g).for(h => {
    const e = cat.ap(El(h.slice(0, 2)));
    e.tag = h.slice(3, -4);
    e.id = 'cat' + e.tag;
    e.tx(e.tag).onclick = function () {
      con.scroll({
        top: $('con' + this.tag).offsetTop - 32,
        behavior: 'smooth'
      });
    };
  });
  for (let i = 2; i < 5; i++) $t('h' + i, con).for(e => e.id = 'con' + e.innerText);

  if (loc) con.scrollTo(0, $('con' + decodeURIComponent(loc)).offsetTop - 32);

  $('search').onchange = function () {
    let val = this.value;
    if (!val) return;
    for (let i = 2; i < 5; i++) {
      for (let e of $t('h' + i, con)) if (check(e, val)) return;
    }
    for (let e of con.ch) if (!e.id && check(e, val)) return;
  };
});
