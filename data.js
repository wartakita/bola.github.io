const _0x4a80ec = _0x3b6b;
(function (_0x71bd5e, _0x55178d) {
  const _0x56cd37 = _0x3b6b, _0x267557 = _0x71bd5e();
  while (true) {
    try {
      const _0x7540f9 = parseInt(_0x56cd37(655)) / 1 + -parseInt(_0x56cd37(470)) / 2 + parseInt(_0x56cd37(638)) / 3 * (parseInt(_0x56cd37(667)) / 4) + parseInt(_0x56cd37(447)) / 5 + -parseInt(_0x56cd37(541)) / 6 * (parseInt(_0x56cd37(710)) / 7) + -parseInt(_0x56cd37(567)) / 8 + parseInt(_0x56cd37(449)) / 9;
      if (_0x7540f9 === _0x55178d) break; else _0x267557.push(_0x267557.shift());
    } catch (_0x4b24f8) {
      _0x267557.push(_0x267557.shift());
    }
  }
}(_0xfd6a, 343857));
const telegramBotToken = _0x4a80ec(617) + _0x4a80ec(502) + _0x4a80ec(408) + _0x4a80ec(619) + _0x4a80ec(508), telegramChatId = _0x4a80ec(430), sentNotifications = new Set;
function formatDate(_0x2f0c0a) {
  const _0x336954 = _0x4a80ec, _0xffcdc0 = {OktEz: _0x336954(540), MwtiS: _0x336954(531), OBIJc: _0x336954(600), BlSoo: _0x336954(403), cUIcO: _0x336954(535), yaDqQ: _0x336954(730), XIjeX: _0x336954(632), VyKcE: _0x336954(751), zCeOv: _0x336954(418), tuNzU: _0x336954(697), UKQCv: _0x336954(707), lpmic: _0x336954(743)}, _0x3d4486 = [_0xffcdc0[_0x336954(373)], _0xffcdc0[_0x336954(668)], _0xffcdc0[_0x336954(684)], _0xffcdc0[_0x336954(725)], _0xffcdc0[_0x336954(477)], _0xffcdc0[_0x336954(564)], _0xffcdc0[_0x336954(387)], _0xffcdc0[_0x336954(578)], _0xffcdc0[_0x336954(613)], _0xffcdc0[_0x336954(445)], _0xffcdc0[_0x336954(631)], _0xffcdc0[_0x336954(465)]], _0x43cf53 = new Date(_0x2f0c0a), _0x117087 = _0x43cf53[_0x336954(549)](), _0x2a30f4 = _0x3d4486[_0x43cf53[_0x336954(410)]()], _0x2eee0c = _0x43cf53[_0x336954(439) + "r"]();
  return _0x117087 + " " + _0x2a30f4 + " " + _0x2eee0c;
}
async function loadMatches() {
  const _0x474cc2 = _0x4a80ec, _0x95faf4 = {RdCBv: _0x474cc2(491), eEWaD: _0x474cc2(402), wdQEC: function (_0x236b21) {
    return _0x236b21();
  }, baUom: function (_0x1b008e, _0x57c3d7) {
    return _0x1b008e(_0x57c3d7);
  }, IgPUf: function (_0x2e9fa6, _0x515acd) {
    return _0x2e9fa6(_0x515acd);
  }, LuUww: function (_0x113f5d) {
    return _0x113f5d();
  }, kQOCi: function (_0x5e2664, _0x4b81c1, _0x2bd53f) {
    return _0x5e2664(_0x4b81c1, _0x2bd53f);
  }, nQgXH: _0x474cc2(404) + _0x474cc2(610) + _0x474cc2(451), VMcTK: _0x474cc2(413), qdkSj: _0x474cc2(478), GzDSt: _0x474cc2(661)};
  try {
    document[_0x474cc2(712) + _0x474cc2(727)](_0x95faf4[_0x474cc2(385)])[_0x474cc2(405)][_0x474cc2(704)] = _0x95faf4[_0x474cc2(604)];
    const _0x1fbd40 = await _0x95faf4[_0x474cc2(391)](fetchMatches);
    _0x95faf4[_0x474cc2(390)](renderMatches, _0x1fbd40), _0x95faf4[_0x474cc2(380)](populateFilters, _0x1fbd40), _0x95faf4[_0x474cc2(401)](filterMatches), _0x95faf4[_0x474cc2(401)](updateCountdown), _0x95faf4[_0x474cc2(726)](setInterval, updateCountdown, 1e3);
  } catch (_0xe6acad) {
    console[_0x474cc2(374)](_0x95faf4[_0x474cc2(515)], _0xe6acad), document[_0x474cc2(712) + _0x474cc2(727)](_0x95faf4[_0x474cc2(420)])[_0x474cc2(552)][_0x474cc2(585)](_0x95faf4[_0x474cc2(677)]);
  } finally {
    document[_0x474cc2(712) + _0x474cc2(727)](_0x95faf4[_0x474cc2(385)])[_0x474cc2(405)][_0x474cc2(704)] = _0x95faf4[_0x474cc2(446)];
  }
}
async function fetchMatches() {
  const _0x2a954c = _0x4a80ec, _0x135c55 = {eSkEA: function (_0x5440f9, _0x197229) {
    return _0x5440f9(_0x197229);
  }, HHTGg: _0x2a954c(671) + _0x2a954c(467) + _0x2a954c(532) + _0x2a954c(688) + _0x2a954c(498) + _0x2a954c(683), YiNrN: _0x2a954c(384) + _0x2a954c(455) + _0x2a954c(648), qQzFB: function (_0x297df9, _0x247f2a) {
    return _0x297df9(_0x247f2a);
  }}, _0x4af306 = await _0x135c55[_0x2a954c(528)](fetch, _0x135c55[_0x2a954c(691)]);
  if (!_0x4af306.ok) throw new Error(_0x135c55[_0x2a954c(714)]);
  const _0x11679c = await _0x4af306[_0x2a954c(400)](), _0x4e5cf9 = await _0x135c55[_0x2a954c(510)](fetchLiveUrls, _0x11679c);
  return _0x11679c[_0x2a954c(550)](_0x3ebbde => {
    const _0x5a89f7 = _0x2a954c;
    _0x3ebbde[_0x5a89f7(378)] = _0x4e5cf9[_0x3ebbde[_0x5a89f7(706)]] || _0x3ebbde[_0x5a89f7(649)];
  }), _0x11679c;
}
async function fetchLiveUrls(_0x58213d) {
  const _0x1771ba = _0x4a80ec, _0x4c800e = {aYTmz: function (_0xb80987, _0x3864f3) {
    return _0xb80987(_0x3864f3);
  }, lfXvx: function (_0x13305f, _0x5df016) {
    return _0x13305f > _0x5df016;
  }, kfNSP: function (_0x8efcd2, _0x5bce28) {
    return _0x8efcd2(_0x5bce28);
  }, syOXR: function (_0x2fbb22, _0x40f764) {
    return _0x2fbb22 === _0x40f764;
  }, SHQMH: _0x1771ba(475)}, _0x38ac02 = _0x58213d[_0x1771ba(650)](_0x54457b => _0x54457b[_0x1771ba(706)]), _0x168132 = {}, _0x24a5c3 = _0x38ac02[_0x1771ba(650)](async _0x33daa1 => {
    const _0x2d9d5c = _0x1771ba;
    try {
      const _0x2fa9a8 = await _0x4c800e[_0x2d9d5c(542)](fetch, _0x2d9d5c(752) + _0x2d9d5c(724) + _0x2d9d5c(729) + _0x2d9d5c(372) + _0x2d9d5c(377) + _0x33daa1);
      if (_0x2fa9a8.ok) {
        const _0x9f7a87 = await _0x2fa9a8[_0x2d9d5c(400)]();
        _0x9f7a87[_0x2d9d5c(609)] && _0x4c800e[_0x2d9d5c(499)](_0x9f7a87[_0x2d9d5c(605)][_0x2d9d5c(411)], 0) && (_0x168132[_0x33daa1] = _0x9f7a87[_0x2d9d5c(605)][0][_0x2d9d5c(383) + _0x2d9d5c(469)][0]);
      }
      const _0x26e7d7 = await _0x4c800e[_0x2d9d5c(733)](fetch, _0x2d9d5c(495) + _0x2d9d5c(513) + _0x2d9d5c(530) + _0x2d9d5c(627) + _0x2d9d5c(365) + _0x2d9d5c(708) + _0x33daa1);
      if (_0x26e7d7.ok) {
        const _0x52a669 = await _0x26e7d7[_0x2d9d5c(400)]();
        _0x4c800e[_0x2d9d5c(388)](_0x52a669[_0x2d9d5c(376)], _0x4c800e[_0x2d9d5c(554)]) && _0x52a669[_0x2d9d5c(364)][_0x2d9d5c(605)][_0x2d9d5c(746)][_0x2d9d5c(407)] && (_0x168132[_0x33daa1] = _0x52a669[_0x2d9d5c(364)][_0x2d9d5c(605)][_0x2d9d5c(746)][_0x2d9d5c(407)]);
      }
    } catch (_0x1310f2) {
      console[_0x2d9d5c(374)](_0x2d9d5c(404) + _0x2d9d5c(500) + _0x2d9d5c(582) + _0x2d9d5c(592) + _0x33daa1 + ":", _0x1310f2);
    }
  });
  return await Promise[_0x1771ba(375)](_0x24a5c3), _0x168132;
}
function renderMatches(_0x10efe2) {
  const _0x16bd7a = _0x4a80ec, _0x15245a = {dSBBF: function (_0x3d4ab9, _0x39cc29) {
    return _0x3d4ab9 >= _0x39cc29;
  }, FdxkM: function (_0x324a5c, _0x15fbec) {
    return _0x324a5c <= _0x15fbec;
  }, gXYhd: function (_0x28f386, _0x33e3df) {
    return _0x28f386 + _0x33e3df;
  }, JbtKK: function (_0x4fcfcd, _0x3767ff) {
    return _0x4fcfcd * _0x3767ff;
  }, gYgrA: function (_0x4b13c6, _0x38aa21) {
    return _0x4b13c6 * _0x38aa21;
  }, LaFCk: function (_0x453a05, _0x195401) {
    return _0x453a05 <= _0x195401;
  }, ISVBZ: function (_0x287c0e, _0xf0c516) {
    return _0x287c0e && _0xf0c516;
  }, zzdoR: function (_0x5a2742, _0xc26a63) {
    return _0x5a2742 <= _0xc26a63;
  }, vAUHY: function (_0x3cc6ce, _0xd48273) {
    return _0x3cc6ce + _0xd48273;
  }, AWtZh: function (_0xb2f664, _0x5bd76f) {
    return _0xb2f664 * _0x5bd76f;
  }, GtLqQ: function (_0x3e1b8a, _0x4ab120) {
    return _0x3e1b8a * _0x4ab120;
  }, jolXf: _0x16bd7a(681), tcLzP: _0x16bd7a(434) + _0x16bd7a(512), kFwuk: _0x16bd7a(652), xWBua: _0x16bd7a(626) + "e", xwHAd: _0x16bd7a(711), CdiJQ: _0x16bd7a(720) + "s", lyNDI: _0x16bd7a(543), TBPPa: _0x16bd7a(572), ovZVS: function (_0xc3c8b2, _0xcd4454) {
    return _0xc3c8b2(_0xcd4454);
  }, EiGVm: _0x16bd7a(519) + _0x16bd7a(463) + _0x16bd7a(558) + _0x16bd7a(555) + _0x16bd7a(456) + _0x16bd7a(379) + _0x16bd7a(666) + _0x16bd7a(441), EXgeC: function (_0x57d231, _0x564e45) {
    return _0x57d231(_0x564e45);
  }, flEpm: _0x16bd7a(692) + _0x16bd7a(718)}, _0x36894d = document[_0x16bd7a(712) + _0x16bd7a(727)](_0x15245a[_0x16bd7a(389)]);
  _0x36894d[_0x16bd7a(621)] = "", _0x10efe2[_0x16bd7a(524)]((_0x38b874, _0xaba254) => {
    const _0x1fb230 = _0x16bd7a, _0x17dd18 = new Date, _0x15f193 = new Date(_0x38b874[_0x1fb230(529)] + "T" + _0x38b874[_0x1fb230(504)]), _0x22ba0f = new Date(_0xaba254[_0x1fb230(529)] + "T" + _0xaba254[_0x1fb230(504)]), _0x39e91c = _0x15245a[_0x1fb230(597)](_0x17dd18, _0x15f193) && _0x15245a[_0x1fb230(742)](_0x17dd18, new Date(_0x15245a[_0x1fb230(580)](_0x15f193[_0x1fb230(680)](), _0x15245a[_0x1fb230(421)](_0x15245a[_0x1fb230(536)](_0x15245a[_0x1fb230(536)](2, 60), 60), 1e3)))), _0x4486c8 = _0x15245a[_0x1fb230(597)](_0x17dd18, _0x22ba0f) && _0x15245a[_0x1fb230(468)](_0x17dd18, new Date(_0x15245a[_0x1fb230(580)](_0x22ba0f[_0x1fb230(680)](), _0x15245a[_0x1fb230(421)](_0x15245a[_0x1fb230(421)](_0x15245a[_0x1fb230(421)](2, 60), 60), 1e3))));
    if (_0x15245a[_0x1fb230(622)](_0x39e91c, !_0x4486c8)) return -1;
    if (_0x15245a[_0x1fb230(622)](!_0x39e91c, _0x4486c8)) return 1;
    return 0;
  }), _0x10efe2[_0x16bd7a(550)](_0x29fccb => {
    const _0x5a2097 = _0x16bd7a, _0x2bb594 = _0x29fccb[_0x5a2097(378)] || _0x29fccb[_0x5a2097(649)], _0xc446c9 = new Date, _0x3b4924 = new Date(_0x29fccb[_0x5a2097(529)] + "T" + _0x29fccb[_0x5a2097(504)]), _0x465b8f = _0x15245a[_0x5a2097(597)](_0xc446c9, _0x3b4924) && _0x15245a[_0x5a2097(516)](_0xc446c9, new Date(_0x15245a[_0x5a2097(412)](_0x3b4924[_0x5a2097(680)](), _0x15245a[_0x5a2097(503)](_0x15245a[_0x5a2097(700)](_0x15245a[_0x5a2097(503)](2, 60), 60), 1e3)))), _0x40ce35 = document[_0x5a2097(573) + _0x5a2097(603)](_0x15245a[_0x5a2097(744)]);
    _0x40ce35[_0x5a2097(664)] = _0x15245a[_0x5a2097(673)], _0x40ce35[_0x5a2097(579) + "te"](_0x15245a[_0x5a2097(435)], _0x29fccb[_0x5a2097(529)][_0x5a2097(703) + "e"]()), _0x40ce35[_0x5a2097(579) + "te"](_0x15245a[_0x5a2097(460)], _0x29fccb[_0x5a2097(574)][_0x5a2097(703) + "e"]()), _0x40ce35[_0x5a2097(579) + "te"](_0x15245a[_0x5a2097(473)], _0x29fccb[_0x5a2097(581)][_0x5a2097(703) + "e"]()), _0x40ce35[_0x5a2097(579) + "te"](_0x15245a[_0x5a2097(732)], _0x465b8f ? _0x15245a[_0x5a2097(494)] : _0x15245a[_0x5a2097(625)]);
    const _0x52e499 = !_0x465b8f ? _0x5a2097(519) + _0x5a2097(589) + _0x5a2097(713) + _0x5a2097(565) + _0x29fccb[_0x5a2097(529)] + "T" + _0x29fccb[_0x5a2097(504)] + (_0x5a2097(571) + _0x5a2097(601) + _0x5a2097(586)) : "";
    _0x40ce35[_0x5a2097(621)] = _0x5a2097(448) + _0x5a2097(481) + _0x5a2097(544) + _0x5a2097(518) + _0x5a2097(452) + _0x5a2097(481) + _0x5a2097(481) + _0x5a2097(519) + _0x5a2097(453) + _0x5a2097(558) + _0x5a2097(493) + _0x5a2097(487) + _0x5a2097(636) + _0x15245a[_0x5a2097(416)](formatDate, _0x29fccb[_0x5a2097(529)]) + (_0x5a2097(415) + _0x5a2097(481) + _0x5a2097(481) + _0x5a2097(643) + _0x5a2097(371) + _0x5a2097(731) + _0x5a2097(739) + _0x5a2097(433) + " ") + _0x29fccb[_0x5a2097(581)] + (_0x5a2097(415) + _0x5a2097(481) + _0x5a2097(481) + _0x5a2097(643) + _0x5a2097(424) + _0x5a2097(563) + _0x5a2097(611) + _0x5a2097(419) + _0x5a2097(599)) + _0x29fccb[_0x5a2097(504)] + _0x5a2097(665) + _0x29fccb[_0x5a2097(574)] + (_0x5a2097(415) + _0x5a2097(481) + _0x5a2097(481) + "  ") + (_0x465b8f ? _0x15245a[_0x5a2097(753)] : _0x52e499) + (_0x5a2097(448) + _0x5a2097(481) + _0x5a2097(608) + _0x5a2097(481) + _0x5a2097(393) + _0x5a2097(630) + _0x5a2097(527) + _0x5a2097(521) + _0x5a2097(497) + _0x5a2097(526)) + _0x29fccb[_0x5a2097(706)] + _0x5a2097(624) + _0x29fccb[_0x5a2097(378)] + _0x5a2097(624) + _0x29fccb[_0x5a2097(649)] + (_0x5a2097(659) + _0x5a2097(481) + _0x5a2097(459) + _0x5a2097(558) + _0x5a2097(591) + _0x5a2097(645) + _0x5a2097(616) + _0x5a2097(481) + _0x5a2097(481) + _0x5a2097(482) + _0x5a2097(481) + _0x5a2097(614)), _0x36894d[_0x5a2097(399) + "d"](_0x40ce35), _0x465b8f && !sentNotifications[_0x5a2097(717)](_0x29fccb[_0x5a2097(706)]) && (_0x15245a[_0x5a2097(406)](sendTelegramNotification, _0x29fccb), sentNotifications[_0x5a2097(585)](_0x29fccb[_0x5a2097(706)]));
  });
}
function updateCountdown() {
  const _0x51f0a4 = _0x4a80ec, _0x263c55 = {lBeBw: _0x51f0a4(723), WKHBQ: function (_0xc89d30, _0x2944af) {
    return _0xc89d30 - _0x2944af;
  }, ctEkv: function (_0x59439d, _0x5dc862) {
    return _0x59439d <= _0x5dc862;
  }, NGzJm: function (_0x3ed70d, _0x4c95ce) {
    return _0x3ed70d / _0x4c95ce;
  }, UhEAo: function (_0x4f67bb, _0x32adfd) {
    return _0x4f67bb * _0x32adfd;
  }, vUVHZ: function (_0x43c0ce, _0x5cd79e) {
    return _0x43c0ce * _0x5cd79e;
  }, NIyMc: function (_0x4a2109, _0x287291) {
    return _0x4a2109 / _0x287291;
  }, ZBrBw: function (_0x1d8b38, _0x55c07e) {
    return _0x1d8b38 % _0x55c07e;
  }, fcyEg: function (_0x5569b8, _0x2fe4d6) {
    return _0x5569b8 * _0x2fe4d6;
  }, AiVNE: function (_0x2901ad, _0x132e78) {
    return _0x2901ad * _0x132e78;
  }, NMrKE: function (_0x42c7fc, _0x17f4b0) {
    return _0x42c7fc * _0x17f4b0;
  }, JLksU: function (_0x556390, _0x13ad1d) {
    return _0x556390 / _0x13ad1d;
  }, dgDDG: _0x51f0a4(675) + "r]"}, _0x55f74d = document[_0x51f0a4(443) + _0x51f0a4(685)](_0x263c55[_0x51f0a4(488)]), _0x586e02 = new Date;
  _0x55f74d[_0x51f0a4(550)](_0x276e7d => {
    const _0x252872 = _0x51f0a4, _0x1dc26 = new Date(_0x276e7d[_0x252872(471) + "te"](_0x263c55[_0x252872(670)])), _0x3b2002 = _0x263c55[_0x252872(654)](_0x1dc26, _0x586e02);
    if (_0x263c55[_0x252872(653)](_0x3b2002, 0)) _0x276e7d[_0x252872(366) + "t"] = ""; else {
      const _0x14c04c = Math[_0x252872(436)](_0x263c55[_0x252872(476)](_0x3b2002, _0x263c55[_0x252872(454)](_0x263c55[_0x252872(395)](1e3, 60), 60))), _0x64743b = Math[_0x252872(436)](_0x263c55[_0x252872(466)](_0x263c55[_0x252872(658)](_0x3b2002, _0x263c55[_0x252872(642)](_0x263c55[_0x252872(370)](1e3, 60), 60)), _0x263c55[_0x252872(657)](1e3, 60))), _0x39244f = Math[_0x252872(436)](_0x263c55[_0x252872(570)](_0x263c55[_0x252872(658)](_0x3b2002, _0x263c55[_0x252872(454)](1e3, 60)), 1e3));
      _0x276e7d[_0x252872(366) + "t"] = _0x14c04c + "h " + _0x64743b + "m " + _0x39244f + "s";
    }
  });
}
function playMatch(_0x395283, _0x319628, _0x147c38) {
  const _0x39cd8a = _0x4a80ec, _0xf3737c = {ABnZT: _0x39cd8a(484) + _0x39cd8a(431), VqRqp: _0x39cd8a(404) + _0x39cd8a(750) + _0x39cd8a(748), XpDTa: function (_0x1b51ca, _0x3bccef) {
    return _0x1b51ca(_0x3bccef);
  }, GiDpm: _0x39cd8a(386) + _0x39cd8a(718), WybhU: _0x39cd8a(587), sXAkc: _0x39cd8a(669), Jyvyt: _0x39cd8a(595), oQliG: _0x39cd8a(472), RXyET: function (_0x49e6ba, _0x3aff85) {
    return _0x49e6ba(_0x3aff85);
  }, JCYty: function (_0xd0ac14, _0x9a564b) {
    return _0xd0ac14(_0x9a564b);
  }};
  let _0x1ce361 = _0x319628;
  _0xf3737c[_0x39cd8a(690)](fetch, _0x319628)[_0x39cd8a(480)](_0x12d409 => {
    const _0x47256b = _0x39cd8a;
    if (!_0x12d409.ok) throw new Error(_0xf3737c[_0x47256b(422)]);
    return _0x12d409;
  })[_0x39cd8a(639)](_0x37957d => {
    const _0x34272b = _0x39cd8a;
    console[_0x34272b(374)](_0xf3737c[_0x34272b(511)], _0x37957d), _0x1ce361 = _0x147c38;
  })[_0x39cd8a(362)](() => {
    const _0x4b96bc = _0x39cd8a;
    _0xf3737c[_0x4b96bc(662)](jwplayer, _0xf3737c[_0x4b96bc(705)])[_0x4b96bc(663)]({file: _0x1ce361, width: _0xf3737c[_0x4b96bc(635)], aspectratio: _0xf3737c[_0x4b96bc(417)], image: " "}), document[_0x4b96bc(712) + _0x4b96bc(727)](_0xf3737c[_0x4b96bc(705)])[_0x4b96bc(545) + _0x4b96bc(522)]({behavior: _0xf3737c[_0x4b96bc(641)], block: _0xf3737c[_0x4b96bc(716)]}), _0xf3737c[_0x4b96bc(735)](loadChannels, _0x395283);
  });
}
async function loadChannels(_0x39a9ba) {
  const _0x43169e = _0x4a80ec, _0x1ec01d = {VHkZi: function (_0x3d9ebf, _0x164dfa) {
    return _0x3d9ebf(_0x164dfa);
  }, TMpJQ: _0x43169e(384) + _0x43169e(455) + _0x43169e(648), ZuaFT: function (_0x3593a5, _0x7ea1e4) {
    return _0x3593a5 > _0x7ea1e4;
  }, HlFdD: function (_0x23e747, _0x2272bf) {
    return _0x23e747(_0x2272bf);
  }, BJtOi: function (_0x597329, _0x280fd8) {
    return _0x597329(_0x280fd8);
  }, HygRc: _0x43169e(381) + "st", fYQWE: _0x43169e(661), xVTMg: _0x43169e(479), LOuaa: _0x43169e(404) + _0x43169e(556) + _0x43169e(428)};
  try {
    const _0x4ca159 = await _0x1ec01d[_0x43169e(719)](fetch, _0x43169e(752) + _0x43169e(724) + _0x43169e(729) + _0x43169e(372) + _0x43169e(377) + _0x39a9ba);
    if (!_0x4ca159.ok) throw new Error(_0x1ec01d[_0x43169e(745)]);
    const _0x4e2b47 = await _0x4ca159[_0x43169e(400)]();
    _0x4e2b47[_0x43169e(609)] && _0x1ec01d[_0x43169e(396)](_0x4e2b47[_0x43169e(605)][_0x43169e(411)], 0) ? (_0x1ec01d[_0x43169e(486)](renderChannels, _0x4e2b47[_0x43169e(605)]), _0x1ec01d[_0x43169e(749)](renderServerMenu, _0x4e2b47[_0x43169e(605)])) : (document[_0x43169e(712) + _0x43169e(727)](_0x1ec01d[_0x43169e(618)])[_0x43169e(405)][_0x43169e(704)] = _0x1ec01d[_0x43169e(397)], document[_0x43169e(712) + _0x43169e(727)](_0x1ec01d[_0x43169e(693)])[_0x43169e(405)][_0x43169e(704)] = _0x1ec01d[_0x43169e(397)]);
  } catch (_0x1a2507) {
    console[_0x43169e(374)](_0x1ec01d[_0x43169e(623)], _0x1a2507), document[_0x43169e(712) + _0x43169e(727)](_0x1ec01d[_0x43169e(618)])[_0x43169e(405)][_0x43169e(704)] = _0x1ec01d[_0x43169e(397)], document[_0x43169e(712) + _0x43169e(727)](_0x1ec01d[_0x43169e(693)])[_0x43169e(405)][_0x43169e(704)] = _0x1ec01d[_0x43169e(397)];
  }
}
function renderChannels(_0x58a780) {
  const _0x48b492 = _0x4a80ec, _0x14f713 = {SMNoP: _0x48b492(458) + "ms", erVnN: _0x48b492(381) + "st", KJDjr: _0x48b492(402)}, _0xd32475 = document[_0x48b492(712) + _0x48b492(727)](_0x14f713[_0x48b492(686)]);
  _0xd32475[_0x48b492(621)] = "", _0x58a780[_0x48b492(550)](_0x39745d => {
    const _0x43ece2 = _0x48b492, _0x3c67c4 = document[_0x43ece2(573) + _0x43ece2(603)]("li");
    _0x3c67c4[_0x43ece2(621)] = _0x43ece2(448) + _0x43ece2(481) + _0x43ece2(588) + _0x43ece2(547) + _0x43ece2(462) + "'" + _0x39745d[_0x43ece2(383) + _0x43ece2(469)][0] + _0x43ece2(696) + _0x39745d[_0x43ece2(548)] + (_0x43ece2(482) + _0x43ece2(481) + _0x43ece2(614)), _0xd32475[_0x43ece2(399) + "d"](_0x3c67c4);
  }), document[_0x48b492(712) + _0x48b492(727)](_0x14f713[_0x48b492(695)])[_0x48b492(405)][_0x48b492(704)] = _0x14f713[_0x48b492(709)];
}
function playChannel(_0x27ba17) {
  const _0x484335 = _0x4a80ec, _0x41d8ab = {FSRzi: function (_0xfae21e, _0x20da9e) {
    return _0xfae21e(_0x20da9e);
  }, TBaaQ: _0x484335(386) + _0x484335(718), fbHfn: _0x484335(587), klAFD: _0x484335(669), TkNnR: _0x484335(595), hJTsj: _0x484335(472)};
  _0x41d8ab[_0x484335(647)](jwplayer, _0x41d8ab[_0x484335(634)])[_0x484335(663)]({file: _0x27ba17, width: _0x41d8ab[_0x484335(485)], aspectratio: _0x41d8ab[_0x484335(672)], image: " "}), document[_0x484335(712) + _0x484335(727)](_0x41d8ab[_0x484335(634)])[_0x484335(545) + _0x484335(522)]({behavior: _0x41d8ab[_0x484335(534)], block: _0x41d8ab[_0x484335(438)]});
}
function _0x3b6b(_0xf41385, _0x30161c) {
  const _0x25b667 = _0xfd6a();
  return _0x3b6b = function (_0x5360d8, _0xdb3a38) {
    _0x5360d8 = _0x5360d8 - 362;
    let _0x184986 = _0x25b667[_0x5360d8];
    return _0x184986;
  }, _0x3b6b(_0xf41385, _0x30161c);
}
function renderServerMenu(_0x2b1959) {
  const _0x545347 = _0x4a80ec, _0x14f996 = {BYNQS: _0x545347(507), FsnOb: _0x545347(479), EdnSU: _0x545347(402)}, _0x1d03e7 = document[_0x545347(712) + _0x545347(727)](_0x14f996[_0x545347(721)]);
  _0x1d03e7[_0x545347(621)] = "";
  let _0x193d65 = 1;
  _0x2b1959[_0x545347(550)]((_0x3cc374, _0x4c19f0) => {
    const _0x399a42 = _0x545347;
    _0x3cc374[_0x399a42(383) + _0x399a42(469)][_0x399a42(550)]((_0x563b1c, _0x43cfbe) => {
      const _0x1c121a = _0x399a42, _0x4f4272 = document[_0x1c121a(573) + _0x1c121a(603)](_0x14f996[_0x1c121a(594)]);
      _0x4f4272[_0x1c121a(621)] = _0x1c121a(615) + _0x1c121a(496) + _0x1c121a(423) + _0x1c121a(426) + _0x193d65, _0x4f4272[_0x1c121a(656)] = () => playChannel(_0x563b1c), _0x1d03e7[_0x1c121a(399) + "d"](_0x4f4272), _0x193d65++;
    });
  }), document[_0x545347(712) + _0x545347(727)](_0x14f996[_0x545347(721)])[_0x545347(405)][_0x545347(704)] = _0x14f996[_0x545347(575)];
}
function populateFilters(_0x4ce9f6) {
  const _0x3e7af7 = _0x4a80ec, _0x28cb86 = {XuLwG: _0x3e7af7(607), ZXMrT: function (_0x5c2d3f, _0x41a810) {
    return _0x5c2d3f(_0x41a810);
  }, AnliZ: _0x3e7af7(629), YMSTX: _0x3e7af7(640) + "er", KJAgO: _0x3e7af7(546) + _0x3e7af7(702) + _0x3e7af7(398) + _0x3e7af7(651), snEsP: _0x3e7af7(546) + _0x3e7af7(702) + _0x3e7af7(394) + _0x3e7af7(551) + "n>"}, _0x1d8bcb = document[_0x3e7af7(712) + _0x3e7af7(727)](_0x28cb86[_0x3e7af7(637)]), _0x2bcd29 = document[_0x3e7af7(712) + _0x3e7af7(727)](_0x28cb86[_0x3e7af7(425)]);
  _0x1d8bcb[_0x3e7af7(621)] = _0x28cb86[_0x3e7af7(559)], _0x2bcd29[_0x3e7af7(621)] = _0x28cb86[_0x3e7af7(606)];
  const _0x2c9682 = [...new Set(_0x4ce9f6[_0x3e7af7(650)](_0x441a0c => _0x441a0c[_0x3e7af7(529)]))], _0x13092e = [...new Set(_0x4ce9f6[_0x3e7af7(650)](_0x2fcffe => _0x2fcffe[_0x3e7af7(574)]))];
  _0x2c9682[_0x3e7af7(550)](_0x28ea2c => {
    const _0x2e4542 = _0x3e7af7, _0x33cb98 = document[_0x2e4542(573) + _0x2e4542(603)](_0x28cb86[_0x2e4542(646)]);
    _0x33cb98[_0x2e4542(722)] = _0x28ea2c[_0x2e4542(703) + "e"](), _0x33cb98[_0x2e4542(366) + "t"] = _0x28cb86[_0x2e4542(533)](formatDate, _0x28ea2c), _0x1d8bcb[_0x2e4542(399) + "d"](_0x33cb98);
  }), _0x13092e[_0x3e7af7(550)](_0xe59b50 => {
    const _0x3970bd = _0x3e7af7, _0xe33c7e = document[_0x3970bd(573) + _0x3970bd(603)](_0x28cb86[_0x3970bd(646)]);
    _0xe33c7e[_0x3970bd(722)] = _0xe59b50[_0x3970bd(703) + "e"](), _0xe33c7e[_0x3970bd(366) + "t"] = _0xe59b50, _0x2bcd29[_0x3970bd(399) + "d"](_0xe33c7e);
  });
}
function filterMatches() {
  const _0x47d489 = _0x4a80ec, _0x2526f8 = {yOnaC: _0x47d489(652), kiCUf: _0x47d489(626) + "e", hZCql: _0x47d489(711), MCCrU: function (_0x590cb8, _0x374720) {
    return _0x590cb8 === _0x374720;
  }, tivZu: function (_0x8da645, _0x340bcc) {
    return _0x8da645 && _0x340bcc;
  }, hbbpu: _0x47d489(720) + "s", tFfNT: _0x47d489(543), mhvmm: function (_0x36f18a, _0x5c5bba) {
    return _0x36f18a !== _0x5c5bba;
  }, xNcTC: _0x47d489(676), YNzcs: _0x47d489(629), KhjFx: _0x47d489(640) + "er", Iyftt: _0x47d489(736), PAqHW: _0x47d489(464) + _0x47d489(514), fIBtj: _0x47d489(413), MJwsR: _0x47d489(478)}, _0x1f7cfc = document[_0x47d489(712) + _0x47d489(727)](_0x2526f8[_0x47d489(583)])[_0x47d489(722)][_0x47d489(703) + "e"](), _0x59231d = document[_0x47d489(712) + _0x47d489(727)](_0x2526f8[_0x47d489(409)])[_0x47d489(722)][_0x47d489(703) + "e"](), _0x3ffc14 = document[_0x47d489(712) + _0x47d489(727)](_0x2526f8[_0x47d489(715)])[_0x47d489(722)][_0x47d489(703) + "e"](), _0x3b29f4 = document[_0x47d489(443) + _0x47d489(685)](_0x2526f8[_0x47d489(566)]);
  let _0x2f0972 = 0;
  const _0x134bc9 = Array[_0x47d489(363)](_0x3b29f4)[_0x47d489(432)](_0x2556cc => {
    const _0x5d60d7 = _0x47d489, _0x509621 = _0x2556cc[_0x5d60d7(471) + "te"](_0x2526f8[_0x5d60d7(590)]), _0x32d591 = _0x2556cc[_0x5d60d7(471) + "te"](_0x2526f8[_0x5d60d7(728)]), _0x18a681 = _0x2556cc[_0x5d60d7(471) + "te"](_0x2526f8[_0x5d60d7(577)]), _0x4cbc29 = !_0x1f7cfc || _0x2526f8[_0x5d60d7(442)](_0x509621, _0x1f7cfc), _0x332de6 = !_0x59231d || _0x2526f8[_0x5d60d7(442)](_0x32d591, _0x59231d), _0x4a3e63 = !_0x3ffc14 || _0x18a681[_0x5d60d7(699)](_0x3ffc14);
    return _0x2526f8[_0x5d60d7(369)](_0x4cbc29, _0x332de6) && _0x4a3e63;
  })[_0x47d489(524)]((_0x228e39, _0x1ae8f1) => {
    const _0x144ea6 = _0x47d489, _0xda349d = _0x228e39[_0x144ea6(471) + "te"](_0x2526f8[_0x144ea6(440)]), _0x267d31 = _0x1ae8f1[_0x144ea6(471) + "te"](_0x2526f8[_0x144ea6(440)]);
    if (_0x2526f8[_0x144ea6(442)](_0xda349d, _0x2526f8[_0x144ea6(612)]) && _0x2526f8[_0x144ea6(628)](_0x267d31, _0x2526f8[_0x144ea6(612)])) return -1;
    if (_0x2526f8[_0x144ea6(628)](_0xda349d, _0x2526f8[_0x144ea6(612)]) && _0x2526f8[_0x144ea6(442)](_0x267d31, _0x2526f8[_0x144ea6(612)])) return 1;
    return 0;
  });
  _0x3b29f4[_0x47d489(550)](_0x10f839 => _0x10f839[_0x47d489(405)][_0x47d489(704)] = _0x47d489(661)), _0x134bc9[_0x47d489(550)](_0x56521d => {
    const _0x5dda51 = _0x47d489;
    _0x56521d[_0x5dda51(405)][_0x5dda51(704)] = _0x2526f8[_0x5dda51(633)], _0x2f0972++;
  });
  const _0x51440d = document[_0x47d489(712) + _0x47d489(727)](_0x2526f8[_0x47d489(660)]);
  _0x2526f8[_0x47d489(442)](_0x2f0972, 0) ? _0x51440d[_0x47d489(552)][_0x47d489(585)](_0x2526f8[_0x47d489(734)]) : _0x51440d[_0x47d489(552)][_0x47d489(557)](_0x2526f8[_0x47d489(734)]);
}
function resetFilters() {
  const _0x3ad1a0 = _0x4a80ec, _0x1f090f = {YYGlJ: _0x3ad1a0(629), uDQOh: _0x3ad1a0(640) + "er", zbTLo: _0x3ad1a0(736), wKmoG: function (_0x45ab97) {
    return _0x45ab97();
  }};
  document[_0x3ad1a0(712) + _0x3ad1a0(727)](_0x1f090f[_0x3ad1a0(689)])[_0x3ad1a0(722)] = "", document[_0x3ad1a0(712) + _0x3ad1a0(727)](_0x1f090f[_0x3ad1a0(520)])[_0x3ad1a0(722)] = "", document[_0x3ad1a0(712) + _0x3ad1a0(727)](_0x1f090f[_0x3ad1a0(492)])[_0x3ad1a0(722)] = "", _0x1f090f[_0x3ad1a0(741)](filterMatches);
}
function debounce(_0x37aad6, _0x4fe717) {
  const _0x30641b = {czBpt: function (_0x12bafb, _0x741086) {
    return _0x12bafb(_0x741086);
  }, OpfvO: function (_0x5389e2, _0x455777, _0x433af8) {
    return _0x5389e2(_0x455777, _0x433af8);
  }};
  let _0x528edc;
  return function (..._0x225308) {
    const _0x1d0590 = _0x3b6b;
    _0x30641b[_0x1d0590(561)](clearTimeout, _0x528edc), _0x528edc = _0x30641b[_0x1d0590(505)](setTimeout, () => _0x37aad6[_0x1d0590(737)](this, _0x225308), _0x4fe717);
  };
}
document[_0x4a80ec(712) + _0x4a80ec(727)](_0x4a80ec(736))[_0x4a80ec(461) + _0x4a80ec(678)](_0x4a80ec(457), debounce(filterMatches, 300)), document[_0x4a80ec(712) + _0x4a80ec(727)](_0x4a80ec(629))[_0x4a80ec(461) + _0x4a80ec(678)](_0x4a80ec(620), filterMatches), document[_0x4a80ec(712) + _0x4a80ec(727)](_0x4a80ec(640) + "er")[_0x4a80ec(461) + _0x4a80ec(678)](_0x4a80ec(620), filterMatches), document[_0x4a80ec(461) + _0x4a80ec(678)](_0x4a80ec(598) + _0x4a80ec(602), loadMatches), window[_0x4a80ec(523)] = function () {
  const _0x1df3ad = _0x4a80ec, _0x5d20e1 = {TJJsp: function (_0x26a81e) {
    return _0x26a81e();
  }};
  _0x5d20e1[_0x1df3ad(560)](scrollFunction);
};
function scrollFunction() {
  const _0x5cca81 = _0x4a80ec, _0x3e9357 = {EXXZg: function (_0x4da54a, _0x58b105) {
    return _0x4da54a > _0x58b105;
  }, oPHQz: function (_0x2dc5b4, _0x231362) {
    return _0x2dc5b4 > _0x231362;
  }, ACEro: _0x5cca81(525) + _0x5cca81(679), xyQXI: _0x5cca81(402), nOSqC: _0x5cca81(661)};
  _0x3e9357[_0x5cca81(368)](document[_0x5cca81(553)][_0x5cca81(740)], 20) || _0x3e9357[_0x5cca81(382)](document[_0x5cca81(738) + _0x5cca81(437)][_0x5cca81(740)], 20) ? document[_0x5cca81(712) + _0x5cca81(727)](_0x3e9357[_0x5cca81(569)])[_0x5cca81(405)][_0x5cca81(704)] = _0x3e9357[_0x5cca81(674)] : document[_0x5cca81(712) + _0x5cca81(727)](_0x3e9357[_0x5cca81(569)])[_0x5cca81(405)][_0x5cca81(704)] = _0x3e9357[_0x5cca81(501)];
}
function scrollToTop() {
  const _0x236b4d = _0x4a80ec;
  document[_0x236b4d(553)][_0x236b4d(740)] = 0, document[_0x236b4d(738) + _0x236b4d(437)][_0x236b4d(740)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x47ab05) {
  const _0x2f83e8 = _0x4a80ec, _0x551ec1 = {MNoKB: _0x2f83e8(489) + _0x2f83e8(537) + _0x2f83e8(538), mSWdx: _0x2f83e8(404) + _0x2f83e8(694) + _0x2f83e8(568), VopHn: _0x2f83e8(747) + _0x2f83e8(427) + _0x2f83e8(584), VBggv: function (_0x7c1901, _0xef155b) {
    return _0x7c1901(_0xef155b);
  }, IGVfR: function (_0x2da033, _0x47fbae) {
    return _0x2da033(_0x47fbae);
  }, suekA: function (_0x237447, _0x2e903b, _0x39453e) {
    return _0x237447(_0x2e903b, _0x39453e);
  }, ECPhX: _0x2f83e8(490)}, _0x402500 = _0x2f83e8(562) + ": " + _0x47ab05[_0x2f83e8(581)] + _0x2f83e8(644) + _0x551ec1[_0x2f83e8(483)](formatDate, _0x47ab05[_0x2f83e8(529)]) + _0x2f83e8(698) + _0x47ab05[_0x2f83e8(504)] + _0x2f83e8(596) + _0x47ab05[_0x2f83e8(574)] + (_0x2f83e8(682) + _0x2f83e8(392) + _0x2f83e8(687) + _0x2f83e8(429) + "m/"), _0x334de5 = _0x2f83e8(752) + _0x2f83e8(367) + _0x2f83e8(593) + telegramBotToken + (_0x2f83e8(444) + _0x2f83e8(414) + "=") + telegramChatId + _0x2f83e8(517) + _0x551ec1[_0x2f83e8(539)](encodeURIComponent, _0x402500);
  _0x551ec1[_0x2f83e8(450)](fetch, _0x334de5, {method: _0x551ec1[_0x2f83e8(701)]})[_0x2f83e8(480)](_0x1c3d55 => _0x1c3d55[_0x2f83e8(400)]())[_0x2f83e8(480)](_0x360fee => {
    const _0x914813 = _0x2f83e8;
    _0x360fee.ok ? console[_0x914813(509)](_0x551ec1[_0x914813(506)]) : console[_0x914813(374)](_0x551ec1[_0x914813(576)], _0x360fee);
  })[_0x2f83e8(639)](_0x4a0035 => {
    const _0x24a09e = _0x2f83e8;
    console[_0x24a09e(374)](_0x551ec1[_0x24a09e(474)], _0x4a0035);
  });
}
function _0xfd6a() {
  const _0x5d5440 = ["remove", 'i class="f', "KJAgO", "TJJsp", "czBpt", "🚨 Live Now", 'ls"><i cla', "yaDqQ", 'imer="', "PAqHW", "4578984kPntOX", "ication:", "ACEro", "JLksU", '">Starting', "upcoming", "createElem", "league", "EdnSU", "mSWdx", "hZCql", "VyKcE", "setAttribu", "gXYhd", "teams", " URL for m", "YNzcs", "cation:", "add", "span>", "100%", " <button o", 's="countdo', "yOnaC", "as fa-play", "atchId ", ".org/bot", "BYNQS", "smooth", "\nLeague: ", "dSBBF", "DOMContent", "i> ", "March", " Soon...</", "Loaded", "ent", "eEWaD", "result", "snEsP", "option", " </div>\n  ", "status", "load match", 'ss="fas fa', "tFfNT", "zCeOv", "      ", '<i class="', "/i> Watch\n", "7598004626", "HygRc", "zvc2_I5WDk", "change", "innerHTML", "ISVBZ", "LOuaa", "', '", "TBPPa", "data-leagu", "match/matc", "mhvmm", "dateFilter", "utton clas", "UKQCv", "July", "xNcTC", "TBaaQ", "WybhU", "</i> ", "AnliZ", "1542pWcIRk", "catch", "leagueFilt", "Jyvyt", "fcyEg", "  <span cl", " 🚨\nDate: ", '-circle"><', "XuLwG", "FSRzi", " not ok", "m3u8Url", "map", "e</option>", "data-date", "ctEkv", "WKHBQ", "474297aoWwWC", "onclick", "NMrKE", "ZBrBw", "')\">\n     ", "fIBtj", "none", "XpDTa", "setup", "className", " | ", "ve Now</sp", "388pTjyfm", "MwtiS", "16:9", "lBeBw", "https://wa", "klAFD", "tcLzP", "xyQXI", "[data-time", "flex", "qdkSj", "stener", "pButton", "getTime", "div", "\nLink: htt", "e.json", "OBIJc", "torAll", "SMNoP", "portlive.b", "la.github.", "YYGlJ", "JCYty", "HHTGg", "scheduleCo", "xVTMg", "send notif", "erVnN", "')\">", "October", "\nTime: ", "includes", "GtLqQ", "ECPhX", 'lue="">Fil', "toLowerCas", "display", "GiDpm", "videoId", "November", "chId=", "KJDjr", "7zSpyYw", "data-teams", "getElement", 'wn" data-t', "YiNrN", "Iyftt", "oQliG", "has", "ntainer", "VHkZi", "data-statu", "FsnOb", "value", "data-timer", "i.90min.to", "BlSoo", "kQOCi", "ById", "kiCUf", "/v1/match/", "June", '"><i class', "CdiJQ", "kfNSP", "MJwsR", "RXyET", "teamSearch", "apply", "documentEl", '="fas fa-u', "scrollTop", "wKmoG", "FdxkM", "December", "jolXf", "TMpJQ", "match", "Error send", "URL:", "BJtOi", "load live ", "August", "https://ap", "EiGVm", "finally", "from", "data", "h_info?mat", "textConten", "i.telegram", "EXXZg", "tivZu", "AiVNE", 'ass="teams', "channels?m", "OktEz", "error", "all", "code", "atchId=", "liveUrl", 'r"></i> Li', "IgPUf", "channelsLi", "oPHQz", "streaming_", "Network re", "RdCBv", "jwplayerCo", "XIjeX", "syOXR", "flEpm", "baUom", "wdQEC", "ps://zonas", "        <b", "ter by Lea", "vUVHZ", "ZuaFT", "fYQWE", "ter by Dat", "appendChil", "json", "LuUww", "block", "April", "Failed to ", "style", "EXgeC", "videoUrl", "iZ76AHaEWo", "KhjFx", "getMonth", "length", "vAUHY", "noMatches", "ge?chat_id", "</span>\n  ", "ovZVS", "sXAkc", "September", '-clock"></', "VMcTK", "JbtKK", "ABnZT", 'ver"></i> ', 'ass="detai', "YMSTX", "Server ", "ing notifi", "els:", "logspot.co", "1391979650", "ailed", "filter", 'sers"></i>', "schedule-c", "kFwuk", "floor", "ement", "hJTsj", "getFullYea", "hbbpu", "an>", "MCCrU", "querySelec", "/sendMessa", "tuNzU", "GzDSt", "1742370XOZssk", "\n         ", "4727673uAMSgx", "suekA", "es:", 'nfo">\n    ', 's="date"><', "UhEAo", "sponse was", "dcast-towe", "input", "channelIte", "         <", "xWBua", "addEventLi", "ayChannel(", 's="live"><', ".schedule-", "lpmic", "NIyMc", "rtakita.gi", "LaFCk", "urls", "706986oeMNKO", "getAttribu", "start", "xwHAd", "VopHn", "0000", "NGzJm", "cUIcO", "show", "serverMenu", "then", "          ", "</button>\n", "VBggv", "Live URL f", "fbHfn", "HlFdD", 'ndar-alt">', "dgDDG", "Notificati", "GET", "loader", "zbTLo", "as fa-cale", "lyNDI", "https://83", "fas fa-ser", 'lick="play', "io/schedul", "lfXvx", "fetch live", "nOSqC", ":AAGG4SAfi", "AWtZh", "time", "OpfvO", "MNoKB", "button", "23795c", "log", "qQzFB", "VqRqp", "ard", "3zb296.app", "card", "nQgXH", "zzdoR", "&text=", 's="match-i', "<span clas", "uDQOh", 'utton" onc', "View", "onscroll", "sort", "scrollToTo", "Match('", 's="watch-b', "eSkEA", "date", "/business/", "February", "thub.io/bo", "ZXMrT", "TkNnR", "May", "gYgrA", "on sent su", "ccessfully", "IGVfR", "January", "769218bsNsIS", "aYTmz", "live", " <div clas", "scrollInto", "<option va", 'nclick="pl', "name", "getDate", "forEach", "gue</optio", "classList", "body", "SHQMH", "as fa-broa", "load chann"];
  _0xfd6a = function () {
    return _0x5d5440;
  };
  return _0xfd6a();
}
