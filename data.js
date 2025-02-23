const _0x3a7bad = _0x5901;
(function (_0x539536, _0x191175) {
  const _0x344e20 = _0x5901, _0x5e0e2f = _0x539536();
  while (true) {
    try {
      const _0x4247ff = parseInt(_0x344e20(506)) / 1 + parseInt(_0x344e20(273)) / 2 + parseInt(_0x344e20(276)) / 3 * (parseInt(_0x344e20(239)) / 4) + parseInt(_0x344e20(353)) / 5 * (-parseInt(_0x344e20(208)) / 6) + parseInt(_0x344e20(149)) / 7 + parseInt(_0x344e20(224)) / 8 + -parseInt(_0x344e20(339)) / 9;
      if (_0x4247ff === _0x191175) break; else _0x5e0e2f.push(_0x5e0e2f.shift());
    } catch (_0x18036f) {
      _0x5e0e2f.push(_0x5e0e2f.shift());
    }
  }
}(_0x339e, 195720));
const telegramBotToken = _0x3a7bad(247) + _0x3a7bad(417) + _0x3a7bad(238) + _0x3a7bad(485) + _0x3a7bad(395), telegramChatId = _0x3a7bad(204), sentNotifications = new Set;
function formatDate(_0x6c6d17) {
  const _0x440fa9 = _0x3a7bad, _0x4784fc = {KYJtr: _0x440fa9(335), TQPdM: _0x440fa9(271), YdTmF: _0x440fa9(178), roDNC: _0x440fa9(160), SSYKs: _0x440fa9(402), YWgfT: _0x440fa9(218), zMxJG: _0x440fa9(301), sdTjY: _0x440fa9(255), tLnZX: _0x440fa9(440), TybzX: _0x440fa9(197), bDDBk: _0x440fa9(280), zonbs: _0x440fa9(342)}, _0x1b3f3b = [_0x4784fc[_0x440fa9(412)], _0x4784fc[_0x440fa9(331)], _0x4784fc[_0x440fa9(322)], _0x4784fc[_0x440fa9(445)], _0x4784fc[_0x440fa9(488)], _0x4784fc[_0x440fa9(319)], _0x4784fc[_0x440fa9(174)], _0x4784fc[_0x440fa9(487)], _0x4784fc[_0x440fa9(457)], _0x4784fc[_0x440fa9(216)], _0x4784fc[_0x440fa9(509)], _0x4784fc[_0x440fa9(398)]], _0x8a0d4 = new Date(_0x6c6d17), _0x43d91c = _0x8a0d4[_0x440fa9(299)](), _0x8f384f = _0x1b3f3b[_0x8a0d4[_0x440fa9(184)]()], _0x1a18de = _0x8a0d4[_0x440fa9(249) + "r"]();
  return _0x43d91c + " " + _0x8f384f + " " + _0x1a18de;
}
async function loadMatches() {
  const _0x43702d = _0x3a7bad, _0x4dbbd4 = {NOvSP: _0x43702d(507), urPVk: _0x43702d(435), kCvHB: function (_0x3102c6) {
    return _0x3102c6();
  }, bUxoE: function (_0x477077, _0x263a42) {
    return _0x477077(_0x263a42);
  }, NkcGF: function (_0x5faf83, _0x1f62ee) {
    return _0x5faf83(_0x1f62ee);
  }, TLeMS: function (_0x148f0c) {
    return _0x148f0c();
  }, StDbQ: function (_0x2abcd5, _0x366858, _0x2c333f) {
    return _0x2abcd5(_0x366858, _0x2c333f);
  }, Mjlxx: _0x43702d(468) + _0x43702d(210) + _0x43702d(355), lvFKR: _0x43702d(341), zCZBD: _0x43702d(471), SEGyk: _0x43702d(267)};
  try {
    document[_0x43702d(508) + _0x43702d(201)](_0x4dbbd4[_0x43702d(220)])[_0x43702d(277)][_0x43702d(324)] = _0x4dbbd4[_0x43702d(423)];
    const _0x12edca = await _0x4dbbd4[_0x43702d(325)](fetchMatches);
    _0x4dbbd4[_0x43702d(203)](renderMatches, _0x12edca), _0x4dbbd4[_0x43702d(172)](populateFilters, _0x12edca), _0x4dbbd4[_0x43702d(325)](filterMatches), _0x4dbbd4[_0x43702d(392)](updateCountdown), _0x4dbbd4[_0x43702d(354)](setInterval, updateCountdown, 1e3);
  } catch (_0x4824a7) {
    console[_0x43702d(340)](_0x4dbbd4[_0x43702d(292)], _0x4824a7), document[_0x43702d(508) + _0x43702d(201)](_0x4dbbd4[_0x43702d(403)])[_0x43702d(219)][_0x43702d(141)](_0x4dbbd4[_0x43702d(286)]);
  } finally {
    document[_0x43702d(508) + _0x43702d(201)](_0x4dbbd4[_0x43702d(220)])[_0x43702d(277)][_0x43702d(324)] = _0x4dbbd4[_0x43702d(415)];
  }
}
async function fetchMatches() {
  const _0xb9d2f3 = _0x3a7bad, _0x314577 = {MWeQV: function (_0x5b6d4d, _0x42c68d) {
    return _0x5b6d4d(_0x42c68d);
  }, BgIMR: _0xb9d2f3(171) + _0xb9d2f3(499) + _0xb9d2f3(352) + _0xb9d2f3(275) + _0xb9d2f3(168) + _0xb9d2f3(217), bcfDI: _0xb9d2f3(480) + _0xb9d2f3(383) + _0xb9d2f3(409)}, _0x2ad6ca = await _0x314577[_0xb9d2f3(207)](fetch, _0x314577[_0xb9d2f3(436)]);
  if (!_0x2ad6ca.ok) throw new Error(_0x314577[_0xb9d2f3(337)]);
  const _0x57c781 = await _0x2ad6ca[_0xb9d2f3(400)](), _0x3dfa06 = await _0x314577[_0xb9d2f3(207)](fetchLiveUrls, _0x57c781);
  return _0x57c781[_0xb9d2f3(407)](_0x1a2bf7 => {
    const _0x1080de = _0xb9d2f3;
    _0x1a2bf7[_0x1080de(153)] = _0x3dfa06[_0x1a2bf7[_0x1080de(411)]] || _0x1a2bf7[_0x1080de(370)];
  }), _0x57c781;
}
async function fetchLiveUrls(_0x14085c) {
  const _0x1edf2f = _0x3a7bad, _0x35ea75 = {ORXpc: function (_0x5752c3, _0x3f8e4d) {
    return _0x5752c3(_0x3f8e4d);
  }, DuyKU: function (_0x2a3f4b, _0x3c13e3) {
    return _0x2a3f4b > _0x3c13e3;
  }}, _0xfca9c2 = _0x14085c[_0x1edf2f(447)](_0xff704d => _0xff704d[_0x1edf2f(411)]), _0x181434 = {}, _0x457a6b = _0xfca9c2[_0x1edf2f(447)](async _0x22a2d9 => {
    const _0x537fc4 = _0x1edf2f;
    try {
      const _0x543d30 = await _0x35ea75[_0x537fc4(314)](fetch, _0x537fc4(382) + _0x537fc4(496) + _0x537fc4(284) + _0x537fc4(349) + _0x537fc4(150) + _0x22a2d9);
      if (_0x543d30.ok) {
        const _0x5c42d2 = await _0x543d30[_0x537fc4(400)]();
        _0x5c42d2[_0x537fc4(326)] && _0x35ea75[_0x537fc4(227)](_0x5c42d2[_0x537fc4(281)][_0x537fc4(500)], 0) && (_0x181434[_0x22a2d9] = _0x5c42d2[_0x537fc4(281)][0][_0x537fc4(158) + _0x537fc4(256)][0]);
      }
    } catch (_0x41496c) {
      console[_0x537fc4(340)](_0x537fc4(468) + _0x537fc4(198) + _0x537fc4(221) + _0x537fc4(266) + _0x22a2d9 + ":", _0x41496c);
    }
  });
  return await Promise[_0x1edf2f(358)](_0x457a6b), _0x181434;
}
function renderMatches(_0x464f01) {
  const _0x1331e5 = _0x3a7bad, _0x41194c = {Vwtli: function (_0x46e4d5, _0x444e49) {
    return _0x46e4d5 >= _0x444e49;
  }, sqCSu: function (_0x2c069d, _0x51e8af) {
    return _0x2c069d <= _0x51e8af;
  }, BSHEe: function (_0x2bb007, _0x5be585) {
    return _0x2bb007 + _0x5be585;
  }, YlnzR: function (_0x3952a7, _0xf65be8) {
    return _0x3952a7 * _0xf65be8;
  }, CVeiq: function (_0x10bab5, _0x3c5470) {
    return _0x10bab5 * _0x3c5470;
  }, clefs: function (_0x463ae4, _0x378074) {
    return _0x463ae4 >= _0x378074;
  }, UguqR: function (_0x4b3743, _0x52eb3f) {
    return _0x4b3743 <= _0x52eb3f;
  }, myiHQ: function (_0x34ff69, _0x528310) {
    return _0x34ff69 + _0x528310;
  }, WaNJV: function (_0x2e6b94, _0xfeffe3) {
    return _0x2e6b94 * _0xfeffe3;
  }, hbOxC: function (_0x5cdf16, _0x35e52c) {
    return _0x5cdf16 && _0x35e52c;
  }, rwEsR: function (_0x25a316, _0x25f0b2) {
    return _0x25a316 && _0x25f0b2;
  }, GRgKX: function (_0x243ee4, _0x265dcb) {
    return _0x243ee4 + _0x265dcb;
  }, rEAVw: function (_0x291d7c, _0x35fd03) {
    return _0x291d7c * _0x35fd03;
  }, UDalh: function (_0x36e915, _0x3e6f0e) {
    return _0x36e915 * _0x3e6f0e;
  }, OfzOF: _0x1331e5(469), cMnKd: _0x1331e5(418) + _0x1331e5(461), RuxFe: _0x1331e5(442), SDBfm: _0x1331e5(162) + "e", ZZQqQ: _0x1331e5(214), KtOZr: _0x1331e5(316) + "s", CiLBt: _0x1331e5(287), DPIRJ: _0x1331e5(262), XpVCH: function (_0xc6334b, _0x427390) {
    return _0xc6334b(_0x427390);
  }, KvNcV: _0x1331e5(260) + _0x1331e5(460) + _0x1331e5(343) + _0x1331e5(377) + _0x1331e5(251) + _0x1331e5(360) + _0x1331e5(327) + _0x1331e5(161), vCXJS: function (_0x2c6eff, _0x3633c0) {
    return _0x2c6eff(_0x3633c0);
  }, NZYKv: _0x1331e5(346) + _0x1331e5(190)}, _0x12a4ac = document[_0x1331e5(508) + _0x1331e5(201)](_0x41194c[_0x1331e5(359)]);
  _0x12a4ac[_0x1331e5(196)] = "", _0x464f01[_0x1331e5(396)]((_0x4527f1, _0x33e3a5) => {
    const _0x28d98d = _0x1331e5, _0x4ff21d = new Date, _0x37c54f = new Date(_0x4527f1[_0x28d98d(397)] + "T" + _0x4527f1[_0x28d98d(406)]), _0x20aa0a = new Date(_0x33e3a5[_0x28d98d(397)] + "T" + _0x33e3a5[_0x28d98d(406)]), _0x3cb2c6 = _0x41194c[_0x28d98d(452)](_0x4ff21d, _0x37c54f) && _0x41194c[_0x28d98d(388)](_0x4ff21d, new Date(_0x41194c[_0x28d98d(347)](_0x37c54f[_0x28d98d(240)](), _0x41194c[_0x28d98d(427)](_0x41194c[_0x28d98d(427)](_0x41194c[_0x28d98d(293)](2, 60), 60), 1e3)))), _0x995efb = _0x41194c[_0x28d98d(391)](_0x4ff21d, _0x20aa0a) && _0x41194c[_0x28d98d(356)](_0x4ff21d, new Date(_0x41194c[_0x28d98d(495)](_0x20aa0a[_0x28d98d(240)](), _0x41194c[_0x28d98d(213)](_0x41194c[_0x28d98d(293)](_0x41194c[_0x28d98d(293)](2, 60), 60), 1e3))));
    if (_0x41194c[_0x28d98d(362)](_0x3cb2c6, !_0x995efb)) return -1;
    if (_0x41194c[_0x28d98d(482)](!_0x3cb2c6, _0x995efb)) return 1;
    return 0;
  }), _0x464f01[_0x1331e5(407)](_0x4a7245 => {
    const _0xe9841a = _0x1331e5, _0x56435b = _0x4a7245[_0xe9841a(153)] || _0x4a7245[_0xe9841a(370)], _0x92a808 = new Date, _0x367cd1 = new Date(_0x4a7245[_0xe9841a(397)] + "T" + _0x4a7245[_0xe9841a(406)]), _0x42b400 = _0x41194c[_0xe9841a(452)](_0x92a808, _0x367cd1) && _0x41194c[_0xe9841a(388)](_0x92a808, new Date(_0x41194c[_0xe9841a(422)](_0x367cd1[_0xe9841a(240)](), _0x41194c[_0xe9841a(293)](_0x41194c[_0xe9841a(502)](_0x41194c[_0xe9841a(205)](2, 60), 60), 1e3)))), _0x4cf752 = document[_0xe9841a(283) + _0xe9841a(323)](_0x41194c[_0xe9841a(380)]);
    _0x4cf752[_0xe9841a(475)] = _0x41194c[_0xe9841a(209)], _0x4cf752[_0xe9841a(498) + "te"](_0x41194c[_0xe9841a(470)], _0x4a7245[_0xe9841a(397)][_0xe9841a(148) + "e"]()), _0x4cf752[_0xe9841a(498) + "te"](_0x41194c[_0xe9841a(228)], _0x4a7245[_0xe9841a(333)][_0xe9841a(148) + "e"]()), _0x4cf752[_0xe9841a(498) + "te"](_0x41194c[_0xe9841a(241)], _0x4a7245[_0xe9841a(366)][_0xe9841a(148) + "e"]()), _0x4cf752[_0xe9841a(498) + "te"](_0x41194c[_0xe9841a(246)], _0x42b400 ? _0x41194c[_0xe9841a(193)] : _0x41194c[_0xe9841a(428)]);
    const _0x590835 = !_0x42b400 ? _0xe9841a(260) + _0xe9841a(200) + _0xe9841a(194) + _0xe9841a(369) + _0x4a7245[_0xe9841a(397)] + "T" + _0x4a7245[_0xe9841a(406)] + (_0xe9841a(242) + _0xe9841a(297) + _0xe9841a(393)) : "";
    _0x4cf752[_0xe9841a(196)] = _0xe9841a(449) + _0xe9841a(505) + _0xe9841a(320) + _0xe9841a(321) + _0xe9841a(416) + _0xe9841a(505) + _0xe9841a(505) + _0xe9841a(260) + _0xe9841a(258) + _0xe9841a(343) + _0xe9841a(374) + _0xe9841a(225) + _0xe9841a(170) + _0x41194c[_0xe9841a(187)](formatDate, _0x4a7245[_0xe9841a(397)]) + (_0xe9841a(243) + _0xe9841a(505) + _0xe9841a(505) + _0xe9841a(296) + _0xe9841a(459) + _0xe9841a(351) + _0xe9841a(229) + _0xe9841a(250) + " ") + _0x4a7245[_0xe9841a(366)] + (_0xe9841a(243) + _0xe9841a(505) + _0xe9841a(505) + _0xe9841a(296) + _0xe9841a(270) + _0xe9841a(334) + _0xe9841a(437) + _0xe9841a(226) + _0xe9841a(303)) + _0x4a7245[_0xe9841a(406)] + _0xe9841a(206) + _0x4a7245[_0xe9841a(333)] + (_0xe9841a(243) + _0xe9841a(505) + _0xe9841a(505) + "  ") + (_0x42b400 ? _0x41194c[_0xe9841a(405)] : _0x590835) + (_0xe9841a(449) + _0xe9841a(505) + _0xe9841a(269) + _0xe9841a(505) + _0xe9841a(466) + _0xe9841a(143) + _0xe9841a(233) + _0xe9841a(501) + _0xe9841a(144) + _0xe9841a(497)) + _0x4a7245[_0xe9841a(411)] + _0xe9841a(230) + _0x4a7245[_0xe9841a(153)] + _0xe9841a(230) + _0x4a7245[_0xe9841a(370)] + (_0xe9841a(394) + _0xe9841a(505) + _0xe9841a(147) + _0xe9841a(343) + _0xe9841a(289) + _0xe9841a(181) + _0xe9841a(368) + _0xe9841a(505) + _0xe9841a(505) + _0xe9841a(163) + _0xe9841a(505) + _0xe9841a(195)), _0x12a4ac[_0xe9841a(338) + "d"](_0x4cf752), _0x42b400 && !sentNotifications[_0xe9841a(305)](_0x4a7245[_0xe9841a(411)]) && (_0x41194c[_0xe9841a(390)](sendTelegramNotification, _0x4a7245), sentNotifications[_0xe9841a(141)](_0x4a7245[_0xe9841a(411)]));
  });
}
function _0x339e() {
  const _0x3724a7 = ["Qbqof", "soYft", "atchId ", "none", "cation:", " </div>\n  ", 'ass="detai', "February", "logspot.co", "283786epfcSc", "serverMenu", "la.github.", "2028AhKBBx", "style", "CSXxv", "scrollInto", "November", "result", "flex", "createElem", "/v1/match/", "start", "zCZBD", "live", "leagueFilt", "as fa-play", "ge?chat_id", "AESWj", "Mjlxx", "CVeiq", 'ver"></i> ', "eCouV", "  <span cl", " Soon...</", "getAttribu", "getDate", "hpahH", "July", "finally", "i> ", "remove", "has", "JnCpv", "IbLAz", "teamSearch", "LFocE", "tgYjD", "Loaded", "addEventLi", "EQxNP", "ORXpc", "GgWbr", "data-statu", ".org/bot", "BEZuD", "YWgfT", " <div clas", 's="match-i', "YdTmF", "ent", "display", "kCvHB", "status", "ve Now</sp", "pButton", "nTPem", "jRPBJ", "TQPdM", "button", "league", 'ls"><i cla', "January", "XlDsk", "bcfDI", "appendChil", "7271388jOFWKD", "error", "noMatches", "December", 'i class="f', "JXRyL", "fEkwW", "scheduleCo", "BSHEe", "name", "channels?m", "ps://zonas", '"><i class', "thub.io/bo", "614405mbbpZu", "StDbQ", "es:", "UguqR", "option", "all", "NZYKv", 'r"></i> Li', "awmqE", "hbOxC", "QnLcA", "els:", "stnMh", "teams", "Fjxdb", "/i> Watch\n", 'imer="', "m3u8Url", "uclmv", "ypvIc", "Xarxq", "as fa-cale", 'nclick="pl', "JHoyi", "as fa-broa", "i.telegram", "iYzxx", "OfzOF", "🚨 Live Now", "https://ap", "sponse was", ".schedule-", "hLIAs", "setup", "ter by Dat", "sqCSu", "includes", "vCXJS", "clefs", "TLeMS", "span>", "')\">\n     ", "23795c", "sort", "date", "zonbs", "fas fa-ser", "json", "querySelec", "May", "lvFKR", "on sent su", "KvNcV", "time", "forEach", "Error send", " not ok", "pWfIr", "videoId", "KYJtr", "gcnCv", "NJrZj", "SEGyk", 'nfo">\n    ', ":AAGG4SAfi", "schedule-c", "QMGZr", "dateFilter", "&text=", "GRgKX", "urPVk", "send notif", "ZGImU", "ing notifi", "YlnzR", "DPIRJ", "torAll", "haTGe", "VYJrr", '<i class="', "smooth", "OPrdI", "block", "BgIMR", 'ss="fas fa', "catch", "\nLink: htt", "September", "FqRcf", "data-date", "jwplayerCo", "ZfrEV", "roDNC", "View", "map", "kNrMa", "\n         ", "wAzed", "dCgqa", "Vwtli", "IvDGh", "nLGVD", "ement", "\nTime: ", "tLnZX", "<option va", 'ass="teams', 's="live"><', "ard", "log", "OnQTG", "NKQYR", "VPswP", "        <b", "data-timer", "Failed to ", "div", "RuxFe", "show", "load live ", "Notificati", " <button o", "className", "FGCKe", "waVsk", "BnVcP", "dJjmR", "Network re", "ailed", "rwEsR", "floor", "then", "zvc2_I5WDk", "ZaRsu", "sdTjY", "SSYKs", "RZXPI", "RrAFS", "load chann", "LfyGs", "card", "lgwAQ", "myiHQ", "i.90min.to", "Match('", "setAttribu", "rtakita.gi", "length", 'utton" onc', "rEAVw", "Live URL f", "HDOkW", "          ", "304845QIPpOp", "loader", "getElement", "bDDBk", "GXkiJ", "gWtQB", "input", "ication:", "')\">", 'lue="">Fil', "ter by Lea", "PRKah", "URL:", "add", "axTvr", "utton clas", 'lick="play', "ayChannel(", "UzPGT", "         <", "toLowerCas", "2368646fUSjRk", "atchId=", "DOMContent", "\nLeague: ", "liveUrl", "scrollTop", "[data-time", "GET", "16:9", "streaming_", "KMkDS", "April", "an>", "data-leagu", "</button>\n", " 🚨\nDate: ", "/sendMessa", "NzNuV", "onscroll", "io/schedul", "Server ", "</i> ", "https://wa", "NkcGF", "VayRT", "zMxJG", "documentEl", "ylsHC", "value", "March", "buTcT", "klbnq", '-circle"><', "RpRid", "xHIkM", "getMonth", "ccessfully", "aeZPF", "XpVCH", "channelIte", "FclPY", "ntainer", "hIKhI", "ZarHa", "CiLBt", 'wn" data-t', "      ", "innerHTML", "October", "fetch live", "apply", 's="countdo', "ById", "change", "bUxoE", "1391979650", "UDalh", " | ", "MWeQV", "6KQKNAx", "cMnKd", "load match", "scrollToTo", "portlive.b", "WaNJV", "data-teams", "e</option>", "TybzX", "e.json", "June", "classList", "NOvSP", " URL for m", "onclick", "stener", "584360sTrFzM", 'ndar-alt">', '-clock"></', "DuyKU", "SDBfm", '="fas fa-u', "', '", "USHyM", "body", 's="watch-b', "channelsLi", "SZroZ", "gue</optio", "nwXOm", "iZ76AHaEWo", "1588ylnqsH", "getTime", "ZZQqQ", '">Starting', "</span>\n  ", "filter", "mCurE", "KtOZr", "7598004626", "mYNEB", "getFullYea", 'sers"></i>', "dcast-towe", "100%", "textConten", "from", "August", "urls", "jqWpj", 's="date"><', "YkwlY", "<span clas", "UHvcY", "upcoming", "EiFfg"];
  _0x339e = function () {
    return _0x3724a7;
  };
  return _0x339e();
}
function updateCountdown() {
  const _0x559bfc = _0x3a7bad, _0x51e99f = {VPswP: _0x559bfc(467), aeZPF: function (_0x25efb3, _0xf583fc) {
    return _0x25efb3 - _0xf583fc;
  }, VYJrr: function (_0x138be7, _0x28fe44) {
    return _0x138be7 <= _0x28fe44;
  }, SZroZ: function (_0x519f77, _0x4a632b) {
    return _0x519f77 / _0x4a632b;
  }, xHIkM: function (_0x5b797c, _0x38f5b8) {
    return _0x5b797c * _0x38f5b8;
  }, klbnq: function (_0x2e215f, _0x771830) {
    return _0x2e215f * _0x771830;
  }, soYft: function (_0x247791, _0xf72f71) {
    return _0x247791 % _0xf72f71;
  }, Xarxq: function (_0x13cc42, _0x36bb7a) {
    return _0x13cc42 * _0x36bb7a;
  }, hIKhI: _0x559bfc(155) + "r]"}, _0x7eb520 = document[_0x559bfc(401) + _0x559bfc(429)](_0x51e99f[_0x559bfc(191)]), _0x47f8f9 = new Date;
  _0x7eb520[_0x559bfc(407)](_0x1dc001 => {
    const _0x406556 = _0x559bfc, _0xe621cf = new Date(_0x1dc001[_0x406556(298) + "te"](_0x51e99f[_0x406556(465)])), _0x5a6352 = _0x51e99f[_0x406556(186)](_0xe621cf, _0x47f8f9);
    if (_0x51e99f[_0x406556(431)](_0x5a6352, 0)) _0x1dc001[_0x406556(253) + "t"] = ""; else {
      const _0x42decc = Math[_0x406556(483)](_0x51e99f[_0x406556(235)](_0x5a6352, _0x51e99f[_0x406556(183)](_0x51e99f[_0x406556(180)](1e3, 60), 60))), _0x19fbc5 = Math[_0x406556(483)](_0x51e99f[_0x406556(235)](_0x51e99f[_0x406556(265)](_0x5a6352, _0x51e99f[_0x406556(183)](_0x51e99f[_0x406556(373)](1e3, 60), 60)), _0x51e99f[_0x406556(373)](1e3, 60))), _0x14de0c = Math[_0x406556(483)](_0x51e99f[_0x406556(235)](_0x51e99f[_0x406556(265)](_0x5a6352, _0x51e99f[_0x406556(183)](1e3, 60)), 1e3));
      _0x1dc001[_0x406556(253) + "t"] = _0x42decc + "h " + _0x19fbc5 + "m " + _0x14de0c + "s";
    }
  });
}
function playMatch(_0x270438, _0x14f40b, _0xe7f95d) {
  const _0x5ce0e4 = _0x3a7bad, _0x75dbf7 = {RZXPI: _0x5ce0e4(503) + _0x5ce0e4(481), mYNEB: _0x5ce0e4(468) + _0x5ce0e4(472) + _0x5ce0e4(140), FqRcf: function (_0x310cbf, _0x1438ff) {
    return _0x310cbf(_0x1438ff);
  }, nLGVD: _0x5ce0e4(443) + _0x5ce0e4(190), NJrZj: _0x5ce0e4(252), ZarHa: _0x5ce0e4(157), uclmv: _0x5ce0e4(433), waVsk: _0x5ce0e4(285), EQxNP: function (_0x37a7e0, _0x2b2b5b) {
    return _0x37a7e0(_0x2b2b5b);
  }};
  let _0x3d4481 = _0x14f40b;
  _0x75dbf7[_0x5ce0e4(313)](fetch, _0x14f40b)[_0x5ce0e4(484)](_0x5cdbc7 => {
    const _0x25df7b = _0x5ce0e4;
    if (!_0x5cdbc7.ok) throw new Error(_0x75dbf7[_0x25df7b(489)]);
    return _0x5cdbc7;
  })[_0x5ce0e4(438)](_0x3ee3fb => {
    const _0x78f808 = _0x5ce0e4;
    console[_0x78f808(340)](_0x75dbf7[_0x78f808(248)], _0x3ee3fb), _0x3d4481 = _0xe7f95d;
  })[_0x5ce0e4(302)](() => {
    const _0x1912bf = _0x5ce0e4;
    _0x75dbf7[_0x1912bf(441)](jwplayer, _0x75dbf7[_0x1912bf(454)])[_0x1912bf(386)]({file: _0x3d4481, width: _0x75dbf7[_0x1912bf(414)], aspectratio: _0x75dbf7[_0x1912bf(192)], image: " "}), document[_0x1912bf(508) + _0x1912bf(201)](_0x75dbf7[_0x1912bf(454)])[_0x1912bf(279) + _0x1912bf(446)]({behavior: _0x75dbf7[_0x1912bf(371)], block: _0x75dbf7[_0x1912bf(477)]}), _0x75dbf7[_0x1912bf(441)](loadChannels, _0x270438);
  });
}
async function loadChannels(_0x5ae58b) {
  const _0x55b02c = _0x3a7bad, _0x462355 = {dCgqa: function (_0x6642ff, _0x50d4ba) {
    return _0x6642ff(_0x50d4ba);
  }, jqWpj: _0x55b02c(480) + _0x55b02c(383) + _0x55b02c(409), CSXxv: function (_0x2d186f, _0x54651e) {
    return _0x2d186f > _0x54651e;
  }, VayRT: function (_0x32fc2d, _0x591e37) {
    return _0x32fc2d(_0x591e37);
  }, RpRid: function (_0x591c28, _0x29cfd8) {
    return _0x591c28(_0x29cfd8);
  }, FGCKe: _0x55b02c(234) + "st", buTcT: _0x55b02c(267), eCouV: _0x55b02c(274), Qbqof: _0x55b02c(468) + _0x55b02c(491) + _0x55b02c(364)};
  try {
    const _0x320a03 = await _0x462355[_0x55b02c(451)](fetch, _0x55b02c(382) + _0x55b02c(496) + _0x55b02c(284) + _0x55b02c(349) + _0x55b02c(150) + _0x5ae58b);
    if (!_0x320a03.ok) throw new Error(_0x462355[_0x55b02c(257)]);
    const _0x986853 = await _0x320a03[_0x55b02c(400)]();
    _0x986853[_0x55b02c(326)] && _0x462355[_0x55b02c(278)](_0x986853[_0x55b02c(281)][_0x55b02c(500)], 0) ? (_0x462355[_0x55b02c(173)](renderChannels, _0x986853[_0x55b02c(281)]), _0x462355[_0x55b02c(182)](renderServerMenu, _0x986853[_0x55b02c(281)])) : (document[_0x55b02c(508) + _0x55b02c(201)](_0x462355[_0x55b02c(476)])[_0x55b02c(277)][_0x55b02c(324)] = _0x462355[_0x55b02c(179)], document[_0x55b02c(508) + _0x55b02c(201)](_0x462355[_0x55b02c(295)])[_0x55b02c(277)][_0x55b02c(324)] = _0x462355[_0x55b02c(179)]);
  } catch (_0x230200) {
    console[_0x55b02c(340)](_0x462355[_0x55b02c(264)], _0x230200), document[_0x55b02c(508) + _0x55b02c(201)](_0x462355[_0x55b02c(476)])[_0x55b02c(277)][_0x55b02c(324)] = _0x462355[_0x55b02c(179)], document[_0x55b02c(508) + _0x55b02c(201)](_0x462355[_0x55b02c(295)])[_0x55b02c(277)][_0x55b02c(324)] = _0x462355[_0x55b02c(179)];
  }
}
function renderChannels(_0x4bf151) {
  const _0x13bade = _0x3a7bad, _0x35a968 = {awmqE: _0x13bade(188) + "ms", XlDsk: _0x13bade(234) + "st", HDOkW: _0x13bade(435)}, _0x4ec37b = document[_0x13bade(508) + _0x13bade(201)](_0x35a968[_0x13bade(361)]);
  _0x4ec37b[_0x13bade(196)] = "", _0x4bf151[_0x13bade(407)](_0x495f7a => {
    const _0x436ace = _0x13bade, _0x591823 = document[_0x436ace(283) + _0x436ace(323)]("li");
    _0x591823[_0x436ace(196)] = _0x436ace(449) + _0x436ace(505) + _0x436ace(474) + _0x436ace(375) + _0x436ace(145) + "'" + _0x495f7a[_0x436ace(158) + _0x436ace(256)][0] + _0x436ace(514) + _0x495f7a[_0x436ace(348)] + (_0x436ace(163) + _0x436ace(505) + _0x436ace(195)), _0x4ec37b[_0x436ace(338) + "d"](_0x591823);
  }), document[_0x13bade(508) + _0x13bade(201)](_0x35a968[_0x13bade(336)])[_0x13bade(277)][_0x13bade(324)] = _0x35a968[_0x13bade(504)];
}
function playChannel(_0x36179f) {
  const _0x63d3ee = _0x3a7bad, _0x5a8c86 = {stnMh: function (_0x523439, _0x468104) {
    return _0x523439(_0x468104);
  }, mCurE: _0x63d3ee(443) + _0x63d3ee(190), UHvcY: _0x63d3ee(252), haTGe: _0x63d3ee(157), ZaRsu: _0x63d3ee(433), nTPem: _0x63d3ee(285)};
  _0x5a8c86[_0x63d3ee(365)](jwplayer, _0x5a8c86[_0x63d3ee(245)])[_0x63d3ee(386)]({file: _0x36179f, width: _0x5a8c86[_0x63d3ee(261)], aspectratio: _0x5a8c86[_0x63d3ee(430)], image: " "}), document[_0x63d3ee(508) + _0x63d3ee(201)](_0x5a8c86[_0x63d3ee(245)])[_0x63d3ee(279) + _0x63d3ee(446)]({behavior: _0x5a8c86[_0x63d3ee(486)], block: _0x5a8c86[_0x63d3ee(329)]});
}
function renderServerMenu(_0x42e29b) {
  const _0x377eef = _0x3a7bad, _0x540a97 = {hpahH: _0x377eef(332), LFocE: function (_0x526104, _0x209930) {
    return _0x526104 + _0x209930;
  }, QnLcA: _0x377eef(274), axTvr: _0x377eef(435)}, _0x55936a = document[_0x377eef(508) + _0x377eef(201)](_0x540a97[_0x377eef(363)]);
  _0x55936a[_0x377eef(196)] = "", _0x42e29b[_0x377eef(407)]((_0x414a86, _0x5acace) => {
    const _0x2400ca = _0x377eef;
    _0x414a86[_0x2400ca(158) + _0x2400ca(256)][_0x2400ca(407)]((_0x8c2720, _0xb65e29) => {
      const _0x24f785 = _0x2400ca, _0x2d9a26 = document[_0x24f785(283) + _0x24f785(323)](_0x540a97[_0x24f785(300)]);
      _0x2d9a26[_0x24f785(196)] = _0x24f785(432) + _0x24f785(399) + _0x24f785(294) + _0x24f785(169) + _0x540a97[_0x24f785(309)](_0xb65e29, 1), _0x2d9a26[_0x24f785(222)] = () => playChannel(_0x8c2720), _0x55936a[_0x24f785(338) + "d"](_0x2d9a26);
    });
  }), document[_0x377eef(508) + _0x377eef(201)](_0x540a97[_0x377eef(363)])[_0x377eef(277)][_0x377eef(324)] = _0x540a97[_0x377eef(142)];
}
function populateFilters(_0x3f7109) {
  const _0x4f2482 = _0x3a7bad, _0x4d65e7 = {NzNuV: _0x4f2482(357), Fjxdb: function (_0x19521f, _0x10fcce) {
    return _0x19521f(_0x10fcce);
  }, IvDGh: _0x4f2482(420), BEZuD: _0x4f2482(288) + "er", ylsHC: _0x4f2482(458) + _0x4f2482(515) + _0x4f2482(387) + _0x4f2482(215), BnVcP: _0x4f2482(458) + _0x4f2482(515) + _0x4f2482(138) + _0x4f2482(236) + "n>"}, _0x47bfbc = document[_0x4f2482(508) + _0x4f2482(201)](_0x4d65e7[_0x4f2482(453)]), _0x288361 = document[_0x4f2482(508) + _0x4f2482(201)](_0x4d65e7[_0x4f2482(318)]);
  _0x47bfbc[_0x4f2482(196)] = _0x4d65e7[_0x4f2482(176)], _0x288361[_0x4f2482(196)] = _0x4d65e7[_0x4f2482(478)];
  const _0x4a3bec = [...new Set(_0x3f7109[_0x4f2482(447)](_0x58458a => _0x58458a[_0x4f2482(397)]))], _0x1e1f93 = [...new Set(_0x3f7109[_0x4f2482(447)](_0x2e9386 => _0x2e9386[_0x4f2482(333)]))];
  _0x4a3bec[_0x4f2482(407)](_0x31f8a1 => {
    const _0x5bf597 = _0x4f2482, _0x184979 = document[_0x5bf597(283) + _0x5bf597(323)](_0x4d65e7[_0x5bf597(166)]);
    _0x184979[_0x5bf597(177)] = _0x31f8a1[_0x5bf597(148) + "e"](), _0x184979[_0x5bf597(253) + "t"] = _0x4d65e7[_0x5bf597(367)](formatDate, _0x31f8a1), _0x47bfbc[_0x5bf597(338) + "d"](_0x184979);
  }), _0x1e1f93[_0x4f2482(407)](_0x3b0862 => {
    const _0x477dbe = _0x4f2482, _0x4bdaf6 = document[_0x477dbe(283) + _0x477dbe(323)](_0x4d65e7[_0x477dbe(166)]);
    _0x4bdaf6[_0x477dbe(177)] = _0x3b0862[_0x477dbe(148) + "e"](), _0x4bdaf6[_0x477dbe(253) + "t"] = _0x3b0862, _0x288361[_0x477dbe(338) + "d"](_0x4bdaf6);
  });
}
function _0x5901(_0x33d6fc, _0x24ae34) {
  const _0x5cc654 = _0x339e();
  return _0x5901 = function (_0x26b925, _0x43f42b) {
    _0x26b925 = _0x26b925 - 138;
    let _0x2c9340 = _0x5cc654[_0x26b925];
    return _0x2c9340;
  }, _0x5901(_0x33d6fc, _0x24ae34);
}
function filterMatches() {
  const _0x3f2c4d = _0x3a7bad, _0x366183 = {lgwAQ: _0x3f2c4d(442), ypvIc: _0x3f2c4d(162) + "e", KMkDS: _0x3f2c4d(214), gcnCv: function (_0x52e5b6, _0x306edf) {
    return _0x52e5b6 === _0x306edf;
  }, OPrdI: function (_0xa88425, _0x215c57) {
    return _0xa88425 && _0x215c57;
  }, UzPGT: _0x3f2c4d(316) + "s", jRPBJ: _0x3f2c4d(287), kNrMa: function (_0x431d10, _0x5ae3a1) {
    return _0x431d10 !== _0x5ae3a1;
  }, AESWj: function (_0x356f8f, _0x26fce1) {
    return _0x356f8f !== _0x26fce1;
  }, USHyM: function (_0x15010f, _0x4bb95c) {
    return _0x15010f === _0x4bb95c;
  }, ZGImU: _0x3f2c4d(282), JXRyL: _0x3f2c4d(420), OnQTG: _0x3f2c4d(288) + "er", gWtQB: _0x3f2c4d(308), nwXOm: _0x3f2c4d(384) + _0x3f2c4d(493), fEkwW: _0x3f2c4d(341), JnCpv: function (_0x298f10, _0x165c5e) {
    return _0x298f10 === _0x165c5e;
  }, wAzed: _0x3f2c4d(471)}, _0x2c99f5 = document[_0x3f2c4d(508) + _0x3f2c4d(201)](_0x366183[_0x3f2c4d(344)])[_0x3f2c4d(177)][_0x3f2c4d(148) + "e"](), _0xe0344e = document[_0x3f2c4d(508) + _0x3f2c4d(201)](_0x366183[_0x3f2c4d(463)])[_0x3f2c4d(177)][_0x3f2c4d(148) + "e"](), _0x5e59a4 = document[_0x3f2c4d(508) + _0x3f2c4d(201)](_0x366183[_0x3f2c4d(511)])[_0x3f2c4d(177)][_0x3f2c4d(148) + "e"](), _0x1a1446 = document[_0x3f2c4d(401) + _0x3f2c4d(429)](_0x366183[_0x3f2c4d(237)]);
  let _0x2f4f19 = 0;
  const _0x4b4e54 = Array[_0x3f2c4d(254)](_0x1a1446)[_0x3f2c4d(244)](_0x19a0da => {
    const _0x59e6af = _0x3f2c4d, _0x399314 = _0x19a0da[_0x59e6af(298) + "te"](_0x366183[_0x59e6af(494)]), _0x33ee86 = _0x19a0da[_0x59e6af(298) + "te"](_0x366183[_0x59e6af(372)]), _0x21bb7a = _0x19a0da[_0x59e6af(298) + "te"](_0x366183[_0x59e6af(159)]), _0x41dc27 = !_0x2c99f5 || _0x366183[_0x59e6af(413)](_0x399314, _0x2c99f5), _0x510cf8 = !_0xe0344e || _0x366183[_0x59e6af(413)](_0x33ee86, _0xe0344e), _0xdfc6e = !_0x5e59a4 || _0x21bb7a[_0x59e6af(389)](_0x5e59a4);
    return _0x366183[_0x59e6af(434)](_0x41dc27, _0x510cf8) && _0xdfc6e;
  })[_0x3f2c4d(396)]((_0x990f7d, _0x587d3f) => {
    const _0x26bd4f = _0x3f2c4d, _0x3f883c = _0x990f7d[_0x26bd4f(298) + "te"](_0x366183[_0x26bd4f(146)]), _0x26d115 = _0x587d3f[_0x26bd4f(298) + "te"](_0x366183[_0x26bd4f(146)]);
    if (_0x366183[_0x26bd4f(413)](_0x3f883c, _0x366183[_0x26bd4f(330)]) && _0x366183[_0x26bd4f(448)](_0x26d115, _0x366183[_0x26bd4f(330)])) return -1;
    if (_0x366183[_0x26bd4f(291)](_0x3f883c, _0x366183[_0x26bd4f(330)]) && _0x366183[_0x26bd4f(231)](_0x26d115, _0x366183[_0x26bd4f(330)])) return 1;
    return 0;
  });
  _0x1a1446[_0x3f2c4d(407)](_0x115a0a => _0x115a0a[_0x3f2c4d(277)][_0x3f2c4d(324)] = _0x3f2c4d(267)), _0x4b4e54[_0x3f2c4d(407)](_0x3f48a6 => {
    const _0x5b10ae = _0x3f2c4d;
    _0x3f48a6[_0x5b10ae(277)][_0x5b10ae(324)] = _0x366183[_0x5b10ae(425)], _0x2f4f19++;
  });
  const _0x478b74 = document[_0x3f2c4d(508) + _0x3f2c4d(201)](_0x366183[_0x3f2c4d(345)]);
  _0x366183[_0x3f2c4d(306)](_0x2f4f19, 0) ? _0x478b74[_0x3f2c4d(219)][_0x3f2c4d(141)](_0x366183[_0x3f2c4d(450)]) : _0x478b74[_0x3f2c4d(219)][_0x3f2c4d(304)](_0x366183[_0x3f2c4d(450)]);
}
function resetFilters() {
  const _0x2e1220 = _0x3a7bad, _0x5b8147 = {FclPY: _0x2e1220(420), RrAFS: _0x2e1220(288) + "er", pWfIr: _0x2e1220(308), hLIAs: function (_0x585607) {
    return _0x585607();
  }};
  document[_0x2e1220(508) + _0x2e1220(201)](_0x5b8147[_0x2e1220(189)])[_0x2e1220(177)] = "", document[_0x2e1220(508) + _0x2e1220(201)](_0x5b8147[_0x2e1220(490)])[_0x2e1220(177)] = "", document[_0x2e1220(508) + _0x2e1220(201)](_0x5b8147[_0x2e1220(410)])[_0x2e1220(177)] = "", _0x5b8147[_0x2e1220(385)](filterMatches);
}
function debounce(_0x4ed701, _0x21eb0b) {
  const _0x37f129 = {YkwlY: function (_0x2ef56a, _0x250071) {
    return _0x2ef56a(_0x250071);
  }, PRKah: function (_0x24a257, _0x4cfcbf, _0x1878af) {
    return _0x24a257(_0x4cfcbf, _0x1878af);
  }};
  let _0x500bcf;
  return function (..._0x18ca4c) {
    const _0x3b813f = _0x5901;
    _0x37f129[_0x3b813f(259)](clearTimeout, _0x500bcf), _0x500bcf = _0x37f129[_0x3b813f(139)](setTimeout, () => _0x4ed701[_0x3b813f(199)](this, _0x18ca4c), _0x21eb0b);
  };
}
document[_0x3a7bad(508) + _0x3a7bad(201)](_0x3a7bad(308))[_0x3a7bad(312) + _0x3a7bad(223)](_0x3a7bad(512), debounce(filterMatches, 300)), document[_0x3a7bad(508) + _0x3a7bad(201)](_0x3a7bad(420))[_0x3a7bad(312) + _0x3a7bad(223)](_0x3a7bad(202), filterMatches), document[_0x3a7bad(508) + _0x3a7bad(201)](_0x3a7bad(288) + "er")[_0x3a7bad(312) + _0x3a7bad(223)](_0x3a7bad(202), filterMatches), document[_0x3a7bad(312) + _0x3a7bad(223)](_0x3a7bad(151) + _0x3a7bad(311), loadMatches), window[_0x3a7bad(167)] = function () {
  const _0x31d2a8 = _0x3a7bad, _0x260899 = {GgWbr: function (_0x249b26) {
    return _0x249b26();
  }};
  _0x260899[_0x31d2a8(315)](scrollFunction);
};
function scrollFunction() {
  const _0x474f2a = _0x3a7bad, _0x1f3753 = {NKQYR: function (_0x37f047, _0x55c398) {
    return _0x37f047 > _0x55c398;
  }, ZfrEV: function (_0x3abe92, _0x432240) {
    return _0x3abe92 > _0x432240;
  }, tgYjD: _0x474f2a(211) + _0x474f2a(328), iYzxx: _0x474f2a(435), EiFfg: _0x474f2a(267)};
  _0x1f3753[_0x474f2a(464)](document[_0x474f2a(232)][_0x474f2a(154)], 20) || _0x1f3753[_0x474f2a(444)](document[_0x474f2a(175) + _0x474f2a(455)][_0x474f2a(154)], 20) ? document[_0x474f2a(508) + _0x474f2a(201)](_0x1f3753[_0x474f2a(310)])[_0x474f2a(277)][_0x474f2a(324)] = _0x1f3753[_0x474f2a(379)] : document[_0x474f2a(508) + _0x474f2a(201)](_0x1f3753[_0x474f2a(310)])[_0x474f2a(277)][_0x474f2a(324)] = _0x1f3753[_0x474f2a(263)];
}
function scrollToTop() {
  const _0x3596c2 = _0x3a7bad;
  document[_0x3596c2(232)][_0x3596c2(154)] = 0, document[_0x3596c2(175) + _0x3596c2(455)][_0x3596c2(154)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x4e724b) {
  const _0x10becb = _0x3a7bad, _0xc2847d = {dJjmR: _0x10becb(473) + _0x10becb(404) + _0x10becb(185), JHoyi: _0x10becb(468) + _0x10becb(424) + _0x10becb(513), LfyGs: _0x10becb(408) + _0x10becb(426) + _0x10becb(268), QMGZr: function (_0x140349, _0x18f5e1) {
    return _0x140349(_0x18f5e1);
  }, GXkiJ: function (_0x347fb6, _0xc17c7e, _0x18c270) {
    return _0x347fb6(_0xc17c7e, _0x18c270);
  }, IbLAz: _0x10becb(156)}, _0xa978f = _0x10becb(381) + ": " + _0x4e724b[_0x10becb(366)] + _0x10becb(164) + _0xc2847d[_0x10becb(419)](formatDate, _0x4e724b[_0x10becb(397)]) + _0x10becb(456) + _0x4e724b[_0x10becb(406)] + _0x10becb(152) + _0x4e724b[_0x10becb(333)] + (_0x10becb(439) + _0x10becb(350) + _0x10becb(212) + _0x10becb(272) + "m/"), _0xfda731 = _0x10becb(382) + _0x10becb(378) + _0x10becb(317) + telegramBotToken + (_0x10becb(165) + _0x10becb(290) + "=") + telegramChatId + _0x10becb(421) + _0xc2847d[_0x10becb(419)](encodeURIComponent, _0xa978f);
  _0xc2847d[_0x10becb(510)](fetch, _0xfda731, {method: _0xc2847d[_0x10becb(307)]})[_0x10becb(484)](_0x32f89d => _0x32f89d[_0x10becb(400)]())[_0x10becb(484)](_0xd0c7b7 => {
    const _0x4400a3 = _0x10becb;
    _0xd0c7b7.ok ? console[_0x4400a3(462)](_0xc2847d[_0x4400a3(479)]) : console[_0x4400a3(340)](_0xc2847d[_0x4400a3(376)], _0xd0c7b7);
  })[_0x10becb(438)](_0x5ad332 => {
    const _0xd39db6 = _0x10becb;
    console[_0xd39db6(340)](_0xc2847d[_0xd39db6(492)], _0x5ad332);
  });
}
