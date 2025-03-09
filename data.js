const _0x23bf52 = _0x17d4;
(function (_0x4ce707, _0x2fccf6) {
  const _0x59707a = _0x17d4, _0x17af86 = _0x4ce707();
  while (true) {
    try {
      const _0x5a0717 = parseInt(_0x59707a(470)) / 1 * (parseInt(_0x59707a(348)) / 2) + -parseInt(_0x59707a(530)) / 3 * (parseInt(_0x59707a(414)) / 4) + parseInt(_0x59707a(509)) / 5 * (-parseInt(_0x59707a(511)) / 6) + -parseInt(_0x59707a(525)) / 7 + -parseInt(_0x59707a(435)) / 8 + -parseInt(_0x59707a(462)) / 9 * (parseInt(_0x59707a(241)) / 10) + -parseInt(_0x59707a(443)) / 11 * (-parseInt(_0x59707a(456)) / 12);
      if (_0x5a0717 === _0x2fccf6) break; else _0x17af86.push(_0x17af86.shift());
    } catch (_0x574868) {
      _0x17af86.push(_0x17af86.shift());
    }
  }
}(_0xe672, 162949));
const sentNotifications = new Set(JSON[_0x23bf52(141)](localStorage[_0x23bf52(158)](_0x23bf52(491) + _0x23bf52(188))) || []);
function saveSentNotifications() {
  const _0x2e3a24 = _0x23bf52, _0x433779 = {zxzjD: _0x2e3a24(491) + _0x2e3a24(188)};
  localStorage[_0x2e3a24(407)](_0x433779[_0x2e3a24(151)], JSON[_0x2e3a24(200)](Array[_0x2e3a24(477)](sentNotifications)));
}
function formatDate(_0x3d92b6) {
  const _0xf9fb7e = _0x23bf52, _0x201c78 = {ppBww: _0xf9fb7e(533), tKQbH: _0xf9fb7e(405), JSdKI: _0xf9fb7e(497), dEOnz: _0xf9fb7e(272), zyWOR: _0xf9fb7e(512), TRgic: _0xf9fb7e(211), YFeej: _0xf9fb7e(236), oFkKv: _0xf9fb7e(189), ctlff: _0xf9fb7e(417), iWsXX: _0xf9fb7e(436), FKrzk: _0xf9fb7e(498), PoYTz: _0xf9fb7e(375)}, _0x2174cf = [_0x201c78[_0xf9fb7e(339)], _0x201c78[_0xf9fb7e(536)], _0x201c78[_0xf9fb7e(499)], _0x201c78[_0xf9fb7e(482)], _0x201c78[_0xf9fb7e(213)], _0x201c78[_0xf9fb7e(133)], _0x201c78[_0xf9fb7e(263)], _0x201c78[_0xf9fb7e(413)], _0x201c78[_0xf9fb7e(484)], _0x201c78[_0xf9fb7e(229)], _0x201c78[_0xf9fb7e(221)], _0x201c78[_0xf9fb7e(442)]], _0x401da4 = new Date(_0x3d92b6), _0x54bd23 = _0x401da4[_0xf9fb7e(535)](), _0x1961b5 = _0x2174cf[_0x401da4[_0xf9fb7e(342)]()], _0x8340c2 = _0x401da4[_0xf9fb7e(144) + "r"]();
  return _0x54bd23 + " " + _0x1961b5 + " " + _0x8340c2;
}
async function loadMatches() {
  const _0x34e514 = _0x23bf52, _0x2eca02 = {jmsGm: _0x34e514(177), jLfQD: _0x34e514(329), oGDcv: function (_0xdeff75) {
    return _0xdeff75();
  }, WVHgc: function (_0x5b8278, _0x1ee5fd) {
    return _0x5b8278(_0x1ee5fd);
  }, fckbu: function (_0x2abb04, _0x375a8e) {
    return _0x2abb04(_0x375a8e);
  }, CUJvt: function (_0x2145cb, _0x978787, _0x50ed9c) {
    return _0x2145cb(_0x978787, _0x50ed9c);
  }, WIasm: _0x34e514(154) + _0x34e514(152) + _0x34e514(326), sAMeI: _0x34e514(237), rCDuz: _0x34e514(256), bNRAU: _0x34e514(128)};
  try {
    document[_0x34e514(123) + _0x34e514(419)](_0x2eca02[_0x34e514(315)])[_0x34e514(165)][_0x34e514(337)] = _0x2eca02[_0x34e514(300)];
    const _0x262743 = await _0x2eca02[_0x34e514(428)](fetchMatches);
    _0x2eca02[_0x34e514(438)](renderMatches, _0x262743), _0x2eca02[_0x34e514(489)](populateFilters, _0x262743), _0x2eca02[_0x34e514(428)](filterMatches), _0x2eca02[_0x34e514(428)](updateCountdown), _0x2eca02[_0x34e514(254)](setInterval, updateCountdown, 1e3);
  } catch (_0x1111dd) {
    console[_0x34e514(245)](_0x2eca02[_0x34e514(292)], _0x1111dd), document[_0x34e514(123) + _0x34e514(419)](_0x2eca02[_0x34e514(131)])[_0x34e514(460)][_0x34e514(282)](_0x2eca02[_0x34e514(178)]);
  } finally {
    document[_0x34e514(123) + _0x34e514(419)](_0x2eca02[_0x34e514(315)])[_0x34e514(165)][_0x34e514(337)] = _0x2eca02[_0x34e514(267)];
  }
}
async function fetchMatches() {
  const _0x59b969 = _0x23bf52, _0x401cbe = {ZaAsd: function (_0x2dadfa, _0x5cffb6) {
    return _0x2dadfa(_0x5cffb6);
  }, fSuIE: _0x59b969(310) + _0x59b969(449) + _0x59b969(143) + _0x59b969(265) + _0x59b969(411) + _0x59b969(516), gniZE: _0x59b969(480) + _0x59b969(303) + _0x59b969(193), ierMn: function (_0x1fcd5a, _0x5dfdcf) {
    return _0x1fcd5a(_0x5dfdcf);
  }}, _0x5b3a07 = await _0x401cbe[_0x59b969(180)](fetch, _0x401cbe[_0x59b969(493)]);
  if (!_0x5b3a07.ok) throw new Error(_0x401cbe[_0x59b969(249)]);
  const _0x487bec = await _0x5b3a07[_0x59b969(179)](), _0x16b02f = await _0x401cbe[_0x59b969(334)](fetchLiveUrls, _0x487bec);
  return _0x487bec[_0x59b969(135)](_0x2aca98 => {
    const _0x462adc = _0x59b969;
    _0x2aca98[_0x462adc(293)] = _0x16b02f[_0x2aca98[_0x462adc(532)]] || _0x2aca98[_0x462adc(531)] || _0x2aca98[_0x462adc(356)];
  }), _0x487bec;
}
function _0xe672() {
  const _0x8e7d60 = ["documentEl", "kqyck", "ame-origin", "option", "         <", "February", 'imer="', "setItem", 'lue="">Fil', "disclaimer", "pxBJv", "io/schedul", "an>", "oFkKv", "1039588rYEZTp", "ter by Lea", "smooth", "September", "jwplayerCo", "ById", "className", "jmJJb", "dzGif", "flex", "urls", " <div clas", "ATzit", "VPNgX", "oGDcv", "HwslJ", "load chann", "channelsLi", "', '", "ZZVcf", "rZANJ", "8648ZFFiLX", "October", "QZkwK", "WVHgc", "upcoming", 'lscreen="t', "GyPGG", "PoYTz", "2108788ZGIIue", "Match('", 'wn" data-t', "EGqAq", "CoZkJ", " URL for m", "rtakita.gi", "qPSaz", "FBzZC", "tvyOM", "PiCCG", "bcHzq", 't="100%" f', "48eqVBzq", "/business/", "then", "gfaLN", "classList", "Loaded", "9KbYuWR", 'nfo">\n    ', "adEJq", '-clock"></', "llow-scrip", "KVIUI", "cMTRB", "oARWy", "2flptME", "nFbiO", 'i class="f', "[data-time", "SuBxb", "hQUyi", "qrVEW", "from", "ivqTu", 's="countdo', "Network re", "buMuo", "dEOnz", "tswum", "ctlff", "querySelec", 'sers"></i>', "data-timer", "data-teams", "fckbu", "has", "sentNotifi", "csytc", "fSuIE", "teams", "pButton", "as fa-play", "March", "November", "JSdKI", "mshve", "scrollInto", "ecZoa", "fetch live", "matchTitle", "')\">", "<option va", "<span clas", "status", "15cYOnuF", '<i class="', "409998qyqCXb", "May", " <button o", "yOKaq", "data-statu", "e.json", "channels?m", "knGTA", "TcNXo", "kRyDE", 'nclick="pl', "fxynl", "leagueFilt", "atchId ", "15337qcFJUF", "streaming_", "change", "bLDZt", "toLowerCas", "3fSVwxb", "m3u8Url", "videoId", "January", "        <b", "getDate", "tKQbH", "getElement", "ayChannel(", 'ass="teams', "remove", "eXrvv", "none", "sRFgt", "akliA", "sAMeI", "scrollToTo", "TRgic", "body", "forEach", "wqJOa", "UBgRf", "result", "Dkegb", "code", "parse", "dBPAC", "thub.io/bo", "getFullYea", 'c="', "onscroll", "100%", '" allowful', "dateFilter", "hYFgY", "zxzjD", "load match", "https://83", "Failed to ", "AIBet", 's="date"><', 's="watch-b', "getItem", "QZgZV", 'ling="no"a', "videoUrl", "tlGcN", "JeLLj", "uoIcT", "style", ".schedule-", "sMjTc", "sGjSq", "div", "cnCWH", "SGsNM", "els:", "yNacB", "fetch vide", "16:9", "https://ap", "loader", "rCDuz", "json", "ZaAsd", '"><i class', 's="match-i', "y/zonaspor", "finally", "mbGcq", "lwFLF", " 🚨\nDate: ", "cations", "August", "dcast-towe", 'r"></i> Li', "Modal", " not ok", "ent", "league", "rnjtq", "/i> Watch\n", "all", "RSeQz", "stringify", "RHEEu", "SjGTZ", "fMhyz", "fvILM", "filter", "teamSearch", "getTime", "brsBA", "blZmM", "peWxH", "June", " Soon...</", "zyWOR", "XbKpA", "time", "</i> ", "PAezC", "')\">\n     ", "ement", "catch", "FKrzk", 'utton" onc', 'ver"></i> ', "</button>\n", "YYcoH", "floor", "View", "YvMFN", "iWsXX", "cbwda", "guyoh", "TwrIB", "card", "\nTime: ", "channelIte", "July", "noMatches", "VazXK", 's="live"><', "alEyr", "1992290mpKEJM", "iJnNd", "serverMenu", "      ", "error", "includes", "target", "live", "gniZE", "h_info?mat", "RKvVn", "fas fa-ser", "date", "CUJvt", "gue</optio", "show", "match/matc", "zdrfQ", "match", "sfoRj", "sort", "kqaIJ", "YFeej", "input", "la.github.", "length", "bNRAU", " </div>\n  ", 'ass="detai', "rPXMr", "ame>", "April", "scrollTop", "name", 'rue"></ifr', "onclick", "VhaQj", "IyGLM", "data", "ntainer", "setAttribu", "add", "textConten", "\n         ", "LSaSh", "rUIRt", "data-leagu", " | ", "chId=", "APwLU", "lXwuZ", "WIasm", "liveUrl", "appendChil", '" width="1', "lfidY", "LdBDR", "schedule-c", "start", "jLfQD", "setup", "span>", "sponse was", "ard", "ve Now</sp", "fWnJm", "load live ", "SFcFK", "Server ", "https://wa", "USeLy", "DovhP", "i.90min.to", "tlive", "jmsGm", '="fas fa-u', "rameborder", '00%" heigh', 'ndar-alt">', "value", "oUrl for m", "rXpWo", "UiOnM", "AYPRJ", "\nLink: htt", "es:", "uwZlc", "lXtOO", "block", "\nLeague: ", "as fa-broa", "createElem", "addEventLi", "ierMn", "as fa-cale", "scheduleCo", "display", "hovQh", "ppBww", "ailed", "URL:", "getMonth", "<iframe sr", "ZXJNK", "ter by Dat", "AupvR", "atchId=", "63514RjcIyD", "map", "DOMContent", "utton clas", "torAll", "BBJrG", "  <span cl", "FFSKr", "iframeURL", 'ss="fas fa', "stener", "</span>\n  ", "iEcyv", "SeRsk", "3zb296.app", "tOwBF", "FXjUb", "EOdZT", "aMpps", "wNLHp", "iframe_url", "getAttribu", "e</option>", '">Starting', "DjOsU", "ZrcBd", '-circle"><', "December", "button", "          ", "eURBn", 'lick="play', 'ls"><i cla', "ts allow-s", "QNhHq", "VOMwJ", "ps://bit.l", "🚨 Live Now", "i> ", "Kopms", "AupAE", "/v1/match/", '="0" scrol', "0000", "QIfAe", "apply", "GpkZV", "pLOie", "xAUWc", "data-date", "innerHTML", "Live URL f"];
  _0xe672 = function () {
    return _0x8e7d60;
  };
  return _0xe672();
}
async function fetchLiveUrls(_0x1630bd) {
  const _0xcc3efb = _0x23bf52, _0x1bc91f = {cbwda: function (_0x44500c, _0xda1b2a) {
    return _0x44500c(_0xda1b2a);
  }, RKvVn: function (_0x292218, _0x3c575d) {
    return _0x292218 > _0x3c575d;
  }, rnjtq: function (_0x1392c3, _0x4534c3) {
    return _0x1392c3(_0x4534c3);
  }, xAUWc: function (_0x35728a, _0x475142) {
    return _0x35728a === _0x475142;
  }, ecZoa: _0xcc3efb(391)}, _0x8324df = _0x1630bd[_0xcc3efb(349)](_0x39013c => _0x39013c[_0xcc3efb(532)]), _0x9bd566 = {}, _0x213f5d = _0x8324df[_0xcc3efb(349)](async _0x5d123b => {
    const _0x1e9073 = _0xcc3efb;
    try {
      const _0x5222b0 = await _0x1bc91f[_0x1e9073(230)](fetch, _0x1e9073(176) + _0x1e9073(313) + _0x1e9073(389) + _0x1e9073(517) + _0x1e9073(347) + _0x5d123b);
      if (_0x5222b0.ok) {
        const _0x4c75ce = await _0x5222b0[_0x1e9073(179)]();
        _0x4c75ce[_0x1e9073(508)] && _0x1bc91f[_0x1e9073(251)](_0x4c75ce[_0x1e9073(138)][_0x1e9073(266)], 0) && (_0x9bd566[_0x5d123b] = _0x4c75ce[_0x1e9073(138)][0][_0x1e9073(526) + _0x1e9073(424)][0]);
      }
    } catch (_0x1d07ec) {
      console[_0x1e9073(245)](_0x1e9073(154) + _0x1e9073(503) + _0x1e9073(448) + _0x1e9073(524) + _0x5d123b + ":", _0x1d07ec);
    }
    try {
      const _0x5e5309 = await _0x1bc91f[_0x1e9073(196)](fetch, _0x1e9073(153) + _0x1e9073(362) + _0x1e9073(457) + _0x1e9073(257) + _0x1e9073(250) + _0x1e9073(289) + _0x5d123b);
      if (_0x5e5309.ok) {
        const _0x1ca029 = await _0x5e5309[_0x1e9073(179)]();
        _0x1bc91f[_0x1e9073(396)](_0x1ca029[_0x1e9073(140)], _0x1bc91f[_0x1e9073(502)]) && _0x1ca029[_0x1e9073(279)][_0x1e9073(138)][_0x1e9073(259)][_0x1e9073(161)] && (_0x9bd566[_0x5d123b] = _0x1ca029[_0x1e9073(279)][_0x1e9073(138)][_0x1e9073(259)][_0x1e9073(161)]);
      }
    } catch (_0x7d0c12) {
      console[_0x1e9073(245)](_0x1e9073(154) + _0x1e9073(174) + _0x1e9073(321) + _0x1e9073(524) + _0x5d123b + ":", _0x7d0c12);
    }
  });
  return await Promise[_0xcc3efb(198)](_0x213f5d), _0x9bd566;
}
function renderMatches(_0x31cf93) {
  const _0x2ec1cc = _0x23bf52, _0x21bb54 = {SeRsk: function (_0x520178, _0x1c13b5) {
    return _0x520178 >= _0x1c13b5;
  }, VazXK: function (_0x4401b4, _0x3462c2) {
    return _0x4401b4 <= _0x3462c2;
  }, hovQh: function (_0x49e8cf, _0x9b8f0e) {
    return _0x49e8cf + _0x9b8f0e;
  }, YvMFN: function (_0x55808d, _0x2209e8) {
    return _0x55808d * _0x2209e8;
  }, akliA: function (_0xb555f1, _0xc93b9) {
    return _0xb555f1 * _0xc93b9;
  }, oARWy: function (_0x19e9e3, _0x5909e5) {
    return _0x19e9e3 * _0x5909e5;
  }, wNLHp: function (_0x5ad8ee, _0x2002d6) {
    return _0x5ad8ee >= _0x2002d6;
  }, qPSaz: function (_0x5ab5e5, _0x4cb69d) {
    return _0x5ab5e5 <= _0x4cb69d;
  }, alEyr: function (_0x2ca5f1, _0x14d83c) {
    return _0x2ca5f1 * _0x14d83c;
  }, APwLU: function (_0x4810c7, _0x33f815) {
    return _0x4810c7 * _0x33f815;
  }, buMuo: function (_0x2550b7, _0x46909b) {
    return _0x2550b7 * _0x46909b;
  }, EGqAq: function (_0x49093e, _0xb2ed5e) {
    return _0x49093e && _0xb2ed5e;
  }, iJnNd: function (_0x1e46ef, _0x5b664b) {
    return _0x1e46ef && _0x5b664b;
  }, XbKpA: function (_0x2d0aa0, _0x41a39b) {
    return _0x2d0aa0 >= _0x41a39b;
  }, fxynl: function (_0x430e96, _0x39a022) {
    return _0x430e96 * _0x39a022;
  }, QIfAe: function (_0x4c95e4, _0x42c200) {
    return _0x4c95e4 * _0x42c200;
  }, guyoh: function (_0x3d18fa, _0x4b017f) {
    return _0x3d18fa * _0x4b017f;
  }, SuBxb: _0x2ec1cc(169), YYcoH: _0x2ec1cc(298) + _0x2ec1cc(304), rPXMr: _0x2ec1cc(397), VhaQj: _0x2ec1cc(287) + "e", PiCCG: _0x2ec1cc(488), adEJq: _0x2ec1cc(515) + "s", Kopms: _0x2ec1cc(248), hYFgY: _0x2ec1cc(439), SGsNM: function (_0x4bd9c7, _0x3e2330) {
    return _0x4bd9c7(_0x3e2330);
  }, mbGcq: _0x2ec1cc(507) + _0x2ec1cc(239) + _0x2ec1cc(472) + _0x2ec1cc(331) + _0x2ec1cc(190) + _0x2ec1cc(191) + _0x2ec1cc(305) + _0x2ec1cc(412), PAezC: function (_0x3e35de) {
    return _0x3e35de();
  }, bcHzq: _0x2ec1cc(336) + _0x2ec1cc(280)}, _0x1ac902 = document[_0x2ec1cc(123) + _0x2ec1cc(419)](_0x21bb54[_0x2ec1cc(454)]);
  _0x1ac902[_0x2ec1cc(398)] = "", _0x31cf93[_0x2ec1cc(261)]((_0x337741, _0x507be0) => {
    const _0x59020b = _0x2ec1cc, _0x27350c = new Date, _0x2c7963 = new Date(_0x337741[_0x59020b(253)] + "T" + _0x337741[_0x59020b(215)]), _0x14d68b = new Date(_0x507be0[_0x59020b(253)] + "T" + _0x507be0[_0x59020b(215)]), _0x61744b = _0x21bb54[_0x59020b(361)](_0x27350c, _0x2c7963) && _0x21bb54[_0x59020b(238)](_0x27350c, new Date(_0x21bb54[_0x59020b(338)](_0x2c7963[_0x59020b(207)](), _0x21bb54[_0x59020b(228)](_0x21bb54[_0x59020b(130)](_0x21bb54[_0x59020b(469)](2, 60), 60), 1e3)))), _0x25bf20 = _0x21bb54[_0x59020b(367)](_0x27350c, _0x14d68b) && _0x21bb54[_0x59020b(450)](_0x27350c, new Date(_0x21bb54[_0x59020b(338)](_0x14d68b[_0x59020b(207)](), _0x21bb54[_0x59020b(240)](_0x21bb54[_0x59020b(290)](_0x21bb54[_0x59020b(481)](2, 60), 60), 1e3))));
    if (_0x21bb54[_0x59020b(446)](_0x61744b, !_0x25bf20)) return -1;
    if (_0x21bb54[_0x59020b(242)](!_0x61744b, _0x25bf20)) return 1;
    return 0;
  }), _0x31cf93[_0x2ec1cc(135)](_0x476834 => {
    const _0x114011 = _0x2ec1cc, _0x29ca01 = _0x476834[_0x114011(293)] || _0x476834[_0x114011(531)] || _0x476834[_0x114011(356)], _0x251400 = new Date, _0x531e6e = new Date(_0x476834[_0x114011(253)] + "T" + _0x476834[_0x114011(215)]), _0x5b49c6 = _0x21bb54[_0x114011(214)](_0x251400, _0x531e6e) && _0x21bb54[_0x114011(238)](_0x251400, new Date(_0x21bb54[_0x114011(338)](_0x531e6e[_0x114011(207)](), _0x21bb54[_0x114011(522)](_0x21bb54[_0x114011(392)](_0x21bb54[_0x114011(231)](2, 60), 60), 1e3)))), _0x201d1d = document[_0x114011(332) + _0x114011(194)](_0x21bb54[_0x114011(474)]);
    _0x201d1d[_0x114011(420)] = _0x21bb54[_0x114011(225)], _0x201d1d[_0x114011(281) + "te"](_0x21bb54[_0x114011(270)], _0x476834[_0x114011(253)][_0x114011(529) + "e"]()), _0x201d1d[_0x114011(281) + "te"](_0x21bb54[_0x114011(277)], _0x476834[_0x114011(195)][_0x114011(529) + "e"]()), _0x201d1d[_0x114011(281) + "te"](_0x21bb54[_0x114011(453)], _0x476834[_0x114011(494)][_0x114011(529) + "e"]()), _0x201d1d[_0x114011(281) + "te"](_0x21bb54[_0x114011(464)], _0x5b49c6 ? _0x21bb54[_0x114011(387)] : _0x21bb54[_0x114011(150)]);
    const _0x3a264f = !_0x5b49c6 ? _0x114011(507) + _0x114011(479) + _0x114011(445) + _0x114011(406) + _0x476834[_0x114011(253)] + "T" + _0x476834[_0x114011(215)] + (_0x114011(371) + _0x114011(212) + _0x114011(302)) : "";
    _0x201d1d[_0x114011(398)] = _0x114011(284) + _0x114011(377) + _0x114011(425) + _0x114011(182) + _0x114011(463) + _0x114011(377) + _0x114011(377) + _0x114011(507) + _0x114011(156) + _0x114011(472) + _0x114011(335) + _0x114011(319) + _0x114011(216) + _0x21bb54[_0x114011(171)](formatDate, _0x476834[_0x114011(253)]) + (_0x114011(359) + _0x114011(377) + _0x114011(377) + _0x114011(354) + _0x114011(125) + _0x114011(181) + _0x114011(316) + _0x114011(486) + " ") + _0x476834[_0x114011(494)] + (_0x114011(359) + _0x114011(377) + _0x114011(377) + _0x114011(354) + _0x114011(269) + _0x114011(380) + _0x114011(357) + _0x114011(465) + _0x114011(386)) + _0x476834[_0x114011(215)] + _0x114011(288) + _0x476834[_0x114011(195)] + (_0x114011(359) + _0x114011(377) + _0x114011(377) + "  ") + (_0x5b49c6 ? _0x21bb54[_0x114011(185)] : _0x3a264f) + (_0x114011(284) + _0x114011(377) + _0x114011(268) + _0x114011(377) + _0x114011(534) + _0x114011(351) + _0x114011(157) + _0x114011(222) + _0x114011(379) + _0x114011(444)) + _0x476834[_0x114011(532)] + _0x114011(432) + _0x476834[_0x114011(293)] + _0x114011(432) + _0x476834[_0x114011(531)] + _0x114011(432) + _0x476834[_0x114011(356)] + _0x114011(432) + _0x476834[_0x114011(494)] + (_0x114011(218) + _0x114011(377) + _0x114011(404) + _0x114011(472) + _0x114011(496) + _0x114011(374) + _0x114011(197) + _0x114011(377) + _0x114011(377) + _0x114011(224) + _0x114011(377) + _0x114011(244)), _0x1ac902[_0x114011(294) + "d"](_0x201d1d), _0x5b49c6 && !sentNotifications[_0x114011(490)](_0x476834[_0x114011(532)]) && (sentNotifications[_0x114011(282)](_0x476834[_0x114011(532)]), _0x21bb54[_0x114011(217)](saveSentNotifications));
  });
}
function updateCountdown() {
  const _0x22f61b = _0x23bf52, _0x2c7536 = {RHEEu: _0x22f61b(487), tvyOM: function (_0x1f9637, _0x8945e9) {
    return _0x1f9637 - _0x8945e9;
  }, wqJOa: function (_0x5948a7, _0x1830f5) {
    return _0x5948a7 <= _0x1830f5;
  }, AIBet: function (_0x2a3e6d, _0x49c185) {
    return _0x2a3e6d / _0x49c185;
  }, iEcyv: function (_0x31fec0, _0x5474b9) {
    return _0x31fec0 * _0x5474b9;
  }, uwZlc: function (_0x3872c2, _0x3179c7) {
    return _0x3872c2 * _0x3179c7;
  }, ZZVcf: function (_0x578471, _0x6d8010) {
    return _0x578471 / _0x6d8010;
  }, lXwuZ: function (_0xeae613, _0x1f09d0) {
    return _0xeae613 % _0x1f09d0;
  }, mshve: function (_0xe17393, _0xf5f547) {
    return _0xe17393 * _0xf5f547;
  }, QNhHq: function (_0x56370c, _0x1563c7) {
    return _0x56370c * _0x1563c7;
  }, EOdZT: function (_0x62be83, _0x5edd76) {
    return _0x62be83 % _0x5edd76;
  }, peWxH: function (_0x403616, _0x36041c) {
    return _0x403616 * _0x36041c;
  }, ZrcBd: _0x22f61b(473) + "r]"}, _0x2f5c7b = document[_0x22f61b(485) + _0x22f61b(352)](_0x2c7536[_0x22f61b(373)]), _0x1de17f = new Date;
  _0x2f5c7b[_0x22f61b(135)](_0x23ef07 => {
    const _0x55cf59 = _0x22f61b, _0x3889a7 = new Date(_0x23ef07[_0x55cf59(369) + "te"](_0x2c7536[_0x55cf59(201)])), _0x14013f = _0x2c7536[_0x55cf59(452)](_0x3889a7, _0x1de17f);
    if (_0x2c7536[_0x55cf59(136)](_0x14013f, 0)) _0x23ef07[_0x55cf59(283) + "t"] = ""; else {
      const _0x14da72 = Math[_0x55cf59(226)](_0x2c7536[_0x55cf59(155)](_0x14013f, _0x2c7536[_0x55cf59(360)](_0x2c7536[_0x55cf59(327)](1e3, 60), 60))), _0x3a3361 = Math[_0x55cf59(226)](_0x2c7536[_0x55cf59(433)](_0x2c7536[_0x55cf59(291)](_0x14013f, _0x2c7536[_0x55cf59(327)](_0x2c7536[_0x55cf59(500)](1e3, 60), 60)), _0x2c7536[_0x55cf59(382)](1e3, 60))), _0x3eb26d = Math[_0x55cf59(226)](_0x2c7536[_0x55cf59(155)](_0x2c7536[_0x55cf59(365)](_0x14013f, _0x2c7536[_0x55cf59(210)](1e3, 60)), 1e3));
      _0x23ef07[_0x55cf59(283) + "t"] = _0x14da72 + "h " + _0x3a3361 + "m " + _0x3eb26d + "s";
    }
  });
}
function playMatch(_0x57d0cd, _0x464e02, _0x4d0c67, _0x16eda3, _0x4674dc) {
  const _0x30d2bd = _0x23bf52, _0xff891 = {rZANJ: _0x30d2bd(399) + _0x30d2bd(340), gfaLN: _0x30d2bd(154) + _0x30d2bd(307) + _0x30d2bd(341), sMjTc: function (_0x11d0d0, _0x4b7679) {
    return _0x11d0d0 || _0x4b7679;
  }, tOwBF: _0x30d2bd(418) + _0x30d2bd(280), JeLLj: function (_0x27d20d, _0x5d6dc2) {
    return _0x27d20d(_0x5d6dc2);
  }, IyGLM: _0x30d2bd(147), csytc: _0x30d2bd(175), knGTA: _0x30d2bd(416), cMTRB: _0x30d2bd(299), fMhyz: _0x30d2bd(504), fvILM: function (_0x3458d6, _0x7d7146) {
    return _0x3458d6(_0x7d7146);
  }};
  let _0x3a0b7d = _0xff891[_0x30d2bd(167)](_0x464e02, _0x4d0c67) || _0x16eda3;
  _0xff891[_0x30d2bd(204)](fetch, _0x464e02)[_0x30d2bd(458)](_0x526f07 => {
    const _0xbc7551 = _0x30d2bd;
    if (!_0x526f07.ok) throw new Error(_0xff891[_0xbc7551(434)]);
    return _0x526f07;
  })[_0x30d2bd(220)](_0x110ec3 => {
    const _0x312d9a = _0x30d2bd;
    console[_0x312d9a(245)](_0xff891[_0x312d9a(459)], _0x110ec3), _0x3a0b7d = _0xff891[_0x312d9a(167)](_0x4d0c67, _0x16eda3);
  })[_0x30d2bd(184)](() => {
    const _0x580869 = _0x30d2bd;
    _0x16eda3 ? document[_0x580869(123) + _0x580869(419)](_0xff891[_0x580869(363)])[_0x580869(398)] = _0x580869(343) + _0x580869(145) + _0x16eda3 + (_0x580869(295) + _0x580869(318) + _0x580869(455) + _0x580869(317) + _0x580869(390) + _0x580869(160) + _0x580869(466) + _0x580869(381) + _0x580869(402) + _0x580869(148) + _0x580869(440) + _0x580869(275) + _0x580869(271)) : _0xff891[_0x580869(163)](jwplayer, _0xff891[_0x580869(363)])[_0x580869(301)]({file: _0x3a0b7d, width: _0xff891[_0x580869(278)], aspectratio: _0xff891[_0x580869(492)], image: " "}), document[_0x580869(123) + _0x580869(419)](_0xff891[_0x580869(363)])[_0x580869(501) + _0x580869(227)]({behavior: _0xff891[_0x580869(518)], block: _0xff891[_0x580869(468)]}), document[_0x580869(123) + _0x580869(419)](_0xff891[_0x580869(203)])[_0x580869(283) + "t"] = _0x4674dc, _0xff891[_0x580869(163)](loadChannels, _0x57d0cd);
  });
}
async function loadChannels(_0x680642) {
  const _0x3c1d98 = _0x23bf52, _0x47bf9b = {FXjUb: function (_0x3452f2, _0x3ab356) {
    return _0x3452f2(_0x3ab356);
  }, DjOsU: _0x3c1d98(480) + _0x3c1d98(303) + _0x3c1d98(193), BBJrG: function (_0x35fe5b, _0x2c3a95) {
    return _0x35fe5b > _0x2c3a95;
  }, HwslJ: function (_0x4cb868, _0x19ed30) {
    return _0x4cb868(_0x19ed30);
  }, sGjSq: _0x3c1d98(431) + "st", RSeQz: _0x3c1d98(128), qrVEW: _0x3c1d98(243), hQUyi: _0x3c1d98(154) + _0x3c1d98(430) + _0x3c1d98(172)};
  try {
    const _0x4b3675 = await _0x47bf9b[_0x3c1d98(364)](fetch, _0x3c1d98(176) + _0x3c1d98(313) + _0x3c1d98(389) + _0x3c1d98(517) + _0x3c1d98(347) + _0x680642);
    if (!_0x4b3675.ok) throw new Error(_0x47bf9b[_0x3c1d98(372)]);
    const _0x54f5fd = await _0x4b3675[_0x3c1d98(179)]();
    _0x54f5fd[_0x3c1d98(508)] && _0x47bf9b[_0x3c1d98(353)](_0x54f5fd[_0x3c1d98(138)][_0x3c1d98(266)], 0) ? (_0x47bf9b[_0x3c1d98(429)](renderChannels, _0x54f5fd[_0x3c1d98(138)]), _0x47bf9b[_0x3c1d98(364)](renderServerMenu, _0x54f5fd[_0x3c1d98(138)])) : (document[_0x3c1d98(123) + _0x3c1d98(419)](_0x47bf9b[_0x3c1d98(168)])[_0x3c1d98(165)][_0x3c1d98(337)] = _0x47bf9b[_0x3c1d98(199)], document[_0x3c1d98(123) + _0x3c1d98(419)](_0x47bf9b[_0x3c1d98(476)])[_0x3c1d98(165)][_0x3c1d98(337)] = _0x47bf9b[_0x3c1d98(199)]);
  } catch (_0x6d5813) {
    console[_0x3c1d98(245)](_0x47bf9b[_0x3c1d98(475)], _0x6d5813), document[_0x3c1d98(123) + _0x3c1d98(419)](_0x47bf9b[_0x3c1d98(168)])[_0x3c1d98(165)][_0x3c1d98(337)] = _0x47bf9b[_0x3c1d98(199)], document[_0x3c1d98(123) + _0x3c1d98(419)](_0x47bf9b[_0x3c1d98(476)])[_0x3c1d98(165)][_0x3c1d98(337)] = _0x47bf9b[_0x3c1d98(199)];
  }
}
function renderChannels(_0x149c8b) {
  const _0x50d550 = _0x23bf52, _0x227b1f = {LdBDR: _0x50d550(235) + "ms", USeLy: _0x50d550(431) + "st", AYPRJ: _0x50d550(329)}, _0x22c4db = document[_0x50d550(123) + _0x50d550(419)](_0x227b1f[_0x50d550(297)]);
  _0x22c4db[_0x50d550(398)] = "", _0x149c8b[_0x50d550(135)](_0x4ec109 => {
    const _0x5f0924 = _0x50d550, _0x85f89a = document[_0x5f0924(332) + _0x5f0924(194)]("li");
    _0x85f89a[_0x5f0924(398)] = _0x5f0924(284) + _0x5f0924(377) + _0x5f0924(513) + _0x5f0924(521) + _0x5f0924(124) + "'" + _0x4ec109[_0x5f0924(526) + _0x5f0924(424)][0] + _0x5f0924(432) + _0x4ec109[_0x5f0924(368)] + _0x5f0924(505) + _0x4ec109[_0x5f0924(274)] + (_0x5f0924(224) + _0x5f0924(377) + _0x5f0924(244)), _0x22c4db[_0x5f0924(294) + "d"](_0x85f89a);
  }), document[_0x50d550(123) + _0x50d550(419)](_0x227b1f[_0x50d550(311)])[_0x50d550(165)][_0x50d550(337)] = _0x227b1f[_0x50d550(324)];
}
function playChannel(_0x57f3a5, _0x531cc3) {
  const _0x23fb71 = _0x23bf52, _0xa2204c = {brsBA: _0x23fb71(418) + _0x23fb71(280), VOMwJ: function (_0x3686c7, _0xa1c723) {
    return _0x3686c7(_0xa1c723);
  }, TwrIB: _0x23fb71(147), ATzit: _0x23fb71(175), QZkwK: _0x23fb71(416), AupvR: _0x23fb71(299)};
  _0x531cc3 ? document[_0x23fb71(123) + _0x23fb71(419)](_0xa2204c[_0x23fb71(208)])[_0x23fb71(398)] = _0x23fb71(343) + _0x23fb71(145) + _0x531cc3 + (_0x23fb71(295) + _0x23fb71(318) + _0x23fb71(455) + _0x23fb71(317) + _0x23fb71(390) + _0x23fb71(160) + _0x23fb71(466) + _0x23fb71(381) + _0x23fb71(402) + _0x23fb71(148) + _0x23fb71(440) + _0x23fb71(275) + _0x23fb71(271)) : _0xa2204c[_0x23fb71(383)](jwplayer, _0xa2204c[_0x23fb71(208)])[_0x23fb71(301)]({file: _0x57f3a5, width: _0xa2204c[_0x23fb71(232)], aspectratio: _0xa2204c[_0x23fb71(426)], image: " "}), document[_0x23fb71(123) + _0x23fb71(419)](_0xa2204c[_0x23fb71(208)])[_0x23fb71(501) + _0x23fb71(227)]({behavior: _0xa2204c[_0x23fb71(437)], block: _0xa2204c[_0x23fb71(346)]});
}
function renderServerMenu(_0x2d9410) {
  const _0x44e818 = _0x23bf52, _0x2edd67 = {SFcFK: _0x44e818(376), rUIRt: _0x44e818(243), bLDZt: _0x44e818(329)}, _0x386a4e = document[_0x44e818(123) + _0x44e818(419)](_0x2edd67[_0x44e818(286)]);
  _0x386a4e[_0x44e818(398)] = "";
  let _0x9a84bb = 1;
  _0x2d9410[_0x44e818(135)]((_0x13e502, _0x3a5678) => {
    const _0x2729a3 = _0x44e818, _0x538848 = {LSaSh: _0x2edd67[_0x2729a3(308)]};
    _0x13e502[_0x2729a3(526) + _0x2729a3(424)][_0x2729a3(135)]((_0x22d3d2, _0x2a44d0) => {
      const _0x2ec220 = _0x2729a3, _0x4d8d5e = document[_0x2ec220(332) + _0x2ec220(194)](_0x538848[_0x2ec220(285)]);
      _0x4d8d5e[_0x2ec220(398)] = _0x2ec220(510) + _0x2ec220(252) + _0x2ec220(223) + _0x2ec220(309) + _0x9a84bb, _0x4d8d5e[_0x2ec220(276)] = () => playChannel(_0x22d3d2, _0x13e502[_0x2ec220(368)]), _0x386a4e[_0x2ec220(294) + "d"](_0x4d8d5e), _0x9a84bb++;
    });
  }), document[_0x44e818(123) + _0x44e818(419)](_0x2edd67[_0x44e818(286)])[_0x44e818(165)][_0x44e818(337)] = _0x2edd67[_0x44e818(528)];
}
function populateFilters(_0x9cce91) {
  const _0x312f95 = _0x23bf52, _0xd0662f = {blZmM: _0x312f95(403), FBzZC: function (_0x2c8f6a, _0xf900ef) {
    return _0x2c8f6a(_0xf900ef);
  }, lXtOO: _0x312f95(149), CoZkJ: _0x312f95(523) + "er", tlGcN: _0x312f95(506) + _0x312f95(408) + _0x312f95(345) + _0x312f95(370), yNacB: _0x312f95(506) + _0x312f95(408) + _0x312f95(415) + _0x312f95(255) + "n>"}, _0x3e49a7 = document[_0x312f95(123) + _0x312f95(419)](_0xd0662f[_0x312f95(328)]), _0x278524 = document[_0x312f95(123) + _0x312f95(419)](_0xd0662f[_0x312f95(447)]);
  _0x3e49a7[_0x312f95(398)] = _0xd0662f[_0x312f95(162)], _0x278524[_0x312f95(398)] = _0xd0662f[_0x312f95(173)];
  const _0x333ce0 = [...new Set(_0x9cce91[_0x312f95(349)](_0x4523ef => _0x4523ef[_0x312f95(253)]))], _0x1a318c = [...new Set(_0x9cce91[_0x312f95(349)](_0x39f084 => _0x39f084[_0x312f95(195)]))];
  _0x333ce0[_0x312f95(135)](_0x12b361 => {
    const _0x4dfc0e = _0x312f95, _0x155b1f = document[_0x4dfc0e(332) + _0x4dfc0e(194)](_0xd0662f[_0x4dfc0e(209)]);
    _0x155b1f[_0x4dfc0e(320)] = _0x12b361[_0x4dfc0e(529) + "e"](), _0x155b1f[_0x4dfc0e(283) + "t"] = _0xd0662f[_0x4dfc0e(451)](formatDate, _0x12b361), _0x3e49a7[_0x4dfc0e(294) + "d"](_0x155b1f);
  }), _0x1a318c[_0x312f95(135)](_0x520d01 => {
    const _0x32c6bf = _0x312f95, _0x1026a8 = document[_0x32c6bf(332) + _0x32c6bf(194)](_0xd0662f[_0x32c6bf(209)]);
    _0x1026a8[_0x32c6bf(320)] = _0x520d01[_0x32c6bf(529) + "e"](), _0x1026a8[_0x32c6bf(283) + "t"] = _0x520d01, _0x278524[_0x32c6bf(294) + "d"](_0x1026a8);
  });
}
function filterMatches() {
  const _0x1eb5a6 = _0x23bf52, _0x482cb1 = {tswum: _0x1eb5a6(397), dBPAC: _0x1eb5a6(287) + "e", KVIUI: _0x1eb5a6(488), kqyck: function (_0x3961cd, _0x40efac) {
    return _0x3961cd === _0x40efac;
  }, kqaIJ: function (_0x3e2a71, _0x3c8101) {
    return _0x3e2a71 === _0x3c8101;
  }, nFbiO: function (_0x4452d8, _0x102ef1) {
    return _0x4452d8 && _0x102ef1;
  }, FFSKr: _0x1eb5a6(515) + "s", SjGTZ: function (_0x12605f, _0x2b6fad) {
    return _0x12605f === _0x2b6fad;
  }, yOKaq: _0x1eb5a6(248), dzGif: function (_0x2147b1, _0x245ed7) {
    return _0x2147b1 !== _0x245ed7;
  }, TcNXo: function (_0x154d97, _0x3e8e4a) {
    return _0x154d97 !== _0x3e8e4a;
  }, lwFLF: function (_0x1e3189, _0x22be53) {
    return _0x1e3189 === _0x22be53;
  }, eURBn: _0x1eb5a6(423), DovhP: _0x1eb5a6(149), jmJJb: _0x1eb5a6(523) + "er", lfidY: _0x1eb5a6(206), uoIcT: _0x1eb5a6(166) + _0x1eb5a6(233), VPNgX: _0x1eb5a6(237), fWnJm: _0x1eb5a6(256)}, _0x8dd04e = document[_0x1eb5a6(123) + _0x1eb5a6(419)](_0x482cb1[_0x1eb5a6(312)])[_0x1eb5a6(320)][_0x1eb5a6(529) + "e"](), _0x37fc60 = document[_0x1eb5a6(123) + _0x1eb5a6(419)](_0x482cb1[_0x1eb5a6(421)])[_0x1eb5a6(320)][_0x1eb5a6(529) + "e"](), _0x19dc71 = document[_0x1eb5a6(123) + _0x1eb5a6(419)](_0x482cb1[_0x1eb5a6(296)])[_0x1eb5a6(320)][_0x1eb5a6(529) + "e"](), _0x43a658 = document[_0x1eb5a6(485) + _0x1eb5a6(352)](_0x482cb1[_0x1eb5a6(164)]);
  let _0x708955 = 0;
  const _0x6ec7a6 = Array[_0x1eb5a6(477)](_0x43a658)[_0x1eb5a6(205)](_0x470ca1 => {
    const _0xeed391 = _0x1eb5a6, _0x219c72 = _0x470ca1[_0xeed391(369) + "te"](_0x482cb1[_0xeed391(483)]), _0x5aabab = _0x470ca1[_0xeed391(369) + "te"](_0x482cb1[_0xeed391(142)]), _0x237d1a = _0x470ca1[_0xeed391(369) + "te"](_0x482cb1[_0xeed391(467)]), _0x3e65a8 = !_0x8dd04e || _0x482cb1[_0xeed391(401)](_0x219c72, _0x8dd04e), _0x55664d = !_0x37fc60 || _0x482cb1[_0xeed391(262)](_0x5aabab, _0x37fc60), _0x28a644 = !_0x19dc71 || _0x237d1a[_0xeed391(246)](_0x19dc71);
    return _0x482cb1[_0xeed391(471)](_0x3e65a8, _0x55664d) && _0x28a644;
  })[_0x1eb5a6(261)]((_0x3fc434, _0x2b7fc0) => {
    const _0x3a9cc4 = _0x1eb5a6, _0x5d521f = _0x3fc434[_0x3a9cc4(369) + "te"](_0x482cb1[_0x3a9cc4(355)]), _0x5bc9e3 = _0x2b7fc0[_0x3a9cc4(369) + "te"](_0x482cb1[_0x3a9cc4(355)]);
    if (_0x482cb1[_0x3a9cc4(202)](_0x5d521f, _0x482cb1[_0x3a9cc4(514)]) && _0x482cb1[_0x3a9cc4(422)](_0x5bc9e3, _0x482cb1[_0x3a9cc4(514)])) return -1;
    if (_0x482cb1[_0x3a9cc4(519)](_0x5d521f, _0x482cb1[_0x3a9cc4(514)]) && _0x482cb1[_0x3a9cc4(186)](_0x5bc9e3, _0x482cb1[_0x3a9cc4(514)])) return 1;
    return 0;
  });
  _0x43a658[_0x1eb5a6(135)](_0x4fcb62 => _0x4fcb62[_0x1eb5a6(165)][_0x1eb5a6(337)] = _0x1eb5a6(128)), _0x6ec7a6[_0x1eb5a6(135)](_0xd25802 => {
    const _0x1f938f = _0x1eb5a6;
    _0xd25802[_0x1f938f(165)][_0x1f938f(337)] = _0x482cb1[_0x1f938f(378)], _0x708955++;
  });
  const _0x2278b3 = document[_0x1eb5a6(123) + _0x1eb5a6(419)](_0x482cb1[_0x1eb5a6(427)]);
  _0x482cb1[_0x1eb5a6(186)](_0x708955, 0) ? _0x2278b3[_0x1eb5a6(460)][_0x1eb5a6(282)](_0x482cb1[_0x1eb5a6(306)]) : _0x2278b3[_0x1eb5a6(460)][_0x1eb5a6(126)](_0x482cb1[_0x1eb5a6(306)]);
}
function resetFilters() {
  const _0x5af8f5 = _0x23bf52, _0x4ff812 = {ZXJNK: _0x5af8f5(149), pLOie: _0x5af8f5(523) + "er", aMpps: _0x5af8f5(206), AupAE: function (_0x3b3dba) {
    return _0x3b3dba();
  }};
  document[_0x5af8f5(123) + _0x5af8f5(419)](_0x4ff812[_0x5af8f5(344)])[_0x5af8f5(320)] = "", document[_0x5af8f5(123) + _0x5af8f5(419)](_0x4ff812[_0x5af8f5(395)])[_0x5af8f5(320)] = "", document[_0x5af8f5(123) + _0x5af8f5(419)](_0x4ff812[_0x5af8f5(366)])[_0x5af8f5(320)] = "", _0x4ff812[_0x5af8f5(388)](filterMatches);
}
function debounce(_0x739d17, _0x38010b) {
  const _0x4bf048 = {QZgZV: function (_0x452852, _0x2ee879) {
    return _0x452852(_0x2ee879);
  }, eXrvv: function (_0x175834, _0x1af2d5, _0x458cc7) {
    return _0x175834(_0x1af2d5, _0x458cc7);
  }};
  let _0x2e3440;
  return function (..._0x5b444e) {
    const _0x3bf811 = _0x17d4;
    _0x4bf048[_0x3bf811(159)](clearTimeout, _0x2e3440), _0x2e3440 = _0x4bf048[_0x3bf811(127)](setTimeout, () => _0x739d17[_0x3bf811(393)](this, _0x5b444e), _0x38010b);
  };
}
document[_0x23bf52(123) + _0x23bf52(419)](_0x23bf52(206))[_0x23bf52(333) + _0x23bf52(358)](_0x23bf52(264), debounce(filterMatches, 300)), document[_0x23bf52(123) + _0x23bf52(419)](_0x23bf52(149))[_0x23bf52(333) + _0x23bf52(358)](_0x23bf52(527), filterMatches), document[_0x23bf52(123) + _0x23bf52(419)](_0x23bf52(523) + "er")[_0x23bf52(333) + _0x23bf52(358)](_0x23bf52(527), filterMatches), document[_0x23bf52(333) + _0x23bf52(358)](_0x23bf52(350) + _0x23bf52(461), loadMatches), window[_0x23bf52(146)] = function () {
  const _0x51e3d9 = _0x23bf52, _0xbdfd0 = {ivqTu: function (_0xeb1847) {
    return _0xeb1847();
  }};
  _0xbdfd0[_0x51e3d9(478)](scrollFunction);
};
function scrollFunction() {
  const _0x304c79 = _0x23bf52, _0x879c35 = {rXpWo: function (_0xdff4aa, _0x488b1f) {
    return _0xdff4aa > _0x488b1f;
  }, GpkZV: _0x304c79(132) + _0x304c79(495), kRyDE: _0x304c79(329), cnCWH: _0x304c79(128)};
  _0x879c35[_0x304c79(322)](document[_0x304c79(134)][_0x304c79(273)], 20) || _0x879c35[_0x304c79(322)](document[_0x304c79(400) + _0x304c79(219)][_0x304c79(273)], 20) ? document[_0x304c79(123) + _0x304c79(419)](_0x879c35[_0x304c79(394)])[_0x304c79(165)][_0x304c79(337)] = _0x879c35[_0x304c79(520)] : document[_0x304c79(123) + _0x304c79(419)](_0x879c35[_0x304c79(394)])[_0x304c79(165)][_0x304c79(337)] = _0x879c35[_0x304c79(170)];
}
function scrollToTop() {
  const _0x19fb9c = _0x23bf52;
  document[_0x19fb9c(134)][_0x19fb9c(273)] = 0, document[_0x19fb9c(400) + _0x19fb9c(219)][_0x19fb9c(273)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x2b3522) {
  const _0x4911d3 = _0x23bf52, _0x79c61d = {sfoRj: function (_0x34e57a, _0x46e7bf) {
    return _0x34e57a(_0x46e7bf);
  }}, _0x3fb161 = _0x4911d3(385) + ": " + _0x2b3522[_0x4911d3(494)] + _0x4911d3(187) + _0x79c61d[_0x4911d3(260)](formatDate, _0x2b3522[_0x4911d3(253)]) + _0x4911d3(234) + _0x2b3522[_0x4911d3(215)] + _0x4911d3(330) + _0x2b3522[_0x4911d3(195)] + (_0x4911d3(325) + _0x4911d3(384) + _0x4911d3(183) + _0x4911d3(314));
}
function openDisclaimer() {
  const _0x1aba2d = _0x23bf52, _0xfdd6e9 = {zdrfQ: _0x1aba2d(409) + _0x1aba2d(192), UiOnM: _0x1aba2d(329)};
  document[_0x1aba2d(123) + _0x1aba2d(419)](_0xfdd6e9[_0x1aba2d(258)])[_0x1aba2d(165)][_0x1aba2d(337)] = _0xfdd6e9[_0x1aba2d(323)];
}
function closeDisclaimer() {
  const _0x3a810b = _0x23bf52, _0x2ef12c = {GyPGG: _0x3a810b(409) + _0x3a810b(192), Dkegb: _0x3a810b(128)};
  document[_0x3a810b(123) + _0x3a810b(419)](_0x2ef12c[_0x3a810b(441)])[_0x3a810b(165)][_0x3a810b(337)] = _0x2ef12c[_0x3a810b(139)];
}
function _0x17d4(_0x58da52, _0x4b77ba) {
  const _0x48d9ac = _0xe672();
  return _0x17d4 = function (_0x524225, _0x259fe2) {
    _0x524225 = _0x524225 - 123;
    let _0xd57e50 = _0x48d9ac[_0x524225];
    return _0xd57e50;
  }, _0x17d4(_0x58da52, _0x4b77ba);
}
window[_0x23bf52(276)] = function (_0x4b9c01) {
  const _0x5120a8 = _0x23bf52, _0x165c2b = {sRFgt: function (_0x73c314, _0x593ce6) {
    return _0x73c314 == _0x593ce6;
  }, pxBJv: _0x5120a8(409) + _0x5120a8(192), UBgRf: function (_0x144aa8) {
    return _0x144aa8();
  }};
  _0x165c2b[_0x5120a8(129)](_0x4b9c01[_0x5120a8(247)], document[_0x5120a8(123) + _0x5120a8(419)](_0x165c2b[_0x5120a8(410)])) && _0x165c2b[_0x5120a8(137)](closeDisclaimer);
};
