var _fastrack_account = 'FT-1000002';

(function(w,h) {
  if (typeof _fastrack_account !== 'string') return;
  var acc = _fastrack_account;
  try {
    var session = 'S' + Math.random().toFixed(8).substring(2);
    var num = 0;
    var now = new Date();
    var initTime = +now;
    var tzm = String(now).match(/\((\w+)\)/);
    var sx = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var sy = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    w.fastrack = function(opt) {
      var a = {
        A: acc,
        S: session,
        N: num++,
        P: document.location.href,
        L: +new Date() - initTime,
        F: w.document.referrer || 'Direct',
        C: screen.width + 'x' + screen.height,
        R: sx + 'x' + sy,
        O: now.getTimezoneOffset(),
        Z: (tzm && tzm.length === 2) ? tzm[1] : 'N/A'
      }

      if (opt) {
        var s;
        for (var j = 1; j <= 6; j++) {
          s = 'D0' + j;
          if (opt[s]) { a['D0' + j] = opt['D0' + j]; }
          s = 'M0' + j;
          if (opt[s]) { a['M0' + j] = opt['M0' + j]; }
        }
      }

      if ('innerWidth' in window) {
        a.W = w.innerWidth + 'x' + w.innerHeight;
      } else {
        var e = w.document.documentElement || w.document.body;
        a.W = w.clientWidth + 'x' + w.clientHeight;
      }
      var params = [];
      for (var k in a) params.push(encodeURIComponent(k) + "=" + encodeURIComponent(String(a[k])));
      var i = new Image();
      i.src = h + '?' + params.join('&');
      return true;
    };
  }catch(e){}
})(window,"https://rt.metamarkets.com/i1/m.gif");

fastrack();
