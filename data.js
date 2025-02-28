function _0x5c61(_0x65e34b, _0x3f5410) {
  const _0x40e3f8 = _0x48fc();
  return _0x5c61 = function (_0x347fcf, _0x15bd71) {
    _0x347fcf = _0x347fcf - 218;
    let _0x1c4be3 = _0x40e3f8[_0x347fcf];
    return _0x1c4be3;
  }, _0x5c61(_0x65e34b, _0x3f5410);
}
const _0x1fa630 = _0x5c61;
(function (_0x10ec4d, _0x6336c6) {
  const _0xb61ab9 = _0x5c61, _0x4d3eae = _0x10ec4d();
  while (true) {
    try {
      const _0x13d335 = -parseInt(_0xb61ab9(597)) / 1 + parseInt(_0xb61ab9(272)) / 2 * (parseInt(_0xb61ab9(362)) / 3) + parseInt(_0xb61ab9(502)) / 4 + -parseInt(_0xb61ab9(491)) / 5 + parseInt(_0xb61ab9(577)) / 6 * (parseInt(_0xb61ab9(402)) / 7) + parseInt(_0xb61ab9(463)) / 8 * (parseInt(_0xb61ab9(221)) / 9) + -parseInt(_0xb61ab9(398)) / 10;
      if (_0x13d335 === _0x6336c6) break; else _0x4d3eae.push(_0x4d3eae.shift());
    } catch (_0x2b37c4) {
      _0x4d3eae.push(_0x4d3eae.shift());
    }
  }
}(_0x48fc, 801748));
const telegramBotToken = _0x1fa630(557) + _0x1fa630(317) + _0x1fa630(321) + _0x1fa630(416) + _0x1fa630(578), telegramChatId = _0x1fa630(519), sentNotifications = new Set;
function formatDate(_0x576014) {
  const _0x232370 = _0x1fa630, _0x32410f = {LpMct: _0x232370(223), ftYwR: _0x232370(574), mZAdr: _0x232370(243), AoOGu: _0x232370(247), TtYpS: _0x232370(341), YNkwz: _0x232370(470), Vumss: _0x232370(443), mgBDv: _0x232370(437), vXjQy: _0x232370(234), Rgutb: _0x232370(374), QfdQm: _0x232370(516), VrXEh: _0x232370(413)}, _0x7f8170 = [_0x32410f[_0x232370(553)], _0x32410f[_0x232370(483)], _0x32410f[_0x232370(348)], _0x32410f[_0x232370(395)], _0x32410f[_0x232370(263)], _0x32410f[_0x232370(333)], _0x32410f[_0x232370(388)], _0x32410f[_0x232370(573)], _0x32410f[_0x232370(530)], _0x32410f[_0x232370(602)], _0x32410f[_0x232370(513)], _0x32410f[_0x232370(219)]], _0x30621a = new Date(_0x576014), _0x5dd8ef = _0x30621a[_0x232370(280)](), _0x38323b = _0x7f8170[_0x30621a[_0x232370(476)]()], _0x16dcca = _0x30621a[_0x232370(527) + "r"]();
  return _0x5dd8ef + " " + _0x38323b + " " + _0x16dcca;
}
async function loadMatches() {
  const _0x284f48 = _0x1fa630, _0x450105 = {aTwMZ: _0x284f48(552), IOeHS: _0x284f48(296), ABlbf: function (_0x57bcaa) {
    return _0x57bcaa();
  }, SbNUU: function (_0x2fcb15, _0x414765) {
    return _0x2fcb15(_0x414765);
  }, oLcEh: function (_0x177fed, _0x325e20) {
    return _0x177fed(_0x325e20);
  }, jtDlU: function (_0x457833) {
    return _0x457833();
  }, xMosn: function (_0x2679e2) {
    return _0x2679e2();
  }, zpawS: function (_0x44fe59, _0x516fcb, _0x1df141) {
    return _0x44fe59(_0x516fcb, _0x1df141);
  }, XGxrs: _0x284f48(353) + _0x284f48(256) + _0x284f48(421), yJOtJ: _0x284f48(518), ZdTdy: _0x284f48(523), AGinr: _0x284f48(324)};
  try {
    document[_0x284f48(609) + _0x284f48(466)](_0x450105[_0x284f48(460)])[_0x284f48(235)][_0x284f48(446)] = _0x450105[_0x284f48(445)];
    const _0x42a58f = await _0x450105[_0x284f48(233)](fetchMatches);
    _0x450105[_0x284f48(627)](renderMatches, _0x42a58f), _0x450105[_0x284f48(498)](populateFilters, _0x42a58f), _0x450105[_0x284f48(586)](filterMatches), _0x450105[_0x284f48(250)](updateCountdown), _0x450105[_0x284f48(499)](setInterval, updateCountdown, 1e3);
  } catch (_0x4f4540) {
    console[_0x284f48(301)](_0x450105[_0x284f48(611)], _0x4f4540), document[_0x284f48(609) + _0x284f48(466)](_0x450105[_0x284f48(410)])[_0x284f48(509)][_0x284f48(473)](_0x450105[_0x284f48(494)]);
  } finally {
    document[_0x284f48(609) + _0x284f48(466)](_0x450105[_0x284f48(460)])[_0x284f48(235)][_0x284f48(446)] = _0x450105[_0x284f48(438)];
  }
}
async function fetchMatches() {
  const _0x37d170 = _0x1fa630, _0x48216a = {QaGrQ: function (_0x5db09f, _0x548006) {
    return _0x5db09f(_0x548006);
  }, HcOKp: _0x37d170(455) + _0x37d170(346) + _0x37d170(262) + _0x37d170(299) + _0x37d170(521) + _0x37d170(444), AcjVh: _0x37d170(308) + _0x37d170(442) + _0x37d170(226)}, _0x11726b = await _0x48216a[_0x37d170(458)](fetch, _0x48216a[_0x37d170(281)]);
  if (!_0x11726b.ok) throw new Error(_0x48216a[_0x37d170(508)]);
  const _0x1dcebe = await _0x11726b[_0x37d170(422)](), _0x5cbc8b = await _0x48216a[_0x37d170(458)](fetchLiveUrls, _0x1dcebe);
  return _0x1dcebe[_0x37d170(287)](_0x4b6218 => {
    const _0x6f5cbb = _0x37d170;
    _0x4b6218[_0x6f5cbb(300)] = _0x5cbc8b[_0x4b6218[_0x6f5cbb(338)]] || _0x4b6218[_0x6f5cbb(559)] || _0x4b6218[_0x6f5cbb(356)];
  }), _0x1dcebe;
}
async function fetchLiveUrls(_0x4568d7) {
  const _0x4ee200 = _0x1fa630, _0x34b5a2 = {EBMQe: function (_0x4f1b66, _0x36ad84) {
    return _0x4f1b66(_0x36ad84);
  }, PWVeN: function (_0x4744cf, _0x3ffdcc) {
    return _0x4744cf > _0x3ffdcc;
  }, ROVRZ: function (_0x5e586c, _0x38fa29) {
    return _0x5e586c === _0x38fa29;
  }, wjfcU: _0x4ee200(303)}, _0x180a05 = _0x4568d7[_0x4ee200(342)](_0x2f4050 => _0x2f4050[_0x4ee200(338)]), _0x54860b = {}, _0x485ddc = _0x180a05[_0x4ee200(342)](async _0x467817 => {
    const _0x277f45 = _0x4ee200;
    try {
      const _0x246d1f = await _0x34b5a2[_0x277f45(355)](fetch, _0x277f45(543) + _0x277f45(406) + _0x277f45(544) + _0x277f45(535) + _0x277f45(381) + _0x467817);
      if (_0x246d1f.ok) {
        const _0xf8f19f = await _0x246d1f[_0x277f45(422)]();
        _0xf8f19f[_0x277f45(366)] && _0x34b5a2[_0x277f45(249)](_0xf8f19f[_0x277f45(464)][_0x277f45(492)], 0) && (_0x54860b[_0x467817] = _0xf8f19f[_0x277f45(464)][0][_0x277f45(515) + _0x277f45(269)][0]);
      }
    } catch (_0x542a5a) {
      console[_0x277f45(301)](_0x277f45(353) + _0x277f45(384) + _0x277f45(239) + _0x277f45(259) + _0x467817 + ":", _0x542a5a);
    }
    try {
      const _0x5c614f = await _0x34b5a2[_0x277f45(355)](fetch, _0x277f45(261) + _0x277f45(325) + _0x277f45(431) + _0x277f45(489) + _0x277f45(340) + _0x277f45(383) + _0x467817);
      if (_0x5c614f.ok) {
        const _0x39ea9c = await _0x5c614f[_0x277f45(422)]();
        _0x34b5a2[_0x277f45(315)](_0x39ea9c[_0x277f45(326)], _0x34b5a2[_0x277f45(454)]) && _0x39ea9c[_0x277f45(558)][_0x277f45(464)][_0x277f45(618)][_0x277f45(575)] && (_0x54860b[_0x467817] = _0x39ea9c[_0x277f45(558)][_0x277f45(464)][_0x277f45(618)][_0x277f45(575)]);
      }
    } catch (_0x31d056) {
      console[_0x277f45(301)](_0x277f45(353) + _0x277f45(579) + _0x277f45(423) + _0x277f45(259) + _0x467817 + ":", _0x31d056);
    }
  });
  return await Promise[_0x4ee200(465)](_0x485ddc), _0x54860b;
}
function renderMatches(_0x25c9cc) {
  const _0x104b57 = _0x1fa630, _0x47d983 = {Pjjda: function (_0x324c04, _0x146fda) {
    return _0x324c04 >= _0x146fda;
  }, iitJK: function (_0x1d304e, _0x50c7df) {
    return _0x1d304e <= _0x50c7df;
  }, DqwXx: function (_0x232ec5, _0x3404fd) {
    return _0x232ec5 + _0x3404fd;
  }, sZWdt: function (_0x518bc4, _0x1daefc) {
    return _0x518bc4 * _0x1daefc;
  }, IgRdp: function (_0x2dee47, _0x401366) {
    return _0x2dee47 * _0x401366;
  }, eASqT: function (_0x28279f, _0x1bffd0) {
    return _0x28279f * _0x1bffd0;
  }, JJNHA: function (_0x4b1a42, _0x3b0025) {
    return _0x4b1a42 * _0x3b0025;
  }, SkuDh: function (_0x59ed4d, _0x253ac9) {
    return _0x59ed4d * _0x253ac9;
  }, FmqIw: function (_0x42eec5, _0x448a8d) {
    return _0x42eec5 && _0x448a8d;
  }, cfIxw: function (_0x565b44, _0x544930) {
    return _0x565b44 + _0x544930;
  }, grbdA: function (_0x5bed1c, _0x3efd1f) {
    return _0x5bed1c * _0x3efd1f;
  }, ZcTov: function (_0x286733, _0x5c8538) {
    return _0x286733 * _0x5c8538;
  }, wNVXC: _0x104b57(401), bZIJK: _0x104b57(628) + _0x104b57(253), mAOjg: _0x104b57(525), yPbPA: _0x104b57(425) + "e", YgTdz: _0x104b57(270), Lwwve: _0x104b57(623) + "s", nadjY: _0x104b57(561), nGAls: _0x104b57(532), BxmnG: function (_0x596fe3, _0x4f9465) {
    return _0x596fe3(_0x4f9465);
  }, OuSAx: _0x104b57(246) + _0x104b57(452) + _0x104b57(547) + _0x104b57(279) + _0x104b57(529) + _0x104b57(503) + _0x104b57(227) + _0x104b57(432), hYAkU: _0x104b57(603) + _0x104b57(370)}, _0xabc1c6 = document[_0x104b57(609) + _0x104b57(466)](_0x47d983[_0x104b57(536)]);
  _0xabc1c6[_0x104b57(394)] = "", _0x25c9cc[_0x104b57(268)]((_0x9004dd, _0x2fefaf) => {
    const _0x35ed02 = _0x104b57, _0x24c888 = new Date, _0x2ce5e8 = new Date(_0x9004dd[_0x35ed02(459)] + "T" + _0x9004dd[_0x35ed02(594)]), _0x2e0a52 = new Date(_0x2fefaf[_0x35ed02(459)] + "T" + _0x2fefaf[_0x35ed02(594)]), _0x4bc988 = _0x47d983[_0x35ed02(471)](_0x24c888, _0x2ce5e8) && _0x47d983[_0x35ed02(288)](_0x24c888, new Date(_0x47d983[_0x35ed02(255)](_0x2ce5e8[_0x35ed02(572)](), _0x47d983[_0x35ed02(428)](_0x47d983[_0x35ed02(334)](_0x47d983[_0x35ed02(228)](2, 60), 60), 1e3)))), _0xac49a2 = _0x47d983[_0x35ed02(471)](_0x24c888, _0x2e0a52) && _0x47d983[_0x35ed02(288)](_0x24c888, new Date(_0x47d983[_0x35ed02(255)](_0x2e0a52[_0x35ed02(572)](), _0x47d983[_0x35ed02(334)](_0x47d983[_0x35ed02(224)](_0x47d983[_0x35ed02(320)](2, 60), 60), 1e3))));
    if (_0x47d983[_0x35ed02(434)](_0x4bc988, !_0xac49a2)) return -1;
    if (_0x47d983[_0x35ed02(434)](!_0x4bc988, _0xac49a2)) return 1;
    return 0;
  }), _0x25c9cc[_0x104b57(287)](_0x177cef => {
    const _0x21d9d0 = _0x104b57, _0x4f1c60 = _0x177cef[_0x21d9d0(300)] || _0x177cef[_0x21d9d0(559)] || _0x177cef[_0x21d9d0(356)], _0x3d9844 = new Date, _0x2ce799 = new Date(_0x177cef[_0x21d9d0(459)] + "T" + _0x177cef[_0x21d9d0(594)]), _0x342b0f = _0x47d983[_0x21d9d0(471)](_0x3d9844, _0x2ce799) && _0x47d983[_0x21d9d0(288)](_0x3d9844, new Date(_0x47d983[_0x21d9d0(439)](_0x2ce799[_0x21d9d0(572)](), _0x47d983[_0x21d9d0(224)](_0x47d983[_0x21d9d0(390)](_0x47d983[_0x21d9d0(546)](2, 60), 60), 1e3)))), _0x4635ea = document[_0x21d9d0(617) + _0x21d9d0(419)](_0x47d983[_0x21d9d0(486)]);
    _0x4635ea[_0x21d9d0(282)] = _0x47d983[_0x21d9d0(622)], _0x4635ea[_0x21d9d0(595) + "te"](_0x47d983[_0x21d9d0(599)], _0x177cef[_0x21d9d0(459)][_0x21d9d0(563) + "e"]()), _0x4635ea[_0x21d9d0(595) + "te"](_0x47d983[_0x21d9d0(309)], _0x177cef[_0x21d9d0(393)][_0x21d9d0(563) + "e"]()), _0x4635ea[_0x21d9d0(595) + "te"](_0x47d983[_0x21d9d0(569)], _0x177cef[_0x21d9d0(626)][_0x21d9d0(563) + "e"]()), _0x4635ea[_0x21d9d0(595) + "te"](_0x47d983[_0x21d9d0(450)], _0x342b0f ? _0x47d983[_0x21d9d0(297)] : _0x47d983[_0x21d9d0(254)]);
    const _0x26519f = !_0x342b0f ? _0x21d9d0(246) + _0x21d9d0(485) + _0x21d9d0(537) + _0x21d9d0(545) + _0x177cef[_0x21d9d0(459)] + "T" + _0x177cef[_0x21d9d0(594)] + (_0x21d9d0(613) + _0x21d9d0(429) + _0x21d9d0(482)) : "";
    _0x4635ea[_0x21d9d0(394)] = _0x21d9d0(276) + _0x21d9d0(548) + _0x21d9d0(295) + _0x21d9d0(242) + _0x21d9d0(570) + _0x21d9d0(548) + _0x21d9d0(548) + _0x21d9d0(246) + _0x21d9d0(511) + _0x21d9d0(547) + _0x21d9d0(562) + _0x21d9d0(619) + _0x21d9d0(322) + _0x47d983[_0x21d9d0(512)](formatDate, _0x177cef[_0x21d9d0(459)]) + (_0x21d9d0(336) + _0x21d9d0(548) + _0x21d9d0(548) + _0x21d9d0(424) + _0x21d9d0(493) + _0x21d9d0(283) + _0x21d9d0(237) + _0x21d9d0(319) + " ") + _0x177cef[_0x21d9d0(626)] + (_0x21d9d0(336) + _0x21d9d0(548) + _0x21d9d0(548) + _0x21d9d0(424) + _0x21d9d0(389) + _0x21d9d0(542) + _0x21d9d0(277) + _0x21d9d0(252) + _0x21d9d0(522)) + _0x177cef[_0x21d9d0(594)] + _0x21d9d0(245) + _0x177cef[_0x21d9d0(393)] + (_0x21d9d0(336) + _0x21d9d0(548) + _0x21d9d0(548) + "  ") + (_0x342b0f ? _0x47d983[_0x21d9d0(231)] : _0x26519f) + (_0x21d9d0(276) + _0x21d9d0(548) + _0x21d9d0(588) + _0x21d9d0(548) + _0x21d9d0(236) + _0x21d9d0(533) + _0x21d9d0(475) + _0x21d9d0(610) + _0x21d9d0(528) + _0x21d9d0(267)) + _0x177cef[_0x21d9d0(338)] + _0x21d9d0(290) + _0x177cef[_0x21d9d0(300)] + _0x21d9d0(290) + _0x177cef[_0x21d9d0(559)] + _0x21d9d0(290) + _0x177cef[_0x21d9d0(356)] + _0x21d9d0(290) + _0x177cef[_0x21d9d0(626)] + (_0x21d9d0(524) + _0x21d9d0(548) + _0x21d9d0(453) + _0x21d9d0(547) + _0x21d9d0(328) + _0x21d9d0(433) + _0x21d9d0(607) + _0x21d9d0(548) + _0x21d9d0(548) + _0x21d9d0(426) + _0x21d9d0(548) + _0x21d9d0(592)), _0xabc1c6[_0x21d9d0(461) + "d"](_0x4635ea), _0x342b0f && !sentNotifications[_0x21d9d0(477)](_0x177cef[_0x21d9d0(338)]) && (_0x47d983[_0x21d9d0(512)](sendTelegramNotification, _0x177cef), sentNotifications[_0x21d9d0(473)](_0x177cef[_0x21d9d0(338)]));
  });
}
function updateCountdown() {
  const _0x27df92 = _0x1fa630, _0x55b053 = {imtjS: _0x27df92(616), lQxNs: function (_0x170648, _0x4c645c) {
    return _0x170648 - _0x4c645c;
  }, Bgyei: function (_0x3e6faa, _0x2732de) {
    return _0x3e6faa <= _0x2732de;
  }, iHUcM: function (_0xdb79d4, _0x2a0ee3) {
    return _0xdb79d4 / _0x2a0ee3;
  }, Jivsf: function (_0xf2fa9, _0x4d6ea9) {
    return _0xf2fa9 * _0x4d6ea9;
  }, XpcrT: function (_0x22dd5b, _0x1ebf3e) {
    return _0x22dd5b * _0x1ebf3e;
  }, CNuDf: function (_0x2a53a5, _0x5e26c7) {
    return _0x2a53a5 / _0x5e26c7;
  }, ZYqoz: function (_0x18eb83, _0x30a7d2) {
    return _0x18eb83 % _0x30a7d2;
  }, QrnyW: function (_0x271d6b, _0x2f046d) {
    return _0x271d6b * _0x2f046d;
  }, qdmZD: function (_0x4d74c5, _0x411ab3) {
    return _0x4d74c5 * _0x411ab3;
  }, TOKLR: _0x27df92(549) + "r]"}, _0x560937 = document[_0x27df92(307) + _0x27df92(604)](_0x55b053[_0x27df92(343)]), _0x28141f = new Date;
  _0x560937[_0x27df92(287)](_0x2fdad4 => {
    const _0x363416 = _0x27df92, _0x1a8d52 = new Date(_0x2fdad4[_0x363416(313) + "te"](_0x55b053[_0x363416(409)])), _0x51d030 = _0x55b053[_0x363416(350)](_0x1a8d52, _0x28141f);
    if (_0x55b053[_0x363416(396)](_0x51d030, 0)) _0x2fdad4[_0x363416(382) + "t"] = ""; else {
      const _0x19d189 = Math[_0x363416(440)](_0x55b053[_0x363416(407)](_0x51d030, _0x55b053[_0x363416(526)](_0x55b053[_0x363416(606)](1e3, 60), 60))), _0x1f5ea9 = Math[_0x363416(440)](_0x55b053[_0x363416(514)](_0x55b053[_0x363416(488)](_0x51d030, _0x55b053[_0x363416(526)](_0x55b053[_0x363416(266)](1e3, 60), 60)), _0x55b053[_0x363416(606)](1e3, 60))), _0x564ab1 = Math[_0x363416(440)](_0x55b053[_0x363416(407)](_0x55b053[_0x363416(488)](_0x51d030, _0x55b053[_0x363416(504)](1e3, 60)), 1e3));
      _0x2fdad4[_0x363416(382) + "t"] = _0x19d189 + "h " + _0x1f5ea9 + "m " + _0x564ab1 + "s";
    }
  });
}
function playMatch(_0x34a575, _0x36c2ed, _0x56c5d4, _0x5b94bc, _0x49c2cd) {
  const _0x513b3a = _0x1fa630, _0x31c291 = {bgGpi: _0x513b3a(462) + _0x513b3a(257), LelrQ: _0x513b3a(353) + _0x513b3a(373) + _0x513b3a(286), NMlzw: function (_0x214e93, _0x4b4d3f) {
    return _0x214e93 || _0x4b4d3f;
  }, cvJjN: _0x513b3a(531) + _0x513b3a(370), ccVDi: function (_0x22c10e, _0x7fbddd) {
    return _0x22c10e(_0x7fbddd);
  }, jSsDi: _0x513b3a(584), pFKSi: _0x513b3a(608), qkTdm: _0x513b3a(251), gNKZW: _0x513b3a(591), gMMKO: _0x513b3a(399), yAjrV: function (_0x3cc638, _0x55bcb6) {
    return _0x3cc638(_0x55bcb6);
  }};
  let _0x1e938d = _0x31c291[_0x513b3a(304)](_0x36c2ed, _0x56c5d4) || _0x5b94bc;
  _0x31c291[_0x513b3a(357)](fetch, _0x36c2ed)[_0x513b3a(565)](_0x4e5393 => {
    const _0x2fb01c = _0x513b3a;
    if (!_0x4e5393.ok) throw new Error(_0x31c291[_0x2fb01c(331)]);
    return _0x4e5393;
  })[_0x513b3a(385)](_0x38f07f => {
    const _0x189ae8 = _0x513b3a;
    console[_0x189ae8(301)](_0x31c291[_0x189ae8(238)], _0x38f07f), _0x1e938d = _0x31c291[_0x189ae8(304)](_0x56c5d4, _0x5b94bc);
  })[_0x513b3a(447)](() => {
    const _0x1e8680 = _0x513b3a;
    _0x5b94bc ? document[_0x1e8680(609) + _0x1e8680(466)](_0x31c291[_0x1e8680(576)])[_0x1e8680(394)] = _0x1e8680(360) + _0x1e8680(225) + _0x5b94bc + (_0x1e8680(347) + _0x1e8680(376) + _0x1e8680(505) + _0x1e8680(368) + _0x1e8680(339) + _0x1e8680(411) + _0x1e8680(274) + _0x1e8680(587) + _0x1e8680(408) + _0x1e8680(363) + _0x1e8680(614) + _0x1e8680(568) + _0x1e8680(495)) : _0x31c291[_0x1e8680(506)](jwplayer, _0x31c291[_0x1e8680(576)])[_0x1e8680(566)]({file: _0x1e938d, width: _0x31c291[_0x1e8680(377)], aspectratio: _0x31c291[_0x1e8680(605)], image: " "}), document[_0x1e8680(609) + _0x1e8680(466)](_0x31c291[_0x1e8680(576)])[_0x1e8680(497) + _0x1e8680(420)]({behavior: _0x31c291[_0x1e8680(625)], block: _0x31c291[_0x1e8680(284)]}), document[_0x1e8680(609) + _0x1e8680(466)](_0x31c291[_0x1e8680(316)])[_0x1e8680(382) + "t"] = _0x49c2cd, _0x31c291[_0x1e8680(357)](loadChannels, _0x34a575);
  });
}
async function loadChannels(_0xd45cc8) {
  const _0x508c2f = _0x1fa630, _0x524cbf = {DtIhR: function (_0x407855, _0x1cb40) {
    return _0x407855(_0x1cb40);
  }, Vmcgu: _0x508c2f(308) + _0x508c2f(442) + _0x508c2f(226), ucGBF: function (_0x35e011, _0x33b750) {
    return _0x35e011 > _0x33b750;
  }, sWouD: function (_0x3c90ab, _0x519838) {
    return _0x3c90ab(_0x519838);
  }, lnqvR: function (_0x401759, _0x2382ed) {
    return _0x401759(_0x2382ed);
  }, pWmkN: _0x508c2f(375) + "st", wCQLn: _0x508c2f(324), RmrXs: _0x508c2f(600), ccjWp: _0x508c2f(353) + _0x508c2f(278) + _0x508c2f(345)};
  try {
    const _0x5c7d95 = await _0x524cbf[_0x508c2f(332)](fetch, _0x508c2f(543) + _0x508c2f(406) + _0x508c2f(544) + _0x508c2f(535) + _0x508c2f(381) + _0xd45cc8);
    if (!_0x5c7d95.ok) throw new Error(_0x524cbf[_0x508c2f(435)]);
    const _0x1cab7e = await _0x5c7d95[_0x508c2f(422)]();
    _0x1cab7e[_0x508c2f(366)] && _0x524cbf[_0x508c2f(258)](_0x1cab7e[_0x508c2f(464)][_0x508c2f(492)], 0) ? (_0x524cbf[_0x508c2f(469)](renderChannels, _0x1cab7e[_0x508c2f(464)]), _0x524cbf[_0x508c2f(397)](renderServerMenu, _0x1cab7e[_0x508c2f(464)])) : (document[_0x508c2f(609) + _0x508c2f(466)](_0x524cbf[_0x508c2f(275)])[_0x508c2f(235)][_0x508c2f(446)] = _0x524cbf[_0x508c2f(222)], document[_0x508c2f(609) + _0x508c2f(466)](_0x524cbf[_0x508c2f(387)])[_0x508c2f(235)][_0x508c2f(446)] = _0x524cbf[_0x508c2f(222)]);
  } catch (_0x5566ef) {
    console[_0x508c2f(301)](_0x524cbf[_0x508c2f(351)], _0x5566ef), document[_0x508c2f(609) + _0x508c2f(466)](_0x524cbf[_0x508c2f(275)])[_0x508c2f(235)][_0x508c2f(446)] = _0x524cbf[_0x508c2f(222)], document[_0x508c2f(609) + _0x508c2f(466)](_0x524cbf[_0x508c2f(387)])[_0x508c2f(235)][_0x508c2f(446)] = _0x524cbf[_0x508c2f(222)];
  }
}
function renderChannels(_0x44eccb) {
  const _0x401169 = _0x1fa630, _0x438cb2 = {fVjHc: _0x401169(359) + "ms", bNNGN: _0x401169(375) + "st", fLfSb: _0x401169(296)}, _0x4c69f8 = document[_0x401169(609) + _0x401169(466)](_0x438cb2[_0x401169(318)]);
  _0x4c69f8[_0x401169(394)] = "", _0x44eccb[_0x401169(287)](_0x1c292b => {
    const _0x28ce99 = _0x401169, _0x232300 = document[_0x28ce99(617) + _0x28ce99(419)]("li");
    _0x232300[_0x28ce99(394)] = _0x28ce99(276) + _0x28ce99(548) + _0x28ce99(539) + _0x28ce99(467) + _0x28ce99(404) + "'" + _0x1c292b[_0x28ce99(515) + _0x28ce99(269)][0] + _0x28ce99(290) + _0x1c292b[_0x28ce99(612)] + _0x28ce99(484) + _0x1c292b[_0x28ce99(517)] + (_0x28ce99(426) + _0x28ce99(548) + _0x28ce99(592)), _0x4c69f8[_0x28ce99(461) + "d"](_0x232300);
  }), document[_0x401169(609) + _0x401169(466)](_0x438cb2[_0x401169(560)])[_0x401169(235)][_0x401169(446)] = _0x438cb2[_0x401169(400)];
}
function _0x48fc() {
  const _0x2aaef6 = ['rue"></ifr', "YgTdz", 'nfo">\n    ', "ication:", "getTime", "mgBDv", "February", "videoUrl", "cvJjN", "1421352OmSYFU", "23795c", "fetch vide", "onscroll", "CfgwR", "noKxe", "EPPJk", "100%", "fLjNW", "jtDlU", "ts allow-s", " </div>\n  ", "body", "ement", "start", "      ", '<i class="', "time", "setAttribu", "DOMContent", "498054MKoMvS", "Server ", "mAOjg", "serverMenu", "PGVyo", "Rgutb", "scheduleCo", "torAll", "pFKSi", "XpcrT", "/i> Watch\n", "16:9", "getElement", 'utton" onc', "XGxrs", "iframe_url", '">Starting', 'lscreen="t', "\nTime: ", "data-timer", "createElem", "match", 'ndar-alt">', "stener", "CQvXh", "bZIJK", "data-statu", "AZscz", "qkTdm", "teams", "SbNUU", "schedule-c", "&text=", "documentEl", "MvFEi", "VrXEh", "avwcj", "2952WmKmPG", "wCQLn", "January", "JJNHA", 'c="', " not ok", "ve Now</sp", "eASqT", "ccessfully", "flex", "OuSAx", "send notif", "ABlbf", "September", "style", "        <b", '="fas fa-u', "LelrQ", " URL for m", "NocKW", "gue</optio", 's="match-i', "March", "teamSearch", " | ", "<span clas", "April", "OOgrD", "PWVeN", "xMosn", "smooth", '-clock"></', "ard", "nGAls", "DqwXx", "load match", "ailed", "ucGBF", "atchId ", "includes", "https://83", "thub.io/bo", "TtYpS", "ZTRtW", "leagueFilt", "QrnyW", "Match('", "sort", "urls", "data-teams", "ukFIA", "1780QmlMKm", "button", "llow-scrip", "pWmkN", "\n         ", 'ss="fas fa', "load chann", "as fa-broa", "getDate", "HcOKp", "className", '"><i class', "gNKZW", "portlive.b", "URL:", "forEach", "iitJK", " 🚨\nDate: ", "', '", "onVwp", "/sendMessa", "zAACi", "jLYEu", " <div clas", "block", "nadjY", "option", "la.github.", "liveUrl", "error", "LOctf", "0000", "NMlzw", "\nLeague: ", "ywuMR", "querySelec", "Network re", "yPbPA", "Notificati", "HPErJ", "jtsKr", "getAttribu", "\nLink: htt", "ROVRZ", "gMMKO", ":AAGG4SAfi", "fVjHc", 'sers"></i>', "SkuDh", "iZ76AHaEWo", "</i> ", "ter by Dat", "none", "3zb296.app", "code", "DNdDa", "as fa-play", "GBTeW", "wSGfY", "bgGpi", "DtIhR", "YNkwz", "IgRdp", "dateFilter", "</span>\n  ", "ing notifi", "videoId", '="0" scrol', "h_info?mat", "May", "map", "TOKLR", "apply", "els:", "rtakita.gi", '" width="1', "mZAdr", "ps://zonas", "lQxNs", "ccjWp", "TzEly", "Failed to ", "log", "EBMQe", "iframeURL", "yAjrV", 'ver"></i> ', "channelIte", "<iframe sr", "WGTCY", "4866mbLRAs", '" allowful', "JHCvs", "scrollTop", "status", "🚨 Live Now", "rameborder", "card", "ntainer", "Loaded", "qTYny", "load live ", "October", "channelsLi", '00%" heigh', "jSsDi", "change", "logspot.co", "GET", "atchId=", "textConten", "chId=", "fetch live", "catch", "i.telegram", "RmrXs", "Vumss", 'ass="detai', "grbdA", "UQdkU", "ASvUI", "league", "innerHTML", "AoOGu", "Bgyei", "lnqvR", "11743720VJdGbS", "matchTitle", "fLfSb", "div", "7ikpkvL", "on sent su", "ayChannel(", "value", "i.90min.to", "iHUcM", "ame-origin", "imtjS", "yJOtJ", 'ling="no"a', "BquZz", "December", "ykQqC", ".schedule-", "zvc2_I5WDk", "e</option>", "yQGXi", "ent", "View", "es:", "json", "oUrl for m", "  <span cl", "data-leagu", "</button>\n", "uEMSz", "sZWdt", " Soon...</", "Error send", "/business/", "an>", '-circle"><', "FmqIw", "Vmcgu", "addEventLi", "August", "AGinr", "cfIxw", "floor", 'lue="">Fil', "sponse was", "July", "e.json", "IOeHS", "display", "finally", "TrqGt", "LpmLQ", "Lwwve", "pButton", 's="live"><', "         <", "wjfcU", "https://wa", "filter", "loGap", "QaGrQ", "date", "aTwMZ", "appendChil", "Live URL f", "21832VmWfom", "result", "all", "ById", 'nclick="pl', "iTKGg", "sWouD", "June", "Pjjda", "<option va", "add", ".org/bot", 's="watch-b', "getMonth", "has", "remove", "BFVvN", "quZkK", "kUXcJ", "span>", "ftYwR", "')\">", 's="countdo', "wNVXC", "input", "ZYqoz", "match/matc", "uGsxK", "7067765mBPncX", "length", 'ass="teams', "ZdTdy", "ame>", "cation:", "scrollInto", "oLcEh", "zpawS", "fas fa-ser", "VMIij", "5248572Nawqsa", 'r"></i> Li', "qdmZD", 't="100%" f', "ccVDi", "from", "AcjVh", "classList", "EASfF", 's="date"><', "BxmnG", "QfdQm", "CNuDf", "streaming_", "November", "name", "noMatches", "1391979650", "vzehh", "io/schedul", "i> ", "show", "')\">\n     ", "data-date", "Jivsf", "getFullYea", 'lick="play', "dcast-towe", "vXjQy", "jwplayerCo", "upcoming", "utton clas", "JoKmp", "channels?m", "hYAkU", 'wn" data-t', "onclick", " <button o", "KFQXr", "nqSXq", 'ls"><i cla', "https://ap", "/v1/match/", 'imer="', "ZcTov", 'i class="f', "          ", "[data-time", "njpGf", "KEAUh", "loader", "LpMct", "ge?chat_id", "ter by Lea", "scrollToTo", "7598004626", "data", "m3u8Url", "bNNGN", "live", "as fa-cale", "toLowerCas", "YDjJM", "then", "setup", "TeEqB"];
  _0x48fc = function () {
    return _0x2aaef6;
  };
  return _0x48fc();
}
function playChannel(_0x9aa8e9, _0x49d3a8) {
  const _0x8970d8 = _0x1fa630, _0x22294a = {njpGf: _0x8970d8(531) + _0x8970d8(370), GBTeW: function (_0x42b8a, _0x5b68b9) {
    return _0x42b8a(_0x5b68b9);
  }, EASfF: _0x8970d8(584), TeEqB: _0x8970d8(608), OOgrD: _0x8970d8(251), BFVvN: _0x8970d8(591)};
  _0x49d3a8 ? document[_0x8970d8(609) + _0x8970d8(466)](_0x22294a[_0x8970d8(550)])[_0x8970d8(394)] = _0x8970d8(360) + _0x8970d8(225) + _0x49d3a8 + (_0x8970d8(347) + _0x8970d8(376) + _0x8970d8(505) + _0x8970d8(368) + _0x8970d8(339) + _0x8970d8(411) + _0x8970d8(274) + _0x8970d8(587) + _0x8970d8(408) + _0x8970d8(363) + _0x8970d8(614) + _0x8970d8(568) + _0x8970d8(495)) : _0x22294a[_0x8970d8(329)](jwplayer, _0x22294a[_0x8970d8(550)])[_0x8970d8(566)]({file: _0x9aa8e9, width: _0x22294a[_0x8970d8(510)], aspectratio: _0x22294a[_0x8970d8(567)], image: " "}), document[_0x8970d8(609) + _0x8970d8(466)](_0x22294a[_0x8970d8(550)])[_0x8970d8(497) + _0x8970d8(420)]({behavior: _0x22294a[_0x8970d8(248)], block: _0x22294a[_0x8970d8(479)]});
}
function renderServerMenu(_0x316c29) {
  const _0xab7802 = _0x1fa630, _0x154d0d = {jLYEu: _0xab7802(273), PGVyo: _0xab7802(600), ASvUI: _0xab7802(296)}, _0x3f23e1 = document[_0xab7802(609) + _0xab7802(466)](_0x154d0d[_0xab7802(601)]);
  _0x3f23e1[_0xab7802(394)] = "";
  let _0x58f37f = 1;
  _0x316c29[_0xab7802(287)]((_0x37544c, _0x169662) => {
    const _0x27dba3 = _0xab7802, _0x5e8135 = {LOctf: _0x154d0d[_0x27dba3(294)]};
    _0x37544c[_0x27dba3(515) + _0x27dba3(269)][_0x27dba3(287)]((_0x7316cf, _0x3b6bf8) => {
      const _0x187032 = _0x27dba3, _0x245d8e = document[_0x187032(617) + _0x187032(419)](_0x5e8135[_0x187032(302)]);
      _0x245d8e[_0x187032(394)] = _0x187032(593) + _0x187032(500) + _0x187032(358) + _0x187032(598) + _0x58f37f, _0x245d8e[_0x187032(538)] = () => playChannel(_0x7316cf, _0x37544c[_0x187032(612)]), _0x3f23e1[_0x187032(461) + "d"](_0x245d8e), _0x58f37f++;
    });
  }), document[_0xab7802(609) + _0xab7802(466)](_0x154d0d[_0xab7802(601)])[_0xab7802(235)][_0xab7802(446)] = _0x154d0d[_0xab7802(392)];
}
function populateFilters(_0x507fbf) {
  const _0x4842f2 = _0x1fa630, _0xc03244 = {ZTRtW: _0x4842f2(298), JoKmp: function (_0x2bd0cb, _0x302791) {
    return _0x2bd0cb(_0x302791);
  }, ykQqC: _0x4842f2(335), DNdDa: _0x4842f2(265) + "er", yQGXi: _0x4842f2(472) + _0x4842f2(441) + _0x4842f2(323) + _0x4842f2(417), quZkK: _0x4842f2(472) + _0x4842f2(441) + _0x4842f2(555) + _0x4842f2(241) + "n>"}, _0x5d5142 = document[_0x4842f2(609) + _0x4842f2(466)](_0xc03244[_0x4842f2(414)]), _0x3eb5a9 = document[_0x4842f2(609) + _0x4842f2(466)](_0xc03244[_0x4842f2(327)]);
  _0x5d5142[_0x4842f2(394)] = _0xc03244[_0x4842f2(418)], _0x3eb5a9[_0x4842f2(394)] = _0xc03244[_0x4842f2(480)];
  const _0x1f0c2a = [...new Set(_0x507fbf[_0x4842f2(342)](_0x395295 => _0x395295[_0x4842f2(459)]))], _0x259b5e = [...new Set(_0x507fbf[_0x4842f2(342)](_0xa8a9b7 => _0xa8a9b7[_0x4842f2(393)]))];
  _0x1f0c2a[_0x4842f2(287)](_0x239079 => {
    const _0x480726 = _0x4842f2, _0x307300 = document[_0x480726(617) + _0x480726(419)](_0xc03244[_0x480726(264)]);
    _0x307300[_0x480726(405)] = _0x239079[_0x480726(563) + "e"](), _0x307300[_0x480726(382) + "t"] = _0xc03244[_0x480726(534)](formatDate, _0x239079), _0x5d5142[_0x480726(461) + "d"](_0x307300);
  }), _0x259b5e[_0x4842f2(287)](_0x1dea18 => {
    const _0xec39d3 = _0x4842f2, _0x318e95 = document[_0xec39d3(617) + _0xec39d3(419)](_0xc03244[_0xec39d3(264)]);
    _0x318e95[_0xec39d3(405)] = _0x1dea18[_0xec39d3(563) + "e"](), _0x318e95[_0xec39d3(382) + "t"] = _0x1dea18, _0x3eb5a9[_0xec39d3(461) + "d"](_0x318e95);
  });
}
function filterMatches() {
  const _0x6b62eb = _0x1fa630, _0x3f50a1 = {onVwp: _0x6b62eb(525), VMIij: _0x6b62eb(425) + "e", ywuMR: _0x6b62eb(270), jtsKr: function (_0x26d29a, _0x5e832b) {
    return _0x26d29a === _0x5e832b;
  }, uEMSz: function (_0x3e5f3f, _0x430034) {
    return _0x3e5f3f === _0x430034;
  }, kUXcJ: function (_0x2c5461, _0x3c5a36) {
    return _0x2c5461 && _0x3c5a36;
  }, NocKW: _0x6b62eb(623) + "s", KFQXr: _0x6b62eb(561), TrqGt: function (_0x1ccf59, _0x5e0024) {
    return _0x1ccf59 !== _0x5e0024;
  }, qTYny: _0x6b62eb(230), UQdkU: _0x6b62eb(335), loGap: _0x6b62eb(265) + "er", CfgwR: _0x6b62eb(244), fLjNW: _0x6b62eb(415) + _0x6b62eb(369), noKxe: _0x6b62eb(518), HPErJ: function (_0x3d96c6, _0x188587) {
    return _0x3d96c6 === _0x188587;
  }, nqSXq: _0x6b62eb(523)}, _0x5ecf9a = document[_0x6b62eb(609) + _0x6b62eb(466)](_0x3f50a1[_0x6b62eb(391)])[_0x6b62eb(405)][_0x6b62eb(563) + "e"](), _0x36799c = document[_0x6b62eb(609) + _0x6b62eb(466)](_0x3f50a1[_0x6b62eb(457)])[_0x6b62eb(405)][_0x6b62eb(563) + "e"](), _0x4375f8 = document[_0x6b62eb(609) + _0x6b62eb(466)](_0x3f50a1[_0x6b62eb(581)])[_0x6b62eb(405)][_0x6b62eb(563) + "e"](), _0x4be9f5 = document[_0x6b62eb(307) + _0x6b62eb(604)](_0x3f50a1[_0x6b62eb(585)]);
  let _0x2f1cb6 = 0;
  const _0x4e40e8 = Array[_0x6b62eb(507)](_0x4be9f5)[_0x6b62eb(456)](_0x43973a => {
    const _0x31fa3e = _0x6b62eb, _0x1381eb = _0x43973a[_0x31fa3e(313) + "te"](_0x3f50a1[_0x31fa3e(291)]), _0x25d430 = _0x43973a[_0x31fa3e(313) + "te"](_0x3f50a1[_0x31fa3e(501)]), _0x4da1a0 = _0x43973a[_0x31fa3e(313) + "te"](_0x3f50a1[_0x31fa3e(306)]), _0x38d937 = !_0x5ecf9a || _0x3f50a1[_0x31fa3e(312)](_0x1381eb, _0x5ecf9a), _0x4549ac = !_0x36799c || _0x3f50a1[_0x31fa3e(427)](_0x25d430, _0x36799c), _0x36dff1 = !_0x4375f8 || _0x4da1a0[_0x31fa3e(260)](_0x4375f8);
    return _0x3f50a1[_0x31fa3e(481)](_0x38d937, _0x4549ac) && _0x36dff1;
  })[_0x6b62eb(268)]((_0x1d4685, _0x344e5a) => {
    const _0x306674 = _0x6b62eb, _0x39df0c = _0x1d4685[_0x306674(313) + "te"](_0x3f50a1[_0x306674(240)]), _0x387a88 = _0x344e5a[_0x306674(313) + "te"](_0x3f50a1[_0x306674(240)]);
    if (_0x3f50a1[_0x306674(427)](_0x39df0c, _0x3f50a1[_0x306674(540)]) && _0x3f50a1[_0x306674(448)](_0x387a88, _0x3f50a1[_0x306674(540)])) return -1;
    if (_0x3f50a1[_0x306674(448)](_0x39df0c, _0x3f50a1[_0x306674(540)]) && _0x3f50a1[_0x306674(312)](_0x387a88, _0x3f50a1[_0x306674(540)])) return 1;
    return 0;
  });
  _0x4be9f5[_0x6b62eb(287)](_0x54aef8 => _0x54aef8[_0x6b62eb(235)][_0x6b62eb(446)] = _0x6b62eb(324)), _0x4e40e8[_0x6b62eb(287)](_0x155e92 => {
    const _0x133d72 = _0x6b62eb;
    _0x155e92[_0x133d72(235)][_0x133d72(446)] = _0x3f50a1[_0x133d72(372)], _0x2f1cb6++;
  });
  const _0x2e98a1 = document[_0x6b62eb(609) + _0x6b62eb(466)](_0x3f50a1[_0x6b62eb(582)]);
  _0x3f50a1[_0x6b62eb(311)](_0x2f1cb6, 0) ? _0x2e98a1[_0x6b62eb(509)][_0x6b62eb(473)](_0x3f50a1[_0x6b62eb(541)]) : _0x2e98a1[_0x6b62eb(509)][_0x6b62eb(478)](_0x3f50a1[_0x6b62eb(541)]);
}
function resetFilters() {
  const _0x23d714 = _0x1fa630, _0x4178ba = {KEAUh: _0x23d714(335), avwcj: _0x23d714(265) + "er", CQvXh: _0x23d714(244), MvFEi: function (_0x1193ac) {
    return _0x1193ac();
  }};
  document[_0x23d714(609) + _0x23d714(466)](_0x4178ba[_0x23d714(551)])[_0x23d714(405)] = "", document[_0x23d714(609) + _0x23d714(466)](_0x4178ba[_0x23d714(220)])[_0x23d714(405)] = "", document[_0x23d714(609) + _0x23d714(466)](_0x4178ba[_0x23d714(621)])[_0x23d714(405)] = "", _0x4178ba[_0x23d714(218)](filterMatches);
}
function debounce(_0x3745a9, _0x52a308) {
  const _0x1dd26f = {vzehh: function (_0x5681ab, _0x39f77) {
    return _0x5681ab(_0x39f77);
  }, uGsxK: function (_0x5d4149, _0x4be59b, _0x39865c) {
    return _0x5d4149(_0x4be59b, _0x39865c);
  }};
  let _0xcad1cf;
  return function (..._0xa4912d) {
    const _0x5ab96c = _0x5c61;
    _0x1dd26f[_0x5ab96c(520)](clearTimeout, _0xcad1cf), _0xcad1cf = _0x1dd26f[_0x5ab96c(490)](setTimeout, () => _0x3745a9[_0x5ab96c(344)](this, _0xa4912d), _0x52a308);
  };
}
document[_0x1fa630(609) + _0x1fa630(466)](_0x1fa630(244))[_0x1fa630(436) + _0x1fa630(620)](_0x1fa630(487), debounce(filterMatches, 300)), document[_0x1fa630(609) + _0x1fa630(466)](_0x1fa630(335))[_0x1fa630(436) + _0x1fa630(620)](_0x1fa630(378), filterMatches), document[_0x1fa630(609) + _0x1fa630(466)](_0x1fa630(265) + "er")[_0x1fa630(436) + _0x1fa630(620)](_0x1fa630(378), filterMatches), document[_0x1fa630(436) + _0x1fa630(620)](_0x1fa630(596) + _0x1fa630(371), loadMatches), window[_0x1fa630(580)] = function () {
  const _0x41e046 = _0x1fa630, _0x58b25e = {iTKGg: function (_0x3a1d66) {
    return _0x3a1d66();
  }};
  _0x58b25e[_0x41e046(468)](scrollFunction);
};
function scrollFunction() {
  const _0x54563c = _0x1fa630, _0x3fc74b = {EPPJk: function (_0x30e0f0, _0x2e50a0) {
    return _0x30e0f0 > _0x2e50a0;
  }, JHCvs: function (_0x2ab023, _0x52e6f2) {
    return _0x2ab023 > _0x52e6f2;
  }, WGTCY: _0x54563c(556) + _0x54563c(451), LpmLQ: _0x54563c(296), ukFIA: _0x54563c(324)};
  _0x3fc74b[_0x54563c(583)](document[_0x54563c(589)][_0x54563c(365)], 20) || _0x3fc74b[_0x54563c(364)](document[_0x54563c(630) + _0x54563c(590)][_0x54563c(365)], 20) ? document[_0x54563c(609) + _0x54563c(466)](_0x3fc74b[_0x54563c(361)])[_0x54563c(235)][_0x54563c(446)] = _0x3fc74b[_0x54563c(449)] : document[_0x54563c(609) + _0x54563c(466)](_0x3fc74b[_0x54563c(361)])[_0x54563c(235)][_0x54563c(446)] = _0x3fc74b[_0x54563c(271)];
}
function scrollToTop() {
  const _0x45b27b = _0x1fa630;
  document[_0x45b27b(589)][_0x45b27b(365)] = 0, document[_0x45b27b(630) + _0x45b27b(590)][_0x45b27b(365)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x4003e4) {
  const _0x2718f1 = _0x1fa630, _0x4784ba = {AZscz: _0x2718f1(310) + _0x2718f1(403) + _0x2718f1(229), zAACi: _0x2718f1(353) + _0x2718f1(232) + _0x2718f1(571), wSGfY: _0x2718f1(430) + _0x2718f1(337) + _0x2718f1(496), YDjJM: function (_0x30c06a, _0x69ee1a) {
    return _0x30c06a(_0x69ee1a);
  }, BquZz: function (_0x49d785, _0x56164a, _0x30ea96) {
    return _0x49d785(_0x56164a, _0x30ea96);
  }, TzEly: _0x2718f1(380)}, _0x493e9b = _0x2718f1(367) + ": " + _0x4003e4[_0x2718f1(626)] + _0x2718f1(289) + _0x4784ba[_0x2718f1(564)](formatDate, _0x4003e4[_0x2718f1(459)]) + _0x2718f1(615) + _0x4003e4[_0x2718f1(594)] + _0x2718f1(305) + _0x4003e4[_0x2718f1(393)] + (_0x2718f1(314) + _0x2718f1(349) + _0x2718f1(285) + _0x2718f1(379) + "m/"), _0x367bb4 = _0x2718f1(543) + _0x2718f1(386) + _0x2718f1(474) + telegramBotToken + (_0x2718f1(292) + _0x2718f1(554) + "=") + telegramChatId + _0x2718f1(629) + _0x4784ba[_0x2718f1(564)](encodeURIComponent, _0x493e9b);
  _0x4784ba[_0x2718f1(412)](fetch, _0x367bb4, {method: _0x4784ba[_0x2718f1(352)]})[_0x2718f1(565)](_0x1650de => _0x1650de[_0x2718f1(422)]())[_0x2718f1(565)](_0x27c96c => {
    const _0x2b0f9e = _0x2718f1;
    _0x27c96c.ok ? console[_0x2b0f9e(354)](_0x4784ba[_0x2b0f9e(624)]) : console[_0x2b0f9e(301)](_0x4784ba[_0x2b0f9e(293)], _0x27c96c);
  })[_0x2718f1(385)](_0x5b6abd => {
    const _0x4ada7d = _0x2718f1;
    console[_0x4ada7d(301)](_0x4784ba[_0x4ada7d(330)], _0x5b6abd);
  });
}
