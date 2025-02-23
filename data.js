const _0xf6f8c = _0x37b6;
(function (_0x482d52, _0x26d1eb) {
  const _0xee5356 = _0x37b6, _0x20eff4 = _0x482d52();
  while (true) {
    try {
      const _0x105e34 = -parseInt(_0xee5356(505)) / 1 + parseInt(_0xee5356(582)) / 2 + parseInt(_0xee5356(826)) / 3 * (-parseInt(_0xee5356(871)) / 4) + parseInt(_0xee5356(856)) / 5 + parseInt(_0xee5356(869)) / 6 + parseInt(_0xee5356(636)) / 7 * (-parseInt(_0xee5356(777)) / 8) + parseInt(_0xee5356(642)) / 9;
      if (_0x105e34 === _0x26d1eb) break; else _0x20eff4.push(_0x20eff4.shift());
    } catch (_0xf44709) {
      _0x20eff4.push(_0x20eff4.shift());
    }
  }
}(_0x1a93, 904477));
const telegramBotToken = _0xf6f8c(870) + _0xf6f8c(626) + _0xf6f8c(568) + _0xf6f8c(601) + _0xf6f8c(839), telegramChatId = _0xf6f8c(519), sentNotifications = new Set;
function formatDate(_0x1e1008) {
  const _0x588efa = _0xf6f8c, _0x32f841 = {VhmCH: _0x588efa(675), sIoZO: _0x588efa(735), jLiIY: _0x588efa(564), DwXOt: _0x588efa(503), cmugW: _0x588efa(801), ALcvd: _0x588efa(575), OoYqg: _0x588efa(689), mJdDq: _0x588efa(836), uBIpP: _0x588efa(863), EyOVt: _0x588efa(833), gMgTB: _0x588efa(694), APHuQ: _0x588efa(590)}, _0x3f9b0a = [_0x32f841[_0x588efa(628)], _0x32f841[_0x588efa(852)], _0x32f841[_0x588efa(796)], _0x32f841[_0x588efa(583)], _0x32f841[_0x588efa(846)], _0x32f841[_0x588efa(749)], _0x32f841[_0x588efa(506)], _0x32f841[_0x588efa(743)], _0x32f841[_0x588efa(635)], _0x32f841[_0x588efa(708)], _0x32f841[_0x588efa(738)], _0x32f841[_0x588efa(557)]], _0x33c733 = new Date(_0x1e1008), _0x2728b0 = _0x33c733[_0x588efa(768)](), _0x157eba = _0x3f9b0a[_0x33c733[_0x588efa(872)]()], _0x481624 = _0x33c733[_0x588efa(750) + "r"]();
  return _0x2728b0 + " " + _0x157eba + " " + _0x481624;
}
async function loadMatches() {
  const _0x1040fa = _0xf6f8c, _0x2c1780 = {ZzyCm: _0x1040fa(844), uMgHV: _0x1040fa(623), YBDEK: function (_0x5c6c18) {
    return _0x5c6c18();
  }, TPnWZ: function (_0x1d9d33, _0x550cb3) {
    return _0x1d9d33(_0x550cb3);
  }, TXtaS: function (_0x4d274e, _0x4a28be) {
    return _0x4d274e(_0x4a28be);
  }, nMseX: function (_0x3faf0e) {
    return _0x3faf0e();
  }, Dmdqb: function (_0xae5fb6, _0x487845, _0x4267d5) {
    return _0xae5fb6(_0x487845, _0x4267d5);
  }, msKeq: _0x1040fa(656) + _0x1040fa(661) + _0x1040fa(843), HcKwK: _0x1040fa(696), xrmuh: _0x1040fa(781), CstKU: _0x1040fa(873)};
  try {
    document[_0x1040fa(525) + _0x1040fa(551)](_0x2c1780[_0x1040fa(820)])[_0x1040fa(771)][_0x1040fa(645)] = _0x2c1780[_0x1040fa(701)];
    const _0x22e134 = await _0x2c1780[_0x1040fa(619)](fetchMatches);
    _0x2c1780[_0x1040fa(720)](renderMatches, _0x22e134), _0x2c1780[_0x1040fa(640)](populateFilters, _0x22e134), _0x2c1780[_0x1040fa(619)](filterMatches), _0x2c1780[_0x1040fa(580)](updateCountdown), _0x2c1780[_0x1040fa(765)](setInterval, updateCountdown, 1e3);
  } catch (_0x48ae1b) {
    console[_0x1040fa(594)](_0x2c1780[_0x1040fa(602)], _0x48ae1b), document[_0x1040fa(525) + _0x1040fa(551)](_0x2c1780[_0x1040fa(683)])[_0x1040fa(634)][_0x1040fa(860)](_0x2c1780[_0x1040fa(653)]);
  } finally {
    document[_0x1040fa(525) + _0x1040fa(551)](_0x2c1780[_0x1040fa(820)])[_0x1040fa(771)][_0x1040fa(645)] = _0x2c1780[_0x1040fa(848)];
  }
}
async function fetchMatches() {
  const _0x53843b = _0xf6f8c, _0x296087 = {nXhWW: function (_0x4f7f72, _0x3d9451) {
    return _0x4f7f72(_0x3d9451);
  }, Qwwop: _0x53843b(716) + _0x53843b(876) + _0x53843b(745) + _0x53843b(829) + _0x53843b(669) + _0x53843b(800), HDVFo: _0x53843b(756) + _0x53843b(704) + _0x53843b(668), ztTfr: function (_0x4dbcc2, _0x1963e4) {
    return _0x4dbcc2(_0x1963e4);
  }}, _0x5cee08 = await _0x296087[_0x53843b(571)](fetch, _0x296087[_0x53843b(622)]);
  if (!_0x5cee08.ok) throw new Error(_0x296087[_0x53843b(563)]);
  const _0x8cc03b = await _0x5cee08[_0x53843b(666)](), _0x5456c6 = await _0x296087[_0x53843b(544)](fetchLiveUrls, _0x8cc03b);
  return _0x8cc03b[_0x53843b(638)](_0x323fb4 => {
    const _0x4c8925 = _0x53843b;
    _0x323fb4[_0x4c8925(632)] = _0x5456c6[_0x323fb4[_0x4c8925(803)]] || _0x323fb4[_0x4c8925(725)];
  }), _0x8cc03b;
}
async function fetchLiveUrls(_0x2d86a4) {
  const _0x1cc5ba = _0xf6f8c, _0x2bfea4 = {hbwqI: function (_0x66167a, _0x1b7afb) {
    return _0x66167a(_0x1b7afb);
  }, ybXPW: function (_0x260a44, _0x37169e) {
    return _0x260a44 > _0x37169e;
  }, fWKqu: function (_0x3c2e15, _0x6ae31d) {
    return _0x3c2e15 === _0x6ae31d;
  }, MXoOJ: _0x1cc5ba(813)}, _0x487bbe = _0x2d86a4[_0x1cc5ba(608)](_0x372fa6 => _0x372fa6[_0x1cc5ba(803)]), _0x390e11 = {}, _0x4377c0 = _0x487bbe[_0x1cc5ba(608)](async _0x286df5 => {
    const _0x32a73f = _0x1cc5ba;
    try {
      const _0x30a3de = await _0x2bfea4[_0x32a73f(819)](fetch, _0x32a73f(554) + _0x32a73f(606) + _0x32a73f(698) + _0x32a73f(672) + _0x32a73f(646) + _0x286df5);
      if (_0x30a3de.ok) {
        const _0x3e103e = await _0x30a3de[_0x32a73f(666)]();
        _0x3e103e[_0x32a73f(513)] && _0x2bfea4[_0x32a73f(662)](_0x3e103e[_0x32a73f(552)][_0x32a73f(794)], 0) && (_0x390e11[_0x286df5] = _0x3e103e[_0x32a73f(552)][0][_0x32a73f(648) + _0x32a73f(786)][0]);
      }
    } catch (_0x4f2eba) {
      console[_0x32a73f(594)](_0x32a73f(656) + _0x32a73f(832) + _0x32a73f(737) + _0x32a73f(861) + _0x286df5 + ":", _0x4f2eba);
    }
    try {
      const _0x28f6e2 = await _0x2bfea4[_0x32a73f(819)](fetch, _0x32a73f(782) + _0x32a73f(587) + _0x32a73f(603) + _0x32a73f(858) + _0x32a73f(518) + _0x32a73f(610) + _0x286df5);
      if (_0x28f6e2.ok) {
        const _0x396068 = await _0x28f6e2[_0x32a73f(666)]();
        _0x2bfea4[_0x32a73f(713)](_0x396068[_0x32a73f(654)], _0x2bfea4[_0x32a73f(500)]) && _0x396068[_0x32a73f(828)][_0x32a73f(552)][_0x32a73f(762)][_0x32a73f(670)] && (_0x390e11[_0x286df5] = _0x396068[_0x32a73f(828)][_0x32a73f(552)][_0x32a73f(762)][_0x32a73f(670)]);
      }
    } catch (_0x149050) {
      console[_0x32a73f(594)](_0x32a73f(656) + _0x32a73f(586) + _0x32a73f(733) + _0x32a73f(861) + _0x286df5 + ":", _0x149050);
    }
  });
  return await Promise[_0x1cc5ba(578)](_0x4377c0), _0x390e11;
}
function renderMatches(_0x22181b) {
  const _0x3cdb5d = _0xf6f8c, _0x3889ab = {EyYGH: function (_0x3d9e0d, _0x3a5411) {
    return _0x3d9e0d >= _0x3a5411;
  }, jWZFs: function (_0x187b7f, _0x423d15) {
    return _0x187b7f <= _0x423d15;
  }, UCQFd: function (_0x1683b8, _0xe869f3) {
    return _0x1683b8 + _0xe869f3;
  }, pcQfZ: function (_0x398ddc, _0x3c473e) {
    return _0x398ddc * _0x3c473e;
  }, WxdBg: function (_0x349bd7, _0x5183b1) {
    return _0x349bd7 * _0x5183b1;
  }, IohyF: function (_0x510573, _0x4293e1) {
    return _0x510573 >= _0x4293e1;
  }, AHPMo: function (_0x4ae850, _0x411158) {
    return _0x4ae850 + _0x411158;
  }, ttPqY: function (_0x3ed477, _0x5afc0a) {
    return _0x3ed477 * _0x5afc0a;
  }, UJwIH: function (_0x4814c2, _0x5e6d8c) {
    return _0x4814c2 * _0x5e6d8c;
  }, KGrRu: function (_0x22fcdb, _0x42b251) {
    return _0x22fcdb && _0x42b251;
  }, twZYe: function (_0x9f667c, _0x3f5b1d) {
    return _0x9f667c && _0x3f5b1d;
  }, FNqkg: function (_0x52d415, _0x57a558) {
    return _0x52d415 <= _0x57a558;
  }, aEUGt: function (_0x4185d8, _0x159c00) {
    return _0x4185d8 + _0x159c00;
  }, GMehj: function (_0x271de3, _0x4b9772) {
    return _0x271de3 * _0x4b9772;
  }, CjshM: _0x3cdb5d(707), YHEUc: _0x3cdb5d(530) + _0x3cdb5d(524), IIGWf: _0x3cdb5d(611), xdUyU: _0x3cdb5d(537) + "e", vXjKp: _0x3cdb5d(849), moKQy: _0x3cdb5d(811) + "s", Eznfc: _0x3cdb5d(864), xWDyc: _0x3cdb5d(757), OyZsx: function (_0x4771ee, _0x29a3b6) {
    return _0x4771ee(_0x29a3b6);
  }, GxAhu: _0x3cdb5d(659) + _0x3cdb5d(677) + _0x3cdb5d(772) + _0x3cdb5d(700) + _0x3cdb5d(614) + _0x3cdb5d(882) + _0x3cdb5d(783) + _0x3cdb5d(547), VcUHq: _0x3cdb5d(799) + _0x3cdb5d(539)}, _0x3f34a8 = document[_0x3cdb5d(525) + _0x3cdb5d(551)](_0x3889ab[_0x3cdb5d(726)]);
  _0x3f34a8[_0x3cdb5d(817)] = "", _0x22181b[_0x3cdb5d(690)]((_0x2ee153, _0x259be3) => {
    const _0x145bf4 = _0x3cdb5d, _0xb83799 = new Date, _0x1adecf = new Date(_0x2ee153[_0x145bf4(579)] + "T" + _0x2ee153[_0x145bf4(511)]), _0x1b7f29 = new Date(_0x259be3[_0x145bf4(579)] + "T" + _0x259be3[_0x145bf4(511)]), _0x5a084e = _0x3889ab[_0x145bf4(710)](_0xb83799, _0x1adecf) && _0x3889ab[_0x145bf4(854)](_0xb83799, new Date(_0x3889ab[_0x145bf4(510)](_0x1adecf[_0x145bf4(542)](), _0x3889ab[_0x145bf4(859)](_0x3889ab[_0x145bf4(515)](_0x3889ab[_0x145bf4(859)](2, 60), 60), 1e3)))), _0x5756d6 = _0x3889ab[_0x145bf4(637)](_0xb83799, _0x1b7f29) && _0x3889ab[_0x145bf4(854)](_0xb83799, new Date(_0x3889ab[_0x145bf4(625)](_0x1b7f29[_0x145bf4(542)](), _0x3889ab[_0x145bf4(859)](_0x3889ab[_0x145bf4(778)](_0x3889ab[_0x145bf4(731)](2, 60), 60), 1e3))));
    if (_0x3889ab[_0x145bf4(543)](_0x5a084e, !_0x5756d6)) return -1;
    if (_0x3889ab[_0x145bf4(522)](!_0x5a084e, _0x5756d6)) return 1;
    return 0;
  }), _0x22181b[_0x3cdb5d(638)](_0x1503c0 => {
    const _0x382521 = _0x3cdb5d, _0x3f227d = _0x1503c0[_0x382521(632)] || _0x1503c0[_0x382521(725)], _0x47ac75 = new Date, _0x21c0c6 = new Date(_0x1503c0[_0x382521(579)] + "T" + _0x1503c0[_0x382521(511)]), _0x1153c6 = _0x3889ab[_0x382521(637)](_0x47ac75, _0x21c0c6) && _0x3889ab[_0x382521(780)](_0x47ac75, new Date(_0x3889ab[_0x382521(779)](_0x21c0c6[_0x382521(542)](), _0x3889ab[_0x382521(859)](_0x3889ab[_0x382521(532)](_0x3889ab[_0x382521(731)](2, 60), 60), 1e3)))), _0x1961f2 = document[_0x382521(494) + _0x382521(514)](_0x3889ab[_0x382521(569)]);
    _0x1961f2[_0x382521(565)] = _0x3889ab[_0x382521(599)], _0x1961f2[_0x382521(784) + "te"](_0x3889ab[_0x382521(830)], _0x1503c0[_0x382521(579)][_0x382521(664) + "e"]()), _0x1961f2[_0x382521(784) + "te"](_0x3889ab[_0x382521(581)], _0x1503c0[_0x382521(841)][_0x382521(664) + "e"]()), _0x1961f2[_0x382521(784) + "te"](_0x3889ab[_0x382521(857)], _0x1503c0[_0x382521(868)][_0x382521(664) + "e"]()), _0x1961f2[_0x382521(784) + "te"](_0x3889ab[_0x382521(699)], _0x1153c6 ? _0x3889ab[_0x382521(773)] : _0x3889ab[_0x382521(520)]);
    const _0x4daab9 = !_0x1153c6 ? _0x382521(659) + _0x382521(767) + _0x382521(570) + _0x382521(592) + _0x1503c0[_0x382521(579)] + "T" + _0x1503c0[_0x382521(511)] + (_0x382521(802) + _0x382521(644) + _0x382521(534)) : "";
    _0x1961f2[_0x382521(817)] = _0x382521(516) + _0x382521(722) + _0x382521(499) + _0x382521(517) + _0x382521(617) + _0x382521(722) + _0x382521(722) + _0x382521(659) + _0x382521(630) + _0x382521(772) + _0x382521(529) + _0x382521(556) + _0x382521(825) + _0x3889ab[_0x382521(673)](formatDate, _0x1503c0[_0x382521(579)]) + (_0x382521(759) + _0x382521(722) + _0x382521(722) + _0x382521(888) + _0x382521(734) + _0x382521(649) + _0x382521(527) + _0x382521(867) + " ") + _0x1503c0[_0x382521(868)] + (_0x382521(759) + _0x382521(722) + _0x382521(722) + _0x382521(888) + _0x382521(789) + _0x382521(498) + _0x382521(715) + _0x382521(507) + _0x382521(808)) + _0x1503c0[_0x382521(511)] + _0x382521(723) + _0x1503c0[_0x382521(841)] + (_0x382521(759) + _0x382521(722) + _0x382521(722) + "  ") + (_0x1153c6 ? _0x3889ab[_0x382521(631)] : _0x4daab9) + (_0x382521(516) + _0x382521(722) + _0x382521(740) + _0x382521(722) + _0x382521(496) + _0x382521(566) + _0x382521(589) + _0x382521(793) + _0x382521(705) + _0x382521(533)) + _0x1503c0[_0x382521(803)] + _0x382521(598) + _0x1503c0[_0x382521(632)] + _0x382521(598) + _0x1503c0[_0x382521(725)] + _0x382521(598) + _0x1503c0[_0x382521(868)] + (_0x382521(815) + _0x382521(722) + _0x382521(605) + _0x382521(772) + _0x382521(660) + _0x382521(712) + _0x382521(679) + _0x382521(722) + _0x382521(722) + _0x382521(607) + _0x382521(722) + _0x382521(620)), _0x3f34a8[_0x382521(755) + "d"](_0x1961f2), _0x1153c6 && !sentNotifications[_0x382521(613)](_0x1503c0[_0x382521(803)]) && (_0x3889ab[_0x382521(673)](sendTelegramNotification, _0x1503c0), sentNotifications[_0x382521(860)](_0x1503c0[_0x382521(803)]));
  });
}
function updateCountdown() {
  const _0x29a12a = _0xf6f8c, _0x11c7b2 = {yXCQD: _0x29a12a(688), tgVPg: function (_0x2362fa, _0x2d90d3) {
    return _0x2362fa - _0x2d90d3;
  }, Lcrza: function (_0x4b403d, _0x5dae1e) {
    return _0x4b403d <= _0x5dae1e;
  }, Iefvk: function (_0x2c394c, _0x1a4d86) {
    return _0x2c394c / _0x1a4d86;
  }, xmlNV: function (_0x15b1fc, _0x4938db) {
    return _0x15b1fc * _0x4938db;
  }, KOkMl: function (_0x5bd634, _0x1de9d9) {
    return _0x5bd634 % _0x1de9d9;
  }, QbsRg: function (_0x408c8b, _0x5f1ece) {
    return _0x408c8b * _0x5f1ece;
  }, pxGUA: function (_0x291b3b, _0x420a3b) {
    return _0x291b3b * _0x420a3b;
  }, DbxNm: function (_0x20a7cf, _0x51a1eb) {
    return _0x20a7cf / _0x51a1eb;
  }, rgtpC: function (_0x432c1c, _0x201dd3) {
    return _0x432c1c % _0x201dd3;
  }, WcjbI: _0x29a12a(838) + "r]"}, _0x153f23 = document[_0x29a12a(730) + _0x29a12a(792)](_0x11c7b2[_0x29a12a(807)]), _0x2cfca1 = new Date;
  _0x153f23[_0x29a12a(638)](_0x2b7177 => {
    const _0x5e86c2 = _0x29a12a, _0x32e7ce = new Date(_0x2b7177[_0x5e86c2(804) + "te"](_0x11c7b2[_0x5e86c2(711)])), _0x5b74dd = _0x11c7b2[_0x5e86c2(736)](_0x32e7ce, _0x2cfca1);
    if (_0x11c7b2[_0x5e86c2(615)](_0x5b74dd, 0)) _0x2b7177[_0x5e86c2(790) + "t"] = ""; else {
      const _0x152c4c = Math[_0x5e86c2(739)](_0x11c7b2[_0x5e86c2(497)](_0x5b74dd, _0x11c7b2[_0x5e86c2(702)](_0x11c7b2[_0x5e86c2(702)](1e3, 60), 60))), _0x32a249 = Math[_0x5e86c2(739)](_0x11c7b2[_0x5e86c2(497)](_0x11c7b2[_0x5e86c2(763)](_0x5b74dd, _0x11c7b2[_0x5e86c2(824)](_0x11c7b2[_0x5e86c2(886)](1e3, 60), 60)), _0x11c7b2[_0x5e86c2(886)](1e3, 60))), _0x25967c = Math[_0x5e86c2(739)](_0x11c7b2[_0x5e86c2(612)](_0x11c7b2[_0x5e86c2(604)](_0x5b74dd, _0x11c7b2[_0x5e86c2(886)](1e3, 60)), 1e3));
      _0x2b7177[_0x5e86c2(790) + "t"] = _0x152c4c + "h " + _0x32a249 + "m " + _0x25967c + "s";
    }
  });
}
function playMatch(_0x1460f4, _0x12a667, _0x123ca7, _0x2a796f) {
  const _0x5a8adf = _0xf6f8c, _0x39c3a4 = {EHRfG: _0x5a8adf(805) + _0x5a8adf(674), ydnox: _0x5a8adf(656) + _0x5a8adf(729) + _0x5a8adf(758), OVofx: function (_0xd997ce, _0x1a7e64) {
    return _0xd997ce(_0x1a7e64);
  }, PNeVQ: _0x5a8adf(862) + _0x5a8adf(539), FUVHT: _0x5a8adf(883), IlUcZ: _0x5a8adf(531), oFZUq: _0x5a8adf(742), dshNg: _0x5a8adf(753), CfqWN: _0x5a8adf(687)};
  let _0x3a83e4 = _0x12a667;
  _0x39c3a4[_0x5a8adf(752)](fetch, _0x12a667)[_0x5a8adf(541)](_0x260da8 => {
    const _0x55a07f = _0x5a8adf;
    if (!_0x260da8.ok) throw new Error(_0x39c3a4[_0x55a07f(724)]);
    return _0x260da8;
  })[_0x5a8adf(650)](_0x34672b => {
    const _0x2c0559 = _0x5a8adf;
    console[_0x2c0559(594)](_0x39c3a4[_0x2c0559(719)], _0x34672b), _0x3a83e4 = _0x123ca7;
  })[_0x5a8adf(834)](() => {
    const _0x3da63e = _0x5a8adf;
    _0x39c3a4[_0x3da63e(752)](jwplayer, _0x39c3a4[_0x3da63e(639)])[_0x3da63e(887)]({file: _0x3a83e4, width: _0x39c3a4[_0x3da63e(652)], aspectratio: _0x39c3a4[_0x3da63e(618)], image: " "}), document[_0x3da63e(525) + _0x3da63e(551)](_0x39c3a4[_0x3da63e(639)])[_0x3da63e(609) + _0x3da63e(596)]({behavior: _0x39c3a4[_0x3da63e(795)], block: _0x39c3a4[_0x3da63e(732)]}), document[_0x3da63e(525) + _0x3da63e(551)](_0x39c3a4[_0x3da63e(874)])[_0x3da63e(790) + "t"] = _0x2a796f, _0x39c3a4[_0x3da63e(752)](loadChannels, _0x1460f4);
  });
}
async function loadChannels(_0x340fa5) {
  const _0x2ca37c = _0xf6f8c, _0x2fcdd4 = {hsZQW: function (_0x45cbc7, _0x228187) {
    return _0x45cbc7(_0x228187);
  }, ZLjbD: _0x2ca37c(756) + _0x2ca37c(704) + _0x2ca37c(668), FIlBx: function (_0x815801, _0x5a731a) {
    return _0x815801 > _0x5a731a;
  }, ZPhcz: function (_0x21a8f5, _0x30965e) {
    return _0x21a8f5(_0x30965e);
  }, RZDeT: function (_0x5d7c5c, _0x31f9e5) {
    return _0x5d7c5c(_0x31f9e5);
  }, oPYnY: _0x2ca37c(558) + "st", ikVNH: _0x2ca37c(873), EUwFi: _0x2ca37c(717), miTpt: _0x2ca37c(656) + _0x2ca37c(624) + _0x2ca37c(774)};
  try {
    const _0x5598d5 = await _0x2fcdd4[_0x2ca37c(878)](fetch, _0x2ca37c(554) + _0x2ca37c(606) + _0x2ca37c(698) + _0x2ca37c(672) + _0x2ca37c(646) + _0x340fa5);
    if (!_0x5598d5.ok) throw new Error(_0x2fcdd4[_0x2ca37c(549)]);
    const _0x38bc55 = await _0x5598d5[_0x2ca37c(666)]();
    _0x38bc55[_0x2ca37c(513)] && _0x2fcdd4[_0x2ca37c(744)](_0x38bc55[_0x2ca37c(552)][_0x2ca37c(794)], 0) ? (_0x2fcdd4[_0x2ca37c(693)](renderChannels, _0x38bc55[_0x2ca37c(552)]), _0x2fcdd4[_0x2ca37c(573)](renderServerMenu, _0x38bc55[_0x2ca37c(552)])) : (document[_0x2ca37c(525) + _0x2ca37c(551)](_0x2fcdd4[_0x2ca37c(810)])[_0x2ca37c(771)][_0x2ca37c(645)] = _0x2fcdd4[_0x2ca37c(881)], document[_0x2ca37c(525) + _0x2ca37c(551)](_0x2fcdd4[_0x2ca37c(847)])[_0x2ca37c(771)][_0x2ca37c(645)] = _0x2fcdd4[_0x2ca37c(881)]);
  } catch (_0x169431) {
    console[_0x2ca37c(594)](_0x2fcdd4[_0x2ca37c(812)], _0x169431), document[_0x2ca37c(525) + _0x2ca37c(551)](_0x2fcdd4[_0x2ca37c(810)])[_0x2ca37c(771)][_0x2ca37c(645)] = _0x2fcdd4[_0x2ca37c(881)], document[_0x2ca37c(525) + _0x2ca37c(551)](_0x2fcdd4[_0x2ca37c(847)])[_0x2ca37c(771)][_0x2ca37c(645)] = _0x2fcdd4[_0x2ca37c(881)];
  }
}
function renderChannels(_0x49d118) {
  const _0x37ceba = _0xf6f8c, _0x272f1d = {tnTpY: _0x37ceba(748) + "ms", FtpDO: _0x37ceba(558) + "st", wAIaX: _0x37ceba(623)}, _0x1dd83c = document[_0x37ceba(525) + _0x37ceba(551)](_0x272f1d[_0x37ceba(818)]);
  _0x1dd83c[_0x37ceba(817)] = "", _0x49d118[_0x37ceba(638)](_0x393401 => {
    const _0x321fc6 = _0x37ceba, _0x492255 = document[_0x321fc6(494) + _0x321fc6(514)]("li");
    _0x492255[_0x321fc6(817)] = _0x321fc6(516) + _0x321fc6(722) + _0x321fc6(686) + _0x321fc6(695) + _0x321fc6(747) + "'" + _0x393401[_0x321fc6(648) + _0x321fc6(786)][0] + _0x321fc6(657) + _0x393401[_0x321fc6(845)] + (_0x321fc6(607) + _0x321fc6(722) + _0x321fc6(620)), _0x1dd83c[_0x321fc6(755) + "d"](_0x492255);
  }), document[_0x37ceba(525) + _0x37ceba(551)](_0x272f1d[_0x37ceba(567)])[_0x37ceba(771)][_0x37ceba(645)] = _0x272f1d[_0x37ceba(540)];
}
function playChannel(_0x5f63e9) {
  const _0x439199 = _0xf6f8c, _0x8adb75 = {Nohuf: function (_0x5e717a, _0x37bfbb) {
    return _0x5e717a(_0x37bfbb);
  }, OUEwl: _0x439199(862) + _0x439199(539), Smcdx: _0x439199(883), KisDA: _0x439199(531), CtnDK: _0x439199(742), ZkWGe: _0x439199(753)};
  _0x8adb75[_0x439199(721)](jwplayer, _0x8adb75[_0x439199(741)])[_0x439199(887)]({file: _0x5f63e9, width: _0x8adb75[_0x439199(553)], aspectratio: _0x8adb75[_0x439199(538)], image: " "}), document[_0x439199(525) + _0x439199(551)](_0x8adb75[_0x439199(741)])[_0x439199(609) + _0x439199(596)]({behavior: _0x8adb75[_0x439199(641)], block: _0x8adb75[_0x439199(760)]});
}
function renderServerMenu(_0x19b959) {
  const _0x5c13e2 = _0xf6f8c, _0x46a6a4 = {BBoKa: _0x5c13e2(509), qRkhs: _0x5c13e2(717), gZnVj: _0x5c13e2(623)}, _0xb8ddf2 = document[_0x5c13e2(525) + _0x5c13e2(551)](_0x46a6a4[_0x5c13e2(572)]);
  _0xb8ddf2[_0x5c13e2(817)] = "";
  let _0x333ae4 = 1;
  _0x19b959[_0x5c13e2(638)]((_0x2079b8, _0x4eba60) => {
    const _0x5e35d5 = _0x5c13e2;
    _0x2079b8[_0x5e35d5(648) + _0x5e35d5(786)][_0x5e35d5(638)]((_0x57724b, _0x148e75) => {
      const _0x4ee9cc = _0x5e35d5, _0x119401 = document[_0x4ee9cc(494) + _0x4ee9cc(514)](_0x46a6a4[_0x4ee9cc(850)]);
      _0x119401[_0x4ee9cc(817)] = _0x4ee9cc(528) + _0x4ee9cc(585) + _0x4ee9cc(684) + _0x4ee9cc(504) + _0x333ae4, _0x119401[_0x4ee9cc(597)] = () => playChannel(_0x57724b), _0xb8ddf2[_0x4ee9cc(755) + "d"](_0x119401), _0x333ae4++;
    });
  }), document[_0x5c13e2(525) + _0x5c13e2(551)](_0x46a6a4[_0x5c13e2(572)])[_0x5c13e2(771)][_0x5c13e2(645)] = _0x46a6a4[_0x5c13e2(855)];
}
function _0x37b6(_0xccbc07, _0x44231b) {
  const _0x376bac = _0x1a93();
  return _0x37b6 = function (_0x43a15c, _0x12bc18) {
    _0x43a15c = _0x43a15c - 494;
    let _0x1e77d8 = _0x376bac[_0x43a15c];
    return _0x1e77d8;
  }, _0x37b6(_0xccbc07, _0x44231b);
}
function populateFilters(_0x290dbb) {
  const _0x2a7492 = _0xf6f8c, _0x578dc0 = {YUDvd: _0x2a7492(561), TiceZ: function (_0x41a877, _0x2a34b3) {
    return _0x41a877(_0x2a34b3);
  }, ofFAG: _0x2a7492(788), KWadI: _0x2a7492(692) + "er", wNTka: _0x2a7492(727) + _0x2a7492(595) + _0x2a7492(885) + _0x2a7492(728), hIRaj: _0x2a7492(727) + _0x2a7492(595) + _0x2a7492(877) + _0x2a7492(754) + "n>"}, _0x44c865 = document[_0x2a7492(525) + _0x2a7492(551)](_0x578dc0[_0x2a7492(548)]), _0x34c3f0 = document[_0x2a7492(525) + _0x2a7492(551)](_0x578dc0[_0x2a7492(555)]);
  _0x44c865[_0x2a7492(817)] = _0x578dc0[_0x2a7492(880)], _0x34c3f0[_0x2a7492(817)] = _0x578dc0[_0x2a7492(823)];
  const _0x582a90 = [...new Set(_0x290dbb[_0x2a7492(608)](_0x73a315 => _0x73a315[_0x2a7492(579)]))], _0x1edc5a = [...new Set(_0x290dbb[_0x2a7492(608)](_0x1dfa63 => _0x1dfa63[_0x2a7492(841)]))];
  _0x582a90[_0x2a7492(638)](_0x182937 => {
    const _0x5bfd91 = _0x2a7492, _0x4ea0d7 = document[_0x5bfd91(494) + _0x5bfd91(514)](_0x578dc0[_0x5bfd91(840)]);
    _0x4ea0d7[_0x5bfd91(837)] = _0x182937[_0x5bfd91(664) + "e"](), _0x4ea0d7[_0x5bfd91(790) + "t"] = _0x578dc0[_0x5bfd91(822)](formatDate, _0x182937), _0x44c865[_0x5bfd91(755) + "d"](_0x4ea0d7);
  }), _0x1edc5a[_0x2a7492(638)](_0x47797a => {
    const _0x3e8357 = _0x2a7492, _0x25bd88 = document[_0x3e8357(494) + _0x3e8357(514)](_0x578dc0[_0x3e8357(840)]);
    _0x25bd88[_0x3e8357(837)] = _0x47797a[_0x3e8357(664) + "e"](), _0x25bd88[_0x3e8357(790) + "t"] = _0x47797a, _0x34c3f0[_0x3e8357(755) + "d"](_0x25bd88);
  });
}
function filterMatches() {
  const _0x41bf3b = _0xf6f8c, _0x4b4d26 = {DNPeQ: _0x41bf3b(611), iJrMi: _0x41bf3b(537) + "e", DrwsN: _0x41bf3b(849), TmXgC: function (_0x43ec7b, _0x69d228) {
    return _0x43ec7b === _0x69d228;
  }, GHsrD: function (_0xa29403, _0xf6de4) {
    return _0xa29403 === _0xf6de4;
  }, zfEYH: function (_0x273590, _0x1d05e0) {
    return _0x273590 && _0x1d05e0;
  }, EfGmQ: _0x41bf3b(811) + "s", eWMXW: function (_0x104891, _0x38a46f) {
    return _0x104891 === _0x38a46f;
  }, OmTPB: _0x41bf3b(864), uYisE: function (_0x461739, _0x55042d) {
    return _0x461739 !== _0x55042d;
  }, fUBRp: _0x41bf3b(775), pytfb: _0x41bf3b(788), OalBD: _0x41bf3b(692) + "er", oWImL: _0x41bf3b(884), Bocvp: _0x41bf3b(633) + _0x41bf3b(591), tETsW: _0x41bf3b(696), WsSeW: function (_0x2cbb44, _0x462c55) {
    return _0x2cbb44 === _0x462c55;
  }, eQNfH: _0x41bf3b(781)}, _0x191551 = document[_0x41bf3b(525) + _0x41bf3b(551)](_0x4b4d26[_0x41bf3b(685)])[_0x41bf3b(837)][_0x41bf3b(664) + "e"](), _0x290b1c = document[_0x41bf3b(525) + _0x41bf3b(551)](_0x4b4d26[_0x41bf3b(766)])[_0x41bf3b(837)][_0x41bf3b(664) + "e"](), _0x4cbcb2 = document[_0x41bf3b(525) + _0x41bf3b(551)](_0x4b4d26[_0x41bf3b(875)])[_0x41bf3b(837)][_0x41bf3b(664) + "e"](), _0x486a57 = document[_0x41bf3b(730) + _0x41bf3b(792)](_0x4b4d26[_0x41bf3b(746)]);
  let _0x46ae55 = 0;
  const _0x30ff34 = Array[_0x41bf3b(647)](_0x486a57)[_0x41bf3b(562)](_0x597d92 => {
    const _0x5d9c80 = _0x41bf3b, _0x586717 = _0x597d92[_0x5d9c80(804) + "te"](_0x4b4d26[_0x5d9c80(853)]), _0x540334 = _0x597d92[_0x5d9c80(804) + "te"](_0x4b4d26[_0x5d9c80(866)]), _0xb71d4 = _0x597d92[_0x5d9c80(804) + "te"](_0x4b4d26[_0x5d9c80(809)]), _0x39bb8d = !_0x191551 || _0x4b4d26[_0x5d9c80(663)](_0x586717, _0x191551), _0x256bda = !_0x290b1c || _0x4b4d26[_0x5d9c80(703)](_0x540334, _0x290b1c), _0x86b4f7 = !_0x4cbcb2 || _0xb71d4[_0x5d9c80(526)](_0x4cbcb2);
    return _0x4b4d26[_0x5d9c80(764)](_0x39bb8d, _0x256bda) && _0x86b4f7;
  })[_0x41bf3b(690)]((_0x40c1b9, _0xbfb531) => {
    const _0x3c5f2c = _0x41bf3b, _0x4fa561 = _0x40c1b9[_0x3c5f2c(804) + "te"](_0x4b4d26[_0x3c5f2c(577)]), _0x5454e0 = _0xbfb531[_0x3c5f2c(804) + "te"](_0x4b4d26[_0x3c5f2c(577)]);
    if (_0x4b4d26[_0x3c5f2c(588)](_0x4fa561, _0x4b4d26[_0x3c5f2c(865)]) && _0x4b4d26[_0x3c5f2c(697)](_0x5454e0, _0x4b4d26[_0x3c5f2c(865)])) return -1;
    if (_0x4b4d26[_0x3c5f2c(697)](_0x4fa561, _0x4b4d26[_0x3c5f2c(865)]) && _0x4b4d26[_0x3c5f2c(663)](_0x5454e0, _0x4b4d26[_0x3c5f2c(865)])) return 1;
    return 0;
  });
  _0x486a57[_0x41bf3b(638)](_0x178009 => _0x178009[_0x41bf3b(771)][_0x41bf3b(645)] = _0x41bf3b(873)), _0x30ff34[_0x41bf3b(638)](_0xa5efd8 => {
    const _0x34d6e2 = _0x41bf3b;
    _0xa5efd8[_0x34d6e2(771)][_0x34d6e2(645)] = _0x4b4d26[_0x34d6e2(751)], _0x46ae55++;
  });
  const _0x46e4e3 = document[_0x41bf3b(525) + _0x41bf3b(551)](_0x4b4d26[_0x41bf3b(680)]);
  _0x4b4d26[_0x41bf3b(616)](_0x46ae55, 0) ? _0x46e4e3[_0x41bf3b(634)][_0x41bf3b(860)](_0x4b4d26[_0x41bf3b(671)]) : _0x46e4e3[_0x41bf3b(634)][_0x41bf3b(676)](_0x4b4d26[_0x41bf3b(671)]);
}
function resetFilters() {
  const _0x440195 = _0xf6f8c, _0x389960 = {RJcgj: _0x440195(788), nltyj: _0x440195(692) + "er", sYHtF: _0x440195(884), hZmnc: function (_0x52c695) {
    return _0x52c695();
  }};
  document[_0x440195(525) + _0x440195(551)](_0x389960[_0x440195(879)])[_0x440195(837)] = "", document[_0x440195(525) + _0x440195(551)](_0x389960[_0x440195(682)])[_0x440195(837)] = "", document[_0x440195(525) + _0x440195(551)](_0x389960[_0x440195(655)])[_0x440195(837)] = "", _0x389960[_0x440195(827)](filterMatches);
}
function debounce(_0x1608cc, _0x55ec2c) {
  const _0x2c6c0b = {SVyiT: function (_0x2f0a58, _0x57c485) {
    return _0x2f0a58(_0x57c485);
  }, KUzMC: function (_0x353ed3, _0x684e8a, _0x57f0a4) {
    return _0x353ed3(_0x684e8a, _0x57f0a4);
  }};
  let _0x40cea7;
  return function (..._0x1cfed1) {
    const _0x2cbd88 = _0x37b6;
    _0x2c6c0b[_0x2cbd88(667)](clearTimeout, _0x40cea7), _0x40cea7 = _0x2c6c0b[_0x2cbd88(593)](setTimeout, () => _0x1608cc[_0x2cbd88(536)](this, _0x1cfed1), _0x55ec2c);
  };
}
document[_0xf6f8c(525) + _0xf6f8c(551)](_0xf6f8c(884))[_0xf6f8c(770) + _0xf6f8c(501)](_0xf6f8c(512), debounce(filterMatches, 300)), document[_0xf6f8c(525) + _0xf6f8c(551)](_0xf6f8c(788))[_0xf6f8c(770) + _0xf6f8c(501)](_0xf6f8c(709), filterMatches), document[_0xf6f8c(525) + _0xf6f8c(551)](_0xf6f8c(692) + "er")[_0xf6f8c(770) + _0xf6f8c(501)](_0xf6f8c(709), filterMatches), document[_0xf6f8c(770) + _0xf6f8c(501)](_0xf6f8c(550) + _0xf6f8c(574), loadMatches), window[_0xf6f8c(821)] = function () {
  const _0x3e905c = _0xf6f8c, _0x15bf7f = {iDWkF: function (_0x2b420e) {
    return _0x2b420e();
  }};
  _0x15bf7f[_0x3e905c(761)](scrollFunction);
};
function scrollFunction() {
  const _0x4d14ef = _0xf6f8c, _0xa765ad = {dtWrk: function (_0x49f95b, _0x226c26) {
    return _0x49f95b > _0x226c26;
  }, BmEBG: _0x4d14ef(584) + _0x4d14ef(559), Mtgvd: _0x4d14ef(623), KtgTx: _0x4d14ef(873)};
  _0xa765ad[_0x4d14ef(627)](document[_0x4d14ef(798)][_0x4d14ef(851)], 20) || _0xa765ad[_0x4d14ef(627)](document[_0x4d14ef(665) + _0x4d14ef(787)][_0x4d14ef(851)], 20) ? document[_0x4d14ef(525) + _0x4d14ef(551)](_0xa765ad[_0x4d14ef(718)])[_0x4d14ef(771)][_0x4d14ef(645)] = _0xa765ad[_0x4d14ef(576)] : document[_0x4d14ef(525) + _0x4d14ef(551)](_0xa765ad[_0x4d14ef(718)])[_0x4d14ef(771)][_0x4d14ef(645)] = _0xa765ad[_0x4d14ef(797)];
}
function scrollToTop() {
  const _0x2fb4f8 = _0xf6f8c;
  document[_0x2fb4f8(798)][_0x2fb4f8(851)] = 0, document[_0x2fb4f8(665) + _0x2fb4f8(787)][_0x2fb4f8(851)] = 0;
}
setInterval(loadMatches, 6e4);
function _0x1a93() {
  const _0x2508f8 = ["twZYe", "Error send", "ard", "getElement", "includes", '="fas fa-u', '<i class="', "as fa-cale", "schedule-c", "16:9", "GMehj", "Match('", "span>", "i.telegram", "apply", "data-leagu", "KisDA", "ntainer", "wAIaX", "then", "getTime", "KGrRu", "ztTfr", "ps://zonas", "\nLink: htt", "an>", "ofFAG", "ZLjbD", "DOMContent", "ById", "result", "Smcdx", "https://ap", "KWadI", 'ndar-alt">', "APHuQ", "channelsLi", "pButton", "XIlkD", "option", "filter", "HDVFo", "March", "className", "utton clas", "FtpDO", "iZ76AHaEWo", "CjshM", 'wn" data-t', "nXhWW", "qRkhs", "RZDeT", "Loaded", "June", "Mtgvd", "EfGmQ", "all", "date", "nMseX", "xdUyU", "1900762mPshXU", "DwXOt", "scrollToTo", "fas fa-ser", "fetch vide", "3zb296.app", "eWMXW", 's="watch-b', "December", "card", 'imer="', "KUzMC", "error", 'lue="">Fil', "View", "onclick", "', '", "YHEUc", "log", "zvc2_I5WDk", "msKeq", "/business/", "rgtpC", "         <", "i.90min.to", "</button>\n", "map", "scrollInto", "chId=", "data-date", "DbxNm", "has", "dcast-towe", "Lcrza", "WsSeW", 'nfo">\n    ', "IlUcZ", "YBDEK", "      ", "bOlkJ", "Qwwop", "block", "load chann", "AHPMo", ":AAGG4SAfi", "dtWrk", "VhmCH", "ccessfully", 's="date"><', "GxAhu", "liveUrl", ".schedule-", "classList", "uBIpP", "41881whYcHS", "IohyF", "forEach", "PNeVQ", "TXtaS", "CtnDK", "5782365yvheks", "vuDkN", " Soon...</", "display", "atchId=", "from", "streaming_", '"><i class', "catch", "DYDTS", "FUVHT", "xrmuh", "code", "sYHtF", "Failed to ", "')\">", "send notif", "<span clas", "as fa-play", "load match", "ybXPW", "TmXgC", "toLowerCas", "documentEl", "json", "SVyiT", " not ok", "io/schedul", "videoUrl", "eQNfH", "channels?m", "OyZsx", "ailed", "January", "remove", 's="live"><', "Notificati", "/i> Watch\n", "tETsW", "\nTime: ", "nltyj", "HcKwK", 'ver"></i> ', "pytfb", " <button o", "matchTitle", "data-timer", "July", "sort", "dPbuG", "leagueFilt", "ZPhcz", "November", 'nclick="pl', "noMatches", "uYisE", "/v1/match/", "moKQy", "as fa-broa", "uMgHV", "xmlNV", "GHsrD", "sponse was", 'lick="play', "ication:", "div", "EyOVt", "change", "EyYGH", "yXCQD", '-circle"><', "fWKqu", "cation:", 'ss="fas fa', "https://wa", "serverMenu", "BmEBG", "ydnox", "TPnWZ", "Nohuf", "          ", " | ", "EHRfG", "m3u8Url", "VcUHq", "<option va", "e</option>", "load live ", "querySelec", "UJwIH", "dshNg", "oUrl for m", 'ass="teams', "February", "tgVPg", " URL for m", "gMgTB", "floor", " </div>\n  ", "OUEwl", "smooth", "mJdDq", "FIlBx", "thub.io/bo", "Bocvp", "ayChannel(", "channelIte", "ALcvd", "getFullYea", "fUBRp", "OVofx", "start", "gue</optio", "appendChil", "Network re", "upcoming", "URL:", "</span>\n  ", "ZkWGe", "iDWkF", "match", "KOkMl", "zfEYH", "Dmdqb", "OalBD", 's="countdo', "getDate", "logspot.co", "addEventLi", "style", 'i class="f', "Eznfc", "els:", "flex", ".org/bot", "104LEDJNi", "ttPqY", "aEUGt", "FNqkg", "show", "https://83", "ve Now</sp", "setAttribu", " 🚨\nDate: ", "urls", "ement", "dateFilter", 'ass="detai', "textConten", "uhRjj", "torAll", 'utton" onc', "length", "oFZUq", "jLiIY", "KtgTx", "body", "scheduleCo", "e.json", "May", '">Starting', "videoId", "getAttribu", "Live URL f", "on sent su", "WcjbI", "i> ", "DrwsN", "oPYnY", "data-statu", "miTpt", "0000", "🚨 Live Now", "')\">\n     ", "ge?chat_id", "innerHTML", "tnTpY", "hbwqI", "ZzyCm", "onscroll", "TiceZ", "hIRaj", "QbsRg", "</i> ", "21189wvdWhW", "hZmnc", "data", "la.github.", "IIGWf", "ing notifi", "fetch live", "October", "finally", "portlive.b", "August", "value", "[data-time", "23795c", "YUDvd", "league", "hjZtu", "es:", "loader", "name", "cmugW", "EUwFi", "CstKU", "data-teams", "BBoKa", "scrollTop", "sIoZO", "DNPeQ", "jWZFs", "gZnVj", "2895630DKWepb", "vXjKp", "match/matc", "pcQfZ", "add", "atchId ", "jwplayerCo", "September", "live", "OmTPB", "iJrMi", 'sers"></i>', "teams", "8888034hlwFZr", "7598004626", "972llFkGQ", "getMonth", "none", "CfqWN", "oWImL", "rtakita.gi", "ter by Lea", "hsZQW", "RJcgj", "wNTka", "ikVNH", 'r"></i> Li', "100%", "teamSearch", "ter by Dat", "pxGUA", "setup", "  <span cl", "createElem", "\nLeague: ", "        <b", "Iefvk", 'ls"><i cla', " <div clas", "MXoOJ", "stener", "GET", "April", "Server ", "954766hdRscW", "OoYqg", '-clock"></', "&text=", "button", "UCQFd", "time", "input", "status", "ent", "WxdBg", "\n         ", 's="match-i', "h_info?mat", "1391979650", "xWDyc", "/sendMessa"];
  _0x1a93 = function () {
    return _0x2508f8;
  };
  return _0x1a93();
}
function sendTelegramNotification(_0x46e4f9) {
  const _0x5632be = _0xf6f8c, _0x338115 = {hjZtu: _0x5632be(678) + _0x5632be(806) + _0x5632be(629), uhRjj: _0x5632be(656) + _0x5632be(658) + _0x5632be(706), DYDTS: _0x5632be(523) + _0x5632be(831) + _0x5632be(714), dPbuG: function (_0x10248d, _0x4fbe1e) {
    return _0x10248d(_0x4fbe1e);
  }, bOlkJ: function (_0x118fe2, _0x2c2505) {
    return _0x118fe2(_0x2c2505);
  }, XIlkD: function (_0x1be3c4, _0x260635, _0xd66101) {
    return _0x1be3c4(_0x260635, _0xd66101);
  }, vuDkN: _0x5632be(502)}, _0x39b19e = _0x5632be(814) + ": " + _0x46e4f9[_0x5632be(868)] + _0x5632be(785) + _0x338115[_0x5632be(691)](formatDate, _0x46e4f9[_0x5632be(579)]) + _0x5632be(681) + _0x46e4f9[_0x5632be(511)] + _0x5632be(495) + _0x46e4f9[_0x5632be(841)] + (_0x5632be(546) + _0x5632be(545) + _0x5632be(835) + _0x5632be(769) + "m/"), _0xe4671f = _0x5632be(554) + _0x5632be(535) + _0x5632be(776) + telegramBotToken + (_0x5632be(521) + _0x5632be(816) + "=") + telegramChatId + _0x5632be(508) + _0x338115[_0x5632be(621)](encodeURIComponent, _0x39b19e);
  _0x338115[_0x5632be(560)](fetch, _0xe4671f, {method: _0x338115[_0x5632be(643)]})[_0x5632be(541)](_0x3b97b6 => _0x3b97b6[_0x5632be(666)]())[_0x5632be(541)](_0x21e193 => {
    const _0x472be6 = _0x5632be;
    _0x21e193.ok ? console[_0x472be6(600)](_0x338115[_0x472be6(842)]) : console[_0x472be6(594)](_0x338115[_0x472be6(791)], _0x21e193);
  })[_0x5632be(650)](_0x291386 => {
    const _0x36d6a2 = _0x5632be;
    console[_0x36d6a2(594)](_0x338115[_0x36d6a2(651)], _0x291386);
  });
}
