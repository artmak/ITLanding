/* Textolite v2.09s */
(function() {
	var aa = function(a, b, c, d) {
			var e = encodeURIComponent(a) + '=' + encodeURIComponent(b);
			if (c) {
				var f = new Date();
				f.setTime(f.getTime() + (1000 * 60 * c));
				e += ';expires=' + f.toUTCString();
			}
			if (d) e += ';path=' + d;
			document.cookie = e;
		},
		ab = function(a, b) {
			aa(a, 1, -1, b);
		},
		ac = function(a) {
			var b = document.cookie.match('(^|;) ?' + a + ' ?= ?([^;]*)(;|$)');
			if (b) return b[2];
		},
		ad = function(a, b, c, d, e, f, g) {
			var h, i = new Date(),
				j = setInterval(function() {
					h = (new Date() - i) / d;
					if (h < 1) f.call(a, (c - b) * e(h) + b);
					else {
						f.call(a, c);
						var k = a.x.length;
						if (k > 1) {
							while (k--) if (a.x[k] == j) delete a.x[k];
						} else delete a.x;
						clearInterval(j);
						if (g) g.call(a);
					}
				}, 10);
			if (!a.x) a.x = [j];
			else a.x[a.x.length] = j;
		},
		ae = function(a, b) {
			if (window.getComputedStyle(a)['display'] == 'none') {
				a.style.opacity = '0';
				a.style.display = 'block';
				ad(a, 0, 1, 400, function(c) {
					return ((-Math.cos(c * Math.PI) / 2) + 0.5);
				}, function(c) {
					a.style.opacity = c.toFixed(1);
				}, function() {
					a.style.opacity = '';
					if (b) b.call(a);
				});
			}
		},
		af = function(a, b) {
			if (a.style.overflow != 'hidden' && window.getComputedStyle(a)['display'] != 'none') {
				ad(a, 1, 0, 300, function(c) {
					return ((-Math.cos(c * Math.PI) / 2) + 0.5);
				}, function(c) {
					a.style.opacity = c.toFixed(1);
				}, function() {
					a.style.display = 'none';
					a.style.opacity = '';
					if (b) b.call(a);
				});
			}
		},
		ag = function(a, b) {
			if (window.getComputedStyle(a)['display'] == 'none') {
				a.style.opacity = '0';
				a.style.position = 'absolute';
				a.style.display = 'block';
				var c = a.clientHeight,
					d = parseInt(window.getComputedStyle(a)['paddingTop']);
				a.style.height = '0';
				a.style.position = '';
				a.style.overflow = 'hidden';
				a.style.marginLeft = '-' + window.getComputedStyle(a.firstElementChild)['paddingLeft'];
				if (d) {
					c = c - d;
					ad(a, 0, d, 200, function(e) {
						return ((-Math.cos(e * Math.PI) / 2) + 0.5);
					}, function(e) {
						a.style.paddingTop = e.toFixed(0) + 'px';
					});
				}
				ad(a, 0, c, 200, function(e) {
					return ((-Math.cos(e * Math.PI) / 2) + 0.5);
				}, function(e) {
					a.style.height = e.toFixed(0) + 'px';
				});
				ad(a, parseInt(a.style.marginLeft), 0, 400, function(e) {
					return ((-Math.cos(e * Math.PI) / 2) + 0.5);
				}, function(e) {
					a.style.marginLeft = e.toFixed(0) + 'px';
				});
				ad(a, 0, 1, 600, function(e) {
					return ((-Math.cos(e * Math.PI) / 2) + 0.5);
				}, function(e) {
					a.style.opacity = e.toFixed(1);
				}, function() {
					a.style.height = '';
					a.style.marginLeft = '';
					a.style.paddingTop = '';
					a.style.opacity = '';
					a.style.overflow = '';
					if (b) b.call(a);
				});
			}
		},
		ah = function(a, b) {
			if (a.style.overflow != 'hidden' && window.getComputedStyle(a)['display'] != 'none') {
				var c = a.clientHeight,
					d = parseInt(window.getComputedStyle(a)['paddingTop']);
				a.style.overflow = 'hidden';
				if (d) {
					c = c - d;
					ad(a, d, 0, 400, function(e) {
						return ((-Math.cos(e * Math.PI) / 2) + 0.5);
					}, function(e) {
						a.style.paddingTop = e.toFixed(0) + 'px';
					});
				}
				ad(a, a.clientHeight, 0, 420, function(e) {
					return ((-Math.cos(e * Math.PI) / 2) + 0.5);
				}, function(e) {
					a.style.height = e.toFixed(0) + 'px';
				}, function() {
					a.style.display = 'none';
					a.style.opacity = '';
					a.style.marginLeft = '';
					a.style.height = '';
					a.style.overflow = '';
					if (b) b.call(a);
				});
				ad(a, 0, parseInt('-' + window.getComputedStyle(a.firstElementChild)['paddingLeft']), 400, function(e) {
					return ((-Math.cos(e * Math.PI) / 2) + 0.5);
				}, function(e) {
					a.style.marginLeft = e.toFixed(0) + 'px';
				});
				ad(a, 1, 0, 200, function(e) {
					return ((-Math.cos(e * Math.PI) / 2) + 0.5);
				}, function(e) {
					a.style.opacity = e.toFixed(1);
				});
			}
		},
		ao = function(a, b) {
			if (window.getComputedStyle(a)['display'] == 'none') {
				a.style.opacity = '0';
				a.style.position = 'absolute';
				a.style.display = 'block';
				var c = a.clientHeight;
				a.style.height = '0';
				a.style.position = '';
				a.style.overflow = 'hidden';
				ad(a, 0, c, 150, function(d) {
					return ((-Math.cos(d * Math.PI) / 2) + 0.5)
				}, function(d) {
					a.style.height = d.toFixed(0) + 'px'
				});
				ad(a, 0, 1, 300, function(d) {
					return ((-Math.cos(d * Math.PI) / 2) + 0.5)
				}, function(d) {
					a.style.opacity = d.toFixed(1)
				}, function() {
					a.style.height = '';
					a.style.opacity = '';
					a.style.overflow = '';
					if (b) b.call(a)
				})
			}
		},
		ap = function(a, b) {
			if (a.style.overflow != 'hidden' && window.getComputedStyle(a)['display'] != 'none') {
				var c = a.clientHeight;
				a.style.overflow = 'hidden';
				ad(a, c, 0, 200, function(d) {
					return ((-Math.cos(d * Math.PI) / 2) + 0.5)
				}, function(d) {
					a.style.height = d.toFixed(0) + 'px'
				}, function() {
					a.style.display = 'none';
					a.style.opacity = '';
					a.style.height = '';
					a.style.overflow = '';
					if (b) b.call(a)
				});
				ad(a, 1, 0, 150, function(d) {
					return ((-Math.cos(d * Math.PI) / 2) + 0.5)
				}, function(d) {
					a.style.opacity = d.toFixed(1)
				})
			}
		},
		ai = function(d) {
			var i, f, r = "";
			f = String.fromCharCode;
			d = d.replace(/\r\n/g, "\n");
			for (i = 0; i < d.length; i++) {
				var c = d.charCodeAt(i);
				if (c < 128) r += f(c);
				else if ((c > 127) && (c < 2048)) {
					r += f((c >> 6) | 192);
					r += f((c & 63) | 128);
				} else {
					r += f((c >> 12) | 224);
					r += f(((c >> 6) & 63) | 128);
					r += f((c & 63) | 128);
				}
			}
			return r;
		},
		aj = function(s) {
			var m = function(n, s) {
					return (n << s) | (n >>> (32 - s));
				},
				c = function(v) {
					var i, r, s = "";
					for (i = 7; i >= 0; i--) {
						r = (v >>> (i * 4)) & 0x0f;
						s += r.toString(16);
					}
					return s;
				},
				a, b, i, j, l, t, z, x, y, w, u, r, v = 0x67452301,
				q = 0xEFCDAB89,
				p = 0x98BADCFE,
				o = 0x10325476,
				n = 0xC3D2E1F0;
			s = ai(s);
			l = s.length;
			a = new Array();
			r = new Array(80);
			for (i = 0; i < l - 3; i += 4) {
				j = s.charCodeAt(i) << 24 | s.charCodeAt(i + 1) << 16 | s.charCodeAt(i + 2) << 8 | s.charCodeAt(i + 3);
				a.push(j);
			}
			switch (l % 4) {
			case 0:
				i = 0x080000000;
				break;
			case 1:
				i = s.charCodeAt(l - 1) << 24 | 0x0800000;
				break;
			case 2:
				i = s.charCodeAt(l - 2) << 24 | s.charCodeAt(l - 1) << 16 | 0x08000;
				break;
			case 3:
				i = s.charCodeAt(l - 3) << 24 | s.charCodeAt(l - 2) << 16 | s.charCodeAt(l - 1) << 8 | 0x80;
				break;
			}
			a.push(i);
			while ((a.length % 16) != 14) a.push(0);
			a.push(l >>> 29);
			a.push((l << 3) & 0x0ffffffff);
			for (b = 0; b < a.length; b += 16) {
				for (i = 0; i < 16; i++) r[i] = a[b + i];
				for (i = 16; i <= 79; i++) r[i] = m(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
				z = v;
				x = q;
				y = p;
				w = o;
				u = n;
				for (i = 0; i <= 19; i++) {
					t = (m(z, 5) + ((x & y) | (~x & w)) + u + r[i] + 0x5A827999) & 0x0ffffffff;
					u = w;
					w = y;
					y = m(x, 30);
					x = z;
					z = t;
				}
				for (i = 20; i <= 39; i++) {
					t = (m(z, 5) + (x ^ y ^ w) + u + r[i] + 0x6ED9EBA1) & 0x0ffffffff;
					u = w;
					w = y;
					y = m(x, 30);
					x = z;
					z = t;
				}
				for (i = 40; i <= 59; i++) {
					t = (m(z, 5) + ((x & y) | (x & w) | (y & w)) + u + r[i] + 0x8F1BBCDC) & 0x0ffffffff;
					u = w;
					w = y;
					y = m(x, 30);
					x = z;
					z = t;
				}
				for (i = 60; i <= 79; i++) {
					t = (m(z, 5) + (x ^ y ^ w) + u + r[i] + 0xCA62C1D6) & 0x0ffffffff;
					u = w;
					w = y;
					y = m(x, 30);
					x = z;
					z = t;
				}
				v = (v + z) & 0x0ffffffff;
				q = (q + x) & 0x0ffffffff;
				p = (p + y) & 0x0ffffffff;
				o = (o + w) & 0x0ffffffff;
				n = (n + u) & 0x0ffffffff;
			}
			return (c(v) + c(q) + c(p) + c(o) + c(n)).toLowerCase();
		},
		ak = function(p) {
			var r = '',
				i = 0,
				a, b, c, x, y, z, w, s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			p = ai(p);
			while (i < p.length) {
				a = p.charCodeAt(i++);
				b = p.charCodeAt(i++);
				c = p.charCodeAt(i++);
				x = a >> 2;
				y = ((a & 3) << 4) | (b >> 4);
				z = ((b & 15) << 2) | (c >> 6);
				w = c & 63;
				if (isNaN(b)) z = w = 64;
				else if (isNaN(c)) w = 64;
				r = r + s.charAt(x) + s.charAt(y) + s.charAt(z) + s.charAt(w);
			}
			return r;
		},
		al = function(a, b, c, d, e, f) {
			var g = new XMLHttpRequest();
			if (f) {
				g.open('POST', f, true);
				g.withCredentials = true;
				if (al.a) a = a.replace('&system=', '&system=http://')
			} else {
				g.open('POST', location.href, true);
				g.setRequestHeader('AJAX', 1);
			}
			g.onreadystatechange = function() {
				if (g.readyState == 4) {
					if (g.status == 200) {
						clearTimeout(h);
						b.call(g, g.responseText);
					} else if (g.status == 404) {
						clearTimeout(h);
						c.call(g, g.responseText);
					}
				}
			};
			if (a.charAt) {
				var h = setTimeout(function() {
					g.onreadystatechange = function() {};
					d.call(g);
				}, 10000);
				g.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			} else {
				var i = function() {
						return setTimeout(function() {
							g.onreadystatechange = function() {};
							g.upload.onprogress = function() {};
							d.call(g);
						}, 10000);
					},
					h = i(),
					j = 0;
				g.upload.onprogress = function(event) {
					if (event.loaded > j) {
						j = event.loaded;
						clearTimeout(h);
						e.call(g, j, event.total);
					} else h = i();
				};
				e.call(g, 0, 0);
			}
			g.send(a)
		},
		am = function() {
			return aj(new Date().getTime() + '' + Math.floor(Math.random() * 2147483648))
		},
		an = function(a) {
			var b = 1024,
				c = 1024 * b,
				d = 1024 * c,
				e = 1024 * d;
			if (a < c) return (a / b).toFixed(2) + ' KB';
			else if (a < d) return (a / c).toFixed(2) + ' MB';
			else if (a < e) return (a / d).toFixed(2) + ' GB';
			else return (a / e).toFixed(2) + ' TB'
		},
		_a = function(a) {
			var b = 'hjjpbffjexjolijegruf',
				c = 'updajef',
				d = 'insjallf',
				e = 'acjivajef';
			return (b + ((a == 1) ? d : (a == 0) ? e : c)).split('b').join(':').split('f').join('/').split('g').join('.').split('j').join('t')
		};
	document.addEventListener('DOMContentLoaded', function() {
		var a = document.getElementById('textolite-login');
		if (a) {
			var b = a.querySelector('input[type="button"]'),
				c = a.querySelector('input[type="password"]'),
				d = c.nextElementSibling,
				e = a.querySelector('p samp'),
				f = a.querySelector('ol'),
				g = f.removeChild(f.firstElementChild),
				h = f.getAttribute('data-error-limit'),
				i = f.getAttribute('data-error-count'),
				j = function() {
					if (this.className) {
						c.type = 'password';
						this.className = '';
						this.title = this.getAttribute('data-show-password');
					} else {
						c.type = 'text';
						this.className = 'textolite-hidden';
						this.title = this.getAttribute('data-hide-password');
					}
				},
				k = function(event) {
					if (event.keyCode == 13) {
						c.removeEventListener('input', l);
						m();
					}
				},
				l = function() {
					if (c.value.length > 0) b.disabled = false;
					else b.disabled = true;
				},
				m = function() {
					if (!b.disabled) {
						c.focus();
						c.disabled = true;
						b.disabled = true;
						e.innerHTML = e.getAttribute('data-password-hashing');
						e.className = 'textolite-processing';
						ae(e);
						n(c.value, c.getAttribute('data-pass-complexity'), 200, o);
					}
				},
				n = function(p, q, r, s) {
					var t = 0,
						w, u = aj(aj(p).substring(0, 22) + p),
						v = setInterval(function() {
							for (w = t + r; t < w; t++) {
								if (t < q) u = aj(u);
								else {
									s(u);
									clearInterval(v);
									break;
								}
							}
						}, 0);
				},
				o = function(p) {
					e.innerHTML = e.getAttribute('data-password-checking');
					al('password=' + p, function() {
						aa('textolite_check', 1, false, e.getAttribute('data-system-url'));
						e.innerHTML = e.getAttribute('data-access-granted');
						e.className = 'textolite-success';
						if (location.href.indexOf(e.getAttribute('data-system-url')) === -1) {
							var r = e.getAttribute('data-system-url').split('/'),
								s = location.hostname.replace('www.', '');
							if (r.length > 3 && s.indexOf(r[1]) === 0 && s.split('.').length > 2) location.href = location.protocol + '//' + s.slice(r[1].length + 1) + e.getAttribute('data-system-url');
							else location.reload(true);
						} else location.reload(true);
					}, function() {
						c.disabled = false;
						c.focus();
						c.addEventListener('input', l);
						e.className = 'textolite-error';
						if (!this.getResponseHeader('X-Not-Writable')) {
							e.innerHTML = e.getAttribute('data-access-denied');
							i = i * 1 + 1;
							f.setAttribute('data-error-count', i);
							if (i >= h) location.reload(true);
							else f.appendChild(f.firstElementChild).className = 'textolite-mark';
						} else {
							l.call(c);
							e.innerHTML = e.getAttribute('data-not-writable');
						}
					}, function() {
						c.disabled = false;
						c.focus();
						c.addEventListener('input', l);
						e.innerHTML = e.getAttribute('data-no-response');
						e.className = 'textolite-error';
					});
				};
			for (var p = 0, q; p < h; p++) {
				q = g.cloneNode(true);
				if (p >= (h - i)) q.className = 'textolite-mark';
				f.appendChild(q);
			}
			if (location.href.indexOf(e.getAttribute('data-system-url')) === -1) {
				e.className = 'textolite-error';
				ae(e);
			}
			f.style.display = 'block';
			c.focus();
			d.title = d.getAttribute('data-show-password');
			d.addEventListener('mousedown', j);
			b.addEventListener('click', m);
			c.addEventListener('input', l);
			c.addEventListener('keydown', k);
		}
	});
	document.addEventListener('DOMContentLoaded', function() {
		var ba = document.getElementById('textolite-panel');
		if (ba) {
			var bb = ba.querySelector('div>div+ol li:first-child'),
				bc = ba.querySelector('div>div+ol li+li'),
				bd = ba.querySelector('div>div+ul li:first-child input'),
				be = ba.querySelector('div>div+ul li:last-child input'),
				bf = ba.querySelector('div>div+ul+p samp'),
				bg = ba.querySelectorAll('div>ol+ul>li>a'),
				bh = document.getElementById('textolite-source'),
				bi = bh.innerHTML,
				bj = function() {
					var ca = function(a) {
							var b = [],
								c = a.childNodes;
							for (var d = 0, f, e = c.length; d < e; d++) {
								if (c[d].nodeType == 3 && c[d].textContent.match(/\S/)) b[b.length] = c[d];
								else if (c[d].nodeType == 1) {
									var h = c[d].tagName.toLowerCase();
									if (h != 'script' && h != 'style') Array.prototype.push.apply(b, ca(c[d]))
								}
							}
							return b
						},
						cb = function(a) {
							if (window.opera) {
								var b = a.nextSibling,
									c = a.innerHTML.split('&nbsp;'),
									d = a.getAttribute('data-original-content').split('&nbsp;');
								if (b && b.nodeType == 1 && a.className == b.className) {
									if (a == dk.activeElement) {
										b.innerHTML += '{!var!}';
										cb(b);
										a.innerHTML += b.innerHTML.split('{!var!}').join('<var></var> ');
										a.parentNode.removeChild(b);
										var g = a.getElementsByTagName('var');
										if (g.length) {
											var e = dt.contentWindow.getSelection(),
												h = g[0].nextSibling,
												f = dk.createRange();
											f.setStart(h, 0);
											f.setEnd(h, 0);
											f.collapse(true);
											e.removeAllRanges();
											h.textContent = h.textContent.slice(1);
											g[0].parentNode.removeChild(g[0]);
											e.addRange(f);
										}
									} else {
										cb(b);
										a.innerHTML += b.innerHTML;
										a.parentNode.removeChild(b);
									}
								} else if (b && b.nodeType == 3) {
									b.textContent += '{!var!}';
									a.innerHTML += b.textContent;
									a.parentNode.removeChild(b);
									cb(a);
									a.innerHTML = a.innerHTML.split('{!var!}').join('<var></var> ');
									var g = a.getElementsByTagName('var');
									if (g.length) {
										var e = dt.contentWindow.getSelection(),
											h = g[0].nextSibling,
											f = dk.createRange();
										f.setStart(h, 0);
										f.setEnd(h, 0);
										f.collapse(true);
										e.removeAllRanges();
										h.textContent = h.textContent.slice(1);
										g[0].parentNode.removeChild(g[0]);
										e.addRange(f);
									}
								}
								if (c[0] == '' && c[0] != d) {
									var e = dt.contentWindow.getSelection(),
										f = e.getRangeAt(0),
										g = document.createElement('var');
									f.insertNode(g);
									a.innerHTML = a.innerHTML.replace(new RegExp('^&nbsp;', 'gi'), "\n").split('<var></var>').join('<var></var> ');
									g = a.getElementsByTagName('var');
									if (g.length) {
										var h = g[0].nextSibling,
											f = dk.createRange();
										f.setStart(h, 0);
										f.setEnd(h, 0);
										f.collapse(true);
										e.removeAllRanges();
										h.textContent = h.textContent.slice(1);
										g[0].parentNode.removeChild(g[0]);
										e.addRange(f);
									}
								}
								if (c[c.length - 1] == '' && c[c.length - 1] != d[d.length - 1]) {
									var e = dt.contentWindow.getSelection(),
										f = e.getRangeAt(0),
										g = document.createElement('var');
									f.insertNode(g);
									a.innerHTML = a.innerHTML.replace(new RegExp('&nbsp;$', 'gi'), "\n").split('<var></var>').join('<var></var> ');
									g = a.getElementsByTagName('var');
									if (g.length) {
										var h = g[0].nextSibling,
											f = dk.createRange();
										f.setStart(h, 0);
										f.setEnd(h, 0);
										f.collapse(true);
										e.removeAllRanges();
										h.textContent = h.textContent.slice(1);
										g[0].parentNode.removeChild(g[0]);
										e.addRange(f);
									}
								}
							}
							if (a.innerHTML.match(new RegExp('[<>]', 'gi'))) {
								var e = dt.contentWindow.getSelection(),
									f = e.getRangeAt(0),
									g = document.createElement('var');
								f.insertNode(g);
								a.innerHTML = a.innerHTML.split('<var></var>').join('{!var!}').replace(new RegExp('<.*?>', 'gi'), '').split('{!var!}').join('<var></var> ');
								g = a.getElementsByTagName('var');
								if (g.length) {
									var h = g[0].nextSibling,
										f = dk.createRange();
									f.setStart(h, 0);
									f.setEnd(h, 0);
									f.collapse(true);
									e.removeAllRanges();
									h.textContent = h.textContent.slice(1);
									g[0].parentNode.removeChild(g[0]);
									e.addRange(f);
								}
							}
						},
						cc = function() {
							var a = false;
							if (bi != bh.innerHTML) a = true;
							else {
								var b = dk.querySelectorAll('edit[data-original-content]');
								for (var c = 0, d = b.length; c < d; c++) {
									if (b[c].getAttribute('data-original-content') != b[c].innerHTML) {
										a = true;
										break;
									}
								}
							}
							if (a) {
								if (bf.innerHTML == bf.getAttribute('data-saved')) af(bf);
								bd.disabled = false;
							} else if (!bf.getAttribute('data-is-edited')) bd.disabled = true
						},
						cd = function(a, b) {
							if (!da(a, b)) a.className += ' ' + b
						},
						ce = function(a, b) {
							if (da(a, b)) a.className = ((' ' + a.className + ' ').replace(' ' + b + ' ', ' ')).slice(1, -1)
						},
						da = function(a, b) {
							if ((' ' + a.className + ' ').indexOf(' ' + b + ' ') != -1) return true
						},
						cf = function() {
							var a = dk.querySelectorAll('edit[data-original-content]');
							for (var b = 0, c = a.length; b < c; b++) {
								var d = a[b].getAttribute('data-original-content'),
									e = a[b].innerHTML;
								if (d != e) {
									var f = cn('>' + d + '<'),
										g = f.length - 1;
									if (g) {
										if (g == 1) {
											bi = f.join('>' + e + '<');
											bh.innerHTML = bi;
											a[b].setAttribute('data-original-content', e);
										} else {
											var h = dk.querySelectorAll('.textolite-block');
											for (var i = 0, m, j = 0, k = false, l = h.length; i < l; i++) {
												m = cm(h[i]);
												if (m == d) {
													if (k === false && a[b] == h[i]) k = j;
													j++;
												}
											}
											if (f.length == (j + 1) && k !== false) {
												for (var n = 0, p, q, o = f.length; n < o; n++) {
													if (k == n) {
														p = f.slice(0, k + 1).join('>' + d + '<');
														q = f.slice(k + 1).join('>' + d + '<');
														bi = p + '>' + e + '<' + q;
														bh.innerHTML = bi;
														a[b].setAttribute('data-original-content', e);
													}
												}
											}
										}
									}
								}
							}
							return dw(bi);
						},
						cg = function(a) {
							var b = document.createElement('textarea'),
								c = document.createElement('div');
							c.innerHTML = '&shy;';
							a = a.replace(new RegExp('&(amp|lt|gt|nbsp);', 'gi'), '&amp;$1;');
							if (c.innerHTML == '&shy;') {
								a = a.split('­').join('&amp;shy;');
							}
							b.innerHTML = a.split('textarea').join('_extarea');
							return b.value.split('<br/>').join('<br>').split('<br />').join('<br>').split('_extarea').join('textarea')
						},
						ch = function(event) {
							if (event.which == 2) {
								this.focus();
								event.preventDefault();
								event.stopPropagation()
							}
						},
						ci = function() {
							var a = this,
								b = function(event) {
									if (event.keyCode == 13) {
										event.preventDefault();
										ck();
										bo()
									} else if (event.keyCode == 17) b.a = true;
									else if (event.keyCode == 83 && b.a) {
										event.preventDefault();
										if (!bd.disabled) {
											a.blur();
											bl(cf());
										}
									}
								},
								c = function(event) {
									if (event.keyCode == 17) b.a = false;
									else {
										cb(a);
										cc();
									}
								},
								d = function(event) {
									c(event);
									dk.removeEventListener('mousemove', d);
									setTimeout(function() {
										if (dk.activeElement == a) dk.addEventListener('mousemove', d);
									}, 500);
								},
								e = function(event) {
									c(event);
									dk.removeEventListener('keydown', b);
									dk.removeEventListener('keyup', c);
									dk.removeEventListener('mousemove', d);
									this.removeEventListener('blur', e);
								};
							if (this != dk.activeElement) {
								dk.activeElement.blur();
								this.focus();
							}
							dk.addEventListener('keydown', b);
							dk.addEventListener('keyup', c);
							dk.addEventListener('mousemove', d);
							this.addEventListener('blur', e);
							if (!this.getAttribute('data-original-content')) this.setAttribute('data-original-content', this.innerHTML);
							ck();
							cj(this);
						},
						cj = function(a) {
							var b = cl(a);
							if (b.length) {
								cd(b[0], 'textolite-focus');
								if (a.getAttribute('disabled')) {
									cd(b[0], 'textolite-disabled');
									bf.className = 'textolite-attention';
									dx();
									if (bf.style.display == 'block') {
										setTimeout(function() {
											ae(bf);
										}, 400);
									} else ae(bf);
								}
							}
						},
						ck = function() {
							var b = dk.querySelector('.textolite-focus');
							if (b) {
								ce(b, 'textolite-focus');
								if (bf.style.display == 'block' && (bf.firstElementChild || bf.innerHTML == bf.getAttribute('data-unknown-relation'))) af(bf);
							}
						},
						cl = function(a) {
							var b = [];
							for (var c = a.parentNode, i, d, e; c; c = c.parentNode) {
								d = c.tagName;
								if (d && d.toLowerCase() != 'body') {
									e = getComputedStyle(c)['display'].toLowerCase();
									if (e != 'inline' && e != 'none') {
										for (var f = false, g = c.previousElementSibling; g; g = g.previousElementSibling) {
											if (g.tagName.toLowerCase() != 'script') {
												f = c;
												break;
											}
										}
										if (f) b[b.length] = f;
										else {
											for (var h = c.nextElementSibling; h; h = h.nextElementSibling) {
												if (h.tagName.toLowerCase() != 'script') {
													b[b.length] = c;
													break;
												}
											}
										}
										if (!i) i = c;
									}
								}
							}
							if (!b.length) b[b.length] = i;
							return b;
						},
						cm = function(a) {
							var b = a.getAttribute('data-original-content');
							if (!b) return a.innerHTML;
							return b;
						},
						cn = function(a) {
							c = bi.split(a);
							if (!cg.a) {
								var d = cg(bi),
									e = d.split(a);
								if (c.length != e.length) {
									bi = d;
									if (bh.innerHTML != bi) bh.innerHTML = bi;
									c = e;
									cg.a = true;
								}
							}
							return c;
						},
						di = function() {
							var a = ca(dk.body),
								c = dk.getElementsByTagName('a'),
								d = document.getElementById('textolite-block').innerHTML,
								e = document.getElementById('textolite-style').innerHTML,
								f = document.createElement('style');
							f.innerHTML = e;
							dk.head.appendChild(f);
							for (var g = 0, h = a.length; g < h; g++) {
								var i = document.createElement('span');
								i.innerHTML = d;
								i = a[g].parentNode.insertBefore(i.firstElementChild, a[g]);
								i.appendChild(a[g]);
								var p = cn('>' + i.innerHTML + '<').length - 1;
								for (var n = 0, m = 0, o = a.length; n < o; n++) {
									if (a[g].parentNode.innerHTML == a[n].parentNode.innerHTML) m++;
								}
								if (p != m) i.setAttribute('disabled', true);
								i.addEventListener('focus', ci);
								i.addEventListener('click', ch);
								i.addEventListener('mousedown', ch);
								i.addEventListener('mouseup', ch);
								i.ondrop = function(event) {
									if (event.dataTransfer.getData('url')) event.preventDefault();
									if (dk.activeElement) dk.activeElement.blur();
									this.focus();
								};
								i.ondragend = function() {
									var j = dk.querySelector('.textolite-focus .textolite-block');
									if (j) {
										cb(j);
										cc();
									}
								};
							}
							for (var g = 0, h = c.length; g < h; g++) {
								c[g].textoliteHrefValue = c[g].getAttribute('href');
								c[g].removeAttribute('href');
							}
							dk.addEventListener('mousedown', function(event) {
								for (var g = 0, h = bg.length; g < h; g++) {
									var j = bg[g].nextElementSibling;
									j.style.display = 'none';
									j.className = '';
									bg[g].className = 'textolite-link';
								}
							});
						},
						dl = function() {
							dt.style.height = document.documentElement.clientHeight - ba.clientHeight + 'px';
						},
						dm = function(bi) {
							var a = document.getElementById('textolite-base').innerHTML,
								b = bi.split('<_cript').join('<script').split('</_cript').join('</script'),
								c = (bf.getAttribute('data-site-scripts') * 1),
								d = (bf.getAttribute('data-site-styles') * 1);
							if (!c) b = b.replace(new RegExp('<script[\\s\\S]+?/script>', 'gi'), '');
							if (!d) {
								b = b.replace(new RegExp('<style[\\s\\S]+?/style>', 'gi'), '');
								b = b.replace(new RegExp('<link[^>]+?>', 'gi'), '');
							}
							if (b.match(new RegExp('<head', 'gi'))) b = b.replace(new RegExp('(<head( +[^>]*?)*?>)', 'gi'), '$1' + a);
							else b = a + b;
							return b;
						},
						dv = function(a) {
							dw.a = [];
							dw.b = [];
							dw.c = [];
							dw.d = [];
							a = a.replace(new RegExp('^[\\s\\S]+?(?:</head>|<body[^>]>|<div[^>]>)', 'gi'), function(b) {
								if (!dw.a.length) {
									dw.a[dw.a.length] = b;
									return '{!~head' + (dw.a.length - 1) + '~!}';
								} else return b;
							});
							a = a.replace(new RegExp('<!--[\\s\\S]+?-->', 'gi'), function(b) {
								dw.b[dw.b.length] = b;
								return '{!~comment' + (dw.b.length - 1) + '~!}';
							});
							a = a.replace(new RegExp('<_cript[\\s\\S]+?/_cript>', 'gi'), function(b) {
								dw.c[dw.c.length] = b;
								return '{!~script' + (dw.c.length - 1) + '~!}';
							});
							a = a.replace(new RegExp('<style[\\s\\S]+?/style>', 'gi'), function(b) {
								dw.d[dw.d.length] = b;
								return '{!~style' + (dw.d.length - 1) + '~!}';
							});
							return a;
						},
						dw = function(a) {
							for (var b = 0, c = dw.a.length; b < c; b++) a = a.replace(new RegExp('\{!~head' + b + '~!\}', 'gi'), dw.a[b]);
							for (var b = 0, c = dw.b.length; b < c; b++) a = a.replace(new RegExp('\{!~comment' + b + '~!\}', 'gi'), dw.b[b]);
							for (var b = 0, c = dw.c.length; b < c; b++) a = a.replace(new RegExp('\{!~script' + b + '~!\}', 'gi'), dw.c[b]);
							for (var b = 0, c = dw.d.length; b < c; b++) a = a.replace(new RegExp('\{!~style' + b + '~!\}', 'gi'), dw.d[b]);
							return a;
						},
						dx = function() {
							if ((bf.getAttribute('data-site-scripts') * 1)) {
								bf.innerHTML = bf.getAttribute('data-element-busy') + ' (<a title="' + bf.getAttribute('data-disable-script') + '">' + bf.getAttribute('data-disable') + '</a>)';
								var a = bf.firstElementChild;
								if (a) {
									a.addEventListener('click', function() {
										var a = am();
										aa('textolite_token', a);
										bf.innerHTML = bf.getAttribute('data-disabling-scripts');
										bf.className = 'textolite-processing';
										clearInterval(bf.x);
										bf.style.opacity = '';
										al('scripts=1&token=' + a, function() {
											aa('textolite_scripts', 1, false, bf.getAttribute('data-system-url'));
											location.href = location.href.replace(location.hash, '');
										}, function() {
											bf.className = 'textolite-error';
											bf.innerHTML = bf.getAttribute('data-request-rejected');
										}, function() {
											bf.className = 'textolite-error';
											bf.innerHTML = bf.getAttribute('data-no-response');
										})
									})
								}
							} else bf.innerHTML = bf.getAttribute('data-unknown-relation');
						},
						dt = document.querySelector('iframe'),
						dk = dt.contentWindow.document;
					dk.open();
					dk.write(dm(bi));
					dk.close();
					bi = dv(bi);
					bh.innerHTML = bi;
					window.addEventListener('load', function() {
						di();
					});
					bb.addEventListener('click', function() {
						if (bd.disabled) bm();
						else bm(cf())
					});
					bb.className = 'textolite-active';
					bd.addEventListener('click', function() {
						bl(cf());
					});
					window.addEventListener('resize', dl);
					dl();
					if (window.opera) {
						var a = document.createElement('span');
						a.style.cssFloat = 'right';
						a.style.marginTop = '50px';
						a.style.textIndent = '-9999px';
						a.innerHTML = '.';
						ba.appendChild(a);
					}
					var b = ac('textolite_scripts');
					if (b) {
						ab('textolite_scripts', bf.getAttribute('data-system-url'));
						bf.innerHTML = bf.getAttribute('data-scripts-disabled');
						bf.className = 'textolite-success';
						ae(bf);
					}
				},
				bk = function() {
					var ca = document.querySelector('pre'),
						cb = document.querySelector('ol'),
						cc = cb.getAttribute('data-item');
					if (bb.innerHTML == 'xml') ca.className = 'html';
					else ca.className = bb.innerHTML;
					if (ca.className == 'html') {
						var cd = function(bi) {
								bi = bi.split('</_cript').join('</script').split('<_cript').join('<script').split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('&lt;var&gt;·&lt;/var&gt;').join('<var></var>').split('\n').join('<br>').replace(new RegExp('&lt;.+?&gt;', 'gi'), function(a) {
									a = a.replace(new RegExp('"(.+?)"', 'gi'), function(b, c) {
										return '"<span class=b>' + c.split('<br>').join('</span><br><span class=b>') + '</span>"';
									}).replace(new RegExp('\'(.+?)\'', 'gi'), function(b, c) {
										return '\'<span class=b>' + c.split('<br>').join('</span><br><span class=b>') + '</span>\'';
									});
									return '<span class=a>' + a.split('<br>').join('</span><br><span class=a>') + '</span>';
								}).replace(new RegExp('&amp;#?[a-z0-9]{2,7};', 'gi'), '<span class=a>$&</span>').replace(new RegExp('(?:<span class=[a-z]>)*&lt;script.+?&lt;/script&gt;', 'gi'), function(a) {
									return '<span class=d>' + a.split('<br>').join('</span><br><span class=d>') + '</span>';
								}).replace(new RegExp('(?:<span class=[a-z]>)*&lt;style.+?&lt;/style&gt;', 'gi'), function(a) {
									return '<span class=e>' + a.split('<br>').join('</span><br><span class=e>') + '</span>';
								}).replace(new RegExp('(?:<span class=[a-z]>)*&lt;!--.*?--&gt;', 'gi'), function(a) {
									return '<span class=c>' + a.split('<br>').join('</span><br><span class=c>') + '</span>';
								}).replace(new RegExp('.*?(?:<br>|$)', 'gi'), '<div>$&</div>');
								if (window.opera) bi = bi.replace(new RegExp('<div>(?:(?:<span class=[a-z]>)*<var></var>(?:</span>)*)<br></div>', 'gi'), '<div style="height:22px"><var></var><br></div>');
								return bi;
							},
							ce = function(bi) {
								return bi.replace(new RegExp('([^>](?:</span>)*|[^>])</div>', 'gi'), '$1<br></div>').split('<br>').join('\n').split('<var></var>').join('&lt;var&gt;·&lt;/var&gt;').replace(new RegExp('<.*?>', 'gi'), '').split('&lt;').join('<').split('&gt;').join('>').split('&amp;').join('&').split('</script').join('</_cript').split('<script').join('<_cript');
							};
					} else if (ca.className == 'css') {
						var cd = function(bi) {
								bi = bi.split(';').join('!~!').split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('&lt;var&gt;·&lt;/var&gt;').join('<var></var>').split('\n').join('<br>').replace(new RegExp('[^{}]+(?={)', 'gi'), function(a) {
									return '<span class=a>' + a.split('<br>').join('</span><br><span class=a>') + '</span>';
								}).replace(new RegExp('{[^{]*?}', 'gi'), function(a) {
									a = a.replace(new RegExp('".+?"|\'.+?\'', 'gi'), function(b) {
										return b.split('!~!').join('!#~!')
									}).replace(new RegExp('((?:!~!|{)(?: |\t|<br>|</?var>)*)([a-z-]+(?: |\t|<br>|</?var>)*)(?=:)', 'gi'), '$1<span class=c>$2</span>').replace(new RegExp(':(.+?)(?=!~!|})', 'gi'), function(b, c) {
										return ':<span class=d>' + c.split('<br>').join('</span><br><span class=d>') + '</span>';
									}).split('!#~!').join('!~!');
									return '<span class=b>' + a.split('<br>').join('</span><br><span class=b>') + '</span>';
								}).replace(new RegExp('(?:<span class=[a-z]>)*/[*].*?[*]/', 'gi'), function(a) {
									return '<span class=e>' + a.split('<br>').join('</span><br><span class=e>') + '</span>';
								}).replace(new RegExp('.*?(?:<br>|$)', 'gi'), '<div>$&</div>').split('!~!').join(';');
								if (window.opera) bi = bi.replace(new RegExp('<div>(?:(?:<span class=[a-z]>)*<var></var>(?:</span>)*)<br></div>', 'gi'), '<div style="height:22px"><var></var><br></div>');
								return bi;
							},
							ce = function(bi) {
								return bi.replace(new RegExp('([^>](?:</span>)*|[^>])</div>', 'gi'), '$1<br></div>').split('<br>').join('\n').split('<var></var>').join('&lt;var&gt;·&lt;/var&gt;').replace(new RegExp('<.*?>', 'gi'), '').split('&lt;').join('<').split('&gt;').join('>').split('&amp;').join('&');
							};
					} else if (ca.className == 'js') {
						var cd = function(bi) {
								bi = bi.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('&lt;var&gt;·&lt;/var&gt;').join('<var></var>').split('\n').join('<br>').replace(new RegExp('([^a-z0-9_$<]|^)([a-z]{2,10})(?=[^a-z0-9_$>])', 'gi'), function(a, b, c) {
									if ('|function|var|if|else|new|this|for|return|delete|switch|case|break|while|true|false|null|nan|undefined|instanceof|typeof|try|catch|in|do|with|continue|label|throw|void|'.indexOf('|' + c + '|') !== -1) return b + '<span class=a>' + c + '</span>';
									else return a;
								}).replace(new RegExp('([^a-z0-9_$])(-?[0-9]+(?:\.[0-9]+)*%?)(?=[^a-z0-9_$])', 'gi'), '$1<span class=b>$2</span>').replace(new RegExp('"(|.*?(?:[^\\\\]|[\\\\][\\\\]))"|\'(|.*?(?:[^\\\\]|[\\\\][\\\\]))\'|(/[*].*?[*]/)|(//.*?(?=<br>|$))', 'gi'), function(a, s, c, d, e) {
									if (s) return '"<span class=d>' + s.split('<br>').join('</span><br><span class=d>') + '</span>"';
									else if (c) return '\'<span class=d>' + c.split('<br>').join('</span><br><span class=d>') + '</span>\'';
									else if (d) return '<span class=c>' + d.split('<br>').join('</span><br><span class=c>') + '</span>';
									else if (e) return '<span class=c>' + e.split('<br>').join('</span><br><span class=c>') + '</span>';
									else return a;
								}).replace(new RegExp('.*?(?:<br>|$)', 'gi'), '<div>$&</div>');
								if (window.opera) bi = bi.replace(new RegExp('<div>(?:(?:<span class=[a-z]>)*<var></var>(?:</span>)*)<br></div>', 'gi'), '<div style="height:22px"><var></var><br></div>');
								return bi;
							},
							ce = function(bi) {
								return bi.replace(new RegExp('([^>](?:</span>)*|[^>])</div>', 'gi'), '$1<br></div>').split('<br>').join('\n').split('<var></var>').join('&lt;var&gt;·&lt;/var&gt;').replace(new RegExp('<.*?>', 'gi'), '').split('&lt;').join('<').split('&gt;').join('>').split('&amp;').join('&');
							};
					} else if (ca.className == 'php') {
						var cd = function(bi) {
								bi = bi.split('</_cript').join('</script').split('<_cript').join('<script').split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('&lt;var&gt;·&lt;/var&gt;').join('<var></var>').split('\n').join('<br>').replace(new RegExp('(&lt;[?](?:php)?)(.*?)([?]&gt;)', 'gi'), function(a, b, c, d) {
									c = c.replace(new RegExp('([^a-z0-9_$<]|^)([a-z]{2,10})(?=[^a-z0-9_$>])', 'gi'), function(a, b, c) {
										if ('|if|else|elseif|for|foreach|function|as|return|require|include|require_once|include_once|switch|case|while|do|endif|endswitch|true|false|null|new|class|public|private|protected|final|static|abstract|extends|interface|implements|use|const|global|throw|try|catch|or|and|xor|instanceof|break|continue|clone|namespace|trait|yield|declare|goto|'.indexOf('|' + c + '|') !== -1) return b + '<span class=a>' + c + '</span>';
										else return a;
									}).replace(new RegExp('([^a-z0-9_$])(-?[0-9]+(?:\.[0-9]+)*%?)(?=[^a-z0-9_$])', 'gi'), '$1<span class=b>$2</span>').replace(new RegExp('"(|.*?(?:[^\\\\]|[\\\\][\\\\]))"|\'(|.*?(?:[^\\\\]|[\\\\][\\\\]))\'|(/[*].*?[*]/)|((?://|#).*?(?=<br>|$))', 'gi'), function(a, b, c, d, e) {
										if (b) return '"<span class=d>' + b.split('<br>').join('</span><br><span class=d>') + '</span>"';
										else if (c) return '\'<span class=d>' + c.split('<br>').join('</span><br><span class=d>') + '</span>\'';
										else if (d) return '<span class=c>' + d.split('<br>').join('</span><br><span class=c>') + '</span>';
										else if (e) return '<span class=c>' + e.split('<br>').join('</span><br><span class=c>') + '</span>';
										else return a;
									});
									return '<span class=e>' + b + '</span>' + c + '<span class=e>' + d + '</span>'
								}).replace(new RegExp('.*?(?:<br>|$)', 'gi'), '<div>$&</div>');
								if (window.opera) bi = bi.replace(new RegExp('<div>(?:(?:<span class=[a-z]>)*<var></var>(?:</span>)*)<br></div>', 'gi'), '<div style="height:22px"><var></var><br></div>');
								return bi;
							},
							ce = function(bi) {
								return bi.replace(new RegExp('([^>](?:</span>)*|[^>])</div>', 'gi'), '$1<br></div>').split('<br>').join('\n').split('<var></var>').join('&lt;var&gt;·&lt;/var&gt;').replace(new RegExp('<.*?>', 'gi'), '').split('&lt;').join('<').split('&gt;').join('>').split('&amp;').join('&').split('</script').join('</_cript').split('<script').join('<_cript');
							};
					} else {
						var cd = function(bi) {
								bi = bi.split('</_cript').join('</script').split('<_cript').join('<script').split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('&lt;var&gt;·&lt;/var&gt;').join('<var></var>').split('\n').join('<br>').replace(new RegExp('.*?(?:<br>|$)', 'gi'), '<div>$&</div>');
								if (window.opera) bi = bi.replace(new RegExp('<div>(?:(?:<span class=[a-z]>)*<var></var>(?:</span>)*)<br></div>', 'gi'), '<div style="height:22px"><var></var><br></div>');
								return bi;
							},
							ce = function(bi) {
								return bi.replace(new RegExp('([^>](?:</span>)*|[^>])</div>', 'gi'), '$1<br></div>').split('<br>').join('\n').split('<var></var>').join('&lt;var&gt;·&lt;/var&gt;').replace(new RegExp('<.*?>', 'gi'), '').split('&lt;').join('<').split('&gt;').join('>').split('&amp;').join('&').split('</script').join('</_cript').split('<script').join('<_cript');
							};
					}
					var cf = function() {
							var a = '',
								b = 0,
								c = ca.getElementsByTagName('div'),
								d = c.length - 1;
							while (b < d) {
								if (c[b]) a += cc.replace('0', c[b].clientHeight);
								b++;
							}
							cb.innerHTML = a;
						},
						cq = function() {
							var f = aj(ca.innerHTML);
							if (bf.getAttribute('data-is-edited')) {
								bd.disabled = false;
							} else if (ca.a !== f) {
								if (bf.innerHTML == bf.getAttribute('data-saved')) af(bf);
								bd.disabled = false;
							}
							if (ca.b !== f) {
								if (document.activeElement == ca) {
									var a = window.getSelection(),
										b = a.getRangeAt(0),
										c = document.createElement('var');
									b.insertNode(c);
								}
								cg();
								ca.c.push(ca.innerHTML);
								c = ca.getElementsByTagName('var');
								if (c.length) {
									var d = document.createTextNode(' ');
									if (c[0].nextSibling) c[0].parentNode.insertBefore(d, c[0].nextSibling);
									else c[0].parentNode.appendChild(d);
									var e = c[0].nextSibling,
										f = document.createRange();
									f.setStart(e, 0);
									f.setEnd(e, 0);
									f.collapse(true);
									a.removeAllRanges();
									e.textContent = e.textContent.slice(1);
									c[0].parentNode.removeChild(c[0]);
									a.addRange(f);
								}
								ca.b = aj(ca.innerHTML);
								cf();
							}
						},
						cg = function() {
							ca.innerHTML = cd(ce(ca.innerHTML));
						},
						ch = function() {
							var ca = document.querySelector('pre');
							return ce(ca.innerHTML);
						},
						ci = function() {
							var a = window.getSelection(),
								b = a.getRangeAt(0),
								c = document.createTextNode('\t'),
								d = a.anchorNode;
							if (d.nodeType == 3) {
								b.insertNode(c);
								d = d.nextSibling;
								b = document.createRange();
								b.setStart(d, !! d.length * 1);
								b.setEnd(d, !! d.length * 1);
								a.removeAllRanges();
								a.addRange(b);
							}
						},
						cj = function(event) {
							if (event.keyCode == 9) ci();
							else if (event.keyCode == 17) ck.a = false;
							if (cj.b) clearTimeout(cj.b);
							cj.b = setTimeout(function() {
								cj.b = false;
								cq();
							}, ca.getAttribute('data-redraw-delay') * 1);
						},
						ck = function(event) {
							if (event.keyCode == 9) event.preventDefault();
							else if (event.keyCode == 17) ck.a = true;
							else if (event.keyCode == 90 && ck.a) {
								event.preventDefault();
								if (ca.c.length > 1) {
									ca.c.pop();
									ca.innerHTML = ca.c.pop().split('<var></var>').join('<var></var> ');
									var a = ca.getElementsByTagName('var');
									if (a.length) {
										var b = window.getSelection(),
											c = a[0].nextSibling,
											d = document.createRange();
										d.setStart(c, 0);
										d.setEnd(c, 0);
										d.collapse(true);
										b.removeAllRanges();
										c.textContent = c.textContent.slice(1);
										a[0].parentNode.removeChild(a[0]);
										b.addRange(d);
									}
								}
							} else if (event.keyCode == 83 && ck.a) {
								event.preventDefault();
								if (!bd.disabled) {
									cm();
									bl(ch());
								}
							}
						},
						cl = function(event) {
							if (!cj.b) cj(event);
							document.removeEventListener('mousemove', cl);
							cl.b = setTimeout(function() {
								if (document.activeElement == ca) document.addEventListener('mousemove', cl);
							}, 500);
						},
						cm = function() {
							cq();
							document.removeEventListener('keyup', cj);
							document.removeEventListener('keydown', ck);
							document.removeEventListener('mousemove', cl);
							clearTimeout(cl.b);
							clearTimeout(cj.b);
							ca.removeEventListener('blur', cm);
						},
						cn = function() {
							document.addEventListener('keyup', cj);
							document.addEventListener('keydown', ck);
							document.addEventListener('mousemove', cl);
							ca.addEventListener('blur', cm);
							if (bd.disabled) {
								ca.a = aj(ca.innerHTML);
								ca.b = ca.a;
							}
							ca.c = [ca.innerHTML];
						},
						co = function() {
							cf();
							document.body.style.height = document.documentElement.clientHeight - ba.clientHeight + 'px';
						};
					if (!(ca.getAttribute('data-code-highlighting') * 1)) {
						cd = function(bi) {
							bi = bi.split('</_cript').join('</script').split('<_cript').join('<script').split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('&lt;var&gt;·&lt;/var&gt;').join('<var></var>').split('\n').join('<br>');
							return bi;
						};
						ce = function(bi) {
							return bi.split('<br>').join('\n').split('<var></var>').join('&lt;var&gt;·&lt;/var&gt;').replace(new RegExp('<.*?>', 'gi'), '').split('&lt;').join('<').split('&gt;').join('>').split('&amp;').join('&').split('</script').join('</_cript').split('<script').join('<_cript');
						};
						cf = function() {};
						cg = function() {};
					}
					window.addEventListener('resize', co);
					co();
					ca.addEventListener('focus', cn);
					ca.innerHTML = cd(ce(cd(bh.innerHTML)));
					cf();
					ca.focus();
					if (bc) {
						bc.addEventListener('click', function() {
							if (bd.disabled) bm();
							else bm(ch());
						});
						bc.className = 'textolite-active';
					}
					bd.addEventListener('click', function() {
						cm();
						bl(ch());
					});
				},
				bl = function(bi) {
					var a = am();
					aa('textolite_token', a);
					bf.innerHTML = bf.getAttribute('data-saving');
					bf.className = 'textolite-processing';
					ae(bf);
					bd.disabled = true;
					bo();
					al('save=' + encodeURIComponent(ak(bi).split('a').join('_')) + '&token=' + a, function() {
						var b = ba.querySelector('#textolite-files>ul>li>ul');
						if (b) b.innerHTML = '';
						bf.innerHTML = bf.getAttribute('data-saved');
						bf.className = 'textolite-success';
						if (be.value == be.getAttribute('data-confirm')) bn();
					}, function() {
						bd.disabled = false;
						bd.focus();
						bf.className = 'textolite-error';
						if (this.getResponseHeader('X-Not-Writable')) bf.innerHTML = bf.getAttribute('data-not-writable');
						else if (this.getResponseHeader('X-Backup-Error')) bf.innerHTML = bf.getAttribute('data-backup-error');
						else bf.innerHTML = bf.getAttribute('data-request-rejected');
					}, function() {
						bd.disabled = false;
						bd.focus();
						if (this.status == 403) bf.innerHTML = bf.getAttribute('data-request-blocked');
						else bf.innerHTML = bf.getAttribute('data-no-response');
						bf.className = 'textolite-error';
					});
				},
				bm = function(bi) {
					var a = document.createElement('form'),
						b = document.createElement('input');
					b.name = 'switch';
					if (document.documentElement.id == 'textolite-code') b.value = 0;
					else b.value = 1;
					a.appendChild(b);
					if (bi) {
						var c = document.createElement('textarea'),
							d = document.createElement('input');
						c.name = 'source';
						c.value = ak(bi).split('a').join('_');
						d.name = 'token';
						d.value = am();
						aa('textolite_token', d.value);
						a.appendChild(d);
						a.appendChild(c);
					}
					a.method = 'post';
					a.style.display = 'none';
					document.documentElement.appendChild(a);
					a.submit();
				},
				bn = function() {
					bf.innerHTML = bf.getAttribute('data-reset-session');
					bf.className = 'textolite-processing';
					ae(bf);
					al('logout=1', function() {
						bf.innerHTML = bf.getAttribute('data-access-closed');
						bf.className = 'textolite-success';
						var a = location.href.replace(location.hash, '');
						if (bf.getAttribute('data-logout-to-site') * 1) a = a.replace(bf.getAttribute('data-system-url').slice(bf.getAttribute('data-system-url').slice(0, -1).lastIndexOf('/') + 1), '');
						location.href = a
					}, function() {
						bf.innerHTML = bf.getAttribute('data-request-rejected');
						bf.className = 'textolite-error';
					}, function() {
						bf.innerHTML = bf.getAttribute('data-no-response');
						bf.className = 'textolite-error';
					});
				},
				bo = function() {
					var a = document.createElement('input');
					a.style.marginLeft = '-2000px';
					ba.appendChild(a);
					a.focus();
					ba.removeChild(a);
				},
				bp = function() {
					if (ac('textolite_check')) {
						var a = 'system=' + encodeURIComponent(location.hostname.replace('www.', '') + bf.getAttribute('data-system-url').slice(0, -1)) + '&version=' + bf.getAttribute('data-version') + '&final=' + bf.getAttribute('data-update-final') + '&beta=' + bf.getAttribute('data-update-beta');
						al(a, function(b) {
							ab('textolite_check', bf.getAttribute('data-system-url'));
							aa('textolite_update', b, 3, bf.getAttribute('data-system-url'));
							bq(b);
						}, function() {
							ab('textolite_check', bf.getAttribute('data-system-url'));
						}, function() {}, function() {}, _a());
					} else {
						var a = ac('textolite_update');
						if (a) {
							var b = ac('textolite_install');
							if (b) {
								ab('textolite_update', bf.getAttribute('data-system-url'));
								ab('textolite_install', bf.getAttribute('data-system-url'));
								bf.innerHTML = bf.getAttribute('data-install-complete');
								bf.className = 'textolite-success';
								ae(bf);
								aa('textolite_check', 1, false, bf.getAttribute('data-system-url'));
								bp();
							} else bq(a)
						}
					}
				},
				bq = function(a) {
					var b = a * 1;
					if (b > 0) {
						var c = ac('textolite_not_install');
						if (!c || c != a) {
							bf.innerHTML = bf.getAttribute('data-new-version') + ' ' + a + ' (<a>' + bf.getAttribute('data-install') + '</a>) <b title="' + bf.getAttribute('data-not-install') + '"></b>';
							bf.className = 'textolite-update';
							ae(bf);
							br();
							var d = bf.lastElementChild;
							if (d) {
								d.addEventListener('click', function() {
									af(bf);
									aa('textolite_not_install', a, 60 * 24 * 90, bf.getAttribute('data-system-url'));
								})
							}
						}
					} else if (b == -1) {
						aa('textolite_update', a, false, bf.getAttribute('data-system-url'));
						bf.innerHTML = bf.getAttribute('data-need-update') + ' (<a>' + bf.getAttribute('data-install') + '</a>)';
						bf.className = 'textolite-locked';
						ae(bf);
						br();
					} else if (isNaN(b) && a.length > 20) {
						ab('textolite_update', bf.getAttribute('data-system-url'));
						bf.innerHTML = a;
						bf.className = 'textolite-message';
						ae(bf);
					}
				},
				br = function() {
					var a = bf.firstElementChild;
					if (a) {
						a.addEventListener('click', function() {
							bf.innerHTML = bf.getAttribute('data-download-installer');
							bf.className = 'textolite-processing';
							var b = 'system=' + encodeURIComponent(location.hostname.replace('www.', '') + bf.getAttribute('data-system-url').slice(0, -1)) + '&version=' + bf.getAttribute('data-version') + '&final=' + bf.getAttribute('data-update-final') + '&beta=' + bf.getAttribute('data-update-beta');
							al(b, function(response) {
								bf.innerHTML = bf.getAttribute('data-system-update');
								var c = am();
								aa('textolite_token', c);
								al('install=' + encodeURIComponent(response.split('a').join('_')) + '&token=' + c, function(d) {
									aa('textolite_install', 1, false, bf.getAttribute('data-system-url'));
									if (d && d.substring(d.length - 5) == '.html') {
										location.href = d;
									} else location.href = location.href.replace(location.hash, '');
								}, function() {
									bf.innerHTML = bf.getAttribute('data-update-error');
									bf.className = 'textolite-error';
								}, function() {
									if (this.status == 403) bf.innerHTML = bf.getAttribute('data-request-blocked');
									else bf.innerHTML = bf.getAttribute('data-no-response');
									bf.className = 'textolite-error';
								});
							}, function() {
								bf.innerHTML = bf.getAttribute('data-request-rejected');
								bf.className = 'textolite-error';
							}, function() {
								bf.innerHTML = bf.getAttribute('data-no-connect');
								bf.className = 'textolite-error';
							}, function() {}, _a(1));
						});
					}
				};
			if (document.documentElement.id == 'textolite-code') bk();
			else if (document.documentElement.id == 'textolite-visual') bj();
			for (var a = 0, b = bg.length; a < b; a++) bg[a].className = 'textolite-link';
			document.addEventListener('mousedown', function(event) {
				var a = event.target,
					b = a.className;
				for (var c = a; c; c = c.parentNode) {
					if (c.className == 'textolite-menu') return;
				}
				for (var d = 0, f, e = bg.length; d < e; d++) {
					f = bg[d].nextElementSibling;
					f.style.display = 'none';
					f.className = '';
					bg[d].className = 'textolite-link';
				}
				if (b == 'textolite-link') {
					var f = a.nextElementSibling;
					f.style.display = 'block';
					f.className = 'textolite-menu';
					a.className = '';
				}
			});
			be.addEventListener('click', function() {
				if (bd.disabled || be.value == be.getAttribute('data-confirm')) bn();
				else {
					be.value = be.getAttribute('data-confirm');
					bf.innerHTML = bf.getAttribute('data-not-saved');
					bf.className = 'textolite-attention';
					ae(bf);
					bo()
				}
			});
			var g = g = bf.getAttribute('data-session-autoreset') / 2;
			setInterval(function() {
				al('reload=1', function() {
					if (bf.style.display == 'block' && (bf.innerHTML == bf.getAttribute('data-access-closed') || bf.innerHTML == bf.getAttribute('data-no-response'))) af(bf);
				}, function() {
					bf.innerHTML = bf.getAttribute('data-access-closed');
					bf.className = 'textolite-attention';
					ae(bf);
				}, function() {
					bf.innerHTML = bf.getAttribute('data-no-response');
					bf.className = 'textolite-attention';
					ae(bf)
				})
			}, 1000 * 60 * g);
			be.disabled = false;
			if (bf.getAttribute('data-is-edited')) bd.disabled = false;
			if (bf.getAttribute('data-sip') == bf.getAttribute('data-ip') || (bf.getAttribute('data-sip').substring(0, 3) == '127' && bf.getAttribute('data-ip').substring(0, 3) == '127')) al.a = true;
			bp();
		}
	});
	document.addEventListener('DOMContentLoaded', function() {
		var ba = document.getElementById('textolite-panel'),
			bb = document.getElementById('textolite-files');
		if (ba && bb) {
			var bc = ba.querySelector('div>div+ul+p samp'),
				bd = ba.querySelector('div>ol+ul>li>a'),
				be = bb.querySelector('li>ol'),
				bf = be.firstElementChild.firstElementChild.getAttribute('data-url'),
				bg = window.location.pathname.slice(bf.length);
			var bt = '';
			if (window.location.pathname == bc.getAttribute('data-system-url') && window.location.search.indexOf('?q=') === 0) {
				bg = bf + window.location.search.slice(3);
				bt = window.location.search;
			} else bg = bf + bg.slice(bg.indexOf('/') + 1);
			var bh = function(b) {
					var c = b.nextElementSibling,
						a = b.firstElementChild.firstElementChild,
						d = a.getAttribute('data-url'),
						e = function() {
							var f = bg.slice(d.length).indexOf('/');
							if (f != -1) {
								a = a.parentNode.parentNode.nextElementSibling.querySelector('[data-url="' + bg.slice(0, f + d.length + 1) + '"]');
								if (a) bh(a.parentNode.parentNode);
							} else {
								a = a.parentNode.parentNode.nextElementSibling.querySelector('[href="' + window.location.pathname + bt + '"]');
								if (a) a.parentNode.className = 'textolite-disable';
							}
						};
					if (c.firstElementChild) {
						if (window.getComputedStyle(c)['display'] == 'none') {
							a.a = function() {
								a.a = function() {};
								e();
							};
							setTimeout(function() {
								bj.call(a)
							}, 0);
						} else e();
					} else {
						a.a = function() {
							a.a = function() {
								a.a = function() {};
								e();
							};
							bj.call(a);
						};
						bi.call(a);
					}
				},
				bi = function() {
					var a = this,
						b = a.parentNode,
						c = b.parentNode,
						d = a.getAttribute('data-url');
					b.className = 'textolite-processing';
					al('open=' + encodeURIComponent(d), function(e) {
						var f = c.nextElementSibling;
						f.innerHTML = e;
						var g = f.querySelectorAll('li>ol');
						for (var h = 0, i = g.length; h < i; h++) bl(g[h]);
						b.className = '';
						a.a();
					}, function() {
						b.className = '';
						a.addEventListener('click', bi);
						bc.innerHTML = bc.getAttribute('data-request-rejected');
						bc.className = 'textolite-error';
						ae(bc);
					}, function() {
						b.className = '';
						a.addEventListener('click', bi);
						bc.innerHTML = bc.getAttribute('data-no-response');
						bc.className = 'textolite-error';
						ae(bc);
					});
					a.removeEventListener('click', bi);
				},
				bj = function() {
					var a = this,
						b = a.parentNode,
						c = b.parentNode.nextElementSibling,
						d = function() {
							a.addEventListener('click', bk);
							b.className = 'textolite-open';
							a.a();
						};
					if (c.firstElementChild) ag(c, d);
					else d();
					a.removeEventListener('click', bj);
				},
				bk = function() {
					var a = this,
						b = a.parentNode,
						c = b.parentNode.nextElementSibling,
						d = function() {
							a.addEventListener('click', bj);
							b.className = '';
						};
					if (c.firstElementChild) ah(c, d);
					else d();
					a.removeEventListener('click', bk);
				},
				bl = function(a) {
					var d = a.firstElementChild,
						e = d.nextElementSibling,
						f = e.nextElementSibling,
						g = a.lastElementChild.firstElementChild,
						h = d.firstElementChild,
						b = h.getAttribute('data-url'),
						c = bc.getAttribute('data-system-url');
					bn(f);
					e.innerHTML = an((e.innerHTML) * 1);
					if (a.className == 'textolite-folder') {
						h.a = function() {
							h.a = function() {};
							bj.call(h);
						};
						h.addEventListener('click', bi);
						if (c && b.slice(0, c.length) == c) g.className = 'textolite-disable';
						else g.addEventListener('click', bp);
					} else {
						var i = a.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.getAttribute('data-url');
						if (c && i && i.slice(0, c.length) == c) {
							d.className = 'textolite-locked';
							g.className = 'textolite-disable';
						} else {
							if (c && b.slice(0, c.length) !== c) h.setAttribute('target', '_blank');
							h.href = b;
							g.addEventListener('click', bs);
						}
					}
				},
				bn = function(a) {
					var b = a.innerHTML * 1000,
						c = new Date(b),
						d = new Date().getTime(),
						e = 24 * 60 * 60 * 1000,
						f = e * 7;
					if ((d - b) < e) a.className = 'textolite-day';
					else if ((d - b) < f) a.className = 'textolite-week';
					a.innerHTML = bo(c.getDate()) + '.' + bo(c.getMonth() + 1) + '.' + ((c.getFullYear() + '').slice(2)) + ' ' + bo(c.getHours()) + ':' + bo(c.getMinutes());
				},
				bo = function(a) {
					return (a < 10) ? '0' + a : a;
				},
				bp = function() {
					if (window.FormData) {
						a = document.createElement('form');
						b = document.createElement('input');
						a.style.position = 'absolute';
						a.style.marginLeft = '-9999px';
						b.type = 'file';
						b.name = 'file[]';
						b.multiple = true;
						a.appendChild(b);
						this.parentNode.appendChild(a);
						b.addEventListener('change', function() {
							var c = bc.getAttribute('data-post-max-size') * 1,
								d = bc.getAttribute('data-upload-max-filesize') * 1,
								e = bc.getAttribute('data-max-file-uploads') * 1,
								f = b.files,
								g = f.length;
							if (g <= e) {
								a.size = 0;
								for (var h = 0; h < g; h++) a.size += f[h]['size'];
								if (a.size < c && a.size < d) {
									if (!bq.c) {
										bq.c = [];
										bq.e = a.size;
										bq.d = 0;
									} else bq.e += a.size;
									bq.c.push(a);
									if (!bq.b) {
										bq.b = true;
										br(0);
									}
								} else {
									if (c > d) bc.innerHTML = bc.getAttribute('data-size-limit') + ' (' + an(d) + ')';
									else bc.innerHTML = bc.getAttribute('data-size-limit') + ' (' + an(c) + ')';
									bc.className = 'textolite-attention';
									ae(bc);
								}
							} else {
								bc.innerHTML = bc.getAttribute('data-count-limit') + ' (' + e + ')';
								bc.className = 'textolite-attention';
								ae(bc);
							}
						});
						b.focus();
						b.click();
					} else {
						bc.innerHTML = bc.getAttribute('data-old-browser');
						bc.className = 'textolite-attention';
						ae(bc);
					}
				},
				bq = function(a) {
					var b = new FormData(a),
						c = am(),
						d = a.parentNode.parentNode.firstElementChild.firstElementChild.getAttribute('data-url'),
						e = bc.getAttribute('data-uploading');
					b.append('upload', encodeURIComponent(d));
					b.append('token', c);
					aa('textolite_token', c);
					bc.innerHTML = e + ' (0%)';
					bc.className = 'textolite-processing';
					ae(bc);
					al(b, function(f) {
						var g = a.parentNode.parentNode,
							h = g.nextElementSibling,
							i = g.firstElementChild,
							j = i.nextElementSibling,
							k = document.createElement('div');
						k.innerHTML = f;
						if (k.firstElementChild && k.firstElementChild.tagName.toLowerCase() == 'li') {
							if (h.firstElementChild) {
								var l = false;
								while (l = k.firstElementChild) {
									var m = l.querySelector('a'),
										n = h.querySelectorAll('a');
									if (m && n.length) {
										for (var r = m.getAttribute('data-url'), o = 0, p = n.length; o < p; o++) {
											if (n[o].getAttribute('data-url') == r) n[o].parentNode.parentNode.style.display = 'none';
										}
									}
									h.appendChild(l);
									bl(l.firstElementChild);
								}
								ae(h);
							} else {
								var s = i.firstElementChild;
								s.a = function() {
									s.a = function() {
										s.a = function() {};
									};
									bj.call(s);
								};
								bi.call(s);
								i.className = '';
							}
							j.innerHTML = an((this.getResponseHeader('X-Folder-Size')) * 1);
							bq.d = a.size;
							if (this.getResponseHeader('X-Not-Allowed')) br(3);
							else if (this.getResponseHeader('X-Upload-Error')) br(2);
							else br(0);
						} else {
							if (this.getResponseHeader('X-Not-Allowed')) br(3);
							else br(2);
						}
					}, function() {
						br(2);
					}, function() {
						br(1);
					}, function(q, r) {
						if (bc.innerHTML.indexOf('(') != -1) bc.innerHTML = e + ' (' + ((q + bq.d) * 100 / bq.e).toFixed(1) + '%)';
					});
				},
				br = function(a) {
					if (typeof bq.f == 'undefined' || bq.f < a) bq.f = a;
					if (bq.c && bq.c.length) bq(bq.c.shift());
					else {
						switch (bq.f) {
						case 0:
							{
								bc.innerHTML = bc.getAttribute('data-uploading-complete');
								bc.className = 'textolite-success';
								break;
							}
						case 1:
							{
								bc.innerHTML = bc.getAttribute('data-no-response');
								bc.className = 'textolite-error';
								break;
							}
						case 2:
							{
								bc.innerHTML = bc.getAttribute('data-uploading-error');
								bc.className = 'textolite-error';
								break;
							}
						case 3:
							{
								bc.innerHTML = bc.getAttribute('data-extension-error');
								bc.className = 'textolite-error';
								break;
							}
						}
						delete bq.f;
						delete bq.c;
						delete bq.e;
						delete bq.d;
						delete bq.b;
					}
				},
				bs = function() {
					var a = this.nextElementSibling,
						b = a.nextElementSibling,
						c = this.parentNode.parentNode,
						d = function() {
							var e = c.parentNode,
								a = c.firstElementChild.firstElementChild,
								f = a.getAttribute('data-url'),
								g = am();
							aa('textolite_token', g);
							bc.innerHTML = bc.getAttribute('data-file-deletion');
							bc.className = 'textolite-processing';
							ae(bc);
							e.style.display = 'none';
							al('remove=' + encodeURIComponent(f) + '&token=' + g, function() {
								var h = e.parentNode,
									i = h.previousElementSibling.firstElementChild,
									j = i.nextElementSibling;
								bc.innerHTML = bc.getAttribute('data-file-deleted');
								bc.className = 'textolite-success';
								e.parentNode.removeChild(e);
								if (a.parentNode.className == 'textolite-disable') location.href = location.href.replace(location.hash, '');
								j.innerHTML = an((this.getResponseHeader('X-Folder-Size')) * 1);
							}, function() {
								bc.className = 'textolite-error';
								e.style.display = 'block';
								if (this.getResponseHeader('X-Not-Allowed')) {
									bc.innerHTML = bc.getAttribute('data-request-rejected');
									c.className = c.className.replace(' textolite-confirm', '');
								} else bc.innerHTML = bc.getAttribute('data-deletion-error');
							}, function() {
								bc.innerHTML = bc.getAttribute('data-no-response');
								bc.className = 'textolite-attention';
								e.style.display = 'block';
							});
						};
					c.className += ' textolite-confirm';
					b.addEventListener('click', function() {
						a.removeEventListener('click', d);
						c.className = c.className.replace(' textolite-confirm', '');
					});
					a.addEventListener('click', d);
				};
			bl(be);
			bd.addEventListener('mousedown', function() {
				if (this.nextElementSibling.style.display != 'block') bh(be);
			});
		}
	});
	document.addEventListener('DOMContentLoaded', function() {
		var ba = document.getElementById('textolite-panel'),
			bb = document.getElementById('textolite-settings');
		if (ba && bb) {
			var bc = ba.querySelector('div>ol+ul>li+li>a'),
				bd = bb.querySelector('dd a'),
				bv = bb.querySelectorAll('fieldset'),
				bw = bb.querySelectorAll('legend'),
				be = bb.querySelector('input[type="password"]'),
				bf = bb.querySelectorAll('dd input[type="text"]'),
				bg = bb.querySelectorAll('input[type="radio"]'),
				bt = bb.querySelectorAll('input[type="checkbox"]'),
				bh = bb.querySelector('fieldset + p input[type="button"]'),
				bx = bb.querySelector('p a'),
				bi = ba.querySelector('div>div+ul+p samp'),
				bj = function() {
					if (this.className) {
						this.previousElementSibling.type = 'password';
						this.className = '';
						this.title = bi.getAttribute('data-show-password');
					} else {
						this.previousElementSibling.type = 'text';
						this.className = 'textolite-hidden';
						this.title = bi.getAttribute('data-hide-password');
					}
				},
				bk = function() {
					var f = false,
						a = false,
						b = false;
					if (be.value.length > 0 && be.value != be.a) a = true;
					for (var c = 0, d = bf.length; c < d; c++) {
						var e = bf[c].parentNode.getAttribute('defaultValue');
						if (e && e != bf[c].value) f = true;
						if (bf[c].value != bf[c].a) a = true;
						var dt = bf[c].parentNode.previousElementSibling;
						if (c == 5) {
							if (!bf[c].value.match('^[-a-z0-9._/]{1,30}$')) {
								dt.className = 'textolite-error';
								b = true;
							} else dt.className = '';
						} else if (c == 6) {
							if (!bf[c].value.match('^[0-9a-z]{0,7}$')) {
								dt.className = 'textolite-error';
								b = true;
							} else dt.className = '';
						} else {
							if (!bf[c].value.match('^[1-9][0-9]{0,6}$')) {
								dt.className = 'textolite-error';
								b = true;
							} else dt.className = '';
						}
					}
					for (var c = 0, d = bg.length; c < d; c++) {
						if (bg[c].checked != bg[c].a) a = true;
					}
					for (var c = 0, d = bt.length; c < d; c++) {
						var e = bt[c].parentNode.parentNode.getAttribute('defaultValue');
						if (e && !! (e * 1) != bt[c].checked) f = true;
						if (bt[c].checked != bt[c].a) a = true;
					}
					if (a && !b) bh.disabled = false;
					else bh.disabled = true;
					if (f && bx.className != 'textolite-active') {
						bx.addEventListener('click', bz);
						bx.className = 'textolite-active';
					} else if (!f && bx.className == 'textolite-active') {
						bx.removeEventListener('click', bz);
						bx.className = '';
					}
				},
				bl = function(event) {
					if (event.keyCode == 13) bm();
				},
				bm = function() {
					if (!bh.disabled) {
						bn();
						bh.disabled = true;
						be.b = be.value;
						be.removeEventListener('input', bk);
						for (var a = 0, b = bf.length; a < b; a++) {
							bf[a].b = bf[a].value;
							bf[a].removeEventListener('input', bk);
						}
						for (var a = 0, b = bg.length; a < b; a++) {
							bg[a].b = bg[a].checked;
							bg[a].removeEventListener('change', bk);
						}
						for (var a = 0, b = bt.length; a < b; a++) {
							bt[a].b = bt[a].checked;
							bt[a].removeEventListener('change', bk);
						}
						if (be.value) {
							bi.innerHTML = bi.getAttribute('data-password-hashing');
							bi.className = 'textolite-processing';
							ae(bi);
							bo(be.value, bi.getAttribute('data-pass-complexity'), 200, bp);
						} else bp('');
					}
				},
				by = function(event) {
					var a = this.nextElementSibling;
					if (a) {
						var b = this.parentNode;
						if (b.className == 'textolite-open') {
							if (!b.querySelector('.textolite-error')) {
								ap(a, function(event) {
									b.className = '';
								});
							}
						} else {
							b.className = 'textolite-open';
							ao(a);
							if (event) {
								for (var c = 0, d = bw.length; c < d; c++) {
									if (bw[c] == this) {
										aa('textolite_settings', c, 60 * 24 * 90, bi.getAttribute('data-system-url'));
										break;
									}
								}
							}
						}
					}
				},
				bn = function() {
					var a = document.createElement('input');
					a.style.marginLeft = '-2000px';
					ba.appendChild(a);
					a.focus();
					ba.removeChild(a);
				},
				bo = function(a, b, c, d) {
					var e = 0,
						f = aj(aj(a).substring(0, 22) + a),
						g = setInterval(function() {
							for (var h = e + c; e < h; e++) {
								if (e < b) f = aj(f);
								else {
									d(f);
									clearInterval(g);
									break;
								}
							}
						}, 0);
				},
				bz = function() {
					for (var a = 0, b = bf.length; a < b; a++) {
						var c = bf[a].parentNode.getAttribute('defaultValue');
						if (c && c != bf[a].value) bf[a].value = c;
					}
					for (var a = 0, b = bg.length; a < b; a++) {
						var c = bg[a].parentNode.parentNode.getAttribute('defaultValue');
						if (c && !! (c * 1) != bg[a].checked) bg[a].checked = !! (c * 1);
					}
					for (var a = 0, b = bt.length; a < b; a++) {
						var c = bt[a].parentNode.parentNode.getAttribute('defaultValue');
						if (c && !! (c * 1) != bt[a].checked) bt[a].checked = !! (c * 1);
					}
					bx.removeEventListener('click', bz);
					bx.className = '';
					bk();
				},
				bp = function(a) {
					var b = false;
					bi.innerHTML = bi.getAttribute('data-saving');
					bi.className = 'textolite-processing';
					ae(bi);
					var c = am();
					aa('textolite_token', c);
					var d = 'token=' + c + '&settings[password]=' + a + '&settings[auth_error_limit]=' + bf[0].value + '&settings[auth_lockout_duration]=' + bf[1].value + '&settings[auth_session_reset]=' + bf[2].value + '&settings[code_redraw_delay]=' + bf[3].value + '&settings[code_undo_limit]=' + bf[4].value + '&settings[default_file]=' + bf[5].value + '&settings[logout_to_site]=' + (bt[0].checked * 1) + '&settings[site_scripts]=' + (bt[1].checked * 1) + '&settings[site_styles]=' + (bt[2].checked * 1) + '&settings[code_highlighting]=' + (bt[3].checked * 1) + '&settings[update_final]=' + (bt[4].checked * 1) + '&settings[update_beta]=' + (bt[5].checked * 1);
					for (var e = 0, f = bg.length; e < f; e++) {
						if (bg[e].checked) {
							if (bg[e].a != bg[e].checked) b = true;
							d += '&settings[lang]=' + bg[e].value;
						}
					}
					if ((bt[1].originalValue != bt[1].checked || bt[2].originalValue != bt[2].checked) && document.documentElement.id == 'textolite-visual') b = true;
					else if (bt[3].originalValue != bt[3].checked && document.documentElement.id == 'textolite-code') b = true;
					al(d, function() {
						if (bf[6].value) bu(bq);
						else {
							if (b) {
								aa('textolite_changelang', 1, false, bi.getAttribute('data-system-url'));
								for (var g = '', h = 0, i = bv.length; h < i; h++) {
									if (bv[h].className == 'textolite-open') g += h;
								}
								aa('textolite_state', g, false, bi.getAttribute('data-system-url'));
								location.href = location.href.replace(location.hash, '');
							} else {
								bq();
								bi.innerHTML = bi.getAttribute('data-saved');
								bi.className = 'textolite-success';
							}
						}
					}, function() {
						if (bf[6].value) bu(br);
						else br();
						bi.innerHTML = bi.getAttribute('data-request-rejected');
					}, function() {
						if (bf[6].value) bu(br);
						else br();
						bi.innerHTML = bi.getAttribute('data-no-response');
					});
				},
				bq = function() {
					be.a = be.b;
					be.addEventListener('input', bk);
					for (var a = 0, b = bf.length - 1; a < b; a++) {
						bf[a].a = bf[a].b;
						bf[a].addEventListener('input', bk);
					}
					bf[6].addEventListener('input', bk);
					for (var a = 0, b = bg.length; a < b; a++) {
						bg[a].a = bg[a].b;
						bg[a].addEventListener('change', bk);
					}
					for (var a = 0, b = bt.length; a < b; a++) {
						bt[a].a = bt[a].b;
						bt[a].addEventListener('change', bk);
					}
					bi.setAttribute('data-logout-to-site', bt[0].b * 1);
					bk();
				},
				br = function() {
					be.addEventListener('input', bk);
					for (var a = 0, b = bf.length; a < b; a++) bf[a].addEventListener('input', bk);
					for (var a = 0, b = bg.length; a < b; a++) bg[a].addEventListener('change', bk);
					for (var a = 0, b = bt.length; a < b; a++) bt[a].addEventListener('change', bk);
					bh.disabled = false;
					bi.className = 'textolite-error';
				},
				bs = function() {
					if (!bb.a) {
						bd.title = bi.getAttribute('data-show-password');
						bd.addEventListener('mousedown', bj);
						be.addEventListener('input', bk);
						be.addEventListener('keydown', bl);
						be.a = be.value;
						for (var a = 0, b = bf.length; a < b; a++) {
							bf[a].a = bf[a].value;
							bf[a].addEventListener('input', bk);
							bf[a].addEventListener('keydown', bl);
						}
						for (var a = 0, b = bg.length; a < b; a++) {
							bg[a].a = bg[a].checked;
							bg[a].parentNode.addEventListener('click', function() {
								for (var a = 0, b = bg.length; a < b; a++) {
									if (bg[a].parentNode == this) {
										bg[a].parentNode.className = '';
										bg[a].checked = true;
										bk.call(bg[a])
									} else bg[a].parentNode.className = 'textolite-active';
								}
							});
							if (bg[a].checked) bg[a].parentNode.className = '';
							else bg[a].parentNode.className = 'textolite-active';
						}
						for (var a = 0, b = bt.length; a < b; a++) {
							bt[a].a = bt[a].checked;
							bt[a].addEventListener('change', bk);
						}
						bh.addEventListener('click', bm);
						for (var a = 0, b = bw.length; a < b; a++) bw[a].addEventListener('click', by);
						if (!bb.querySelector('.textolite-open')) {
							var c = ac('textolite_settings');
							if (!c) c = 0;
							setTimeout(function() {
								by.call(bw[c]);
							}, 200)
						}
						bk();
						bb.a = true
					}
				},
				bu = function(a, f) {
					bi.innerHTML = bi.getAttribute('data-download-installer');
					bi.className = 'textolite-processing';
					var b = 'system=' + encodeURIComponent(location.hostname.replace('www.', '') + bi.getAttribute('data-system-url').slice(0, -1)) + '&version=' + bi.getAttribute('data-version') + '&key=' + bf[6].value + '&lip=' + bi.getAttribute('data-ip') + '&sip=' + bi.getAttribute('data-sip') + '&final=' + bi.getAttribute('data-update-final') + '&beta=' + bi.getAttribute('data-update-beta');
					if (!f) b += '&confirm=1';
					al(b, function(e) {
						if (!this.getResponseHeader('X-Confirmation')) {
							bi.innerHTML = bi.getAttribute('data-system-update');
							var c = am();
							aa('textolite_token', c);
							al('install=' + encodeURIComponent(e.split('a').join('_')) + '&token=' + c, function(d) {
								aa('textolite_activate', 1, false, bi.getAttribute('data-system-url'));
								aa('textolite_check', 1, false, bi.getAttribute('data-system-url'));
								if (d && d.substring(d.length - 5) == '.html') location.href = d;
								else location.href = location.href.replace(location.hash, '');
							}, function() {
								bi.innerHTML = bi.getAttribute('data-update-error');
								bi.className = 'textolite-error';
								a();
							}, function() {
								if (this.status == 403) bi.innerHTML = bi.getAttribute('data-request-blocked');
								else bi.innerHTML = bi.getAttribute('data-no-response');
								bi.className = 'textolite-error';
								a();
							});
						} else {
							bf[6].currentKey = bf[6].value;
							bf[6].value = '';
							a();
							bf[6].value = bf[6].currentKey;
							ca(e);
						}
					}, function() {
						bi.innerHTML = bi.getAttribute('data-request-rejected');
						bi.className = 'textolite-error';
						a();
					}, function() {
						bi.innerHTML = bi.getAttribute('data-no-connect');
						bi.className = 'textolite-error';
						a();
					}, function() {}, _a(0));
				},
				ca = function(a) {
					bi.innerHTML = bi.getAttribute('data-attachment-domain');
					bi.className = 'textolite-attention';
					var b = bf[6],
						c = b.parentNode.nextElementSibling,
						d = c.firstElementChild,
						e = d.removeChild(d.firstElementChild),
						f = d.nextElementSibling,
						g = f.nextElementSibling,
						h = a.split(',');
					if (h && h.length) {
						for (var i = 0, j = h.length; i < j; i++) {
							var k = e.cloneNode(true),
								l = k.firstElementChild,
								m = l.nextElementSibling,
								n = m.nextElementSibling;
							l.innerHTML = (i + 1);
							m.value = b.value;
							if (h[i]) {
								n.value = h[i];
								if (h[i + 1]) k.className = 'textolite-locked';
								else f.firstElementChild.innerHTML = h[i];
							}
							d.appendChild(k);
						}
						d.e = e;
						if (window.getComputedStyle(c)['display'] == 'none') {
							c.style.display = 'block';
							ad(b, 0, 212, 400, function(o) {
								return ((-Math.cos(o * Math.PI) / 2) + 0.5);
							}, function(o) {
								b.style.marginRight = o.toFixed(0) + 'px';
							}, function() {
								var e = d.firstElementChild,
									r = function() {
										e.style.position = 'absolute';
										e.style.display = 'block';
										var p = e.clientHeight;
										e.style.height = '0';
										e.style.opacity = '0';
										e.style.overflow = 'hidden';
										e.style.position = '';
										ad(e, 0, p, 75, function(o) {
											return ((-Math.cos(o * Math.PI) / 2) + 0.5);
										}, function(o) {
											e.style.height = o.toFixed(0) + 'px';
										}, function() {
											ad(e, 0, 1, 75, function(o) {
												return ((-Math.cos(o * Math.PI) / 2) + 0.5);
											}, function(o) {
												e.style.opacity = o.toFixed(1);
											}, function() {
												if (window.getComputedStyle(b)['display'] != 'none') b.style.display = 'none';
												e.style.height = '';
												e.style.opacity = '';
												e.style.overflow = '';
												e = e.nextElementSibling;
												if (e) r();
												else {
													f.style.position = 'absolute';
													f.style.display = 'block';
													var p = f.clientHeight;
													f.style.height = '0';
													f.style.overflow = 'hidden';
													f.style.position = '';
													var q = f.innerHTML;
													f.innerHTML = '';
													ad(f, 0, p, 400, function(o) {
														return ((-Math.cos(o * Math.PI) / 2) + 0.5);
													}, function(o) {
														f.style.height = o.toFixed(0) + 'px';
													}, function() {
														ad(f, 0, q.length, 500, function(o) {
															return o;
														}, function(o) {
															f.innerHTML = q.substring(0, o.toFixed(0));
														}, function() {
															f.style.height = '';
															f.style.overflow = '';
															g.style.display = 'block';
															g.style.opacity = '0';
															ad(g, 0, 1, 400, function(o) {
																return ((-Math.cos(o * Math.PI) / 2) + 0.5);
															}, function(o) {
																g.style.opacity = o.toFixed(1);
															}, function() {
																g.style.opacity = '';
																g.firstElementChild.addEventListener('click', function() {
																	bu(function() {}, 1);
																});
																g.firstElementChild.nextElementSibling.addEventListener('click', cb)
															});
														});
													});
												}
											});
										});
									};
								r();
							});
						}
					}
				},
				cb = function() {
					af(bi);
					var b = bf[6],
						c = b.parentNode.nextElementSibling,
						d = c.firstElementChild,
						f = d.nextElementSibling,
						g = f.nextElementSibling;
					if (window.getComputedStyle(c)['display'] != 'none') {
						ad(g, 1, 0, 75, function(o) {
							return o;
						}, function(o) {
							g.style.opacity = o.toFixed(1);
						}, function() {
							g.style.display = '';
							g.style.opacity = '';
							ad(f, 1, 0, 200, function(o) {
								return o;
							}, function(o) {
								f.style.opacity = o.toFixed(1);
							}, function() {
								var p = f.clientHeight;
								f.style.overflow = 'hidden';
								ad(f, p, 0, 200, function(o) {
									return ((-Math.cos(o * Math.PI) / 2) + 0.5);
								}, function(o) {
									f.style.height = o.toFixed(0) + 'px';
								}, function() {
									f.style.display = '';
									f.style.height = '';
									f.style.opacity = '';
									f.style.overflow = '';
									b.style.display = 'block';
									b.value = "";
									ad(d, 1, 0, 200, function(o) {
										return ((-Math.cos(o * Math.PI) / 2) + 0.5);
									}, function(o) {
										d.style.opacity = o.toFixed(1);
									}, function() {
										var p = d.clientHeight;
										d.style.overflow = 'hidden';
										ad(d, p, 0, 400, function(o) {
											return ((-Math.cos(o * Math.PI) / 2) + 0.5);
										}, function(o) {
											d.style.height = o.toFixed(0) + 'px';
										}, function() {
											d.style.opacity = '';
											d.style.height = '';
											d.style.overflow = '';
											d.innerHTML = '';
											d.appendChild(d.e);
										});
										ad(b, 212, 0, 400, function(o) {
											return ((-Math.cos(o * Math.PI) / 2) + 0.5);
										}, function(o) {
											b.style.marginRight = o.toFixed(0) + 'px';
										}, function() {
											b.style.marginRight = '';
											c.style.display = '';
										})
									})
								})
							})
						})
					}
				};
			var a = ac('textolite_state');
			if (a) {
				ab('textolite_state', bi.getAttribute('data-system-url'));
				bi.innerHTML = bi.getAttribute('data-saved');
				bi.className = 'textolite-success';
				ae(bi);
				var b = bc.nextElementSibling;
				b.style.display = 'block';
				b.className = 'textolite-menu';
				bc.className = '';
				for (var c = 0, d = a.length; c < d; c++) {
					for (var e = 0, f = bv.length; e < f; e++) {
						if ((a.slice(c, c + 1) * 1) == e) {
							bv[e].className = 'textolite-open';
							bv[e].lastElementChild.style.display = 'block';
						}
					}
				}
				bs();
			}
			bc.addEventListener('mousedown', bs);
		}
	});
}());