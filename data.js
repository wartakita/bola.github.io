const _0x13e0f0 = _0x1858;
(function (_0x328e1c, _0x437a1e) {
  const _0x1f8add = _0x1858, _0x175c88 = _0x328e1c();
  while (true) {
    try {
      const _0x3ae9cc = parseInt(_0x1f8add(491)) / 1 + parseInt(_0x1f8add(535)) / 2 * (-parseInt(_0x1f8add(381)) / 3) + -parseInt(_0x1f8add(433)) / 4 * (parseInt(_0x1f8add(267)) / 5) + parseInt(_0x1f8add(518)) / 6 * (-parseInt(_0x1f8add(509)) / 7) + -parseInt(_0x1f8add(319)) / 8 * (-parseInt(_0x1f8add(396)) / 9) + parseInt(_0x1f8add(377)) / 10 * (parseInt(_0x1f8add(401)) / 11) + -parseInt(_0x1f8add(441)) / 12;
      if (_0x3ae9cc === _0x437a1e) break; else _0x175c88.push(_0x175c88.shift());
    } catch (_0x378d96) {
      _0x175c88.push(_0x175c88.shift());
    }
  }
}(_0x54dc, 590405));
const telegramBotToken = _0x13e0f0(582) + _0x13e0f0(481) + _0x13e0f0(216) + _0x13e0f0(444) + _0x13e0f0(276), telegramChatId = _0x13e0f0(577);
function formatDate(_0x4e9ea7) {
  const _0x45a74f = _0x13e0f0, _0xd45918 = {MDeXT: _0x45a74f(294), zrVAG: _0x45a74f(254), bsPPx: _0x45a74f(554), ykEmt: _0x45a74f(529), pewfa: _0x45a74f(263), TPnpX: _0x45a74f(567), CqwUd: _0x45a74f(403), aXmGo: _0x45a74f(308), vyjlT: _0x45a74f(321), pQMyS: _0x45a74f(525), PhdRU: _0x45a74f(572), CsuEa: _0x45a74f(494)}, _0x796a97 = [_0xd45918[_0x45a74f(369)], _0xd45918[_0x45a74f(514)], _0xd45918[_0x45a74f(366)], _0xd45918[_0x45a74f(289)], _0xd45918[_0x45a74f(241)], _0xd45918[_0x45a74f(341)], _0xd45918[_0x45a74f(333)], _0xd45918[_0x45a74f(503)], _0xd45918[_0x45a74f(456)], _0xd45918[_0x45a74f(467)], _0xd45918[_0x45a74f(221)], _0xd45918[_0x45a74f(539)]], _0x4f8c2a = new Date(_0x4e9ea7), _0x1cf413 = _0x4f8c2a[_0x45a74f(309)](), _0x2214c6 = _0x796a97[_0x4f8c2a[_0x45a74f(326)]()], _0x17b2cf = _0x4f8c2a[_0x45a74f(447) + "r"]();
  return _0x1cf413 + " " + _0x2214c6 + " " + _0x17b2cf;
}
async function loadMatches() {
  const _0x11c9c8 = _0x13e0f0, _0x295979 = {MJlCx: _0x11c9c8(458), AYNpb: _0x11c9c8(310), VBpXT: _0x11c9c8(290), dzgiH: _0x11c9c8(439) + "e", BtPAU: function (_0x3f2ad4, _0x2326fb) {
    return _0x3f2ad4 * _0x2326fb;
  }, VpWyr: function (_0x611caf, _0x5b54bf) {
    return _0x611caf * _0x5b54bf;
  }, RCnjL: function (_0x1d7ad5, _0x5e846b) {
    return _0x1d7ad5 && _0x5e846b;
  }, UvySH: function (_0x48e3ef, _0x3ef467) {
    return _0x48e3ef < _0x3ef467;
  }, AseoM: function (_0xbddff5, _0x3e6161) {
    return _0xbddff5 - _0x3e6161;
  }, mqNDv: function (_0x2303df) {
    return _0x2303df();
  }, DgHhN: function (_0x4fa891, _0x208e81) {
    return _0x4fa891(_0x208e81);
  }, XcTFD: function (_0x411987, _0xf18ce5, _0x4167f7) {
    return _0x411987(_0xf18ce5, _0x4167f7);
  }, ilifE: _0x11c9c8(507) + _0x11c9c8(245) + _0x11c9c8(386), xBvOO: _0x11c9c8(282), srMqR: _0x11c9c8(405), IcHTg: _0x11c9c8(374)};
  try {
    document[_0x11c9c8(421) + _0x11c9c8(486)](_0x295979[_0x11c9c8(550)])[_0x11c9c8(327)][_0x11c9c8(384)] = _0x295979[_0x11c9c8(543)];
    const _0x4c57c9 = sessionStorage[_0x11c9c8(409)](_0x295979[_0x11c9c8(523)]), _0x3490b1 = sessionStorage[_0x11c9c8(409)](_0x295979[_0x11c9c8(583)]), _0x5376b6 = (new Date)[_0x11c9c8(328)](), _0x50e218 = _0x295979[_0x11c9c8(339)](_0x295979[_0x11c9c8(397)](5, 60), 1e3);
    let _0x4db4fa;
    _0x295979[_0x11c9c8(558)](_0x4c57c9, _0x3490b1) && _0x295979[_0x11c9c8(410)](_0x295979[_0x11c9c8(232)](_0x5376b6, _0x3490b1), _0x50e218) ? _0x4db4fa = JSON[_0x11c9c8(372)](_0x4c57c9) : (_0x4db4fa = await _0x295979[_0x11c9c8(320)](fetchMatches), sessionStorage[_0x11c9c8(261)](_0x295979[_0x11c9c8(523)], JSON[_0x11c9c8(258)](_0x4db4fa)), sessionStorage[_0x11c9c8(261)](_0x295979[_0x11c9c8(583)], _0x5376b6)), _0x295979[_0x11c9c8(240)](renderMatches, _0x4db4fa), _0x295979[_0x11c9c8(240)](populateFilters, _0x4db4fa), _0x295979[_0x11c9c8(320)](filterMatches), _0x295979[_0x11c9c8(320)](updateCountdown), _0x295979[_0x11c9c8(406)](setInterval, updateCountdown, 1e3);
  } catch (_0xdae5f6) {
    console[_0x11c9c8(363)](_0x295979[_0x11c9c8(264)], _0xdae5f6), document[_0x11c9c8(421) + _0x11c9c8(486)](_0x295979[_0x11c9c8(553)])[_0x11c9c8(274)][_0x11c9c8(472)](_0x295979[_0x11c9c8(323)]);
  } finally {
    document[_0x11c9c8(421) + _0x11c9c8(486)](_0x295979[_0x11c9c8(550)])[_0x11c9c8(327)][_0x11c9c8(384)] = _0x295979[_0x11c9c8(519)];
  }
}
async function fetchMatches() {
  const _0x2512b5 = _0x13e0f0, _0x190b47 = {cLpDq: function (_0x278896, _0x531c6e) {
    return _0x278896(_0x531c6e);
  }, UjoGt: _0x2512b5(426) + _0x2512b5(566) + _0x2512b5(542) + _0x2512b5(248) + _0x2512b5(425) + _0x2512b5(293), gYTQH: _0x2512b5(266) + _0x2512b5(318) + _0x2512b5(533)}, _0xdd7350 = await _0x190b47[_0x2512b5(361)](fetch, _0x190b47[_0x2512b5(453)]);
  if (!_0xdd7350.ok) throw new Error(_0x190b47[_0x2512b5(563)]);
  const _0x3b387c = await _0xdd7350[_0x2512b5(432)](), _0x2404c9 = await _0x190b47[_0x2512b5(361)](fetchLiveUrls, _0x3b387c);
  return _0x3b387c[_0x2512b5(547)](_0x37853c => {
    const _0x32a936 = _0x2512b5;
    _0x37853c[_0x32a936(552)] = _0x2404c9[_0x37853c[_0x32a936(237)]] || _0x37853c[_0x32a936(475)];
  }), _0x3b387c;
}
async function fetchLiveUrls(_0x1e8999) {
  const _0x5a9f2e = _0x13e0f0, _0x13a86a = {DgqiJ: function (_0x518d10, _0x3a36c9) {
    return _0x518d10(_0x3a36c9);
  }, GnbWZ: function (_0x1eba05, _0x1c7de8) {
    return _0x1eba05 > _0x1c7de8;
  }}, _0x37a4f9 = _0x1e8999[_0x5a9f2e(434)](_0x102d01 => _0x102d01[_0x5a9f2e(237)]), _0x99f4b0 = _0x5a9f2e(387) + _0x37a4f9[_0x5a9f2e(546)](","), _0x1d10f2 = localStorage[_0x5a9f2e(409)](_0x99f4b0);
  if (_0x1d10f2) return JSON[_0x5a9f2e(372)](_0x1d10f2);
  const _0x23b7fa = {}, _0x14cb06 = _0x37a4f9[_0x5a9f2e(434)](async _0x38df4b => {
    const _0x1bd921 = _0x5a9f2e;
    try {
      const _0x2ed00d = await _0x13a86a[_0x1bd921(238)](fetch, _0x1bd921(365) + _0x1bd921(555) + _0x1bd921(352) + _0x1bd921(530) + _0x1bd921(501) + _0x38df4b);
      if (_0x2ed00d.ok) {
        const _0x22e21d = await _0x2ed00d[_0x1bd921(432)]();
        _0x22e21d[_0x1bd921(565)] && _0x13a86a[_0x1bd921(297)](_0x22e21d[_0x1bd921(488)][_0x1bd921(302)], 0) && (_0x23b7fa[_0x38df4b] = _0x22e21d[_0x1bd921(488)][0][_0x1bd921(424) + _0x1bd921(460)][0]);
      }
    } catch (_0x468426) {
      console[_0x1bd921(363)](_0x1bd921(507) + _0x1bd921(239) + _0x1bd921(420) + _0x1bd921(459) + _0x38df4b + ":", _0x468426);
    }
  });
  return await Promise[_0x5a9f2e(493)](_0x14cb06), localStorage[_0x5a9f2e(261)](_0x99f4b0, JSON[_0x5a9f2e(258)](_0x23b7fa)), _0x23b7fa;
}
function renderMatches(_0x27aac2) {
  const _0x31bcf3 = _0x13e0f0, _0x441723 = {YzTOc: function (_0x328552, _0x361753) {
    return _0x328552 >= _0x361753;
  }, LPsbm: function (_0x4bb5b5, _0x51735a) {
    return _0x4bb5b5 <= _0x51735a;
  }, zbGfS: function (_0x4f9ea5, _0x1d9bc3) {
    return _0x4f9ea5 + _0x1d9bc3;
  }, jvnIC: function (_0x4a5e52, _0x13b696) {
    return _0x4a5e52 * _0x13b696;
  }, ABwfw: function (_0x23b4e9, _0x1302bd) {
    return _0x23b4e9 * _0x1302bd;
  }, vMPhK: function (_0xec46e9, _0x4f4d40) {
    return _0xec46e9 * _0x4f4d40;
  }, wUJLh: function (_0x1bc008, _0x4dd9ed) {
    return _0x1bc008 <= _0x4dd9ed;
  }, YRcrq: function (_0x24cc82, _0x308a09) {
    return _0x24cc82 * _0x308a09;
  }, EcnQw: function (_0x4a0326, _0x58c409) {
    return _0x4a0326 && _0x58c409;
  }, RmsUN: function (_0x37ad9c, _0x54383d) {
    return _0x37ad9c && _0x54383d;
  }, CvKsz: function (_0x1ef39d, _0x23e8b0) {
    return _0x1ef39d >= _0x23e8b0;
  }, pRowj: function (_0x1e868c, _0x3b320f) {
    return _0x1e868c + _0x3b320f;
  }, ZiWlN: function (_0x2d9fb3, _0x4f49c9) {
    return _0x2d9fb3 * _0x4f49c9;
  }, KoHHh: function (_0x137af9, _0x5a01eb) {
    return _0x137af9 * _0x5a01eb;
  }, UXFqo: _0x31bcf3(345), WqKNB: _0x31bcf3(560) + _0x31bcf3(489), HmJld: _0x31bcf3(385), VIHIZ: _0x31bcf3(511) + "e", ryyRS: _0x31bcf3(517), tuzrI: _0x31bcf3(468) + "s", osfHj: _0x31bcf3(442), xsDjx: _0x31bcf3(457), tiijo: function (_0x276781, _0x4b4beb) {
    return _0x276781(_0x4b4beb);
  }, RUgjv: _0x31bcf3(291) + _0x31bcf3(340) + _0x31bcf3(538) + _0x31bcf3(346) + _0x31bcf3(226) + _0x31bcf3(334) + _0x31bcf3(469) + _0x31bcf3(551), bLBbr: _0x31bcf3(362) + _0x31bcf3(324)}, _0xe4e0bb = document[_0x31bcf3(421) + _0x31bcf3(486)](_0x441723[_0x31bcf3(252)]);
  _0xe4e0bb[_0x31bcf3(371)] = "", _0x27aac2[_0x31bcf3(354)]((_0x1190af, _0x53c02c) => {
    const _0x1b8151 = _0x31bcf3, _0x410d19 = new Date, _0x81267d = new Date(_0x1190af[_0x1b8151(540)] + "T" + _0x1190af[_0x1b8151(355)]), _0x571e7d = new Date(_0x53c02c[_0x1b8151(540)] + "T" + _0x53c02c[_0x1b8151(355)]), _0x21c265 = _0x441723[_0x1b8151(419)](_0x410d19, _0x81267d) && _0x441723[_0x1b8151(416)](_0x410d19, new Date(_0x441723[_0x1b8151(380)](_0x81267d[_0x1b8151(328)](), _0x441723[_0x1b8151(228)](_0x441723[_0x1b8151(360)](_0x441723[_0x1b8151(246)](2, 60), 60), 1e3)))), _0x29b22a = _0x441723[_0x1b8151(419)](_0x410d19, _0x571e7d) && _0x441723[_0x1b8151(279)](_0x410d19, new Date(_0x441723[_0x1b8151(380)](_0x571e7d[_0x1b8151(328)](), _0x441723[_0x1b8151(246)](_0x441723[_0x1b8151(360)](_0x441723[_0x1b8151(471)](2, 60), 60), 1e3))));
    if (_0x441723[_0x1b8151(490)](_0x21c265, !_0x29b22a)) return -1;
    if (_0x441723[_0x1b8151(557)](!_0x21c265, _0x29b22a)) return 1;
    return 0;
  }), _0x27aac2[_0x31bcf3(547)](_0x2c092d => {
    const _0x3ecda4 = _0x31bcf3, _0x9adb36 = _0x2c092d[_0x3ecda4(552)] || _0x2c092d[_0x3ecda4(475)], _0x2ad1fe = new Date, _0x4cb329 = new Date(_0x2c092d[_0x3ecda4(540)] + "T" + _0x2c092d[_0x3ecda4(355)]), _0x9327a8 = _0x441723[_0x3ecda4(265)](_0x2ad1fe, _0x4cb329) && _0x441723[_0x3ecda4(416)](_0x2ad1fe, new Date(_0x441723[_0x3ecda4(452)](_0x4cb329[_0x3ecda4(328)](), _0x441723[_0x3ecda4(257)](_0x441723[_0x3ecda4(246)](_0x441723[_0x3ecda4(322)](2, 60), 60), 1e3)))), _0x43f269 = document[_0x3ecda4(435) + _0x3ecda4(256)](_0x441723[_0x3ecda4(423)]);
    _0x43f269[_0x3ecda4(510)] = _0x441723[_0x3ecda4(303)], _0x43f269[_0x3ecda4(578) + "te"](_0x441723[_0x3ecda4(286)], _0x2c092d[_0x3ecda4(540)][_0x3ecda4(412) + "e"]()), _0x43f269[_0x3ecda4(578) + "te"](_0x441723[_0x3ecda4(337)], _0x2c092d[_0x3ecda4(379)][_0x3ecda4(412) + "e"]()), _0x43f269[_0x3ecda4(578) + "te"](_0x441723[_0x3ecda4(477)], _0x2c092d[_0x3ecda4(225)][_0x3ecda4(412) + "e"]()), _0x43f269[_0x3ecda4(578) + "te"](_0x441723[_0x3ecda4(407)], _0x9327a8 ? _0x441723[_0x3ecda4(564)] : _0x441723[_0x3ecda4(427)]);
    const _0x497daf = !_0x9327a8 ? _0x3ecda4(291) + _0x3ecda4(561) + _0x3ecda4(536) + _0x3ecda4(448) + _0x2c092d[_0x3ecda4(540)] + "T" + _0x2c092d[_0x3ecda4(355)] + (_0x3ecda4(317) + _0x3ecda4(520) + _0x3ecda4(315)) : "";
    _0x43f269[_0x3ecda4(371)] = _0x3ecda4(296) + _0x3ecda4(370) + _0x3ecda4(464) + _0x3ecda4(568) + _0x3ecda4(422) + _0x3ecda4(370) + _0x3ecda4(370) + _0x3ecda4(291) + _0x3ecda4(330) + _0x3ecda4(538) + _0x3ecda4(531) + _0x3ecda4(559) + _0x3ecda4(527) + _0x441723[_0x3ecda4(284)](formatDate, _0x2c092d[_0x3ecda4(540)]) + (_0x3ecda4(516) + _0x3ecda4(370) + _0x3ecda4(370) + _0x3ecda4(436) + _0x3ecda4(301) + _0x3ecda4(220) + _0x3ecda4(548) + _0x3ecda4(414) + " ") + _0x2c092d[_0x3ecda4(225)] + (_0x3ecda4(516) + _0x3ecda4(370) + _0x3ecda4(370) + _0x3ecda4(436) + _0x3ecda4(431) + _0x3ecda4(231) + _0x3ecda4(392) + _0x3ecda4(446) + _0x3ecda4(305)) + _0x2c092d[_0x3ecda4(355)] + _0x3ecda4(413) + _0x2c092d[_0x3ecda4(379)] + (_0x3ecda4(516) + _0x3ecda4(370) + _0x3ecda4(370) + "  ") + (_0x9327a8 ? _0x441723[_0x3ecda4(349)] : _0x497daf) + (_0x3ecda4(296) + _0x3ecda4(370) + _0x3ecda4(375) + _0x3ecda4(370) + _0x3ecda4(513) + _0x3ecda4(368) + _0x3ecda4(549) + _0x3ecda4(272) + _0x3ecda4(283) + _0x3ecda4(383)) + _0x2c092d[_0x3ecda4(237)] + _0x3ecda4(473) + _0x2c092d[_0x3ecda4(552)] + (_0x3ecda4(521) + _0x3ecda4(370) + _0x3ecda4(219) + _0x3ecda4(538) + _0x3ecda4(244) + _0x3ecda4(502) + _0x3ecda4(229) + _0x3ecda4(370) + _0x3ecda4(370) + _0x3ecda4(584) + _0x3ecda4(370) + _0x3ecda4(541)), _0xe4e0bb[_0x3ecda4(395) + "d"](_0x43f269), _0x9327a8 && _0x441723[_0x3ecda4(284)](sendTelegramNotification, _0x2c092d);
  });
}
function updateCountdown() {
  const _0x352d2a = _0x13e0f0, _0x289efe = {ksWAU: _0x352d2a(255), vAKTC: function (_0x5f0102, _0x24abc9) {
    return _0x5f0102 - _0x24abc9;
  }, qSIJY: function (_0x35437c, _0x3a018d) {
    return _0x35437c <= _0x3a018d;
  }, wQGtC: function (_0x30b3f9, _0x2064ef) {
    return _0x30b3f9 / _0x2064ef;
  }, qvARQ: function (_0x3d9f9d, _0xfdb1a0) {
    return _0x3d9f9d * _0xfdb1a0;
  }, BQCCO: function (_0x413cad, _0x4b00bd) {
    return _0x413cad % _0x4b00bd;
  }, sPuwg: function (_0x525faa, _0x2f5e8d) {
    return _0x525faa * _0x2f5e8d;
  }, tQgCp: function (_0x1556e4, _0x304047) {
    return _0x1556e4 * _0x304047;
  }, vbHWw: function (_0x119ed8, _0x22b848) {
    return _0x119ed8 * _0x22b848;
  }, IVqSg: _0x352d2a(504) + "r]"}, _0x5ddab3 = document[_0x352d2a(269) + _0x352d2a(233)](_0x289efe[_0x352d2a(526)]), _0x53d2c1 = new Date;
  _0x5ddab3[_0x352d2a(547)](_0x47a516 => {
    const _0x50a554 = _0x352d2a, _0x4fb2be = new Date(_0x47a516[_0x50a554(417) + "te"](_0x289efe[_0x50a554(364)])), _0x2fcaab = _0x289efe[_0x50a554(430)](_0x4fb2be, _0x53d2c1);
    if (_0x289efe[_0x50a554(298)](_0x2fcaab, 0)) _0x47a516[_0x50a554(348) + "t"] = ""; else {
      const _0x3acf9d = Math[_0x50a554(445)](_0x289efe[_0x50a554(270)](_0x2fcaab, _0x289efe[_0x50a554(575)](_0x289efe[_0x50a554(575)](1e3, 60), 60))), _0x776a3d = Math[_0x50a554(445)](_0x289efe[_0x50a554(270)](_0x289efe[_0x50a554(522)](_0x2fcaab, _0x289efe[_0x50a554(575)](_0x289efe[_0x50a554(404)](1e3, 60), 60)), _0x289efe[_0x50a554(428)](1e3, 60))), _0x73b1ef = Math[_0x50a554(445)](_0x289efe[_0x50a554(270)](_0x289efe[_0x50a554(522)](_0x2fcaab, _0x289efe[_0x50a554(496)](1e3, 60)), 1e3));
      _0x47a516[_0x50a554(348) + "t"] = _0x3acf9d + "h " + _0x776a3d + "m " + _0x73b1ef + "s";
    }
  });
}
function _0x54dc() {
  const _0xf0edaa = ["bsPPx", "scrollToTo", "utton clas", "MDeXT", "          ", "innerHTML", "parse", "wuzWC", "none", " </div>\n  ", "wYlec", "20scFCIO", "channelsLi", "league", "zbGfS", "19266qTTwXh", "GET", "Match('", "display", "data-date", "es:", "liveUrls-", "ioQDP", "DKgeu", "yQrLJ", "XxMJS", 'ss="fas fa', "Error send", "DDlat", "appendChil", "63lXpQrw", "VpWyr", "aQpBU", 'lue="">Fil', "mglxA", "1382513dRZvuR", "IKuBm", "July", "sPuwg", "show", "XcTFD", "tuzrI", "NTpTk", "getItem", "UvySH", "e</option>", "toLowerCas", " | ", 'sers"></i>', "ication:", "LPsbm", "getAttribu", "filter", "YzTOc", " URL for m", "getElement", 'nfo">\n    ', "UXFqo", "streaming_", "io/schedul", "https://wa", "xsDjx", "tQgCp", "load chann", "vAKTC", 'ass="detai', "json", "418708UpDbGc", "map", "createElem", "  <span cl", "remove", "teamSearch", "matchesTim", "WuznM", "3184044xDRZVr", "live", "/sendMessa", "zvc2_I5WDk", "floor", '-clock"></', "getFullYea", 'imer="', "DOMContent", "🚨 Live Now", "agvzQ", "pRowj", "UjoGt", "start", "Swrfq", "vyjlT", "upcoming", "loader", "atchId ", "urls", "FiGMF", "fqMrD", "leagueFilt", " <div clas", "KPlbc", "els:", "pQMyS", "data-statu", "ve Now</sp", "includes", "YRcrq", "add", "', '", "Knrag", "m3u8Url", "kVgON", "ryyRS", "WVbux", "scrollInto", "iOPBl", ":AAGG4SAfi", "toHzv", "aEVAT", "gnRSL", "evzJy", "ById", "VMwia", "result", "ard", "EcnQw", "691479TZKgps", "VsAuG", "all", "December", "nBoEO", "vbHWw", "JKEoR", "setup", "16:9", "bHbPC", "atchId=", '-circle"><', "aXmGo", "[data-time", "jwplayerCo", "IjyAW", "Failed to ", "XfzvB", "7IawvKH", "className", "data-leagu", "dHRdL", "        <b", "zrVAG", "yfqeb", "</span>\n  ", "data-teams", "2524938QZFlQJ", "IcHTg", " Soon...</", "')\">\n     ", "BQCCO", "VBpXT", "arIYR", "October", "IVqSg", "</i> ", "<option va", "April", "channels?m", "as fa-cale", "\nTime: ", " not ok", " <button o", "8LWnlDY", 'wn" data-t', "fyTcm", 'i class="f', "CsuEa", "date", "      ", "thub.io/bo", "AYNpb", "name", "')\">", "join", "forEach", '="fas fa-u', 's="watch-b', "MJlCx", "an>", "liveUrl", "xBvOO", "March", "i.90min.to", "lXbBg", "RmsUN", "RCnjL", 'ndar-alt">', "schedule-c", 's="countdo', "XnBLB", "gYTQH", "osfHj", "status", "rtakita.gi", "June", 's="match-i', "MUKEo", "FeLvo", "ter by Lea", "November", "vIXan", "bBjQn", "qvARQ", "ayChannel(", "1391979650", "setAttribu", "card", "iyoni", "duYzy", "7598004626", "dzgiH", "</button>\n", "tcxMq", "send notif", "i.telegram", "flex", "iZ76AHaEWo", "dWYji", "onscroll", "         <", '"><i class', "PhdRU", "TPQQB", "ccessfully", "bwNfB", "teams", "dcast-towe", "xDBMp", "jvnIC", "/i> Watch\n", ".gd/EtS3Gy", 'ls"><i cla', "AseoM", "torAll", "fHmij", "JwbqC", "PNlUz", "videoId", "DgqiJ", "fetch live", "DgHhN", "pewfa", "pButton", "channelIte", "as fa-play", "load match", "vMPhK", "Loaded", "la.github.", "MoXBi", "value", 'nclick="pl', "bLBbr", "Notificati", "February", "data-timer", "ent", "ZiWlN", "stringify", "on sent su", "StwLh", "setItem", "100%", "May", "ilifE", "CvKsz", "Network re", "35JpfIUL", "xmVxc", "querySelec", "wQGtC", "&text=", 'utton" onc', "FQRQz", "classList", "cation:", "23795c", "PqEBc", "apply", "wUJLh", "documentEl", "ter by Dat", "noMatches", 'lick="play', "tiijo", "Sgigq", "HmJld", "FJVqv", "input", "ykEmt", "matches", "<span clas", "dXLlP", "e.json", "January", "smooth", "\n         ", "GnbWZ", "qSIJY", "View", "scrollTop", 'ass="teams', "length", "WqKNB", "ing notifi", "i> ", "XKYOQ", "xtpSA", "August", "getDate", "block", "MCpzN", "addEventLi", "\nLeague: ", "change", "span>", "https://da", '">Starting', "sponse was", "1248168uwhfWe", "mqNDv", "September", "KoHHh", "srMqR", "ntainer", "option", "getMonth", "style", "getTime", "dateFilter", 's="date"><', "log", "catch", "CqwUd", 'r"></i> Li', "cnwSQ", "stener", "VIHIZ", "tZAMF", "BtPAU", 's="live"><', "TPnpX", " 🚨\nDate: ", "then", "ge?chat_id", "div", "as fa-broa", "Hsokt", "textConten", "RUgjv", "ement", "body", "/v1/match/", ".org/bot", "sort", "time", "gue</optio", ".schedule-", "aCFHE", "from", "ABwfw", "cLpDq", "scheduleCo", "error", "ksWAU", "https://ap"];
  _0x54dc = function () {
    return _0xf0edaa;
  };
  return _0x54dc();
}
function playMatch(_0x39d3ac, _0x15b3ae) {
  const _0x30203a = _0x13e0f0, _0xac423a = {lXbBg: function (_0x390576, _0x43b2c3) {
    return _0x390576(_0x43b2c3);
  }, JwbqC: _0x30203a(505) + _0x30203a(324), PNlUz: _0x30203a(262), gnRSL: _0x30203a(499), dHRdL: _0x30203a(316) + _0x30203a(230), fyTcm: _0x30203a(295), dXLlP: _0x30203a(454), aQpBU: function (_0x50a8d9, _0x163718) {
    return _0x50a8d9(_0x163718);
  }};
  _0xac423a[_0x30203a(556)](jwplayer, _0xac423a[_0x30203a(235)])[_0x30203a(498)]({file: _0x15b3ae, width: _0xac423a[_0x30203a(236)], aspectratio: _0xac423a[_0x30203a(484)], image: _0xac423a[_0x30203a(512)]}), document[_0x30203a(421) + _0x30203a(486)](_0xac423a[_0x30203a(235)])[_0x30203a(479) + _0x30203a(299)]({behavior: _0xac423a[_0x30203a(537)], block: _0xac423a[_0x30203a(292)]}), _0xac423a[_0x30203a(398)](loadChannels, _0x39d3ac);
}
async function loadChannels(_0x3faef4) {
  const _0x2a330e = _0x13e0f0, _0x2ba40e = {WVbux: function (_0x5902d7, _0x190202) {
    return _0x5902d7(_0x190202);
  }, iyoni: _0x2a330e(266) + _0x2a330e(318) + _0x2a330e(533), KPlbc: function (_0x1b9585, _0x132c7b) {
    return _0x1b9585 > _0x132c7b;
  }, xmVxc: function (_0x50de23, _0x1e7440) {
    return _0x50de23(_0x1e7440);
  }, fHmij: _0x2a330e(378) + "st", xDBMp: _0x2a330e(374), dWYji: _0x2a330e(507) + _0x2a330e(429) + _0x2a330e(466)};
  try {
    const _0x625b64 = await _0x2ba40e[_0x2a330e(478)](fetch, _0x2a330e(365) + _0x2a330e(555) + _0x2a330e(352) + _0x2a330e(530) + _0x2a330e(501) + _0x3faef4);
    if (!_0x625b64.ok) throw new Error(_0x2ba40e[_0x2a330e(580)]);
    const _0x4c4402 = await _0x625b64[_0x2a330e(432)]();
    _0x4c4402[_0x2a330e(565)] && _0x2ba40e[_0x2a330e(465)](_0x4c4402[_0x2a330e(488)][_0x2a330e(302)], 0) ? _0x2ba40e[_0x2a330e(268)](renderChannels, _0x4c4402[_0x2a330e(488)]) : document[_0x2a330e(421) + _0x2a330e(486)](_0x2ba40e[_0x2a330e(234)])[_0x2a330e(327)][_0x2a330e(384)] = _0x2ba40e[_0x2a330e(227)];
  } catch (_0x476204) {
    console[_0x2a330e(363)](_0x2ba40e[_0x2a330e(217)], _0x476204), document[_0x2a330e(421) + _0x2a330e(486)](_0x2ba40e[_0x2a330e(234)])[_0x2a330e(327)][_0x2a330e(384)] = _0x2ba40e[_0x2a330e(227)];
  }
}
function _0x1858(_0x23ef0d, _0x9f2c87) {
  const _0x947877 = _0x54dc();
  return _0x1858 = function (_0x39d23e, _0x53633f) {
    _0x39d23e = _0x39d23e - 213;
    let _0x1a1e3c = _0x947877[_0x39d23e];
    return _0x1a1e3c;
  }, _0x1858(_0x23ef0d, _0x9f2c87);
}
function renderChannels(_0x5beac4) {
  const _0x5a8087 = _0x13e0f0, _0x5dc2be = {nBoEO: _0x5a8087(243) + "ms", MUKEo: _0x5a8087(378) + "st", aEVAT: _0x5a8087(310)}, _0x99512e = document[_0x5a8087(421) + _0x5a8087(486)](_0x5dc2be[_0x5a8087(495)]);
  _0x99512e[_0x5a8087(371)] = "", _0x5beac4[_0x5a8087(547)](_0x4015aa => {
    const _0x164521 = _0x5a8087, _0xb012a0 = document[_0x164521(435) + _0x164521(256)]("li");
    _0xb012a0[_0x164521(371)] = _0x164521(296) + _0x164521(370) + _0x164521(534) + _0x164521(251) + _0x164521(576) + "'" + _0x4015aa[_0x164521(424) + _0x164521(460)][0] + _0x164521(545) + _0x4015aa[_0x164521(544)] + (_0x164521(584) + _0x164521(370) + _0x164521(541)), _0x99512e[_0x164521(395) + "d"](_0xb012a0);
  }), document[_0x5a8087(421) + _0x5a8087(486)](_0x5dc2be[_0x5a8087(569)])[_0x5a8087(327)][_0x5a8087(384)] = _0x5dc2be[_0x5a8087(483)];
}
function playChannel(_0x2ce672) {
  const _0x18f303 = _0x13e0f0, _0x809cd0 = {XKYOQ: function (_0x5ea48f, _0x19c64d) {
    return _0x5ea48f(_0x19c64d);
  }, IKuBm: _0x18f303(505) + _0x18f303(324), bHbPC: _0x18f303(262), xtpSA: _0x18f303(499), agvzQ: _0x18f303(316) + _0x18f303(230), bwNfB: _0x18f303(295), FJVqv: _0x18f303(454)};
  _0x809cd0[_0x18f303(306)](jwplayer, _0x809cd0[_0x18f303(402)])[_0x18f303(498)]({file: _0x2ce672, width: _0x809cd0[_0x18f303(500)], aspectratio: _0x809cd0[_0x18f303(307)], image: _0x809cd0[_0x18f303(451)]}), document[_0x18f303(421) + _0x18f303(486)](_0x809cd0[_0x18f303(402)])[_0x18f303(479) + _0x18f303(299)]({behavior: _0x809cd0[_0x18f303(224)], block: _0x809cd0[_0x18f303(287)]});
}
function populateFilters(_0x7dbb0a) {
  const _0x55feb3 = _0x13e0f0, _0x3a9588 = {wuzWC: _0x55feb3(325), Sgigq: function (_0x96c64d, _0x33f141) {
    return _0x96c64d(_0x33f141);
  }, StwLh: _0x55feb3(329), cnwSQ: _0x55feb3(463) + "er", bBjQn: _0x55feb3(528) + _0x55feb3(399) + _0x55feb3(281) + _0x55feb3(411), NTpTk: _0x55feb3(528) + _0x55feb3(399) + _0x55feb3(571) + _0x55feb3(356) + "n>"}, _0x156ed9 = document[_0x55feb3(421) + _0x55feb3(486)](_0x3a9588[_0x55feb3(260)]), _0x25f450 = document[_0x55feb3(421) + _0x55feb3(486)](_0x3a9588[_0x55feb3(335)]);
  _0x156ed9[_0x55feb3(371)] = _0x3a9588[_0x55feb3(574)], _0x25f450[_0x55feb3(371)] = _0x3a9588[_0x55feb3(408)];
  const _0x1d23d3 = [...new Set(_0x7dbb0a[_0x55feb3(434)](_0x4db953 => _0x4db953[_0x55feb3(540)]))], _0x135753 = [...new Set(_0x7dbb0a[_0x55feb3(434)](_0x20f314 => _0x20f314[_0x55feb3(379)]))];
  _0x1d23d3[_0x55feb3(547)](_0x2867f7 => {
    const _0x5dda1c = _0x55feb3, _0x42261f = document[_0x5dda1c(435) + _0x5dda1c(256)](_0x3a9588[_0x5dda1c(373)]);
    _0x42261f[_0x5dda1c(250)] = _0x2867f7[_0x5dda1c(412) + "e"](), _0x42261f[_0x5dda1c(348) + "t"] = _0x3a9588[_0x5dda1c(285)](formatDate, _0x2867f7), _0x156ed9[_0x5dda1c(395) + "d"](_0x42261f);
  }), _0x135753[_0x55feb3(547)](_0xb3a325 => {
    const _0x576780 = _0x55feb3, _0x5c78f2 = document[_0x576780(435) + _0x576780(256)](_0x3a9588[_0x576780(373)]);
    _0x5c78f2[_0x576780(250)] = _0xb3a325[_0x576780(412) + "e"](), _0x5c78f2[_0x576780(348) + "t"] = _0xb3a325, _0x25f450[_0x576780(395) + "d"](_0x5c78f2);
  });
}
function filterMatches() {
  const _0x47004a = _0x13e0f0, _0x5d2256 = {Knrag: _0x47004a(385), WuznM: _0x47004a(511) + "e", ioQDP: _0x47004a(517), MCpzN: function (_0x2759ae, _0x53b4e0) {
    return _0x2759ae === _0x53b4e0;
  }, arIYR: function (_0x48ebbc, _0x229aba) {
    return _0x48ebbc === _0x229aba;
  }, yfqeb: function (_0x37c275, _0x92a8e0) {
    return _0x37c275 && _0x92a8e0;
  }, wYlec: _0x47004a(468) + "s", Hsokt: function (_0x14a280, _0x170d45) {
    return _0x14a280 === _0x170d45;
  }, DDlat: _0x47004a(442), VMwia: function (_0x4534d9, _0x1952ef) {
    return _0x4534d9 !== _0x1952ef;
  }, duYzy: _0x47004a(215), FQRQz: _0x47004a(329), kVgON: _0x47004a(463) + "er", aCFHE: _0x47004a(438), FeLvo: _0x47004a(357) + _0x47004a(579), tcxMq: _0x47004a(282), XnBLB: function (_0x4f5a9e, _0x555bb9) {
    return _0x4f5a9e === _0x555bb9;
  }, XxMJS: _0x47004a(405)}, _0x36e464 = document[_0x47004a(421) + _0x47004a(486)](_0x5d2256[_0x47004a(273)])[_0x47004a(250)][_0x47004a(412) + "e"](), _0x4266f2 = document[_0x47004a(421) + _0x47004a(486)](_0x5d2256[_0x47004a(476)])[_0x47004a(250)][_0x47004a(412) + "e"](), _0x9ca5c9 = document[_0x47004a(421) + _0x47004a(486)](_0x5d2256[_0x47004a(358)])[_0x47004a(250)][_0x47004a(412) + "e"](), _0x54320a = document[_0x47004a(269) + _0x47004a(233)](_0x5d2256[_0x47004a(570)]);
  let _0x1055c8 = 0;
  const _0x1cf66b = Array[_0x47004a(359)](_0x54320a)[_0x47004a(418)](_0x541aad => {
    const _0x17c398 = _0x47004a, _0x41f14b = _0x541aad[_0x17c398(417) + "te"](_0x5d2256[_0x17c398(474)]), _0x29e6b5 = _0x541aad[_0x17c398(417) + "te"](_0x5d2256[_0x17c398(440)]), _0xaa2dec = _0x541aad[_0x17c398(417) + "te"](_0x5d2256[_0x17c398(388)]), _0x380c8a = !_0x36e464 || _0x5d2256[_0x17c398(311)](_0x41f14b, _0x36e464), _0x47b7c7 = !_0x4266f2 || _0x5d2256[_0x17c398(524)](_0x29e6b5, _0x4266f2), _0x39062d = !_0x9ca5c9 || _0xaa2dec[_0x17c398(470)](_0x9ca5c9);
    return _0x5d2256[_0x17c398(515)](_0x380c8a, _0x47b7c7) && _0x39062d;
  })[_0x47004a(354)]((_0x25ac0e, _0x2b960a) => {
    const _0x2d678e = _0x47004a, _0x2e2971 = _0x25ac0e[_0x2d678e(417) + "te"](_0x5d2256[_0x2d678e(376)]), _0x11ee44 = _0x2b960a[_0x2d678e(417) + "te"](_0x5d2256[_0x2d678e(376)]);
    if (_0x5d2256[_0x2d678e(347)](_0x2e2971, _0x5d2256[_0x2d678e(394)]) && _0x5d2256[_0x2d678e(487)](_0x11ee44, _0x5d2256[_0x2d678e(394)])) return -1;
    if (_0x5d2256[_0x2d678e(487)](_0x2e2971, _0x5d2256[_0x2d678e(394)]) && _0x5d2256[_0x2d678e(524)](_0x11ee44, _0x5d2256[_0x2d678e(394)])) return 1;
    return 0;
  });
  _0x54320a[_0x47004a(547)](_0x530e7a => _0x530e7a[_0x47004a(327)][_0x47004a(384)] = _0x47004a(374)), _0x1cf66b[_0x47004a(547)](_0x31f7e6 => {
    const _0xabda6c = _0x47004a;
    _0x31f7e6[_0xabda6c(327)][_0xabda6c(384)] = _0x5d2256[_0xabda6c(581)], _0x1055c8++;
  });
  const _0x4abd4c = document[_0x47004a(421) + _0x47004a(486)](_0x5d2256[_0x47004a(585)]);
  _0x5d2256[_0x47004a(562)](_0x1055c8, 0) ? _0x4abd4c[_0x47004a(274)][_0x47004a(472)](_0x5d2256[_0x47004a(391)]) : _0x4abd4c[_0x47004a(274)][_0x47004a(437)](_0x5d2256[_0x47004a(391)]);
}
function resetFilters() {
  const _0xd753aa = _0x13e0f0, _0x32e972 = {iOPBl: _0xd753aa(329), TPQQB: _0xd753aa(463) + "er", tZAMF: _0xd753aa(438), toHzv: function (_0x1f32fa) {
    return _0x1f32fa();
  }};
  document[_0xd753aa(421) + _0xd753aa(486)](_0x32e972[_0xd753aa(480)])[_0xd753aa(250)] = "", document[_0xd753aa(421) + _0xd753aa(486)](_0x32e972[_0xd753aa(222)])[_0xd753aa(250)] = "", document[_0xd753aa(421) + _0xd753aa(486)](_0x32e972[_0xd753aa(338)])[_0xd753aa(250)] = "", _0x32e972[_0xd753aa(482)](filterMatches);
}
function debounce(_0x1dff3c, _0x389897) {
  const _0x2f1f1b = {mglxA: function (_0x4704a9, _0x404438) {
    return _0x4704a9(_0x404438);
  }, MoXBi: function (_0x22e104, _0x9526e4, _0x3b518a) {
    return _0x22e104(_0x9526e4, _0x3b518a);
  }};
  let _0x25ae43;
  return function (..._0x4ab7b2) {
    const _0x55307b = _0x1858;
    _0x2f1f1b[_0x55307b(400)](clearTimeout, _0x25ae43), _0x25ae43 = _0x2f1f1b[_0x55307b(249)](setTimeout, () => _0x1dff3c[_0x55307b(278)](this, _0x4ab7b2), _0x389897);
  };
}
document[_0x13e0f0(421) + _0x13e0f0(486)](_0x13e0f0(438))[_0x13e0f0(312) + _0x13e0f0(336)](_0x13e0f0(288), debounce(filterMatches, 300)), document[_0x13e0f0(421) + _0x13e0f0(486)](_0x13e0f0(329))[_0x13e0f0(312) + _0x13e0f0(336)](_0x13e0f0(314), filterMatches), document[_0x13e0f0(421) + _0x13e0f0(486)](_0x13e0f0(463) + "er")[_0x13e0f0(312) + _0x13e0f0(336)](_0x13e0f0(314), filterMatches), document[_0x13e0f0(312) + _0x13e0f0(336)](_0x13e0f0(449) + _0x13e0f0(247), loadMatches), window[_0x13e0f0(218)] = function () {
  const _0x5b0850 = _0x13e0f0, _0x14f7dd = {Swrfq: function (_0x369437) {
    return _0x369437();
  }};
  _0x14f7dd[_0x5b0850(455)](scrollFunction);
};
function scrollFunction() {
  const _0x5de5b1 = _0x13e0f0, _0x40eab8 = {vIXan: function (_0x5174a5, _0x3dfb4e) {
    return _0x5174a5 > _0x3dfb4e;
  }, PqEBc: function (_0x472e36, _0x1dec1a) {
    return _0x472e36 > _0x1dec1a;
  }, fqMrD: _0x5de5b1(367) + _0x5de5b1(242), JKEoR: _0x5de5b1(310), FiGMF: _0x5de5b1(374)};
  _0x40eab8[_0x5de5b1(573)](document[_0x5de5b1(351)][_0x5de5b1(300)], 20) || _0x40eab8[_0x5de5b1(277)](document[_0x5de5b1(280) + _0x5de5b1(350)][_0x5de5b1(300)], 20) ? document[_0x5de5b1(421) + _0x5de5b1(486)](_0x40eab8[_0x5de5b1(462)])[_0x5de5b1(327)][_0x5de5b1(384)] = _0x40eab8[_0x5de5b1(497)] : document[_0x5de5b1(421) + _0x5de5b1(486)](_0x40eab8[_0x5de5b1(462)])[_0x5de5b1(327)][_0x5de5b1(384)] = _0x40eab8[_0x5de5b1(461)];
}
function scrollToTop() {
  const _0x1bddea = _0x13e0f0;
  document[_0x1bddea(351)][_0x1bddea(300)] = 0, document[_0x1bddea(280) + _0x1bddea(350)][_0x1bddea(300)] = 0;
}
setInterval(loadMatches, 3e5);
function sendTelegramNotification(_0x402dd4) {
  const _0x54f6d8 = _0x13e0f0, _0xa50cd8 = {IjyAW: _0x54f6d8(253) + _0x54f6d8(259) + _0x54f6d8(223), XfzvB: _0x54f6d8(507) + _0x54f6d8(213) + _0x54f6d8(415), DKgeu: _0x54f6d8(393) + _0x54f6d8(304) + _0x54f6d8(275), VsAuG: function (_0x4c55b7, _0x2053f6) {
    return _0x4c55b7(_0x2053f6);
  }, yQrLJ: function (_0x18a9bb, _0x5b5970, _0x6d5447) {
    return _0x18a9bb(_0x5b5970, _0x6d5447);
  }, evzJy: _0x54f6d8(382)}, _0x107053 = _0x54f6d8(450) + ": " + _0x402dd4[_0x54f6d8(225)] + _0x54f6d8(342) + _0xa50cd8[_0x54f6d8(492)](formatDate, _0x402dd4[_0x54f6d8(540)]) + _0x54f6d8(532) + _0x402dd4[_0x54f6d8(355)] + _0x54f6d8(313) + _0x402dd4[_0x54f6d8(379)], _0x1cb382 = _0x54f6d8(365) + _0x54f6d8(214) + _0x54f6d8(353) + telegramBotToken + (_0x54f6d8(443) + _0x54f6d8(344) + "=") + telegramChatId + _0x54f6d8(271) + _0xa50cd8[_0x54f6d8(492)](encodeURIComponent, _0x107053);
  _0xa50cd8[_0x54f6d8(390)](fetch, _0x1cb382, {method: _0xa50cd8[_0x54f6d8(485)]})[_0x54f6d8(343)](_0x3421b6 => _0x3421b6[_0x54f6d8(432)]())[_0x54f6d8(343)](_0x295b95 => {
    const _0x305757 = _0x54f6d8;
    _0x295b95.ok ? console[_0x305757(331)](_0xa50cd8[_0x305757(506)]) : console[_0x305757(363)](_0xa50cd8[_0x305757(508)], _0x295b95);
  })[_0x54f6d8(332)](_0x44798d => {
    const _0xb706b2 = _0x54f6d8;
    console[_0xb706b2(363)](_0xa50cd8[_0xb706b2(389)], _0x44798d);
  });
}
