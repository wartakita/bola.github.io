const _0x545fca = _0x26bf;
(function (_0x3b9e98, _0x25a4cf) {
  const _0x4e3f77 = _0x26bf, _0x4c222b = _0x3b9e98();
  while (true) {
    try {
      const _0x2338e8 = parseInt(_0x4e3f77(732)) / 1 + -parseInt(_0x4e3f77(606)) / 2 * (parseInt(_0x4e3f77(607)) / 3) + parseInt(_0x4e3f77(620)) / 4 * (-parseInt(_0x4e3f77(487)) / 5) + -parseInt(_0x4e3f77(610)) / 6 + parseInt(_0x4e3f77(674)) / 7 + -parseInt(_0x4e3f77(589)) / 8 * (parseInt(_0x4e3f77(513)) / 9) + parseInt(_0x4e3f77(470)) / 10;
      if (_0x2338e8 === _0x25a4cf) break; else _0x4c222b.push(_0x4c222b.shift());
    } catch (_0x53ad56) {
      _0x4c222b.push(_0x4c222b.shift());
    }
  }
}(_0x2f4a, 261518));
const telegramBotToken = _0x545fca(673) + _0x545fca(335) + _0x545fca(427) + _0x545fca(618) + _0x545fca(722), telegramChatId = _0x545fca(617), sentNotifications = new Set(JSON[_0x545fca(613)](localStorage[_0x545fca(390)](_0x545fca(484) + _0x545fca(600))) || []);
function saveSentNotifications() {
  const _0x364e1d = _0x545fca, _0x3fa779 = {NPfRG: _0x364e1d(484) + _0x364e1d(600)};
  localStorage[_0x364e1d(511)](_0x3fa779[_0x364e1d(547)], JSON[_0x364e1d(666)](Array[_0x364e1d(553)](sentNotifications)));
}
function formatDate(_0x3296f1) {
  const _0x1d22c3 = _0x545fca, _0x4eb8e9 = {bLbKd: _0x1d22c3(499), Beats: _0x1d22c3(705), zCuLQ: _0x1d22c3(721), yMgPj: _0x1d22c3(492), kHpcN: _0x1d22c3(731), tfZzj: _0x1d22c3(475), CkhEP: _0x1d22c3(576), IzUAF: _0x1d22c3(655), jekeS: _0x1d22c3(400), dBOFw: _0x1d22c3(710), PyEPA: _0x1d22c3(489), QQciq: _0x1d22c3(378)}, _0x411112 = [_0x4eb8e9[_0x1d22c3(345)], _0x4eb8e9[_0x1d22c3(405)], _0x4eb8e9[_0x1d22c3(559)], _0x4eb8e9[_0x1d22c3(716)], _0x4eb8e9[_0x1d22c3(540)], _0x4eb8e9[_0x1d22c3(518)], _0x4eb8e9[_0x1d22c3(465)], _0x4eb8e9[_0x1d22c3(700)], _0x4eb8e9[_0x1d22c3(638)], _0x4eb8e9[_0x1d22c3(582)], _0x4eb8e9[_0x1d22c3(332)], _0x4eb8e9[_0x1d22c3(402)]], _0x136686 = new Date(_0x3296f1), _0x111a86 = _0x136686[_0x1d22c3(597)](), _0x134fb4 = _0x411112[_0x136686[_0x1d22c3(494)]()], _0x31ffac = _0x136686[_0x1d22c3(328) + "r"]();
  return _0x111a86 + " " + _0x134fb4 + " " + _0x31ffac;
}
async function loadMatches() {
  const _0x8e2f1a = _0x545fca, _0x588f51 = {PsAcY: _0x8e2f1a(627), tHhDm: _0x8e2f1a(504), kRhJy: function (_0x1cc559) {
    return _0x1cc559();
  }, KWooc: function (_0x17510a, _0x5e97a3) {
    return _0x17510a(_0x5e97a3);
  }, YbtzT: function (_0x59a8ab, _0x41a3fa, _0x370cd0) {
    return _0x59a8ab(_0x41a3fa, _0x370cd0);
  }, nLTzx: _0x8e2f1a(544) + _0x8e2f1a(650) + _0x8e2f1a(580), XrfMa: _0x8e2f1a(514), WsOlH: _0x8e2f1a(329), duRmO: _0x8e2f1a(408)};
  try {
    document[_0x8e2f1a(539) + _0x8e2f1a(359)](_0x588f51[_0x8e2f1a(355)])[_0x8e2f1a(368)][_0x8e2f1a(437)] = _0x588f51[_0x8e2f1a(307)];
    const _0x431542 = await _0x588f51[_0x8e2f1a(374)](fetchMatches);
    _0x588f51[_0x8e2f1a(321)](renderMatches, _0x431542), _0x588f51[_0x8e2f1a(321)](populateFilters, _0x431542), _0x588f51[_0x8e2f1a(374)](filterMatches), _0x588f51[_0x8e2f1a(374)](updateCountdown), _0x588f51[_0x8e2f1a(334)](setInterval, updateCountdown, 1e3);
  } catch (_0x3ea49a) {
    console[_0x8e2f1a(593)](_0x588f51[_0x8e2f1a(676)], _0x3ea49a), document[_0x8e2f1a(539) + _0x8e2f1a(359)](_0x588f51[_0x8e2f1a(546)])[_0x8e2f1a(466)][_0x8e2f1a(523)](_0x588f51[_0x8e2f1a(662)]);
  } finally {
    document[_0x8e2f1a(539) + _0x8e2f1a(359)](_0x588f51[_0x8e2f1a(355)])[_0x8e2f1a(368)][_0x8e2f1a(437)] = _0x588f51[_0x8e2f1a(678)];
  }
}
async function fetchMatches() {
  const _0x59e871 = _0x545fca, _0x47171d = {VJTQW: function (_0x425cd5, _0x3b5686) {
    return _0x425cd5(_0x3b5686);
  }, FCMxq: _0x59e871(512) + _0x59e871(693) + _0x59e871(634) + _0x59e871(660) + _0x59e871(505) + _0x59e871(303), fxblv: _0x59e871(585) + _0x59e871(336) + _0x59e871(529), wyGii: function (_0x373e5e, _0x2753ef) {
    return _0x373e5e(_0x2753ef);
  }}, _0x12a510 = await _0x47171d[_0x59e871(723)](fetch, _0x47171d[_0x59e871(534)]);
  if (!_0x12a510.ok) throw new Error(_0x47171d[_0x59e871(365)]);
  const _0x1470bc = await _0x12a510[_0x59e871(640)](), _0x3d90f7 = await _0x47171d[_0x59e871(718)](fetchLiveUrls, _0x1470bc);
  return _0x1470bc[_0x59e871(416)](_0x1c9b0d => {
    const _0x5af6df = _0x59e871;
    _0x1c9b0d[_0x5af6df(412)] = _0x3d90f7[_0x1c9b0d[_0x5af6df(599)]] || _0x1c9b0d[_0x5af6df(697)] || _0x1c9b0d[_0x5af6df(302)];
  }), _0x1470bc;
}
async function fetchLiveUrls(_0x19681a) {
  const _0x5ef358 = _0x545fca, _0x5e3d11 = {VvKiG: function (_0x243948, _0xce17d9) {
    return _0x243948(_0xce17d9);
  }, AyDwb: function (_0x40df2b, _0x30c9cd) {
    return _0x40df2b > _0x30c9cd;
  }, BSiAb: function (_0x1379ac, _0x3449c1) {
    return _0x1379ac === _0x3449c1;
  }, AOuuk: _0x5ef358(308)}, _0x59e4ea = _0x19681a[_0x5ef358(324)](_0x2d8e35 => _0x2d8e35[_0x5ef358(599)]), _0x32f425 = {}, _0x462a63 = _0x59e4ea[_0x5ef358(324)](async _0x14035a => {
    const _0x334fe7 = _0x5ef358;
    try {
      const _0x2a76a0 = await _0x5e3d11[_0x334fe7(556)](fetch, _0x334fe7(497) + _0x334fe7(575) + _0x334fe7(564) + _0x334fe7(573) + _0x334fe7(392) + _0x14035a);
      if (_0x2a76a0.ok) {
        const _0x51af49 = await _0x2a76a0[_0x334fe7(640)]();
        _0x51af49[_0x334fe7(482)] && _0x5e3d11[_0x334fe7(644)](_0x51af49[_0x334fe7(461)][_0x334fe7(571)], 0) && (_0x32f425[_0x14035a] = _0x51af49[_0x334fe7(461)][0][_0x334fe7(480) + _0x334fe7(555)][0]);
      }
    } catch (_0x5e708d) {
      console[_0x334fe7(593)](_0x334fe7(544) + _0x334fe7(554) + _0x334fe7(498) + _0x334fe7(724) + _0x14035a + ":", _0x5e708d);
    }
    try {
      const _0x194ff9 = await _0x5e3d11[_0x334fe7(556)](fetch, _0x334fe7(672) + _0x334fe7(468) + _0x334fe7(304) + _0x334fe7(726) + _0x334fe7(447) + _0x334fe7(543) + _0x14035a);
      if (_0x194ff9.ok) {
        const _0x424a79 = await _0x194ff9[_0x334fe7(640)]();
        _0x5e3d11[_0x334fe7(452)](_0x424a79[_0x334fe7(558)], _0x5e3d11[_0x334fe7(679)]) && _0x424a79[_0x334fe7(422)][_0x334fe7(461)][_0x334fe7(393)][_0x334fe7(642)] && (_0x32f425[_0x14035a] = _0x424a79[_0x334fe7(422)][_0x334fe7(461)][_0x334fe7(393)][_0x334fe7(642)]);
      }
    } catch (_0x439e25) {
      console[_0x334fe7(593)](_0x334fe7(544) + _0x334fe7(490) + _0x334fe7(614) + _0x334fe7(724) + _0x14035a + ":", _0x439e25);
    }
  });
  return await Promise[_0x5ef358(636)](_0x462a63), _0x32f425;
}
function renderMatches(_0x270958) {
  const _0xf61a9f = _0x545fca, _0x4259eb = {fcsPM: function (_0x2d857d, _0x56210e) {
    return _0x2d857d >= _0x56210e;
  }, BxDmb: function (_0x2a3a00, _0x287df0) {
    return _0x2a3a00 <= _0x287df0;
  }, sTtFp: function (_0x5060ff, _0x3f7a2a) {
    return _0x5060ff + _0x3f7a2a;
  }, UZAEW: function (_0x23660f, _0x4d3fd1) {
    return _0x23660f * _0x4d3fd1;
  }, BmvAT: function (_0x3112ef, _0x4b65fe) {
    return _0x3112ef * _0x4b65fe;
  }, xFOKY: function (_0x2ce330, _0x4ef7bd) {
    return _0x2ce330 * _0x4ef7bd;
  }, IFlri: function (_0x35c1e2, _0x285187) {
    return _0x35c1e2 >= _0x285187;
  }, xCoQm: function (_0x463d5b, _0x2ffedd) {
    return _0x463d5b <= _0x2ffedd;
  }, VUQOh: function (_0x3eff11, _0xab1b5c) {
    return _0x3eff11 + _0xab1b5c;
  }, HtWue: function (_0x508c18, _0x38a2c4) {
    return _0x508c18 * _0x38a2c4;
  }, YaheI: function (_0x167523, _0x1c5f8e) {
    return _0x167523 && _0x1c5f8e;
  }, PiwBF: function (_0x57b553, _0xc10ec6) {
    return _0x57b553 && _0xc10ec6;
  }, nnchQ: function (_0x75800c, _0x1b6772) {
    return _0x75800c >= _0x1b6772;
  }, jfVAw: function (_0x149945, _0x3d26c3) {
    return _0x149945 + _0x3d26c3;
  }, OEMXt: function (_0x2d176f, _0x4e4fbb) {
    return _0x2d176f * _0x4e4fbb;
  }, klMqp: function (_0x2edf42, _0x5d8b69) {
    return _0x2edf42 * _0x5d8b69;
  }, HqYNs: _0xf61a9f(675), GnMlQ: _0xf61a9f(430) + _0xf61a9f(370), ByMlk: _0xf61a9f(459), nBqIB: _0xf61a9f(433) + "e", HbZrj: _0xf61a9f(351), wnjfj: _0xf61a9f(460) + "s", wUywN: _0xf61a9f(343), gaKxH: _0xf61a9f(701), Dmwmz: function (_0x4afed2, _0x147247) {
    return _0x4afed2(_0x147247);
  }, YVUKL: _0xf61a9f(313) + _0xf61a9f(594) + _0xf61a9f(592) + _0xf61a9f(517) + _0xf61a9f(401) + _0xf61a9f(681) + _0xf61a9f(604) + _0xf61a9f(344), iNCHj: function (_0x9d7f8b) {
    return _0x9d7f8b();
  }, sQHEZ: _0xf61a9f(309) + _0xf61a9f(406)}, _0x3d5aed = document[_0xf61a9f(539) + _0xf61a9f(359)](_0x4259eb[_0xf61a9f(316)]);
  _0x3d5aed[_0xf61a9f(506)] = "", _0x270958[_0xf61a9f(363)]((_0x5145fc, _0x4354f4) => {
    const _0x3ee5f7 = _0xf61a9f, _0xb41376 = new Date, _0x252038 = new Date(_0x5145fc[_0x3ee5f7(520)] + "T" + _0x5145fc[_0x3ee5f7(331)]), _0x5c4ddd = new Date(_0x4354f4[_0x3ee5f7(520)] + "T" + _0x4354f4[_0x3ee5f7(331)]), _0x463a2d = _0x4259eb[_0x3ee5f7(509)](_0xb41376, _0x252038) && _0x4259eb[_0x3ee5f7(608)](_0xb41376, new Date(_0x4259eb[_0x3ee5f7(688)](_0x252038[_0x3ee5f7(531)](), _0x4259eb[_0x3ee5f7(467)](_0x4259eb[_0x3ee5f7(538)](_0x4259eb[_0x3ee5f7(415)](2, 60), 60), 1e3)))), _0x7e378a = _0x4259eb[_0x3ee5f7(541)](_0xb41376, _0x5c4ddd) && _0x4259eb[_0x3ee5f7(670)](_0xb41376, new Date(_0x4259eb[_0x3ee5f7(448)](_0x5c4ddd[_0x3ee5f7(531)](), _0x4259eb[_0x3ee5f7(415)](_0x4259eb[_0x3ee5f7(469)](_0x4259eb[_0x3ee5f7(467)](2, 60), 60), 1e3))));
    if (_0x4259eb[_0x3ee5f7(357)](_0x463a2d, !_0x7e378a)) return -1;
    if (_0x4259eb[_0x3ee5f7(394)](!_0x463a2d, _0x7e378a)) return 1;
    return 0;
  }), _0x270958[_0xf61a9f(416)](_0x471840 => {
    const _0x19c382 = _0xf61a9f, _0x141d0a = _0x471840[_0x19c382(412)] || _0x471840[_0x19c382(697)] || _0x471840[_0x19c382(302)], _0x2ed248 = new Date, _0x55288c = new Date(_0x471840[_0x19c382(520)] + "T" + _0x471840[_0x19c382(331)]), _0x5407e7 = _0x4259eb[_0x19c382(526)](_0x2ed248, _0x55288c) && _0x4259eb[_0x19c382(608)](_0x2ed248, new Date(_0x4259eb[_0x19c382(667)](_0x55288c[_0x19c382(531)](), _0x4259eb[_0x19c382(637)](_0x4259eb[_0x19c382(714)](_0x4259eb[_0x19c382(415)](2, 60), 60), 1e3)))), _0x58b6ec = document[_0x19c382(715) + _0x19c382(381)](_0x4259eb[_0x19c382(399)]);
    _0x58b6ec[_0x19c382(369)] = _0x4259eb[_0x19c382(384)], _0x58b6ec[_0x19c382(542) + "te"](_0x4259eb[_0x19c382(500)], _0x471840[_0x19c382(520)][_0x19c382(651) + "e"]()), _0x58b6ec[_0x19c382(542) + "te"](_0x4259eb[_0x19c382(527)], _0x471840[_0x19c382(725)][_0x19c382(651) + "e"]()), _0x58b6ec[_0x19c382(542) + "te"](_0x4259eb[_0x19c382(552)], _0x471840[_0x19c382(314)][_0x19c382(651) + "e"]()), _0x58b6ec[_0x19c382(542) + "te"](_0x4259eb[_0x19c382(425)], _0x5407e7 ? _0x4259eb[_0x19c382(669)] : _0x4259eb[_0x19c382(578)]);
    const _0x3d4ad5 = !_0x5407e7 ? _0x19c382(313) + _0x19c382(346) + _0x19c382(385) + _0x19c382(438) + _0x471840[_0x19c382(520)] + "T" + _0x471840[_0x19c382(331)] + (_0x19c382(684) + _0x19c382(326) + _0x19c382(464)) : "";
    _0x58b6ec[_0x19c382(506)] = _0x19c382(503) + _0x19c382(581) + _0x19c382(496) + _0x19c382(595) + _0x19c382(319) + _0x19c382(581) + _0x19c382(581) + _0x19c382(313) + _0x19c382(493) + _0x19c382(592) + _0x19c382(567) + _0x19c382(387) + _0x19c382(356) + _0x4259eb[_0x19c382(631)](formatDate, _0x471840[_0x19c382(520)]) + (_0x19c382(418) + _0x19c382(581) + _0x19c382(581) + _0x19c382(671) + _0x19c382(566) + _0x19c382(432) + _0x19c382(649) + _0x19c382(371) + " ") + _0x471840[_0x19c382(314)] + (_0x19c382(418) + _0x19c382(581) + _0x19c382(581) + _0x19c382(671) + _0x19c382(654) + _0x19c382(395) + _0x19c382(472) + _0x19c382(692) + _0x19c382(728)) + _0x471840[_0x19c382(331)] + _0x19c382(623) + _0x471840[_0x19c382(725)] + (_0x19c382(418) + _0x19c382(581) + _0x19c382(581) + "  ") + (_0x5407e7 ? _0x4259eb[_0x19c382(306)] : _0x3d4ad5) + (_0x19c382(503) + _0x19c382(581) + _0x19c382(409) + _0x19c382(581) + _0x19c382(488) + _0x19c382(653) + _0x19c382(347) + _0x19c382(626) + _0x19c382(720) + _0x19c382(596)) + _0x471840[_0x19c382(599)] + _0x19c382(423) + _0x471840[_0x19c382(412)] + _0x19c382(423) + _0x471840[_0x19c382(697)] + _0x19c382(423) + _0x471840[_0x19c382(302)] + _0x19c382(423) + _0x471840[_0x19c382(314)] + (_0x19c382(565) + _0x19c382(581) + _0x19c382(341) + _0x19c382(592) + _0x19c382(690) + _0x19c382(706) + _0x19c382(639) + _0x19c382(581) + _0x19c382(581) + _0x19c382(584) + _0x19c382(581) + _0x19c382(305)), _0x3d5aed[_0x19c382(515) + "d"](_0x58b6ec), _0x5407e7 && !sentNotifications[_0x19c382(652)](_0x471840[_0x19c382(599)]) && (_0x4259eb[_0x19c382(631)](sendTelegramNotification, _0x471840), sentNotifications[_0x19c382(523)](_0x471840[_0x19c382(599)]), _0x4259eb[_0x19c382(337)](saveSentNotifications));
  });
}
function updateCountdown() {
  const _0x562bcf = _0x545fca, _0x665b11 = {LyzgZ: _0x562bcf(330), bDdQF: function (_0x10a76e, _0x18a5eb) {
    return _0x10a76e - _0x18a5eb;
  }, BedBJ: function (_0x58da2d, _0x1229a1) {
    return _0x58da2d <= _0x1229a1;
  }, Mcbtg: function (_0x3436a8, _0x56a0b2) {
    return _0x3436a8 / _0x56a0b2;
  }, mZeQh: function (_0x130d84, _0x579277) {
    return _0x130d84 * _0x579277;
  }, nvKsI: function (_0x29fd25, _0x562e5a) {
    return _0x29fd25 % _0x562e5a;
  }, GQaQg: function (_0x1dffd8, _0x3218ff) {
    return _0x1dffd8 * _0x3218ff;
  }, nwKtP: function (_0x567045, _0xcfc213) {
    return _0x567045 / _0xcfc213;
  }, OtyUi: function (_0x1cd859, _0x297438) {
    return _0x1cd859 % _0x297438;
  }, xMRXW: function (_0x34a5c7, _0x304506) {
    return _0x34a5c7 * _0x304506;
  }, niJKA: _0x562bcf(689) + "r]"}, _0x2a3926 = document[_0x562bcf(361) + _0x562bcf(471)](_0x665b11[_0x562bcf(491)]), _0x2eec11 = new Date;
  _0x2a3926[_0x562bcf(416)](_0x5571f2 => {
    const _0x2b4ae6 = _0x562bcf, _0x235a88 = new Date(_0x5571f2[_0x2b4ae6(612) + "te"](_0x665b11[_0x2b4ae6(659)])), _0x800719 = _0x665b11[_0x2b4ae6(380)](_0x235a88, _0x2eec11);
    if (_0x665b11[_0x2b4ae6(310)](_0x800719, 0)) _0x5571f2[_0x2b4ae6(712) + "t"] = ""; else {
      const _0x364d39 = Math[_0x2b4ae6(719)](_0x665b11[_0x2b4ae6(632)](_0x800719, _0x665b11[_0x2b4ae6(443)](_0x665b11[_0x2b4ae6(443)](1e3, 60), 60))), _0x36d512 = Math[_0x2b4ae6(719)](_0x665b11[_0x2b4ae6(632)](_0x665b11[_0x2b4ae6(657)](_0x800719, _0x665b11[_0x2b4ae6(411)](_0x665b11[_0x2b4ae6(443)](1e3, 60), 60)), _0x665b11[_0x2b4ae6(411)](1e3, 60))), _0x22c342 = Math[_0x2b4ae6(719)](_0x665b11[_0x2b4ae6(696)](_0x665b11[_0x2b4ae6(419)](_0x800719, _0x665b11[_0x2b4ae6(587)](1e3, 60)), 1e3));
      _0x5571f2[_0x2b4ae6(712) + "t"] = _0x364d39 + "h " + _0x36d512 + "m " + _0x22c342 + "s";
    }
  });
}
function playMatch(_0x1b5d34, _0x46f4ce, _0xf96a19, _0x1bfcaa, _0x120208) {
  const _0x57fe14 = _0x545fca, _0x385885 = {fWpdM: _0x57fe14(455) + _0x57fe14(325), ftJtt: _0x57fe14(544) + _0x57fe14(568) + _0x57fe14(646), QZkhx: function (_0x3d94f8, _0x26d84f) {
    return _0x3d94f8 || _0x26d84f;
  }, fkYtS: _0x57fe14(502) + _0x57fe14(406), IUEvm: function (_0x2690fa, _0x4feea0) {
    return _0x2690fa(_0x4feea0);
  }, XKsEu: _0x57fe14(577), TImKc: _0x57fe14(353), qcLkW: _0x57fe14(663), oxLVR: _0x57fe14(360), LRdSR: _0x57fe14(463), VqDkP: function (_0x362a27, _0x28fc63) {
    return _0x362a27(_0x28fc63);
  }};
  let _0x4a032b = _0x385885[_0x57fe14(691)](_0x46f4ce, _0xf96a19) || _0x1bfcaa;
  _0x385885[_0x57fe14(545)](fetch, _0x46f4ce)[_0x57fe14(550)](_0x305f95 => {
    const _0x547c33 = _0x57fe14;
    if (!_0x305f95.ok) throw new Error(_0x385885[_0x547c33(372)]);
    return _0x305f95;
  })[_0x57fe14(521)](_0x4966f5 => {
    const _0x4d80fb = _0x57fe14;
    console[_0x4d80fb(593)](_0x385885[_0x4d80fb(601)], _0x4966f5), _0x4a032b = _0x385885[_0x4d80fb(691)](_0xf96a19, _0x1bfcaa);
  })[_0x57fe14(413)](() => {
    const _0x5d278a = _0x57fe14;
    _0x1bfcaa ? document[_0x5d278a(539) + _0x5d278a(359)](_0x385885[_0x5d278a(366)])[_0x5d278a(506)] = _0x5d278a(668) + _0x5d278a(602) + _0x1bfcaa + (_0x5d278a(703) + _0x5d278a(633) + _0x5d278a(340) + _0x5d278a(462) + _0x5d278a(730) + _0x5d278a(583) + _0x5d278a(449) + _0x5d278a(685) + _0x5d278a(350) + _0x5d278a(695) + _0x5d278a(375) + _0x5d278a(317) + _0x5d278a(444)) : _0x385885[_0x5d278a(588)](jwplayer, _0x385885[_0x5d278a(366)])[_0x5d278a(708)]({file: _0x4a032b, width: _0x385885[_0x5d278a(621)], aspectratio: _0x385885[_0x5d278a(388)], image: " "}), document[_0x5d278a(539) + _0x5d278a(359)](_0x385885[_0x5d278a(366)])[_0x5d278a(709) + _0x5d278a(548)]({behavior: _0x385885[_0x5d278a(486)], block: _0x385885[_0x5d278a(641)]}), document[_0x5d278a(539) + _0x5d278a(359)](_0x385885[_0x5d278a(508)])[_0x5d278a(712) + "t"] = _0x120208, _0x385885[_0x5d278a(588)](loadChannels, _0x1b5d34);
  });
}
async function loadChannels(_0x4b3ea0) {
  const _0x8155d3 = _0x545fca, _0x599a76 = {GOMZU: function (_0x33f01b, _0x585e7a) {
    return _0x33f01b(_0x585e7a);
  }, yUTvP: _0x8155d3(585) + _0x8155d3(336) + _0x8155d3(529), PAuhq: function (_0x1fb5f1, _0x432feb) {
    return _0x1fb5f1 > _0x432feb;
  }, gOGrR: function (_0x413623, _0x5d3817) {
    return _0x413623(_0x5d3817);
  }, NREAQ: _0x8155d3(454) + "st", oEdbI: _0x8155d3(408), UgtKl: _0x8155d3(410), qqNFN: _0x8155d3(544) + _0x8155d3(704) + _0x8155d3(318)};
  try {
    const _0x2a7aad = await _0x599a76[_0x8155d3(367)](fetch, _0x8155d3(497) + _0x8155d3(575) + _0x8155d3(564) + _0x8155d3(573) + _0x8155d3(392) + _0x4b3ea0);
    if (!_0x2a7aad.ok) throw new Error(_0x599a76[_0x8155d3(647)]);
    const _0x1af28c = await _0x2a7aad[_0x8155d3(640)]();
    _0x1af28c[_0x8155d3(482)] && _0x599a76[_0x8155d3(624)](_0x1af28c[_0x8155d3(461)][_0x8155d3(571)], 0) ? (_0x599a76[_0x8155d3(451)](renderChannels, _0x1af28c[_0x8155d3(461)]), _0x599a76[_0x8155d3(367)](renderServerMenu, _0x1af28c[_0x8155d3(461)])) : (document[_0x8155d3(539) + _0x8155d3(359)](_0x599a76[_0x8155d3(481)])[_0x8155d3(368)][_0x8155d3(437)] = _0x599a76[_0x8155d3(358)], document[_0x8155d3(539) + _0x8155d3(359)](_0x599a76[_0x8155d3(658)])[_0x8155d3(368)][_0x8155d3(437)] = _0x599a76[_0x8155d3(358)]);
  } catch (_0x16759a) {
    console[_0x8155d3(593)](_0x599a76[_0x8155d3(727)], _0x16759a), document[_0x8155d3(539) + _0x8155d3(359)](_0x599a76[_0x8155d3(481)])[_0x8155d3(368)][_0x8155d3(437)] = _0x599a76[_0x8155d3(358)], document[_0x8155d3(539) + _0x8155d3(359)](_0x599a76[_0x8155d3(658)])[_0x8155d3(368)][_0x8155d3(437)] = _0x599a76[_0x8155d3(358)];
  }
}
function renderChannels(_0x5a5ce0) {
  const _0x1ad409 = _0x545fca, _0x120fd8 = {qrbHC: _0x1ad409(702) + "ms", dJuoU: _0x1ad409(454) + "st", mQTjG: _0x1ad409(504)}, _0x37ef58 = document[_0x1ad409(539) + _0x1ad409(359)](_0x120fd8[_0x1ad409(648)]);
  _0x37ef58[_0x1ad409(506)] = "", _0x5a5ce0[_0x1ad409(416)](_0x389e6b => {
    const _0x11077f = _0x1ad409, _0x222882 = document[_0x11077f(715) + _0x11077f(381)]("li");
    _0x222882[_0x11077f(506)] = _0x11077f(503) + _0x11077f(581) + _0x11077f(682) + _0x11077f(383) + _0x11077f(683) + "'" + _0x389e6b[_0x11077f(480) + _0x11077f(555)][0] + _0x11077f(423) + _0x389e6b[_0x11077f(403)] + _0x11077f(311) + _0x389e6b[_0x11077f(476)] + (_0x11077f(584) + _0x11077f(581) + _0x11077f(305)), _0x37ef58[_0x11077f(515) + "d"](_0x222882);
  }), document[_0x1ad409(539) + _0x1ad409(359)](_0x120fd8[_0x1ad409(396)])[_0x1ad409(368)][_0x1ad409(437)] = _0x120fd8[_0x1ad409(661)];
}
function _0x26bf(_0x592386, _0x153afa) {
  const _0x1920ba = _0x2f4a();
  return _0x26bf = function (_0x32ff67, _0x141fc5) {
    _0x32ff67 = _0x32ff67 - 301;
    let _0xeed612 = _0x1920ba[_0x32ff67];
    return _0xeed612;
  }, _0x26bf(_0x592386, _0x153afa);
}
function playChannel(_0x215cd7, _0x47218) {
  const _0x4afde6 = _0x545fca, _0x4ce871 = {GbSFq: _0x4afde6(502) + _0x4afde6(406), mnkvA: function (_0x3b82b1, _0x5bb475) {
    return _0x3b82b1(_0x5bb475);
  }, PeAdH: _0x4afde6(577), utcYR: _0x4afde6(353), wOIoM: _0x4afde6(663), agLOl: _0x4afde6(360)};
  _0x47218 ? document[_0x4afde6(539) + _0x4afde6(359)](_0x4ce871[_0x4afde6(717)])[_0x4afde6(506)] = _0x4afde6(668) + _0x4afde6(602) + _0x47218 + (_0x4afde6(703) + _0x4afde6(633) + _0x4afde6(340) + _0x4afde6(462) + _0x4afde6(730) + _0x4afde6(583) + _0x4afde6(449) + _0x4afde6(685) + _0x4afde6(350) + _0x4afde6(695) + _0x4afde6(375) + _0x4afde6(317) + _0x4afde6(444)) : _0x4ce871[_0x4afde6(320)](jwplayer, _0x4ce871[_0x4afde6(717)])[_0x4afde6(708)]({file: _0x215cd7, width: _0x4ce871[_0x4afde6(569)], aspectratio: _0x4ce871[_0x4afde6(619)], image: " "}), document[_0x4afde6(539) + _0x4afde6(359)](_0x4ce871[_0x4afde6(717)])[_0x4afde6(709) + _0x4afde6(548)]({behavior: _0x4ce871[_0x4afde6(446)], block: _0x4ce871[_0x4afde6(429)]});
}
function renderServerMenu(_0x2dc0a8) {
  const _0x5e8cff = _0x545fca, _0x4d1243 = {kLIsx: _0x5e8cff(382), pToWY: _0x5e8cff(410), qkzRj: _0x5e8cff(504)}, _0x2b977e = document[_0x5e8cff(539) + _0x5e8cff(359)](_0x4d1243[_0x5e8cff(441)]);
  _0x2b977e[_0x5e8cff(506)] = "";
  let _0x2fdf76 = 1;
  _0x2dc0a8[_0x5e8cff(416)]((_0x1a291c, _0x28bb98) => {
    const _0x1ce852 = _0x5e8cff, _0x58e3c5 = {ZOyzH: _0x4d1243[_0x1ce852(524)]};
    _0x1a291c[_0x1ce852(480) + _0x1ce852(555)][_0x1ce852(416)]((_0x166601, _0x2a808c) => {
      const _0x534983 = _0x1ce852, _0x1de3b4 = document[_0x534983(715) + _0x534983(381)](_0x58e3c5[_0x534983(694)]);
      _0x1de3b4[_0x534983(506)] = _0x534983(348) + _0x534983(572) + _0x534983(677) + _0x534983(301) + _0x2fdf76, _0x1de3b4[_0x534983(525)] = () => playChannel(_0x166601, _0x1a291c[_0x534983(403)]), _0x2b977e[_0x534983(515) + "d"](_0x1de3b4), _0x2fdf76++;
    });
  }), document[_0x5e8cff(539) + _0x5e8cff(359)](_0x4d1243[_0x5e8cff(441)])[_0x5e8cff(368)][_0x5e8cff(437)] = _0x4d1243[_0x5e8cff(574)];
}
function populateFilters(_0x3727d5) {
  const _0x3034e0 = _0x545fca, _0x30537e = {woATc: _0x3034e0(342), AlJYb: function (_0x5481ae, _0x3c92fd) {
    return _0x5481ae(_0x3c92fd);
  }, ztKGp: _0x3034e0(421), TYocJ: _0x3034e0(364) + "er", KQuVD: _0x3034e0(603) + _0x3034e0(579) + _0x3034e0(590) + _0x3034e0(495), HONVC: _0x3034e0(603) + _0x3034e0(579) + _0x3034e0(485) + _0x3034e0(338) + "n>"}, _0xdd6536 = document[_0x3034e0(539) + _0x3034e0(359)](_0x30537e[_0x3034e0(611)]), _0x218929 = document[_0x3034e0(539) + _0x3034e0(359)](_0x30537e[_0x3034e0(327)]);
  _0xdd6536[_0x3034e0(506)] = _0x30537e[_0x3034e0(404)], _0x218929[_0x3034e0(506)] = _0x30537e[_0x3034e0(473)];
  const _0x17c9ca = [...new Set(_0x3727d5[_0x3034e0(324)](_0x35cd6f => _0x35cd6f[_0x3034e0(520)]))], _0x3faa23 = [...new Set(_0x3727d5[_0x3034e0(324)](_0x3decbe => _0x3decbe[_0x3034e0(725)]))];
  _0x17c9ca[_0x3034e0(416)](_0x2c10cf => {
    const _0x500b1c = _0x3034e0, _0x7c2858 = document[_0x500b1c(715) + _0x500b1c(381)](_0x30537e[_0x500b1c(698)]);
    _0x7c2858[_0x500b1c(391)] = _0x2c10cf[_0x500b1c(651) + "e"](), _0x7c2858[_0x500b1c(712) + "t"] = _0x30537e[_0x500b1c(609)](formatDate, _0x2c10cf), _0xdd6536[_0x500b1c(515) + "d"](_0x7c2858);
  }), _0x3faa23[_0x3034e0(416)](_0x7f5764 => {
    const _0x3ef12c = _0x3034e0, _0x4090b9 = document[_0x3ef12c(715) + _0x3ef12c(381)](_0x30537e[_0x3ef12c(698)]);
    _0x4090b9[_0x3ef12c(391)] = _0x7f5764[_0x3ef12c(651) + "e"](), _0x4090b9[_0x3ef12c(712) + "t"] = _0x7f5764, _0x218929[_0x3ef12c(515) + "d"](_0x4090b9);
  });
}
function filterMatches() {
  const _0x17bb9c = _0x545fca, _0x35e028 = {OKFws: _0x17bb9c(459), dBHbG: _0x17bb9c(433) + "e", BuBSM: _0x17bb9c(351), rlrpo: function (_0x2d0e01, _0x527bb8) {
    return _0x2d0e01 === _0x527bb8;
  }, ZkHvm: function (_0x5d5be1, _0xef1d15) {
    return _0x5d5be1 === _0xef1d15;
  }, yZVxn: function (_0x54382f, _0x3d28ad) {
    return _0x54382f && _0x3d28ad;
  }, DLDNT: _0x17bb9c(460) + "s", HFYQv: function (_0x2e6108, _0x1a5457) {
    return _0x2e6108 === _0x1a5457;
  }, BkEeG: _0x17bb9c(343), QknZN: function (_0x4bd210, _0x497f63) {
    return _0x4bd210 !== _0x497f63;
  }, eUzfM: function (_0x525b4f, _0x1aee98) {
    return _0x525b4f !== _0x1aee98;
  }, lUabC: _0x17bb9c(519), nOooK: _0x17bb9c(421), CCzaC: _0x17bb9c(364) + "er", xCzkP: _0x17bb9c(615), RutGw: _0x17bb9c(535) + _0x17bb9c(434), bjGPp: _0x17bb9c(514), zAlHQ: _0x17bb9c(329)}, _0x418f93 = document[_0x17bb9c(539) + _0x17bb9c(359)](_0x35e028[_0x17bb9c(680)])[_0x17bb9c(391)][_0x17bb9c(651) + "e"](), _0x1abba3 = document[_0x17bb9c(539) + _0x17bb9c(359)](_0x35e028[_0x17bb9c(707)])[_0x17bb9c(391)][_0x17bb9c(651) + "e"](), _0x15ca92 = document[_0x17bb9c(539) + _0x17bb9c(359)](_0x35e028[_0x17bb9c(458)])[_0x17bb9c(391)][_0x17bb9c(651) + "e"](), _0x4c3711 = document[_0x17bb9c(361) + _0x17bb9c(471)](_0x35e028[_0x17bb9c(570)]);
  let _0x32a7a0 = 0;
  const _0x5f5a9a = Array[_0x17bb9c(553)](_0x4c3711)[_0x17bb9c(549)](_0x5902ad => {
    const _0xf5399c = _0x17bb9c, _0x68c8f7 = _0x5902ad[_0xf5399c(612) + "te"](_0x35e028[_0xf5399c(398)]), _0x174fe2 = _0x5902ad[_0xf5399c(612) + "te"](_0x35e028[_0xf5399c(557)]), _0x63bc63 = _0x5902ad[_0xf5399c(612) + "te"](_0x35e028[_0xf5399c(628)]), _0x3040cd = !_0x418f93 || _0x35e028[_0xf5399c(528)](_0x68c8f7, _0x418f93), _0x172cf6 = !_0x1abba3 || _0x35e028[_0xf5399c(729)](_0x174fe2, _0x1abba3), _0xc56d7f = !_0x15ca92 || _0x63bc63[_0xf5399c(562)](_0x15ca92);
    return _0x35e028[_0xf5399c(591)](_0x3040cd, _0x172cf6) && _0xc56d7f;
  })[_0x17bb9c(363)]((_0x197b55, _0x467655) => {
    const _0x4d2940 = _0x17bb9c, _0xbffb60 = _0x197b55[_0x4d2940(612) + "te"](_0x35e028[_0x4d2940(450)]), _0x4eae77 = _0x467655[_0x4d2940(612) + "te"](_0x35e028[_0x4d2940(450)]);
    if (_0x35e028[_0x4d2940(643)](_0xbffb60, _0x35e028[_0x4d2940(598)]) && _0x35e028[_0x4d2940(435)](_0x4eae77, _0x35e028[_0x4d2940(598)])) return -1;
    if (_0x35e028[_0x4d2940(379)](_0xbffb60, _0x35e028[_0x4d2940(598)]) && _0x35e028[_0x4d2940(643)](_0x4eae77, _0x35e028[_0x4d2940(598)])) return 1;
    return 0;
  });
  _0x4c3711[_0x17bb9c(416)](_0x12efa7 => _0x12efa7[_0x17bb9c(368)][_0x17bb9c(437)] = _0x17bb9c(408)), _0x5f5a9a[_0x17bb9c(416)](_0x3d39fe => {
    const _0x1f9c3c = _0x17bb9c;
    _0x3d39fe[_0x1f9c3c(368)][_0x1f9c3c(437)] = _0x35e028[_0x1f9c3c(453)], _0x32a7a0++;
  });
  const _0x10837f = document[_0x17bb9c(539) + _0x17bb9c(359)](_0x35e028[_0x17bb9c(417)]);
  _0x35e028[_0x17bb9c(643)](_0x32a7a0, 0) ? _0x10837f[_0x17bb9c(466)][_0x17bb9c(523)](_0x35e028[_0x17bb9c(386)]) : _0x10837f[_0x17bb9c(466)][_0x17bb9c(699)](_0x35e028[_0x17bb9c(386)]);
}
function resetFilters() {
  const _0x2c909f = _0x545fca, _0x698d30 = {RuVBE: _0x2c909f(421), LBWEt: _0x2c909f(364) + "er", dBEFd: _0x2c909f(615), hdLod: function (_0x325832) {
    return _0x325832();
  }};
  document[_0x2c909f(539) + _0x2c909f(359)](_0x698d30[_0x2c909f(686)])[_0x2c909f(391)] = "", document[_0x2c909f(539) + _0x2c909f(359)](_0x698d30[_0x2c909f(551)])[_0x2c909f(391)] = "", document[_0x2c909f(539) + _0x2c909f(359)](_0x698d30[_0x2c909f(420)])[_0x2c909f(391)] = "", _0x698d30[_0x2c909f(522)](filterMatches);
}
function debounce(_0x58541e, _0x3ee88c) {
  const _0x3c8f27 = {KuWlA: function (_0x29b6cc, _0x599373) {
    return _0x29b6cc(_0x599373);
  }, WhFRm: function (_0x70a101, _0x14d674, _0x2e09b4) {
    return _0x70a101(_0x14d674, _0x2e09b4);
  }};
  let _0x37c54f;
  return function (..._0x51c21) {
    const _0x242a3d = _0x26bf;
    _0x3c8f27[_0x242a3d(315)](clearTimeout, _0x37c54f), _0x37c54f = _0x3c8f27[_0x242a3d(713)](setTimeout, () => _0x58541e[_0x242a3d(478)](this, _0x51c21), _0x3ee88c);
  };
}
document[_0x545fca(539) + _0x545fca(359)](_0x545fca(615))[_0x545fca(645) + _0x545fca(349)](_0x545fca(560), debounce(filterMatches, 300)), document[_0x545fca(539) + _0x545fca(359)](_0x545fca(421))[_0x545fca(645) + _0x545fca(349)](_0x545fca(483), filterMatches), document[_0x545fca(539) + _0x545fca(359)](_0x545fca(364) + "er")[_0x545fca(645) + _0x545fca(349)](_0x545fca(483), filterMatches), document[_0x545fca(645) + _0x545fca(349)](_0x545fca(532) + _0x545fca(354), loadMatches), window[_0x545fca(414)] = function () {
  const _0xac31a9 = _0x545fca, _0x163294 = {Obvmu: function (_0x5c6f87) {
    return _0x5c6f87();
  }};
  _0x163294[_0xac31a9(312)](scrollFunction);
};
function scrollFunction() {
  const _0x2d5cb5 = _0x545fca, _0x42caff = {OosPI: function (_0x3504c8, _0x1df8a7) {
    return _0x3504c8 > _0x1df8a7;
  }, vZWTQ: _0x2d5cb5(352) + _0x2d5cb5(605), JyTJs: _0x2d5cb5(504), hZNKS: _0x2d5cb5(408)};
  _0x42caff[_0x2d5cb5(536)](document[_0x2d5cb5(373)][_0x2d5cb5(665)], 20) || _0x42caff[_0x2d5cb5(536)](document[_0x2d5cb5(507) + _0x2d5cb5(333)][_0x2d5cb5(665)], 20) ? document[_0x2d5cb5(539) + _0x2d5cb5(359)](_0x42caff[_0x2d5cb5(656)])[_0x2d5cb5(368)][_0x2d5cb5(437)] = _0x42caff[_0x2d5cb5(516)] : document[_0x2d5cb5(539) + _0x2d5cb5(359)](_0x42caff[_0x2d5cb5(656)])[_0x2d5cb5(368)][_0x2d5cb5(437)] = _0x42caff[_0x2d5cb5(339)];
}
function _0x2f4a() {
  const _0x32b4bc = ["floor", 'lick="play', "March", "23795c", "VJTQW", "atchId ", "league", "match/matc", "qqNFN", "i> ", "ZkHvm", '="0" scrol', "May", "210584ZJMOyB", "Server ", "iframeURL", "an.json", "/business/", "      ", "YVUKL", "tHhDm", "0000", "scheduleCo", "BedBJ", "')\">", "Obvmu", "<span clas", "teams", "KuWlA", "sQHEZ", 'rue"></ifr', "els:", 'nfo">\n    ', "mnkvA", "KWooc", "eaBaB", "\nLink: htt", "map", "ailed", " Soon...</", "TYocJ", "getFullYea", "show", "data-timer", "time", "PyEPA", "ement", "YbtzT", ":AAGG4SAfi", "sponse was", "iNCHj", "gue</optio", "hZNKS", 't="100%" f', "         <", "option", "live", "an>", "bLbKd", 's="countdo', 's="watch-b', '<i class="', "stener", "ame-origin", "data-teams", "scrollToTo", "16:9", "Loaded", "PsAcY", "</i> ", "YaheI", "oEdbI", "ById", "start", "querySelec", "fXpSd", "sort", "leagueFilt", "fxblv", "fkYtS", "GOMZU", "style", "className", "ard", 'sers"></i>', "fWpdM", "body", "kRhJy", 'lscreen="t', "znIXK", "log", "December", "eUzfM", "bDdQF", "ent", "button", 'nclick="pl', "GnMlQ", 'wn" data-t', "zAlHQ", 'ndar-alt">', "TImKc", "lXTft", "getItem", "value", "atchId=", "match", "PiwBF", 'ls"><i cla', "dJuoU", "cation:", "OKFws", "HqYNs", "September", "dcast-towe", "QQciq", "iframe_url", "KQuVD", "Beats", "ntainer", "disclaimer", "none", " </div>\n  ", "serverMenu", "GQaQg", "liveUrl", "finally", "onscroll", "xFOKY", "forEach", "bjGPp", "</span>\n  ", "OtyUi", "dBEFd", "dateFilter", "data", "', '", "/sendMessa", "wnjfj", "Error send", "iZ76AHaEWo", "gpyqG", "agLOl", "schedule-c", "ication:", '"><i class', "data-leagu", "card", "QknZN", "nyZxQ", "display", 'imer="', "y/zonaspor", "kAcrp", "pToWY", "i.telegram", "mZeQh", "ame>", "🚨 Live Now", "wOIoM", "h_info?mat", "VUQOh", "llow-scrip", "DLDNT", "gOGrR", "BSiAb", "lUabC", "channelsLi", "Live URL f", "Modal", "ing notifi", "xCzkP", "data-date", "data-statu", "result", "rameborder", "matchTitle", "span>", "CkhEP", "classList", "UZAEW", "3zb296.app", "HtWue", "7090940coCkQp", "torAll", 'ss="fas fa', "HONVC", "on sent su", "June", "name", "lAXwZ", "apply", "SnGtw", "streaming_", "NREAQ", "status", "change", "sentNotifi", "ter by Lea", "qcLkW", "650RoPThD", "        <b", "November", "fetch vide", "niJKA", "April", 's="date"><', "getMonth", "e</option>", " <div clas", "https://ap", " URL for m", "January", "ByMlk", "ccessfully", "jwplayerCo", "\n         ", "block", "io/percoba", "innerHTML", "documentEl", "LRdSR", "fcsPM", " 🚨\nDate: ", "setItem", "https://wa", "880227JAIEXd", "noMatches", "appendChil", "JyTJs", "as fa-broa", "tfZzj", "flex", "date", "catch", "hdLod", "add", "kLIsx", "onclick", "nnchQ", "nBqIB", "rlrpo", " not ok", "&text=", "getTime", "DOMContent", "sEywn", "FCMxq", ".schedule-", "OosPI", "send notif", "BmvAT", "getElement", "kHpcN", "IFlri", "setAttribu", "chId=", "Failed to ", "VqDkP", "XrfMa", "NPfRG", "View", "filter", "then", "LBWEt", "HbZrj", "from", "fetch live", "urls", "VvKiG", "dBHbG", "code", "zCuLQ", "input", "\nTime: ", "includes", "eTAjU", "/v1/match/", "')\">\n     ", 'ass="teams', "as fa-cale", "load live ", "PeAdH", "RutGw", "length", "fas fa-ser", "channels?m", "qkzRj", "i.90min.to", "July", "100%", "gaKxH", 'lue="">Fil', "es:", "          ", "dBOFw", 'ling="no"a', "</button>\n", "Network re", "ps://bit.l", "xMRXW", "IUEvm", "8oRFOgh", "ter by Dat", "yZVxn", 'i class="f', "error", 's="live"><', 's="match-i', "Match('", "getDate", "BkEeG", "videoId", "cations", "ftJtt", 'c="', "<option va", "ve Now</sp", "pButton", "6RMmJZr", "22281EHiKNs", "BxDmb", "AlJYb", "2060130UrKLVx", "ztKGp", "getAttribu", "parse", "oUrl for m", "teamSearch", "tlive", "1391979650", "zvc2_I5WDk", "utcYR", "7484Zuisrx", "XKsEu", "ge?chat_id", " | ", "PAuhq", "target", 'utton" onc', "loader", "BuBSM", "GET", ".org/bot", "Dmwmz", "Mcbtg", '00%" heigh', "thub.io/bo", "gDwBv", "all", "OEMXt", "jekeS", "/i> Watch\n", "json", "oxLVR", "videoUrl", "HFYQv", "AyDwb", "addEventLi", "URL:", "yUTvP", "qrbHC", '="fas fa-u', "load match", "toLowerCas", "has", "utton clas", 'ass="detai', "August", "vZWTQ", "nvKsI", "UgtKl", "LyzgZ", "la.github.", "mQTjG", "WsOlH", "smooth", "Notificati", "scrollTop", "stringify", "jfVAw", "<iframe sr", "wUywN", "xCoQm", "  <span cl", "https://83", "7598004626", "339563AxKlam", "div", "nLTzx", 'ver"></i> ', "duRmO", "AOuuk", "nOooK", 'r"></i> Li', " <button o", "ayChannel(", '">Starting', "ts allow-s", "RuVBE", "\nLeague: ", "sTtFp", "[data-time", "as fa-play", "QZkhx", '-clock"></', "rtakita.gi", "ZOyzH", '" allowful', "nwKtP", "m3u8Url", "woATc", "remove", "IzUAF", "upcoming", "channelIte", '" width="1', "load chann", "February", '-circle"><', "CCzaC", "setup", "scrollInto", "October", "FwZft", "textConten", "WhFRm", "klMqp", "createElem", "yMgPj", "GbSFq", "wyGii"];
  _0x2f4a = function () {
    return _0x32b4bc;
  };
  return _0x2f4a();
}
function scrollToTop() {
  const _0x2c0f1e = _0x545fca;
  document[_0x2c0f1e(373)][_0x2c0f1e(665)] = 0, document[_0x2c0f1e(507) + _0x2c0f1e(333)][_0x2c0f1e(665)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x553283) {
  const _0x3f556e = _0x545fca, _0x338805 = {eaBaB: _0x3f556e(664) + _0x3f556e(474) + _0x3f556e(501), SnGtw: _0x3f556e(544) + _0x3f556e(537) + _0x3f556e(431), sEywn: _0x3f556e(426) + _0x3f556e(457) + _0x3f556e(397), eTAjU: function (_0xf2a224, _0x466da2) {
    return _0xf2a224(_0x466da2);
  }, kAcrp: function (_0x625d5c, _0x18fbe0, _0x3f9570) {
    return _0x625d5c(_0x18fbe0, _0x3f9570);
  }, gpyqG: _0x3f556e(629)}, _0x43382d = _0x3f556e(445) + ": " + _0x553283[_0x3f556e(314)] + _0x3f556e(510) + _0x338805[_0x3f556e(563)](formatDate, _0x553283[_0x3f556e(520)]) + _0x3f556e(561) + _0x553283[_0x3f556e(331)] + _0x3f556e(687) + _0x553283[_0x3f556e(725)] + (_0x3f556e(323) + _0x3f556e(586) + _0x3f556e(439) + _0x3f556e(616)), _0x4dc370 = _0x3f556e(497) + _0x3f556e(442) + _0x3f556e(630) + telegramBotToken + (_0x3f556e(424) + _0x3f556e(622) + "=") + telegramChatId + _0x3f556e(530) + _0x338805[_0x3f556e(563)](encodeURIComponent, _0x43382d);
  _0x338805[_0x3f556e(440)](fetch, _0x4dc370, {method: _0x338805[_0x3f556e(428)]})[_0x3f556e(550)](_0x2a3dad => _0x2a3dad[_0x3f556e(640)]())[_0x3f556e(550)](_0x21e820 => {
    const _0x3ddf87 = _0x3f556e;
    _0x21e820.ok ? console[_0x3ddf87(377)](_0x338805[_0x3ddf87(322)]) : console[_0x3ddf87(593)](_0x338805[_0x3ddf87(479)], _0x21e820);
  })[_0x3f556e(521)](_0x2e9b88 => {
    const _0x1ac28d = _0x3f556e;
    console[_0x1ac28d(593)](_0x338805[_0x1ac28d(533)], _0x2e9b88);
  });
}
function openDisclaimer() {
  const _0x479301 = _0x545fca, _0x1ae2d9 = {lXTft: _0x479301(407) + _0x479301(456), lAXwZ: _0x479301(504)};
  document[_0x479301(539) + _0x479301(359)](_0x1ae2d9[_0x479301(389)])[_0x479301(368)][_0x479301(437)] = _0x1ae2d9[_0x479301(477)];
}
function closeDisclaimer() {
  const _0x4c1cff = _0x545fca, _0x285f2d = {FwZft: _0x4c1cff(407) + _0x4c1cff(456), fXpSd: _0x4c1cff(408)};
  document[_0x4c1cff(539) + _0x4c1cff(359)](_0x285f2d[_0x4c1cff(711)])[_0x4c1cff(368)][_0x4c1cff(437)] = _0x285f2d[_0x4c1cff(362)];
}
window[_0x545fca(525)] = function (_0x2afeb6) {
  const _0x2ca3b9 = _0x545fca, _0x241621 = {nyZxQ: function (_0x4a35d0, _0x519994) {
    return _0x4a35d0 == _0x519994;
  }, znIXK: _0x2ca3b9(407) + _0x2ca3b9(456), gDwBv: function (_0x13c15d) {
    return _0x13c15d();
  }};
  _0x241621[_0x2ca3b9(436)](_0x2afeb6[_0x2ca3b9(625)], document[_0x2ca3b9(539) + _0x2ca3b9(359)](_0x241621[_0x2ca3b9(376)])) && _0x241621[_0x2ca3b9(635)](closeDisclaimer);
};
