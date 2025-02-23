const _0x25b3fd = _0x3290;
(function (_0x328bcf, _0x449354) {
  const _0x258a24 = _0x3290, _0x1f6d28 = _0x328bcf();
  while (true) {
    try {
      const _0x4459f4 = -parseInt(_0x258a24(508)) / 1 + -parseInt(_0x258a24(641)) / 2 + -parseInt(_0x258a24(683)) / 3 * (parseInt(_0x258a24(451)) / 4) + -parseInt(_0x258a24(406)) / 5 * (-parseInt(_0x258a24(520)) / 6) + -parseInt(_0x258a24(454)) / 7 * (-parseInt(_0x258a24(671)) / 8) + parseInt(_0x258a24(626)) / 9 * (parseInt(_0x258a24(400)) / 10) + parseInt(_0x258a24(355)) / 11;
      if (_0x4459f4 === _0x449354) break; else _0x1f6d28.push(_0x1f6d28.shift());
    } catch (_0xcc8397) {
      _0x1f6d28.push(_0x1f6d28.shift());
    }
  }
}(_0x5163, 659933));
const telegramBotToken = _0x25b3fd(554) + _0x25b3fd(473) + _0x25b3fd(615) + _0x25b3fd(542) + _0x25b3fd(419), telegramChatId = _0x25b3fd(590), sentNotifications = new Set;
function formatDate(_0x3f18d6) {
  const _0x9eb065 = _0x25b3fd, _0x1a5594 = {UpGHT: _0x9eb065(534), XLpbp: _0x9eb065(466), urcZU: _0x9eb065(632), MQIUH: _0x9eb065(525), AgZXR: _0x9eb065(470), bSUhT: _0x9eb065(694), KgrCz: _0x9eb065(587), fOivW: _0x9eb065(599), GBFJh: _0x9eb065(388), FZOKK: _0x9eb065(402), rVDVQ: _0x9eb065(337), TjYlv: _0x9eb065(505)}, _0x3eaf48 = [_0x1a5594[_0x9eb065(489)], _0x1a5594[_0x9eb065(338)], _0x1a5594[_0x9eb065(581)], _0x1a5594[_0x9eb065(582)], _0x1a5594[_0x9eb065(460)], _0x1a5594[_0x9eb065(673)], _0x1a5594[_0x9eb065(491)], _0x1a5594[_0x9eb065(339)], _0x1a5594[_0x9eb065(549)], _0x1a5594[_0x9eb065(563)], _0x1a5594[_0x9eb065(502)], _0x1a5594[_0x9eb065(651)]], _0x268684 = new Date(_0x3f18d6), _0x959a33 = _0x268684[_0x9eb065(548)](), _0x28157e = _0x3eaf48[_0x268684[_0x9eb065(446)]()], _0x332efb = _0x268684[_0x9eb065(661) + "r"]();
  return _0x959a33 + " " + _0x28157e + " " + _0x332efb;
}
async function loadMatches() {
  const _0x3d9eab = _0x25b3fd, _0x12c2c8 = {PpswO: _0x3d9eab(377), KmfNk: _0x3d9eab(421), Rakrv: function (_0x478495) {
    return _0x478495();
  }, EquVU: function (_0x558676, _0x940e17) {
    return _0x558676(_0x940e17);
  }, uPRtF: function (_0x6e2876, _0x3786de) {
    return _0x6e2876(_0x3786de);
  }, PBkdP: function (_0x5688d7, _0x2835a5, _0x389467) {
    return _0x5688d7(_0x2835a5, _0x389467);
  }, BteAe: _0x3d9eab(518) + _0x3d9eab(649) + _0x3d9eab(662), mtFMJ: _0x3d9eab(650), rlTWp: _0x3d9eab(583), lcyDn: _0x3d9eab(676)};
  try {
    document[_0x3d9eab(527) + _0x3d9eab(608)](_0x12c2c8[_0x3d9eab(415)])[_0x3d9eab(538)][_0x3d9eab(500)] = _0x12c2c8[_0x3d9eab(657)];
    const _0x17b05c = await _0x12c2c8[_0x3d9eab(545)](fetchMatches);
    _0x12c2c8[_0x3d9eab(539)](renderMatches, _0x17b05c), _0x12c2c8[_0x3d9eab(498)](populateFilters, _0x17b05c), _0x12c2c8[_0x3d9eab(545)](filterMatches), _0x12c2c8[_0x3d9eab(545)](updateCountdown), _0x12c2c8[_0x3d9eab(535)](setInterval, updateCountdown, 1e3);
  } catch (_0x5ba277) {
    console[_0x3d9eab(329)](_0x12c2c8[_0x3d9eab(612)], _0x5ba277), document[_0x3d9eab(527) + _0x3d9eab(608)](_0x12c2c8[_0x3d9eab(331)])[_0x3d9eab(468)][_0x3d9eab(660)](_0x12c2c8[_0x3d9eab(567)]);
  } finally {
    document[_0x3d9eab(527) + _0x3d9eab(608)](_0x12c2c8[_0x3d9eab(415)])[_0x3d9eab(538)][_0x3d9eab(500)] = _0x12c2c8[_0x3d9eab(543)];
  }
}
async function fetchMatches() {
  const _0x3a576e = _0x25b3fd, _0x4e0747 = {HYipG: function (_0x3b0fca, _0x481aa6) {
    return _0x3b0fca(_0x481aa6);
  }, WQcTQ: _0x3a576e(635) + _0x3a576e(391) + _0x3a576e(696) + _0x3a576e(385) + _0x3a576e(637) + _0x3a576e(562), jMENR: _0x3a576e(666) + _0x3a576e(381) + _0x3a576e(690)}, _0x5ec12c = await _0x4e0747[_0x3a576e(394)](fetch, _0x4e0747[_0x3a576e(422)]);
  if (!_0x5ec12c.ok) throw new Error(_0x4e0747[_0x3a576e(452)]);
  const _0x26e096 = await _0x5ec12c[_0x3a576e(591)](), _0x13a717 = await _0x4e0747[_0x3a576e(394)](fetchLiveUrls, _0x26e096);
  return _0x26e096[_0x3a576e(503)](_0x228ba7 => {
    const _0x3abc25 = _0x3a576e;
    _0x228ba7[_0x3abc25(602)] = _0x13a717[_0x228ba7[_0x3abc25(405)]] || _0x228ba7[_0x3abc25(514)];
  }), _0x26e096;
}
async function fetchLiveUrls(_0x38ad5c) {
  const _0x4b2d2c = _0x25b3fd, _0x599eb8 = {YBsoK: function (_0x40d3ed, _0xdd8e1f) {
    return _0x40d3ed(_0xdd8e1f);
  }, MSZAL: function (_0x5edf7c, _0x1abac4) {
    return _0x5edf7c > _0x1abac4;
  }}, _0x5ab787 = _0x38ad5c[_0x4b2d2c(687)](_0x46ffc0 => _0x46ffc0[_0x4b2d2c(405)]), _0xdeaa57 = {}, _0x17d4c8 = _0x5ab787[_0x4b2d2c(687)](async _0x243260 => {
    const _0x402236 = _0x4b2d2c;
    try {
      const _0xd9de2 = await _0x599eb8[_0x402236(336)](fetch, _0x402236(516) + _0x402236(573) + _0x402236(656) + _0x402236(481) + _0x402236(349) + _0x243260);
      if (_0xd9de2.ok) {
        const _0x43126b = await _0xd9de2[_0x402236(591)]();
        _0x43126b[_0x402236(555)] && _0x599eb8[_0x402236(352)](_0x43126b[_0x402236(603)][_0x402236(330)], 0) && (_0xdeaa57[_0x243260] = _0x43126b[_0x402236(603)][0][_0x402236(487) + _0x402236(450)][0]);
      }
    } catch (_0x2bc7f0) {
      console[_0x402236(329)](_0x402236(518) + _0x402236(486) + _0x402236(702) + _0x402236(510) + _0x243260 + ":", _0x2bc7f0);
    }
  });
  return await Promise[_0x4b2d2c(376)](_0x17d4c8), _0xdeaa57;
}
function renderMatches(_0x2c9ef0) {
  const _0x8e4593 = _0x25b3fd, _0x3b4e51 = {SCLSW: function (_0x560f13, _0x395931) {
    return _0x560f13 >= _0x395931;
  }, yiZEC: function (_0x2e2aa5, _0x1584cf) {
    return _0x2e2aa5 <= _0x1584cf;
  }, ohyoq: function (_0x104cb4, _0x18d634) {
    return _0x104cb4 + _0x18d634;
  }, oRDiC: function (_0x20949b, _0x48a6f3) {
    return _0x20949b * _0x48a6f3;
  }, qNlKG: function (_0x23bd48, _0x4ab90a) {
    return _0x23bd48 * _0x4ab90a;
  }, gMouM: function (_0x5d6e97, _0x2e9b3f) {
    return _0x5d6e97 >= _0x2e9b3f;
  }, QZnJm: function (_0x4feca4, _0x59bb82) {
    return _0x4feca4 + _0x59bb82;
  }, qeQEF: function (_0x5cd0e6, _0x361b1d) {
    return _0x5cd0e6 * _0x361b1d;
  }, HcWTd: function (_0xc90ad1, _0x33bc97) {
    return _0xc90ad1 * _0x33bc97;
  }, IIhut: function (_0x395778, _0x330f43) {
    return _0x395778 && _0x330f43;
  }, wAPsD: function (_0x45c703, _0x24e753) {
    return _0x45c703 && _0x24e753;
  }, WsDzR: function (_0x54aa38, _0x59462f) {
    return _0x54aa38 + _0x59462f;
  }, JcpdL: function (_0x4378b4, _0x8d6e0c) {
    return _0x4378b4 * _0x8d6e0c;
  }, BqwoE: _0x8e4593(571), IOevz: _0x8e4593(625) + _0x8e4593(681), thyba: _0x8e4593(485), lQHjf: _0x8e4593(604) + "e", hGqCp: _0x8e4593(398), nXnjZ: _0x8e4593(369) + "s", eSHHW: _0x8e4593(679), IdZEC: _0x8e4593(684), QMYmU: function (_0x20fe9b, _0x5e28a4) {
    return _0x20fe9b(_0x5e28a4);
  }, bfZBF: _0x8e4593(479) + _0x8e4593(436) + _0x8e4593(344) + _0x8e4593(601) + _0x8e4593(457) + _0x8e4593(395) + _0x8e4593(533) + _0x8e4593(693), VUKya: function (_0x55c19f, _0xb06e59) {
    return _0x55c19f(_0xb06e59);
  }, PyXjQ: _0x8e4593(412) + _0x8e4593(513)}, _0x4a9f85 = document[_0x8e4593(527) + _0x8e4593(608)](_0x3b4e51[_0x8e4593(490)]);
  _0x4a9f85[_0x8e4593(578)] = "", _0x2c9ef0[_0x8e4593(465)]((_0x3fa1e3, _0x11a875) => {
    const _0x415bca = _0x8e4593, _0x39d53f = new Date, _0x1715ee = new Date(_0x3fa1e3[_0x415bca(565)] + "T" + _0x3fa1e3[_0x415bca(553)]), _0x48ddef = new Date(_0x11a875[_0x415bca(565)] + "T" + _0x11a875[_0x415bca(553)]), _0x3c9be5 = _0x3b4e51[_0x415bca(495)](_0x39d53f, _0x1715ee) && _0x3b4e51[_0x415bca(407)](_0x39d53f, new Date(_0x3b4e51[_0x415bca(561)](_0x1715ee[_0x415bca(378)](), _0x3b4e51[_0x415bca(631)](_0x3b4e51[_0x415bca(631)](_0x3b4e51[_0x415bca(350)](2, 60), 60), 1e3)))), _0x245b3e = _0x3b4e51[_0x415bca(692)](_0x39d53f, _0x48ddef) && _0x3b4e51[_0x415bca(407)](_0x39d53f, new Date(_0x3b4e51[_0x415bca(704)](_0x48ddef[_0x415bca(378)](), _0x3b4e51[_0x415bca(540)](_0x3b4e51[_0x415bca(350)](_0x3b4e51[_0x415bca(648)](2, 60), 60), 1e3))));
    if (_0x3b4e51[_0x415bca(333)](_0x3c9be5, !_0x245b3e)) return -1;
    if (_0x3b4e51[_0x415bca(593)](!_0x3c9be5, _0x245b3e)) return 1;
    return 0;
  }), _0x2c9ef0[_0x8e4593(503)](_0x52cfc0 => {
    const _0x46e756 = _0x8e4593, _0x58d936 = _0x52cfc0[_0x46e756(602)] || _0x52cfc0[_0x46e756(514)], _0x5cef86 = new Date, _0x4e7669 = new Date(_0x52cfc0[_0x46e756(565)] + "T" + _0x52cfc0[_0x46e756(553)]), _0x89cd1f = _0x3b4e51[_0x46e756(692)](_0x5cef86, _0x4e7669) && _0x3b4e51[_0x46e756(407)](_0x5cef86, new Date(_0x3b4e51[_0x46e756(340)](_0x4e7669[_0x46e756(378)](), _0x3b4e51[_0x46e756(631)](_0x3b4e51[_0x46e756(689)](_0x3b4e51[_0x46e756(631)](2, 60), 60), 1e3)))), _0x5531ae = document[_0x46e756(628) + _0x46e756(367)](_0x3b4e51[_0x46e756(541)]);
    _0x5531ae[_0x46e756(418)] = _0x3b4e51[_0x46e756(512)], _0x5531ae[_0x46e756(393) + "te"](_0x3b4e51[_0x46e756(665)], _0x52cfc0[_0x46e756(565)][_0x46e756(373) + "e"]()), _0x5531ae[_0x46e756(393) + "te"](_0x3b4e51[_0x46e756(524)], _0x52cfc0[_0x46e756(639)][_0x46e756(373) + "e"]()), _0x5531ae[_0x46e756(393) + "te"](_0x3b4e51[_0x46e756(332)], _0x52cfc0[_0x46e756(409)][_0x46e756(373) + "e"]()), _0x5531ae[_0x46e756(393) + "te"](_0x3b4e51[_0x46e756(654)], _0x89cd1f ? _0x3b4e51[_0x46e756(686)] : _0x3b4e51[_0x46e756(629)]);
    const _0x4e7aba = !_0x89cd1f ? _0x46e756(479) + _0x46e756(504) + _0x46e756(572) + _0x46e756(642) + _0x52cfc0[_0x46e756(565)] + "T" + _0x52cfc0[_0x46e756(553)] + (_0x46e756(595) + _0x46e756(416) + _0x46e756(471)) : "";
    _0x5531ae[_0x46e756(578)] = _0x46e756(678) + _0x46e756(472) + _0x46e756(343) + _0x46e756(488) + _0x46e756(347) + _0x46e756(472) + _0x46e756(472) + _0x46e756(479) + _0x46e756(705) + _0x46e756(344) + _0x46e756(351) + _0x46e756(459) + _0x46e756(387) + _0x3b4e51[_0x46e756(695)](formatDate, _0x52cfc0[_0x46e756(565)]) + (_0x46e756(598) + _0x46e756(472) + _0x46e756(472) + _0x46e756(356) + _0x46e756(529) + _0x46e756(537) + _0x46e756(447) + _0x46e756(414) + " ") + _0x52cfc0[_0x46e756(409)] + (_0x46e756(598) + _0x46e756(472) + _0x46e756(472) + _0x46e756(356) + _0x46e756(701) + _0x46e756(476) + _0x46e756(507) + _0x46e756(580) + _0x46e756(623)) + _0x52cfc0[_0x46e756(553)] + _0x46e756(467) + _0x52cfc0[_0x46e756(639)] + (_0x46e756(598) + _0x46e756(472) + _0x46e756(472) + "  ") + (_0x89cd1f ? _0x3b4e51[_0x46e756(357)] : _0x4e7aba) + (_0x46e756(678) + _0x46e756(472) + _0x46e756(404) + _0x46e756(472) + _0x46e756(366) + _0x46e756(522) + _0x46e756(364) + _0x46e756(441) + _0x46e756(596) + _0x46e756(382)) + _0x52cfc0[_0x46e756(405)] + _0x46e756(550) + _0x52cfc0[_0x46e756(602)] + _0x46e756(550) + _0x52cfc0[_0x46e756(514)] + (_0x46e756(634) + _0x46e756(472) + _0x46e756(371) + _0x46e756(344) + _0x46e756(579) + _0x46e756(630) + _0x46e756(368) + _0x46e756(472) + _0x46e756(472) + _0x46e756(362) + _0x46e756(472) + _0x46e756(511)), _0x4a9f85[_0x46e756(429) + "d"](_0x5531ae), _0x89cd1f && !sentNotifications[_0x46e756(379)](_0x52cfc0[_0x46e756(405)]) && (_0x3b4e51[_0x46e756(613)](sendTelegramNotification, _0x52cfc0), sentNotifications[_0x46e756(660)](_0x52cfc0[_0x46e756(405)]));
  });
}
function updateCountdown() {
  const _0x1790e8 = _0x25b3fd, _0x419241 = {FjecD: _0x1790e8(478), ZKgua: function (_0x8f9128, _0x2a831f) {
    return _0x8f9128 - _0x2a831f;
  }, kTTMa: function (_0x366f69, _0x28518e) {
    return _0x366f69 <= _0x28518e;
  }, NdlHE: function (_0x5d0411, _0x43509f) {
    return _0x5d0411 / _0x43509f;
  }, SOduN: function (_0x33e1b6, _0xdf34e4) {
    return _0x33e1b6 * _0xdf34e4;
  }, ehSPz: function (_0x26a929, _0x156b48) {
    return _0x26a929 * _0x156b48;
  }, vARvr: function (_0x43638f, _0x2f8860) {
    return _0x43638f % _0x2f8860;
  }, WluKf: function (_0xc44d41, _0x42a65a) {
    return _0xc44d41 * _0x42a65a;
  }, QXRJA: function (_0x35915d, _0x31950e) {
    return _0x35915d / _0x31950e;
  }, RyElM: function (_0x16e227, _0x121bfb) {
    return _0x16e227 % _0x121bfb;
  }, RszJN: function (_0x3396ef, _0x52b222) {
    return _0x3396ef * _0x52b222;
  }, HOsWY: _0x1790e8(375) + "r]"}, _0x4fe270 = document[_0x1790e8(408) + _0x1790e8(464)](_0x419241[_0x1790e8(433)]), _0xeb3455 = new Date;
  _0x4fe270[_0x1790e8(503)](_0x563db0 => {
    const _0x22f9b4 = _0x1790e8, _0x3506dd = new Date(_0x563db0[_0x22f9b4(380) + "te"](_0x419241[_0x22f9b4(526)])), _0x4aab57 = _0x419241[_0x22f9b4(392)](_0x3506dd, _0xeb3455);
    if (_0x419241[_0x22f9b4(496)](_0x4aab57, 0)) _0x563db0[_0x22f9b4(672) + "t"] = ""; else {
      const _0x14011d = Math[_0x22f9b4(624)](_0x419241[_0x22f9b4(617)](_0x4aab57, _0x419241[_0x22f9b4(622)](_0x419241[_0x22f9b4(675)](1e3, 60), 60))), _0x3cc2b8 = Math[_0x22f9b4(624)](_0x419241[_0x22f9b4(617)](_0x419241[_0x22f9b4(620)](_0x4aab57, _0x419241[_0x22f9b4(622)](_0x419241[_0x22f9b4(621)](1e3, 60), 60)), _0x419241[_0x22f9b4(621)](1e3, 60))), _0x2097c7 = Math[_0x22f9b4(624)](_0x419241[_0x22f9b4(569)](_0x419241[_0x22f9b4(335)](_0x4aab57, _0x419241[_0x22f9b4(653)](1e3, 60)), 1e3));
      _0x563db0[_0x22f9b4(672) + "t"] = _0x14011d + "h " + _0x3cc2b8 + "m " + _0x2097c7 + "s";
    }
  });
}
function playMatch(_0x266cd7, _0x22c4c2, _0x1db3af) {
  const _0xe3c765 = _0x25b3fd, _0x188a25 = {CEDnh: _0xe3c765(586) + _0xe3c765(458), DuctM: _0xe3c765(518) + _0xe3c765(353) + _0xe3c765(547), NBWpf: function (_0x3539ba, _0x565910) {
    return _0x3539ba(_0x565910);
  }, vlkbY: _0xe3c765(428) + _0xe3c765(513), gAPth: _0xe3c765(560), wlDgu: _0xe3c765(703), eoQEv: _0xe3c765(482), rrNqM: _0xe3c765(652), xVqVb: function (_0x5c83f8, _0x4827c9) {
    return _0x5c83f8(_0x4827c9);
  }, AwssV: function (_0x4320bc, _0x426dd3) {
    return _0x4320bc(_0x426dd3);
  }};
  let _0x5ead84 = _0x22c4c2;
  _0x188a25[_0xe3c765(627)](fetch, _0x22c4c2)[_0xe3c765(588)](_0x2d1f1f => {
    const _0x1c9c54 = _0xe3c765;
    if (!_0x2d1f1f.ok) throw new Error(_0x188a25[_0x1c9c54(383)]);
    return _0x2d1f1f;
  })[_0xe3c765(477)](_0x492e93 => {
    const _0x20c1f5 = _0xe3c765;
    console[_0x20c1f5(329)](_0x188a25[_0x20c1f5(523)], _0x492e93), _0x5ead84 = _0x1db3af;
  })[_0xe3c765(546)](() => {
    const _0x3cbb23 = _0xe3c765;
    _0x188a25[_0x3cbb23(532)](jwplayer, _0x188a25[_0x3cbb23(334)])[_0x3cbb23(646)]({file: _0x5ead84, width: _0x188a25[_0x3cbb23(484)], aspectratio: _0x188a25[_0x3cbb23(341)], image: " "}), document[_0x3cbb23(527) + _0x3cbb23(608)](_0x188a25[_0x3cbb23(334)])[_0x3cbb23(463) + _0x3cbb23(374)]({behavior: _0x188a25[_0x3cbb23(499)], block: _0x188a25[_0x3cbb23(640)]}), _0x188a25[_0x3cbb23(440)](loadChannels, _0x266cd7);
  });
}
async function loadChannels(_0xe797f2) {
  const _0xc7636a = _0x25b3fd, _0x116945 = {ABZds: function (_0x5d7e62, _0x2f2dff) {
    return _0x5d7e62(_0x2f2dff);
  }, EcGNn: _0xc7636a(666) + _0xc7636a(381) + _0xc7636a(690), IiKge: function (_0x1c0da8, _0x39f52e) {
    return _0x1c0da8 > _0x39f52e;
  }, QgJRk: function (_0xbe6ba, _0xf8e248) {
    return _0xbe6ba(_0xf8e248);
  }, DNANI: _0xc7636a(448) + "st", SKGqS: _0xc7636a(676), lHdnw: _0xc7636a(698), bAZfr: _0xc7636a(518) + _0xc7636a(680) + _0xc7636a(670)};
  try {
    const _0x467b43 = await _0x116945[_0xc7636a(557)](fetch, _0xc7636a(516) + _0xc7636a(573) + _0xc7636a(656) + _0xc7636a(481) + _0xc7636a(349) + _0xe797f2);
    if (!_0x467b43.ok) throw new Error(_0x116945[_0xc7636a(437)]);
    const _0x31bb0c = await _0x467b43[_0xc7636a(591)]();
    _0x31bb0c[_0xc7636a(555)] && _0x116945[_0xc7636a(345)](_0x31bb0c[_0xc7636a(603)][_0xc7636a(330)], 0) ? (_0x116945[_0xc7636a(474)](renderChannels, _0x31bb0c[_0xc7636a(603)]), _0x116945[_0xc7636a(474)](renderServerMenu, _0x31bb0c[_0xc7636a(603)])) : (document[_0xc7636a(527) + _0xc7636a(608)](_0x116945[_0xc7636a(461)])[_0xc7636a(538)][_0xc7636a(500)] = _0x116945[_0xc7636a(645)], document[_0xc7636a(527) + _0xc7636a(608)](_0x116945[_0xc7636a(427)])[_0xc7636a(538)][_0xc7636a(500)] = _0x116945[_0xc7636a(645)]);
  } catch (_0x1b0560) {
    console[_0xc7636a(329)](_0x116945[_0xc7636a(501)], _0x1b0560), document[_0xc7636a(527) + _0xc7636a(608)](_0x116945[_0xc7636a(461)])[_0xc7636a(538)][_0xc7636a(500)] = _0x116945[_0xc7636a(645)], document[_0xc7636a(527) + _0xc7636a(608)](_0x116945[_0xc7636a(427)])[_0xc7636a(538)][_0xc7636a(500)] = _0x116945[_0xc7636a(645)];
  }
}
function renderChannels(_0x2ca6aa) {
  const _0x240ab7 = _0x25b3fd, _0x2215fc = {KNcdL: _0x240ab7(528) + "ms", Ytvwy: _0x240ab7(448) + "st", nlBvO: _0x240ab7(421)}, _0x9d1d88 = document[_0x240ab7(527) + _0x240ab7(608)](_0x2215fc[_0x240ab7(619)]);
  _0x9d1d88[_0x240ab7(578)] = "", _0x2ca6aa[_0x240ab7(503)](_0x1b3e39 => {
    const _0x5da28a = _0x240ab7, _0x5a478b = document[_0x5da28a(628) + _0x5da28a(367)]("li");
    _0x5a478b[_0x5da28a(578)] = _0x5da28a(678) + _0x5da28a(472) + _0x5da28a(618) + _0x5da28a(453) + _0x5da28a(685) + "'" + _0x1b3e39[_0x5da28a(487) + _0x5da28a(450)][0] + _0x5da28a(492) + _0x1b3e39[_0x5da28a(664)] + (_0x5da28a(362) + _0x5da28a(472) + _0x5da28a(511)), _0x9d1d88[_0x5da28a(429) + "d"](_0x5a478b);
  }), document[_0x240ab7(527) + _0x240ab7(608)](_0x2215fc[_0x240ab7(674)])[_0x240ab7(538)][_0x240ab7(500)] = _0x2215fc[_0x240ab7(688)];
}
function playChannel(_0x5be7cf) {
  const _0x5570cf = _0x25b3fd, _0x3b3f6a = {LSfvV: function (_0xee2c5c, _0x29b480) {
    return _0xee2c5c(_0x29b480);
  }, azotY: _0x5570cf(428) + _0x5570cf(513), whVrL: _0x5570cf(560), vzdQX: _0x5570cf(703), alhHz: _0x5570cf(482), KLZqI: _0x5570cf(652)};
  _0x3b3f6a[_0x5570cf(568)](jwplayer, _0x3b3f6a[_0x5570cf(444)])[_0x5570cf(646)]({file: _0x5be7cf, width: _0x3b3f6a[_0x5570cf(531)], aspectratio: _0x3b3f6a[_0x5570cf(370)], image: " "}), document[_0x5570cf(527) + _0x5570cf(608)](_0x3b3f6a[_0x5570cf(444)])[_0x5570cf(463) + _0x5570cf(374)]({behavior: _0x3b3f6a[_0x5570cf(483)], block: _0x3b3f6a[_0x5570cf(439)]});
}
function renderServerMenu(_0xd7eca4) {
  const _0x4cc764 = _0x25b3fd, _0x5eff98 = {hWZiL: _0x4cc764(397), kwjhM: _0x4cc764(698), ahdnf: _0x4cc764(421)}, _0xe51c3b = document[_0x4cc764(527) + _0x4cc764(608)](_0x5eff98[_0x4cc764(456)]);
  _0xe51c3b[_0x4cc764(578)] = "";
  let _0x3696bb = 1;
  _0xd7eca4[_0x4cc764(503)]((_0x2fb9ad, _0x1bdaa9) => {
    const _0x299145 = _0x4cc764;
    _0x2fb9ad[_0x299145(487) + _0x299145(450)][_0x299145(503)]((_0x2b2fb1, _0x56a418) => {
      const _0x4edfd4 = _0x299145, _0x1f44f4 = document[_0x4edfd4(628) + _0x4edfd4(367)](_0x5eff98[_0x4edfd4(658)]);
      _0x1f44f4[_0x4edfd4(578)] = _0x4edfd4(643) + _0x4edfd4(667) + _0x4edfd4(399) + _0x4edfd4(423) + _0x3696bb, _0x1f44f4[_0x4edfd4(493)] = () => playChannel(_0x2b2fb1), _0xe51c3b[_0x4edfd4(429) + "d"](_0x1f44f4), _0x3696bb++;
    });
  }), document[_0x4cc764(527) + _0x4cc764(608)](_0x5eff98[_0x4cc764(456)])[_0x4cc764(538)][_0x4cc764(500)] = _0x5eff98[_0x4cc764(592)];
}
function populateFilters(_0x2723c3) {
  const _0x5c2b64 = _0x25b3fd, _0x14a8ad = {oFGyc: _0x5c2b64(443), yzaCy: function (_0x50be77, _0x37d17a) {
    return _0x50be77(_0x37d17a);
  }, suKni: _0x5c2b64(372), tpyJU: _0x5c2b64(611) + "er", tGfTn: _0x5c2b64(445) + _0x5c2b64(600) + _0x5c2b64(354) + _0x5c2b64(442), ugrjx: _0x5c2b64(445) + _0x5c2b64(600) + _0x5c2b64(585) + _0x5c2b64(434) + "n>"}, _0x5c1c96 = document[_0x5c2b64(527) + _0x5c2b64(608)](_0x14a8ad[_0x5c2b64(420)]), _0x448eb6 = document[_0x5c2b64(527) + _0x5c2b64(608)](_0x14a8ad[_0x5c2b64(462)]);
  _0x5c1c96[_0x5c2b64(578)] = _0x14a8ad[_0x5c2b64(494)], _0x448eb6[_0x5c2b64(578)] = _0x14a8ad[_0x5c2b64(469)];
  const _0x377423 = [...new Set(_0x2723c3[_0x5c2b64(687)](_0x5faed => _0x5faed[_0x5c2b64(565)]))], _0x12a796 = [...new Set(_0x2723c3[_0x5c2b64(687)](_0x1606ee => _0x1606ee[_0x5c2b64(639)]))];
  _0x377423[_0x5c2b64(503)](_0x93c81c => {
    const _0x1237da = _0x5c2b64, _0x39117c = document[_0x1237da(628) + _0x1237da(367)](_0x14a8ad[_0x1237da(682)]);
    _0x39117c[_0x1237da(566)] = _0x93c81c[_0x1237da(373) + "e"](), _0x39117c[_0x1237da(672) + "t"] = _0x14a8ad[_0x1237da(424)](formatDate, _0x93c81c), _0x5c1c96[_0x1237da(429) + "d"](_0x39117c);
  }), _0x12a796[_0x5c2b64(503)](_0x4d5971 => {
    const _0x34eebd = _0x5c2b64, _0x5e3f02 = document[_0x34eebd(628) + _0x34eebd(367)](_0x14a8ad[_0x34eebd(682)]);
    _0x5e3f02[_0x34eebd(566)] = _0x4d5971[_0x34eebd(373) + "e"](), _0x5e3f02[_0x34eebd(672) + "t"] = _0x4d5971, _0x448eb6[_0x34eebd(429) + "d"](_0x5e3f02);
  });
}
function _0x5163() {
  const _0x3397b3 = ["vlkbY", "RyElM", "YBsoK", "November", "XLpbp", "fOivW", "WsDzR", "wlDgu", "haxUf", " <div clas", 'i class="f', "IiKge", "/sendMessa", 'nfo">\n    ', "portlive.b", "atchId=", "qNlKG", "as fa-cale", "MSZAL", "load live ", "ter by Dat", "1241372OybzMM", "  <span cl", "bfZBF", "card", "\nLink: htt", "Notificati", "&text=", "</button>\n", "ps://zonas", 's="watch-b', "iXAQx", "        <b", "ent", "/i> Watch\n", "data-statu", "vzdQX", "         <", "dateFilter", "toLowerCas", "View", "[data-time", "all", "loader", "getTime", "has", "getAttribu", "sponse was", "Match('", "CEDnh", "orUZT", "la.github.", "onscroll", "</i> ", "September", " 🚨\nDate: ", "documentEl", "rtakita.gi", "ZKgua", "setAttribu", "HYipG", 'r"></i> Li', "scrollToTo", "button", "data-teams", 'ver"></i> ', "10SjbMGC", "XeMYt", "October", "OmKLg", " </div>\n  ", "videoId", "1690OnPafh", "yiZEC", "querySelec", "teams", "bNKvj", "log", "scheduleCo", "sLdHD", 'sers"></i>', "PpswO", " Soon...</", "reuJl", "className", "23795c", "suKni", "block", "WQcTQ", "Server ", "yzaCy", "KhtAh", "Loaded", "lHdnw", "jwplayerCo", "appendChil", "apply", "SsNVy", "GET", "HOsWY", "gue</optio", "XNLFv", 's="live"><', "EcGNn", "DOMContent", "KLZqI", "xVqVb", 'utton" onc', "e</option>", "option", "azotY", "<option va", "getMonth", '="fas fa-u', "channelsLi", "ication:", "urls", "82768QkvIyR", "jMENR", 'nclick="pl', "7hrZZGM", "addEventLi", "kwjhM", "dcast-towe", "ailed", 'ndar-alt">', "AgZXR", "DNANI", "tpyJU", "scrollInto", "torAll", "sort", "February", " | ", "classList", "ugrjx", "May", "span>", "          ", ":AAGG4SAfi", "QgJRk", "on sent su", 'ls"><i cla', "catch", "data-timer", "<span clas", "send notif", "channels?m", "smooth", "alhHz", "gAPth", "data-date", "fetch live", "streaming_", 's="match-i', "UpGHT", "PyXjQ", "KgrCz", "')\">", "onclick", "tGfTn", "SCLSW", "kTTMa", "i.telegram", "uPRtF", "eoQEv", "display", "bAZfr", "rVDVQ", "forEach", 's="countdo', "December", "HLJBs", 'ss="fas fa', "119518yijbbE", "kLJpd", "atchId ", "      ", "IOevz", "ntainer", "m3u8Url", "Srolm", "https://ap", "teamSearch", "Failed to ", "bheaF", "234LZNHrl", "XcjqR", "utton clas", "DuctM", "lQHjf", "April", "FjecD", "getElement", "channelIte", 'ass="teams', "eriid", "whVrL", "NBWpf", "ve Now</sp", "January", "PBkdP", "dsYha", '"><i class', "style", "EquVU", "qeQEF", "BqwoE", "zvc2_I5WDk", "lcyDn", "remove", "Rakrv", "finally", "URL:", "getDate", "GBFJh", "', '", "includes", "HLYOm", "time", "7598004626", "status", "ipRsG", "ABZds", "ing notifi", "filter", "100%", "ohyoq", "e.json", "FZOKK", "input", "date", "value", "rlTWp", "LSfvV", "QXRJA", "cvjnp", "div", 'wn" data-t', "i.90min.to", "TkSkZ", "GhrMs", "gZrVt", "from", "innerHTML", "as fa-play", '-clock"></', "urcZU", "MQIUH", "show", "🚨 Live Now", "ter by Lea", "Live URL f", "July", "then", "cation:", "1391979650", "json", "ahdnf", "wAPsD", "change", '">Starting', 'lick="play', ".org/bot", "</span>\n  ", "August", 'lue="">Fil', "as fa-broa", "liveUrl", "result", "data-leagu", "scrollTop", "flex", "ement", "ById", "\nTime: ", "GbwOU", "leagueFilt", "BteAe", "VUKya", "body", "iZ76AHaEWo", "jCBPf", "NdlHE", " <button o", "KNcdL", "vARvr", "WluKf", "SOduN", "i> ", "floor", "schedule-c", "8626887NLiyPV", "AwssV", "createElem", "IdZEC", '-circle"><', "oRDiC", "March", "ge?chat_id", "')\">\n     ", "https://wa", "QQZcQ", "io/schedul", "XyWoc", "league", "rrNqM", "1066356fJPquv", 'imer="', '<i class="', "logspot.co", "SKGqS", "setup", "pButton", "HcWTd", "load match", "noMatches", "TjYlv", "start", "RszJN", "nXnjZ", "EfKts", "/v1/match/", "KmfNk", "hWZiL", "BtYaT", "add", "getFullYea", "es:", "pTffr", "name", "thyba", "Network re", "fas fa-ser", "stener", "wyRMu", "els:", "3976384NrquvR", "textConten", "bSUhT", "Ytvwy", "ehSPz", "none", "ccessfully", "\n         ", "live", "load chann", "ard", "oFGyc", "39MvIDZJ", "upcoming", "ayChannel(", "eSHHW", "map", "nlBvO", "JcpdL", " not ok", "Error send", "gMouM", "an>", "June", "QMYmU", "thub.io/bo", "UBiUI", "serverMenu", "\nLeague: ", ".schedule-", 'ass="detai', " URL for m", "16:9", "QZnJm", 's="date"><', "kXGzm", "error", "length", "mtFMJ", "hGqCp", "IIhut"];
  _0x5163 = function () {
    return _0x3397b3;
  };
  return _0x5163();
}
function filterMatches() {
  const _0xa4317e = _0x25b3fd, _0x14b114 = {UBiUI: _0xa4317e(485), reuJl: _0xa4317e(604) + "e", SsNVy: _0xa4317e(398), orUZT: function (_0x37cef6, _0x5bff99) {
    return _0x37cef6 === _0x5bff99;
  }, TkSkZ: function (_0xb7431, _0x212d43) {
    return _0xb7431 === _0x212d43;
  }, KhtAh: function (_0x2a389e, _0x98e82b) {
    return _0x2a389e && _0x98e82b;
  }, HLYOm: _0xa4317e(369) + "s", iXAQx: _0xa4317e(679), bNKvj: function (_0x203978, _0x3f425e) {
    return _0x203978 !== _0x3f425e;
  }, jCBPf: function (_0x1f3eca, _0x331a67) {
    return _0x1f3eca !== _0x331a67;
  }, wyRMu: _0xa4317e(606), GhrMs: _0xa4317e(372), bheaF: _0xa4317e(611) + "er", XeMYt: _0xa4317e(517), cvjnp: _0xa4317e(700) + _0xa4317e(358), EfKts: _0xa4317e(650), HLJBs: _0xa4317e(583)}, _0x4a2141 = document[_0xa4317e(527) + _0xa4317e(608)](_0x14b114[_0xa4317e(575)])[_0xa4317e(566)][_0xa4317e(373) + "e"](), _0x20de6c = document[_0xa4317e(527) + _0xa4317e(608)](_0x14b114[_0xa4317e(519)])[_0xa4317e(566)][_0xa4317e(373) + "e"](), _0x5089d2 = document[_0xa4317e(527) + _0xa4317e(608)](_0x14b114[_0xa4317e(401)])[_0xa4317e(566)][_0xa4317e(373) + "e"](), _0x292e72 = document[_0xa4317e(408) + _0xa4317e(464)](_0x14b114[_0xa4317e(570)]);
  let _0x2220ac = 0;
  const _0x4f9338 = Array[_0xa4317e(577)](_0x292e72)[_0xa4317e(559)](_0x47981e => {
    const _0x57e04e = _0xa4317e, _0x248162 = _0x47981e[_0x57e04e(380) + "te"](_0x14b114[_0x57e04e(697)]), _0x362bac = _0x47981e[_0x57e04e(380) + "te"](_0x14b114[_0x57e04e(417)]), _0xf56c8 = _0x47981e[_0x57e04e(380) + "te"](_0x14b114[_0x57e04e(431)]), _0x1a2fae = !_0x4a2141 || _0x14b114[_0x57e04e(384)](_0x248162, _0x4a2141), _0x58a9cc = !_0x20de6c || _0x14b114[_0x57e04e(574)](_0x362bac, _0x20de6c), _0x25260f = !_0x5089d2 || _0xf56c8[_0x57e04e(551)](_0x5089d2);
    return _0x14b114[_0x57e04e(425)](_0x1a2fae, _0x58a9cc) && _0x25260f;
  })[_0xa4317e(465)]((_0x1a456c, _0x283b0d) => {
    const _0x52e9ba = _0xa4317e, _0x1bfb99 = _0x1a456c[_0x52e9ba(380) + "te"](_0x14b114[_0x52e9ba(552)]), _0x11557e = _0x283b0d[_0x52e9ba(380) + "te"](_0x14b114[_0x52e9ba(552)]);
    if (_0x14b114[_0x52e9ba(384)](_0x1bfb99, _0x14b114[_0x52e9ba(365)]) && _0x14b114[_0x52e9ba(410)](_0x11557e, _0x14b114[_0x52e9ba(365)])) return -1;
    if (_0x14b114[_0x52e9ba(616)](_0x1bfb99, _0x14b114[_0x52e9ba(365)]) && _0x14b114[_0x52e9ba(574)](_0x11557e, _0x14b114[_0x52e9ba(365)])) return 1;
    return 0;
  });
  _0x292e72[_0xa4317e(503)](_0xaeef21 => _0xaeef21[_0xa4317e(538)][_0xa4317e(500)] = _0xa4317e(676)), _0x4f9338[_0xa4317e(503)](_0x53cfe6 => {
    const _0xc9520b = _0xa4317e;
    _0x53cfe6[_0xc9520b(538)][_0xc9520b(500)] = _0x14b114[_0xc9520b(669)], _0x2220ac++;
  });
  const _0x1c4393 = document[_0xa4317e(527) + _0xa4317e(608)](_0x14b114[_0xa4317e(655)]);
  _0x14b114[_0xa4317e(384)](_0x2220ac, 0) ? _0x1c4393[_0xa4317e(468)][_0xa4317e(660)](_0x14b114[_0xa4317e(506)]) : _0x1c4393[_0xa4317e(468)][_0xa4317e(544)](_0x14b114[_0xa4317e(506)]);
}
function _0x3290(_0x5676b3, _0x1dd778) {
  const _0x1a5605 = _0x5163();
  return _0x3290 = function (_0x3da760, _0x2b96c3) {
    _0x3da760 = _0x3da760 - 328;
    let _0x4f3172 = _0x1a5605[_0x3da760];
    return _0x4f3172;
  }, _0x3290(_0x5676b3, _0x1dd778);
}
function resetFilters() {
  const _0x2282f6 = _0x25b3fd, _0x431df8 = {OmKLg: _0x2282f6(372), GbwOU: _0x2282f6(611) + "er", eriid: _0x2282f6(517), kXGzm: function (_0x1aae2a) {
    return _0x1aae2a();
  }};
  document[_0x2282f6(527) + _0x2282f6(608)](_0x431df8[_0x2282f6(403)])[_0x2282f6(566)] = "", document[_0x2282f6(527) + _0x2282f6(608)](_0x431df8[_0x2282f6(610)])[_0x2282f6(566)] = "", document[_0x2282f6(527) + _0x2282f6(608)](_0x431df8[_0x2282f6(530)])[_0x2282f6(566)] = "", _0x431df8[_0x2282f6(328)](filterMatches);
}
function debounce(_0x283107, _0x1e5c9e) {
  const _0x47cb5e = {BtYaT: function (_0x553826, _0x24c454) {
    return _0x553826(_0x24c454);
  }, XNLFv: function (_0x4f7191, _0x185b4e, _0x35dfe7) {
    return _0x4f7191(_0x185b4e, _0x35dfe7);
  }};
  let _0x17d6e3;
  return function (..._0xb6b50b) {
    const _0x1516c3 = _0x3290;
    _0x47cb5e[_0x1516c3(659)](clearTimeout, _0x17d6e3), _0x17d6e3 = _0x47cb5e[_0x1516c3(435)](setTimeout, () => _0x283107[_0x1516c3(430)](this, _0xb6b50b), _0x1e5c9e);
  };
}
document[_0x25b3fd(527) + _0x25b3fd(608)](_0x25b3fd(517))[_0x25b3fd(455) + _0x25b3fd(668)](_0x25b3fd(564), debounce(filterMatches, 300)), document[_0x25b3fd(527) + _0x25b3fd(608)](_0x25b3fd(372))[_0x25b3fd(455) + _0x25b3fd(668)](_0x25b3fd(594), filterMatches), document[_0x25b3fd(527) + _0x25b3fd(608)](_0x25b3fd(611) + "er")[_0x25b3fd(455) + _0x25b3fd(668)](_0x25b3fd(594), filterMatches), document[_0x25b3fd(455) + _0x25b3fd(668)](_0x25b3fd(438) + _0x25b3fd(426), loadMatches), window[_0x25b3fd(386)] = function () {
  const _0x2d516f = _0x25b3fd, _0x4ff86f = {dsYha: function (_0x35176e) {
    return _0x35176e();
  }};
  _0x4ff86f[_0x2d516f(536)](scrollFunction);
};
function scrollFunction() {
  const _0x48ec5e = _0x25b3fd, _0x5670c9 = {kLJpd: function (_0xaa10b1, _0x585ddd) {
    return _0xaa10b1 > _0x585ddd;
  }, haxUf: _0x48ec5e(396) + _0x48ec5e(647), gZrVt: _0x48ec5e(421), QQZcQ: _0x48ec5e(676)};
  _0x5670c9[_0x48ec5e(509)](document[_0x48ec5e(614)][_0x48ec5e(605)], 20) || _0x5670c9[_0x48ec5e(509)](document[_0x48ec5e(390) + _0x48ec5e(607)][_0x48ec5e(605)], 20) ? document[_0x48ec5e(527) + _0x48ec5e(608)](_0x5670c9[_0x48ec5e(342)])[_0x48ec5e(538)][_0x48ec5e(500)] = _0x5670c9[_0x48ec5e(576)] : document[_0x48ec5e(527) + _0x48ec5e(608)](_0x5670c9[_0x48ec5e(342)])[_0x48ec5e(538)][_0x48ec5e(500)] = _0x5670c9[_0x48ec5e(636)];
}
function scrollToTop() {
  const _0x1a961d = _0x25b3fd;
  document[_0x1a961d(614)][_0x1a961d(605)] = 0, document[_0x1a961d(390) + _0x1a961d(607)][_0x1a961d(605)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x151fb4) {
  const _0x58410c = _0x25b3fd, _0x4293b1 = {sLdHD: _0x58410c(360) + _0x58410c(475) + _0x58410c(677), XyWoc: _0x58410c(518) + _0x58410c(480) + _0x58410c(449), ipRsG: _0x58410c(691) + _0x58410c(558) + _0x58410c(589), pTffr: function (_0x129956, _0x36c2ea) {
    return _0x129956(_0x36c2ea);
  }, Srolm: function (_0x2bded7, _0xbba9f1, _0x418500) {
    return _0x2bded7(_0xbba9f1, _0x418500);
  }, XcjqR: _0x58410c(432)}, _0x3f6592 = _0x58410c(584) + ": " + _0x151fb4[_0x58410c(409)] + _0x58410c(389) + _0x4293b1[_0x58410c(663)](formatDate, _0x151fb4[_0x58410c(565)]) + _0x58410c(609) + _0x151fb4[_0x58410c(553)] + _0x58410c(699) + _0x151fb4[_0x58410c(639)] + (_0x58410c(359) + _0x58410c(363) + _0x58410c(348) + _0x58410c(644) + "m/"), _0x38c783 = _0x58410c(516) + _0x58410c(497) + _0x58410c(597) + telegramBotToken + (_0x58410c(346) + _0x58410c(633) + "=") + telegramChatId + _0x58410c(361) + _0x4293b1[_0x58410c(663)](encodeURIComponent, _0x3f6592);
  _0x4293b1[_0x58410c(515)](fetch, _0x38c783, {method: _0x4293b1[_0x58410c(521)]})[_0x58410c(588)](_0x411819 => _0x411819[_0x58410c(591)]())[_0x58410c(588)](_0x3caade => {
    const _0x2e6ccc = _0x58410c;
    _0x3caade.ok ? console[_0x2e6ccc(411)](_0x4293b1[_0x2e6ccc(413)]) : console[_0x2e6ccc(329)](_0x4293b1[_0x2e6ccc(638)], _0x3caade);
  })[_0x58410c(477)](_0x4feebb => {
    const _0x64c497 = _0x58410c;
    console[_0x64c497(329)](_0x4293b1[_0x64c497(556)], _0x4feebb);
  });
}
