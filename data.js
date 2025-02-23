const _0x4c145e = _0x1014;
(function (_0x59f7ea, _0x593831) {
  const _0x10510b = _0x1014, _0x310e8e = _0x59f7ea();
  while (true) {
    try {
      const _0x1a978f = -parseInt(_0x10510b(507)) / 1 + -parseInt(_0x10510b(553)) / 2 + parseInt(_0x10510b(545)) / 3 + parseInt(_0x10510b(512)) / 4 * (parseInt(_0x10510b(473)) / 5) + -parseInt(_0x10510b(209)) / 6 + parseInt(_0x10510b(491)) / 7 * (-parseInt(_0x10510b(395)) / 8) + parseInt(_0x10510b(322)) / 9 * (parseInt(_0x10510b(268)) / 10);
      if (_0x1a978f === _0x593831) break; else _0x310e8e.push(_0x310e8e.shift());
    } catch (_0xc4ad43) {
      _0x310e8e.push(_0x310e8e.shift());
    }
  }
}(_0x447c, 778820));
const telegramBotToken = _0x4c145e(412) + _0x4c145e(436) + _0x4c145e(517) + _0x4c145e(309) + _0x4c145e(558), telegramChatId = _0x4c145e(251), sentNotifications = new Set;
function formatDate(_0x24d9bc) {
  const _0x296013 = _0x4c145e, _0x3f06f3 = {aFBVZ: _0x296013(531), UPEWD: _0x296013(453), UsyyQ: _0x296013(273), STamQ: _0x296013(422), neYVv: _0x296013(457), UCppy: _0x296013(492), oJfay: _0x296013(433), wXgOF: _0x296013(526), OwPDH: _0x296013(323), UQzJb: _0x296013(572), dOSOq: _0x296013(224), TxhTK: _0x296013(511)}, _0x11d6e1 = [_0x3f06f3[_0x296013(508)], _0x3f06f3[_0x296013(295)], _0x3f06f3[_0x296013(498)], _0x3f06f3[_0x296013(353)], _0x3f06f3[_0x296013(417)], _0x3f06f3[_0x296013(370)], _0x3f06f3[_0x296013(348)], _0x3f06f3[_0x296013(262)], _0x3f06f3[_0x296013(495)], _0x3f06f3[_0x296013(284)], _0x3f06f3[_0x296013(522)], _0x3f06f3[_0x296013(257)]], _0x43bc3d = new Date(_0x24d9bc), _0x56b7a1 = _0x43bc3d[_0x296013(197)](), _0x45944f = _0x11d6e1[_0x43bc3d[_0x296013(421)]()], _0x31d540 = _0x43bc3d[_0x296013(550) + "r"]();
  return _0x56b7a1 + " " + _0x45944f + " " + _0x31d540;
}
async function loadMatches() {
  const _0x3a253 = _0x4c145e, _0x3acc7a = {Nxwup: _0x3a253(556), vLcwr: _0x3a253(506), vKcum: function (_0x1b613c) {
    return _0x1b613c();
  }, BnXik: function (_0x2a1294, _0x26a5aa) {
    return _0x2a1294(_0x26a5aa);
  }, xDLiW: function (_0x41d69a, _0x20f2ee, _0x4e064c) {
    return _0x41d69a(_0x20f2ee, _0x4e064c);
  }, xCNAh: _0x3a253(427) + _0x3a253(407) + _0x3a253(566), WkPvP: _0x3a253(247), cWlGj: _0x3a253(182), DniCR: _0x3a253(325)};
  try {
    document[_0x3a253(204) + _0x3a253(189)](_0x3acc7a[_0x3a253(214)])[_0x3a253(461)][_0x3a253(416)] = _0x3acc7a[_0x3a253(364)];
    const _0x2ae444 = await _0x3acc7a[_0x3a253(328)](fetchMatches);
    _0x3acc7a[_0x3a253(485)](renderMatches, _0x2ae444), _0x3acc7a[_0x3a253(485)](populateFilters, _0x2ae444), _0x3acc7a[_0x3a253(328)](filterMatches), _0x3acc7a[_0x3a253(328)](updateCountdown), _0x3acc7a[_0x3a253(538)](setInterval, updateCountdown, 1e3);
  } catch (_0x2d407a) {
    console[_0x3a253(237)](_0x3acc7a[_0x3a253(523)], _0x2d407a), document[_0x3a253(204) + _0x3a253(189)](_0x3acc7a[_0x3a253(488)])[_0x3a253(400)][_0x3a253(454)](_0x3acc7a[_0x3a253(398)]);
  } finally {
    document[_0x3a253(204) + _0x3a253(189)](_0x3acc7a[_0x3a253(214)])[_0x3a253(461)][_0x3a253(416)] = _0x3acc7a[_0x3a253(255)];
  }
}
async function fetchMatches() {
  const _0x19ef29 = _0x4c145e, _0x3ec462 = {mXxhL: function (_0x2ef9ff, _0x566831) {
    return _0x2ef9ff(_0x566831);
  }, Eycjo: _0x19ef29(452) + _0x19ef29(460) + _0x19ef29(483) + _0x19ef29(367) + _0x19ef29(418) + _0x19ef29(505), npoIx: _0x19ef29(474) + _0x19ef29(431) + _0x19ef29(573), OlaMd: function (_0x29e4ec, _0x4e180b) {
    return _0x29e4ec(_0x4e180b);
  }}, _0x5df3a9 = await _0x3ec462[_0x19ef29(332)](fetch, _0x3ec462[_0x19ef29(245)]);
  if (!_0x5df3a9.ok) throw new Error(_0x3ec462[_0x19ef29(302)]);
  const _0x2a6ca0 = await _0x5df3a9[_0x19ef29(271)](), _0x5c8837 = await _0x3ec462[_0x19ef29(340)](fetchLiveUrls, _0x2a6ca0);
  return _0x2a6ca0[_0x19ef29(318)](_0x3f59d5 => {
    const _0xe65027 = _0x19ef29;
    _0x3f59d5[_0xe65027(451)] = _0x5c8837[_0x3f59d5[_0xe65027(304)]] || _0x3f59d5[_0xe65027(281)];
  }), _0x2a6ca0;
}
async function fetchLiveUrls(_0xc3b2e9) {
  const _0x144cbd = _0x4c145e, _0x42b8a7 = {ZUBSp: function (_0x142a0d, _0x477516) {
    return _0x142a0d(_0x477516);
  }, mYEbM: function (_0x544fac, _0x307130) {
    return _0x544fac > _0x307130;
  }, uzCYs: function (_0x1f8331, _0x19ca9c) {
    return _0x1f8331(_0x19ca9c);
  }, MFKye: function (_0x3f335b, _0x1f745f) {
    return _0x3f335b === _0x1f745f;
  }, rIIof: _0x144cbd(344)}, _0x1ebc11 = _0xc3b2e9[_0x144cbd(256)](_0xbe277b => _0xbe277b[_0x144cbd(304)]), _0x389c1f = {}, _0x567d1a = _0x1ebc11[_0x144cbd(256)](async _0x2ef5b1 => {
    const _0x17d1a8 = _0x144cbd;
    try {
      const _0x4167bb = await _0x42b8a7[_0x17d1a8(184)](fetch, _0x17d1a8(339) + _0x17d1a8(314) + _0x17d1a8(564) + _0x17d1a8(560) + _0x17d1a8(497) + _0x2ef5b1);
      if (_0x4167bb.ok) {
        const _0x4e9366 = await _0x4167bb[_0x17d1a8(271)]();
        _0x4e9366[_0x17d1a8(390)] && _0x42b8a7[_0x17d1a8(352)](_0x4e9366[_0x17d1a8(291)][_0x17d1a8(321)], 0) && (_0x389c1f[_0x2ef5b1] = _0x4e9366[_0x17d1a8(291)][0][_0x17d1a8(345) + _0x17d1a8(537)][0]);
      }
    } catch (_0x3aa75b) {
      console[_0x17d1a8(237)](_0x17d1a8(427) + _0x17d1a8(530) + _0x17d1a8(569) + _0x17d1a8(311) + _0x2ef5b1 + ":", _0x3aa75b);
    }
    try {
      const _0x46cd0d = await _0x42b8a7[_0x17d1a8(467)](fetch, _0x17d1a8(464) + _0x17d1a8(270) + _0x17d1a8(358) + _0x17d1a8(444) + _0x17d1a8(568) + _0x17d1a8(408) + _0x2ef5b1);
      if (_0x46cd0d.ok) {
        const _0x342000 = await _0x46cd0d[_0x17d1a8(271)]();
        _0x42b8a7[_0x17d1a8(242)](_0x342000[_0x17d1a8(382)], _0x42b8a7[_0x17d1a8(275)]) && _0x342000[_0x17d1a8(368)][_0x17d1a8(291)][_0x17d1a8(410)][_0x17d1a8(310)] && (_0x389c1f[_0x2ef5b1] = _0x342000[_0x17d1a8(368)][_0x17d1a8(291)][_0x17d1a8(410)][_0x17d1a8(310)]);
      }
    } catch (_0x5b2d4a) {
      console[_0x17d1a8(237)](_0x17d1a8(427) + _0x17d1a8(220) + _0x17d1a8(239) + _0x17d1a8(311) + _0x2ef5b1 + ":", _0x5b2d4a);
    }
  });
  return await Promise[_0x144cbd(230)](_0x567d1a), _0x389c1f;
}
function renderMatches(_0x2acb99) {
  const _0x35477c = _0x4c145e, _0x3aca90 = {iosxm: function (_0x392d3b, _0x30c866) {
    return _0x392d3b >= _0x30c866;
  }, ZrFNN: function (_0x2e8f6a, _0x1bc4c4) {
    return _0x2e8f6a <= _0x1bc4c4;
  }, PPTpA: function (_0xf1a588, _0x3ac7a1) {
    return _0xf1a588 + _0x3ac7a1;
  }, wRFlu: function (_0x53e973, _0x542ab7) {
    return _0x53e973 * _0x542ab7;
  }, QzoYk: function (_0x1bcc94, _0x419f2f) {
    return _0x1bcc94 * _0x419f2f;
  }, XblOY: function (_0x598e82, _0x407457) {
    return _0x598e82 >= _0x407457;
  }, DgYVp: function (_0x44b786, _0x51860c) {
    return _0x44b786 <= _0x51860c;
  }, npyDF: function (_0x3d192c, _0x288a4f) {
    return _0x3d192c * _0x288a4f;
  }, Vwhoe: function (_0x15135, _0x1ff420) {
    return _0x15135 * _0x1ff420;
  }, SJlJV: function (_0x40cfa2, _0x5d571c) {
    return _0x40cfa2 * _0x5d571c;
  }, xHHuN: function (_0x43cebd, _0x44c937) {
    return _0x43cebd && _0x44c937;
  }, HdodV: _0x35477c(316), UBGrY: _0x35477c(195) + _0x35477c(391), eZhpI: _0x35477c(448), lcYxN: _0x35477c(471) + "e", gsnlP: _0x35477c(192), UxGYp: _0x35477c(551) + "s", FferH: _0x35477c(191), cRUuk: _0x35477c(244), Mgpje: function (_0x5771d8, _0x4cf2c9) {
    return _0x5771d8(_0x4cf2c9);
  }, hAlaw: _0x35477c(297) + _0x35477c(229) + _0x35477c(263) + _0x35477c(405) + _0x35477c(333) + _0x35477c(259) + _0x35477c(527) + _0x35477c(210), BLteQ: function (_0x44ef20, _0x509678) {
    return _0x44ef20(_0x509678);
  }, UhInD: _0x35477c(238) + _0x35477c(253)}, _0x2f1bff = document[_0x35477c(204) + _0x35477c(189)](_0x3aca90[_0x35477c(260)]);
  _0x2f1bff[_0x35477c(383)] = "", _0x2acb99[_0x35477c(315)]((_0x3c688f, _0x240510) => {
    const _0x5918f2 = _0x35477c, _0x464a24 = new Date, _0x3d7a1e = new Date(_0x3c688f[_0x5918f2(468)] + "T" + _0x3c688f[_0x5918f2(536)]), _0x30c088 = new Date(_0x240510[_0x5918f2(468)] + "T" + _0x240510[_0x5918f2(536)]), _0x313683 = _0x3aca90[_0x5918f2(386)](_0x464a24, _0x3d7a1e) && _0x3aca90[_0x5918f2(183)](_0x464a24, new Date(_0x3aca90[_0x5918f2(552)](_0x3d7a1e[_0x5918f2(317)](), _0x3aca90[_0x5918f2(403)](_0x3aca90[_0x5918f2(403)](_0x3aca90[_0x5918f2(265)](2, 60), 60), 1e3)))), _0x128912 = _0x3aca90[_0x5918f2(397)](_0x464a24, _0x30c088) && _0x3aca90[_0x5918f2(180)](_0x464a24, new Date(_0x3aca90[_0x5918f2(552)](_0x30c088[_0x5918f2(317)](), _0x3aca90[_0x5918f2(432)](_0x3aca90[_0x5918f2(440)](_0x3aca90[_0x5918f2(389)](2, 60), 60), 1e3))));
    if (_0x3aca90[_0x5918f2(226)](_0x313683, !_0x128912)) return -1;
    if (_0x3aca90[_0x5918f2(226)](!_0x313683, _0x128912)) return 1;
    return 0;
  }), _0x2acb99[_0x35477c(318)](_0x120e10 => {
    const _0x2e7e98 = _0x35477c, _0x184df0 = _0x120e10[_0x2e7e98(451)] || _0x120e10[_0x2e7e98(281)], _0x16aa85 = new Date, _0x165463 = new Date(_0x120e10[_0x2e7e98(468)] + "T" + _0x120e10[_0x2e7e98(536)]), _0x393bb7 = _0x3aca90[_0x2e7e98(397)](_0x16aa85, _0x165463) && _0x3aca90[_0x2e7e98(180)](_0x16aa85, new Date(_0x3aca90[_0x2e7e98(552)](_0x165463[_0x2e7e98(317)](), _0x3aca90[_0x2e7e98(432)](_0x3aca90[_0x2e7e98(440)](_0x3aca90[_0x2e7e98(389)](2, 60), 60), 1e3)))), _0x16e322 = document[_0x2e7e98(217) + _0x2e7e98(533)](_0x3aca90[_0x2e7e98(327)]);
    _0x16e322[_0x2e7e98(312)] = _0x3aca90[_0x2e7e98(288)], _0x16e322[_0x2e7e98(477) + "te"](_0x3aca90[_0x2e7e98(472)], _0x120e10[_0x2e7e98(468)][_0x2e7e98(305) + "e"]()), _0x16e322[_0x2e7e98(477) + "te"](_0x3aca90[_0x2e7e98(414)], _0x120e10[_0x2e7e98(429)][_0x2e7e98(305) + "e"]()), _0x16e322[_0x2e7e98(477) + "te"](_0x3aca90[_0x2e7e98(534)], _0x120e10[_0x2e7e98(232)][_0x2e7e98(305) + "e"]()), _0x16e322[_0x2e7e98(477) + "te"](_0x3aca90[_0x2e7e98(378)], _0x393bb7 ? _0x3aca90[_0x2e7e98(428)] : _0x3aca90[_0x2e7e98(282)]);
    const _0x578148 = !_0x393bb7 ? _0x2e7e98(297) + _0x2e7e98(571) + _0x2e7e98(276) + _0x2e7e98(336) + _0x120e10[_0x2e7e98(468)] + "T" + _0x120e10[_0x2e7e98(536)] + (_0x2e7e98(199) + _0x2e7e98(381) + _0x2e7e98(236)) : "";
    _0x16e322[_0x2e7e98(383)] = _0x2e7e98(561) + _0x2e7e98(185) + _0x2e7e98(376) + _0x2e7e98(446) + _0x2e7e98(301) + _0x2e7e98(185) + _0x2e7e98(185) + _0x2e7e98(297) + _0x2e7e98(502) + _0x2e7e98(263) + _0x2e7e98(439) + _0x2e7e98(369) + _0x2e7e98(307) + _0x3aca90[_0x2e7e98(546)](formatDate, _0x120e10[_0x2e7e98(468)]) + (_0x2e7e98(187) + _0x2e7e98(185) + _0x2e7e98(185) + _0x2e7e98(354) + _0x2e7e98(346) + _0x2e7e98(388) + _0x2e7e98(500) + _0x2e7e98(351) + " ") + _0x120e10[_0x2e7e98(232)] + (_0x2e7e98(187) + _0x2e7e98(185) + _0x2e7e98(185) + _0x2e7e98(354) + _0x2e7e98(227) + _0x2e7e98(203) + _0x2e7e98(487) + _0x2e7e98(529) + _0x2e7e98(248)) + _0x120e10[_0x2e7e98(536)] + _0x2e7e98(445) + _0x120e10[_0x2e7e98(429)] + (_0x2e7e98(187) + _0x2e7e98(185) + _0x2e7e98(185) + "  ") + (_0x393bb7 ? _0x3aca90[_0x2e7e98(524)] : _0x578148) + (_0x2e7e98(561) + _0x2e7e98(185) + _0x2e7e98(372) + _0x2e7e98(185) + _0x2e7e98(387) + _0x2e7e98(274) + _0x2e7e98(261) + _0x2e7e98(335) + _0x2e7e98(547) + _0x2e7e98(380)) + _0x120e10[_0x2e7e98(304)] + _0x2e7e98(300) + _0x120e10[_0x2e7e98(451)] + _0x2e7e98(300) + _0x120e10[_0x2e7e98(281)] + _0x2e7e98(300) + _0x120e10[_0x2e7e98(232)] + (_0x2e7e98(249) + _0x2e7e98(185) + _0x2e7e98(223) + _0x2e7e98(263) + _0x2e7e98(186) + _0x2e7e98(478) + _0x2e7e98(320) + _0x2e7e98(185) + _0x2e7e98(185) + _0x2e7e98(501) + _0x2e7e98(185) + _0x2e7e98(188)), _0x2f1bff[_0x2e7e98(404) + "d"](_0x16e322), _0x393bb7 && !sentNotifications[_0x2e7e98(306)](_0x120e10[_0x2e7e98(304)]) && (_0x3aca90[_0x2e7e98(362)](sendTelegramNotification, _0x120e10), sentNotifications[_0x2e7e98(454)](_0x120e10[_0x2e7e98(304)]));
  });
}
function updateCountdown() {
  const _0x3f2790 = _0x4c145e, _0x365169 = {StRCJ: _0x3f2790(447), GqlCi: function (_0x5ccd44, _0x335347) {
    return _0x5ccd44 - _0x335347;
  }, mblxK: function (_0x5d2523, _0x5064d1) {
    return _0x5d2523 <= _0x5064d1;
  }, NlXqj: function (_0x2ad067, _0x487f14) {
    return _0x2ad067 / _0x487f14;
  }, vwLwx: function (_0x2e37eb, _0x26094e) {
    return _0x2e37eb * _0x26094e;
  }, yVNKI: function (_0x40e3c5, _0x9d8f54) {
    return _0x40e3c5 / _0x9d8f54;
  }, mBPWF: function (_0x24af0d, _0x57c234) {
    return _0x24af0d % _0x57c234;
  }, RwqeD: function (_0x492a5a, _0x112bef) {
    return _0x492a5a * _0x112bef;
  }, HvKaI: function (_0x578f38, _0x25d63c) {
    return _0x578f38 * _0x25d63c;
  }, OsgmA: function (_0x2844c0, _0x126cdf) {
    return _0x2844c0 % _0x126cdf;
  }, xHawg: function (_0x57d825, _0x1674e0) {
    return _0x57d825 * _0x1674e0;
  }, XgVnx: _0x3f2790(212) + "r]"}, _0x58675c = document[_0x3f2790(233) + _0x3f2790(338)](_0x365169[_0x3f2790(535)]), _0x4c1354 = new Date;
  _0x58675c[_0x3f2790(318)](_0x336be3 => {
    const _0x3c620c = _0x3f2790, _0x2931ac = new Date(_0x336be3[_0x3c620c(201) + "te"](_0x365169[_0x3c620c(241)])), _0x4bbd4a = _0x365169[_0x3c620c(286)](_0x2931ac, _0x4c1354);
    if (_0x365169[_0x3c620c(419)](_0x4bbd4a, 0)) _0x336be3[_0x3c620c(289) + "t"] = ""; else {
      const _0x160a57 = Math[_0x3c620c(466)](_0x365169[_0x3c620c(384)](_0x4bbd4a, _0x365169[_0x3c620c(228)](_0x365169[_0x3c620c(228)](1e3, 60), 60))), _0x188ffc = Math[_0x3c620c(466)](_0x365169[_0x3c620c(243)](_0x365169[_0x3c620c(450)](_0x4bbd4a, _0x365169[_0x3c620c(290)](_0x365169[_0x3c620c(290)](1e3, 60), 60)), _0x365169[_0x3c620c(490)](1e3, 60))), _0x1e3236 = Math[_0x3c620c(466)](_0x365169[_0x3c620c(384)](_0x365169[_0x3c620c(411)](_0x4bbd4a, _0x365169[_0x3c620c(515)](1e3, 60)), 1e3));
      _0x336be3[_0x3c620c(289) + "t"] = _0x160a57 + "h " + _0x188ffc + "m " + _0x1e3236 + "s";
    }
  });
}
function _0x1014(_0x1c9662, _0x44f770) {
  const _0x3bde60 = _0x447c();
  return _0x1014 = function (_0x145fb2, _0x5cee14) {
    _0x145fb2 = _0x145fb2 - 178;
    let _0x57665e = _0x3bde60[_0x145fb2];
    return _0x57665e;
  }, _0x1014(_0x1c9662, _0x44f770);
}
function playMatch(_0x5994bc, _0x3eface, _0x2465d2, _0x525fe7) {
  const _0x320b9f = _0x4c145e, _0x2431b3 = {SnJfz: _0x320b9f(375) + _0x320b9f(313), itOvT: _0x320b9f(427) + _0x320b9f(415) + _0x320b9f(510), QUlCV: function (_0x27bc2d, _0x3944d6) {
    return _0x27bc2d(_0x3944d6);
  }, dcrBb: _0x320b9f(283) + _0x320b9f(253), fBWFF: _0x320b9f(361), SDlsj: _0x320b9f(294), gQOjn: _0x320b9f(267), gNmGI: _0x320b9f(509), KaLOI: _0x320b9f(570), tHivK: function (_0xff141a, _0x44609e) {
    return _0xff141a(_0x44609e);
  }, DzlDn: function (_0x2c91bb, _0xb0f916) {
    return _0x2c91bb(_0xb0f916);
  }};
  let _0x4f2a05 = _0x3eface;
  _0x2431b3[_0x320b9f(420)](fetch, _0x3eface)[_0x320b9f(494)](_0x58ab05 => {
    const _0xe72775 = _0x320b9f;
    if (!_0x58ab05.ok) throw new Error(_0x2431b3[_0xe72775(565)]);
    return _0x58ab05;
  })[_0x320b9f(194)](_0x55cf88 => {
    const _0x57f6b9 = _0x320b9f;
    console[_0x57f6b9(237)](_0x2431b3[_0x57f6b9(366)], _0x55cf88), _0x4f2a05 = _0x2465d2;
  })[_0x320b9f(207)](() => {
    const _0x3feaca = _0x320b9f;
    _0x2431b3[_0x3feaca(319)](jwplayer, _0x2431b3[_0x3feaca(254)])[_0x3feaca(489)]({file: _0x4f2a05, width: _0x2431b3[_0x3feaca(357)], aspectratio: _0x2431b3[_0x3feaca(240)], image: " "}), document[_0x3feaca(204) + _0x3feaca(189)](_0x2431b3[_0x3feaca(254)])[_0x3feaca(532) + _0x3feaca(542)]({behavior: _0x2431b3[_0x3feaca(519)], block: _0x2431b3[_0x3feaca(198)]}), document[_0x3feaca(204) + _0x3feaca(189)](_0x2431b3[_0x3feaca(424)])[_0x3feaca(289) + "t"] = _0x525fe7, _0x2431b3[_0x3feaca(334)](loadChannels, _0x5994bc);
  });
}
async function loadChannels(_0x19952d) {
  const _0x1fc30e = _0x4c145e, _0x1689ed = {MCsWb: function (_0x528ba5, _0x5f173d) {
    return _0x528ba5(_0x5f173d);
  }, oEafr: _0x1fc30e(474) + _0x1fc30e(431) + _0x1fc30e(573), VDUmX: function (_0x371a7e, _0x222fdf) {
    return _0x371a7e > _0x222fdf;
  }, LJLHP: function (_0x53c954, _0x43f50d) {
    return _0x53c954(_0x43f50d);
  }, TYPUU: _0x1fc30e(425) + "st", OgQQW: _0x1fc30e(325), mmtNk: _0x1fc30e(221), jpvwx: _0x1fc30e(427) + _0x1fc30e(285) + _0x1fc30e(479)};
  try {
    const _0x5718f3 = await _0x1689ed[_0x1fc30e(200)](fetch, _0x1fc30e(339) + _0x1fc30e(314) + _0x1fc30e(564) + _0x1fc30e(560) + _0x1fc30e(497) + _0x19952d);
    if (!_0x5718f3.ok) throw new Error(_0x1689ed[_0x1fc30e(337)]);
    const _0x4974cf = await _0x5718f3[_0x1fc30e(271)]();
    _0x4974cf[_0x1fc30e(390)] && _0x1689ed[_0x1fc30e(543)](_0x4974cf[_0x1fc30e(291)][_0x1fc30e(321)], 0) ? (_0x1689ed[_0x1fc30e(200)](renderChannels, _0x4974cf[_0x1fc30e(291)]), _0x1689ed[_0x1fc30e(196)](renderServerMenu, _0x4974cf[_0x1fc30e(291)])) : (document[_0x1fc30e(204) + _0x1fc30e(189)](_0x1689ed[_0x1fc30e(269)])[_0x1fc30e(461)][_0x1fc30e(416)] = _0x1689ed[_0x1fc30e(349)], document[_0x1fc30e(204) + _0x1fc30e(189)](_0x1689ed[_0x1fc30e(401)])[_0x1fc30e(461)][_0x1fc30e(416)] = _0x1689ed[_0x1fc30e(349)]);
  } catch (_0x5e9407) {
    console[_0x1fc30e(237)](_0x1689ed[_0x1fc30e(462)], _0x5e9407), document[_0x1fc30e(204) + _0x1fc30e(189)](_0x1689ed[_0x1fc30e(269)])[_0x1fc30e(461)][_0x1fc30e(416)] = _0x1689ed[_0x1fc30e(349)], document[_0x1fc30e(204) + _0x1fc30e(189)](_0x1689ed[_0x1fc30e(401)])[_0x1fc30e(461)][_0x1fc30e(416)] = _0x1689ed[_0x1fc30e(349)];
  }
}
function renderChannels(_0x31d26b) {
  const _0x30458b = _0x4c145e, _0xc9bf12 = {Cczif: _0x30458b(178) + "ms", uPsYe: _0x30458b(425) + "st", SUQIM: _0x30458b(506)}, _0xd5c2f = document[_0x30458b(204) + _0x30458b(189)](_0xc9bf12[_0x30458b(181)]);
  _0xd5c2f[_0x30458b(383)] = "", _0x31d26b[_0x30458b(318)](_0x1d13b5 => {
    const _0x346ee = _0x30458b, _0x1aa1ec = document[_0x346ee(217) + _0x346ee(533)]("li");
    _0x1aa1ec[_0x346ee(383)] = _0x346ee(561) + _0x346ee(185) + _0x346ee(480) + _0x346ee(486) + _0x346ee(355) + "'" + _0x1d13b5[_0x346ee(345) + _0x346ee(537)][0] + _0x346ee(455) + _0x1d13b5[_0x346ee(258)] + (_0x346ee(501) + _0x346ee(185) + _0x346ee(188)), _0xd5c2f[_0x346ee(404) + "d"](_0x1aa1ec);
  }), document[_0x30458b(204) + _0x30458b(189)](_0xc9bf12[_0x30458b(365)])[_0x30458b(461)][_0x30458b(416)] = _0xc9bf12[_0x30458b(326)];
}
function playChannel(_0x2c6cbc) {
  const _0x1f08f7 = _0x4c145e, _0x154005 = {omsvx: function (_0x184e3b, _0x416f6c) {
    return _0x184e3b(_0x416f6c);
  }, RKrzr: _0x1f08f7(283) + _0x1f08f7(253), bjURU: _0x1f08f7(361), eqLja: _0x1f08f7(294), VlwCe: _0x1f08f7(267), voNTk: _0x1f08f7(509)};
  _0x154005[_0x1f08f7(356)](jwplayer, _0x154005[_0x1f08f7(350)])[_0x1f08f7(489)]({file: _0x2c6cbc, width: _0x154005[_0x1f08f7(525)], aspectratio: _0x154005[_0x1f08f7(272)], image: " "}), document[_0x1f08f7(204) + _0x1f08f7(189)](_0x154005[_0x1f08f7(350)])[_0x1f08f7(532) + _0x1f08f7(542)]({behavior: _0x154005[_0x1f08f7(396)], block: _0x154005[_0x1f08f7(296)]});
}
function renderServerMenu(_0x46f4a3) {
  const _0x3760bd = _0x4c145e, _0x3ef8a2 = {SmFcu: _0x3760bd(231), FlOxR: _0x3760bd(221), zkOlE: _0x3760bd(506)}, _0x5c5afe = document[_0x3760bd(204) + _0x3760bd(189)](_0x3ef8a2[_0x3760bd(341)]);
  _0x5c5afe[_0x3760bd(383)] = "";
  let _0x146e52 = 1;
  _0x46f4a3[_0x3760bd(318)]((_0x4a6660, _0x4febc2) => {
    const _0xe63ddc = _0x3760bd, _0x5cbfd3 = {ccBSE: _0x3ef8a2[_0xe63ddc(205)]};
    _0x4a6660[_0xe63ddc(345) + _0xe63ddc(537)][_0xe63ddc(318)]((_0x310861, _0x36cbca) => {
      const _0x2affee = _0xe63ddc, _0xee5e15 = document[_0x2affee(217) + _0x2affee(533)](_0x5cbfd3[_0x2affee(330)]);
      _0xee5e15[_0x2affee(383)] = _0x2affee(211) + _0x2affee(557) + _0x2affee(373) + _0x2affee(521) + _0x146e52, _0xee5e15[_0x2affee(252)] = () => playChannel(_0x310861), _0x5c5afe[_0x2affee(404) + "d"](_0xee5e15), _0x146e52++;
    });
  }), document[_0x3760bd(204) + _0x3760bd(189)](_0x3ef8a2[_0x3760bd(341)])[_0x3760bd(461)][_0x3760bd(416)] = _0x3ef8a2[_0x3760bd(392)];
}
function populateFilters(_0x19d3f4) {
  const _0x38e693 = _0x4c145e, _0x541aae = {tvBAC: _0x38e693(413), OmvAO: function (_0x41392f, _0x3ba752) {
    return _0x41392f(_0x3ba752);
  }, skwTv: _0x38e693(456), zKfbY: _0x38e693(562) + "er", HkzBK: _0x38e693(193) + _0x38e693(402) + _0x38e693(539) + _0x38e693(379), Sugfd: _0x38e693(193) + _0x38e693(402) + _0x38e693(469) + _0x38e693(559) + "n>"}, _0xd64dfc = document[_0x38e693(204) + _0x38e693(189)](_0x541aae[_0x38e693(266)]), _0x201f32 = document[_0x38e693(204) + _0x38e693(189)](_0x541aae[_0x38e693(459)]);
  _0xd64dfc[_0x38e693(383)] = _0x541aae[_0x38e693(213)], _0x201f32[_0x38e693(383)] = _0x541aae[_0x38e693(303)];
  const _0x5e567c = [...new Set(_0x19d3f4[_0x38e693(256)](_0x2f522f => _0x2f522f[_0x38e693(468)]))], _0x87fb2a = [...new Set(_0x19d3f4[_0x38e693(256)](_0x466f6e => _0x466f6e[_0x38e693(429)]))];
  _0x5e567c[_0x38e693(318)](_0x33da64 => {
    const _0x3a6263 = _0x38e693, _0x199f5a = document[_0x3a6263(217) + _0x3a6263(533)](_0x541aae[_0x3a6263(409)]);
    _0x199f5a[_0x3a6263(235)] = _0x33da64[_0x3a6263(305) + "e"](), _0x199f5a[_0x3a6263(289) + "t"] = _0x541aae[_0x3a6263(504)](formatDate, _0x33da64), _0xd64dfc[_0x3a6263(404) + "d"](_0x199f5a);
  }), _0x87fb2a[_0x38e693(318)](_0x4f6ffa => {
    const _0x119ea5 = _0x38e693, _0x327216 = document[_0x119ea5(217) + _0x119ea5(533)](_0x541aae[_0x119ea5(409)]);
    _0x327216[_0x119ea5(235)] = _0x4f6ffa[_0x119ea5(305) + "e"](), _0x327216[_0x119ea5(289) + "t"] = _0x4f6ffa, _0x201f32[_0x119ea5(404) + "d"](_0x327216);
  });
}
function filterMatches() {
  const _0x45e3e3 = _0x4c145e, _0x21407a = {dTryA: _0x45e3e3(448), qEtQM: _0x45e3e3(471) + "e", WUmOM: _0x45e3e3(192), bFwhf: function (_0x4c0a8e, _0x752204) {
    return _0x4c0a8e === _0x752204;
  }, KNLti: function (_0x51d309, _0x490a5a) {
    return _0x51d309 === _0x490a5a;
  }, DkKsD: function (_0x1af0e5, _0x2b22e7) {
    return _0x1af0e5 && _0x2b22e7;
  }, yQLKA: _0x45e3e3(551) + "s", QviDZ: _0x45e3e3(191), XjMuS: function (_0xb6eb51, _0xfa419d) {
    return _0xb6eb51 !== _0xfa419d;
  }, VAeYc: function (_0x228090, _0x37f9d4) {
    return _0x228090 !== _0x37f9d4;
  }, zEfZH: _0x45e3e3(250), KKUBE: _0x45e3e3(456), DVbnn: _0x45e3e3(562) + "er", ZpMUv: _0x45e3e3(475), VqsXF: _0x45e3e3(554) + _0x45e3e3(287), OejEG: _0x45e3e3(247), nVWGd: function (_0x27db5b, _0xf3f24a) {
    return _0x27db5b === _0xf3f24a;
  }, JFSzx: _0x45e3e3(182)}, _0x16f9f8 = document[_0x45e3e3(204) + _0x45e3e3(189)](_0x21407a[_0x45e3e3(374)])[_0x45e3e3(235)][_0x45e3e3(305) + "e"](), _0x259afb = document[_0x45e3e3(204) + _0x45e3e3(189)](_0x21407a[_0x45e3e3(394)])[_0x45e3e3(235)][_0x45e3e3(305) + "e"](), _0x3d871d = document[_0x45e3e3(204) + _0x45e3e3(189)](_0x21407a[_0x45e3e3(423)])[_0x45e3e3(235)][_0x45e3e3(305) + "e"](), _0x491a0a = document[_0x45e3e3(233) + _0x45e3e3(338)](_0x21407a[_0x45e3e3(324)]);
  let _0x695c0b = 0;
  const _0x449724 = Array[_0x45e3e3(298)](_0x491a0a)[_0x45e3e3(218)](_0x5b2bc2 => {
    const _0x3ce4b1 = _0x45e3e3, _0x466a49 = _0x5b2bc2[_0x3ce4b1(201) + "te"](_0x21407a[_0x3ce4b1(481)]), _0x4f7c63 = _0x5b2bc2[_0x3ce4b1(201) + "te"](_0x21407a[_0x3ce4b1(225)]), _0x5ae173 = _0x5b2bc2[_0x3ce4b1(201) + "te"](_0x21407a[_0x3ce4b1(540)]), _0x353080 = !_0x16f9f8 || _0x21407a[_0x3ce4b1(503)](_0x466a49, _0x16f9f8), _0x3a2e42 = !_0x259afb || _0x21407a[_0x3ce4b1(399)](_0x4f7c63, _0x259afb), _0xe86b6a = !_0x3d871d || _0x5ae173[_0x3ce4b1(246)](_0x3d871d);
    return _0x21407a[_0x3ce4b1(280)](_0x353080, _0x3a2e42) && _0xe86b6a;
  })[_0x45e3e3(315)]((_0x288c3c, _0x1590dc) => {
    const _0x1f250e = _0x45e3e3, _0x471283 = _0x288c3c[_0x1f250e(201) + "te"](_0x21407a[_0x1f250e(563)]), _0xf48248 = _0x1590dc[_0x1f250e(201) + "te"](_0x21407a[_0x1f250e(563)]);
    if (_0x21407a[_0x1f250e(503)](_0x471283, _0x21407a[_0x1f250e(359)]) && _0x21407a[_0x1f250e(234)](_0xf48248, _0x21407a[_0x1f250e(359)])) return -1;
    if (_0x21407a[_0x1f250e(393)](_0x471283, _0x21407a[_0x1f250e(359)]) && _0x21407a[_0x1f250e(399)](_0xf48248, _0x21407a[_0x1f250e(359)])) return 1;
    return 0;
  });
  _0x491a0a[_0x45e3e3(318)](_0x535c39 => _0x535c39[_0x45e3e3(461)][_0x45e3e3(416)] = _0x45e3e3(325)), _0x449724[_0x45e3e3(318)](_0x24eacc => {
    const _0x2f9d68 = _0x45e3e3;
    _0x24eacc[_0x2f9d68(461)][_0x2f9d68(416)] = _0x21407a[_0x2f9d68(482)], _0x695c0b++;
  });
  const _0x3d2ef3 = document[_0x45e3e3(204) + _0x45e3e3(189)](_0x21407a[_0x45e3e3(371)]);
  _0x21407a[_0x45e3e3(484)](_0x695c0b, 0) ? _0x3d2ef3[_0x45e3e3(400)][_0x45e3e3(454)](_0x21407a[_0x45e3e3(216)]) : _0x3d2ef3[_0x45e3e3(400)][_0x45e3e3(299)](_0x21407a[_0x45e3e3(216)]);
}
function resetFilters() {
  const _0x1baaf8 = _0x4c145e, _0x4449a1 = {JivEQ: _0x1baaf8(456), agzJv: _0x1baaf8(562) + "er", MmPMU: _0x1baaf8(475), BxfOi: function (_0xd733d3) {
    return _0xd733d3();
  }};
  document[_0x1baaf8(204) + _0x1baaf8(189)](_0x4449a1[_0x1baaf8(179)])[_0x1baaf8(235)] = "", document[_0x1baaf8(204) + _0x1baaf8(189)](_0x4449a1[_0x1baaf8(465)])[_0x1baaf8(235)] = "", document[_0x1baaf8(204) + _0x1baaf8(189)](_0x4449a1[_0x1baaf8(208)])[_0x1baaf8(235)] = "", _0x4449a1[_0x1baaf8(520)](filterMatches);
}
function debounce(_0xa9c3a4, _0xe59761) {
  const _0x58387b = {qPTCw: function (_0x2072cf, _0x2d0efd) {
    return _0x2072cf(_0x2d0efd);
  }, eBjeb: function (_0x2f03e4, _0x5a3c03, _0x481c97) {
    return _0x2f03e4(_0x5a3c03, _0x481c97);
  }};
  let _0x16eedf;
  return function (..._0x1a8970) {
    const _0x4e3f72 = _0x1014;
    _0x58387b[_0x4e3f72(442)](clearTimeout, _0x16eedf), _0x16eedf = _0x58387b[_0x4e3f72(443)](setTimeout, () => _0xa9c3a4[_0x4e3f72(516)](this, _0x1a8970), _0xe59761);
  };
}
document[_0x4c145e(204) + _0x4c145e(189)](_0x4c145e(475))[_0x4c145e(293) + _0x4c145e(308)](_0x4c145e(470), debounce(filterMatches, 300)), document[_0x4c145e(204) + _0x4c145e(189)](_0x4c145e(456))[_0x4c145e(293) + _0x4c145e(308)](_0x4c145e(437), filterMatches), document[_0x4c145e(204) + _0x4c145e(189)](_0x4c145e(562) + "er")[_0x4c145e(293) + _0x4c145e(308)](_0x4c145e(437), filterMatches), document[_0x4c145e(293) + _0x4c145e(308)](_0x4c145e(567) + _0x4c145e(292), loadMatches), window[_0x4c145e(514)] = function () {
  const _0x3b4261 = _0x4c145e, _0x5a85eb = {bhjQD: function (_0x15c7f4) {
    return _0x15c7f4();
  }};
  _0x5a85eb[_0x3b4261(385)](scrollFunction);
};
function scrollFunction() {
  const _0x17706a = _0x4c145e, _0x2e2ca0 = {PVafU: function (_0x584dbc, _0xdae426) {
    return _0x584dbc > _0xdae426;
  }, UnCuN: function (_0x245afa, _0x2c0f3d) {
    return _0x245afa > _0x2c0f3d;
  }, hakqX: _0x17706a(347) + _0x17706a(528), OJYfE: _0x17706a(506), bgAJm: _0x17706a(325)};
  _0x2e2ca0[_0x17706a(406)](document[_0x17706a(496)][_0x17706a(435)], 20) || _0x2e2ca0[_0x17706a(277)](document[_0x17706a(458) + _0x17706a(278)][_0x17706a(435)], 20) ? document[_0x17706a(204) + _0x17706a(189)](_0x2e2ca0[_0x17706a(343)])[_0x17706a(461)][_0x17706a(416)] = _0x2e2ca0[_0x17706a(222)] : document[_0x17706a(204) + _0x17706a(189)](_0x2e2ca0[_0x17706a(343)])[_0x17706a(461)][_0x17706a(416)] = _0x2e2ca0[_0x17706a(426)];
}
function scrollToTop() {
  const _0x569f4d = _0x4c145e;
  document[_0x569f4d(496)][_0x569f4d(435)] = 0, document[_0x569f4d(458) + _0x569f4d(278)][_0x569f4d(435)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x52c9f7) {
  const _0x19fc8c = _0x4c145e, _0x4c9a30 = {NXxfQ: _0x19fc8c(544) + _0x19fc8c(463) + _0x19fc8c(190), UQmTe: _0x19fc8c(427) + _0x19fc8c(202) + _0x19fc8c(493), HXzCV: _0x19fc8c(206) + _0x19fc8c(513) + _0x19fc8c(549), OoTGU: function (_0x354e91, _0x5f2640) {
    return _0x354e91(_0x5f2640);
  }, TLeWW: function (_0x220882, _0x6a37ba, _0x8c9008) {
    return _0x220882(_0x6a37ba, _0x8c9008);
  }, bAIzG: _0x19fc8c(541)}, _0x3bd166 = _0x19fc8c(430) + ": " + _0x52c9f7[_0x19fc8c(232)] + _0x19fc8c(434) + _0x4c9a30[_0x19fc8c(518)](formatDate, _0x52c9f7[_0x19fc8c(468)]) + _0x19fc8c(219) + _0x52c9f7[_0x19fc8c(536)] + _0x19fc8c(279) + _0x52c9f7[_0x19fc8c(429)] + (_0x19fc8c(360) + _0x19fc8c(476) + _0x19fc8c(438) + _0x19fc8c(449) + "m/"), _0x50d6cd = _0x19fc8c(339) + _0x19fc8c(363) + _0x19fc8c(377) + telegramBotToken + (_0x19fc8c(441) + _0x19fc8c(342) + "=") + telegramChatId + _0x19fc8c(329) + _0x4c9a30[_0x19fc8c(518)](encodeURIComponent, _0x3bd166);
  _0x4c9a30[_0x19fc8c(499)](fetch, _0x50d6cd, {method: _0x4c9a30[_0x19fc8c(215)]})[_0x19fc8c(494)](_0x32a054 => _0x32a054[_0x19fc8c(271)]())[_0x19fc8c(494)](_0x3b9064 => {
    const _0x3f678b = _0x19fc8c;
    _0x3b9064.ok ? console[_0x3f678b(555)](_0x4c9a30[_0x3f678b(264)]) : console[_0x3f678b(237)](_0x4c9a30[_0x3f678b(548)], _0x3b9064);
  })[_0x19fc8c(194)](_0x16fb8e => {
    const _0x469bb2 = _0x19fc8c;
    console[_0x469bb2(237)](_0x4c9a30[_0x469bb2(331)], _0x16fb8e);
  });
}
function _0x447c() {
  const _0x3ef50a = ["UnCuN", "ement", "\nLeague: ", "DkKsD", "m3u8Url", "cRUuk", "jwplayerCo", "UQzJb", "load chann", "GqlCi", "card", "UBGrY", "textConten", "RwqeD", "result", "Loaded", "addEventLi", "16:9", "UPEWD", "voNTk", "<span clas", "from", "remove", "', '", 'nfo">\n    ', "npoIx", "Sugfd", "videoId", "toLowerCas", "has", "</i> ", "stener", "zvc2_I5WDk", "videoUrl", "atchId ", "className", "ailed", "i.90min.to", "sort", "div", "getTime", "forEach", "QUlCV", "/i> Watch\n", "length", "531qmUJIe", "September", "VqsXF", "none", "SUQIM", "HdodV", "vKcum", "&text=", "ccBSE", "HXzCV", "mXxhL", "dcast-towe", "tHivK", 'utton" onc', 'imer="', "oEafr", "torAll", "https://ap", "OlaMd", "FlOxR", "ge?chat_id", "hakqX", "0000", "streaming_", 'ass="teams', "scrollToTo", "oJfay", "OgQQW", "RKrzr", 'sers"></i>', "mYEbM", "STamQ", "  <span cl", "ayChannel(", "omsvx", "fBWFF", "/business/", "QviDZ", "\nLink: htt", "100%", "BLteQ", "i.telegram", "vLcwr", "uPsYe", "itOvT", "la.github.", "data", 'ndar-alt">', "UCppy", "OejEG", " </div>\n  ", 'ver"></i> ', "KKUBE", "Live URL f", " <div clas", ".org/bot", "UxGYp", "e</option>", "Match('", " Soon...</", "code", "innerHTML", "NlXqj", "bhjQD", "iosxm", "        <b", '"><i class', "SJlJV", "status", "ard", "zkOlE", "VAeYc", "DVbnn", "8CNzvjB", "VlwCe", "XblOY", "cWlGj", "KNLti", "classList", "mmtNk", 'lue="">Fil', "wRFlu", "appendChil", "as fa-broa", "PVafU", "load match", "chId=", "tvBAC", "match", "OsgmA", "7598004626", "option", "lcYxN", "load live ", "display", "neYVv", "io/schedul", "mblxK", "DzlDn", "getMonth", "April", "ZpMUv", "KaLOI", "channelsLi", "bgAJm", "Failed to ", "FferH", "league", "🚨 Live Now", "sponse was", "npyDF", "July", " 🚨\nDate: ", "scrollTop", ":AAGG4SAfi", "change", "portlive.b", "as fa-cale", "Vwhoe", "/sendMessa", "qPTCw", "eBjeb", "match/matc", " | ", 's="match-i', "data-timer", "data-date", "logspot.co", "mBPWF", "liveUrl", "https://wa", "February", "add", "')\">", "dateFilter", "May", "documentEl", "zKfbY", "rtakita.gi", "style", "jpvwx", "on sent su", "https://83", "agzJv", "floor", "uzCYs", "date", "ter by Lea", "input", "data-leagu", "eZhpI", "5155ZLKAYT", "Network re", "teamSearch", "ps://zonas", "setAttribu", '-circle"><', "els:", " <button o", "dTryA", "zEfZH", "thub.io/bo", "nVWGd", "BnXik", 'nclick="pl', 'ss="fas fa', "WkPvP", "setup", "HvKaI", "1331673aaPjCe", "June", "ication:", "then", "OwPDH", "body", "atchId=", "UsyyQ", "TLeWW", '="fas fa-u', "</button>\n", 's="date"><', "bFwhf", "OmvAO", "e.json", "block", "610978GUlczG", "aFBVZ", "start", "URL:", "December", "4364vwguUF", "ing notifi", "onscroll", "xHawg", "apply", "iZ76AHaEWo", "OoTGU", "gQOjn", "BxfOi", "Server ", "dOSOq", "xCNAh", "hAlaw", "bjURU", "August", "ve Now</sp", "pButton", '-clock"></', "fetch live", "January", "scrollInto", "ent", "gsnlP", "XgVnx", "time", "urls", "xDLiW", "ter by Dat", "WUmOM", "GET", "View", "VDUmX", "Notificati", "1194030nzYqoB", "Mgpje", 'lick="play', "UQmTe", "cation:", "getFullYea", "data-statu", "PPTpA", "243760JNRpxn", ".schedule-", "log", "loader", "fas fa-ser", "23795c", "gue</optio", "channels?m", "\n         ", "leagueFilt", "yQLKA", "/v1/match/", "SnJfz", "es:", "DOMContent", "h_info?mat", " URL for m", "matchTitle", 's="countdo', "October", " not ok", "channelIte", "JivEQ", "DgYVp", "Cczif", "show", "ZrFNN", "ZUBSp", "          ", "as fa-play", "</span>\n  ", "      ", "ById", "ccessfully", "live", "data-teams", "<option va", "catch", "schedule-c", "LJLHP", "getDate", "gNmGI", '">Starting', "MCsWb", "getAttribu", "send notif", 'ls"><i cla', "getElement", "SmFcu", "Error send", "finally", "MmPMU", "7516710cqdDMG", "an>", '<i class="', "[data-time", "HkzBK", "Nxwup", "bAIzG", "JFSzx", "createElem", "filter", "\nTime: ", "fetch vide", "serverMenu", "OJYfE", "         <", "November", "qEtQM", "xHHuN", 'ass="detai', "vwLwx", 's="live"><', "all", "button", "teams", "querySelec", "XjMuS", "value", "span>", "error", "scheduleCo", "oUrl for m", "SDlsj", "StRCJ", "MFKye", "yVNKI", "upcoming", "Eycjo", "includes", "noMatches", "i> ", "')\">\n     ", "flex", "1391979650", "onclick", "ntainer", "dcrBb", "DniCR", "map", "TxhTK", "name", 'r"></i> Li', "UhInD", 's="watch-b', "wXgOF", 'i class="f', "NXxfQ", "QzoYk", "skwTv", "smooth", "242690RJyHHc", "TYPUU", "3zb296.app", "json", "eqLja", "March", "utton clas", "rIIof", 'wn" data-t'];
  _0x447c = function () {
    return _0x3ef50a;
  };
  return _0x447c();
}
