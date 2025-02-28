const _0x4a1165 = _0x2f73;
(function (_0x1826eb, _0x343ba8) {
  const _0x168d3d = _0x2f73, _0x305464 = _0x1826eb();
  while (true) {
    try {
      const _0x2ccd0b = -parseInt(_0x168d3d(291)) / 1 + -parseInt(_0x168d3d(322)) / 2 * (parseInt(_0x168d3d(466)) / 3) + parseInt(_0x168d3d(451)) / 4 + -parseInt(_0x168d3d(212)) / 5 + -parseInt(_0x168d3d(529)) / 6 + -parseInt(_0x168d3d(399)) / 7 * (parseInt(_0x168d3d(569)) / 8) + parseInt(_0x168d3d(214)) / 9;
      if (_0x2ccd0b === _0x343ba8) break; else _0x305464.push(_0x305464.shift());
    } catch (_0x36c335) {
      _0x305464.push(_0x305464.shift());
    }
  }
}(_0x10e6, 626572));
function _0x2f73(_0x4adbf3, _0xbe65c9) {
  const _0x38f498 = _0x10e6();
  return _0x2f73 = function (_0x40aa8f, _0x49922d) {
    _0x40aa8f = _0x40aa8f - 196;
    let _0x4ae2bb = _0x38f498[_0x40aa8f];
    return _0x4ae2bb;
  }, _0x2f73(_0x4adbf3, _0xbe65c9);
}
const telegramBotToken = _0x4a1165(337) + _0x4a1165(288) + _0x4a1165(482) + _0x4a1165(313) + _0x4a1165(377), telegramChatId = _0x4a1165(483), sentNotifications = new Set;
function formatDate(_0xdde160) {
  const _0x4b123c = _0x4a1165, _0x53f5c5 = {rbSlu: _0x4b123c(477), ZmUyV: _0x4b123c(523), eoyFA: _0x4b123c(345), rgoZw: _0x4b123c(254), moTZs: _0x4b123c(573), WxzLq: _0x4b123c(453), HkLNr: _0x4b123c(495), PhuSQ: _0x4b123c(220), Rhwxo: _0x4b123c(411), jJkNI: _0x4b123c(249), cCrIv: _0x4b123c(368), EcFds: _0x4b123c(219)}, _0x2b5e69 = [_0x53f5c5[_0x4b123c(522)], _0x53f5c5[_0x4b123c(243)], _0x53f5c5[_0x4b123c(570)], _0x53f5c5[_0x4b123c(421)], _0x53f5c5[_0x4b123c(343)], _0x53f5c5[_0x4b123c(415)], _0x53f5c5[_0x4b123c(262)], _0x53f5c5[_0x4b123c(247)], _0x53f5c5[_0x4b123c(476)], _0x53f5c5[_0x4b123c(548)], _0x53f5c5[_0x4b123c(550)], _0x53f5c5[_0x4b123c(198)]], _0x1c87a9 = new Date(_0xdde160), _0x43d811 = _0x1c87a9[_0x4b123c(558)](), _0x379a9a = _0x2b5e69[_0x1c87a9[_0x4b123c(546)]()], _0x2962e9 = _0x1c87a9[_0x4b123c(261) + "r"]();
  return _0x43d811 + " " + _0x379a9a + " " + _0x2962e9;
}
async function loadMatches() {
  const _0x18a09a = _0x4a1165, _0x41ce88 = {RQKXm: _0x18a09a(244), QPeKy: _0x18a09a(296), zYnlt: function (_0x386884) {
    return _0x386884();
  }, ZcxMn: function (_0x1a6a51, _0x18c667) {
    return _0x1a6a51(_0x18c667);
  }, DTGCP: function (_0x224dbf, _0x338d49) {
    return _0x224dbf(_0x338d49);
  }, wpSQn: function (_0x4c23c9) {
    return _0x4c23c9();
  }, VOMzk: function (_0x1b819c) {
    return _0x1b819c();
  }, coSdl: function (_0x1c2853, _0x1bc70b, _0x54161e) {
    return _0x1c2853(_0x1bc70b, _0x54161e);
  }, MGTbW: _0x18a09a(583) + _0x18a09a(268) + _0x18a09a(344), OwyIu: _0x18a09a(246), GtrJD: _0x18a09a(408), dvgcV: _0x18a09a(412)};
  try {
    document[_0x18a09a(287) + _0x18a09a(442)](_0x41ce88[_0x18a09a(227)])[_0x18a09a(404)][_0x18a09a(556)] = _0x41ce88[_0x18a09a(276)];
    const _0x74c56f = await _0x41ce88[_0x18a09a(552)](fetchMatches);
    _0x41ce88[_0x18a09a(387)](renderMatches, _0x74c56f), _0x41ce88[_0x18a09a(398)](populateFilters, _0x74c56f), _0x41ce88[_0x18a09a(397)](filterMatches), _0x41ce88[_0x18a09a(301)](updateCountdown), _0x41ce88[_0x18a09a(245)](setInterval, updateCountdown, 1e3);
  } catch (_0x2ff1f9) {
    console[_0x18a09a(373)](_0x41ce88[_0x18a09a(339)], _0x2ff1f9), document[_0x18a09a(287) + _0x18a09a(442)](_0x41ce88[_0x18a09a(513)])[_0x18a09a(370)][_0x18a09a(536)](_0x41ce88[_0x18a09a(263)]);
  } finally {
    document[_0x18a09a(287) + _0x18a09a(442)](_0x41ce88[_0x18a09a(227)])[_0x18a09a(404)][_0x18a09a(556)] = _0x41ce88[_0x18a09a(571)];
  }
}
function _0x10e6() {
  const _0x5162e3 = ["xiClA", "Notificati", "iQARe", "ohMDJ", "apply", "JGOeF", "uvVKY", "LsOaw", "all", "span>", "ElJvp", "16:9", "ById", "i.telegram", "scrollInto", "map", "h_info?mat", "GET", 'i class="f', "channelsLi", 'wn" data-t', "4281056rcdaAb", "qWvCJ", "June", "QyIsX", "serverMenu", "<span clas", "data-teams", "tBLuw", "thub.io/bo", ".org/bot", 'lue="">Fil', "</i> ", '" width="1', "value", "io/coba.js", "2433uRnMCm", "xePNX", "videoUrl", "documentEl", "YruaS", "portlive.b", "getTime", 'ass="teams', " | ", "ement", "Rhwxo", "January", "appendChil", "SHgtT", 'lscreen="t', "iframeURL", "iZ76AHaEWo", "1391979650", "ERvBO", "tcCZk", "matchTitle", "rQcHb", "kxOev", "')\">\n     ", 'nclick="pl', "        <b", "an>", '" allowful', "&text=", "July", "on sent su", "dPjvl", "data", "UWzkf", "TjFNc", "<option va", "https://83", "AYWTi", "aZevx", "date", "atchId ", 'ling="no"a', "      ", "UdZfz", "scrollToTo", "Error send", "gue</optio", "OwyIu", "mWxDs", "Match('", "BOqXG", "LDPFj", "CiDFt", "bxWGE", "stener", "match", "rbSlu", "February", "</button>\n", "\nTime: ", 'ls"><i cla', "className", "Network re", "7087674XasVmQ", "FgcWH", "3zb296.app", "channelIte", "CMESP", "BNwtO", "evKMg", "add", "logspot.co", "rGKxA", "100%", "/v1/match/", "/business/", "viVvr", "nOhMd", "ntainer", "UAhJl", "getMonth", "qGudP", "jJkNI", "ZJTLd", "cCrIv", "data-timer", "zYnlt", '"><i class', "ame-origin", "mFkSj", "display", "KZypc", "getDate", "xbGGF", "HnEGx", "asNJe", "data-statu", "flex", "fetch live", "els:", "jwplayerCo", "as fa-play", "match/matc", "4664LkFdQk", "eoyFA", "dvgcV", "tKuKI", "May", "rzXSF", "uFsex", "div", "load live ", " 🚨\nDate: ", "NvcZr", "Piahn", "VfHMe", "yqUNr", "Failed to ", "OIyRr", "dCcuX", "onclick", "pYUTK", "MmluG", "\nLink: htt", "uJuWT", "upcoming", "sprQi", "teams", "kwohg", "filter", "dcast-towe", "data-date", "ve Now</sp", "fNNBM", "floor", "vvOwg", "data-leagu", "iframe_url", "option", "sponse was", "ent", '="fas fa-u', "EcFds", "ps://zonas", 'utton" onc', "[data-time", 'ver"></i> ', "liveUrl", "VPXDh", "ogqjH", "</span>\n  ", 'nfo">\n    ', "lUCKa", ".schedule-", "as fa-cale", "TtVkw", "629795qyKPpb", "e</option>", "32552766ilTQYD", "json", 'imer="', "          ", "ter by Dat", "December", "August", "')\">", 'r"></i> Li', "         <", "urls", "createElem", "yjZnf", "RQKXm", "Loaded", 'c="', 's="live"><', "DADfd", "body", 'sers"></i>', "OTJAR", "iApSH", "atchId=", "from", "myEEL", "videoId", "ing notifi", "View", "cation:", "ZmUyV", "loader", "coSdl", "noMatches", "PhuSQ", "bkJks", "October", "  <span cl", "YXotH", "ayChannel(", "forEach", "April", "bBVyq", "https://wa", "finally", 's="watch-b', "utton clas", "sgkUj", "getFullYea", "HkLNr", "GtrJD", "DBGcq", '="0" scrol', "querySelec", "Server ", "load match", "PlTfE", "fQUwM", 's="match-i', "code", "wbxcr", "setAttribu", "channels?m", "QPeKy", "schedule-c", "rSBZW", '<i class="', "name", "ailed", "i> ", "https://ap", " Soon...</", "ame>", "result", "getElement", ":AAGG4SAfi", " <div clas", "time", "880730TXMnbv", "gLvQP", "ZBUna", "aDAGZ", "league", "block", "pButton", "fCErW", "card", 'ss="fas fa', "VOMzk", "input", "fobeJ", "ication:", "scrollTop", "qjqCY", "remove", 'ndar-alt">', "addEventLi", 'rue"></ifr', "DOMContent", "oUrl for m", "zvc2_I5WDk", "ppQTQ", "ts allow-s", "llow-scrip", "as fa-broa", '-circle"><', "has", "ard", "iRMiY", "1934uFGpPd", "', '", "smooth", "vUmtd", "onscroll", "AoBJD", "textConten", "setup", "status", "🚨 Live Now", "change", "streaming_", "rameborder", "exPmz", "ccessfully", "7598004626", "PTDLp", "MGTbW", "leagueFilt", 't="100%" f', "pODNV", "moTZs", "es:", "March", "button", "log", "catch", "innerHTML", "uprMg", "/sendMessa", "/i> Watch\n", "hNROo", "VQmUh", "UjGKo", '-clock"></', "getAttribu", "<iframe sr", "cTrdn", "ge?chat_id", '">Starting', "fas fa-ser", 's="countdo', "torAll", "Live URL f", "load chann", "fetch vide", "November", '00%" heigh', "classList", "wrRBb", "includes", "error", " URL for m", "aZGJu", "NKJxT", "23795c", "chId=", "toLowerCas", "length", "dERYK", "HBHOg", "i.90min.to", "send notif", "scheduleCo", "FbOMl", "ZcxMn", "KYnNQ", "qqFeo", "OMlKQ", 'lick="play', " </div>\n  ", 's="date"><', "dateFilter", "\n         ", "then", "wpSQn", "DTGCP", "13069DMdYhK", "rbwEu", "sbmga", "URL:", "KPgXI", "style", "pwohN", "fArFz", "ter by Lea", "show", "sort", "rtakita.gi", "September", "none", "teamSearch", "GDXej", "WxzLq", "start", 'ass="detai', "0000", "vlUbm", " <button o", "rgoZw", "Rxlpw", "la.github.", "\nLeague: ", " not ok", "WsciQ", "live", "m3u8Url", "EwuGE"];
  _0x10e6 = function () {
    return _0x5162e3;
  };
  return _0x10e6();
}
async function fetchMatches() {
  const _0x35321a = _0x4a1165, _0x207984 = {yqUNr: function (_0x32f359, _0xa4f32b) {
    return _0x32f359(_0xa4f32b);
  }, ohMDJ: _0x35321a(256) + _0x35321a(410) + _0x35321a(459) + _0x35321a(423) + _0x35321a(465) + "on", DADfd: _0x35321a(528) + _0x35321a(605) + _0x35321a(425), TtVkw: function (_0x378ddd, _0x36f822) {
    return _0x378ddd(_0x36f822);
  }}, _0x26d9dc = await _0x207984[_0x35321a(582)](fetch, _0x207984[_0x35321a(433)]);
  if (!_0x26d9dc.ok) throw new Error(_0x207984[_0x35321a(231)]);
  const _0x3c9654 = await _0x26d9dc[_0x35321a(215)](), _0x4b0dc2 = await _0x207984[_0x35321a(211)](fetchLiveUrls, _0x3c9654);
  return _0x3c9654[_0x35321a(253)](_0x67b343 => {
    const _0x5c4336 = _0x35321a;
    _0x67b343[_0x5c4336(203)] = _0x4b0dc2[_0x67b343[_0x5c4336(239)]] || _0x67b343[_0x5c4336(428)] || _0x67b343[_0x5c4336(481)];
  }), _0x3c9654;
}
async function fetchLiveUrls(_0x18700d) {
  const _0x2cd697 = _0x4a1165, _0x5a27f1 = {qWvCJ: function (_0x121f64, _0x30dae5) {
    return _0x121f64(_0x30dae5);
  }, asNJe: function (_0x337a77, _0x1bfeaa) {
    return _0x337a77 > _0x1bfeaa;
  }, uFsex: function (_0x126f4c, _0xf7c6b3) {
    return _0x126f4c === _0xf7c6b3;
  }, OMlKQ: _0x2cd697(418)}, _0x35b1cb = _0x18700d[_0x2cd697(445)](_0x2205cb => _0x2205cb[_0x2cd697(239)]), _0x7550ab = {}, _0x490b12 = _0x35b1cb[_0x2cd697(445)](async _0x1adf1c => {
    const _0x55e3be = _0x2cd697;
    try {
      const _0x13d3f3 = await _0x5a27f1[_0x55e3be(452)](fetch, _0x55e3be(283) + _0x55e3be(383) + _0x55e3be(540) + _0x55e3be(275) + _0x55e3be(236) + _0x1adf1c);
      if (_0x13d3f3.ok) {
        const _0x378f94 = await _0x13d3f3[_0x55e3be(215)]();
        _0x378f94[_0x55e3be(330)] && _0x5a27f1[_0x55e3be(561)](_0x378f94[_0x55e3be(286)][_0x55e3be(380)], 0) && (_0x7550ab[_0x1adf1c] = _0x378f94[_0x55e3be(286)][0][_0x55e3be(333) + _0x55e3be(224)][0]);
      }
    } catch (_0x3ee722) {
      console[_0x55e3be(373)](_0x55e3be(583) + _0x55e3be(564) + _0x55e3be(374) + _0x55e3be(506) + _0x1adf1c + ":", _0x3ee722);
    }
    try {
      const _0x31dc9c = await _0x5a27f1[_0x55e3be(452)](fetch, _0x55e3be(502) + _0x55e3be(531) + _0x55e3be(541) + _0x55e3be(568) + _0x55e3be(446) + _0x55e3be(378) + _0x1adf1c);
      if (_0x31dc9c.ok) {
        const _0x4c5060 = await _0x31dc9c[_0x55e3be(215)]();
        _0x5a27f1[_0x55e3be(575)](_0x4c5060[_0x55e3be(272)], _0x5a27f1[_0x55e3be(390)]) && _0x4c5060[_0x55e3be(498)][_0x55e3be(286)][_0x55e3be(521)][_0x55e3be(468)] && (_0x7550ab[_0x1adf1c] = _0x4c5060[_0x55e3be(498)][_0x55e3be(286)][_0x55e3be(521)][_0x55e3be(468)]);
      }
    } catch (_0x28eb1b) {
      console[_0x55e3be(373)](_0x55e3be(583) + _0x55e3be(367) + _0x55e3be(312) + _0x55e3be(506) + _0x1adf1c + ":", _0x28eb1b);
    }
  });
  return await Promise[_0x2cd697(438)](_0x490b12), _0x7550ab;
}
function renderMatches(_0x3a3971) {
  const _0x5621f0 = _0x4a1165, _0x51a104 = {GDXej: function (_0x176650, _0x562956) {
    return _0x176650 >= _0x562956;
  }, YXotH: function (_0x55a47b, _0x48c124) {
    return _0x55a47b <= _0x48c124;
  }, qjqCY: function (_0x28d5bf, _0x2dd87b) {
    return _0x28d5bf + _0x2dd87b;
  }, EwuGE: function (_0x1a55ab, _0x1b7805) {
    return _0x1a55ab * _0x1b7805;
  }, ogqjH: function (_0x22edd2, _0x5d38b4) {
    return _0x22edd2 * _0x5d38b4;
  }, sgkUj: function (_0x258bde, _0x130fb1) {
    return _0x258bde >= _0x130fb1;
  }, xiClA: function (_0x55c39c, _0x57675f) {
    return _0x55c39c + _0x57675f;
  }, pODNV: function (_0x4585ae, _0x56cf4c) {
    return _0x4585ae * _0x56cf4c;
  }, fCErW: function (_0x571f24, _0x1f0b02) {
    return _0x571f24 * _0x1f0b02;
  }, ZBUna: function (_0xedb838, _0x2613f3) {
    return _0xedb838 && _0x2613f3;
  }, kwohg: function (_0xb29d04, _0x71b12d) {
    return _0xb29d04 <= _0x71b12d;
  }, BOqXG: function (_0x37bc42, _0x224326) {
    return _0x37bc42 * _0x224326;
  }, dERYK: _0x5621f0(576), dPjvl: _0x5621f0(277) + _0x5621f0(320), wbxcr: _0x5621f0(597), UAhJl: _0x5621f0(602) + "e", mFkSj: _0x5621f0(457), KZypc: _0x5621f0(562) + "s", AoBJD: _0x5621f0(427), evKMg: _0x5621f0(591), PTDLp: function (_0x2fe4a6, _0xe67f7c) {
    return _0x2fe4a6(_0xe67f7c);
  }, VfHMe: _0x5621f0(456) + _0x5621f0(230) + _0x5621f0(448) + _0x5621f0(317) + _0x5621f0(596) + _0x5621f0(222) + _0x5621f0(598) + _0x5621f0(492), Rxlpw: function (_0x447428, _0x14092d) {
    return _0x447428(_0x14092d);
  }, wrRBb: _0x5621f0(385) + _0x5621f0(544)}, _0x31c40e = document[_0x5621f0(287) + _0x5621f0(442)](_0x51a104[_0x5621f0(371)]);
  _0x31c40e[_0x5621f0(349)] = "", _0x3a3971[_0x5621f0(409)]((_0x23e462, _0x332b7f) => {
    const _0x44d1f4 = _0x5621f0, _0x518638 = new Date, _0x12070a = new Date(_0x23e462[_0x44d1f4(505)] + "T" + _0x23e462[_0x44d1f4(290)]), _0x380523 = new Date(_0x332b7f[_0x44d1f4(505)] + "T" + _0x332b7f[_0x44d1f4(290)]), _0x2df58 = _0x51a104[_0x44d1f4(414)](_0x518638, _0x12070a) && _0x51a104[_0x44d1f4(251)](_0x518638, new Date(_0x51a104[_0x44d1f4(306)](_0x12070a[_0x44d1f4(472)](), _0x51a104[_0x44d1f4(429)](_0x51a104[_0x44d1f4(429)](_0x51a104[_0x44d1f4(205)](2, 60), 60), 1e3)))), _0x1b1d2f = _0x51a104[_0x44d1f4(260)](_0x518638, _0x380523) && _0x51a104[_0x44d1f4(251)](_0x518638, new Date(_0x51a104[_0x44d1f4(430)](_0x380523[_0x44d1f4(472)](), _0x51a104[_0x44d1f4(342)](_0x51a104[_0x44d1f4(205)](_0x51a104[_0x44d1f4(298)](2, 60), 60), 1e3))));
    if (_0x51a104[_0x44d1f4(293)](_0x2df58, !_0x1b1d2f)) return -1;
    if (_0x51a104[_0x44d1f4(293)](!_0x2df58, _0x1b1d2f)) return 1;
    return 0;
  }), _0x3a3971[_0x5621f0(253)](_0x36bd5d => {
    const _0x550c7d = _0x5621f0, _0x23f6c3 = _0x36bd5d[_0x550c7d(203)] || _0x36bd5d[_0x550c7d(428)] || _0x36bd5d[_0x550c7d(481)], _0x553108 = new Date, _0x4291f0 = new Date(_0x36bd5d[_0x550c7d(505)] + "T" + _0x36bd5d[_0x550c7d(290)]), _0x21e5e4 = _0x51a104[_0x550c7d(414)](_0x553108, _0x4291f0) && _0x51a104[_0x550c7d(594)](_0x553108, new Date(_0x51a104[_0x550c7d(306)](_0x4291f0[_0x550c7d(472)](), _0x51a104[_0x550c7d(342)](_0x51a104[_0x550c7d(298)](_0x51a104[_0x550c7d(516)](2, 60), 60), 1e3)))), _0x151ed6 = document[_0x550c7d(225) + _0x550c7d(196)](_0x51a104[_0x550c7d(381)]);
    _0x151ed6[_0x550c7d(527)] = _0x51a104[_0x550c7d(497)], _0x151ed6[_0x550c7d(274) + "te"](_0x51a104[_0x550c7d(273)], _0x36bd5d[_0x550c7d(505)][_0x550c7d(379) + "e"]()), _0x151ed6[_0x550c7d(274) + "te"](_0x51a104[_0x550c7d(545)], _0x36bd5d[_0x550c7d(295)][_0x550c7d(379) + "e"]()), _0x151ed6[_0x550c7d(274) + "te"](_0x51a104[_0x550c7d(555)], _0x36bd5d[_0x550c7d(593)][_0x550c7d(379) + "e"]()), _0x151ed6[_0x550c7d(274) + "te"](_0x51a104[_0x550c7d(557)], _0x21e5e4 ? _0x51a104[_0x550c7d(327)] : _0x51a104[_0x550c7d(535)]);
    const _0x2e2a4d = !_0x21e5e4 ? _0x550c7d(456) + _0x550c7d(363) + _0x550c7d(450) + _0x550c7d(216) + _0x36bd5d[_0x550c7d(505)] + "T" + _0x36bd5d[_0x550c7d(290)] + (_0x550c7d(361) + _0x550c7d(284) + _0x550c7d(439)) : "";
    _0x151ed6[_0x550c7d(349)] = _0x550c7d(395) + _0x550c7d(217) + _0x550c7d(289) + _0x550c7d(271) + _0x550c7d(207) + _0x550c7d(217) + _0x550c7d(217) + _0x550c7d(456) + _0x550c7d(393) + _0x550c7d(448) + _0x550c7d(210) + _0x550c7d(308) + _0x550c7d(462) + _0x51a104[_0x550c7d(338)](formatDate, _0x36bd5d[_0x550c7d(505)]) + (_0x550c7d(206) + _0x550c7d(217) + _0x550c7d(217) + _0x550c7d(250) + _0x550c7d(473) + _0x550c7d(553) + _0x550c7d(197) + _0x550c7d(233) + " ") + _0x36bd5d[_0x550c7d(593)] + (_0x550c7d(206) + _0x550c7d(217) + _0x550c7d(217) + _0x550c7d(250) + _0x550c7d(417) + _0x550c7d(526) + _0x550c7d(300) + _0x550c7d(356) + _0x550c7d(282)) + _0x36bd5d[_0x550c7d(290)] + _0x550c7d(474) + _0x36bd5d[_0x550c7d(295)] + (_0x550c7d(206) + _0x550c7d(217) + _0x550c7d(217) + "  ") + (_0x21e5e4 ? _0x51a104[_0x550c7d(581)] : _0x2e2a4d) + (_0x550c7d(395) + _0x550c7d(217) + _0x550c7d(392) + _0x550c7d(217) + _0x550c7d(491) + _0x550c7d(259) + _0x550c7d(258) + _0x550c7d(200) + _0x550c7d(391) + _0x550c7d(515)) + _0x36bd5d[_0x550c7d(239)] + _0x550c7d(323) + _0x36bd5d[_0x550c7d(203)] + _0x550c7d(323) + _0x36bd5d[_0x550c7d(428)] + _0x550c7d(323) + _0x36bd5d[_0x550c7d(481)] + _0x550c7d(323) + _0x36bd5d[_0x550c7d(593)] + (_0x550c7d(489) + _0x550c7d(217) + _0x550c7d(223) + _0x550c7d(448) + _0x550c7d(567) + _0x550c7d(318) + _0x550c7d(352) + _0x550c7d(217) + _0x550c7d(217) + _0x550c7d(524) + _0x550c7d(217) + _0x550c7d(508)), _0x31c40e[_0x550c7d(478) + "d"](_0x151ed6), _0x21e5e4 && !sentNotifications[_0x550c7d(319)](_0x36bd5d[_0x550c7d(239)]) && (_0x51a104[_0x550c7d(422)](sendTelegramNotification, _0x36bd5d), sentNotifications[_0x550c7d(536)](_0x36bd5d[_0x550c7d(239)]));
  });
}
function updateCountdown() {
  const _0x3859f7 = _0x4a1165, _0x474cc3 = {aZGJu: _0x3859f7(551), yjZnf: function (_0x50b1c8, _0x1c3419) {
    return _0x50b1c8 - _0x1c3419;
  }, fobeJ: function (_0x2b79d2, _0x1e7a0a) {
    return _0x2b79d2 <= _0x1e7a0a;
  }, gLvQP: function (_0x4d677d, _0x887f5b) {
    return _0x4d677d / _0x887f5b;
  }, NvcZr: function (_0x30f9e2, _0x291d99) {
    return _0x30f9e2 * _0x291d99;
  }, mWxDs: function (_0x2f25f7, _0x1f2937) {
    return _0x2f25f7 % _0x1f2937;
  }, fQUwM: function (_0x2fa48a, _0x5d0b4c) {
    return _0x2fa48a % _0x5d0b4c;
  }, pwohN: function (_0x51c145, _0xeacac2) {
    return _0x51c145 * _0xeacac2;
  }, myEEL: _0x3859f7(201) + "r]"}, _0x271516 = document[_0x3859f7(266) + _0x3859f7(364)](_0x474cc3[_0x3859f7(238)]), _0x51cb35 = new Date;
  _0x271516[_0x3859f7(253)](_0x1e174e => {
    const _0x3defaa = _0x3859f7, _0x303821 = new Date(_0x1e174e[_0x3defaa(357) + "te"](_0x474cc3[_0x3defaa(375)])), _0xeb51aa = _0x474cc3[_0x3defaa(226)](_0x303821, _0x51cb35);
    if (_0x474cc3[_0x3defaa(303)](_0xeb51aa, 0)) _0x1e174e[_0x3defaa(328) + "t"] = ""; else {
      const _0x30d953 = Math[_0x3defaa(600)](_0x474cc3[_0x3defaa(292)](_0xeb51aa, _0x474cc3[_0x3defaa(579)](_0x474cc3[_0x3defaa(579)](1e3, 60), 60))), _0x387958 = Math[_0x3defaa(600)](_0x474cc3[_0x3defaa(292)](_0x474cc3[_0x3defaa(514)](_0xeb51aa, _0x474cc3[_0x3defaa(579)](_0x474cc3[_0x3defaa(579)](1e3, 60), 60)), _0x474cc3[_0x3defaa(579)](1e3, 60))), _0x4003b1 = Math[_0x3defaa(600)](_0x474cc3[_0x3defaa(292)](_0x474cc3[_0x3defaa(270)](_0xeb51aa, _0x474cc3[_0x3defaa(405)](1e3, 60)), 1e3));
      _0x1e174e[_0x3defaa(328) + "t"] = _0x30d953 + "h " + _0x387958 + "m " + _0x4003b1 + "s";
    }
  });
}
function playMatch(_0x2066bc, _0x3646ff, _0x5bc6b9, _0x491e01, _0x241601) {
  const _0x4d3222 = _0x4a1165, _0x362e32 = {LsOaw: _0x4d3222(365) + _0x4d3222(281), nOhMd: _0x4d3222(583) + _0x4d3222(577) + _0x4d3222(402), JGOeF: function (_0x504360, _0x2ea029) {
    return _0x504360 || _0x2ea029;
  }, tcCZk: _0x4d3222(566) + _0x4d3222(544), CiDFt: function (_0x1680f7, _0x31aa88) {
    return _0x1680f7(_0x31aa88);
  }, aZevx: _0x4d3222(539), AYWTi: _0x4d3222(441), iQARe: _0x4d3222(324), HBHOg: _0x4d3222(416), bkJks: _0x4d3222(486), sprQi: function (_0xfaa0f1, _0x28af3a) {
    return _0xfaa0f1(_0x28af3a);
  }};
  let _0x4c1034 = _0x362e32[_0x4d3222(435)](_0x3646ff, _0x5bc6b9) || _0x491e01;
  _0x362e32[_0x4d3222(592)](fetch, _0x3646ff)[_0x4d3222(396)](_0x2bb981 => {
    const _0x3fa79d = _0x4d3222;
    if (!_0x2bb981.ok) throw new Error(_0x362e32[_0x3fa79d(437)]);
    return _0x2bb981;
  })[_0x4d3222(348)](_0x507f97 => {
    const _0x1d662e = _0x4d3222;
    console[_0x1d662e(373)](_0x362e32[_0x1d662e(543)], _0x507f97), _0x4c1034 = _0x362e32[_0x1d662e(435)](_0x5bc6b9, _0x491e01);
  })[_0x4d3222(257)](() => {
    const _0x9ffe05 = _0x4d3222;
    _0x491e01 ? document[_0x9ffe05(287) + _0x9ffe05(442)](_0x362e32[_0x9ffe05(485)])[_0x9ffe05(349)] = _0x9ffe05(358) + _0x9ffe05(229) + _0x491e01 + (_0x9ffe05(463) + _0x9ffe05(369) + _0x9ffe05(341) + _0x9ffe05(334) + _0x9ffe05(265) + _0x9ffe05(507) + _0x9ffe05(316) + _0x9ffe05(315) + _0x9ffe05(554) + _0x9ffe05(493) + _0x9ffe05(480) + _0x9ffe05(310) + _0x9ffe05(285)) : _0x362e32[_0x9ffe05(518)](jwplayer, _0x362e32[_0x9ffe05(485)])[_0x9ffe05(329)]({file: _0x4c1034, width: _0x362e32[_0x9ffe05(504)], aspectratio: _0x362e32[_0x9ffe05(503)], image: " "}), document[_0x9ffe05(287) + _0x9ffe05(442)](_0x362e32[_0x9ffe05(485)])[_0x9ffe05(444) + _0x9ffe05(241)]({behavior: _0x362e32[_0x9ffe05(432)], block: _0x362e32[_0x9ffe05(382)]}), document[_0x9ffe05(287) + _0x9ffe05(442)](_0x362e32[_0x9ffe05(248)])[_0x9ffe05(328) + "t"] = _0x241601, _0x362e32[_0x9ffe05(518)](loadChannels, _0x2066bc);
  });
}
async function loadChannels(_0x2a2590) {
  const _0x56eeec = _0x4a1165, _0x1f7414 = {vlUbm: function (_0x4dfa2b, _0x452b89) {
    return _0x4dfa2b(_0x452b89);
  }, LDPFj: _0x56eeec(528) + _0x56eeec(605) + _0x56eeec(425), UjGKo: function (_0x1901e0, _0x2312c3) {
    return _0x1901e0 > _0x2312c3;
  }, ElJvp: function (_0x2a053e, _0x58c19f) {
    return _0x2a053e(_0x58c19f);
  }, VQmUh: _0x56eeec(449) + "st", kxOev: _0x56eeec(412), BNwtO: _0x56eeec(455), bBVyq: _0x56eeec(583) + _0x56eeec(366) + _0x56eeec(565)};
  try {
    const _0x576626 = await _0x1f7414[_0x56eeec(419)](fetch, _0x56eeec(283) + _0x56eeec(383) + _0x56eeec(540) + _0x56eeec(275) + _0x56eeec(236) + _0x2a2590);
    if (!_0x576626.ok) throw new Error(_0x1f7414[_0x56eeec(517)]);
    const _0x1dda20 = await _0x576626[_0x56eeec(215)]();
    _0x1dda20[_0x56eeec(330)] && _0x1f7414[_0x56eeec(355)](_0x1dda20[_0x56eeec(286)][_0x56eeec(380)], 0) ? (_0x1f7414[_0x56eeec(440)](renderChannels, _0x1dda20[_0x56eeec(286)]), _0x1f7414[_0x56eeec(440)](renderServerMenu, _0x1dda20[_0x56eeec(286)])) : (document[_0x56eeec(287) + _0x56eeec(442)](_0x1f7414[_0x56eeec(354)])[_0x56eeec(404)][_0x56eeec(556)] = _0x1f7414[_0x56eeec(488)], document[_0x56eeec(287) + _0x56eeec(442)](_0x1f7414[_0x56eeec(534)])[_0x56eeec(404)][_0x56eeec(556)] = _0x1f7414[_0x56eeec(488)]);
  } catch (_0x44b706) {
    console[_0x56eeec(373)](_0x1f7414[_0x56eeec(255)], _0x44b706), document[_0x56eeec(287) + _0x56eeec(442)](_0x1f7414[_0x56eeec(354)])[_0x56eeec(404)][_0x56eeec(556)] = _0x1f7414[_0x56eeec(488)], document[_0x56eeec(287) + _0x56eeec(442)](_0x1f7414[_0x56eeec(534)])[_0x56eeec(404)][_0x56eeec(556)] = _0x1f7414[_0x56eeec(488)];
  }
}
function renderChannels(_0x4fed33) {
  const _0x34dcd0 = _0x4a1165, _0xf345a9 = {rzXSF: _0x34dcd0(532) + "ms", tKuKI: _0x34dcd0(449) + "st", FgcWH: _0x34dcd0(296)}, _0x16c23c = document[_0x34dcd0(287) + _0x34dcd0(442)](_0xf345a9[_0x34dcd0(574)]);
  _0x16c23c[_0x34dcd0(349)] = "", _0x4fed33[_0x34dcd0(253)](_0x15f1e7 => {
    const _0xfc3d1d = _0x34dcd0, _0x463933 = document[_0xfc3d1d(225) + _0xfc3d1d(196)]("li");
    _0x463933[_0xfc3d1d(349)] = _0xfc3d1d(395) + _0xfc3d1d(217) + _0xfc3d1d(420) + _0xfc3d1d(490) + _0xfc3d1d(252) + "'" + _0x15f1e7[_0xfc3d1d(333) + _0xfc3d1d(224)][0] + _0xfc3d1d(323) + _0x15f1e7[_0xfc3d1d(603)] + _0xfc3d1d(221) + _0x15f1e7[_0xfc3d1d(280)] + (_0xfc3d1d(524) + _0xfc3d1d(217) + _0xfc3d1d(508)), _0x16c23c[_0xfc3d1d(478) + "d"](_0x463933);
  }), document[_0x34dcd0(287) + _0x34dcd0(442)](_0xf345a9[_0x34dcd0(572)])[_0x34dcd0(404)][_0x34dcd0(556)] = _0xf345a9[_0x34dcd0(530)];
}
function playChannel(_0x54352d, _0x4c3f05) {
  const _0x2c6d77 = _0x4a1165, _0x34c128 = {WsciQ: _0x2c6d77(566) + _0x2c6d77(544), rSBZW: function (_0x4328a7, _0x342366) {
    return _0x4328a7(_0x342366);
  }, qGudP: _0x2c6d77(539), iApSH: _0x2c6d77(441), sbmga: _0x2c6d77(324), QyIsX: _0x2c6d77(416)};
  _0x4c3f05 ? document[_0x2c6d77(287) + _0x2c6d77(442)](_0x34c128[_0x2c6d77(426)])[_0x2c6d77(349)] = _0x2c6d77(358) + _0x2c6d77(229) + _0x4c3f05 + (_0x2c6d77(463) + _0x2c6d77(369) + _0x2c6d77(341) + _0x2c6d77(334) + _0x2c6d77(265) + _0x2c6d77(507) + _0x2c6d77(316) + _0x2c6d77(315) + _0x2c6d77(554) + _0x2c6d77(493) + _0x2c6d77(480) + _0x2c6d77(310) + _0x2c6d77(285)) : _0x34c128[_0x2c6d77(278)](jwplayer, _0x34c128[_0x2c6d77(426)])[_0x2c6d77(329)]({file: _0x54352d, width: _0x34c128[_0x2c6d77(547)], aspectratio: _0x34c128[_0x2c6d77(235)], image: " "}), document[_0x2c6d77(287) + _0x2c6d77(442)](_0x34c128[_0x2c6d77(426)])[_0x2c6d77(444) + _0x2c6d77(241)]({behavior: _0x34c128[_0x2c6d77(401)], block: _0x34c128[_0x2c6d77(454)]});
}
function renderServerMenu(_0x4a262c) {
  const _0x343a7b = _0x4a1165, _0xfb3e18 = {hNROo: _0x343a7b(346), fArFz: _0x343a7b(455), CMESP: _0x343a7b(296)}, _0x1b0996 = document[_0x343a7b(287) + _0x343a7b(442)](_0xfb3e18[_0x343a7b(406)]);
  _0x1b0996[_0x343a7b(349)] = "";
  let _0x46a732 = 1;
  _0x4a262c[_0x343a7b(253)]((_0x1a3fe2, _0x1244c9) => {
    const _0x2f2515 = _0x343a7b, _0x24eeb1 = {KPgXI: _0xfb3e18[_0x2f2515(353)]};
    _0x1a3fe2[_0x2f2515(333) + _0x2f2515(224)][_0x2f2515(253)]((_0x278560, _0x33854b) => {
      const _0x4690ab = _0x2f2515, _0x111b07 = document[_0x4690ab(225) + _0x4690ab(196)](_0x24eeb1[_0x4690ab(403)]);
      _0x111b07[_0x4690ab(349)] = _0x4690ab(279) + _0x4690ab(362) + _0x4690ab(202) + _0x4690ab(267) + _0x46a732, _0x111b07[_0x4690ab(586)] = () => playChannel(_0x278560, _0x1a3fe2[_0x4690ab(603)]), _0x1b0996[_0x4690ab(478) + "d"](_0x111b07), _0x46a732++;
    });
  }), document[_0x343a7b(287) + _0x343a7b(442)](_0xfb3e18[_0x343a7b(406)])[_0x343a7b(404)][_0x343a7b(556)] = _0xfb3e18[_0x343a7b(533)];
}
function populateFilters(_0x5971fe) {
  const _0x8aa66d = _0x4a1165, _0x4c65e1 = {DBGcq: _0x8aa66d(604), UWzkf: function (_0xc71e25, _0x540917) {
    return _0xc71e25(_0x540917);
  }, NKJxT: _0x8aa66d(394), tBLuw: _0x8aa66d(340) + "er", exPmz: _0x8aa66d(501) + _0x8aa66d(461) + _0x8aa66d(218) + _0x8aa66d(213), vUmtd: _0x8aa66d(501) + _0x8aa66d(461) + _0x8aa66d(407) + _0x8aa66d(512) + "n>"}, _0x16dbfc = document[_0x8aa66d(287) + _0x8aa66d(442)](_0x4c65e1[_0x8aa66d(376)]), _0x485704 = document[_0x8aa66d(287) + _0x8aa66d(442)](_0x4c65e1[_0x8aa66d(458)]);
  _0x16dbfc[_0x8aa66d(349)] = _0x4c65e1[_0x8aa66d(335)], _0x485704[_0x8aa66d(349)] = _0x4c65e1[_0x8aa66d(325)];
  const _0x48a4b2 = [...new Set(_0x5971fe[_0x8aa66d(445)](_0x5f2df6 => _0x5f2df6[_0x8aa66d(505)]))], _0xb986f = [...new Set(_0x5971fe[_0x8aa66d(445)](_0x470002 => _0x470002[_0x8aa66d(295)]))];
  _0x48a4b2[_0x8aa66d(253)](_0xe7d9df => {
    const _0x3714da = _0x8aa66d, _0x2ae99c = document[_0x3714da(225) + _0x3714da(196)](_0x4c65e1[_0x3714da(264)]);
    _0x2ae99c[_0x3714da(464)] = _0xe7d9df[_0x3714da(379) + "e"](), _0x2ae99c[_0x3714da(328) + "t"] = _0x4c65e1[_0x3714da(499)](formatDate, _0xe7d9df), _0x16dbfc[_0x3714da(478) + "d"](_0x2ae99c);
  }), _0xb986f[_0x8aa66d(253)](_0x210521 => {
    const _0x5c6827 = _0x8aa66d, _0x4c9d53 = document[_0x5c6827(225) + _0x5c6827(196)](_0x4c65e1[_0x5c6827(264)]);
    _0x4c9d53[_0x5c6827(464)] = _0x210521[_0x5c6827(379) + "e"](), _0x4c9d53[_0x5c6827(328) + "t"] = _0x210521, _0x485704[_0x5c6827(478) + "d"](_0x4c9d53);
  });
}
function filterMatches() {
  const _0x1c8c59 = _0x4a1165, _0x3d4036 = {rbwEu: _0x1c8c59(597), dCcuX: _0x1c8c59(602) + "e", viVvr: _0x1c8c59(457), iRMiY: function (_0x16ea6e, _0x10b04b) {
    return _0x16ea6e === _0x10b04b;
  }, pYUTK: function (_0x4f172d, _0x2b9915) {
    return _0x4f172d && _0x2b9915;
  }, OIyRr: _0x1c8c59(562) + "s", xbGGF: _0x1c8c59(427), OTJAR: function (_0x312874, _0x5e012a) {
    return _0x312874 !== _0x5e012a;
  }, uvVKY: function (_0x29d95c, _0x27106f) {
    return _0x29d95c !== _0x27106f;
  }, SHgtT: _0x1c8c59(563), FbOMl: _0x1c8c59(394), KYnNQ: _0x1c8c59(340) + "er", xePNX: _0x1c8c59(413), uJuWT: _0x1c8c59(209) + _0x1c8c59(299), rQcHb: _0x1c8c59(246), YruaS: _0x1c8c59(408)}, _0x2ff8f4 = document[_0x1c8c59(287) + _0x1c8c59(442)](_0x3d4036[_0x1c8c59(386)])[_0x1c8c59(464)][_0x1c8c59(379) + "e"](), _0x309b2a = document[_0x1c8c59(287) + _0x1c8c59(442)](_0x3d4036[_0x1c8c59(388)])[_0x1c8c59(464)][_0x1c8c59(379) + "e"](), _0x32c0b9 = document[_0x1c8c59(287) + _0x1c8c59(442)](_0x3d4036[_0x1c8c59(467)])[_0x1c8c59(464)][_0x1c8c59(379) + "e"](), _0x51ee8e = document[_0x1c8c59(266) + _0x1c8c59(364)](_0x3d4036[_0x1c8c59(590)]);
  let _0x3b3a13 = 0;
  const _0x3dc948 = Array[_0x1c8c59(237)](_0x51ee8e)[_0x1c8c59(595)](_0x37caf7 => {
    const _0x431fbb = _0x1c8c59, _0x47603a = _0x37caf7[_0x431fbb(357) + "te"](_0x3d4036[_0x431fbb(400)]), _0x2caa87 = _0x37caf7[_0x431fbb(357) + "te"](_0x3d4036[_0x431fbb(585)]), _0x26ae25 = _0x37caf7[_0x431fbb(357) + "te"](_0x3d4036[_0x431fbb(542)]), _0x17d2ef = !_0x2ff8f4 || _0x3d4036[_0x431fbb(321)](_0x47603a, _0x2ff8f4), _0xbd6ea = !_0x309b2a || _0x3d4036[_0x431fbb(321)](_0x2caa87, _0x309b2a), _0x1b96b5 = !_0x32c0b9 || _0x26ae25[_0x431fbb(372)](_0x32c0b9);
    return _0x3d4036[_0x431fbb(587)](_0x17d2ef, _0xbd6ea) && _0x1b96b5;
  })[_0x1c8c59(409)]((_0xdba663, _0x456ab3) => {
    const _0x44c97d = _0x1c8c59, _0x44c99a = _0xdba663[_0x44c97d(357) + "te"](_0x3d4036[_0x44c97d(584)]), _0x14f527 = _0x456ab3[_0x44c97d(357) + "te"](_0x3d4036[_0x44c97d(584)]);
    if (_0x3d4036[_0x44c97d(321)](_0x44c99a, _0x3d4036[_0x44c97d(559)]) && _0x3d4036[_0x44c97d(234)](_0x14f527, _0x3d4036[_0x44c97d(559)])) return -1;
    if (_0x3d4036[_0x44c97d(436)](_0x44c99a, _0x3d4036[_0x44c97d(559)]) && _0x3d4036[_0x44c97d(321)](_0x14f527, _0x3d4036[_0x44c97d(559)])) return 1;
    return 0;
  });
  _0x51ee8e[_0x1c8c59(253)](_0x40819c => _0x40819c[_0x1c8c59(404)][_0x1c8c59(556)] = _0x1c8c59(412)), _0x3dc948[_0x1c8c59(253)](_0x1698a2 => {
    const _0x435cf7 = _0x1c8c59;
    _0x1698a2[_0x435cf7(404)][_0x435cf7(556)] = _0x3d4036[_0x435cf7(479)], _0x3b3a13++;
  });
  const _0x268d3d = document[_0x1c8c59(287) + _0x1c8c59(442)](_0x3d4036[_0x1c8c59(487)]);
  _0x3d4036[_0x1c8c59(321)](_0x3b3a13, 0) ? _0x268d3d[_0x1c8c59(370)][_0x1c8c59(536)](_0x3d4036[_0x1c8c59(470)]) : _0x268d3d[_0x1c8c59(370)][_0x1c8c59(307)](_0x3d4036[_0x1c8c59(470)]);
}
function resetFilters() {
  const _0x5e400d = _0x4a1165, _0xdc346f = {aDAGZ: _0x5e400d(394), fNNBM: _0x5e400d(340) + "er", ppQTQ: _0x5e400d(413), rGKxA: function (_0x5484db) {
    return _0x5484db();
  }};
  document[_0x5e400d(287) + _0x5e400d(442)](_0xdc346f[_0x5e400d(294)])[_0x5e400d(464)] = "", document[_0x5e400d(287) + _0x5e400d(442)](_0xdc346f[_0x5e400d(599)])[_0x5e400d(464)] = "", document[_0x5e400d(287) + _0x5e400d(442)](_0xdc346f[_0x5e400d(314)])[_0x5e400d(464)] = "", _0xdc346f[_0x5e400d(538)](filterMatches);
}
function debounce(_0x4a738, _0x6e4f0d) {
  const _0x5e649e = {ZJTLd: function (_0x10e588, _0x42a710) {
    return _0x10e588(_0x42a710);
  }, Piahn: function (_0x227791, _0x1c221c, _0x2679b0) {
    return _0x227791(_0x1c221c, _0x2679b0);
  }};
  let _0x39c364;
  return function (..._0x4d5c7b) {
    const _0x4222b5 = _0x2f73;
    _0x5e649e[_0x4222b5(549)](clearTimeout, _0x39c364), _0x39c364 = _0x5e649e[_0x4222b5(580)](setTimeout, () => _0x4a738[_0x4222b5(434)](this, _0x4d5c7b), _0x6e4f0d);
  };
}
document[_0x4a1165(287) + _0x4a1165(442)](_0x4a1165(413))[_0x4a1165(309) + _0x4a1165(520)](_0x4a1165(302), debounce(filterMatches, 300)), document[_0x4a1165(287) + _0x4a1165(442)](_0x4a1165(394))[_0x4a1165(309) + _0x4a1165(520)](_0x4a1165(332), filterMatches), document[_0x4a1165(287) + _0x4a1165(442)](_0x4a1165(340) + "er")[_0x4a1165(309) + _0x4a1165(520)](_0x4a1165(332), filterMatches), document[_0x4a1165(309) + _0x4a1165(520)](_0x4a1165(311) + _0x4a1165(228), loadMatches), window[_0x4a1165(326)] = function () {
  const _0x164b46 = _0x4a1165, _0x1414aa = {vvOwg: function (_0x26a30d) {
    return _0x26a30d();
  }};
  _0x1414aa[_0x164b46(601)](scrollFunction);
};
function scrollFunction() {
  const _0x461278 = _0x4a1165, _0x18b5b1 = {UdZfz: function (_0x5a9db2, _0x264215) {
    return _0x5a9db2 > _0x264215;
  }, qqFeo: function (_0x2b029e, _0x5c5b8c) {
    return _0x2b029e > _0x5c5b8c;
  }, lUCKa: _0x461278(510) + _0x461278(297), uprMg: _0x461278(296), cTrdn: _0x461278(412)};
  _0x18b5b1[_0x461278(509)](document[_0x461278(232)][_0x461278(305)], 20) || _0x18b5b1[_0x461278(389)](document[_0x461278(469) + _0x461278(475)][_0x461278(305)], 20) ? document[_0x461278(287) + _0x461278(442)](_0x18b5b1[_0x461278(208)])[_0x461278(404)][_0x461278(556)] = _0x18b5b1[_0x461278(350)] : document[_0x461278(287) + _0x461278(442)](_0x18b5b1[_0x461278(208)])[_0x461278(404)][_0x461278(556)] = _0x18b5b1[_0x461278(359)];
}
function scrollToTop() {
  const _0x36948b = _0x4a1165;
  document[_0x36948b(232)][_0x36948b(305)] = 0, document[_0x36948b(469) + _0x36948b(475)][_0x36948b(305)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x155ff) {
  const _0x4b842a = _0x4a1165, _0x13149e = {MmluG: _0x4b842a(431) + _0x4b842a(496) + _0x4b842a(336), VPXDh: _0x4b842a(583) + _0x4b842a(384) + _0x4b842a(304), PlTfE: _0x4b842a(511) + _0x4b842a(240) + _0x4b842a(242), bxWGE: function (_0xb605ce, _0x304753) {
    return _0xb605ce(_0x304753);
  }, HnEGx: function (_0x52cf12, _0x184e49) {
    return _0x52cf12(_0x184e49);
  }, ERvBO: function (_0x5d3ad9, _0xbe4de1, _0x38ea21) {
    return _0x5d3ad9(_0xbe4de1, _0x38ea21);
  }, TjFNc: _0x4b842a(447)}, _0x43c5c3 = _0x4b842a(331) + ": " + _0x155ff[_0x4b842a(593)] + _0x4b842a(578) + _0x13149e[_0x4b842a(519)](formatDate, _0x155ff[_0x4b842a(505)]) + _0x4b842a(525) + _0x155ff[_0x4b842a(290)] + _0x4b842a(424) + _0x155ff[_0x4b842a(295)] + (_0x4b842a(589) + _0x4b842a(199) + _0x4b842a(471) + _0x4b842a(537) + "m/"), _0x3fbdf8 = _0x4b842a(283) + _0x4b842a(443) + _0x4b842a(460) + telegramBotToken + (_0x4b842a(351) + _0x4b842a(360) + "=") + telegramChatId + _0x4b842a(494) + _0x13149e[_0x4b842a(560)](encodeURIComponent, _0x43c5c3);
  _0x13149e[_0x4b842a(484)](fetch, _0x3fbdf8, {method: _0x13149e[_0x4b842a(500)]})[_0x4b842a(396)](_0x3aec37 => _0x3aec37[_0x4b842a(215)]())[_0x4b842a(396)](_0x48cedf => {
    const _0x2a7934 = _0x4b842a;
    _0x48cedf.ok ? console[_0x2a7934(347)](_0x13149e[_0x2a7934(588)]) : console[_0x2a7934(373)](_0x13149e[_0x2a7934(204)], _0x48cedf);
  })[_0x4b842a(348)](_0x581efd => {
    const _0x4ae424 = _0x4b842a;
    console[_0x4ae424(373)](_0x13149e[_0x4ae424(269)], _0x581efd);
  });
}
