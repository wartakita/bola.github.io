const _0x365475 = _0x1d51;
(function (_0x441490, _0x4d9914) {
  const _0x4e6db2 = _0x1d51, _0x523c8e = _0x441490();
  while (true) {
    try {
      const _0x526f72 = parseInt(_0x4e6db2(564)) / 1 * (parseInt(_0x4e6db2(422)) / 2) + -parseInt(_0x4e6db2(550)) / 3 * (parseInt(_0x4e6db2(431)) / 4) + parseInt(_0x4e6db2(398)) / 5 * (-parseInt(_0x4e6db2(338)) / 6) + -parseInt(_0x4e6db2(456)) / 7 + -parseInt(_0x4e6db2(541)) / 8 + parseInt(_0x4e6db2(654)) / 9 + parseInt(_0x4e6db2(567)) / 10;
      if (_0x526f72 === _0x4d9914) break; else _0x523c8e.push(_0x523c8e.shift());
    } catch (_0x264065) {
      _0x523c8e.push(_0x523c8e.shift());
    }
  }
}(_0x5efb, 571897));
const telegramBotToken = _0x365475(613) + _0x365475(697) + _0x365475(525) + _0x365475(660) + _0x365475(508), telegramChatId = _0x365475(494), sentNotifications = new Set(JSON[_0x365475(559)](localStorage[_0x365475(552)](_0x365475(523) + _0x365475(310))) || []);
function saveSentNotifications() {
  const _0x24c548 = _0x365475, _0x3fa36e = {xrKxe: _0x24c548(523) + _0x24c548(310)};
  localStorage[_0x24c548(606)](_0x3fa36e[_0x24c548(305)], JSON[_0x24c548(468)](Array[_0x24c548(439)](sentNotifications)));
}
function formatDate(_0x10b4a8) {
  const _0x5abbcd = _0x365475, _0x2d3e3d = {rPLkO: _0x5abbcd(611), gFnln: _0x5abbcd(318), vxoSs: _0x5abbcd(561), byxHZ: _0x5abbcd(466), MDsao: _0x5abbcd(427), sqMXV: _0x5abbcd(331), WhBrW: _0x5abbcd(693), JsMwN: _0x5abbcd(499), bqdlo: _0x5abbcd(315), kNOPv: _0x5abbcd(696), HKOOl: _0x5abbcd(610), XGzBe: _0x5abbcd(307)}, _0x989d06 = [_0x2d3e3d[_0x5abbcd(598)], _0x2d3e3d[_0x5abbcd(312)], _0x2d3e3d[_0x5abbcd(505)], _0x2d3e3d[_0x5abbcd(394)], _0x2d3e3d[_0x5abbcd(481)], _0x2d3e3d[_0x5abbcd(621)], _0x2d3e3d[_0x5abbcd(618)], _0x2d3e3d[_0x5abbcd(669)], _0x2d3e3d[_0x5abbcd(359)], _0x2d3e3d[_0x5abbcd(554)], _0x2d3e3d[_0x5abbcd(401)], _0x2d3e3d[_0x5abbcd(379)]], _0x194ac5 = new Date(_0x10b4a8), _0x4e6044 = _0x194ac5[_0x5abbcd(709)](), _0x5d5dc3 = _0x989d06[_0x194ac5[_0x5abbcd(687)]()], _0xba8f59 = _0x194ac5[_0x5abbcd(715) + "r"]();
  return _0x4e6044 + " " + _0x5d5dc3 + " " + _0xba8f59;
}
async function loadMatches() {
  const _0x2a443f = _0x365475, _0x4a9c62 = {gUIsD: _0x2a443f(543), MwLHq: _0x2a443f(327), rwLzR: function (_0x25eb02) {
    return _0x25eb02();
  }, ZGlAc: function (_0x31739f, _0x117148) {
    return _0x31739f(_0x117148);
  }, kmDqI: function (_0x4e0723, _0x2eb350) {
    return _0x4e0723(_0x2eb350);
  }, sgJde: function (_0x412527) {
    return _0x412527();
  }, DmHAr: function (_0x30e353) {
    return _0x30e353();
  }, uoOcj: function (_0x262fbe, _0x1ebfc5, _0x18f431) {
    return _0x262fbe(_0x1ebfc5, _0x18f431);
  }, mlQvM: _0x2a443f(637) + _0x2a443f(303) + _0x2a443f(355), nIkQh: _0x2a443f(343), rjfRG: _0x2a443f(688), JmpvY: _0x2a443f(442)};
  try {
    document[_0x2a443f(577) + _0x2a443f(375)](_0x4a9c62[_0x2a443f(384)])[_0x2a443f(718)][_0x2a443f(667)] = _0x4a9c62[_0x2a443f(433)];
    const _0x4735af = await _0x4a9c62[_0x2a443f(640)](fetchMatches);
    _0x4a9c62[_0x2a443f(348)](renderMatches, _0x4735af), _0x4a9c62[_0x2a443f(472)](populateFilters, _0x4735af), _0x4a9c62[_0x2a443f(356)](filterMatches), _0x4a9c62[_0x2a443f(616)](updateCountdown), _0x4a9c62[_0x2a443f(332)](setInterval, updateCountdown, 1e3);
  } catch (_0x2a9b15) {
    console[_0x2a443f(392)](_0x4a9c62[_0x2a443f(479)], _0x2a9b15), document[_0x2a443f(577) + _0x2a443f(375)](_0x4a9c62[_0x2a443f(469)])[_0x2a443f(349)][_0x2a443f(706)](_0x4a9c62[_0x2a443f(507)]);
  } finally {
    document[_0x2a443f(577) + _0x2a443f(375)](_0x4a9c62[_0x2a443f(384)])[_0x2a443f(718)][_0x2a443f(667)] = _0x4a9c62[_0x2a443f(545)];
  }
}
async function fetchMatches() {
  const _0x753bf9 = _0x365475, _0x2a738f = {nylic: function (_0x3b726f, _0x2c1579) {
    return _0x3b726f(_0x2c1579);
  }, EHpkc: _0x753bf9(670) + _0x753bf9(387) + _0x753bf9(395) + _0x753bf9(533) + _0x753bf9(651) + _0x753bf9(448), dKeMY: _0x753bf9(542) + _0x753bf9(686) + _0x753bf9(615)}, _0x4d1359 = await _0x2a738f[_0x753bf9(306)](fetch, _0x2a738f[_0x753bf9(605)]);
  if (!_0x4d1359.ok) throw new Error(_0x2a738f[_0x753bf9(389)]);
  const _0x24d7b6 = await _0x4d1359[_0x753bf9(574)](), _0x497813 = await _0x2a738f[_0x753bf9(306)](fetchLiveUrls, _0x24d7b6);
  return _0x24d7b6[_0x753bf9(517)](_0x1fdc77 => {
    const _0x29ddee = _0x753bf9;
    _0x1fdc77[_0x29ddee(502)] = _0x497813[_0x1fdc77[_0x29ddee(536)]] || _0x1fdc77[_0x29ddee(321)] || _0x1fdc77[_0x29ddee(319)];
  }), _0x24d7b6;
}
async function fetchLiveUrls(_0x195095) {
  const _0x21e5d3 = _0x365475, _0xc0b97e = {XIYDg: function (_0x5d947e, _0x23be7f) {
    return _0x5d947e(_0x23be7f);
  }, LValN: function (_0x38e39b, _0x168a00) {
    return _0x38e39b > _0x168a00;
  }, OcNEv: function (_0x4e4318, _0xd14aff) {
    return _0x4e4318 === _0xd14aff;
  }, YDFBY: _0x21e5d3(455)}, _0x4a180c = _0x195095[_0x21e5d3(596)](_0x581312 => _0x581312[_0x21e5d3(536)]), _0x3b3935 = {}, _0x2842a7 = _0x4a180c[_0x21e5d3(596)](async _0x453e74 => {
    const _0x44a38c = _0x21e5d3;
    try {
      const _0x28f560 = await _0xc0b97e[_0x44a38c(537)](fetch, _0x44a38c(458) + _0x44a38c(408) + _0x44a38c(583) + _0x44a38c(699) + _0x44a38c(363) + _0x453e74);
      if (_0x28f560.ok) {
        const _0x54e1fe = await _0x28f560[_0x44a38c(574)]();
        _0x54e1fe[_0x44a38c(705)] && _0xc0b97e[_0x44a38c(354)](_0x54e1fe[_0x44a38c(491)][_0x44a38c(726)], 0) && (_0x3b3935[_0x453e74] = _0x54e1fe[_0x44a38c(491)][0][_0x44a38c(658) + _0x44a38c(704)][0]);
      }
    } catch (_0x4e48e0) {
      console[_0x44a38c(392)](_0x44a38c(637) + _0x44a38c(676) + _0x44a38c(626) + _0x44a38c(322) + _0x453e74 + ":", _0x4e48e0);
    }
    try {
      const _0x4129bc = await _0xc0b97e[_0x44a38c(537)](fetch, _0x44a38c(336) + _0x44a38c(400) + _0x44a38c(482) + _0x44a38c(435) + _0x44a38c(364) + _0x44a38c(690) + _0x453e74);
      if (_0x4129bc.ok) {
        const _0x57ca5c = await _0x4129bc[_0x44a38c(574)]();
        _0xc0b97e[_0x44a38c(309)](_0x57ca5c[_0x44a38c(366)], _0xc0b97e[_0x44a38c(357)]) && _0x57ca5c[_0x44a38c(480)][_0x44a38c(491)][_0x44a38c(631)][_0x44a38c(369)] && (_0x3b3935[_0x453e74] = _0x57ca5c[_0x44a38c(480)][_0x44a38c(491)][_0x44a38c(631)][_0x44a38c(369)]);
      }
    } catch (_0x388e2f) {
      console[_0x44a38c(392)](_0x44a38c(637) + _0x44a38c(721) + _0x44a38c(340) + _0x44a38c(322) + _0x453e74 + ":", _0x388e2f);
    }
  });
  return await Promise[_0x21e5d3(426)](_0x2842a7), _0x3b3935;
}
function renderMatches(_0x4d02e8) {
  const _0x45857e = _0x365475, _0x1e0a0f = {UlijK: function (_0x1f1c9e, _0x721dfb) {
    return _0x1f1c9e >= _0x721dfb;
  }, Fbhqg: function (_0x7a2e7e, _0x253ce3) {
    return _0x7a2e7e <= _0x253ce3;
  }, NKntU: function (_0x5a0f10, _0x55568f) {
    return _0x5a0f10 + _0x55568f;
  }, NUUYr: function (_0x364812, _0x40b91c) {
    return _0x364812 * _0x40b91c;
  }, LaPmB: function (_0x2b036a, _0x5db995) {
    return _0x2b036a * _0x5db995;
  }, wWmhm: function (_0x75441, _0x3719cc) {
    return _0x75441 * _0x3719cc;
  }, YCjht: function (_0x3926c3, _0x864525) {
    return _0x3926c3 >= _0x864525;
  }, Kyaua: function (_0x336ed4, _0x39c537) {
    return _0x336ed4 + _0x39c537;
  }, RcpIm: function (_0x50425e, _0x5f4492) {
    return _0x50425e * _0x5f4492;
  }, ZBwYZ: function (_0x5f22e8, _0x3ad145) {
    return _0x5f22e8 && _0x3ad145;
  }, AmdZI: function (_0x1887bb, _0x148b36) {
    return _0x1887bb && _0x148b36;
  }, gyBbC: function (_0xf297a0, _0x4e0d40) {
    return _0xf297a0 >= _0x4e0d40;
  }, Ajsmu: function (_0x3a29bf, _0x4cef2c) {
    return _0x3a29bf * _0x4cef2c;
  }, AoHxo: _0x45857e(380), FFkMb: _0x45857e(367) + _0x45857e(539), eJnKs: _0x45857e(632), IGERS: _0x45857e(528) + "e", LUhwU: _0x45857e(475), bMVrM: _0x45857e(622) + "s", fuxke: _0x45857e(698), cHWzJ: _0x45857e(386), PVfoZ: function (_0x1209c7, _0xc6b203) {
    return _0x1209c7(_0xc6b203);
  }, ntnXk: _0x45857e(594) + _0x45857e(381) + _0x45857e(514) + _0x45857e(580) + _0x45857e(668) + _0x45857e(393) + _0x45857e(712) + _0x45857e(677), bRuos: function (_0x5f5476, _0xc7ece1) {
    return _0x5f5476(_0xc7ece1);
  }, EXMCp: function (_0x26217f) {
    return _0x26217f();
  }, BUoJU: _0x45857e(683) + _0x45857e(558)}, _0x20e711 = document[_0x45857e(577) + _0x45857e(375)](_0x1e0a0f[_0x45857e(459)]);
  _0x20e711[_0x45857e(509)] = "", _0x4d02e8[_0x45857e(646)]((_0x1f92b5, _0x250b89) => {
    const _0x15b530 = _0x45857e, _0x2925b9 = new Date, _0x28ae24 = new Date(_0x1f92b5[_0x15b530(333)] + "T" + _0x1f92b5[_0x15b530(711)]), _0x5c81b9 = new Date(_0x250b89[_0x15b530(333)] + "T" + _0x250b89[_0x15b530(711)]), _0x51145f = _0x1e0a0f[_0x15b530(582)](_0x2925b9, _0x28ae24) && _0x1e0a0f[_0x15b530(518)](_0x2925b9, new Date(_0x1e0a0f[_0x15b530(436)](_0x28ae24[_0x15b530(470)](), _0x1e0a0f[_0x15b530(590)](_0x1e0a0f[_0x15b530(416)](_0x1e0a0f[_0x15b530(579)](2, 60), 60), 1e3)))), _0x1aa669 = _0x1e0a0f[_0x15b530(535)](_0x2925b9, _0x5c81b9) && _0x1e0a0f[_0x15b530(518)](_0x2925b9, new Date(_0x1e0a0f[_0x15b530(328)](_0x5c81b9[_0x15b530(470)](), _0x1e0a0f[_0x15b530(590)](_0x1e0a0f[_0x15b530(414)](_0x1e0a0f[_0x15b530(579)](2, 60), 60), 1e3))));
    if (_0x1e0a0f[_0x15b530(566)](_0x51145f, !_0x1aa669)) return -1;
    if (_0x1e0a0f[_0x15b530(675)](!_0x51145f, _0x1aa669)) return 1;
    return 0;
  }), _0x4d02e8[_0x45857e(517)](_0xcba1d => {
    const _0x12dcf3 = _0x45857e, _0x4d269f = _0xcba1d[_0x12dcf3(502)] || _0xcba1d[_0x12dcf3(321)] || _0xcba1d[_0x12dcf3(319)], _0x149b95 = new Date, _0x54a24c = new Date(_0xcba1d[_0x12dcf3(333)] + "T" + _0xcba1d[_0x12dcf3(711)]), _0x2411ab = _0x1e0a0f[_0x12dcf3(609)](_0x149b95, _0x54a24c) && _0x1e0a0f[_0x12dcf3(518)](_0x149b95, new Date(_0x1e0a0f[_0x12dcf3(328)](_0x54a24c[_0x12dcf3(470)](), _0x1e0a0f[_0x12dcf3(385)](_0x1e0a0f[_0x12dcf3(414)](_0x1e0a0f[_0x12dcf3(385)](2, 60), 60), 1e3)))), _0x372721 = document[_0x12dcf3(330) + _0x12dcf3(486)](_0x1e0a0f[_0x12dcf3(655)]);
    _0x372721[_0x12dcf3(727)] = _0x1e0a0f[_0x12dcf3(630)], _0x372721[_0x12dcf3(551) + "te"](_0x1e0a0f[_0x12dcf3(728)], _0xcba1d[_0x12dcf3(333)][_0x12dcf3(692) + "e"]()), _0x372721[_0x12dcf3(551) + "te"](_0x1e0a0f[_0x12dcf3(681)], _0xcba1d[_0x12dcf3(720)][_0x12dcf3(692) + "e"]()), _0x372721[_0x12dcf3(551) + "te"](_0x1e0a0f[_0x12dcf3(495)], _0xcba1d[_0x12dcf3(623)][_0x12dcf3(692) + "e"]()), _0x372721[_0x12dcf3(551) + "te"](_0x1e0a0f[_0x12dcf3(663)], _0x2411ab ? _0x1e0a0f[_0x12dcf3(636)] : _0x1e0a0f[_0x12dcf3(299)]);
    const _0x5a3d40 = !_0x2411ab ? _0x12dcf3(594) + _0x12dcf3(490) + _0x12dcf3(723) + _0x12dcf3(449) + _0xcba1d[_0x12dcf3(333)] + "T" + _0xcba1d[_0x12dcf3(711)] + (_0x12dcf3(722) + _0x12dcf3(516) + _0x12dcf3(453)) : "";
    _0x372721[_0x12dcf3(509)] = _0x12dcf3(515) + _0x12dcf3(474) + _0x12dcf3(434) + _0x12dcf3(410) + _0x12dcf3(678) + _0x12dcf3(474) + _0x12dcf3(474) + _0x12dcf3(594) + _0x12dcf3(599) + _0x12dcf3(514) + _0x12dcf3(624) + _0x12dcf3(497) + _0x12dcf3(685) + _0x1e0a0f[_0x12dcf3(563)](formatDate, _0xcba1d[_0x12dcf3(333)]) + (_0x12dcf3(440) + _0x12dcf3(474) + _0x12dcf3(474) + _0x12dcf3(634) + _0x12dcf3(694) + _0x12dcf3(374) + _0x12dcf3(703) + _0x12dcf3(467) + " ") + _0xcba1d[_0x12dcf3(623)] + (_0x12dcf3(440) + _0x12dcf3(474) + _0x12dcf3(474) + _0x12dcf3(634) + _0x12dcf3(652) + _0x12dcf3(585) + _0x12dcf3(587) + _0x12dcf3(308) + _0x12dcf3(390)) + _0xcba1d[_0x12dcf3(711)] + _0x12dcf3(627) + _0xcba1d[_0x12dcf3(720)] + (_0x12dcf3(440) + _0x12dcf3(474) + _0x12dcf3(474) + "  ") + (_0x2411ab ? _0x1e0a0f[_0x12dcf3(521)] : _0x5a3d40) + (_0x12dcf3(515) + _0x12dcf3(474) + _0x12dcf3(570) + _0x12dcf3(474) + _0x12dcf3(534) + _0x12dcf3(471) + _0x12dcf3(544) + _0x12dcf3(313) + _0x12dcf3(391) + _0x12dcf3(339)) + _0xcba1d[_0x12dcf3(536)] + _0x12dcf3(591) + _0xcba1d[_0x12dcf3(502)] + _0x12dcf3(591) + _0xcba1d[_0x12dcf3(321)] + _0x12dcf3(591) + _0xcba1d[_0x12dcf3(319)] + _0x12dcf3(591) + _0xcba1d[_0x12dcf3(623)] + (_0x12dcf3(361) + _0x12dcf3(474) + _0x12dcf3(423) + _0x12dcf3(514) + _0x12dcf3(473) + _0x12dcf3(493) + _0x12dcf3(707) + _0x12dcf3(474) + _0x12dcf3(474) + _0x12dcf3(695) + _0x12dcf3(474) + _0x12dcf3(437)), _0x20e711[_0x12dcf3(460) + "d"](_0x372721), _0x2411ab && !sentNotifications[_0x12dcf3(500)](_0xcba1d[_0x12dcf3(536)]) && (_0x1e0a0f[_0x12dcf3(661)](sendTelegramNotification, _0xcba1d), sentNotifications[_0x12dcf3(706)](_0xcba1d[_0x12dcf3(536)]), _0x1e0a0f[_0x12dcf3(595)](saveSentNotifications));
  });
}
function updateCountdown() {
  const _0x14942f = _0x365475, _0x330b79 = {wlTGG: _0x14942f(625), KOFJs: function (_0x50b5db, _0x14d493) {
    return _0x50b5db - _0x14d493;
  }, BEXUM: function (_0x48db4c, _0x2d769a) {
    return _0x48db4c <= _0x2d769a;
  }, VOLeE: function (_0x22b7c6, _0x315358) {
    return _0x22b7c6 / _0x315358;
  }, PhBjg: function (_0x41606b, _0x397489) {
    return _0x41606b * _0x397489;
  }, isspQ: function (_0x2b810f, _0x58765b) {
    return _0x2b810f * _0x58765b;
  }, hQJUt: function (_0x1eaea6, _0x5c2cf3) {
    return _0x1eaea6 % _0x5c2cf3;
  }, TSFHn: function (_0x5328ea, _0x3ad532) {
    return _0x5328ea * _0x3ad532;
  }, OrQYo: function (_0x4115b8, _0x3f229d) {
    return _0x4115b8 * _0x3f229d;
  }, VaOwB: function (_0x3195d5, _0x5c31b2) {
    return _0x3195d5 * _0x5c31b2;
  }, ODwuj: function (_0x263f55, _0x31f48c) {
    return _0x263f55 / _0x31f48c;
  }, HZfUh: function (_0x2a96b7, _0x44cd96) {
    return _0x2a96b7 * _0x44cd96;
  }, cjFLr: _0x14942f(465) + "r]"}, _0xefc157 = document[_0x14942f(719) + _0x14942f(716)](_0x330b79[_0x14942f(659)]), _0x51d4e2 = new Date;
  _0xefc157[_0x14942f(517)](_0x204237 => {
    const _0xf5f98b = _0x14942f, _0x188459 = new Date(_0x204237[_0xf5f98b(489) + "te"](_0x330b79[_0xf5f98b(501)])), _0xbb65e3 = _0x330b79[_0xf5f98b(360)](_0x188459, _0x51d4e2);
    if (_0x330b79[_0xf5f98b(368)](_0xbb65e3, 0)) _0x204237[_0xf5f98b(648) + "t"] = ""; else {
      const _0x52ca5e = Math[_0xf5f98b(300)](_0x330b79[_0xf5f98b(520)](_0xbb65e3, _0x330b79[_0xf5f98b(352)](_0x330b79[_0xf5f98b(372)](1e3, 60), 60))), _0x215439 = Math[_0xf5f98b(300)](_0x330b79[_0xf5f98b(520)](_0x330b79[_0xf5f98b(382)](_0xbb65e3, _0x330b79[_0xf5f98b(397)](_0x330b79[_0xf5f98b(420)](1e3, 60), 60)), _0x330b79[_0xf5f98b(454)](1e3, 60))), _0x31c51d = Math[_0xf5f98b(300)](_0x330b79[_0xf5f98b(498)](_0x330b79[_0xf5f98b(382)](_0xbb65e3, _0x330b79[_0xf5f98b(450)](1e3, 60)), 1e3));
      _0x204237[_0xf5f98b(648) + "t"] = _0x52ca5e + "h " + _0x215439 + "m " + _0x31c51d + "s";
    }
  });
}
function playMatch(_0x59a651, _0x59c4bf, _0x28ceed, _0x5c61df, _0x4af339) {
  const _0x2f8192 = _0x365475, _0x42788b = {GeJSd: _0x2f8192(729) + _0x2f8192(581), hkIeN: _0x2f8192(637) + _0x2f8192(487) + _0x2f8192(325), HbbdB: function (_0x5d2965, _0x3b3ad8) {
    return _0x5d2965 || _0x3b3ad8;
  }, DJlSt: _0x2f8192(568) + _0x2f8192(558), FghPO: function (_0x9840f9, _0x43880c) {
    return _0x9840f9(_0x43880c);
  }, ZCpTV: _0x2f8192(311), JlOtw: _0x2f8192(476), LEjXj: _0x2f8192(608), XeWGA: _0x2f8192(538), tzNCk: _0x2f8192(522)};
  let _0x2f23da = _0x42788b[_0x2f8192(444)](_0x59c4bf, _0x28ceed) || _0x5c61df;
  _0x42788b[_0x2f8192(463)](fetch, _0x59c4bf)[_0x2f8192(362)](_0x2448ff => {
    const _0x5e6547 = _0x2f8192;
    if (!_0x2448ff.ok) throw new Error(_0x42788b[_0x5e6547(572)]);
    return _0x2448ff;
  })[_0x2f8192(684)](_0x5be776 => {
    const _0xc7285c = _0x2f8192;
    console[_0xc7285c(392)](_0x42788b[_0xc7285c(452)], _0x5be776), _0x2f23da = _0x42788b[_0xc7285c(444)](_0x28ceed, _0x5c61df);
  })[_0x2f8192(399)](() => {
    const _0x3ef04f = _0x2f8192;
    _0x5c61df ? document[_0x3ef04f(577) + _0x3ef04f(375)](_0x42788b[_0x3ef04f(601)])[_0x3ef04f(509)] = _0x3ef04f(417) + _0x3ef04f(413) + _0x5c61df + (_0x3ef04f(555) + _0x3ef04f(428) + _0x3ef04f(713) + _0x3ef04f(302) + _0x3ef04f(529) + _0x3ef04f(429) + _0x3ef04f(477) + _0x3ef04f(329) + _0x3ef04f(441) + _0x3ef04f(314) + _0x3ef04f(700) + _0x3ef04f(565) + _0x3ef04f(415)) : _0x42788b[_0x3ef04f(463)](jwplayer, _0x42788b[_0x3ef04f(601)])[_0x3ef04f(371)]({file: _0x2f23da, width: _0x42788b[_0x3ef04f(346)], aspectratio: _0x42788b[_0x3ef04f(597)], image: " "}), document[_0x3ef04f(577) + _0x3ef04f(375)](_0x42788b[_0x3ef04f(601)])[_0x3ef04f(701) + _0x3ef04f(673)]({behavior: _0x42788b[_0x3ef04f(373)], block: _0x42788b[_0x3ef04f(682)]}), document[_0x3ef04f(577) + _0x3ef04f(375)](_0x42788b[_0x3ef04f(484)])[_0x3ef04f(648) + "t"] = _0x4af339, _0x42788b[_0x3ef04f(463)](loadChannels, _0x59a651);
  });
}
async function loadChannels(_0x9cc2a9) {
  const _0x43c827 = _0x365475, _0x40b6a6 = {EMKqd: function (_0xec2f6c, _0x5208f1) {
    return _0xec2f6c(_0x5208f1);
  }, PNfLr: _0x43c827(542) + _0x43c827(686) + _0x43c827(615), YdmlT: function (_0x511840, _0x56c0c3) {
    return _0x511840 > _0x56c0c3;
  }, NtjJe: _0x43c827(421) + "st", ZIUrY: _0x43c827(442), UKYfo: _0x43c827(377), PNRjt: _0x43c827(637) + _0x43c827(388) + _0x43c827(665)};
  try {
    const _0x15bf7a = await _0x40b6a6[_0x43c827(341)](fetch, _0x43c827(458) + _0x43c827(408) + _0x43c827(583) + _0x43c827(699) + _0x43c827(363) + _0x9cc2a9);
    if (!_0x15bf7a.ok) throw new Error(_0x40b6a6[_0x43c827(619)]);
    const _0x39197f = await _0x15bf7a[_0x43c827(574)]();
    _0x39197f[_0x43c827(705)] && _0x40b6a6[_0x43c827(320)](_0x39197f[_0x43c827(491)][_0x43c827(726)], 0) ? (_0x40b6a6[_0x43c827(341)](renderChannels, _0x39197f[_0x43c827(491)]), _0x40b6a6[_0x43c827(341)](renderServerMenu, _0x39197f[_0x43c827(491)])) : (document[_0x43c827(577) + _0x43c827(375)](_0x40b6a6[_0x43c827(540)])[_0x43c827(718)][_0x43c827(667)] = _0x40b6a6[_0x43c827(679)], document[_0x43c827(577) + _0x43c827(375)](_0x40b6a6[_0x43c827(589)])[_0x43c827(718)][_0x43c827(667)] = _0x40b6a6[_0x43c827(679)]);
  } catch (_0x21962e) {
    console[_0x43c827(392)](_0x40b6a6[_0x43c827(603)], _0x21962e), document[_0x43c827(577) + _0x43c827(375)](_0x40b6a6[_0x43c827(540)])[_0x43c827(718)][_0x43c827(667)] = _0x40b6a6[_0x43c827(679)], document[_0x43c827(577) + _0x43c827(375)](_0x40b6a6[_0x43c827(589)])[_0x43c827(718)][_0x43c827(667)] = _0x40b6a6[_0x43c827(679)];
  }
}
function renderChannels(_0x2b164a) {
  const _0x4b8dc0 = _0x365475, _0x4a563d = {IdsxY: _0x4b8dc0(645) + "ms", RefGJ: _0x4b8dc0(421) + "st", jzWlJ: _0x4b8dc0(327)}, _0x26e352 = document[_0x4b8dc0(577) + _0x4b8dc0(375)](_0x4a563d[_0x4b8dc0(326)]);
  _0x26e352[_0x4b8dc0(509)] = "", _0x2b164a[_0x4b8dc0(517)](_0x426e50 => {
    const _0x2cf801 = _0x4b8dc0, _0xa43eea = document[_0x2cf801(330) + _0x2cf801(486)]("li");
    _0xa43eea[_0x2cf801(509)] = _0x2cf801(515) + _0x2cf801(474) + _0x2cf801(323) + _0x2cf801(569) + _0x2cf801(527) + "'" + _0x426e50[_0x2cf801(658) + _0x2cf801(704)][0] + _0x2cf801(591) + _0x426e50[_0x2cf801(691)] + _0x2cf801(666) + _0x426e50[_0x2cf801(478)] + (_0x2cf801(695) + _0x2cf801(474) + _0x2cf801(437)), _0x26e352[_0x2cf801(460) + "d"](_0xa43eea);
  }), document[_0x4b8dc0(577) + _0x4b8dc0(375)](_0x4a563d[_0x4b8dc0(641)])[_0x4b8dc0(718)][_0x4b8dc0(667)] = _0x4a563d[_0x4b8dc0(635)];
}
function playChannel(_0x3da51e, _0x2fc63d) {
  const _0x13c7be = _0x365475, _0x18f249 = {CEYPs: _0x13c7be(568) + _0x13c7be(558), dkXhz: function (_0x254246, _0xb51a0d) {
    return _0x254246(_0xb51a0d);
  }, zXMHV: _0x13c7be(311), SYinf: _0x13c7be(476), OwHNI: _0x13c7be(608), ZfEGB: _0x13c7be(538)};
  _0x2fc63d ? document[_0x13c7be(577) + _0x13c7be(375)](_0x18f249[_0x13c7be(547)])[_0x13c7be(509)] = _0x13c7be(417) + _0x13c7be(413) + _0x2fc63d + (_0x13c7be(555) + _0x13c7be(428) + _0x13c7be(713) + _0x13c7be(302) + _0x13c7be(529) + _0x13c7be(429) + _0x13c7be(477) + _0x13c7be(329) + _0x13c7be(441) + _0x13c7be(314) + _0x13c7be(700) + _0x13c7be(565) + _0x13c7be(415)) : _0x18f249[_0x13c7be(485)](jwplayer, _0x18f249[_0x13c7be(547)])[_0x13c7be(371)]({file: _0x3da51e, width: _0x18f249[_0x13c7be(584)], aspectratio: _0x18f249[_0x13c7be(383)], image: " "}), document[_0x13c7be(577) + _0x13c7be(375)](_0x18f249[_0x13c7be(547)])[_0x13c7be(701) + _0x13c7be(673)]({behavior: _0x18f249[_0x13c7be(586)], block: _0x18f249[_0x13c7be(430)]});
}
function renderServerMenu(_0x551a68) {
  const _0x49e1da = _0x365475, _0x1cb36d = {xwEJR: _0x49e1da(593), UiPma: _0x49e1da(377), FvyFy: _0x49e1da(327)}, _0x39d131 = document[_0x49e1da(577) + _0x49e1da(375)](_0x1cb36d[_0x49e1da(506)]);
  _0x39d131[_0x49e1da(509)] = "";
  let _0x72e902 = 1;
  _0x551a68[_0x49e1da(517)]((_0x58c941, _0x3bc5a9) => {
    const _0x9a2a85 = _0x49e1da, _0x5dc5a5 = {SlaXO: _0x1cb36d[_0x9a2a85(553)]};
    _0x58c941[_0x9a2a85(658) + _0x9a2a85(704)][_0x9a2a85(517)]((_0x1f780a, _0x1e9213) => {
      const _0x38e530 = _0x9a2a85, _0x3c65f8 = document[_0x38e530(330) + _0x38e530(486)](_0x5dc5a5[_0x38e530(649)]);
      _0x3c65f8[_0x38e530(509)] = _0x38e530(345) + _0x38e530(412) + _0x38e530(457) + _0x38e530(662) + _0x72e902, _0x3c65f8[_0x38e530(730)] = () => playChannel(_0x1f780a, _0x58c941[_0x38e530(691)]), _0x39d131[_0x38e530(460) + "d"](_0x3c65f8), _0x72e902++;
    });
  }), document[_0x49e1da(577) + _0x49e1da(375)](_0x1cb36d[_0x49e1da(506)])[_0x49e1da(718)][_0x49e1da(667)] = _0x1cb36d[_0x49e1da(656)];
}
function populateFilters(_0x3a6a2f) {
  const _0xa45648 = _0x365475, _0x517b25 = {QZJbB: _0xa45648(488), rOBch: function (_0x330c87, _0x414713) {
    return _0x330c87(_0x414713);
  }, BEypW: _0xa45648(575), piEgF: _0xa45648(403) + "er", lYwvl: _0xa45648(365) + _0xa45648(464) + _0xa45648(405) + _0xa45648(672), qUeGN: _0xa45648(365) + _0xa45648(464) + _0xa45648(708) + _0xa45648(510) + "n>"}, _0x1bbc10 = document[_0xa45648(577) + _0xa45648(375)](_0x517b25[_0xa45648(717)]), _0x106e1 = document[_0xa45648(577) + _0xa45648(375)](_0x517b25[_0xa45648(351)]);
  _0x1bbc10[_0xa45648(509)] = _0x517b25[_0xa45648(316)], _0x106e1[_0xa45648(509)] = _0x517b25[_0xa45648(604)];
  const _0x3379fe = [...new Set(_0x3a6a2f[_0xa45648(596)](_0x33ec34 => _0x33ec34[_0xa45648(333)]))], _0x933521 = [...new Set(_0x3a6a2f[_0xa45648(596)](_0x10706c => _0x10706c[_0xa45648(720)]))];
  _0x3379fe[_0xa45648(517)](_0x46f032 => {
    const _0x22ca3b = _0xa45648, _0x59323d = document[_0x22ca3b(330) + _0x22ca3b(486)](_0x517b25[_0x22ca3b(411)]);
    _0x59323d[_0x22ca3b(347)] = _0x46f032[_0x22ca3b(692) + "e"](), _0x59323d[_0x22ca3b(648) + "t"] = _0x517b25[_0x22ca3b(671)](formatDate, _0x46f032), _0x1bbc10[_0x22ca3b(460) + "d"](_0x59323d);
  }), _0x933521[_0xa45648(517)](_0x2a1075 => {
    const _0x10db89 = _0xa45648, _0x9ec931 = document[_0x10db89(330) + _0x10db89(486)](_0x517b25[_0x10db89(411)]);
    _0x9ec931[_0x10db89(347)] = _0x2a1075[_0x10db89(692) + "e"](), _0x9ec931[_0x10db89(648) + "t"] = _0x2a1075, _0x106e1[_0x10db89(460) + "d"](_0x9ec931);
  });
}
function filterMatches() {
  const _0x222c2c = _0x365475, _0x4c3851 = {jXUXF: _0x222c2c(632), osapu: _0x222c2c(528) + "e", djZNE: _0x222c2c(475), Avoiz: function (_0x79783b, _0x1f49bc) {
    return _0x79783b === _0x1f49bc;
  }, lURCb: function (_0x35dfaf, _0x4ea38a) {
    return _0x35dfaf && _0x4ea38a;
  }, yQfGy: _0x222c2c(622) + "s", wbpFk: _0x222c2c(698), ERaQW: function (_0x178cd8, _0x1bae28) {
    return _0x178cd8 !== _0x1bae28;
  }, XDyTb: function (_0x4084c0, _0x542824) {
    return _0x4084c0 !== _0x542824;
  }, Njysu: function (_0x2a6f33, _0x2acec9) {
    return _0x2a6f33 === _0x2acec9;
  }, bFiSe: _0x222c2c(549), mQjcX: _0x222c2c(575), xnhyw: _0x222c2c(403) + "er", ZSsts: _0x222c2c(702), dAbMe: _0x222c2c(511) + _0x222c2c(406), QUgEr: _0x222c2c(343), lrSGg: _0x222c2c(688)}, _0x49454f = document[_0x222c2c(577) + _0x222c2c(375)](_0x4c3851[_0x222c2c(588)])[_0x222c2c(347)][_0x222c2c(692) + "e"](), _0x49d5fd = document[_0x222c2c(577) + _0x222c2c(375)](_0x4c3851[_0x222c2c(432)])[_0x222c2c(347)][_0x222c2c(692) + "e"](), _0x5cf668 = document[_0x222c2c(577) + _0x222c2c(375)](_0x4c3851[_0x222c2c(600)])[_0x222c2c(347)][_0x222c2c(692) + "e"](), _0x2b67fb = document[_0x222c2c(719) + _0x222c2c(716)](_0x4c3851[_0x222c2c(664)]);
  let _0x496681 = 0;
  const _0x2f70c6 = Array[_0x222c2c(439)](_0x2b67fb)[_0x222c2c(402)](_0x1699aa => {
    const _0x41e6fa = _0x222c2c, _0x13292e = _0x1699aa[_0x41e6fa(489) + "te"](_0x4c3851[_0x41e6fa(342)]), _0x1b5faf = _0x1699aa[_0x41e6fa(489) + "te"](_0x4c3851[_0x41e6fa(503)]), _0x46fd7c = _0x1699aa[_0x41e6fa(489) + "te"](_0x4c3851[_0x41e6fa(418)]), _0x2b6007 = !_0x49454f || _0x4c3851[_0x41e6fa(710)](_0x13292e, _0x49454f), _0x56ca42 = !_0x49d5fd || _0x4c3851[_0x41e6fa(710)](_0x1b5faf, _0x49d5fd), _0x2d78e3 = !_0x5cf668 || _0x46fd7c[_0x41e6fa(674)](_0x5cf668);
    return _0x4c3851[_0x41e6fa(644)](_0x2b6007, _0x56ca42) && _0x2d78e3;
  })[_0x222c2c(646)]((_0x11bc65, _0x4fc41b) => {
    const _0x327d17 = _0x222c2c, _0xf564a0 = _0x11bc65[_0x327d17(489) + "te"](_0x4c3851[_0x327d17(443)]), _0x2d2c94 = _0x4fc41b[_0x327d17(489) + "te"](_0x4c3851[_0x327d17(443)]);
    if (_0x4c3851[_0x327d17(710)](_0xf564a0, _0x4c3851[_0x327d17(513)]) && _0x4c3851[_0x327d17(546)](_0x2d2c94, _0x4c3851[_0x327d17(513)])) return -1;
    if (_0x4c3851[_0x327d17(344)](_0xf564a0, _0x4c3851[_0x327d17(513)]) && _0x4c3851[_0x327d17(620)](_0x2d2c94, _0x4c3851[_0x327d17(513)])) return 1;
    return 0;
  });
  _0x2b67fb[_0x222c2c(517)](_0x10c2cf => _0x10c2cf[_0x222c2c(718)][_0x222c2c(667)] = _0x222c2c(442)), _0x2f70c6[_0x222c2c(517)](_0x1b4dc9 => {
    const _0x461608 = _0x222c2c;
    _0x1b4dc9[_0x461608(718)][_0x461608(667)] = _0x4c3851[_0x461608(629)], _0x496681++;
  });
  const _0x50fc87 = document[_0x222c2c(577) + _0x222c2c(375)](_0x4c3851[_0x222c2c(424)]);
  _0x4c3851[_0x222c2c(710)](_0x496681, 0) ? _0x50fc87[_0x222c2c(349)][_0x222c2c(706)](_0x4c3851[_0x222c2c(607)]) : _0x50fc87[_0x222c2c(349)][_0x222c2c(578)](_0x4c3851[_0x222c2c(607)]);
}
function resetFilters() {
  const _0x121275 = _0x365475, _0x5337d3 = {KtSBr: _0x121275(575), UhrCM: _0x121275(403) + "er", YoEwA: _0x121275(702), pZEcK: function (_0x15e7be) {
    return _0x15e7be();
  }};
  document[_0x121275(577) + _0x121275(375)](_0x5337d3[_0x121275(335)])[_0x121275(347)] = "", document[_0x121275(577) + _0x121275(375)](_0x5337d3[_0x121275(643)])[_0x121275(347)] = "", document[_0x121275(577) + _0x121275(375)](_0x5337d3[_0x121275(376)])[_0x121275(347)] = "", _0x5337d3[_0x121275(612)](filterMatches);
}
function debounce(_0xb66d3b, _0x2affd7) {
  const _0x433d84 = {wLMAd: function (_0x254860, _0xb0f408) {
    return _0x254860(_0xb0f408);
  }, GjAVL: function (_0x5414c3, _0x23c5dc, _0x139a34) {
    return _0x5414c3(_0x23c5dc, _0x139a34);
  }};
  let _0x232afe;
  return function (..._0x2edbf8) {
    const _0x4fa38b = _0x1d51;
    _0x433d84[_0x4fa38b(350)](clearTimeout, _0x232afe), _0x232afe = _0x433d84[_0x4fa38b(657)](setTimeout, () => _0xb66d3b[_0x4fa38b(557)](this, _0x2edbf8), _0x2affd7);
  };
}
document[_0x365475(577) + _0x365475(375)](_0x365475(702))[_0x365475(337) + _0x365475(548)](_0x365475(447), debounce(filterMatches, 300)), document[_0x365475(577) + _0x365475(375)](_0x365475(575))[_0x365475(337) + _0x365475(548)](_0x365475(617), filterMatches), document[_0x365475(577) + _0x365475(375)](_0x365475(403) + "er")[_0x365475(337) + _0x365475(548)](_0x365475(617), filterMatches), document[_0x365475(337) + _0x365475(548)](_0x365475(562) + _0x365475(531), loadMatches), window[_0x365475(724)] = function () {
  const _0xfc0e1f = _0x365475, _0x14c46f = {jCJdR: function (_0x56f59b) {
    return _0x56f59b();
  }};
  _0x14c46f[_0xfc0e1f(504)](scrollFunction);
};
function scrollFunction() {
  const _0x720652 = _0x365475, _0x126c5d = {KZWso: function (_0x51597a, _0x195803) {
    return _0x51597a > _0x195803;
  }, lyiYL: function (_0x5eeb4b, _0x4dd23f) {
    return _0x5eeb4b > _0x4dd23f;
  }, qLrYi: _0x720652(512) + _0x720652(530), gaafN: _0x720652(327), ZIIAS: _0x720652(442)};
  _0x126c5d[_0x720652(378)](document[_0x720652(689)][_0x720652(639)], 20) || _0x126c5d[_0x720652(573)](document[_0x720652(602) + _0x720652(653)][_0x720652(639)], 20) ? document[_0x720652(577) + _0x720652(375)](_0x126c5d[_0x720652(642)])[_0x720652(718)][_0x720652(667)] = _0x126c5d[_0x720652(462)] : document[_0x720652(577) + _0x720652(375)](_0x126c5d[_0x720652(642)])[_0x720652(718)][_0x720652(667)] = _0x126c5d[_0x720652(358)];
}
function scrollToTop() {
  const _0x1a43db = _0x365475;
  document[_0x1a43db(689)][_0x1a43db(639)] = 0, document[_0x1a43db(602) + _0x1a43db(653)][_0x1a43db(639)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x53d658) {
  const _0x11ace1 = _0x365475, _0x59a220 = {yQdXO: _0x11ace1(556) + _0x11ace1(560) + _0x11ace1(650), WlRPL: _0x11ace1(637) + _0x11ace1(301) + _0x11ace1(519), kHiGI: _0x11ace1(576) + _0x11ace1(409) + _0x11ace1(419), PcmBs: function (_0x1a457e, _0x621ba1) {
    return _0x1a457e(_0x621ba1);
  }, TZWQS: function (_0x6a465d, _0x152bfe, _0x2b915c) {
    return _0x6a465d(_0x152bfe, _0x2b915c);
  }, aPpaV: _0x11ace1(445)}, _0x3aee0d = _0x11ace1(571) + ": " + _0x53d658[_0x11ace1(623)] + _0x11ace1(334) + _0x59a220[_0x11ace1(425)](formatDate, _0x53d658[_0x11ace1(333)]) + _0x11ace1(324) + _0x53d658[_0x11ace1(711)] + _0x11ace1(496) + _0x53d658[_0x11ace1(720)] + (_0x11ace1(353) + _0x11ace1(407) + _0x11ace1(647) + _0x11ace1(638)), _0x1c0ef7 = _0x11ace1(458) + _0x11ace1(592) + _0x11ace1(628) + telegramBotToken + (_0x11ace1(483) + _0x11ace1(446) + "=") + telegramChatId + _0x11ace1(304) + _0x59a220[_0x11ace1(425)](encodeURIComponent, _0x3aee0d);
  _0x59a220[_0x11ace1(714)](fetch, _0x1c0ef7, {method: _0x59a220[_0x11ace1(317)]})[_0x11ace1(362)](_0x1f688a => _0x1f688a[_0x11ace1(574)]())[_0x11ace1(362)](_0xc8cc48 => {
    const _0x4ec44c = _0x11ace1;
    _0xc8cc48.ok ? console[_0x4ec44c(370)](_0x59a220[_0x4ec44c(526)]) : console[_0x4ec44c(392)](_0x59a220[_0x4ec44c(438)], _0xc8cc48);
  })[_0x11ace1(684)](_0x5a9451 => {
    const _0x4f6e0e = _0x11ace1;
    console[_0x4f6e0e(392)](_0x59a220[_0x4f6e0e(614)], _0x5a9451);
  });
}
function openDisclaimer() {
  const _0x1cc556 = _0x365475, _0xc914d3 = {KAXPf: _0x1cc556(492) + _0x1cc556(461), BXSId: _0x1cc556(327)};
  document[_0x1cc556(577) + _0x1cc556(375)](_0xc914d3[_0x1cc556(532)])[_0x1cc556(718)][_0x1cc556(667)] = _0xc914d3[_0x1cc556(396)];
}
function _0x5efb() {
  const _0x567ab9 = ["ntainer", "parse", "on sent su", "March", "DOMContent", "PVfoZ", "14usyKEL", 'rue"></ifr', "ZBwYZ", "8675090RRiFjV", "jwplayerCo", 'nclick="pl', " </div>\n  ", "🚨 Live Now", "GeJSd", "lyiYL", "json", "dateFilter", "Error send", "getElement", "remove", "wWmhm", "as fa-broa", "ailed", "UlijK", "/v1/match/", "zXMHV", 'ls"><i cla', "OwHNI", 'ss="fas fa', "mQjcX", "UKYfo", "NUUYr", "', '", "i.telegram", "button", "<span clas", "EXMCp", "map", "JlOtw", "rPLkO", 's="date"><', "ZSsts", "DJlSt", "documentEl", "PNRjt", "qUeGN", "EHpkc", "setItem", "lrSGg", "smooth", "gyBbC", "November", "January", "pZEcK", "7598004626", "kHiGI", " not ok", "DmHAr", "change", "WhBrW", "PNfLr", "Njysu", "sqMXV", "data-statu", "teams", "as fa-cale", "data-timer", " URL for m", " | ", ".org/bot", "bFiSe", "FFkMb", "match", "data-date", "QjrKM", "  <span cl", "jzWlJ", "fuxke", "Failed to ", "tlive", "scrollTop", "rwLzR", "RefGJ", "qLrYi", "UhrCM", "lURCb", "channelIte", "sort", "y/zonaspor", "textConten", "SlaXO", "ccessfully", "io/schedul", 'ass="detai', "ement", "4393107zUHRjj", "AoHxo", "FvyFy", "GjAVL", "streaming_", "cjFLr", "zvc2_I5WDk", "bRuos", "Server ", "bMVrM", "dAbMe", "els:", "')\">", "display", "dcast-towe", "JsMwN", "https://wa", "rOBch", "e</option>", "View", "includes", "AmdZI", "fetch live", "an>", 'nfo">\n    ', "ZIUrY", "NAJLZ", "IGERS", "XeWGA", "scheduleCo", "catch", "</i> ", "sponse was", "getMonth", "show", "body", "chId=", "iframe_url", "toLowerCas", "July", 'ass="teams', "</button>\n", "October", ":AAGG4SAfi", "live", "channels?m", 'lscreen="t', "scrollInto", "teamSearch", '="fas fa-u', "urls", "status", "add", "/i> Watch\n", "ter by Lea", "getDate", "Avoiz", "time", "ve Now</sp", 't="100%" f', "TZWQS", "getFullYea", "torAll", "BEypW", "style", "querySelec", "league", "fetch vide", '">Starting', 'wn" data-t', "onscroll", "otxrr", "length", "className", "eJnKs", "Live URL f", "onclick", "cHWzJ", "floor", "send notif", "rameborder", "load match", "&text=", "xrKxe", "nylic", "December", '-clock"></', "OcNEv", "cations", "100%", "gFnln", 'utton" onc', '" allowful', "September", "lYwvl", "aPpaV", "February", "iframeURL", "YdmlT", "m3u8Url", "atchId ", " <button o", "\nTime: ", "URL:", "IdsxY", "block", "Kyaua", "ts allow-s", "createElem", "June", "uoOcj", "date", " 🚨\nDate: ", "KtSBr", "https://83", "addEventLi", "12wqdtaQ", "Match('", "oUrl for m", "EMKqd", "jXUXF", "noMatches", "XDyTb", '<i class="', "ZCpTV", "value", "ZGlAc", "classList", "wLMAd", "piEgF", "PhBjg", "\nLink: htt", "LValN", "es:", "sgJde", "YDFBY", "ZIIAS", "bqdlo", "KOFJs", "')\">\n     ", "then", "atchId=", "h_info?mat", "<option va", "code", "schedule-c", "BEXUM", "videoUrl", "log", "setup", "isspQ", "LEjXj", '"><i class', "ById", "YoEwA", "serverMenu", "KZWso", "XGzBe", "div", 's="live"><', "hQJUt", "SYinf", "gUIsD", "Ajsmu", "upcoming", "rtakita.gi", "load chann", "dKeMY", "i> ", 'lick="play', "error", 'r"></i> Li', "byxHZ", "thub.io/bo", "BXSId", "TSFHn", "498195mwENwx", "finally", "3zb296.app", "HKOOl", "filter", "leagueFilt", "CGDvl", "ter by Dat", "card", "ps://bit.l", "i.90min.to", "ing notifi", 's="match-i', "QZJbB", "fas fa-ser", 'c="', "RcpIm", "ame>", "LaPmB", "<iframe sr", "djZNE", "cation:", "OrQYo", "channelsLi", "98758nVhJFi", "         <", "QUgEr", "PcmBs", "all", "May", '00%" heigh', 'ling="no"a', "ZfEGB", "4qpejDU", "xnhyw", "MwLHq", " <div clas", "match/matc", "NKntU", "      ", "WlRPL", "from", "</span>\n  ", "ame-origin", "none", "yQfGy", "HbbdB", "GET", "ge?chat_id", "input", "e.json", 'imer="', "HZfUh", "Dwkmm", "hkIeN", "span>", "VaOwB", "0000", "3183733IAWlQF", 'ver"></i> ', "https://ap", "BUoJU", "appendChil", "Modal", "gaafN", "FghPO", 'lue="">Fil', "[data-time", "April", 'sers"></i>', "stringify", "nIkQh", "getTime", "utton clas", "kmDqI", "as fa-play", "          ", "data-teams", "16:9", "llow-scrip", "name", "mlQvM", "data", "MDsao", "/business/", "/sendMessa", "tzNCk", "dkXhz", "ent", "load live ", "option", "getAttribu", 's="countdo', "result", "disclaimer", '-circle"><', "1391979650", "LUhwU", "\nLeague: ", 'ndar-alt">', "ODwuj", "August", "has", "wlTGG", "liveUrl", "osapu", "jCJdR", "vxoSs", "UiPma", "rjfRG", "23795c", "innerHTML", "gue</optio", ".schedule-", "scrollToTo", "wbpFk", 'i class="f', "\n         ", " Soon...</", "forEach", "Fbhqg", "ication:", "VOLeE", "ntnXk", "matchTitle", "sentNotifi", "target", "iZ76AHaEWo", "yQdXO", "ayChannel(", "data-leagu", '="0" scrol', "pButton", "Loaded", "KAXPf", "la.github.", "        <b", "YCjht", "videoId", "XIYDg", "start", "ard", "NtjJe", "5253784ZyzIOy", "Network re", "loader", 's="watch-b', "JmpvY", "ERaQW", "CEYPs", "stener", "flex", "492663GkWPAz", "setAttribu", "getItem", "xwEJR", "kNOPv", '" width="1', "Notificati", "apply"];
  _0x5efb = function () {
    return _0x567ab9;
  };
  return _0x5efb();
}
function _0x1d51(_0x8c8b0e, _0x5a1e47) {
  const _0x248eef = _0x5efb();
  return _0x1d51 = function (_0x566600, _0x5ef200) {
    _0x566600 = _0x566600 - 299;
    let _0x4415f2 = _0x248eef[_0x566600];
    return _0x4415f2;
  }, _0x1d51(_0x8c8b0e, _0x5a1e47);
}
function closeDisclaimer() {
  const _0x2a7a34 = _0x365475, _0xd872f7 = {otxrr: _0x2a7a34(492) + _0x2a7a34(461), CGDvl: _0x2a7a34(442)};
  document[_0x2a7a34(577) + _0x2a7a34(375)](_0xd872f7[_0x2a7a34(725)])[_0x2a7a34(718)][_0x2a7a34(667)] = _0xd872f7[_0x2a7a34(404)];
}
window[_0x365475(730)] = function (_0x498e3d) {
  const _0xfa3d8b = _0x365475, _0x1a1ff1 = {NAJLZ: function (_0x14b5dd, _0x12e7e9) {
    return _0x14b5dd == _0x12e7e9;
  }, Dwkmm: _0xfa3d8b(492) + _0xfa3d8b(461), QjrKM: function (_0xff7f9c) {
    return _0xff7f9c();
  }};
  _0x1a1ff1[_0xfa3d8b(680)](_0x498e3d[_0xfa3d8b(524)], document[_0xfa3d8b(577) + _0xfa3d8b(375)](_0x1a1ff1[_0xfa3d8b(451)])) && _0x1a1ff1[_0xfa3d8b(633)](closeDisclaimer);
};
