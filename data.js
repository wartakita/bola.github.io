const _0x164fd1 = _0x492a;
(function (_0x47cc31, _0x34d657) {
  const _0x4adc9d = _0x492a, _0x5e2eb5 = _0x47cc31();
  while (true) {
    try {
      const _0x4f05e5 = parseInt(_0x4adc9d(622)) / 1 * (parseInt(_0x4adc9d(799)) / 2) + -parseInt(_0x4adc9d(456)) / 3 * (parseInt(_0x4adc9d(611)) / 4) + -parseInt(_0x4adc9d(812)) / 5 * (-parseInt(_0x4adc9d(571)) / 6) + -parseInt(_0x4adc9d(827)) / 7 + parseInt(_0x4adc9d(577)) / 8 * (parseInt(_0x4adc9d(675)) / 9) + -parseInt(_0x4adc9d(820)) / 10 * (-parseInt(_0x4adc9d(718)) / 11) + -parseInt(_0x4adc9d(643)) / 12 * (parseInt(_0x4adc9d(587)) / 13);
      if (_0x4f05e5 === _0x34d657) break; else _0x5e2eb5.push(_0x5e2eb5.shift());
    } catch (_0x5f1d36) {
      _0x5e2eb5.push(_0x5e2eb5.shift());
    }
  }
}(_0x22e5, 921980));
const telegramBotToken = _0x164fd1(777) + _0x164fd1(744) + _0x164fd1(580) + _0x164fd1(670) + _0x164fd1(618), telegramChatId = _0x164fd1(763);
function formatDate(_0x8c8379) {
  const _0x24380a = _0x164fd1, _0x484c25 = {zyGtp: _0x24380a(450), habLJ: _0x24380a(579), DSzKs: _0x24380a(448), UsxrC: _0x24380a(549), KITgt: _0x24380a(506), dAzIM: _0x24380a(778), zGVuC: _0x24380a(754), VmIBn: _0x24380a(742), xCDoB: _0x24380a(446), mMYGQ: _0x24380a(532), XEEtl: _0x24380a(458), LgWMN: _0x24380a(454)}, _0x49562d = [_0x484c25[_0x24380a(800)], _0x484c25[_0x24380a(485)], _0x484c25[_0x24380a(562)], _0x484c25[_0x24380a(810)], _0x484c25[_0x24380a(546)], _0x484c25[_0x24380a(802)], _0x484c25[_0x24380a(596)], _0x484c25[_0x24380a(720)], _0x484c25[_0x24380a(565)], _0x484c25[_0x24380a(648)], _0x484c25[_0x24380a(752)], _0x484c25[_0x24380a(451)]], _0x525000 = new Date(_0x8c8379), _0x3d741f = _0x525000[_0x24380a(557)](), _0x11b17e = _0x49562d[_0x525000[_0x24380a(692)]()], _0x2ba615 = _0x525000[_0x24380a(725) + "r"]();
  return _0x3d741f + " " + _0x11b17e + " " + _0x2ba615;
}
async function loadMatches() {
  const _0x25f0ac = _0x164fd1, _0x2f83c0 = {lPHCd: _0x25f0ac(589), NhXKU: _0x25f0ac(671), OpDNd: function (_0x364610) {
    return _0x364610();
  }, cWwFZ: function (_0x2ef99b, _0x217ea3) {
    return _0x2ef99b(_0x217ea3);
  }, mpziv: function (_0x4be3d2, _0x50dfba) {
    return _0x4be3d2(_0x50dfba);
  }, XIJMy: function (_0x3cc315) {
    return _0x3cc315();
  }, tXArc: function (_0x2bb474, _0x30f28b, _0x1ccb69) {
    return _0x2bb474(_0x30f28b, _0x1ccb69);
  }, XLAIz: _0x25f0ac(747) + _0x25f0ac(541) + _0x25f0ac(792), BvrMX: _0x25f0ac(822), qdfaN: _0x25f0ac(717), Ocmwa: _0x25f0ac(765)};
  try {
    document[_0x25f0ac(469) + _0x25f0ac(625)](_0x2f83c0[_0x25f0ac(514)])[_0x25f0ac(629)][_0x25f0ac(714)] = _0x2f83c0[_0x25f0ac(723)];
    const _0x2e1932 = await _0x2f83c0[_0x25f0ac(631)](fetchMatches);
    _0x2f83c0[_0x25f0ac(809)](renderMatches, _0x2e1932), _0x2f83c0[_0x25f0ac(817)](populateFilters, _0x2e1932), _0x2f83c0[_0x25f0ac(521)](filterMatches), _0x2f83c0[_0x25f0ac(631)](updateCountdown), _0x2f83c0[_0x25f0ac(819)](setInterval, updateCountdown, 1e3);
  } catch (_0x29b714) {
    console[_0x25f0ac(780)](_0x2f83c0[_0x25f0ac(823)], _0x29b714), document[_0x25f0ac(469) + _0x25f0ac(625)](_0x2f83c0[_0x25f0ac(632)])[_0x25f0ac(633)][_0x25f0ac(470)](_0x2f83c0[_0x25f0ac(564)]);
  } finally {
    document[_0x25f0ac(469) + _0x25f0ac(625)](_0x2f83c0[_0x25f0ac(514)])[_0x25f0ac(629)][_0x25f0ac(714)] = _0x2f83c0[_0x25f0ac(523)];
  }
}
async function fetchMatches() {
  const _0x29db16 = _0x164fd1, _0x478fbb = {zBPKV: function (_0x487b56, _0x211275) {
    return _0x487b56(_0x211275);
  }, gCUiS: _0x29db16(674) + _0x29db16(621) + _0x29db16(624) + _0x29db16(576) + _0x29db16(779) + _0x29db16(734), ZfWEW: _0x29db16(616) + _0x29db16(758) + _0x29db16(687)}, _0x5746fb = await _0x478fbb[_0x29db16(537)](fetch, _0x478fbb[_0x29db16(640)]);
  if (!_0x5746fb.ok) throw new Error(_0x478fbb[_0x29db16(569)]);
  const _0x3115c5 = await _0x5746fb[_0x29db16(667)](), _0x1d3fe5 = await _0x478fbb[_0x29db16(537)](fetchLiveUrls, _0x3115c5);
  return _0x3115c5[_0x29db16(539)](_0x51f41a => {
    const _0x32b822 = _0x29db16;
    _0x51f41a[_0x32b822(547)] = _0x1d3fe5[_0x51f41a[_0x32b822(473)]] || _0x51f41a[_0x32b822(465)];
  }), _0x3115c5;
}
async function fetchLiveUrls(_0x30b488) {
  const _0x3b417a = _0x164fd1, _0x95c81b = {IfHbe: function (_0x4224dc, _0x57e67d) {
    return _0x4224dc(_0x57e67d);
  }, mrRXN: function (_0x1d7650, _0x2b9ddc) {
    return _0x1d7650 > _0x2b9ddc;
  }}, _0x59324c = _0x30b488[_0x3b417a(610)](_0x2805c5 => _0x2805c5[_0x3b417a(473)]), _0x46636f = _0x3b417a(474) + _0x59324c[_0x3b417a(486)](","), _0x1933e5 = localStorage[_0x3b417a(531)](_0x46636f);
  if (_0x1933e5) return JSON[_0x3b417a(500)](_0x1933e5);
  const _0x1960de = {}, _0xd99b5b = _0x59324c[_0x3b417a(610)](async _0x2c6bfd => {
    const _0x1f1a23 = _0x3b417a;
    try {
      const _0x6e9c38 = await _0x95c81b[_0x1f1a23(757)](fetch, _0x1f1a23(755) + _0x1f1a23(635) + _0x1f1a23(581) + _0x1f1a23(669) + _0x1f1a23(480) + _0x2c6bfd);
      if (_0x6e9c38.ok) {
        const _0x3e7868 = await _0x6e9c38[_0x1f1a23(667)]();
        _0x3e7868[_0x1f1a23(677)] && _0x95c81b[_0x1f1a23(759)](_0x3e7868[_0x1f1a23(551)][_0x1f1a23(445)], 0) && (_0x1960de[_0x2c6bfd] = _0x3e7868[_0x1f1a23(551)][0][_0x1f1a23(529) + _0x1f1a23(639)][0]);
      }
    } catch (_0x1777a7) {
      console[_0x1f1a23(780)](_0x1f1a23(747) + _0x1f1a23(774) + _0x1f1a23(578) + _0x1f1a23(768) + _0x2c6bfd + ":", _0x1777a7);
    }
  });
  return await Promise[_0x3b417a(642)](_0xd99b5b), localStorage[_0x3b417a(591)](_0x46636f, JSON[_0x3b417a(701)](_0x1960de)), _0x1960de;
}
function renderMatches(_0x4d127c) {
  const _0x579aa5 = _0x164fd1, _0x363e96 = {uLcJi: function (_0x306803, _0x555c45) {
    return _0x306803 >= _0x555c45;
  }, QryxP: function (_0x361134, _0x539e85) {
    return _0x361134 <= _0x539e85;
  }, eleXo: function (_0x18d586, _0x4a8378) {
    return _0x18d586 + _0x4a8378;
  }, PxVoN: function (_0x495035, _0x29b605) {
    return _0x495035 * _0x29b605;
  }, bbUra: function (_0x3ab60e, _0x2bcc8d) {
    return _0x3ab60e * _0x2bcc8d;
  }, GsMdC: function (_0x3961e8, _0x2eff50) {
    return _0x3961e8 >= _0x2eff50;
  }, xdyPg: function (_0x337b75, _0x1bcd63) {
    return _0x337b75 <= _0x1bcd63;
  }, lorqk: function (_0x41ff71, _0xba8c8f) {
    return _0x41ff71 + _0xba8c8f;
  }, BifXD: function (_0x24c8bb, _0x4cde92) {
    return _0x24c8bb * _0x4cde92;
  }, CAMGr: function (_0x3ea169, _0x6e5fc3) {
    return _0x3ea169 && _0x6e5fc3;
  }, gvgTI: function (_0x43df10, _0x7c50b5) {
    return _0x43df10 && _0x7c50b5;
  }, oyuiu: function (_0x516d0e, _0x17d045) {
    return _0x516d0e >= _0x17d045;
  }, ZqOCD: function (_0x316990, _0x27a333) {
    return _0x316990 <= _0x27a333;
  }, YwqEC: function (_0x2917f9, _0x294f81) {
    return _0x2917f9 + _0x294f81;
  }, sBIxg: function (_0x3c77a0, _0x289eba) {
    return _0x3c77a0 * _0x289eba;
  }, zcPqP: function (_0x1e5dd1, _0x34ac1f) {
    return _0x1e5dd1 * _0x34ac1f;
  }, YhaPV: _0x579aa5(705), NQLYg: _0x579aa5(638) + _0x579aa5(512), yGlOJ: _0x579aa5(628), JaLSM: _0x579aa5(785) + "e", ckwsi: _0x579aa5(658), IXrVB: _0x579aa5(585) + "s", hSxLc: _0x579aa5(694), onxRu: _0x579aa5(619), KOhzZ: function (_0x515e17, _0x420f1d) {
    return _0x515e17(_0x420f1d);
  }, oVECf: _0x579aa5(661) + _0x579aa5(682) + _0x579aa5(582) + _0x579aa5(746) + _0x579aa5(668) + _0x579aa5(790) + _0x579aa5(773) + _0x579aa5(764), uRhLD: function (_0x20092f, _0x23a509) {
    return _0x20092f(_0x23a509);
  }, kDgla: _0x579aa5(735) + _0x579aa5(664)}, _0x3fb867 = document[_0x579aa5(469) + _0x579aa5(625)](_0x363e96[_0x579aa5(699)]);
  _0x3fb867[_0x579aa5(712)] = "", _0x4d127c[_0x579aa5(678)]((_0x3539b8, _0x23891f) => {
    const _0x520756 = _0x579aa5, _0x4b7504 = new Date, _0x4460d0 = new Date(_0x3539b8[_0x520756(641)] + "T" + _0x3539b8[_0x520756(489)]), _0x5ab2c4 = new Date(_0x23891f[_0x520756(641)] + "T" + _0x23891f[_0x520756(489)]), _0x5c24f7 = _0x363e96[_0x520756(706)](_0x4b7504, _0x4460d0) && _0x363e96[_0x520756(490)](_0x4b7504, new Date(_0x363e96[_0x520756(721)](_0x4460d0[_0x520756(583)](), _0x363e96[_0x520756(530)](_0x363e96[_0x520756(770)](_0x363e96[_0x520756(770)](2, 60), 60), 1e3)))), _0xad6dd7 = _0x363e96[_0x520756(534)](_0x4b7504, _0x5ab2c4) && _0x363e96[_0x520756(488)](_0x4b7504, new Date(_0x363e96[_0x520756(614)](_0x5ab2c4[_0x520756(583)](), _0x363e96[_0x520756(770)](_0x363e96[_0x520756(770)](_0x363e96[_0x520756(657)](2, 60), 60), 1e3))));
    if (_0x363e96[_0x520756(637)](_0x5c24f7, !_0xad6dd7)) return -1;
    if (_0x363e96[_0x520756(762)](!_0x5c24f7, _0xad6dd7)) return 1;
    return 0;
  }), _0x4d127c[_0x579aa5(539)](_0x20c0bc => {
    const _0x281ea8 = _0x579aa5, _0x36d1e9 = _0x20c0bc[_0x281ea8(547)] || _0x20c0bc[_0x281ea8(465)], _0x594cdf = new Date, _0x541f12 = new Date(_0x20c0bc[_0x281ea8(641)] + "T" + _0x20c0bc[_0x281ea8(489)]), _0x46f323 = _0x363e96[_0x281ea8(554)](_0x594cdf, _0x541f12) && _0x363e96[_0x281ea8(776)](_0x594cdf, new Date(_0x363e96[_0x281ea8(612)](_0x541f12[_0x281ea8(583)](), _0x363e96[_0x281ea8(665)](_0x363e96[_0x281ea8(530)](_0x363e96[_0x281ea8(487)](2, 60), 60), 1e3)))), _0xa98247 = document[_0x281ea8(756) + _0x281ea8(651)](_0x363e96[_0x281ea8(818)]);
    _0xa98247[_0x281ea8(466)] = _0x363e96[_0x281ea8(796)], _0xa98247[_0x281ea8(750) + "te"](_0x363e96[_0x281ea8(826)], _0x20c0bc[_0x281ea8(641)][_0x281ea8(662) + "e"]()), _0xa98247[_0x281ea8(750) + "te"](_0x363e96[_0x281ea8(771)], _0x20c0bc[_0x281ea8(659)][_0x281ea8(662) + "e"]()), _0xa98247[_0x281ea8(750) + "te"](_0x363e96[_0x281ea8(708)], _0x20c0bc[_0x281ea8(508)][_0x281ea8(662) + "e"]()), _0xa98247[_0x281ea8(750) + "te"](_0x363e96[_0x281ea8(536)], _0x46f323 ? _0x363e96[_0x281ea8(656)] : _0x363e96[_0x281ea8(824)]);
    const _0x47623e = !_0x46f323 ? _0x281ea8(661) + _0x281ea8(760) + _0x281ea8(733) + _0x281ea8(710) + _0x20c0bc[_0x281ea8(641)] + "T" + _0x20c0bc[_0x281ea8(489)] + (_0x281ea8(499) + _0x281ea8(498) + _0x281ea8(588)) : "";
    _0xa98247[_0x281ea8(712)] = _0x281ea8(680) + _0x281ea8(527) + _0x281ea8(502) + _0x281ea8(652) + _0x281ea8(518) + _0x281ea8(527) + _0x281ea8(527) + _0x281ea8(661) + _0x281ea8(597) + _0x281ea8(582) + _0x281ea8(740) + _0x281ea8(495) + _0x281ea8(503) + _0x363e96[_0x281ea8(452)](formatDate, _0x20c0bc[_0x281ea8(641)]) + (_0x281ea8(654) + _0x281ea8(527) + _0x281ea8(527) + _0x281ea8(600) + _0x281ea8(477) + _0x281ea8(645) + _0x281ea8(566) + _0x281ea8(556) + " ") + _0x20c0bc[_0x281ea8(508)] + (_0x281ea8(654) + _0x281ea8(527) + _0x281ea8(527) + _0x281ea8(600) + _0x281ea8(516) + _0x281ea8(691) + _0x281ea8(447) + _0x281ea8(743) + _0x281ea8(478)) + _0x20c0bc[_0x281ea8(489)] + _0x281ea8(689) + _0x20c0bc[_0x281ea8(659)] + (_0x281ea8(654) + _0x281ea8(527) + _0x281ea8(527) + "  ") + (_0x46f323 ? _0x363e96[_0x281ea8(688)] : _0x47623e) + (_0x281ea8(680) + _0x281ea8(527) + _0x281ea8(736) + _0x281ea8(527) + _0x281ea8(703) + _0x281ea8(524) + _0x281ea8(775) + _0x281ea8(707) + _0x281ea8(702) + _0x281ea8(449)) + _0x20c0bc[_0x281ea8(473)] + _0x281ea8(663) + _0x20c0bc[_0x281ea8(547)] + (_0x281ea8(620) + _0x281ea8(527) + _0x281ea8(814) + _0x281ea8(582) + _0x281ea8(666) + _0x281ea8(606) + _0x281ea8(491) + _0x281ea8(527) + _0x281ea8(527) + _0x281ea8(791) + _0x281ea8(527) + _0x281ea8(737)), _0x3fb867[_0x281ea8(695) + "d"](_0xa98247), _0x46f323 && _0x363e96[_0x281ea8(545)](sendTelegramNotification, _0x20c0bc);
  });
}
function updateCountdown() {
  const _0x285e20 = _0x164fd1, _0xe1996e = {uraeD: _0x285e20(504), HmOJd: function (_0x477e82, _0x1e3a44) {
    return _0x477e82 - _0x1e3a44;
  }, qXSED: function (_0xdba9cf, _0x554f74) {
    return _0xdba9cf <= _0x554f74;
  }, BYqfg: function (_0x4619b9, _0x22030d) {
    return _0x4619b9 / _0x22030d;
  }, fafFb: function (_0x25ac81, _0x5e874f) {
    return _0x25ac81 * _0x5e874f;
  }, KlGVj: function (_0x2a2a37, _0x14a9f0) {
    return _0x2a2a37 / _0x14a9f0;
  }, bhYjC: function (_0x187cb6, _0x2709d5) {
    return _0x187cb6 % _0x2709d5;
  }, VAgGP: function (_0x32e639, _0x7dc7f9) {
    return _0x32e639 * _0x7dc7f9;
  }, bLYSZ: function (_0x4c7234, _0x273235) {
    return _0x4c7234 * _0x273235;
  }, JTiwy: function (_0x1efef0, _0xeb7b2a) {
    return _0x1efef0 * _0xeb7b2a;
  }, IaKaY: function (_0x421b66, _0x1e85e0) {
    return _0x421b66 % _0x1e85e0;
  }, TfMSF: function (_0x55990d, _0x1434cc) {
    return _0x55990d * _0x1434cc;
  }, wuqRj: _0x285e20(681) + "r]"}, _0x1a3a2b = document[_0x285e20(602) + _0x285e20(787)](_0xe1996e[_0x285e20(525)]), _0x5e4989 = new Date;
  _0x1a3a2b[_0x285e20(539)](_0x27f022 => {
    const _0x1aa089 = _0x285e20, _0x15e0a5 = new Date(_0x27f022[_0x1aa089(543) + "te"](_0xe1996e[_0x1aa089(815)])), _0x2871e4 = _0xe1996e[_0x1aa089(797)](_0x15e0a5, _0x5e4989);
    if (_0xe1996e[_0x1aa089(493)](_0x2871e4, 0)) _0x27f022[_0x1aa089(753) + "t"] = ""; else {
      const _0x4e9035 = Math[_0x1aa089(686)](_0xe1996e[_0x1aa089(783)](_0x2871e4, _0xe1996e[_0x1aa089(472)](_0xe1996e[_0x1aa089(472)](1e3, 60), 60))), _0x271284 = Math[_0x1aa089(686)](_0xe1996e[_0x1aa089(604)](_0xe1996e[_0x1aa089(598)](_0x2871e4, _0xe1996e[_0x1aa089(804)](_0xe1996e[_0x1aa089(601)](1e3, 60), 60)), _0xe1996e[_0x1aa089(683)](1e3, 60))), _0x9efcf0 = Math[_0x1aa089(686)](_0xe1996e[_0x1aa089(604)](_0xe1996e[_0x1aa089(731)](_0x2871e4, _0xe1996e[_0x1aa089(455)](1e3, 60)), 1e3));
      _0x27f022[_0x1aa089(753) + "t"] = _0x4e9035 + "h " + _0x271284 + "m " + _0x9efcf0 + "s";
    }
  });
}
function playMatch(_0x25a737, _0x1b9dde) {
  const _0x616b75 = _0x164fd1, _0xc27a3 = {dnpTR: function (_0x18da2e, _0xc07f9c) {
    return _0x18da2e(_0xc07f9c);
  }, CVNNG: _0x616b75(711) + _0x616b75(664), CzQid: _0x616b75(672), HWoCo: _0x616b75(813), wyfMl: _0x616b75(573), HaiwI: _0x616b75(528), HRImt: function (_0x4fd828, _0x137c8c) {
    return _0x4fd828(_0x137c8c);
  }};
  _0xc27a3[_0x616b75(609)](jwplayer, _0xc27a3[_0x616b75(709)])[_0x616b75(467)]({file: _0x1b9dde, width: _0xc27a3[_0x616b75(795)], aspectratio: _0xc27a3[_0x616b75(751)], image: " "}), document[_0x616b75(469) + _0x616b75(625)](_0xc27a3[_0x616b75(709)])[_0x616b75(630) + _0x616b75(594)]({behavior: _0xc27a3[_0x616b75(626)], block: _0xc27a3[_0x616b75(788)]}), _0xc27a3[_0x616b75(690)](loadChannels, _0x25a737);
}
async function loadChannels(_0x18eda6) {
  const _0x2288b2 = _0x164fd1, _0x4a1d4d = {tqhsl: function (_0x2d3a83, _0x10e967) {
    return _0x2d3a83(_0x10e967);
  }, hlBNV: _0x2288b2(616) + _0x2288b2(758) + _0x2288b2(687), DvawD: function (_0x119a24, _0x113764) {
    return _0x119a24 > _0x113764;
  }, HGVHT: function (_0x2ee543, _0xb6b994) {
    return _0x2ee543(_0xb6b994);
  }, iuEzx: _0x2288b2(716) + "st", bpBgV: _0x2288b2(765), iGymU: _0x2288b2(471), eCBpL: _0x2288b2(747) + _0x2288b2(555) + _0x2288b2(693)};
  try {
    const _0x13e524 = await _0x4a1d4d[_0x2288b2(811)](fetch, _0x2288b2(755) + _0x2288b2(635) + _0x2288b2(581) + _0x2288b2(669) + _0x2288b2(480) + _0x18eda6);
    if (!_0x13e524.ok) throw new Error(_0x4a1d4d[_0x2288b2(520)]);
    const _0x217c11 = await _0x13e524[_0x2288b2(667)]();
    _0x217c11[_0x2288b2(677)] && _0x4a1d4d[_0x2288b2(825)](_0x217c11[_0x2288b2(551)][_0x2288b2(445)], 0) ? (_0x4a1d4d[_0x2288b2(811)](renderChannels, _0x217c11[_0x2288b2(551)]), _0x4a1d4d[_0x2288b2(559)](renderServerMenu, _0x217c11[_0x2288b2(551)])) : (document[_0x2288b2(469) + _0x2288b2(625)](_0x4a1d4d[_0x2288b2(482)])[_0x2288b2(629)][_0x2288b2(714)] = _0x4a1d4d[_0x2288b2(515)], document[_0x2288b2(469) + _0x2288b2(625)](_0x4a1d4d[_0x2288b2(475)])[_0x2288b2(629)][_0x2288b2(714)] = _0x4a1d4d[_0x2288b2(515)]);
  } catch (_0x2d31b9) {
    console[_0x2288b2(780)](_0x4a1d4d[_0x2288b2(459)], _0x2d31b9), document[_0x2288b2(469) + _0x2288b2(625)](_0x4a1d4d[_0x2288b2(482)])[_0x2288b2(629)][_0x2288b2(714)] = _0x4a1d4d[_0x2288b2(515)], document[_0x2288b2(469) + _0x2288b2(625)](_0x4a1d4d[_0x2288b2(475)])[_0x2288b2(629)][_0x2288b2(714)] = _0x4a1d4d[_0x2288b2(515)];
  }
}
function renderChannels(_0x401b35) {
  const _0x3f7771 = _0x164fd1, _0x1ae7ac = {RnmIE: _0x3f7771(496) + "ms", kLsjO: _0x3f7771(716) + "st", QuDBT: _0x3f7771(671)}, _0x2dab81 = document[_0x3f7771(469) + _0x3f7771(625)](_0x1ae7ac[_0x3f7771(730)]);
  _0x2dab81[_0x3f7771(712)] = "", _0x401b35[_0x3f7771(539)](_0x524bdc => {
    const _0x156232 = _0x3f7771, _0x36c943 = document[_0x156232(756) + _0x156232(651)]("li");
    _0x36c943[_0x156232(712)] = _0x156232(680) + _0x156232(527) + _0x156232(586) + _0x156232(481) + _0x156232(510) + "'" + _0x524bdc[_0x156232(529) + _0x156232(639)][0] + _0x156232(679) + _0x524bdc[_0x156232(786)] + (_0x156232(791) + _0x156232(527) + _0x156232(737)), _0x2dab81[_0x156232(695) + "d"](_0x36c943);
  }), document[_0x3f7771(469) + _0x3f7771(625)](_0x1ae7ac[_0x3f7771(460)])[_0x3f7771(629)][_0x3f7771(714)] = _0x1ae7ac[_0x3f7771(483)];
}
function playChannel(_0x31c930) {
  const _0x1f3f94 = _0x164fd1, _0x59560e = {GOLcb: function (_0x28052a, _0x5ac859) {
    return _0x28052a(_0x5ac859);
  }, LsALy: _0x1f3f94(711) + _0x1f3f94(664), wNFRc: _0x1f3f94(672), HbLEd: _0x1f3f94(813), XEgTA: _0x1f3f94(573), wGgbh: _0x1f3f94(528)};
  _0x59560e[_0x1f3f94(453)](jwplayer, _0x59560e[_0x1f3f94(807)])[_0x1f3f94(467)]({file: _0x31c930, width: _0x59560e[_0x1f3f94(794)], aspectratio: _0x59560e[_0x1f3f94(608)], image: " "}), document[_0x1f3f94(469) + _0x1f3f94(625)](_0x59560e[_0x1f3f94(807)])[_0x1f3f94(630) + _0x1f3f94(594)]({behavior: _0x59560e[_0x1f3f94(553)], block: _0x59560e[_0x1f3f94(603)]});
}
function renderServerMenu(_0x45c506) {
  const _0x349a1b = _0x164fd1, _0x664fd7 = {NgiLZ: _0x349a1b(739), qUmNU: function (_0x14ec3f, _0x48ec25) {
    return _0x14ec3f + _0x48ec25;
  }, xJPCN: _0x349a1b(471), cjOcQ: _0x349a1b(671)}, _0xe11a7e = document[_0x349a1b(469) + _0x349a1b(625)](_0x664fd7[_0x349a1b(457)]);
  _0xe11a7e[_0x349a1b(712)] = "", _0x45c506[_0x349a1b(539)]((_0x54c249, _0x37e77e) => {
    const _0x3b4260 = _0x349a1b, _0x2f8da1 = {bMLCU: _0x664fd7[_0x3b4260(741)], SwEIP: function (_0x5aec5d, _0x45a5ec) {
      const _0x2c6c22 = _0x3b4260;
      return _0x664fd7[_0x2c6c22(676)](_0x5aec5d, _0x45a5ec);
    }};
    _0x54c249[_0x3b4260(529) + _0x3b4260(639)][_0x3b4260(539)]((_0x1fdb8c, _0x449016) => {
      const _0x22e8b4 = _0x3b4260, _0x2378bb = document[_0x22e8b4(756) + _0x22e8b4(651)](_0x2f8da1[_0x22e8b4(568)]);
      _0x2378bb[_0x22e8b4(712)] = _0x22e8b4(784) + _0x22e8b4(673) + _0x22e8b4(605) + _0x22e8b4(808) + _0x2f8da1[_0x22e8b4(505)](_0x449016, 1), _0x2378bb[_0x22e8b4(684)] = () => playChannel(_0x1fdb8c), _0xe11a7e[_0x22e8b4(695) + "d"](_0x2378bb);
    });
  }), document[_0x349a1b(469) + _0x349a1b(625)](_0x664fd7[_0x349a1b(457)])[_0x349a1b(629)][_0x349a1b(714)] = _0x664fd7[_0x349a1b(715)];
}
function populateFilters(_0x54702f) {
  const _0x17d371 = _0x164fd1, _0x52aeee = {JEIFQ: _0x17d371(761), bGotY: function (_0x11b563, _0x1f2a6b) {
    return _0x11b563(_0x1f2a6b);
  }, UVEZX: _0x17d371(798), JnOgJ: _0x17d371(607) + "er", WGfYg: _0x17d371(816) + _0x17d371(729) + _0x17d371(722) + _0x17d371(732), fnCCw: _0x17d371(816) + _0x17d371(729) + _0x17d371(653) + _0x17d371(494) + "n>"}, _0x35e677 = document[_0x17d371(469) + _0x17d371(625)](_0x52aeee[_0x17d371(650)]), _0x1e84ee = document[_0x17d371(469) + _0x17d371(625)](_0x52aeee[_0x17d371(590)]);
  _0x35e677[_0x17d371(712)] = _0x52aeee[_0x17d371(821)], _0x1e84ee[_0x17d371(712)] = _0x52aeee[_0x17d371(727)];
  const _0x19d083 = [...new Set(_0x54702f[_0x17d371(610)](_0x26c348 => _0x26c348[_0x17d371(641)]))], _0x3d96b0 = [...new Set(_0x54702f[_0x17d371(610)](_0x1c5df9 => _0x1c5df9[_0x17d371(659)]))];
  _0x19d083[_0x17d371(539)](_0x102989 => {
    const _0x1b350d = _0x17d371, _0x1455e7 = document[_0x1b350d(756) + _0x1b350d(651)](_0x52aeee[_0x1b350d(599)]);
    _0x1455e7[_0x1b350d(561)] = _0x102989[_0x1b350d(662) + "e"](), _0x1455e7[_0x1b350d(753) + "t"] = _0x52aeee[_0x1b350d(540)](formatDate, _0x102989), _0x35e677[_0x1b350d(695) + "d"](_0x1455e7);
  }), _0x3d96b0[_0x17d371(539)](_0x12cdb1 => {
    const _0x2241ea = _0x17d371, _0x53af79 = document[_0x2241ea(756) + _0x2241ea(651)](_0x52aeee[_0x2241ea(599)]);
    _0x53af79[_0x2241ea(561)] = _0x12cdb1[_0x2241ea(662) + "e"](), _0x53af79[_0x2241ea(753) + "t"] = _0x12cdb1, _0x1e84ee[_0x2241ea(695) + "d"](_0x53af79);
  });
}
function filterMatches() {
  const _0x1f6bb8 = _0x164fd1, _0x3c7fba = {LFDSI: _0x1f6bb8(628), adCHF: _0x1f6bb8(785) + "e", sICOq: _0x1f6bb8(658), mnZbF: function (_0x1bc164, _0xd57d2c) {
    return _0x1bc164 === _0xd57d2c;
  }, XXzXG: function (_0x579807, _0x575869) {
    return _0x579807 === _0x575869;
  }, YXOPC: function (_0x59e134, _0x1acab7) {
    return _0x59e134 && _0x1acab7;
  }, Fseqh: _0x1f6bb8(585) + "s", LZnVG: function (_0x46e8e2, _0x4199b4) {
    return _0x46e8e2 === _0x4199b4;
  }, mQLDK: _0x1f6bb8(694), iRFjE: function (_0x1101eb, _0x4c7909) {
    return _0x1101eb !== _0x4c7909;
  }, DfNwU: function (_0x32a6ad, _0x1a46c9) {
    return _0x32a6ad !== _0x1a46c9;
  }, OHDzT: function (_0x484510, _0x1fc6d4) {
    return _0x484510 === _0x1fc6d4;
  }, AYSjH: _0x1f6bb8(613), YaeUr: _0x1f6bb8(798), srZSk: _0x1f6bb8(607) + "er", QdJzN: _0x1f6bb8(696), wdjDG: _0x1f6bb8(519) + _0x1f6bb8(697), ClQpq: _0x1f6bb8(822), pvXiu: _0x1f6bb8(717)}, _0x3cea9d = document[_0x1f6bb8(469) + _0x1f6bb8(625)](_0x3c7fba[_0x1f6bb8(563)])[_0x1f6bb8(561)][_0x1f6bb8(662) + "e"](), _0xdc8992 = document[_0x1f6bb8(469) + _0x1f6bb8(625)](_0x3c7fba[_0x1f6bb8(463)])[_0x1f6bb8(561)][_0x1f6bb8(662) + "e"](), _0x384428 = document[_0x1f6bb8(469) + _0x1f6bb8(625)](_0x3c7fba[_0x1f6bb8(595)])[_0x1f6bb8(561)][_0x1f6bb8(662) + "e"](), _0x1c8e63 = document[_0x1f6bb8(602) + _0x1f6bb8(787)](_0x3c7fba[_0x1f6bb8(479)]);
  let _0x567bcc = 0;
  const _0x4bbb9f = Array[_0x1f6bb8(766)](_0x1c8e63)[_0x1f6bb8(782)](_0x4defc0 => {
    const _0x805aa0 = _0x1f6bb8, _0x1bc910 = _0x4defc0[_0x805aa0(543) + "te"](_0x3c7fba[_0x805aa0(772)]), _0x566dc0 = _0x4defc0[_0x805aa0(543) + "te"](_0x3c7fba[_0x805aa0(829)]), _0x5b2fef = _0x4defc0[_0x805aa0(543) + "te"](_0x3c7fba[_0x805aa0(627)]), _0x4e3ad4 = !_0x3cea9d || _0x3c7fba[_0x805aa0(745)](_0x1bc910, _0x3cea9d), _0x5c5127 = !_0xdc8992 || _0x3c7fba[_0x805aa0(574)](_0x566dc0, _0xdc8992), _0x1874ac = !_0x384428 || _0x5b2fef[_0x805aa0(526)](_0x384428);
    return _0x3c7fba[_0x805aa0(544)](_0x4e3ad4, _0x5c5127) && _0x1874ac;
  })[_0x1f6bb8(678)]((_0x9fee4b, _0x4b533b) => {
    const _0x171d57 = _0x1f6bb8, _0x2ced45 = _0x9fee4b[_0x171d57(543) + "te"](_0x3c7fba[_0x171d57(584)]), _0x3eb580 = _0x4b533b[_0x171d57(543) + "te"](_0x3c7fba[_0x171d57(584)]);
    if (_0x3c7fba[_0x171d57(649)](_0x2ced45, _0x3c7fba[_0x171d57(789)]) && _0x3c7fba[_0x171d57(623)](_0x3eb580, _0x3c7fba[_0x171d57(789)])) return -1;
    if (_0x3c7fba[_0x171d57(769)](_0x2ced45, _0x3c7fba[_0x171d57(789)]) && _0x3c7fba[_0x171d57(575)](_0x3eb580, _0x3c7fba[_0x171d57(789)])) return 1;
    return 0;
  });
  _0x1c8e63[_0x1f6bb8(539)](_0x701ce3 => _0x701ce3[_0x1f6bb8(629)][_0x1f6bb8(714)] = _0x1f6bb8(765)), _0x4bbb9f[_0x1f6bb8(539)](_0x11816d => {
    const _0x52eca8 = _0x1f6bb8;
    _0x11816d[_0x52eca8(629)][_0x52eca8(714)] = _0x3c7fba[_0x52eca8(542)], _0x567bcc++;
  });
  const _0xb6cd99 = document[_0x1f6bb8(469) + _0x1f6bb8(625)](_0x3c7fba[_0x1f6bb8(767)]);
  _0x3c7fba[_0x1f6bb8(649)](_0x567bcc, 0) ? _0xb6cd99[_0x1f6bb8(633)][_0x1f6bb8(470)](_0x3c7fba[_0x1f6bb8(517)]) : _0xb6cd99[_0x1f6bb8(633)][_0x1f6bb8(507)](_0x3c7fba[_0x1f6bb8(517)]);
}
function _0x22e5() {
  const _0xb6d4d2 = ["IfHbe", "sponse was", "mrRXN", 's="countdo', "option", "gvgTI", "1391979650", "an>", "none", "from", "ClQpq", "atchId ", "DfNwU", "bbUra", "JaLSM", "LFDSI", "ve Now</sp", "fetch live", 's="watch-b', "ZqOCD", "7598004626", "June", "io/schedul", "error", "GtTMB", "filter", "BYqfg", '<i class="', "data-leagu", "name", "torAll", "HaiwI", "mQLDK", 'r"></i> Li', "</button>\n", "es:", "rePcr", "wNFRc", "CzQid", "NQLYg", "HmOJd", "dateFilter", "4ITPuaN", "zyGtp", "stener", "dAzIM", "ccessfully", "VAgGP", "apply", "send notif", "LsALy", "Server ", "cWwFZ", "UsxrC", "tqhsl", "390dXsUfR", "16:9", "         <", "uraeD", "<option va", "mpziv", "YhaPV", "tXArc", "10aAqjQE", "WGfYg", "noMatches", "XLAIz", "onxRu", "DvawD", "yGlOJ", "80038nowBmh", "log", "adCHF", "length", "September", 'ss="fas fa', "March", "Match('", "January", "LgWMN", "KOhzZ", "GOLcb", "December", "TfMSF", "15879axALCN", "xJPCN", "November", "eCBpL", "kLsjO", "ZyfEM", "jKDUl", "srZSk", "🚨 Live Now", "m3u8Url", "className", "setup", "wckij", "getElement", "add", "serverMenu", "fafFb", "videoId", "liveUrls-", "iGymU", "jKdSX", 'ass="teams', "i> ", "wdjDG", "atchId=", 'nclick="pl', "iuEzx", "QuDBT", " 🚨\nDate: ", "habLJ", "join", "zcPqP", "xdyPg", "time", "QryxP", "/i> Watch\n", "\nLeague: ", "qXSED", "gue</optio", 'ndar-alt">', "channelIte", "addEventLi", " Soon...</", '">Starting', "parse", ".org/bot", " <div clas", "</i> ", "data-timer", "SwEIP", "May", "remove", "teams", "scrollToTo", "ayChannel(", "&text=", "ard", "i.telegram", "lPHCd", "bpBgV", 'ass="detai', "pvXiu", 'nfo">\n    ', ".schedule-", "hlBNV", "XIJMy", "GRVRX", "Ocmwa", "utton clas", "wuqRj", "includes", "          ", "start", "streaming_", "PxVoN", "getItem", "October", "pButton", "GsMdC", "zZVLC", "IXrVB", "zBPKV", "odbxZ", "forEach", "bGotY", "load match", "AYSjH", "getAttribu", "YXOPC", "uRhLD", "KITgt", "liveUrl", "input", "April", "ing notifi", "result", "LUypc", "XEgTA", "oyuiu", "load chann", 'sers"></i>', "getDate", "change", "HGVHT", "telXB", "value", "DSzKs", "YaeUr", "qdfaN", "xCDoB", '="fas fa-u', "zRRcm", "bMLCU", "ZfWEW", "GHfra", "139962EUkLma", "catch", "smooth", "XXzXG", "OHDzT", "la.github.", "56ZWOmHj", " URL for m", "February", "iZ76AHaEWo", "/v1/match/", 'i class="f', "getTime", "Fseqh", "data-statu", " <button o", "6761443fTgTRQ", "span>", "loader", "JnOgJ", "setItem", "onscroll", "DOMContent", "View", "QdJzN", "zGVuC", 's="date"><', "bhYjC", "JEIFQ", "  <span cl", "bLYSZ", "querySelec", "wGgbh", "KlGVj", 'ver"></i> ', '-circle"><', "leagueFilt", "HbLEd", "dnpTR", "map", "376sZpvsL", "YwqEC", "flex", "lorqk", "\nTime: ", "Network re", "on sent su", "23795c", "upcoming", "')\">\n     ", "rtakita.gi", "872323vKFabu", "iRFjE", "thub.io/bo", "ById", "wyfMl", "sICOq", "data-date", "style", "scrollInto", "OpDNd", "BvrMX", "classList", "muXuI", "i.90min.to", "whIwI", "CAMGr", "schedule-c", "urls", "gCUiS", "date", "all", "120NRJMHQ", "ement", '"><i class', "then", "ge?chat_id", "mMYGQ", "LZnVG", "UVEZX", "ent", 's="match-i', "ter by Lea", "</span>\n  ", "heLOf", "hSxLc", "BifXD", "data-teams", "league", "documentEl", "<span clas", "toLowerCas", "', '", "ntainer", "sBIxg", "as fa-play", "json", "dcast-towe", "channels?m", "zvc2_I5WDk", "block", "100%", "fas fa-ser", "https://wa", "1943145MkSQye", "qUmNU", "status", "sort", "')\">", "\n         ", "[data-time", 's="live"><', "JTiwy", "onclick", "eDNTi", "floor", " not ok", "oVECf", " | ", "HRImt", 'ls"><i cla', "getMonth", "els:", "live", "appendChil", "teamSearch", "card", "scrollTop", "kDgla", "Error send", "stringify", 'lick="play', "        <b", "lzqPD", "div", "uLcJi", 'utton" onc', "ckwsi", "CVNNG", 'imer="', "jwplayerCo", "innerHTML", "ication:", "display", "cjOcQ", "channelsLi", "show", "17122369CvVsyJ", "Loaded", "VmIBn", "eleXo", "ter by Dat", "NhXKU", "/sendMessa", "getFullYea", "cation:", "fnCCw", "UjxTq", 'lue="">Fil', "RnmIE", "IaKaY", "e</option>", 'wn" data-t', "e.json", "scheduleCo", " </div>\n  ", "      ", "body", "button", "as fa-cale", "NgiLZ", "August", '-clock"></', ":AAGG4SAfi", "mnZbF", "as fa-broa", "Failed to ", "Notificati", "GET", "setAttribu", "HWoCo", "XEEtl", "textConten", "July", "https://ap", "createElem"];
  _0x22e5 = function () {
    return _0xb6d4d2;
  };
  return _0x22e5();
}
function resetFilters() {
  const _0x3fee5a = _0x164fd1, _0x5b0b3d = {lzqPD: _0x3fee5a(798), rePcr: _0x3fee5a(607) + "er", LUypc: _0x3fee5a(696), wckij: function (_0x2ded19) {
    return _0x2ded19();
  }};
  document[_0x3fee5a(469) + _0x3fee5a(625)](_0x5b0b3d[_0x3fee5a(704)])[_0x3fee5a(561)] = "", document[_0x3fee5a(469) + _0x3fee5a(625)](_0x5b0b3d[_0x3fee5a(793)])[_0x3fee5a(561)] = "", document[_0x3fee5a(469) + _0x3fee5a(625)](_0x5b0b3d[_0x3fee5a(552)])[_0x3fee5a(561)] = "", _0x5b0b3d[_0x3fee5a(468)](filterMatches);
}
function debounce(_0x1aaad5, _0x36cd74) {
  const _0x111973 = {UjxTq: function (_0x279139, _0x442659) {
    return _0x279139(_0x442659);
  }, eDNTi: function (_0x4a8d88, _0x4ea823, _0x5c855e) {
    return _0x4a8d88(_0x4ea823, _0x5c855e);
  }};
  let _0xcda53e;
  return function (..._0x48a0d3) {
    const _0x2a99c7 = _0x492a;
    _0x111973[_0x2a99c7(728)](clearTimeout, _0xcda53e), _0xcda53e = _0x111973[_0x2a99c7(685)](setTimeout, () => _0x1aaad5[_0x2a99c7(805)](this, _0x48a0d3), _0x36cd74);
  };
}
document[_0x164fd1(469) + _0x164fd1(625)](_0x164fd1(696))[_0x164fd1(497) + _0x164fd1(801)](_0x164fd1(548), debounce(filterMatches, 300)), document[_0x164fd1(469) + _0x164fd1(625)](_0x164fd1(798))[_0x164fd1(497) + _0x164fd1(801)](_0x164fd1(558), filterMatches), document[_0x164fd1(469) + _0x164fd1(625)](_0x164fd1(607) + "er")[_0x164fd1(497) + _0x164fd1(801)](_0x164fd1(558), filterMatches), document[_0x164fd1(497) + _0x164fd1(801)](_0x164fd1(593) + _0x164fd1(719), loadMatches), window[_0x164fd1(592)] = function () {
  const _0x1f9e3e = _0x164fd1, _0x148aa6 = {muXuI: function (_0x30afa0) {
    return _0x30afa0();
  }};
  _0x148aa6[_0x1f9e3e(634)](scrollFunction);
};
function _0x492a(_0x1d85b7, _0x93a572) {
  const _0x429228 = _0x22e5();
  return _0x492a = function (_0x1955bc, _0x2b6bbe) {
    _0x1955bc = _0x1955bc - 445;
    let _0x124723 = _0x429228[_0x1955bc];
    return _0x124723;
  }, _0x492a(_0x1d85b7, _0x93a572);
}
function scrollFunction() {
  const _0x284a93 = _0x164fd1, _0xf52921 = {GRVRX: function (_0x900bb2, _0x4d1411) {
    return _0x900bb2 > _0x4d1411;
  }, telXB: function (_0x432b08, _0x21c171) {
    return _0x432b08 > _0x21c171;
  }, GtTMB: _0x284a93(509) + _0x284a93(533), GHfra: _0x284a93(671), ZyfEM: _0x284a93(765)};
  _0xf52921[_0x284a93(522)](document[_0x284a93(738)][_0x284a93(698)], 20) || _0xf52921[_0x284a93(560)](document[_0x284a93(660) + _0x284a93(644)][_0x284a93(698)], 20) ? document[_0x284a93(469) + _0x284a93(625)](_0xf52921[_0x284a93(781)])[_0x284a93(629)][_0x284a93(714)] = _0xf52921[_0x284a93(570)] : document[_0x284a93(469) + _0x284a93(625)](_0xf52921[_0x284a93(781)])[_0x284a93(629)][_0x284a93(714)] = _0xf52921[_0x284a93(461)];
}
function scrollToTop() {
  const _0x1fbeaa = _0x164fd1;
  document[_0x1fbeaa(738)][_0x1fbeaa(698)] = 0, document[_0x1fbeaa(660) + _0x1fbeaa(644)][_0x1fbeaa(698)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x57420b) {
  const _0x695cbd = _0x164fd1, _0xce2294 = {heLOf: _0x695cbd(748) + _0x695cbd(617) + _0x695cbd(803), jKdSX: _0x695cbd(747) + _0x695cbd(806) + _0x695cbd(713), odbxZ: _0x695cbd(700) + _0x695cbd(550) + _0x695cbd(726), zZVLC: function (_0x26e3c3, _0x1a636f) {
    return _0x26e3c3(_0x1a636f);
  }, whIwI: function (_0x3977a0, _0x12e2ac) {
    return _0x3977a0(_0x12e2ac);
  }, zRRcm: function (_0x3b5a19, _0x3debbc, _0x190d04) {
    return _0x3b5a19(_0x3debbc, _0x190d04);
  }, jKDUl: _0x695cbd(749)}, _0x59044d = _0x695cbd(464) + ": " + _0x57420b[_0x695cbd(508)] + _0x695cbd(484) + _0xce2294[_0x695cbd(535)](formatDate, _0x57420b[_0x695cbd(641)]) + _0x695cbd(615) + _0x57420b[_0x695cbd(489)] + _0x695cbd(492) + _0x57420b[_0x695cbd(659)], _0x101cc0 = _0x695cbd(755) + _0x695cbd(513) + _0x695cbd(501) + telegramBotToken + (_0x695cbd(724) + _0x695cbd(647) + "=") + telegramChatId + _0x695cbd(511) + _0xce2294[_0x695cbd(636)](encodeURIComponent, _0x59044d);
  _0xce2294[_0x695cbd(567)](fetch, _0x101cc0, {method: _0xce2294[_0x695cbd(462)]})[_0x695cbd(646)](_0x28d828 => _0x28d828[_0x695cbd(667)]())[_0x695cbd(646)](_0x2073d3 => {
    const _0x40acaf = _0x695cbd;
    _0x2073d3.ok ? console[_0x40acaf(828)](_0xce2294[_0x40acaf(655)]) : console[_0x40acaf(780)](_0xce2294[_0x40acaf(476)], _0x2073d3);
  })[_0x695cbd(572)](_0x30c535 => {
    const _0xee0f50 = _0x695cbd;
    console[_0xee0f50(780)](_0xce2294[_0xee0f50(538)], _0x30c535);
  });
}
