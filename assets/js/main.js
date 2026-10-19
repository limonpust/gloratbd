$(function () {
  const IMG = 'assets/img/';
  const products = [
    ['Computer & Laptop', 'computer', 'Desktops, laptops, workstations, monitors and accessories for every team size.'],
    ['Printing Items', 'printing', 'Toner, ink, drums, printer parts, printers, scanners and photocopiers.'],
    ['IT Accessories', 'accessories', 'Keyboards, mice, cables, SSD, HDD, docking stations and connectors.'],
    ['Office Supplies', 'office', 'Paper, stationery, office equipment and everyday essentials.'],
    ['UPS & Power Solutions', 'ups', 'Inverters, industrial and commercial batteries, online and offline UPS.'],
    ['Networking & Infrastructure', 'network', 'Switches, routers, access points, network cables and server racks.'],
    ['CCTV & Security', 'cctv', 'IP cameras, DVR/NVR systems, access control and surveillance kits.']
  ];
  const services = [
    ['Networking Solutions', 'network', 'LAN/WAN setup, firewall installation, managed switches, enterprise routers and WiFi solutions.'],
    ['CCTV & Security Systems', 'cctv', 'IP camera setup, DVR/NVR installation, access control systems and video analytics integration.'],
    ['Installation & Implementation', 'install', 'Hardware setup, network configuration, system integration and on-site testing.'],
    ['Servicing & AMC', 'itservices', 'Regular scheduled maintenance, quick-response on-site support and remote system monitoring.'],
    ['Digital Transformation', 'digital', 'Cloud infrastructure setup, enterprise software integration, automation and strategic IT consulting.']
  ];
  const focus = [
    ['IT equipment supply', 'Desktops, laptops, servers, storage and workstations'],
    ['Printing & consumables', 'Genuine toners, ink, printers, photocopiers and drums'],
    ['Networking & security', 'LAN/WAN, CCTV, IP cameras, access control and firewalls'],
    ['IT services & support', 'On-site support, remote diagnostics and system integration'],
    ['Digital transformation', 'Cloud infrastructure, enterprise software and IT consulting'],
    ['Installation & AMC', 'Hardware setup and annual maintenance contracts']
  ];
  const values = [
    ['Integrity & Transparency', 'Uncompromising ethics and open communication in all business interactions.'],
    ['Customer Satisfaction', 'Putting client needs at the center of everything we do.'],
    ['Innovation & Excellence', 'Striving for continuous improvement and modern technology standards.'],
    ['Teamwork & Collaboration', 'Working together to deliver optimal results for our clients.'],
    ['Sustainable Growth', 'Building long-term value for partners, employees and the community.']
  ];
const brands = {
    'Computer & Laptops': [
        { name: 'HP', image: 'assets/img/hp.png' },
        { name: 'DELL', image: 'assets/img/dell.png' },
        { name: 'LENOVO', image: 'assets/img/lenovo.png' }
    ],
    'Printing Items': [
        { name: 'HP', image: 'assets/img/hp.png' },
        { name: 'CANON', image: 'assets/img/canon.png' },
        { name: 'BROTHER', image: 'assets/img/brother.png' }
    ],
    'UPS & Power Systems': [
        { name: 'APOLLO', image: 'assets/img/apollo.png' },
        { name: 'KSTAR', image: 'assets/img/kstar.png' },
        { name: 'APC', image: 'assets/img/apc.png' }
    ]
};
  const assure = [
    ['Genuine products', '100% authentic products backed by official manufacturer warranties.'],
    ['Authorized partner', 'Direct partnership with global brands for a reliable supply chain.'],
    ['Best price guarantee', 'Competitive commercial pricing that gives maximum value for your investment.'],
    ['After-sales support', 'A dedicated technical team for warranty and service management.']
  ];
  const why = [
    ['Wide range of products', 'From top global brands with genuine manufacturer warranty and full compliance.'],
    ['Competitive pricing', 'The best commercial value and cost savings for your technology investments.'],
    ['Reliable, on-time delivery', 'Efficient logistics so your business operations run without interruption.'],
    ['Expert technical support', 'Skilled engineers who troubleshoot quickly and effectively.'],
    ['Customized solutions', 'IT configurations and packages designed around your operational needs.'],
    ['Long-term partnership', 'Committed to mutual growth, trust, transparency and sustainable success.']
  ];
  const tick = '<svg class="w-5 h-5 shrink-0 text-gold mt-0.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>';

  // ---- Render data-driven blocks
  $('#focus').html(focus.map(f => `<div class="flex gap-3">${tick}<div><p class="font-semibold text-navy">${f[0]}</p><p class="text-sm">${f[1]}</p></div></div>`).join(''));
  $('#values').html(values.map(v => `<li class="flex gap-3">${tick}<span><b class="text-navy">${v[0]}:</b> ${v[1]}</span></li>`).join(''));
  $('#assure').html(assure.map(a => `<div class="border border-slate-200 rounded-xl p-6"><span class="block w-10 h-1 bg-gold mb-4"></span><h3 class="text-lg font-semibold text-navy">${a[0]}</h3><p class="mt-2 text-sm">${a[1]}</p></div>`).join(''));
  $('#whyGrid').html(why.map(w => `<div class="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition"><h3 class="text-xl font-semibold">${w[0]}</h3><p class="mt-2 text-slate-300">${w[1]}</p></div>`).join(''));
  $('#productGrid').html(products.map((p, i) => `<button class="pcard group text-left bg-white rounded-xl overflow-hidden ring-1 ring-slate-200 hover:ring-navy hover:-translate-y-1 hover:shadow-xl transition" data-i="${i}"><div class="overflow-hidden h-44"><img src="${IMG}p-${p[1]}.jpg" alt="${p[0]}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"></div><div class="p-5"><h3 class="text-xl font-semibold text-navy">${p[0]}</h3><p class="mt-2 text-sm line-clamp-2">${p[2]}</p><span class="mt-3 inline-block text-sm font-semibold text-gold">View details</span></div></button>`).join(''));
  $('#svcTabs').html(services.map((s, i) => `<button role="tab" class="vtab w-full text-left px-5 py-4 rounded-lg border border-transparent bg-white/50 hover:bg-white transition font-semibold text-navy" data-i="${i}">${s[0]}</button>`).join(''));
  $('#brandTabs').html(Object.keys(brands).map((k, i) => `<button class="btab tab px-5 py-2.5 rounded-md border border-slate-300 font-semibold text-sm" data-k="${k}">${k}</button>`).join(''));
  $('#topic').html('<option>General enquiry</option>' + products.map(p => `<option>${p[0]}</option>`).join('') + services.map(s => `<option>${s[0]}</option>`).join(''));
  $('#yr').text(new Date().getFullYear());

  // ---- Hero slider
  const $slides = $('.slide'), n = $slides.length, DUR = 6500;
  let cur = 0, timer = null, paused = false; const prog = { s: 0 };
  $('#dots').html($slides.map((i) => `<button class="dot h-2.5 rounded-full bg-white/40 transition-all" style="width:10px" data-i="${i}" aria-label="Go to slide ${i + 1}"></button>`).get().join(''));
  function runBar() {
    $('#bar').stop(true).css('transform', 'scaleX(0)');
    prog.s = 0; $(prog).stop(true).animate({ s: 1 }, { duration: DUR, easing: 'linear', step: s => $('#bar').css('transform', `scaleX(${s})`) });
  }
  function go(i) {
    cur = (i + n) % n;
    $slides.removeClass('active').attr('aria-hidden', 'true').eq(cur).addClass('active').removeAttr('aria-hidden');
    $('.dot').css({ width: '10px', background: 'rgba(255,255,255,.4)' }).eq(cur).css({ width: '34px', background: '#B58A2E' });
    clearTimeout(timer);
    if (!paused) { runBar(); timer = setTimeout(() => go(cur + 1), DUR); } else { $('#bar').css('transform', 'scaleX(0)'); }
  }
  $('#next').on('click', () => go(cur + 1));
  $('#prev').on('click', () => go(cur - 1));
  $('#dots').on('click', '.dot', function () { go(+$(this).data('i')); });
  $('#slider').on('mouseenter focusin', () => { paused = true; clearTimeout(timer); $(prog).stop(true); })
              .on('mouseleave focusout', () => { paused = false; go(cur); });
  $(document).on('keydown', e => { if ($(e.target).is('input,textarea,select') || $('#modal').hasClass('open')) return; if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1); });
  let x0 = null;
  $('#slider').on('touchstart', e => { x0 = e.originalEvent.touches[0].clientX; })
              .on('touchend', e => { if (x0 === null) return; const dx = e.originalEvent.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1)); x0 = null; });
  go(0);

  // ---- Navigation: sticky shadow, progress, scroll-spy, mobile menu, back-to-top
  const ids = ['home', 'about', 'mission', 'products', 'services', 'brands', 'why', 'contact'];
  function onScroll() {
    const y = $(window).scrollTop(), h = $(document).height() - $(window).height();
    $('#hdr').toggleClass('shadow-md', y > 10);
    $('#scrollBar').css('width', (h > 0 ? y / h * 100 : 0) + '%');
    $('#toTop').toggleClass('hidden', y < 600).toggleClass('grid', y >= 600);
    let active = ids[0];
    ids.forEach(id => { if ($('#' + id).offset().top - 120 <= y) active = id; });
    $('.nav-link').each(function () { $(this).toggleClass('on', $(this).attr('href') === '#' + active); });
  }
  $(window).on('scroll resize', onScroll); onScroll();
  function menu(open) {
    $('#mobileNav').toggleClass('hidden', !open);
    $('#menuBtn').attr('aria-expanded', open);
    $('#menuIcon').attr('d', open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16');
  }
  $('#menuBtn').on('click', () => menu($('#mobileNav').hasClass('hidden')));
  $('.mnav').on('click', () => menu(false));
  $('#toTop').on('click', () => $('html,body').animate({ scrollTop: 0 }, 500));

  // ---- Mission tabs
  $('#mvTabs').on('click', '.tab', function () {
    $('#mvTabs .tab').removeClass('on'); $(this).addClass('on');
    $('#mission .panel').removeClass('on').filter(`[data-p="${$(this).data('t')}"]`).addClass('on');
  });

  // ---- Product modal
  let curTopic = '';
  function openModal(p) {
    curTopic = p[0];
    $('#mImg').attr({ src: `${IMG}p-${p[1]}.jpg`, alt: p[0] }); $('#mTitle').text(p[0]); $('#mText').text(p[2]);
    $('#modal').addClass('open'); $('#mClose').focus();
  }
  const closeModal = () => $('#modal').removeClass('open');
  $('#productGrid').on('click', '.pcard', function () { openModal(products[+$(this).data('i')]); });
  $('#mClose').on('click', closeModal);
  $('#modal').on('click', e => { if (e.target.id === 'modal') closeModal(); });
  $(document).on('keydown', e => { if (e.key === 'Escape') closeModal(); });
  $('#mQuote').on('click', () => { $('#topic').val(curTopic); closeModal(); $('html,body').animate({ scrollTop: $('#contact').offset().top - 80 }, 500); });

  // ---- Services tabs
  function showSvc(i) {
    const s = services[i];
    $('.vtab').removeClass('on').eq(i).addClass('on');
    $('#svcPanel').html(`<img src="${IMG}p-${s[1]}.jpg" alt="${s[0]}" class="w-full h-56 object-cover"><div class="p-7"><h3 class="text-2xl font-semibold text-navy">${s[0]}</h3><p class="mt-3 text-lg">${s[2]}</p><button class="svcq mt-5 bg-navy text-white font-semibold px-5 py-2.5 rounded-md hover:bg-ink" data-i="${i}">Ask about this service</button></div>`);
  }
  $('#svcTabs').on('click', '.vtab', function () { showSvc(+$(this).data('i')); });
  $('#svcPanel').on('click', '.svcq', function () { $('#topic').val(services[+$(this).data('i')][0]); $('html,body').animate({ scrollTop: $('#contact').offset().top - 80 }, 500); });
  showSvc(0);

  // ---- Brand tabs
  function showBrands(k) {
    $('.btab').removeClass('on').filter((_, el) => $(el).data('k') === k).addClass('on');
    $('#brandChips').html(brands[k].map(b => `<span class="px-10 py-6 rounded-xl border border-slate-200 bg-white shadow-sm font-serif text-2xl font-semibold text-navy tracking-wide">${b}</span>`).join(''));
  }
  $('#brandTabs').on('click', '.btab', function () { showBrands($(this).data('k')); });
  showBrands(Object.keys(brands)[0]);

  // ---- Quote form
  function toast(t) { $('#toast').text(t).fadeIn(150).delay(3200).fadeOut(300); }
  $('#quoteForm').on('submit', function (e) {
    e.preventDefault();
    const f = this; let ok = true;
    const rules = { name: v => v.trim().length > 1, phone: v => /^[+\d][\d\s-]{6,}$/.test(v.trim()), email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: v => v.trim().length > 4 };
    $.each(rules, (k, fn) => {
      const $i = $(f[k]), good = fn($i.val());
      $i.toggleClass('border-red-600', !good).siblings('.err').toggleClass('hidden', good);
      if (!good) { if (ok) $i.focus(); ok = false; }
    });
    if (!ok) return;
    const body = `Name: ${f.name.value}\nCompany: ${f.company.value}\nPhone: ${f.phone.value}\nEmail: ${f.email.value}\nInterested in: ${f.topic.value}\n\n${f.msg.value}`;
    window.location.href = `mailto:gloratinternational@gmail.com?subject=${encodeURIComponent('Quote request: ' + f.topic.value)}&body=${encodeURIComponent(body)}`;
    toast('Opening your email app with your request.');
  });
  $('#quoteForm input, #quoteForm textarea').on('input', function () { $(this).removeClass('border-red-600').siblings('.err').addClass('hidden'); });
});
