const _0x2a1132 = _0x17ea;
(function (_0x11fc13, _0x5c6fcd) {
  const _0x585408 = _0x17ea, _0x11ab29 = _0x11fc13();
  while (true) {
    try {
      const _0x1d178a = -parseInt(_0x585408(786)) / 1 + -parseInt(_0x585408(438)) / 2 * (parseInt(_0x585408(689)) / 3) + parseInt(_0x585408(517)) / 4 + -parseInt(_0x585408(405)) / 5 * (-parseInt(_0x585408(411)) / 6) + -parseInt(_0x585408(700)) / 7 * (-parseInt(_0x585408(536)) / 8) + -parseInt(_0x585408(578)) / 9 * (parseInt(_0x585408(598)) / 10) + -parseInt(_0x585408(504)) / 11 * (-parseInt(_0x585408(674)) / 12);
      if (_0x1d178a === _0x5c6fcd) break; else _0x11ab29.push(_0x11ab29.shift());
    } catch (_0x1bc5ed) {
      _0x11ab29.push(_0x11ab29.shift());
    }
  }
}(_0x4cf5, 768526));
const telegramBotToken = _0x2a1132(741) + _0x2a1132(394) + _0x2a1132(634) + _0x2a1132(478) + _0x2a1132(527), telegramChatId = _0x2a1132(719), sentNotifications = new Set;
function formatDate(_0x257c6a) {
  const _0x234fc3 = _0x2a1132, _0x41ad3a = {mPBRr: _0x234fc3(436), YDpkm: _0x234fc3(560), oKMcl: _0x234fc3(749), HFboD: _0x234fc3(769), aRroY: _0x234fc3(631), sYeLl: _0x234fc3(703), GJvps: _0x234fc3(764), XuYZW: _0x234fc3(494), sCiTn: _0x234fc3(387), KaoCv: _0x234fc3(736), tryiL: _0x234fc3(619), vstJl: _0x234fc3(501)}, _0x5c53d6 = [_0x41ad3a[_0x234fc3(555)], _0x41ad3a[_0x234fc3(761)], _0x41ad3a[_0x234fc3(726)], _0x41ad3a[_0x234fc3(768)], _0x41ad3a[_0x234fc3(585)], _0x41ad3a[_0x234fc3(460)], _0x41ad3a[_0x234fc3(671)], _0x41ad3a[_0x234fc3(393)], _0x41ad3a[_0x234fc3(740)], _0x41ad3a[_0x234fc3(699)], _0x41ad3a[_0x234fc3(523)], _0x41ad3a[_0x234fc3(644)]], _0x2f2389 = new Date(_0x257c6a), _0x556269 = _0x2f2389[_0x234fc3(720)](), _0x1401e4 = _0x5c53d6[_0x2f2389[_0x234fc3(426)]()], _0x45febb = _0x2f2389[_0x234fc3(616) + "r"]();
  return _0x556269 + " " + _0x1401e4 + " " + _0x45febb;
}
async function loadMatches() {
  const _0x51dfe8 = _0x2a1132, _0x10cdeb = {TTXkR: _0x51dfe8(675), OPIYK: _0x51dfe8(672), VfNnT: function (_0x2e9c26) {
    return _0x2e9c26();
  }, hNvJX: function (_0x1cc9cb, _0x289dc3) {
    return _0x1cc9cb(_0x289dc3);
  }, PfEwE: function (_0x467052) {
    return _0x467052();
  }, rOHfu: function (_0x2fa6d1, _0x502347, _0x2d4532) {
    return _0x2fa6d1(_0x502347, _0x2d4532);
  }, pfbRa: _0x51dfe8(658) + _0x51dfe8(573) + _0x51dfe8(570), PHegC: _0x51dfe8(724), OUhmm: _0x51dfe8(776), PUPvG: _0x51dfe8(603)};
  try {
    document[_0x51dfe8(383) + _0x51dfe8(624)](_0x10cdeb[_0x51dfe8(662)])[_0x51dfe8(734)][_0x51dfe8(767)] = _0x10cdeb[_0x51dfe8(480)];
    const _0x578ae7 = await _0x10cdeb[_0x51dfe8(716)](fetchMatches);
    _0x10cdeb[_0x51dfe8(637)](renderMatches, _0x578ae7), _0x10cdeb[_0x51dfe8(637)](populateFilters, _0x578ae7), _0x10cdeb[_0x51dfe8(697)](filterMatches), _0x10cdeb[_0x51dfe8(716)](updateCountdown), _0x10cdeb[_0x51dfe8(425)](setInterval, updateCountdown, 1e3);
  } catch (_0x43315a) {
    console[_0x51dfe8(617)](_0x10cdeb[_0x51dfe8(566)], _0x43315a), document[_0x51dfe8(383) + _0x51dfe8(624)](_0x10cdeb[_0x51dfe8(475)])[_0x51dfe8(579)][_0x51dfe8(756)](_0x10cdeb[_0x51dfe8(443)]);
  } finally {
    document[_0x51dfe8(383) + _0x51dfe8(624)](_0x10cdeb[_0x51dfe8(662)])[_0x51dfe8(734)][_0x51dfe8(767)] = _0x10cdeb[_0x51dfe8(482)];
  }
}
async function fetchMatches() {
  const _0x5e6445 = _0x2a1132, _0x378de8 = {NFwEA: function (_0xb113a5, _0x1e14d0) {
    return _0xb113a5(_0x1e14d0);
  }, YGYob: _0x5e6445(502) + _0x5e6445(456) + _0x5e6445(477) + _0x5e6445(395) + _0x5e6445(444) + _0x5e6445(396), PjxUg: _0x5e6445(391) + _0x5e6445(562) + _0x5e6445(490)}, _0x39f07e = await _0x378de8[_0x5e6445(787)](fetch, _0x378de8[_0x5e6445(431)]);
  if (!_0x39f07e.ok) throw new Error(_0x378de8[_0x5e6445(547)]);
  const _0x2e3762 = await _0x39f07e[_0x5e6445(565)](), _0x412e54 = await _0x378de8[_0x5e6445(787)](fetchLiveUrls, _0x2e3762);
  return _0x2e3762[_0x5e6445(459)](_0x40736e => {
    const _0x28cda9 = _0x5e6445;
    _0x40736e[_0x28cda9(604)] = _0x412e54[_0x40736e[_0x28cda9(650)]] || _0x40736e[_0x28cda9(623)] || _0x40736e[_0x28cda9(784)];
  }), _0x2e3762;
}
function _0x17ea(_0x479db4, _0x10dd91) {
  const _0x105400 = _0x4cf5();
  return _0x17ea = function (_0x580540, _0x491826) {
    _0x580540 = _0x580540 - 380;
    let _0xd7f5cf = _0x105400[_0x580540];
    return _0xd7f5cf;
  }, _0x17ea(_0x479db4, _0x10dd91);
}
async function fetchLiveUrls(_0x173642) {
  const _0x500160 = _0x2a1132, _0x11bf1c = {VFIMY: function (_0x75f44, _0x57839d) {
    return _0x75f44(_0x57839d);
  }, cQHVb: function (_0x32905d, _0x1096d7) {
    return _0x32905d > _0x1096d7;
  }, EPcEO: function (_0x21fab8, _0x4497a4) {
    return _0x21fab8 === _0x4497a4;
  }, APvJD: _0x500160(386)}, _0x1e12c5 = _0x173642[_0x500160(605)](_0xbe21b => _0xbe21b[_0x500160(650)]), _0x209d1a = {}, _0x2ed0e0 = _0x1e12c5[_0x500160(605)](async _0x3db8b9 => {
    const _0xf1c9ff = _0x500160;
    try {
      const _0x11ec8a = await _0x11bf1c[_0xf1c9ff(670)](fetch, _0xf1c9ff(429) + _0xf1c9ff(503) + _0xf1c9ff(793) + _0xf1c9ff(755) + _0xf1c9ff(424) + _0x3db8b9);
      if (_0x11ec8a.ok) {
        const _0x2777cf = await _0x11ec8a[_0xf1c9ff(565)]();
        _0x2777cf[_0xf1c9ff(709)] && _0x11bf1c[_0xf1c9ff(550)](_0x2777cf[_0xf1c9ff(500)][_0xf1c9ff(532)], 0) && (_0x209d1a[_0x3db8b9] = _0x2777cf[_0xf1c9ff(500)][0][_0xf1c9ff(434) + _0xf1c9ff(775)][0]);
      }
    } catch (_0x364e50) {
      console[_0xf1c9ff(617)](_0xf1c9ff(658) + _0xf1c9ff(608) + _0xf1c9ff(696) + _0xf1c9ff(441) + _0x3db8b9 + ":", _0x364e50);
    }
    try {
      const _0x17c948 = await _0x11bf1c[_0xf1c9ff(670)](fetch, _0xf1c9ff(718) + _0xf1c9ff(625) + _0xf1c9ff(602) + _0xf1c9ff(589) + _0xf1c9ff(717) + _0xf1c9ff(580) + _0x3db8b9);
      if (_0x17c948.ok) {
        const _0x1ef9e9 = await _0x17c948[_0xf1c9ff(565)]();
        _0x11bf1c[_0xf1c9ff(544)](_0x1ef9e9[_0xf1c9ff(701)], _0x11bf1c[_0xf1c9ff(686)]) && _0x1ef9e9[_0xf1c9ff(612)][_0xf1c9ff(500)][_0xf1c9ff(483)][_0xf1c9ff(597)] && (_0x209d1a[_0x3db8b9] = _0x1ef9e9[_0xf1c9ff(612)][_0xf1c9ff(500)][_0xf1c9ff(483)][_0xf1c9ff(597)]);
      }
    } catch (_0x5ed3f3) {
      console[_0xf1c9ff(617)](_0xf1c9ff(658) + _0xf1c9ff(704) + _0xf1c9ff(646) + _0xf1c9ff(441) + _0x3db8b9 + ":", _0x5ed3f3);
    }
  });
  return await Promise[_0x500160(596)](_0x2ed0e0), _0x209d1a;
}
function renderMatches(_0xf3dee3) {
  const _0x81082c = _0x2a1132, _0x49faa6 = {QccIt: function (_0x3bb6a8, _0x303f22) {
    return _0x3bb6a8 >= _0x303f22;
  }, uRTLw: function (_0x5c6dea, _0x2488be) {
    return _0x5c6dea <= _0x2488be;
  }, XOete: function (_0x46b1c1, _0x369543) {
    return _0x46b1c1 + _0x369543;
  }, atnBo: function (_0x4c805b, _0x39b542) {
    return _0x4c805b * _0x39b542;
  }, RFXAN: function (_0x46a86e, _0x33be8c) {
    return _0x46a86e * _0x33be8c;
  }, WgTFf: function (_0x2a1d31, _0xea7c59) {
    return _0x2a1d31 <= _0xea7c59;
  }, IxOrH: function (_0x445c9f, _0x4b0384) {
    return _0x445c9f * _0x4b0384;
  }, lbheG: function (_0x511c49, _0x189e17) {
    return _0x511c49 * _0x189e17;
  }, OhFrU: function (_0x12c195, _0x249297) {
    return _0x12c195 && _0x249297;
  }, BtJDO: function (_0x219bd3, _0x52c89d) {
    return _0x219bd3 && _0x52c89d;
  }, NmpoG: function (_0x4b7ace, _0x5a3705) {
    return _0x4b7ace >= _0x5a3705;
  }, cumBZ: function (_0x195f43, _0x1d14c0) {
    return _0x195f43 * _0x1d14c0;
  }, XxBRN: _0x81082c(403), wUBmT: _0x81082c(474) + _0x81082c(552), ChsHk: _0x81082c(663), ONDxO: _0x81082c(430) + "e", uJUpv: _0x81082c(607), YPHKM: _0x81082c(415) + "s", ofDWZ: _0x81082c(730), UuPsc: _0x81082c(693), opKyM: function (_0x255e20, _0x4e2447) {
    return _0x255e20(_0x4e2447);
  }, xsUHf: _0x81082c(538) + _0x81082c(582) + _0x81082c(692) + _0x81082c(683) + _0x81082c(569) + _0x81082c(557) + _0x81082c(380) + _0x81082c(677), JIXFQ: _0x81082c(554) + _0x81082c(591)}, _0x315f48 = document[_0x81082c(383) + _0x81082c(624)](_0x49faa6[_0x81082c(679)]);
  _0x315f48[_0x81082c(515)] = "", _0xf3dee3[_0x81082c(423)]((_0x5014de, _0x20675a) => {
    const _0x527984 = _0x81082c, _0x1d2db3 = new Date, _0x59e159 = new Date(_0x5014de[_0x527984(449)] + "T" + _0x5014de[_0x527984(757)]), _0x44bd5b = new Date(_0x20675a[_0x527984(449)] + "T" + _0x20675a[_0x527984(757)]), _0x8a4f8c = _0x49faa6[_0x527984(789)](_0x1d2db3, _0x59e159) && _0x49faa6[_0x527984(762)](_0x1d2db3, new Date(_0x49faa6[_0x527984(797)](_0x59e159[_0x527984(498)](), _0x49faa6[_0x527984(632)](_0x49faa6[_0x527984(649)](_0x49faa6[_0x527984(649)](2, 60), 60), 1e3)))), _0xfd7aa8 = _0x49faa6[_0x527984(789)](_0x1d2db3, _0x44bd5b) && _0x49faa6[_0x527984(636)](_0x1d2db3, new Date(_0x49faa6[_0x527984(797)](_0x44bd5b[_0x527984(498)](), _0x49faa6[_0x527984(715)](_0x49faa6[_0x527984(715)](_0x49faa6[_0x527984(408)](2, 60), 60), 1e3))));
    if (_0x49faa6[_0x527984(592)](_0x8a4f8c, !_0xfd7aa8)) return -1;
    if (_0x49faa6[_0x527984(643)](!_0x8a4f8c, _0xfd7aa8)) return 1;
    return 0;
  }), _0xf3dee3[_0x81082c(459)](_0x338a73 => {
    const _0x1ecaf5 = _0x81082c, _0x247789 = _0x338a73[_0x1ecaf5(604)] || _0x338a73[_0x1ecaf5(623)] || _0x338a73[_0x1ecaf5(784)], _0x585cc6 = new Date, _0x4df818 = new Date(_0x338a73[_0x1ecaf5(449)] + "T" + _0x338a73[_0x1ecaf5(757)]), _0x24949d = _0x49faa6[_0x1ecaf5(458)](_0x585cc6, _0x4df818) && _0x49faa6[_0x1ecaf5(636)](_0x585cc6, new Date(_0x49faa6[_0x1ecaf5(797)](_0x4df818[_0x1ecaf5(498)](), _0x49faa6[_0x1ecaf5(649)](_0x49faa6[_0x1ecaf5(632)](_0x49faa6[_0x1ecaf5(533)](2, 60), 60), 1e3)))), _0x4231de = document[_0x1ecaf5(551) + _0x1ecaf5(473)](_0x49faa6[_0x1ecaf5(470)]);
    _0x4231de[_0x1ecaf5(664)] = _0x49faa6[_0x1ecaf5(791)], _0x4231de[_0x1ecaf5(584) + "te"](_0x49faa6[_0x1ecaf5(448)], _0x338a73[_0x1ecaf5(449)][_0x1ecaf5(747) + "e"]()), _0x4231de[_0x1ecaf5(584) + "te"](_0x49faa6[_0x1ecaf5(445)], _0x338a73[_0x1ecaf5(639)][_0x1ecaf5(747) + "e"]()), _0x4231de[_0x1ecaf5(584) + "te"](_0x49faa6[_0x1ecaf5(518)], _0x338a73[_0x1ecaf5(708)][_0x1ecaf5(747) + "e"]()), _0x4231de[_0x1ecaf5(584) + "te"](_0x49faa6[_0x1ecaf5(433)], _0x24949d ? _0x49faa6[_0x1ecaf5(653)] : _0x49faa6[_0x1ecaf5(513)]);
    const _0xb1d943 = !_0x24949d ? _0x1ecaf5(538) + _0x1ecaf5(595) + _0x1ecaf5(733) + _0x1ecaf5(760) + _0x338a73[_0x1ecaf5(449)] + "T" + _0x338a73[_0x1ecaf5(757)] + (_0x1ecaf5(723) + _0x1ecaf5(790) + _0x1ecaf5(763)) : "";
    _0x4231de[_0x1ecaf5(515)] = _0x1ecaf5(469) + _0x1ecaf5(493) + _0x1ecaf5(642) + _0x1ecaf5(467) + _0x1ecaf5(510) + _0x1ecaf5(493) + _0x1ecaf5(493) + _0x1ecaf5(538) + _0x1ecaf5(575) + _0x1ecaf5(692) + _0x1ecaf5(628) + _0x1ecaf5(593) + _0x1ecaf5(661) + _0x49faa6[_0x1ecaf5(402)](formatDate, _0x338a73[_0x1ecaf5(449)]) + (_0x1ecaf5(613) + _0x1ecaf5(493) + _0x1ecaf5(493) + _0x1ecaf5(571) + _0x1ecaf5(471) + _0x1ecaf5(576) + _0x1ecaf5(774) + _0x1ecaf5(454) + " ") + _0x338a73[_0x1ecaf5(708)] + (_0x1ecaf5(613) + _0x1ecaf5(493) + _0x1ecaf5(493) + _0x1ecaf5(571) + _0x1ecaf5(406) + _0x1ecaf5(621) + _0x1ecaf5(781) + _0x1ecaf5(389) + _0x1ecaf5(783)) + _0x338a73[_0x1ecaf5(757)] + _0x1ecaf5(626) + _0x338a73[_0x1ecaf5(639)] + (_0x1ecaf5(613) + _0x1ecaf5(493) + _0x1ecaf5(493) + "  ") + (_0x24949d ? _0x49faa6[_0x1ecaf5(476)] : _0xb1d943) + (_0x1ecaf5(469) + _0x1ecaf5(493) + _0x1ecaf5(678) + _0x1ecaf5(493) + _0x1ecaf5(606) + _0x1ecaf5(647) + _0x1ecaf5(785) + _0x1ecaf5(519) + _0x1ecaf5(780) + _0x1ecaf5(563)) + _0x338a73[_0x1ecaf5(650)] + _0x1ecaf5(464) + _0x338a73[_0x1ecaf5(604)] + _0x1ecaf5(464) + _0x338a73[_0x1ecaf5(623)] + _0x1ecaf5(464) + _0x338a73[_0x1ecaf5(784)] + _0x1ecaf5(464) + _0x338a73[_0x1ecaf5(708)] + (_0x1ecaf5(638) + _0x1ecaf5(493) + _0x1ecaf5(713) + _0x1ecaf5(692) + _0x1ecaf5(418) + _0x1ecaf5(435) + _0x1ecaf5(561) + _0x1ecaf5(493) + _0x1ecaf5(493) + _0x1ecaf5(572) + _0x1ecaf5(493) + _0x1ecaf5(779)), _0x315f48[_0x1ecaf5(710) + "d"](_0x4231de), _0x24949d && !sentNotifications[_0x1ecaf5(528)](_0x338a73[_0x1ecaf5(650)]) && (_0x49faa6[_0x1ecaf5(402)](sendTelegramNotification, _0x338a73), sentNotifications[_0x1ecaf5(756)](_0x338a73[_0x1ecaf5(650)]));
  });
}
function updateCountdown() {
  const _0x4d9b2b = _0x2a1132, _0x2c1bd5 = {hHPpd: _0x4d9b2b(770), qUuxB: function (_0x2695ad, _0x5de5c0) {
    return _0x2695ad - _0x5de5c0;
  }, KavDP: function (_0x5b74bb, _0x134171) {
    return _0x5b74bb <= _0x134171;
  }, tjtgQ: function (_0x3a550e, _0x3980fc) {
    return _0x3a550e / _0x3980fc;
  }, xEtpl: function (_0x293c67, _0xd0f77a) {
    return _0x293c67 * _0xd0f77a;
  }, lQMRM: function (_0x3f35e9, _0x1928b1) {
    return _0x3f35e9 * _0x1928b1;
  }, wBlqp: function (_0x28a450, _0xa3ef95) {
    return _0x28a450 / _0xa3ef95;
  }, ZfpgF: function (_0x4af6c4, _0x4bd38e) {
    return _0x4af6c4 % _0x4bd38e;
  }, FjXUM: function (_0x5d400d, _0x235f52) {
    return _0x5d400d * _0x235f52;
  }, jKQOe: function (_0x245e03, _0xee25ab) {
    return _0x245e03 * _0xee25ab;
  }, lDbxw: function (_0x5b215a, _0x3b9303) {
    return _0x5b215a % _0x3b9303;
  }, oAKwI: function (_0x576388, _0x3b5615) {
    return _0x576388 * _0x3b5615;
  }, WvqHg: _0x4d9b2b(657) + "r]"}, _0xd63e68 = document[_0x4d9b2b(688) + _0x4d9b2b(530)](_0x2c1bd5[_0x4d9b2b(381)]), _0x546ac0 = new Date;
  _0xd63e68[_0x4d9b2b(459)](_0x57c9b4 => {
    const _0x4227a4 = _0x4d9b2b, _0x4f5060 = new Date(_0x57c9b4[_0x4227a4(795) + "te"](_0x2c1bd5[_0x4227a4(450)])), _0x22efbe = _0x2c1bd5[_0x4227a4(488)](_0x4f5060, _0x546ac0);
    if (_0x2c1bd5[_0x4227a4(635)](_0x22efbe, 0)) _0x57c9b4[_0x4227a4(520) + "t"] = ""; else {
      const _0xd5ac5d = Math[_0x4227a4(694)](_0x2c1bd5[_0x4227a4(766)](_0x22efbe, _0x2c1bd5[_0x4227a4(446)](_0x2c1bd5[_0x4227a4(794)](1e3, 60), 60))), _0x220d99 = Math[_0x4227a4(694)](_0x2c1bd5[_0x4227a4(669)](_0x2c1bd5[_0x4227a4(457)](_0x22efbe, _0x2c1bd5[_0x4227a4(446)](_0x2c1bd5[_0x4227a4(537)](1e3, 60), 60)), _0x2c1bd5[_0x4227a4(559)](1e3, 60))), _0x3a1927 = Math[_0x4227a4(694)](_0x2c1bd5[_0x4227a4(669)](_0x2c1bd5[_0x4227a4(427)](_0x22efbe, _0x2c1bd5[_0x4227a4(419)](1e3, 60)), 1e3));
      _0x57c9b4[_0x4227a4(520) + "t"] = _0xd5ac5d + "h " + _0x220d99 + "m " + _0x3a1927 + "s";
    }
  });
}
function _0x4cf5() {
  const _0x32f225 = ["[data-time", "Failed to ", "card", "oXixS", "</i> ", "TTXkR", "data-date", "className", "addEventLi", "vwsPT", "ayChannel(", 'lue="">Fil', "wBlqp", "VFIMY", "GJvps", "block", "wfullscree", "356268vRerCs", "loader", "endsWith", "an>", " </div>\n  ", "JIXFQ", "xSgtU", "Gacsl", "jhMwo", "as fa-broa", "vljOi", "Loaded", "APvJD", "BEtmC", "querySelec", "3ltRyef", "channelsLi", "catch", 'i class="f', "upcoming", "floor", "m URL:", " URL for m", "PfEwE", "Stream URL", "KaoCv", "1022AbkrGe", "code", "scrollTop", "June", "fetch vide", ".org/bot", ".m3u8", "buHzr", "teams", "status", "appendChil", "from", "XybPH", "         <", "xZerV", "IxOrH", "VfNnT", "h_info?mat", "https://83", "1391979650", "getDate", 'ver"></i> ', "filter", '">Starting', "noMatches", "includes", "oKMcl", "gue</optio", "zgipQ", "change", "live", "dGnel", 't="100%" s', 'wn" data-t', "style", "CQbJk", "October", "body", "deZPR", "AbXIY", "sCiTn", "7598004626", "smooth", "vnQAL", "eFlEb", "nGEBR", "ZewmT", "toLowerCas", "bxbRO", "March", "wfeRh", "fas fa-ser", "ing notifi", "Lxodz", "rtoUQ", "channels?m", "add", "time", "leagueFilt", "/iframe>", 'imer="', "YDpkm", "uRTLw", "span>", "July", "hXquM", "tjtgQ", "display", "HFboD", "April", "data-timer", "mLTIs", "finally", "documentEl", '="fas fa-u', "urls", "show", "scrollInto", "load strea", "      ", 'lick="play', 'ss="fas fa', "fcBwF", "i> ", "iframeURL", 's="watch-b', "1300712SAFAeN", "NFwEA", "\nLeague: ", "QccIt", " Soon...</", "wUBmT", "ycCll", "/v1/match/", "lQMRM", "getAttribu", 'igin" allo', "XOete", "i.telegram", "ve Now</sp", "WvqHg", "onclick", "getElement", "send notif", "FBOWU", "0000", "September", "Error send", '-clock"></', "qDuDS", "Network re", "input", "XuYZW", ":AAGG4SAfi", "la.github.", "e.json", "scrollToTo", '" width="1', "NPQQg", 'no" sandbo', "zppjV", "opKyM", "div", " 🚨\nDate: ", "6957715iNJigY", 'ass="detai', "16:9", "lbheG", "<option va", "option", "6tNYnHz", "🚨 Live Now", "onscroll", "stener", "data-statu", "Xjgrs", "dlEVy", "as fa-play", "oAKwI", "value", "BCZyM", "JBFQJ", "sort", "atchId=", "rOHfu", "getMonth", "lDbxw", "then", "https://ap", "data-leagu", "YGYob", "oCJNN", "YPHKM", "streaming_", '-circle"><', "January", "PKjTG", "412546qORNhO", "DkIXY", "apply", "atchId ", "ccessfully", "OUhmm", "io/schedul", "ONDxO", "xEtpl", "JAVoT", "ChsHk", "date", "hHPpd", "100%", "/sendMessa", "PBKLe", 'sers"></i>', "name", "rtakita.gi", "ZfpgF", "NmpoG", "forEach", "sYeLl", "<iframe sr", "DOMContent", "teamSearch", "', '", "onKFH", "tDwOo", 's="match-i', "LhAjt", "\n         ", "XxBRN", 'ass="teams', "RBemu", "ent", "schedule-c", "PHegC", "xsUHf", "thub.io/bo", "zvc2_I5WDk", 'nclick="pl', "OPIYK", "WNVeW", "PUPvG", "match", "https://", "View", "PsvsN", 'n="true"><', "qUuxB", "\nTime: ", " not ok", "ter by Lea", "ootbG", "          ", "August", "channelIte", "jwplayerCo", "logspot.co", "getTime", "Yyeuh", "result", "December", "https://wa", "i.90min.to", "99StnCYq", "start", "load chann", ".schedule-", "remove", "e</option>", 'nfo">\n    ', "KxMLB", "')\">", "UuPsc", "ojcFy", "innerHTML", "serverMenu", "182484WYpNGn", "uJUpv", 'utton" onc', "textConten", "FuHuj", "ps://zonas", "tryiL", "ication:", "VoZCe", "kBOrB", "23795c", "has", "mIPZc", "torAll", "on sent su", "length", "cumBZ", "flex", "button", "54608diJLni", "FjXUM", "<span clas", "Server ", "cation:", '<i class="', "UfrjK", "dateFilter", "EPcEO", "ow-same-or", "ter by Dat", "PjxUg", 'c="', "ement", "cQHVb", "createElem", "ard", "CAAAi", "scheduleCo", "mPBRr", "Wbwfk", 'r"></i> Li', "JUwBI", "jKQOe", "February", "/i> Watch\n", "sponse was", "Match('", "sQlAW", "json", "pfbRa", "log", "fakvk", "dcast-towe", "es:", "  <span cl", "</button>\n", "load match", "YgQKm", 's="date"><', '"><i class', "PYOHx", "450zSbeMJ", "classList", "chId=", "bbNTv", 's="live"><', "rcORE", "setAttribu", "aRroY", "\nLink: htt", "qjIsz", "xVdsQ", "match/matc", "cripts all", "ntainer", "OhFrU", 'ndar-alt">', "VekzW", 's="countdo', "all", "videoUrl", "85090IawwrL", "uLwdc", "&text=", "GET", "/business/", "none", "liveUrl", "map", "        <b", "data-teams", "fetch live", "HSMId", "ge?chat_id", "XpAZI", "data", "</span>\n  ", "kuVYR", "Notificati", "getFullYea", "error", "els:", "November", "RUiVg", 'ls"><i cla', "JnErl", "m3u8Url", "ById", "3zb296.app", " | ", "EhCCI", "as fa-cale", "setup", "Lrogx", "May", "atnBo", "qMSFS", "iZ76AHaEWo", "KavDP", "WgTFf", "hNvJX", "')\">\n     ", "league", "startsWith", " failed", " <div clas", "BtJDO", "vstJl", "portlive.b", "oUrl for m", "utton clas", "matchTitle", "RFXAN", "videoId", " <button o", 'crolling="', "ofDWZ", '00%" heigh', 'x="allow-s', "pButton"];
  _0x4cf5 = function () {
    return _0x32f225;
  };
  return _0x4cf5();
}
function playMatch(_0x1d1ae8, _0x69f2a, _0x1b0679, _0x4eff24, _0x5e7e91) {
  const _0x8f6cf6 = _0x2a1132, _0x4eebf8 = {BCZyM: _0x8f6cf6(698) + _0x8f6cf6(641), tDwOo: _0x8f6cf6(658) + _0x8f6cf6(778) + _0x8f6cf6(695), qjIsz: function (_0x41a9a8, _0x3ab0ab) {
    return _0x41a9a8 || _0x3ab0ab;
  }, UfrjK: _0x8f6cf6(706), kuVYR: function (_0x3afcf8, _0x9edb3f) {
    return _0x3afcf8(_0x9edb3f);
  }, RUiVg: _0x8f6cf6(496) + _0x8f6cf6(591), qMSFS: _0x8f6cf6(451), PKjTG: _0x8f6cf6(407), dlEVy: _0x8f6cf6(484), rtoUQ: _0x8f6cf6(742), dGnel: _0x8f6cf6(505), deZPR: _0x8f6cf6(648), DkIXY: function (_0x39c7be, _0x4142df) {
    return _0x39c7be || _0x4142df;
  }};
  let _0x5e997c = _0x4eebf8[_0x8f6cf6(439)](_0x69f2a, _0x1b0679) || _0x4eff24;
  _0x4eebf8[_0x8f6cf6(614)](fetch, _0x5e997c)[_0x8f6cf6(428)](_0x440ee6 => {
    const _0xc89114 = _0x8f6cf6;
    if (!_0x440ee6.ok) throw new Error(_0x4eebf8[_0xc89114(421)]);
    return _0x440ee6;
  })[_0x8f6cf6(691)](_0x4a900c => {
    const _0x166192 = _0x8f6cf6;
    console[_0x166192(617)](_0x4eebf8[_0x166192(466)], _0x4a900c);
    if (_0x69f2a) _0x5e997c = _0x4eebf8[_0x166192(587)](_0x1b0679, _0x4eff24); else _0x1b0679 && (_0x5e997c = _0x4eff24);
  })[_0x8f6cf6(772)](() => {
    const _0x29733 = _0x8f6cf6;
    if (_0x5e997c[_0x29733(676)](_0x4eebf8[_0x29733(542)])) _0x4eebf8[_0x29733(614)](jwplayer, _0x4eebf8[_0x29733(620)])[_0x29733(629)]({file: _0x5e997c, width: _0x4eebf8[_0x29733(633)], aspectratio: _0x4eebf8[_0x29733(437)], image: " "}); else _0x5e997c[_0x29733(640)](_0x4eebf8[_0x29733(417)]) && (document[_0x29733(383) + _0x29733(624)](_0x4eebf8[_0x29733(620)])[_0x29733(515)] = _0x29733(461) + _0x29733(548) + _0x5e997c + (_0x29733(398) + _0x29733(654) + _0x29733(732) + _0x29733(652) + _0x29733(400) + _0x29733(655) + _0x29733(590) + _0x29733(545) + _0x29733(796) + _0x29733(673) + _0x29733(487) + _0x29733(759)));
    document[_0x29733(383) + _0x29733(624)](_0x4eebf8[_0x29733(620)])[_0x29733(777) + _0x29733(485)]({behavior: _0x4eebf8[_0x29733(754)], block: _0x4eebf8[_0x29733(731)]}), document[_0x29733(383) + _0x29733(624)](_0x4eebf8[_0x29733(738)])[_0x29733(520) + "t"] = _0x5e7e91, _0x4eebf8[_0x29733(614)](loadChannels, _0x1d1ae8);
  });
}
async function loadChannels(_0x57f85b) {
  const _0x5e849d = _0x2a1132, _0x2ceedf = {PBKLe: function (_0x511299, _0x1ac722) {
    return _0x511299(_0x1ac722);
  }, LhAjt: _0x5e849d(391) + _0x5e849d(562) + _0x5e849d(490), ootbG: function (_0x4421fa, _0x21b7b6) {
    return _0x4421fa > _0x21b7b6;
  }, kBOrB: function (_0x222045, _0x879c8e) {
    return _0x222045(_0x879c8e);
  }, YgQKm: _0x5e849d(690) + "st", CAAAi: _0x5e849d(603), KxMLB: _0x5e849d(516), PsvsN: _0x5e849d(658) + _0x5e849d(506) + _0x5e849d(618)};
  try {
    const _0x27f953 = await _0x2ceedf[_0x5e849d(453)](fetch, _0x5e849d(429) + _0x5e849d(503) + _0x5e849d(793) + _0x5e849d(755) + _0x5e849d(424) + _0x57f85b);
    if (!_0x27f953.ok) throw new Error(_0x2ceedf[_0x5e849d(468)]);
    const _0x423bf4 = await _0x27f953[_0x5e849d(565)]();
    _0x423bf4[_0x5e849d(709)] && _0x2ceedf[_0x5e849d(492)](_0x423bf4[_0x5e849d(500)][_0x5e849d(532)], 0) ? (_0x2ceedf[_0x5e849d(453)](renderChannels, _0x423bf4[_0x5e849d(500)]), _0x2ceedf[_0x5e849d(526)](renderServerMenu, _0x423bf4[_0x5e849d(500)])) : (document[_0x5e849d(383) + _0x5e849d(624)](_0x2ceedf[_0x5e849d(574)])[_0x5e849d(734)][_0x5e849d(767)] = _0x2ceedf[_0x5e849d(553)], document[_0x5e849d(383) + _0x5e849d(624)](_0x2ceedf[_0x5e849d(511)])[_0x5e849d(734)][_0x5e849d(767)] = _0x2ceedf[_0x5e849d(553)]);
  } catch (_0x5be241) {
    console[_0x5e849d(617)](_0x2ceedf[_0x5e849d(486)], _0x5be241), document[_0x5e849d(383) + _0x5e849d(624)](_0x2ceedf[_0x5e849d(574)])[_0x5e849d(734)][_0x5e849d(767)] = _0x2ceedf[_0x5e849d(553)], document[_0x5e849d(383) + _0x5e849d(624)](_0x2ceedf[_0x5e849d(511)])[_0x5e849d(734)][_0x5e849d(767)] = _0x2ceedf[_0x5e849d(553)];
  }
}
function renderChannels(_0xc939bf) {
  const _0x27a3be = _0x2a1132, _0xdf0382 = {buHzr: _0x27a3be(495) + "ms", JAVoT: _0x27a3be(690) + "st", HSMId: _0x27a3be(672)}, _0x291ff0 = document[_0x27a3be(383) + _0x27a3be(624)](_0xdf0382[_0x27a3be(707)]);
  _0x291ff0[_0x27a3be(515)] = "", _0xc939bf[_0x27a3be(459)](_0x103b5a => {
    const _0x2ffa90 = _0x27a3be, _0x2d76d9 = document[_0x2ffa90(551) + _0x2ffa90(473)]("li");
    _0x2d76d9[_0x2ffa90(515)] = _0x2ffa90(469) + _0x2ffa90(493) + _0x2ffa90(651) + _0x2ffa90(479) + _0x2ffa90(667) + "'" + _0x103b5a[_0x2ffa90(434) + _0x2ffa90(775)][0] + _0x2ffa90(512) + _0x103b5a[_0x2ffa90(455)] + (_0x2ffa90(572) + _0x2ffa90(493) + _0x2ffa90(779)), _0x291ff0[_0x2ffa90(710) + "d"](_0x2d76d9);
  }), document[_0x27a3be(383) + _0x27a3be(624)](_0xdf0382[_0x27a3be(447)])[_0x27a3be(734)][_0x27a3be(767)] = _0xdf0382[_0x27a3be(609)];
}
function playChannel(_0x1a062b) {
  const _0x547654 = _0x2a1132, _0x201316 = {zgipQ: _0x547654(706), NPQQg: function (_0x353697, _0x56c709) {
    return _0x353697(_0x56c709);
  }, vljOi: _0x547654(496) + _0x547654(591), Yyeuh: _0x547654(451), eFlEb: _0x547654(407), PYOHx: _0x547654(484), nGEBR: _0x547654(742), JBFQJ: _0x547654(505)};
  if (_0x1a062b[_0x547654(676)](_0x201316[_0x547654(728)])) _0x201316[_0x547654(399)](jwplayer, _0x201316[_0x547654(684)])[_0x547654(629)]({file: _0x1a062b, width: _0x201316[_0x547654(499)], aspectratio: _0x201316[_0x547654(744)], image: " "}); else _0x1a062b[_0x547654(640)](_0x201316[_0x547654(577)]) && (document[_0x547654(383) + _0x547654(624)](_0x201316[_0x547654(684)])[_0x547654(515)] = _0x547654(461) + _0x547654(548) + _0x1a062b + (_0x547654(398) + _0x547654(654) + _0x547654(732) + _0x547654(652) + _0x547654(400) + _0x547654(655) + _0x547654(590) + _0x547654(545) + _0x547654(796) + _0x547654(673) + _0x547654(487) + _0x547654(759)));
  document[_0x547654(383) + _0x547654(624)](_0x201316[_0x547654(684)])[_0x547654(777) + _0x547654(485)]({behavior: _0x201316[_0x547654(745)], block: _0x201316[_0x547654(422)]});
}
function renderServerMenu(_0x17020f) {
  const _0x3163ec = _0x2a1132, _0x52aa5d = {ZewmT: _0x3163ec(535), Gacsl: _0x3163ec(516), JUwBI: _0x3163ec(672)}, _0xa78386 = document[_0x3163ec(383) + _0x3163ec(624)](_0x52aa5d[_0x3163ec(681)]);
  _0xa78386[_0x3163ec(515)] = "";
  let _0x546b3d = 1;
  _0x17020f[_0x3163ec(459)]((_0x41280a, _0x4c8e1e) => {
    const _0x413b3d = _0x3163ec;
    _0x41280a[_0x413b3d(434) + _0x413b3d(775)][_0x413b3d(459)]((_0x3d3694, _0x31c4d0) => {
      const _0x488ff3 = _0x413b3d, _0x3bf03b = document[_0x488ff3(551) + _0x488ff3(473)](_0x52aa5d[_0x488ff3(746)]);
      _0x3bf03b[_0x488ff3(515)] = _0x488ff3(541) + _0x488ff3(751) + _0x488ff3(721) + _0x488ff3(539) + _0x546b3d, _0x3bf03b[_0x488ff3(382)] = () => playChannel(_0x3d3694), _0xa78386[_0x488ff3(710) + "d"](_0x3bf03b), _0x546b3d++;
    });
  }), document[_0x3163ec(383) + _0x3163ec(624)](_0x52aa5d[_0x3163ec(681)])[_0x3163ec(734)][_0x3163ec(767)] = _0x52aa5d[_0x3163ec(558)];
}
function populateFilters(_0x10ed34) {
  const _0x5d6896 = _0x2a1132, _0x1dec92 = {onKFH: _0x5d6896(410), BEtmC: function (_0x57916c, _0xf9b6ed) {
    return _0x57916c(_0xf9b6ed);
  }, vnQAL: _0x5d6896(543), XpAZI: _0x5d6896(758) + "er", fcBwF: _0x5d6896(409) + _0x5d6896(668) + _0x5d6896(546) + _0x5d6896(509), RBemu: _0x5d6896(409) + _0x5d6896(668) + _0x5d6896(491) + _0x5d6896(727) + "n>"}, _0x9e7a1 = document[_0x5d6896(383) + _0x5d6896(624)](_0x1dec92[_0x5d6896(743)]), _0x544f72 = document[_0x5d6896(383) + _0x5d6896(624)](_0x1dec92[_0x5d6896(611)]);
  _0x9e7a1[_0x5d6896(515)] = _0x1dec92[_0x5d6896(782)], _0x544f72[_0x5d6896(515)] = _0x1dec92[_0x5d6896(472)];
  const _0x31958b = [...new Set(_0x10ed34[_0x5d6896(605)](_0x4c255d => _0x4c255d[_0x5d6896(449)]))], _0x1b437c = [...new Set(_0x10ed34[_0x5d6896(605)](_0x42c746 => _0x42c746[_0x5d6896(639)]))];
  _0x31958b[_0x5d6896(459)](_0x727c8 => {
    const _0x1beabf = _0x5d6896, _0x414a30 = document[_0x1beabf(551) + _0x1beabf(473)](_0x1dec92[_0x1beabf(465)]);
    _0x414a30[_0x1beabf(420)] = _0x727c8[_0x1beabf(747) + "e"](), _0x414a30[_0x1beabf(520) + "t"] = _0x1dec92[_0x1beabf(687)](formatDate, _0x727c8), _0x9e7a1[_0x1beabf(710) + "d"](_0x414a30);
  }), _0x1b437c[_0x5d6896(459)](_0x177b9e => {
    const _0x4a0483 = _0x5d6896, _0x16741c = document[_0x4a0483(551) + _0x4a0483(473)](_0x1dec92[_0x4a0483(465)]);
    _0x16741c[_0x4a0483(420)] = _0x177b9e[_0x4a0483(747) + "e"](), _0x16741c[_0x4a0483(520) + "t"] = _0x177b9e, _0x544f72[_0x4a0483(710) + "d"](_0x16741c);
  });
}
function filterMatches() {
  const _0x308dcf = _0x2a1132, _0x351ed2 = {Xjgrs: _0x308dcf(663), bxbRO: _0x308dcf(430) + "e", uLwdc: _0x308dcf(607), XybPH: function (_0xc328c0, _0x222c20) {
    return _0xc328c0 === _0x222c20;
  }, xZerV: function (_0x8b0e12, _0x280ef2) {
    return _0x8b0e12 === _0x280ef2;
  }, EhCCI: function (_0x1a7307, _0x386b01) {
    return _0x1a7307 && _0x386b01;
  }, JnErl: _0x308dcf(415) + "s", FBOWU: _0x308dcf(730), sQlAW: function (_0x296ee0, _0x36328d) {
    return _0x296ee0 !== _0x36328d;
  }, mIPZc: function (_0x2ea53e, _0x2adff3) {
    return _0x2ea53e === _0x2adff3;
  }, zppjV: _0x308dcf(534), oXixS: _0x308dcf(543), Lxodz: _0x308dcf(758) + "er", xSgtU: _0x308dcf(463), bbNTv: _0x308dcf(507) + _0x308dcf(659), CQbJk: _0x308dcf(724), hXquM: _0x308dcf(776)}, _0xa09a39 = document[_0x308dcf(383) + _0x308dcf(624)](_0x351ed2[_0x308dcf(660)])[_0x308dcf(420)][_0x308dcf(747) + "e"](), _0x4a9a1b = document[_0x308dcf(383) + _0x308dcf(624)](_0x351ed2[_0x308dcf(753)])[_0x308dcf(420)][_0x308dcf(747) + "e"](), _0xac9eef = document[_0x308dcf(383) + _0x308dcf(624)](_0x351ed2[_0x308dcf(680)])[_0x308dcf(420)][_0x308dcf(747) + "e"](), _0x529853 = document[_0x308dcf(688) + _0x308dcf(530)](_0x351ed2[_0x308dcf(581)]);
  let _0x3181bf = 0;
  const _0x15d50b = Array[_0x308dcf(711)](_0x529853)[_0x308dcf(722)](_0xfe6024 => {
    const _0x3e4487 = _0x308dcf, _0x24e856 = _0xfe6024[_0x3e4487(795) + "te"](_0x351ed2[_0x3e4487(416)]), _0xc9ba99 = _0xfe6024[_0x3e4487(795) + "te"](_0x351ed2[_0x3e4487(748)]), _0x7fc99b = _0xfe6024[_0x3e4487(795) + "te"](_0x351ed2[_0x3e4487(599)]), _0x13ba32 = !_0xa09a39 || _0x351ed2[_0x3e4487(712)](_0x24e856, _0xa09a39), _0x47b6af = !_0x4a9a1b || _0x351ed2[_0x3e4487(714)](_0xc9ba99, _0x4a9a1b), _0x249118 = !_0xac9eef || _0x7fc99b[_0x3e4487(725)](_0xac9eef);
    return _0x351ed2[_0x3e4487(627)](_0x13ba32, _0x47b6af) && _0x249118;
  })[_0x308dcf(423)]((_0x5f3a96, _0x32ca00) => {
    const _0x2a43a1 = _0x308dcf, _0x12a787 = _0x5f3a96[_0x2a43a1(795) + "te"](_0x351ed2[_0x2a43a1(622)]), _0x2611a8 = _0x32ca00[_0x2a43a1(795) + "te"](_0x351ed2[_0x2a43a1(622)]);
    if (_0x351ed2[_0x2a43a1(714)](_0x12a787, _0x351ed2[_0x2a43a1(385)]) && _0x351ed2[_0x2a43a1(564)](_0x2611a8, _0x351ed2[_0x2a43a1(385)])) return -1;
    if (_0x351ed2[_0x2a43a1(564)](_0x12a787, _0x351ed2[_0x2a43a1(385)]) && _0x351ed2[_0x2a43a1(529)](_0x2611a8, _0x351ed2[_0x2a43a1(385)])) return 1;
    return 0;
  });
  _0x529853[_0x308dcf(459)](_0x1c837a => _0x1c837a[_0x308dcf(734)][_0x308dcf(767)] = _0x308dcf(603)), _0x15d50b[_0x308dcf(459)](_0x310bf6 => {
    const _0x51c38c = _0x308dcf;
    _0x310bf6[_0x51c38c(734)][_0x51c38c(767)] = _0x351ed2[_0x51c38c(401)], _0x3181bf++;
  });
  const _0x2f37cd = document[_0x308dcf(383) + _0x308dcf(624)](_0x351ed2[_0x308dcf(735)]);
  _0x351ed2[_0x308dcf(714)](_0x3181bf, 0) ? _0x2f37cd[_0x308dcf(579)][_0x308dcf(756)](_0x351ed2[_0x308dcf(765)]) : _0x2f37cd[_0x308dcf(579)][_0x308dcf(508)](_0x351ed2[_0x308dcf(765)]);
}
function resetFilters() {
  const _0x23aac2 = _0x2a1132, _0x3b702d = {vwsPT: _0x23aac2(543), AbXIY: _0x23aac2(758) + "er", oCJNN: _0x23aac2(463), jhMwo: function (_0x47742f) {
    return _0x47742f();
  }};
  document[_0x23aac2(383) + _0x23aac2(624)](_0x3b702d[_0x23aac2(666)])[_0x23aac2(420)] = "", document[_0x23aac2(383) + _0x23aac2(624)](_0x3b702d[_0x23aac2(739)])[_0x23aac2(420)] = "", document[_0x23aac2(383) + _0x23aac2(624)](_0x3b702d[_0x23aac2(432)])[_0x23aac2(420)] = "", _0x3b702d[_0x23aac2(682)](filterMatches);
}
function debounce(_0x40045d, _0x1bdfd7) {
  const _0x938c0e = {rcORE: function (_0x5264ba, _0x1c6027) {
    return _0x5264ba(_0x1c6027);
  }, FuHuj: function (_0x39532f, _0x219b97, _0x1eafbb) {
    return _0x39532f(_0x219b97, _0x1eafbb);
  }};
  let _0x1d7e92;
  return function (..._0x1e7cc7) {
    const _0x35f6d9 = _0x17ea;
    _0x938c0e[_0x35f6d9(583)](clearTimeout, _0x1d7e92), _0x1d7e92 = _0x938c0e[_0x35f6d9(521)](setTimeout, () => _0x40045d[_0x35f6d9(440)](this, _0x1e7cc7), _0x1bdfd7);
  };
}
document[_0x2a1132(383) + _0x2a1132(624)](_0x2a1132(463))[_0x2a1132(665) + _0x2a1132(414)](_0x2a1132(392), debounce(filterMatches, 300)), document[_0x2a1132(383) + _0x2a1132(624)](_0x2a1132(543))[_0x2a1132(665) + _0x2a1132(414)](_0x2a1132(729), filterMatches), document[_0x2a1132(383) + _0x2a1132(624)](_0x2a1132(758) + "er")[_0x2a1132(665) + _0x2a1132(414)](_0x2a1132(729), filterMatches), document[_0x2a1132(665) + _0x2a1132(414)](_0x2a1132(462) + _0x2a1132(685), loadMatches), window[_0x2a1132(413)] = function () {
  const _0x283f79 = _0x2a1132, _0x57bf70 = {fakvk: function (_0x56cc84) {
    return _0x56cc84();
  }};
  _0x57bf70[_0x283f79(568)](scrollFunction);
};
function scrollFunction() {
  const _0x240de0 = _0x2a1132, _0x1085a8 = {Wbwfk: function (_0x12ba7c, _0x1feb91) {
    return _0x12ba7c > _0x1feb91;
  }, VoZCe: _0x240de0(397) + _0x240de0(656), VekzW: _0x240de0(672), xVdsQ: _0x240de0(603)};
  _0x1085a8[_0x240de0(556)](document[_0x240de0(737)][_0x240de0(702)], 20) || _0x1085a8[_0x240de0(556)](document[_0x240de0(773) + _0x240de0(549)][_0x240de0(702)], 20) ? document[_0x240de0(383) + _0x240de0(624)](_0x1085a8[_0x240de0(525)])[_0x240de0(734)][_0x240de0(767)] = _0x1085a8[_0x240de0(594)] : document[_0x240de0(383) + _0x240de0(624)](_0x1085a8[_0x240de0(525)])[_0x240de0(734)][_0x240de0(767)] = _0x1085a8[_0x240de0(588)];
}
function scrollToTop() {
  const _0x2a8909 = _0x2a1132;
  document[_0x2a8909(737)][_0x2a8909(702)] = 0, document[_0x2a8909(773) + _0x2a8909(549)][_0x2a8909(702)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x26a049) {
  const _0x373add = _0x2a1132, _0x4ae666 = {wfeRh: _0x373add(615) + _0x373add(531) + _0x373add(442), Lrogx: _0x373add(658) + _0x373add(384) + _0x373add(524), qDuDS: _0x373add(388) + _0x373add(752) + _0x373add(540), ycCll: function (_0x3890d5, _0x57c43a) {
    return _0x3890d5(_0x57c43a);
  }, WNVeW: function (_0x4db67f, _0x4b5ca8) {
    return _0x4db67f(_0x4b5ca8);
  }, mLTIs: function (_0x57f995, _0x3cb94b, _0x19e5ba) {
    return _0x57f995(_0x3cb94b, _0x19e5ba);
  }, ojcFy: _0x373add(601)}, _0x565f93 = _0x373add(412) + ": " + _0x26a049[_0x373add(708)] + _0x373add(404) + _0x4ae666[_0x373add(792)](formatDate, _0x26a049[_0x373add(449)]) + _0x373add(489) + _0x26a049[_0x373add(757)] + _0x373add(788) + _0x26a049[_0x373add(639)] + (_0x373add(586) + _0x373add(522) + _0x373add(645) + _0x373add(497) + "m/"), _0x229a57 = _0x373add(429) + _0x373add(798) + _0x373add(705) + telegramBotToken + (_0x373add(452) + _0x373add(610) + "=") + telegramChatId + _0x373add(600) + _0x4ae666[_0x373add(481)](encodeURIComponent, _0x565f93);
  _0x4ae666[_0x373add(771)](fetch, _0x229a57, {method: _0x4ae666[_0x373add(514)]})[_0x373add(428)](_0x395ca2 => _0x395ca2[_0x373add(565)]())[_0x373add(428)](_0x28b8b1 => {
    const _0x2ad588 = _0x373add;
    _0x28b8b1.ok ? console[_0x2ad588(567)](_0x4ae666[_0x2ad588(750)]) : console[_0x2ad588(617)](_0x4ae666[_0x2ad588(630)], _0x28b8b1);
  })[_0x373add(691)](_0x1f771c => {
    const _0x132599 = _0x373add;
    console[_0x132599(617)](_0x4ae666[_0x132599(390)], _0x1f771c);
  });
}
