const _0xeaeda9 = _0x3bb4;
(function (_0x3e91b2, _0x509888) {
  const _0x1c27bb = _0x3bb4, _0xa9580b = _0x3e91b2();
  while (true) {
    try {
      const _0x4072ac = -parseInt(_0x1c27bb(576)) / 1 * (-parseInt(_0x1c27bb(861)) / 2) + parseInt(_0x1c27bb(863)) / 3 * (parseInt(_0x1c27bb(783)) / 4) + parseInt(_0x1c27bb(617)) / 5 + parseInt(_0x1c27bb(558)) / 6 * (-parseInt(_0x1c27bb(775)) / 7) + -parseInt(_0x1c27bb(791)) / 8 + -parseInt(_0x1c27bb(882)) / 9 * (parseInt(_0x1c27bb(614)) / 10) + parseInt(_0x1c27bb(857)) / 11;
      if (_0x4072ac === _0x509888) break; else _0xa9580b.push(_0xa9580b.shift());
    } catch (_0x1b93f8) {
      _0xa9580b.push(_0xa9580b.shift());
    }
  }
}(_0x371b, 233493));
const telegramBotToken = _0xeaeda9(755) + _0xeaeda9(563) + _0xeaeda9(829) + _0xeaeda9(736) + _0xeaeda9(764), telegramChatId = _0xeaeda9(870), sentNotifications = new Set;
function formatDate(_0x4791ed) {
  const _0x592412 = _0xeaeda9, _0x423f40 = {oTYfM: _0x592412(699), AbwoM: _0x592412(865), FmExF: _0x592412(644), CECWM: _0x592412(750), chzRs: _0x592412(661), WqHwq: _0x592412(688), UMYBI: _0x592412(761), qRjgR: _0x592412(777), rflYX: _0x592412(710), wmwpF: _0x592412(673), ejSEx: _0x592412(585), EUnWN: _0x592412(623)}, _0x38dfc4 = [_0x423f40[_0x592412(823)], _0x423f40[_0x592412(767)], _0x423f40[_0x592412(867)], _0x423f40[_0x592412(759)], _0x423f40[_0x592412(618)], _0x423f40[_0x592412(685)], _0x423f40[_0x592412(853)], _0x423f40[_0x592412(565)], _0x423f40[_0x592412(573)], _0x423f40[_0x592412(811)], _0x423f40[_0x592412(742)], _0x423f40[_0x592412(819)]], _0x3b51ca = new Date(_0x4791ed), _0x458b4c = _0x3b51ca[_0x592412(484)](), _0x1762b2 = _0x38dfc4[_0x3b51ca[_0x592412(643)]()], _0x26a324 = _0x3b51ca[_0x592412(652) + "r"]();
  return _0x458b4c + " " + _0x1762b2 + " " + _0x26a324;
}
async function loadMatches() {
  const _0xb8a1e1 = _0xeaeda9, _0x461241 = {xyUFz: _0xb8a1e1(743), HOKdj: _0xb8a1e1(628), vNhCE: function (_0x48ba3b) {
    return _0x48ba3b();
  }, FXPaX: function (_0x4d1e15, _0x3c4cc6) {
    return _0x4d1e15(_0x3c4cc6);
  }, eUfwA: function (_0x2bc25d) {
    return _0x2bc25d();
  }, UXHgB: function (_0x18e945) {
    return _0x18e945();
  }, bGfxh: function (_0x2c63bc, _0x1d43cc, _0x541591) {
    return _0x2c63bc(_0x1d43cc, _0x541591);
  }, FKODF: _0xb8a1e1(729) + _0xb8a1e1(566) + _0xb8a1e1(839), hubHY: _0xb8a1e1(779), yRAre: _0xb8a1e1(593), iELwp: _0xb8a1e1(552)};
  try {
    document[_0xb8a1e1(866) + _0xb8a1e1(587)](_0x461241[_0xb8a1e1(538)])[_0xb8a1e1(516)][_0xb8a1e1(626)] = _0x461241[_0xb8a1e1(848)];
    const _0x5ef038 = await _0x461241[_0xb8a1e1(770)](fetchMatches);
    _0x461241[_0xb8a1e1(830)](renderMatches, _0x5ef038), _0x461241[_0xb8a1e1(830)](populateFilters, _0x5ef038), _0x461241[_0xb8a1e1(834)](filterMatches), _0x461241[_0xb8a1e1(778)](updateCountdown), _0x461241[_0xb8a1e1(597)](setInterval, updateCountdown, 1e3);
  } catch (_0x30bf55) {
    console[_0xb8a1e1(545)](_0x461241[_0xb8a1e1(492)], _0x30bf55), document[_0xb8a1e1(866) + _0xb8a1e1(587)](_0x461241[_0xb8a1e1(799)])[_0xb8a1e1(869)][_0xb8a1e1(517)](_0x461241[_0xb8a1e1(756)]);
  } finally {
    document[_0xb8a1e1(866) + _0xb8a1e1(587)](_0x461241[_0xb8a1e1(538)])[_0xb8a1e1(516)][_0xb8a1e1(626)] = _0x461241[_0xb8a1e1(553)];
  }
}
async function fetchMatches() {
  const _0x5b507e = _0xeaeda9, _0x43b507 = {pLylm: function (_0x2c745d, _0x386f6d) {
    return _0x2c745d(_0x386f6d);
  }, oGZyj: _0x5b507e(874) + _0x5b507e(481) + _0x5b507e(748) + _0x5b507e(708) + _0x5b507e(655) + "on", frxXu: _0x5b507e(707) + _0x5b507e(845) + _0x5b507e(751)}, _0xa2621a = await _0x43b507[_0x5b507e(746)](fetch, _0x43b507[_0x5b507e(607)]);
  if (!_0xa2621a.ok) throw new Error(_0x43b507[_0x5b507e(769)]);
  const _0x2ff5b2 = await _0xa2621a[_0x5b507e(564)](), _0xdfd6e1 = await _0x43b507[_0x5b507e(746)](fetchLiveUrls, _0x2ff5b2);
  return _0x2ff5b2[_0x5b507e(549)](_0x358a4f => {
    const _0x457357 = _0x5b507e;
    _0x358a4f[_0x457357(555)] = _0xdfd6e1[_0x358a4f[_0x457357(859)]] || _0x358a4f[_0x457357(747)] || _0x358a4f[_0x457357(762)];
  }), _0x2ff5b2;
}
async function fetchLiveUrls(_0x5ce599) {
  const _0x5653c0 = _0xeaeda9, _0x1aebc4 = {SFdTt: function (_0x1db177, _0x1d8d82) {
    return _0x1db177(_0x1d8d82);
  }, ejemM: function (_0xad5a47, _0x2be063) {
    return _0xad5a47 > _0x2be063;
  }, nwbhD: function (_0x28eaab, _0x29e485) {
    return _0x28eaab(_0x29e485);
  }, pUCEC: function (_0x404646, _0x1c84e3) {
    return _0x404646 === _0x1c84e3;
  }, vNLIk: _0x5653c0(768)}, _0xb4cca = _0x5ce599[_0x5653c0(871)](_0x3c7edd => _0x3c7edd[_0x5653c0(859)]), _0x4d5e02 = {}, _0x1e3d72 = _0xb4cca[_0x5653c0(871)](async _0x24b40d => {
    const _0x1b2a57 = _0x5653c0;
    try {
      const _0x416616 = await _0x1aebc4[_0x1b2a57(837)](fetch, _0x1b2a57(609) + _0x1b2a57(592) + _0x1b2a57(591) + _0x1b2a57(787) + _0x1b2a57(737) + _0x24b40d);
      if (_0x416616.ok) {
        const _0x296a04 = await _0x416616[_0x1b2a57(564)]();
        _0x296a04[_0x1b2a57(638)] && _0x1aebc4[_0x1b2a57(615)](_0x296a04[_0x1b2a57(605)][_0x1b2a57(557)], 0) && (_0x4d5e02[_0x24b40d] = _0x296a04[_0x1b2a57(605)][0][_0x1b2a57(500) + _0x1b2a57(505)][0]);
      }
    } catch (_0xe8f890) {
      console[_0x1b2a57(545)](_0x1b2a57(729) + _0x1b2a57(659) + _0x1b2a57(645) + _0x1b2a57(843) + _0x24b40d + ":", _0xe8f890);
    }
    try {
      const _0xc1f744 = await _0x1aebc4[_0x1b2a57(583)](fetch, _0x1b2a57(650) + _0x1b2a57(509) + _0x1b2a57(480) + _0x1b2a57(647) + _0x1b2a57(602) + _0x1b2a57(601) + _0x24b40d);
      if (_0xc1f744.ok) {
        const _0x3fc6a0 = await _0xc1f744[_0x1b2a57(564)]();
        _0x1aebc4[_0x1b2a57(734)](_0x3fc6a0[_0x1b2a57(542)], _0x1aebc4[_0x1b2a57(838)]) && _0x3fc6a0[_0x1b2a57(681)][_0x1b2a57(605)][_0x1b2a57(826)][_0x1b2a57(537)] && (_0x4d5e02[_0x24b40d] = _0x3fc6a0[_0x1b2a57(681)][_0x1b2a57(605)][_0x1b2a57(826)][_0x1b2a57(537)]);
      }
    } catch (_0x15178d) {
      console[_0x1b2a57(545)](_0x1b2a57(729) + _0x1b2a57(733) + _0x1b2a57(532) + _0x1b2a57(843) + _0x24b40d + ":", _0x15178d);
    }
  });
  return await Promise[_0x5653c0(584)](_0x1e3d72), _0x4d5e02;
}
function renderMatches(_0x551eb0) {
  const _0x334bcc = _0xeaeda9, _0x36faad = {ZYMXf: function (_0x5642b6, _0x1a7c7a) {
    return _0x5642b6 >= _0x1a7c7a;
  }, KVxtT: function (_0x1c3d74, _0x2b94be) {
    return _0x1c3d74 <= _0x2b94be;
  }, rAoLi: function (_0x45f819, _0x5c515b) {
    return _0x45f819 + _0x5c515b;
  }, GHoSC: function (_0x20a146, _0x10e559) {
    return _0x20a146 * _0x10e559;
  }, PvLJn: function (_0x4d2551, _0xa06bab) {
    return _0x4d2551 * _0xa06bab;
  }, fIAMM: function (_0x5d109a, _0x5660d2) {
    return _0x5d109a >= _0x5660d2;
  }, ltuQL: function (_0x401420, _0x2dba2c) {
    return _0x401420 <= _0x2dba2c;
  }, yIrcT: function (_0x396e0b, _0x3035f8) {
    return _0x396e0b + _0x3035f8;
  }, HDEPN: function (_0x2aebbb, _0x581ec8) {
    return _0x2aebbb * _0x581ec8;
  }, rSpqt: function (_0xeb2687, _0x5440d3) {
    return _0xeb2687 * _0x5440d3;
  }, KlBRi: function (_0x528ac1, _0x5208ff) {
    return _0x528ac1 * _0x5208ff;
  }, cLTMe: function (_0x2f1ce1, _0x118426) {
    return _0x2f1ce1 && _0x118426;
  }, KQcny: function (_0x1ced78, _0x3e50e8) {
    return _0x1ced78 * _0x3e50e8;
  }, qSxtX: _0x334bcc(792), vqkMF: _0x334bcc(815) + _0x334bcc(530), WQNGC: _0x334bcc(496), xWlAd: _0x334bcc(691) + "e", gDCdI: _0x334bcc(667), sXlWm: _0x334bcc(582) + "s", HLWHX: _0x334bcc(763), jjSiy: _0x334bcc(501), PmRdB: function (_0x5c04c3, _0x5c8418) {
    return _0x5c04c3(_0x5c8418);
  }, kWzpR: _0x334bcc(525) + _0x334bcc(816) + _0x334bcc(660) + _0x334bcc(700) + _0x334bcc(514) + _0x334bcc(806) + _0x334bcc(561) + _0x334bcc(642), GFDEk: _0x334bcc(608) + _0x334bcc(630)}, _0x44f7ca = document[_0x334bcc(866) + _0x334bcc(587)](_0x36faad[_0x334bcc(646)]);
  _0x44f7ca[_0x334bcc(524)] = "", _0x551eb0[_0x334bcc(884)]((_0xb8ca0a, _0x2cedd1) => {
    const _0x739cb0 = _0x334bcc, _0x469570 = new Date, _0x13722b = new Date(_0xb8ca0a[_0x739cb0(579)] + "T" + _0xb8ca0a[_0x739cb0(776)]), _0x46a900 = new Date(_0x2cedd1[_0x739cb0(579)] + "T" + _0x2cedd1[_0x739cb0(776)]), _0x47dde8 = _0x36faad[_0x739cb0(850)](_0x469570, _0x13722b) && _0x36faad[_0x739cb0(672)](_0x469570, new Date(_0x36faad[_0x739cb0(807)](_0x13722b[_0x739cb0(656)](), _0x36faad[_0x739cb0(702)](_0x36faad[_0x739cb0(702)](_0x36faad[_0x739cb0(731)](2, 60), 60), 1e3)))), _0x2a74df = _0x36faad[_0x739cb0(520)](_0x469570, _0x46a900) && _0x36faad[_0x739cb0(556)](_0x469570, new Date(_0x36faad[_0x739cb0(690)](_0x46a900[_0x739cb0(656)](), _0x36faad[_0x739cb0(717)](_0x36faad[_0x739cb0(663)](_0x36faad[_0x739cb0(744)](2, 60), 60), 1e3))));
    if (_0x36faad[_0x739cb0(689)](_0x47dde8, !_0x2a74df)) return -1;
    if (_0x36faad[_0x739cb0(689)](!_0x47dde8, _0x2a74df)) return 1;
    return 0;
  }), _0x551eb0[_0x334bcc(549)](_0x1b5585 => {
    const _0x15c852 = _0x334bcc, _0x96772 = _0x1b5585[_0x15c852(555)] || _0x1b5585[_0x15c852(747)] || _0x1b5585[_0x15c852(762)], _0x525251 = new Date, _0x3ffee6 = new Date(_0x1b5585[_0x15c852(579)] + "T" + _0x1b5585[_0x15c852(776)]), _0x4ab575 = _0x36faad[_0x15c852(850)](_0x525251, _0x3ffee6) && _0x36faad[_0x15c852(556)](_0x525251, new Date(_0x36faad[_0x15c852(807)](_0x3ffee6[_0x15c852(656)](), _0x36faad[_0x15c852(731)](_0x36faad[_0x15c852(717)](_0x36faad[_0x15c852(546)](2, 60), 60), 1e3)))), _0x46aa7e = document[_0x15c852(713) + _0x15c852(877)](_0x36faad[_0x15c852(511)]);
    _0x46aa7e[_0x15c852(721)] = _0x36faad[_0x15c852(698)], _0x46aa7e[_0x15c852(539) + "te"](_0x36faad[_0x15c852(841)], _0x1b5585[_0x15c852(579)][_0x15c852(854) + "e"]()), _0x46aa7e[_0x15c852(539) + "te"](_0x36faad[_0x15c852(862)], _0x1b5585[_0x15c852(704)][_0x15c852(854) + "e"]()), _0x46aa7e[_0x15c852(539) + "te"](_0x36faad[_0x15c852(512)], _0x1b5585[_0x15c852(625)][_0x15c852(854) + "e"]()), _0x46aa7e[_0x15c852(539) + "te"](_0x36faad[_0x15c852(651)], _0x4ab575 ? _0x36faad[_0x15c852(526)] : _0x36faad[_0x15c852(611)]);
    const _0x430369 = !_0x4ab575 ? _0x15c852(525) + _0x15c852(577) + _0x15c852(701) + _0x15c852(752) + _0x1b5585[_0x15c852(579)] + "T" + _0x1b5585[_0x15c852(776)] + (_0x15c852(569) + _0x15c852(809) + _0x15c852(715)) : "";
    _0x46aa7e[_0x15c852(524)] = _0x15c852(497) + _0x15c852(808) + _0x15c852(666) + _0x15c852(876) + _0x15c852(780) + _0x15c852(808) + _0x15c852(808) + _0x15c852(525) + _0x15c852(849) + _0x15c852(660) + _0x15c852(765) + _0x15c852(653) + _0x15c852(633) + _0x36faad[_0x15c852(697)](formatDate, _0x1b5585[_0x15c852(579)]) + (_0x15c852(687) + _0x15c852(808) + _0x15c852(808) + _0x15c852(669) + _0x15c852(846) + _0x15c852(534) + _0x15c852(570) + _0x15c852(766) + " ") + _0x1b5585[_0x15c852(625)] + (_0x15c852(687) + _0x15c852(808) + _0x15c852(808) + _0x15c852(669) + _0x15c852(760) + _0x15c852(802) + _0x15c852(541) + _0x15c852(827) + _0x15c852(502)) + _0x1b5585[_0x15c852(776)] + _0x15c852(749) + _0x1b5585[_0x15c852(704)] + (_0x15c852(687) + _0x15c852(808) + _0x15c852(808) + "  ") + (_0x4ab575 ? _0x36faad[_0x15c852(732)] : _0x430369) + (_0x15c852(497) + _0x15c852(808) + _0x15c852(758) + _0x15c852(808) + _0x15c852(872) + _0x15c852(753) + _0x15c852(812) + _0x15c852(772) + _0x15c852(507) + _0x15c852(554)) + _0x1b5585[_0x15c852(859)] + _0x15c852(716) + _0x1b5585[_0x15c852(555)] + _0x15c852(716) + _0x1b5585[_0x15c852(747)] + _0x15c852(716) + _0x1b5585[_0x15c852(762)] + _0x15c852(716) + _0x1b5585[_0x15c852(625)] + (_0x15c852(506) + _0x15c852(808) + _0x15c852(738) + _0x15c852(660) + _0x15c852(722) + _0x15c852(613) + _0x15c852(654) + _0x15c852(808) + _0x15c852(808) + _0x15c852(735) + _0x15c852(808) + _0x15c852(724)), _0x44f7ca[_0x15c852(805) + "d"](_0x46aa7e), _0x4ab575 && !sentNotifications[_0x15c852(599)](_0x1b5585[_0x15c852(859)]) && (_0x36faad[_0x15c852(697)](sendTelegramNotification, _0x1b5585), sentNotifications[_0x15c852(517)](_0x1b5585[_0x15c852(859)]));
  });
}
function updateCountdown() {
  const _0x30f975 = _0xeaeda9, _0x517567 = {qkvsX: _0x30f975(588), BselX: function (_0x30e76c, _0x1c5aec) {
    return _0x30e76c - _0x1c5aec;
  }, sxSoW: function (_0x2046b4, _0x22e996) {
    return _0x2046b4 <= _0x22e996;
  }, xtDwa: function (_0x10cc43, _0x251016) {
    return _0x10cc43 / _0x251016;
  }, oxFju: function (_0x18520d, _0x1fd8f6) {
    return _0x18520d * _0x1fd8f6;
  }, DHdyA: function (_0x2408ab, _0x142d46) {
    return _0x2408ab * _0x142d46;
  }, wDWoN: function (_0x4a6c1e, _0x2c306c) {
    return _0x4a6c1e / _0x2c306c;
  }, uXnJo: function (_0x5bd22c, _0x2f4e12) {
    return _0x5bd22c % _0x2f4e12;
  }, nQKwn: function (_0x23c980, _0x15f19a) {
    return _0x23c980 * _0x15f19a;
  }, KAvWK: function (_0x4fe6d5, _0x1c9384) {
    return _0x4fe6d5 / _0x1c9384;
  }, OSzpc: function (_0x197d53, _0x108b81) {
    return _0x197d53 % _0x108b81;
  }, bdgBB: _0x30f975(757) + "r]"}, _0x180df4 = document[_0x30f975(518) + _0x30f975(818)](_0x517567[_0x30f975(855)]), _0x22fd4a = new Date;
  _0x180df4[_0x30f975(549)](_0x26a16c => {
    const _0x4fb3d8 = _0x30f975, _0x2d80e0 = new Date(_0x26a16c[_0x4fb3d8(692) + "te"](_0x517567[_0x4fb3d8(483)])), _0x16f830 = _0x517567[_0x4fb3d8(489)](_0x2d80e0, _0x22fd4a);
    if (_0x517567[_0x4fb3d8(634)](_0x16f830, 0)) _0x26a16c[_0x4fb3d8(504) + "t"] = ""; else {
      const _0x440770 = Math[_0x4fb3d8(793)](_0x517567[_0x4fb3d8(580)](_0x16f830, _0x517567[_0x4fb3d8(824)](_0x517567[_0x4fb3d8(718)](1e3, 60), 60))), _0x54ad3c = Math[_0x4fb3d8(793)](_0x517567[_0x4fb3d8(878)](_0x517567[_0x4fb3d8(789)](_0x16f830, _0x517567[_0x4fb3d8(824)](_0x517567[_0x4fb3d8(879)](1e3, 60), 60)), _0x517567[_0x4fb3d8(879)](1e3, 60))), _0x19a4c2 = Math[_0x4fb3d8(793)](_0x517567[_0x4fb3d8(842)](_0x517567[_0x4fb3d8(883)](_0x16f830, _0x517567[_0x4fb3d8(718)](1e3, 60)), 1e3));
      _0x26a16c[_0x4fb3d8(504) + "t"] = _0x440770 + "h " + _0x54ad3c + "m " + _0x19a4c2 + "s";
    }
  });
}
function playMatch(_0x548118, _0xc04e01, _0x5f38ef, _0x372b12, _0x576056) {
  const _0x35933f = _0xeaeda9, _0x2595dd = {tZPOi: _0x35933f(488) + _0x35933f(578), WnzuE: _0x35933f(729) + _0x35933f(523) + _0x35933f(840), ZKyEE: function (_0x1e5d20, _0x5954dd) {
    return _0x1e5d20 || _0x5954dd;
  }, rKPvL: _0x35933f(503) + _0x35933f(630), jfDCj: function (_0x225adb, _0x11112b) {
    return _0x225adb(_0x11112b);
  }, FTpGd: _0x35933f(499), EaFfc: _0x35933f(562), PsjaP: _0x35933f(821), LHNxk: _0x35933f(683), IHGgA: _0x35933f(833), WNiCB: function (_0x2e330e, _0x360c00) {
    return _0x2e330e(_0x360c00);
  }};
  let _0x488a18 = _0x2595dd[_0x35933f(494)](_0xc04e01, _0x5f38ef) || _0x372b12;
  _0x2595dd[_0x35933f(637)](fetch, _0xc04e01)[_0x35933f(521)](_0x27195c => {
    const _0x23383a = _0x35933f;
    if (!_0x27195c.ok) throw new Error(_0x2595dd[_0x23383a(610)]);
    return _0x27195c;
  })[_0x35933f(847)](_0x46ccd9 => {
    const _0x51af96 = _0x35933f;
    console[_0x51af96(545)](_0x2595dd[_0x51af96(817)], _0x46ccd9), _0x488a18 = _0x2595dd[_0x51af96(494)](_0x5f38ef, _0x372b12);
  })[_0x35933f(662)](() => {
    const _0x10e968 = _0x35933f;
    _0x372b12 ? document[_0x10e968(866) + _0x10e968(587)](_0x2595dd[_0x10e968(594)])[_0x10e968(524)] = _0x10e968(544) + _0x10e968(665) + _0x372b12 + (_0x10e968(810) + _0x10e968(603) + _0x10e968(774) + _0x10e968(606) + _0x10e968(536) + _0x10e968(740) + _0x10e968(856)) : _0x2595dd[_0x10e968(572)](jwplayer, _0x2595dd[_0x10e968(594)])[_0x10e968(529)]({file: _0x488a18, width: _0x2595dd[_0x10e968(678)], aspectratio: _0x2595dd[_0x10e968(482)], image: " "}), document[_0x10e968(866) + _0x10e968(587)](_0x2595dd[_0x10e968(594)])[_0x10e968(723) + _0x10e968(671)]({behavior: _0x2595dd[_0x10e968(487)], block: _0x2595dd[_0x10e968(682)]}), document[_0x10e968(866) + _0x10e968(587)](_0x2595dd[_0x10e968(510)])[_0x10e968(504) + "t"] = _0x576056, _0x2595dd[_0x10e968(637)](loadChannels, _0x548118);
  });
}
function _0x3bb4(_0x52661e, _0x8cccd9) {
  const _0x4c6ac8 = _0x371b();
  return _0x3bb4 = function (_0x314684, _0x4ca854) {
    _0x314684 = _0x314684 - 476;
    let _0x580aee = _0x4c6ac8[_0x314684];
    return _0x580aee;
  }, _0x3bb4(_0x52661e, _0x8cccd9);
}
async function loadChannels(_0x4a9932) {
  const _0x4637ae = _0xeaeda9, _0x3f8b3c = {CHOwS: function (_0x3e26bd, _0x8ff983) {
    return _0x3e26bd(_0x8ff983);
  }, UiXKS: _0x4637ae(707) + _0x4637ae(845) + _0x4637ae(751), IfgTO: function (_0x2cc771, _0x2293e2) {
    return _0x2cc771 > _0x2293e2;
  }, ALluy: function (_0x29490, _0x4c2dca) {
    return _0x29490(_0x4c2dca);
  }, adpzz: _0x4637ae(632) + "st", KTyjw: _0x4637ae(552), AsuBg: _0x4637ae(820), AoPEG: _0x4637ae(729) + _0x4637ae(668) + _0x4637ae(873)};
  try {
    const _0x2f8c40 = await _0x3f8b3c[_0x4637ae(477)](fetch, _0x4637ae(609) + _0x4637ae(592) + _0x4637ae(591) + _0x4637ae(787) + _0x4637ae(737) + _0x4a9932);
    if (!_0x2f8c40.ok) throw new Error(_0x3f8b3c[_0x4637ae(875)]);
    const _0x10925e = await _0x2f8c40[_0x4637ae(564)]();
    _0x10925e[_0x4637ae(638)] && _0x3f8b3c[_0x4637ae(571)](_0x10925e[_0x4637ae(605)][_0x4637ae(557)], 0) ? (_0x3f8b3c[_0x4637ae(781)](renderChannels, _0x10925e[_0x4637ae(605)]), _0x3f8b3c[_0x4637ae(477)](renderServerMenu, _0x10925e[_0x4637ae(605)])) : (document[_0x4637ae(866) + _0x4637ae(587)](_0x3f8b3c[_0x4637ae(797)])[_0x4637ae(516)][_0x4637ae(626)] = _0x3f8b3c[_0x4637ae(680)], document[_0x4637ae(866) + _0x4637ae(587)](_0x3f8b3c[_0x4637ae(531)])[_0x4637ae(516)][_0x4637ae(626)] = _0x3f8b3c[_0x4637ae(680)]);
  } catch (_0x405dd5) {
    console[_0x4637ae(545)](_0x3f8b3c[_0x4637ae(705)], _0x405dd5), document[_0x4637ae(866) + _0x4637ae(587)](_0x3f8b3c[_0x4637ae(797)])[_0x4637ae(516)][_0x4637ae(626)] = _0x3f8b3c[_0x4637ae(680)], document[_0x4637ae(866) + _0x4637ae(587)](_0x3f8b3c[_0x4637ae(531)])[_0x4637ae(516)][_0x4637ae(626)] = _0x3f8b3c[_0x4637ae(680)];
  }
}
function renderChannels(_0x433c94) {
  const _0x1e0231 = _0xeaeda9, _0x2d03f8 = {dbZFo: _0x1e0231(658) + "ms", fcAxi: _0x1e0231(632) + "st", reVet: _0x1e0231(628)}, _0xb420e = document[_0x1e0231(866) + _0x1e0231(587)](_0x2d03f8[_0x1e0231(676)]);
  _0xb420e[_0x1e0231(524)] = "", _0x433c94[_0x1e0231(549)](_0x970ce9 => {
    const _0x4aa4e1 = _0x1e0231, _0x45ca19 = document[_0x4aa4e1(713) + _0x4aa4e1(877)]("li");
    _0x45ca19[_0x4aa4e1(524)] = _0x4aa4e1(497) + _0x4aa4e1(808) + _0x4aa4e1(575) + _0x4aa4e1(627) + _0x4aa4e1(711) + "'" + _0x970ce9[_0x4aa4e1(500) + _0x4aa4e1(505)][0] + _0x4aa4e1(716) + _0x970ce9[_0x4aa4e1(784)] + _0x4aa4e1(574) + _0x970ce9[_0x4aa4e1(712)] + (_0x4aa4e1(735) + _0x4aa4e1(808) + _0x4aa4e1(724)), _0xb420e[_0x4aa4e1(805) + "d"](_0x45ca19);
  }), document[_0x1e0231(866) + _0x1e0231(587)](_0x2d03f8[_0x1e0231(677)])[_0x1e0231(516)][_0x1e0231(626)] = _0x2d03f8[_0x1e0231(674)];
}
function playChannel(_0x9893f6, _0x456bf7) {
  const _0x123e6b = _0xeaeda9, _0xf613bb = {FaXwR: _0x123e6b(503) + _0x123e6b(630), QpvHP: function (_0x200cb0, _0x2b5183) {
    return _0x200cb0(_0x2b5183);
  }, teNpY: _0x123e6b(499), HnyvH: _0x123e6b(562), GmRcm: _0x123e6b(821), GpakZ: _0x123e6b(683)};
  _0x456bf7 ? document[_0x123e6b(866) + _0x123e6b(587)](_0xf613bb[_0x123e6b(706)])[_0x123e6b(524)] = _0x123e6b(544) + _0x123e6b(665) + _0x456bf7 + (_0x123e6b(810) + _0x123e6b(603) + _0x123e6b(774) + _0x123e6b(606) + _0x123e6b(536) + _0x123e6b(740) + _0x123e6b(856)) : _0xf613bb[_0x123e6b(858)](jwplayer, _0xf613bb[_0x123e6b(706)])[_0x123e6b(529)]({file: _0x9893f6, width: _0xf613bb[_0x123e6b(498)], aspectratio: _0xf613bb[_0x123e6b(786)], image: " "}), document[_0x123e6b(866) + _0x123e6b(587)](_0xf613bb[_0x123e6b(706)])[_0x123e6b(723) + _0x123e6b(671)]({behavior: _0xf613bb[_0x123e6b(543)], block: _0xf613bb[_0x123e6b(604)]});
}
function renderServerMenu(_0x363de4) {
  const _0x19b142 = _0xeaeda9, _0x97bb73 = {pyPxH: _0x19b142(801), FlTwv: _0x19b142(820), xXqiH: _0x19b142(628)}, _0x52c065 = document[_0x19b142(866) + _0x19b142(587)](_0x97bb73[_0x19b142(640)]);
  _0x52c065[_0x19b142(524)] = "";
  let _0x51e735 = 1;
  _0x363de4[_0x19b142(549)]((_0x1f9222, _0x875a9) => {
    const _0x29a1a9 = _0x19b142;
    _0x1f9222[_0x29a1a9(500) + _0x29a1a9(505)][_0x29a1a9(549)]((_0x3e969c, _0x619bae) => {
      const _0x1158a3 = _0x29a1a9, _0x4e1e94 = document[_0x1158a3(713) + _0x1158a3(877)](_0x97bb73[_0x1158a3(745)]);
      _0x4e1e94[_0x1158a3(524)] = _0x1158a3(844) + _0x1158a3(495) + _0x1158a3(693) + _0x1158a3(485) + _0x51e735, _0x4e1e94[_0x1158a3(478)] = () => playChannel(_0x3e969c, _0x1f9222[_0x1158a3(784)]), _0x52c065[_0x1158a3(805) + "d"](_0x4e1e94), _0x51e735++;
    });
  }), document[_0x19b142(866) + _0x19b142(587)](_0x97bb73[_0x19b142(640)])[_0x19b142(516)][_0x19b142(626)] = _0x97bb73[_0x19b142(822)];
}
function populateFilters(_0x342936) {
  const _0x1e38d5 = _0xeaeda9, _0x5953e1 = {GxRIS: _0x1e38d5(754), gkYXW: function (_0x54a1b7, _0x44b3aa) {
    return _0x54a1b7(_0x44b3aa);
  }, dDSIT: _0x1e38d5(686), FaeWm: _0x1e38d5(581) + "er", dzukw: _0x1e38d5(719) + _0x1e38d5(519) + _0x1e38d5(832) + _0x1e38d5(720), lucTc: _0x1e38d5(719) + _0x1e38d5(519) + _0x1e38d5(835) + _0x1e38d5(528) + "n>"}, _0x3f0938 = document[_0x1e38d5(866) + _0x1e38d5(587)](_0x5953e1[_0x1e38d5(860)]), _0x27671e = document[_0x1e38d5(866) + _0x1e38d5(587)](_0x5953e1[_0x1e38d5(852)]);
  _0x3f0938[_0x1e38d5(524)] = _0x5953e1[_0x1e38d5(550)], _0x27671e[_0x1e38d5(524)] = _0x5953e1[_0x1e38d5(709)];
  const _0x3012e3 = [...new Set(_0x342936[_0x1e38d5(871)](_0x521adf => _0x521adf[_0x1e38d5(579)]))], _0x5bc4fb = [...new Set(_0x342936[_0x1e38d5(871)](_0x3f75fd => _0x3f75fd[_0x1e38d5(704)]))];
  _0x3012e3[_0x1e38d5(549)](_0x426248 => {
    const _0x3b6a1c = _0x1e38d5, _0xab5c0 = document[_0x3b6a1c(713) + _0x3b6a1c(877)](_0x5953e1[_0x3b6a1c(788)]);
    _0xab5c0[_0x3b6a1c(595)] = _0x426248[_0x3b6a1c(854) + "e"](), _0xab5c0[_0x3b6a1c(504) + "t"] = _0x5953e1[_0x3b6a1c(782)](formatDate, _0x426248), _0x3f0938[_0x3b6a1c(805) + "d"](_0xab5c0);
  }), _0x5bc4fb[_0x1e38d5(549)](_0x1c85e9 => {
    const _0x559bff = _0x1e38d5, _0x1b0055 = document[_0x559bff(713) + _0x559bff(877)](_0x5953e1[_0x559bff(788)]);
    _0x1b0055[_0x559bff(595)] = _0x1c85e9[_0x559bff(854) + "e"](), _0x1b0055[_0x559bff(504) + "t"] = _0x1c85e9, _0x27671e[_0x559bff(805) + "d"](_0x1b0055);
  });
}
function filterMatches() {
  const _0x254fdd = _0xeaeda9, _0x845414 = {RJsZS: _0x254fdd(496), gGVHy: _0x254fdd(691) + "e", IgzpK: _0x254fdd(667), BiFyS: function (_0x4ded08, _0x2c2cac) {
    return _0x4ded08 === _0x2c2cac;
  }, pIUUC: function (_0x54b455, _0x18203a) {
    return _0x54b455 && _0x18203a;
  }, MJOrc: _0x254fdd(582) + "s", wGKrb: function (_0x1689a1, _0x680cb3) {
    return _0x1689a1 === _0x680cb3;
  }, JCnov: _0x254fdd(763), Zbrmy: function (_0x74cd4, _0x46b3bf) {
    return _0x74cd4 !== _0x46b3bf;
  }, wiDBt: function (_0xc5c937, _0x530c8a) {
    return _0xc5c937 !== _0x530c8a;
  }, AkZrb: function (_0x56ecb0, _0x4810f7) {
    return _0x56ecb0 === _0x4810f7;
  }, rqnHJ: _0x254fdd(868), OiQwM: _0x254fdd(686), putNb: _0x254fdd(581) + "er", rPvNz: _0x254fdd(508), PJiuN: _0x254fdd(535) + _0x254fdd(567), ojOYN: _0x254fdd(779), HgShF: _0x254fdd(593)}, _0x32b076 = document[_0x254fdd(866) + _0x254fdd(587)](_0x845414[_0x254fdd(621)])[_0x254fdd(595)][_0x254fdd(854) + "e"](), _0x9730e1 = document[_0x254fdd(866) + _0x254fdd(587)](_0x845414[_0x254fdd(540)])[_0x254fdd(595)][_0x254fdd(854) + "e"](), _0x5574e6 = document[_0x254fdd(866) + _0x254fdd(587)](_0x845414[_0x254fdd(675)])[_0x254fdd(595)][_0x254fdd(854) + "e"](), _0x3f6b38 = document[_0x254fdd(518) + _0x254fdd(818)](_0x845414[_0x254fdd(648)]);
  let _0x225c99 = 0;
  const _0x3ac07b = Array[_0x254fdd(486)](_0x3f6b38)[_0x254fdd(800)](_0x5b002b => {
    const _0x545e7d = _0x254fdd, _0x20fb0e = _0x5b002b[_0x545e7d(692) + "te"](_0x845414[_0x545e7d(636)]), _0x26ce82 = _0x5b002b[_0x545e7d(692) + "te"](_0x845414[_0x545e7d(814)]), _0x540186 = _0x5b002b[_0x545e7d(692) + "te"](_0x845414[_0x545e7d(547)]), _0x22d362 = !_0x32b076 || _0x845414[_0x545e7d(836)](_0x20fb0e, _0x32b076), _0x291ed4 = !_0x9730e1 || _0x845414[_0x545e7d(836)](_0x26ce82, _0x9730e1), _0xc3e2a5 = !_0x5574e6 || _0x540186[_0x545e7d(490)](_0x5574e6);
    return _0x845414[_0x545e7d(586)](_0x22d362, _0x291ed4) && _0xc3e2a5;
  })[_0x254fdd(884)]((_0x3f2ed9, _0x43b869) => {
    const _0x4bc8e3 = _0x254fdd, _0x5009f5 = _0x3f2ed9[_0x4bc8e3(692) + "te"](_0x845414[_0x4bc8e3(790)]), _0x24a3c5 = _0x43b869[_0x4bc8e3(692) + "te"](_0x845414[_0x4bc8e3(790)]);
    if (_0x845414[_0x4bc8e3(725)](_0x5009f5, _0x845414[_0x4bc8e3(590)]) && _0x845414[_0x4bc8e3(813)](_0x24a3c5, _0x845414[_0x4bc8e3(590)])) return -1;
    if (_0x845414[_0x4bc8e3(828)](_0x5009f5, _0x845414[_0x4bc8e3(590)]) && _0x845414[_0x4bc8e3(559)](_0x24a3c5, _0x845414[_0x4bc8e3(590)])) return 1;
    return 0;
  });
  _0x3f6b38[_0x254fdd(549)](_0x466ad2 => _0x466ad2[_0x254fdd(516)][_0x254fdd(626)] = _0x254fdd(552)), _0x3ac07b[_0x254fdd(549)](_0x267d0d => {
    const _0x12b9a5 = _0x254fdd;
    _0x267d0d[_0x12b9a5(516)][_0x12b9a5(626)] = _0x845414[_0x12b9a5(825)], _0x225c99++;
  });
  const _0x25e2db = document[_0x254fdd(866) + _0x254fdd(587)](_0x845414[_0x254fdd(864)]);
  _0x845414[_0x254fdd(725)](_0x225c99, 0) ? _0x25e2db[_0x254fdd(869)][_0x254fdd(517)](_0x845414[_0x254fdd(795)]) : _0x25e2db[_0x254fdd(869)][_0x254fdd(620)](_0x845414[_0x254fdd(795)]);
}
function resetFilters() {
  const _0x51f4c6 = _0xeaeda9, _0x216562 = {ZNUba: _0x51f4c6(686), KVEhU: _0x51f4c6(581) + "er", GSnWZ: _0x51f4c6(508), AHGwR: function (_0x491b12) {
    return _0x491b12();
  }};
  document[_0x51f4c6(866) + _0x51f4c6(587)](_0x216562[_0x51f4c6(695)])[_0x51f4c6(595)] = "", document[_0x51f4c6(866) + _0x51f4c6(587)](_0x216562[_0x51f4c6(513)])[_0x51f4c6(595)] = "", document[_0x51f4c6(866) + _0x51f4c6(587)](_0x216562[_0x51f4c6(619)])[_0x51f4c6(595)] = "", _0x216562[_0x51f4c6(527)](filterMatches);
}
function debounce(_0x5dbff2, _0x3d2a3d) {
  const _0xcd3baa = {ZPtsS: function (_0x1d3ce6, _0x37b066) {
    return _0x1d3ce6(_0x37b066);
  }, Tvctv: function (_0x2186d3, _0x3e87ab, _0x5f13c9) {
    return _0x2186d3(_0x3e87ab, _0x5f13c9);
  }};
  let _0x4244a2;
  return function (..._0x2a35cf) {
    const _0x476481 = _0x3bb4;
    _0xcd3baa[_0x476481(771)](clearTimeout, _0x4244a2), _0x4244a2 = _0xcd3baa[_0x476481(568)](setTimeout, () => _0x5dbff2[_0x476481(881)](this, _0x2a35cf), _0x3d2a3d);
  };
}
function _0x371b() {
  const _0x508b86 = ["May", "finally", "rSpqt", "jKzDI", 'c="', " <div clas", "data-teams", "load chann", "  <span cl", "send notif", "View", "KVxtT", "October", "reVet", "rPvNz", "dbZFo", "fcAxi", "FTpGd", "GET", "KTyjw", "data", "LHNxk", "start", "gXOhd", "WqHwq", "dateFilter", "</span>\n  ", "June", "cLTMe", "yIrcT", "data-leagu", "getAttribu", 'ver"></i> ', "YDOAe", "ZNUba", "\nTime: ", "PmRdB", "vqkMF", "January", "as fa-broa", 'wn" data-t', "GHoSC", "UCHCD", "league", "AoPEG", "FaXwR", "Network re", "la.github.", "lucTc", "September", "ayChannel(", "name", "createElem", "body", "span>", "', '", "HDEPN", "DHdyA", "<option va", "e</option>", "className", "as fa-play", "scrollInto", "      ", "wGKrb", "ing notifi", "cvxos", "jzkIU", "Failed to ", "ge?chat_id", "PvLJn", "kWzpR", "fetch vide", "pUCEC", "</button>\n", "zvc2_I5WDk", "atchId=", "         <", "DOMContent", 'ing="no"><', "PBdSq", "ejSEx", "loader", "KlBRi", "pyPxH", "pLylm", "m3u8Url", "thub.io/bo", " | ", "April", " not ok", 'imer="', "utton clas", "option", "7598004626", "yRAre", "[data-time", " </div>\n  ", "CECWM", 'ass="detai', "July", "iframeURL", "live", "23795c", "as fa-cale", 'sers"></i>', "AbwoM", "0000", "frxXu", "vNhCE", "ZPtsS", 'utton" onc', "ement", 't="400" fr', "14189rMwjwe", "time", "August", "UXHgB", "noMatches", 'nfo">\n    ', "ALluy", "gkYXW", "10964XsDtRW", "iframe_url", " 🚨\nDate: ", "HnyvH", "channels?m", "GxRIS", "uXnJo", "MJOrc", "3153736qJMasH", "div", "floor", "\nLink: htt", "HgShF", "pButton", "adpzz", "Notificati", "hubHY", "filter", "button", 'ls"><i cla', "logspot.co", "i.telegram", "appendChil", 'r"></i> Li', "rAoLi", "          ", " Soon...</", '" width="1', "wmwpF", 's="watch-b', "Zbrmy", "gGVHy", "schedule-c", 's="live"><', "WnzuE", "torAll", "EUnWN", "serverMenu", "smooth", "xXqiH", "oTYfM", "oxFju", "rqnHJ", "match", '-clock"></', "wiDBt", "iZ76AHaEWo", "FXPaX", "portlive.b", "ter by Dat", "matchTitle", "eUfwA", "ter by Lea", "BiFyS", "SFdTt", "vNLIk", "es:", "URL:", "WQNGC", "KAvWK", "atchId ", '<i class="', "sponse was", 'ass="teams', "catch", "HOKdj", 's="date"><', "ZYMXf", "ccessfully", "FaeWm", "UMYBI", "toLowerCas", "bdgBB", "/iframe>", "8841503MNcuGl", "QpvHP", "videoId", "dDSIT", "32WVfObm", "xWlAd", "3TuqAsm", "ojOYN", "February", "getElement", "FmExF", "flex", "classList", "1391979650", "map", "        <b", "els:", "https://wa", "UiXKS", 's="match-i', "ent", "wDWoN", "nQKwn", "cation:", "apply", "874089ynEcvS", "OSzpc", "sort", "JswYn", "CHOwS", "onclick", "🚨 Live Now", "/business/", "rtakita.gi", "EaFfc", "qkvsX", "getDate", "Server ", "from", "PsjaP", "Live URL f", "BselX", "includes", "JrdRC", "FKODF", "input", "ZKyEE", "fas fa-ser", "data-date", "\n         ", "teNpY", "100%", "streaming_", "upcoming", "i> ", "jwplayerCo", "textConten", "urls", "')\">\n     ", 'lick="play', "teamSearch", "3zb296.app", "IHGgA", "qSxtX", "gDCdI", "KVEhU", "dcast-towe", "scrollTop", "style", "add", "querySelec", 'lue="">Fil', "fIAMM", "then", "jWuxn", "load live ", "innerHTML", "<span clas", "HLWHX", "AHGwR", "gue</optio", "setup", "ard", "AsuBg", "oUrl for m", "stener", '"><i class', ".schedule-", '"0" scroll', "videoUrl", "xyUFz", "setAttribu", "putNb", 'ss="fas fa', "code", "GmRcm", "<iframe sr", "error", "KQcny", "IgzpK", "\nLeague: ", "forEach", "dzukw", "Loaded", "none", "iELwp", "Match('", "liveUrl", "ltuQL", "length", "996cjHgfp", "AkZrb", "Error send", "ve Now</sp", "16:9", ":AAGG4SAfi", "json", "qRjgR", "load match", "card", "Tvctv", '">Starting', '="fas fa-u', "IfgTO", "jfDCj", "rflYX", "')\">", " <button o", "19015lIsirs", 's="countdo', "ailed", "date", "xtDwa", "leagueFilt", "data-statu", "nwbhD", "all", "November", "pIUUC", "ById", "data-timer", "/sendMessa", "JCnov", "/v1/match/", "i.90min.to", "show", "rKPvL", "value", "ps://zonas", "bGfxh", "onscroll", "has", "&text=", "chId=", "h_info?mat", '00%" heigh', "GpakZ", "result", "ameborder=", "oGZyj", "scheduleCo", "https://ap", "tZPOi", "jjSiy", "scrollToTo", '-circle"><', "40RxKNov", "ejemM", "addEventLi", "1209610RXZVCt", "chzRs", "GSnWZ", "remove", "OiQwM", "GKSJm", "December", "documentEl", "teams", "display", 'nclick="pl', "block", "change", "ntainer", "ication:", "channelsLi", "</i> ", "sxSoW", "HrXsL", "RJsZS", "WNiCB", "status", "log", "FlTwv", "on sent su", "an>", "getMonth", "March", " URL for m", "GFDEk", "match/matc", "PJiuN", "TkdRS", "https://83", "sXlWm", "getFullYea", 'ndar-alt">', "/i> Watch\n", "io/coba.js", "getTime", ".org/bot", "channelIte", "fetch live", 'i class="f'];
  _0x371b = function () {
    return _0x508b86;
  };
  return _0x371b();
}
document[_0xeaeda9(866) + _0xeaeda9(587)](_0xeaeda9(508))[_0xeaeda9(616) + _0xeaeda9(533)](_0xeaeda9(493), debounce(filterMatches, 300)), document[_0xeaeda9(866) + _0xeaeda9(587)](_0xeaeda9(686))[_0xeaeda9(616) + _0xeaeda9(533)](_0xeaeda9(629), filterMatches), document[_0xeaeda9(866) + _0xeaeda9(587)](_0xeaeda9(581) + "er")[_0xeaeda9(616) + _0xeaeda9(533)](_0xeaeda9(629), filterMatches), document[_0xeaeda9(616) + _0xeaeda9(533)](_0xeaeda9(739) + _0xeaeda9(551), loadMatches), window[_0xeaeda9(598)] = function () {
  const _0xde4f7c = _0xeaeda9, _0x215c4 = {YDOAe: function (_0x3b3e1c) {
    return _0x3b3e1c();
  }};
  _0x215c4[_0xde4f7c(694)](scrollFunction);
};
function scrollFunction() {
  const _0x7d5bce = _0xeaeda9, _0x2468f0 = {jWuxn: function (_0x433b92, _0x320ba4) {
    return _0x433b92 > _0x320ba4;
  }, UCHCD: function (_0x265f78, _0x14c689) {
    return _0x265f78 > _0x14c689;
  }, HrXsL: _0x7d5bce(612) + _0x7d5bce(796), JrdRC: _0x7d5bce(628), JswYn: _0x7d5bce(552)};
  _0x2468f0[_0x7d5bce(522)](document[_0x7d5bce(714)][_0x7d5bce(515)], 20) || _0x2468f0[_0x7d5bce(703)](document[_0x7d5bce(624) + _0x7d5bce(773)][_0x7d5bce(515)], 20) ? document[_0x7d5bce(866) + _0x7d5bce(587)](_0x2468f0[_0x7d5bce(635)])[_0x7d5bce(516)][_0x7d5bce(626)] = _0x2468f0[_0x7d5bce(491)] : document[_0x7d5bce(866) + _0x7d5bce(587)](_0x2468f0[_0x7d5bce(635)])[_0x7d5bce(516)][_0x7d5bce(626)] = _0x2468f0[_0x7d5bce(476)];
}
function scrollToTop() {
  const _0x3a7e43 = _0xeaeda9;
  document[_0x3a7e43(714)][_0x3a7e43(515)] = 0, document[_0x3a7e43(624) + _0x3a7e43(773)][_0x3a7e43(515)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x15c0e) {
  const _0x17b111 = _0xeaeda9, _0x2348e6 = {TkdRS: _0x17b111(798) + _0x17b111(641) + _0x17b111(851), GKSJm: _0x17b111(729) + _0x17b111(670) + _0x17b111(631), jKzDI: _0x17b111(560) + _0x17b111(726) + _0x17b111(880), PBdSq: function (_0x285cc9, _0x3edd53) {
    return _0x285cc9(_0x3edd53);
  }, cvxos: function (_0xe79560, _0x3ca50a) {
    return _0xe79560(_0x3ca50a);
  }, jzkIU: function (_0x516594, _0x22f5d2, _0x2275de) {
    return _0x516594(_0x22f5d2, _0x2275de);
  }, gXOhd: _0x17b111(679)}, _0x1e70fb = _0x17b111(479) + ": " + _0x15c0e[_0x17b111(625)] + _0x17b111(785) + _0x2348e6[_0x17b111(741)](formatDate, _0x15c0e[_0x17b111(579)]) + _0x17b111(696) + _0x15c0e[_0x17b111(776)] + _0x17b111(548) + _0x15c0e[_0x17b111(704)] + (_0x17b111(794) + _0x17b111(596) + _0x17b111(831) + _0x17b111(803) + "m/"), _0x189114 = _0x17b111(609) + _0x17b111(804) + _0x17b111(657) + telegramBotToken + (_0x17b111(589) + _0x17b111(730) + "=") + telegramChatId + _0x17b111(600) + _0x2348e6[_0x17b111(727)](encodeURIComponent, _0x1e70fb);
  _0x2348e6[_0x17b111(728)](fetch, _0x189114, {method: _0x2348e6[_0x17b111(684)]})[_0x17b111(521)](_0x51e227 => _0x51e227[_0x17b111(564)]())[_0x17b111(521)](_0x2d8348 => {
    const _0xe96c2d = _0x17b111;
    _0x2d8348.ok ? console[_0xe96c2d(639)](_0x2348e6[_0xe96c2d(649)]) : console[_0xe96c2d(545)](_0x2348e6[_0xe96c2d(622)], _0x2d8348);
  })[_0x17b111(847)](_0x5cbcb9 => {
    const _0x251fe2 = _0x17b111;
    console[_0x251fe2(545)](_0x2348e6[_0x251fe2(664)], _0x5cbcb9);
  });
}
