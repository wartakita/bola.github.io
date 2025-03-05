const _0x3d30e9 = _0xa342;
(function (_0x4a6385, _0x5b3a25) {
  const _0x2a111c = _0xa342, _0x44d880 = _0x4a6385();
  while (true) {
    try {
      const _0x70a051 = -parseInt(_0x2a111c(345)) / 1 + parseInt(_0x2a111c(209)) / 2 * (parseInt(_0x2a111c(458)) / 3) + -parseInt(_0x2a111c(293)) / 4 + parseInt(_0x2a111c(183)) / 5 + parseInt(_0x2a111c(569)) / 6 * (-parseInt(_0x2a111c(286)) / 7) + parseInt(_0x2a111c(483)) / 8 + parseInt(_0x2a111c(584)) / 9 * (-parseInt(_0x2a111c(296)) / 10);
      if (_0x70a051 === _0x5b3a25) break; else _0x44d880.push(_0x44d880.shift());
    } catch (_0x4c2c8d) {
      _0x44d880.push(_0x44d880.shift());
    }
  }
}(_0x437c, 899906));
const telegramBotToken = _0x3d30e9(397) + _0x3d30e9(542) + _0x3d30e9(184) + _0x3d30e9(323) + _0x3d30e9(195), telegramChatId = _0x3d30e9(411), sentNotifications = new Set(JSON[_0x3d30e9(565)](localStorage[_0x3d30e9(511)](_0x3d30e9(387) + _0x3d30e9(373))) || []);
function saveSentNotifications() {
  const _0x5cd1f5 = _0x3d30e9, _0x4a4a15 = {bmZtS: _0x5cd1f5(387) + _0x5cd1f5(373)};
  localStorage[_0x5cd1f5(417)](_0x4a4a15[_0x5cd1f5(333)], JSON[_0x5cd1f5(336)](Array[_0x5cd1f5(425)](sentNotifications)));
}
function formatDate(_0x550d3a) {
  const _0xbc7c81 = _0x3d30e9, _0x545819 = {IKxLX: _0xbc7c81(543), YIBpx: _0xbc7c81(378), OWgRd: _0xbc7c81(551), prrIL: _0xbc7c81(295), cCAVy: _0xbc7c81(487), xydrS: _0xbc7c81(277), hdnJe: _0xbc7c81(413), duzga: _0xbc7c81(249), daccc: _0xbc7c81(546), phBQn: _0xbc7c81(290), pjMTK: _0xbc7c81(461), AdKYw: _0xbc7c81(207)}, _0x5b66ca = [_0x545819[_0xbc7c81(343)], _0x545819[_0xbc7c81(245)], _0x545819[_0xbc7c81(572)], _0x545819[_0xbc7c81(240)], _0x545819[_0xbc7c81(319)], _0x545819[_0xbc7c81(307)], _0x545819[_0xbc7c81(274)], _0x545819[_0xbc7c81(566)], _0x545819[_0xbc7c81(396)], _0x545819[_0xbc7c81(502)], _0x545819[_0xbc7c81(289)], _0x545819[_0xbc7c81(463)]], _0x391897 = new Date(_0x550d3a), _0x530a07 = _0x391897[_0xbc7c81(416)](), _0x5ed25f = _0x5b66ca[_0x391897[_0xbc7c81(472)]()], _0x1d27ad = _0x391897[_0xbc7c81(548) + "r"]();
  return _0x530a07 + " " + _0x5ed25f + " " + _0x1d27ad;
}
async function loadMatches() {
  const _0x1679d4 = _0x3d30e9, _0x336781 = {vwxMD: _0x1679d4(498), GaIIU: _0x1679d4(241), ffLGV: function (_0x162e89) {
    return _0x162e89();
  }, bkroI: function (_0x3b87c7, _0x14db2b) {
    return _0x3b87c7(_0x14db2b);
  }, OPGqD: function (_0x1a5362, _0x5c6b03) {
    return _0x1a5362(_0x5c6b03);
  }, BVHRW: function (_0x202b9c) {
    return _0x202b9c();
  }, OvcrR: function (_0x30f9d2, _0xe78ef7, _0x363f20) {
    return _0x30f9d2(_0xe78ef7, _0x363f20);
  }, CeSca: _0x1679d4(508) + _0x1679d4(504) + _0x1679d4(371), xIcst: _0x1679d4(185), unAlo: _0x1679d4(509), JpxLm: _0x1679d4(224)};
  try {
    document[_0x1679d4(366) + _0x1679d4(280)](_0x336781[_0x1679d4(339)])[_0x1679d4(409)][_0x1679d4(581)] = _0x336781[_0x1679d4(561)];
    const _0x10c1c1 = await _0x336781[_0x1679d4(260)](fetchMatches);
    _0x336781[_0x1679d4(222)](renderMatches, _0x10c1c1), _0x336781[_0x1679d4(193)](populateFilters, _0x10c1c1), _0x336781[_0x1679d4(260)](filterMatches), _0x336781[_0x1679d4(447)](updateCountdown), _0x336781[_0x1679d4(524)](setInterval, updateCountdown, 1e3);
  } catch (_0x207860) {
    console[_0x1679d4(554)](_0x336781[_0x1679d4(453)], _0x207860), document[_0x1679d4(366) + _0x1679d4(280)](_0x336781[_0x1679d4(557)])[_0x1679d4(168)][_0x1679d4(479)](_0x336781[_0x1679d4(448)]);
  } finally {
    document[_0x1679d4(366) + _0x1679d4(280)](_0x336781[_0x1679d4(339)])[_0x1679d4(409)][_0x1679d4(581)] = _0x336781[_0x1679d4(478)];
  }
}
function _0xa342(_0x32b827, _0x160194) {
  const _0x40c5c2 = _0x437c();
  return _0xa342 = function (_0x28d3a9, _0x3f5454) {
    _0x28d3a9 = _0x28d3a9 - 167;
    let _0x2c549d = _0x40c5c2[_0x28d3a9];
    return _0x2c549d;
  }, _0xa342(_0x32b827, _0x160194);
}
async function fetchMatches() {
  const _0x5ad4a9 = _0x3d30e9, _0x4ee478 = {emOLM: function (_0x12dc6f, _0x28685f) {
    return _0x12dc6f(_0x28685f);
  }, EBviG: _0x5ad4a9(191) + _0x5ad4a9(337) + _0x5ad4a9(232) + _0x5ad4a9(525) + _0x5ad4a9(356) + _0x5ad4a9(517), dFfsv: _0x5ad4a9(272) + _0x5ad4a9(317) + _0x5ad4a9(545)}, _0x44f3a5 = await _0x4ee478[_0x5ad4a9(172)](fetch, _0x4ee478[_0x5ad4a9(556)]);
  if (!_0x44f3a5.ok) throw new Error(_0x4ee478[_0x5ad4a9(433)]);
  const _0x578415 = await _0x44f3a5[_0x5ad4a9(215)](), _0xb74d06 = await _0x4ee478[_0x5ad4a9(172)](fetchLiveUrls, _0x578415);
  return _0x578415[_0x5ad4a9(410)](_0x5f6a15 => {
    const _0x4cd445 = _0x5ad4a9;
    _0x5f6a15[_0x4cd445(365)] = _0xb74d06[_0x5f6a15[_0x4cd445(236)]] || _0x5f6a15[_0x4cd445(354)] || _0x5f6a15[_0x4cd445(330)];
  }), _0x578415;
}
async function fetchLiveUrls(_0x46ab93) {
  const _0x1c0620 = _0x3d30e9, _0x79434f = {cgQcj: function (_0x10a8dd, _0x134ca0) {
    return _0x10a8dd(_0x134ca0);
  }, Rqtnv: function (_0x331047, _0x280775) {
    return _0x331047 > _0x280775;
  }, xnzUF: function (_0x1a2595, _0x535098) {
    return _0x1a2595(_0x535098);
  }, yKwKJ: function (_0x5fa06a, _0x33fcbb) {
    return _0x5fa06a === _0x33fcbb;
  }, CVeic: _0x1c0620(179)}, _0x54a4ad = _0x46ab93[_0x1c0620(424)](_0x107114 => _0x107114[_0x1c0620(236)]), _0x2baccf = {}, _0x3db652 = _0x54a4ad[_0x1c0620(424)](async _0x39d95a => {
    const _0xbbf476 = _0x1c0620;
    try {
      const _0x8a7ee7 = await _0x79434f[_0xbbf476(382)](fetch, _0xbbf476(452) + _0xbbf476(465) + _0xbbf476(549) + _0xbbf476(499) + _0xbbf476(383) + _0x39d95a);
      if (_0x8a7ee7.ok) {
        const _0x5f353e = await _0x8a7ee7[_0xbbf476(215)]();
        _0x5f353e[_0xbbf476(200)] && _0x79434f[_0xbbf476(230)](_0x5f353e[_0xbbf476(406)][_0xbbf476(530)], 0) && (_0x2baccf[_0x39d95a] = _0x5f353e[_0xbbf476(406)][0][_0xbbf476(201) + _0xbbf476(276)][0]);
      }
    } catch (_0x20a951) {
      console[_0xbbf476(554)](_0xbbf476(508) + _0xbbf476(385) + _0xbbf476(451) + _0xbbf476(575) + _0x39d95a + ":", _0x20a951);
    }
    try {
      const _0x5272b7 = await _0x79434f[_0xbbf476(268)](fetch, _0xbbf476(475) + _0xbbf476(516) + _0xbbf476(362) + _0xbbf476(443) + _0xbbf476(528) + _0xbbf476(538) + _0x39d95a);
      if (_0x5272b7.ok) {
        const _0x4dda26 = await _0x5272b7[_0xbbf476(215)]();
        _0x79434f[_0xbbf476(380)](_0x4dda26[_0xbbf476(251)], _0x79434f[_0xbbf476(402)]) && _0x4dda26[_0xbbf476(299)][_0xbbf476(406)][_0xbbf476(559)][_0xbbf476(412)] && (_0x2baccf[_0x39d95a] = _0x4dda26[_0xbbf476(299)][_0xbbf476(406)][_0xbbf476(559)][_0xbbf476(412)]);
      }
    } catch (_0xf86168) {
      console[_0xbbf476(554)](_0xbbf476(508) + _0xbbf476(325) + _0xbbf476(210) + _0xbbf476(575) + _0x39d95a + ":", _0xf86168);
    }
  });
  return await Promise[_0x1c0620(255)](_0x3db652), _0x2baccf;
}
function renderMatches(_0x4edef6) {
  const _0x2d23f1 = _0x3d30e9, _0xf298de = {ZNFFy: function (_0x3764a8, _0x56d6bb) {
    return _0x3764a8 >= _0x56d6bb;
  }, WADKZ: function (_0x3523ee, _0x4d701c) {
    return _0x3523ee <= _0x4d701c;
  }, ExDvq: function (_0x2d55cb, _0x4d5bf8) {
    return _0x2d55cb + _0x4d5bf8;
  }, HSVjo: function (_0x310497, _0x2c8f55) {
    return _0x310497 * _0x2c8f55;
  }, huTYY: function (_0xa613cb, _0x38bb12) {
    return _0xa613cb * _0x38bb12;
  }, dwhHf: function (_0x9726e8, _0x5cec00) {
    return _0x9726e8 >= _0x5cec00;
  }, wqzuZ: function (_0x18e0d2, _0x538b7d) {
    return _0x18e0d2 * _0x538b7d;
  }, HlOFN: function (_0x1d49a4, _0x1b1e73) {
    return _0x1d49a4 * _0x1b1e73;
  }, sFzRc: function (_0x42c07b, _0x4d6769) {
    return _0x42c07b && _0x4d6769;
  }, MUuhr: function (_0x58b53b, _0x5ace17) {
    return _0x58b53b && _0x5ace17;
  }, HRfww: function (_0x584821, _0x79f2dd) {
    return _0x584821 <= _0x79f2dd;
  }, NJQTq: function (_0x33504c, _0x3c2f8d) {
    return _0x33504c + _0x3c2f8d;
  }, wysyC: function (_0x304928, _0x5d61cf) {
    return _0x304928 * _0x5d61cf;
  }, kHOrA: function (_0x157ac7, _0x9bec1e) {
    return _0x157ac7 * _0x9bec1e;
  }, GAHtq: _0x2d23f1(196), qBPcS: _0x2d23f1(322) + _0x2d23f1(435), YAkhc: _0x2d23f1(369), vzgCS: _0x2d23f1(261) + "e", QyJTe: _0x2d23f1(370), xgUCY: _0x2d23f1(459) + "s", krkGe: _0x2d23f1(269), UwDKm: _0x2d23f1(273), ubHbf: function (_0x136425, _0x6eb3f5) {
    return _0x136425(_0x6eb3f5);
  }, roayJ: _0x2d23f1(384) + _0x2d23f1(532) + _0x2d23f1(495) + _0x2d23f1(360) + _0x2d23f1(244) + _0x2d23f1(553) + _0x2d23f1(213) + _0x2d23f1(577), xfOrE: function (_0x405209) {
    return _0x405209();
  }, cvfSN: _0x2d23f1(376) + _0x2d23f1(198)}, _0x4ac405 = document[_0x2d23f1(366) + _0x2d23f1(280)](_0xf298de[_0x2d23f1(571)]);
  _0x4ac405[_0x2d23f1(492)] = "", _0x4edef6[_0x2d23f1(403)]((_0x14db6c, _0x3b9b6a) => {
    const _0x353157 = _0x2d23f1, _0x411426 = new Date, _0x300cf8 = new Date(_0x14db6c[_0x353157(423)] + "T" + _0x14db6c[_0x353157(348)]), _0x384e69 = new Date(_0x3b9b6a[_0x353157(423)] + "T" + _0x3b9b6a[_0x353157(348)]), _0x2a2f57 = _0xf298de[_0x353157(279)](_0x411426, _0x300cf8) && _0xf298de[_0x353157(466)](_0x411426, new Date(_0xf298de[_0x353157(334)](_0x300cf8[_0x353157(550)](), _0xf298de[_0x353157(310)](_0xf298de[_0x353157(310)](_0xf298de[_0x353157(304)](2, 60), 60), 1e3)))), _0x23b305 = _0xf298de[_0x353157(488)](_0x411426, _0x384e69) && _0xf298de[_0x353157(466)](_0x411426, new Date(_0xf298de[_0x353157(334)](_0x384e69[_0x353157(550)](), _0xf298de[_0x353157(471)](_0xf298de[_0x353157(304)](_0xf298de[_0x353157(238)](2, 60), 60), 1e3))));
    if (_0xf298de[_0x353157(352)](_0x2a2f57, !_0x23b305)) return -1;
    if (_0xf298de[_0x353157(358)](!_0x2a2f57, _0x23b305)) return 1;
    return 0;
  }), _0x4edef6[_0x2d23f1(410)](_0x29f451 => {
    const _0x52f18b = _0x2d23f1, _0x2a8b33 = _0x29f451[_0x52f18b(365)] || _0x29f451[_0x52f18b(354)] || _0x29f451[_0x52f18b(330)], _0x118567 = new Date, _0x427b07 = new Date(_0x29f451[_0x52f18b(423)] + "T" + _0x29f451[_0x52f18b(348)]), _0x4fea27 = _0xf298de[_0x52f18b(279)](_0x118567, _0x427b07) && _0xf298de[_0x52f18b(469)](_0x118567, new Date(_0xf298de[_0x52f18b(405)](_0x427b07[_0x52f18b(550)](), _0xf298de[_0x52f18b(238)](_0xf298de[_0x52f18b(434)](_0xf298de[_0x52f18b(267)](2, 60), 60), 1e3)))), _0x453cbb = document[_0x52f18b(368) + _0x52f18b(341)](_0xf298de[_0x52f18b(568)]);
    _0x453cbb[_0x52f18b(431)] = _0xf298de[_0x52f18b(302)], _0x453cbb[_0x52f18b(178) + "te"](_0xf298de[_0x52f18b(445)], _0x29f451[_0x52f18b(423)][_0x52f18b(467) + "e"]()), _0x453cbb[_0x52f18b(178) + "te"](_0xf298de[_0x52f18b(212)], _0x29f451[_0x52f18b(248)][_0x52f18b(467) + "e"]()), _0x453cbb[_0x52f18b(178) + "te"](_0xf298de[_0x52f18b(419)], _0x29f451[_0x52f18b(257)][_0x52f18b(467) + "e"]()), _0x453cbb[_0x52f18b(178) + "te"](_0xf298de[_0x52f18b(457)], _0x4fea27 ? _0xf298de[_0x52f18b(324)] : _0xf298de[_0x52f18b(217)]);
    const _0x3b2ce9 = !_0x4fea27 ? _0x52f18b(384) + _0x52f18b(190) + _0x52f18b(513) + _0x52f18b(539) + _0x29f451[_0x52f18b(423)] + "T" + _0x29f451[_0x52f18b(348)] + (_0x52f18b(484) + _0x52f18b(421) + _0x52f18b(486)) : "";
    _0x453cbb[_0x52f18b(492)] = _0x52f18b(501) + _0x52f18b(493) + _0x52f18b(534) + _0x52f18b(500) + _0x52f18b(496) + _0x52f18b(493) + _0x52f18b(493) + _0x52f18b(384) + _0x52f18b(515) + _0x52f18b(495) + _0x52f18b(477) + _0x52f18b(429) + _0x52f18b(266) + _0xf298de[_0x52f18b(294)](formatDate, _0x29f451[_0x52f18b(423)]) + (_0x52f18b(340) + _0x52f18b(493) + _0x52f18b(493) + _0x52f18b(315) + _0x52f18b(389) + _0x52f18b(226) + _0x52f18b(408) + _0x52f18b(225) + " ") + _0x29f451[_0x52f18b(257)] + (_0x52f18b(340) + _0x52f18b(493) + _0x52f18b(493) + _0x52f18b(315) + _0x52f18b(262) + _0x52f18b(576) + _0x52f18b(507) + _0x52f18b(270) + _0x52f18b(583)) + _0x29f451[_0x52f18b(348)] + _0x52f18b(218) + _0x29f451[_0x52f18b(248)] + (_0x52f18b(340) + _0x52f18b(493) + _0x52f18b(493) + "  ") + (_0x4fea27 ? _0xf298de[_0x52f18b(320)] : _0x3b2ce9) + (_0x52f18b(501) + _0x52f18b(493) + _0x52f18b(346) + _0x52f18b(493) + _0x52f18b(292) + _0x52f18b(462) + _0x52f18b(480) + _0x52f18b(221) + _0x52f18b(234) + _0x52f18b(547)) + _0x29f451[_0x52f18b(236)] + _0x52f18b(252) + _0x29f451[_0x52f18b(365)] + _0x52f18b(252) + _0x29f451[_0x52f18b(354)] + _0x52f18b(252) + _0x29f451[_0x52f18b(330)] + _0x52f18b(252) + _0x29f451[_0x52f18b(257)] + (_0x52f18b(506) + _0x52f18b(493) + _0x52f18b(194) + _0x52f18b(495) + _0x52f18b(432) + _0x52f18b(205) + _0x52f18b(567) + _0x52f18b(493) + _0x52f18b(493) + _0x52f18b(227) + _0x52f18b(493) + _0x52f18b(415)), _0x4ac405[_0x52f18b(291) + "d"](_0x453cbb), _0x4fea27 && !sentNotifications[_0x52f18b(441)](_0x29f451[_0x52f18b(236)]) && (_0xf298de[_0x52f18b(294)](sendTelegramNotification, _0x29f451), sentNotifications[_0x52f18b(479)](_0x29f451[_0x52f18b(236)]), _0xf298de[_0x52f18b(586)](saveSentNotifications));
  });
}
function updateCountdown() {
  const _0x16a851 = _0x3d30e9, _0xbd5ae1 = {XQaoC: _0x16a851(582), MCgVv: function (_0x5f2b2e, _0x8100) {
    return _0x5f2b2e - _0x8100;
  }, pJpAY: function (_0x4a38e1, _0x337956) {
    return _0x4a38e1 <= _0x337956;
  }, aCEGm: function (_0xec811f, _0x4ca5e9) {
    return _0xec811f / _0x4ca5e9;
  }, YXXEA: function (_0x4b5e8e, _0x3260df) {
    return _0x4b5e8e * _0x3260df;
  }, YWOHe: function (_0x58230c, _0x4f65d4) {
    return _0x58230c / _0x4f65d4;
  }, XHLZA: function (_0x5d1bfe, _0x3f9a67) {
    return _0x5d1bfe % _0x3f9a67;
  }, ZraOr: function (_0x4b044a, _0x339dc3) {
    return _0x4b044a / _0x339dc3;
  }, dCGlh: function (_0x2a8d74, _0xd6573) {
    return _0x2a8d74 % _0xd6573;
  }, oobTI: function (_0x26487c, _0x54c336) {
    return _0x26487c * _0x54c336;
  }, CBWuE: _0x16a851(497) + "r]"}, _0x312773 = document[_0x16a851(386) + _0x16a851(211)](_0xbd5ae1[_0x16a851(332)]), _0x270732 = new Date;
  _0x312773[_0x16a851(410)](_0x3bd97b => {
    const _0x21022b = _0x16a851, _0x48c931 = new Date(_0x3bd97b[_0x21022b(442) + "te"](_0xbd5ae1[_0x21022b(481)])), _0x2bab65 = _0xbd5ae1[_0x21022b(242)](_0x48c931, _0x270732);
    if (_0xbd5ae1[_0x21022b(171)](_0x2bab65, 0)) _0x3bd97b[_0x21022b(418) + "t"] = ""; else {
      const _0x3c33d0 = Math[_0x21022b(514)](_0xbd5ae1[_0x21022b(250)](_0x2bab65, _0xbd5ae1[_0x21022b(228)](_0xbd5ae1[_0x21022b(228)](1e3, 60), 60))), _0x419f9a = Math[_0x21022b(514)](_0xbd5ae1[_0x21022b(186)](_0xbd5ae1[_0x21022b(377)](_0x2bab65, _0xbd5ae1[_0x21022b(228)](_0xbd5ae1[_0x21022b(228)](1e3, 60), 60)), _0xbd5ae1[_0x21022b(228)](1e3, 60))), _0x2308e1 = Math[_0x21022b(514)](_0xbd5ae1[_0x21022b(308)](_0xbd5ae1[_0x21022b(563)](_0x2bab65, _0xbd5ae1[_0x21022b(327)](1e3, 60)), 1e3));
      _0x3bd97b[_0x21022b(418) + "t"] = _0x3c33d0 + "h " + _0x419f9a + "m " + _0x2308e1 + "s";
    }
  });
}
function playMatch(_0x1256af, _0x571394, _0x205460, _0x5eb506, _0x395ffd) {
  const _0x482669 = _0x3d30e9, _0x4edad6 = {NXbxz: _0x482669(361) + _0x482669(235), SxbBv: _0x482669(508) + _0x482669(351) + _0x482669(350), ZXlVz: function (_0x1c758b, _0x1d457b) {
    return _0x1c758b || _0x1d457b;
  }, lJPyy: _0x482669(265) + _0x482669(198), sWjVg: function (_0x27a89a, _0x3fe4e3) {
    return _0x27a89a(_0x3fe4e3);
  }, eZGjb: _0x482669(197), GFENd: _0x482669(578), xMrJB: _0x482669(288), XKlsd: _0x482669(283), EFMTf: _0x482669(189), JgaXE: function (_0x5c1735, _0x41cee5) {
    return _0x5c1735(_0x41cee5);
  }};
  let _0x50e210 = _0x4edad6[_0x482669(503)](_0x571394, _0x205460) || _0x5eb506;
  _0x4edad6[_0x482669(264)](fetch, _0x571394)[_0x482669(247)](_0x5ba0d9 => {
    const _0x5c44bf = _0x482669;
    if (!_0x5ba0d9.ok) throw new Error(_0x4edad6[_0x5c44bf(349)]);
    return _0x5ba0d9;
  })[_0x482669(555)](_0x4d1822 => {
    const _0x1e8864 = _0x482669;
    console[_0x1e8864(554)](_0x4edad6[_0x1e8864(570)], _0x4d1822), _0x50e210 = _0x4edad6[_0x1e8864(503)](_0x205460, _0x5eb506);
  })[_0x482669(489)](() => {
    const _0x35718b = _0x482669;
    _0x5eb506 ? document[_0x35718b(366) + _0x35718b(280)](_0x4edad6[_0x35718b(347)])[_0x35718b(492)] = _0x35718b(544) + _0x35718b(313) + _0x5eb506 + (_0x35718b(367) + _0x35718b(420) + _0x35718b(407) + _0x35718b(246) + _0x35718b(404) + _0x35718b(278) + _0x35718b(342) + _0x35718b(482) + _0x35718b(169) + _0x35718b(519) + _0x35718b(444) + _0x35718b(303) + _0x35718b(316)) : _0x4edad6[_0x35718b(401)](jwplayer, _0x4edad6[_0x35718b(347)])[_0x35718b(167)]({file: _0x50e210, width: _0x4edad6[_0x35718b(321)], aspectratio: _0x4edad6[_0x35718b(328)], image: " "}), document[_0x35718b(366) + _0x35718b(280)](_0x4edad6[_0x35718b(347)])[_0x35718b(182) + _0x35718b(375)]({behavior: _0x4edad6[_0x35718b(177)], block: _0x4edad6[_0x35718b(300)]}), document[_0x35718b(366) + _0x35718b(280)](_0x4edad6[_0x35718b(574)])[_0x35718b(418) + "t"] = _0x395ffd, _0x4edad6[_0x35718b(401)](loadChannels, _0x1256af);
  });
}
async function loadChannels(_0x2324dd) {
  const _0x3a2af5 = _0x3d30e9, _0x52d93f = {jWMdY: function (_0x166c11, _0xc16e86) {
    return _0x166c11(_0xc16e86);
  }, grebE: _0x3a2af5(272) + _0x3a2af5(317) + _0x3a2af5(545), JxedF: function (_0x4fc2b6, _0x458956) {
    return _0x4fc2b6 > _0x458956;
  }, TUnPx: function (_0x3e7e7b, _0x58e10a) {
    return _0x3e7e7b(_0x58e10a);
  }, rGfhw: _0x3a2af5(414) + "st", Mfyqv: _0x3a2af5(224), HPnND: _0x3a2af5(541), IbPuq: _0x3a2af5(508) + _0x3a2af5(381) + _0x3a2af5(311)};
  try {
    const _0x316e75 = await _0x52d93f[_0x3a2af5(523)](fetch, _0x3a2af5(452) + _0x3a2af5(465) + _0x3a2af5(549) + _0x3a2af5(499) + _0x3a2af5(383) + _0x2324dd);
    if (!_0x316e75.ok) throw new Error(_0x52d93f[_0x3a2af5(258)]);
    const _0x45eb28 = await _0x316e75[_0x3a2af5(215)]();
    _0x45eb28[_0x3a2af5(200)] && _0x52d93f[_0x3a2af5(237)](_0x45eb28[_0x3a2af5(406)][_0x3a2af5(530)], 0) ? (_0x52d93f[_0x3a2af5(523)](renderChannels, _0x45eb28[_0x3a2af5(406)]), _0x52d93f[_0x3a2af5(399)](renderServerMenu, _0x45eb28[_0x3a2af5(406)])) : (document[_0x3a2af5(366) + _0x3a2af5(280)](_0x52d93f[_0x3a2af5(526)])[_0x3a2af5(409)][_0x3a2af5(581)] = _0x52d93f[_0x3a2af5(521)], document[_0x3a2af5(366) + _0x3a2af5(280)](_0x52d93f[_0x3a2af5(512)])[_0x3a2af5(409)][_0x3a2af5(581)] = _0x52d93f[_0x3a2af5(521)]);
  } catch (_0x23ef75) {
    console[_0x3a2af5(554)](_0x52d93f[_0x3a2af5(357)], _0x23ef75), document[_0x3a2af5(366) + _0x3a2af5(280)](_0x52d93f[_0x3a2af5(526)])[_0x3a2af5(409)][_0x3a2af5(581)] = _0x52d93f[_0x3a2af5(521)], document[_0x3a2af5(366) + _0x3a2af5(280)](_0x52d93f[_0x3a2af5(512)])[_0x3a2af5(409)][_0x3a2af5(581)] = _0x52d93f[_0x3a2af5(521)];
  }
}
function _0x437c() {
  const _0x55a8af = ["getDate", "setItem", "textConten", "QyJTe", '00%" heigh', " Soon...</", "ccessfully", "date", "map", "from", "ps://bit.l", "AWzpC", "filter", 'ndar-alt">', "value", "className", "as fa-play", "dFfsv", "wysyC", "ard", "')\">", "PZSUF", "gue</optio", "GIqAA", "mgrLB", "has", "getAttribu", "match/matc", 'lscreen="t', "YAkhc", "HQkDZ", "BVHRW", "unAlo", "KJOze", "rwhLG", " URL for m", "https://ap", "CeSca", "RyLgD", "fTYzG", "Notificati", "xgUCY", "1730193DJHXha", "data-statu", "fas fa-ser", "November", "utton clas", "AdKYw", " <button o", "i.90min.to", "WADKZ", "toLowerCas", "🚨 Live Now", "HRfww", ".schedule-", "wqzuZ", "getMonth", "tlive", "input", "https://83", "ayChannel(", "as fa-cale", "JpxLm", "add", 's="watch-b', "XQaoC", "ts allow-s", "10103696BhhCGX", '">Starting', "pButton", "span>", "May", "dwhHf", "finally", "dateFilter", "nUOTI", "innerHTML", "          ", "on sent su", 'i class="f', 'nfo">\n    ', "[data-time", "loader", "channels?m", 's="match-i', "\n         ", "phBQn", "ZXlVz", "load match", "documentEl", "')\">\n     ", 'ss="fas fa', "Failed to ", "show", "nuhUE", "getItem", "HPnND", 'wn" data-t', "floor", 's="date"><', "3zb296.app", "e.json", "uWczc", '" allowful', "qxyWK", "Mfyqv", "XUBxd", "jWMdY", "OvcrR", "la.github.", "rGfhw", "ShIAT", "h_info?mat", "ication:", "length", "zJUgS", 's="live"><', "jeODd", " <div clas", "TIRXC", "kMRSL", "apply", "chId=", 'imer="', "pTWDt", "serverMenu", ":AAGG4SAfi", "January", "<iframe sr", " not ok", "September", "Match('", "getFullYea", "/v1/match/", "getTime", "March", "LmaOg", 'r"></i> Li', "error", "catch", "EBviG", "xIcst", "send notif", "match", "scrollToTo", "GaIIU", "ter by Lea", "dCGlh", 'ver"></i> ', "parse", "duzga", "/i> Watch\n", "GAHtq", "486LrOrfw", "SxbBv", "cvfSN", "OWgRd", "fnwfW", "EFMTf", "atchId ", 'ls"><i cla', "an>", "16:9", "addEventLi", "HiPjA", "display", "data-timer", "i> ", "3256128pKTulu", "i.telegram", "xfOrE", "setup", "classList", "ame-origin", "RkPmQ", "pJpAY", "emOLM", "ge?chat_id", "y/zonaspor", '<i class="', "yATES", "xMrJB", "setAttribu", "0000", "IHMja", "vQhgP", "scrollInto", "7719310uZVhcO", "iZ76AHaEWo", "noMatches", "YWOHe", "ljHLX", "&text=", "matchTitle", 's="countdo', "https://wa", "suiqO", "OPGqD", "         <", "23795c", "div", "100%", "ntainer", "e</option>", "status", "streaming_", "leagueFilt", "onclick", "Loaded", '-circle"><', "cation:", "December", "YGEVk", "2xDvlUW", "oUrl for m", "torAll", "vzgCS", "ve Now</sp", "iframe_url", "json", "scrollTop", "UwDKm", " | ", "teamSearch", "TPGgR", 'utton" onc', "bkroI", "epKff", "none", 'sers"></i>', '"><i class', "</button>\n", "YXXEA", ".org/bot", "Rqtnv", "name", "thub.io/bo", "zCWMq", 'lick="play', "ailed", "videoId", "JxedF", "HlOFN", "oUIYW", "prrIL", "block", "MCgVv", "PICul", "dcast-towe", "YIBpx", "rameborder", "then", "league", "August", "aCEGm", "code", "', '", "stener", "GET", "all", "DAOUE", "teams", "grebE", "button", "ffLGV", "data-leagu", 'ass="detai', "mQplH", "JgaXE", "jwplayerCo", "</i> ", "kHOrA", "xnzUF", "live", '-clock"></', "zIePb", "Network re", "upcoming", "hdnJe", "gmnBD", "urls", "June", 'ling="no"a', "ZNFFy", "ById", "Server ", "ter by Dat", "start", 'nclick="pl', "JJKfH", "11053bedPSs", "flex", "smooth", "pjMTK", "October", "appendChil", "        <b", "2904380rsANhR", "ubHbf", "April", "10lzbuXV", "RZbwk", "\nLink: htt", "data", "XKlsd", "/sendMessa", "qBPcS", 'rue"></ifr', "huTYY", 'lue="">Fil', "channelIte", "xydrS", "ZraOr", "\nLeague: ", "HSVjo", "els:", "FvzLt", 'c="', "body", "  <span cl", "ame>", "sponse was", "QucTV", "cCAVy", "roayJ", "eZGjb", "schedule-c", "zvc2_I5WDk", "krkGe", "fetch vide", "\nTime: ", "oobTI", "GFENd", "change", "iframeURL", "gnDKd", "CBWuE", "bmZtS", "ExDvq", "card", "stringify", "rtakita.gi", "CSLLT", "vwxMD", "</span>\n  ", "ent", "llow-scrip", "IKxLX", "ing notifi", "1267863bmNLUf", " </div>\n  ", "lJPyy", "time", "NXbxz", "URL:", "load live ", "sFzRc", "YTRnU", "m3u8Url", "remove", "io/schedul", "IbPuq", "MUuhr", "ement", "as fa-broa", "Live URL f", "/business/", "clkxW", "includes", "liveUrl", "getElement", '" width="1', "createElem", "data-date", "data-teams", "es:", "DOMContent", "cations", " 🚨\nDate: ", "View", "scheduleCo", "XHLZA", "February", "tHfQS", "yKwKJ", "load chann", "cgQcj", "atchId=", "<span clas", "fetch live", "querySelec", "sentNotifi", "MunAV", 'ass="teams', "OKPnz", "<option va", "Error send", "option", "log", "SHKyy", "daccc", "7598004626", "onscroll", "TUnPx", "mrauP", "sWjVg", "CVeic", "sort", '="0" scrol', "NJQTq", "result", 't="100%" f', '="fas fa-u', "style", "forEach", "1391979650", "videoUrl", "July", "channelsLi", "      "];
  _0x437c = function () {
    return _0x55a8af;
  };
  return _0x437c();
}
function renderChannels(_0x46a333) {
  const _0x4a039c = _0x3d30e9, _0x3f746c = {zIePb: _0x4a039c(306) + "ms", pTWDt: _0x4a039c(414) + "st", fnwfW: _0x4a039c(241)}, _0x47daab = document[_0x4a039c(366) + _0x4a039c(280)](_0x3f746c[_0x4a039c(271)]);
  _0x47daab[_0x4a039c(492)] = "", _0x46a333[_0x4a039c(410)](_0xc05106 => {
    const _0x16ad0a = _0x4a039c, _0xafabf4 = document[_0x16ad0a(368) + _0x16ad0a(341)]("li");
    _0xafabf4[_0x16ad0a(492)] = _0x16ad0a(501) + _0x16ad0a(493) + _0x16ad0a(464) + _0x16ad0a(284) + _0x16ad0a(476) + "'" + _0xc05106[_0x16ad0a(201) + _0x16ad0a(276)][0] + _0x16ad0a(252) + _0xc05106[_0x16ad0a(214)] + _0x16ad0a(436) + _0xc05106[_0x16ad0a(231)] + (_0x16ad0a(227) + _0x16ad0a(493) + _0x16ad0a(415)), _0x47daab[_0x16ad0a(291) + "d"](_0xafabf4);
  }), document[_0x4a039c(366) + _0x4a039c(280)](_0x3f746c[_0x4a039c(540)])[_0x4a039c(409)][_0x4a039c(581)] = _0x3f746c[_0x4a039c(573)];
}
function playChannel(_0x44e2a1, _0x52d7f6) {
  const _0x3418dc = _0x3d30e9, _0x13ae9e = {RZbwk: _0x3418dc(265) + _0x3418dc(198), ShIAT: function (_0x288155, _0x886d63) {
    return _0x288155(_0x886d63);
  }, TIRXC: _0x3418dc(197), tHfQS: _0x3418dc(578), epKff: _0x3418dc(288), DAOUE: _0x3418dc(283)};
  _0x52d7f6 ? document[_0x3418dc(366) + _0x3418dc(280)](_0x13ae9e[_0x3418dc(297)])[_0x3418dc(492)] = _0x3418dc(544) + _0x3418dc(313) + _0x52d7f6 + (_0x3418dc(367) + _0x3418dc(420) + _0x3418dc(407) + _0x3418dc(246) + _0x3418dc(404) + _0x3418dc(278) + _0x3418dc(342) + _0x3418dc(482) + _0x3418dc(169) + _0x3418dc(519) + _0x3418dc(444) + _0x3418dc(303) + _0x3418dc(316)) : _0x13ae9e[_0x3418dc(527)](jwplayer, _0x13ae9e[_0x3418dc(297)])[_0x3418dc(167)]({file: _0x44e2a1, width: _0x13ae9e[_0x3418dc(535)], aspectratio: _0x13ae9e[_0x3418dc(379)], image: " "}), document[_0x3418dc(366) + _0x3418dc(280)](_0x13ae9e[_0x3418dc(297)])[_0x3418dc(182) + _0x3418dc(375)]({behavior: _0x13ae9e[_0x3418dc(223)], block: _0x13ae9e[_0x3418dc(256)]});
}
function renderServerMenu(_0x129e16) {
  const _0x4619c4 = _0x3d30e9, _0x2769aa = {uWczc: _0x4619c4(259), nUOTI: _0x4619c4(541), rwhLG: _0x4619c4(241)}, _0x1c9261 = document[_0x4619c4(366) + _0x4619c4(280)](_0x2769aa[_0x4619c4(491)]);
  _0x1c9261[_0x4619c4(492)] = "";
  let _0x87c466 = 1;
  _0x129e16[_0x4619c4(410)]((_0x83449, _0x463db4) => {
    const _0xe397a7 = _0x4619c4;
    _0x83449[_0xe397a7(201) + _0xe397a7(276)][_0xe397a7(410)]((_0xfa1a6e, _0x1a21cc) => {
      const _0x1f3c09 = _0xe397a7, _0x165b37 = document[_0x1f3c09(368) + _0x1f3c09(341)](_0x2769aa[_0x1f3c09(518)]);
      _0x165b37[_0x1f3c09(492)] = _0x1f3c09(175) + _0x1f3c09(460) + _0x1f3c09(564) + _0x1f3c09(281) + _0x87c466, _0x165b37[_0x1f3c09(203)] = () => playChannel(_0xfa1a6e, _0x83449[_0x1f3c09(214)]), _0x1c9261[_0x1f3c09(291) + "d"](_0x165b37), _0x87c466++;
    });
  }), document[_0x4619c4(366) + _0x4619c4(280)](_0x2769aa[_0x4619c4(491)])[_0x4619c4(409)][_0x4619c4(581)] = _0x2769aa[_0x4619c4(450)];
}
function populateFilters(_0x58704e) {
  const _0x1f7054 = _0x3d30e9, _0x49fe6d = {gnDKd: _0x1f7054(393), vQhgP: function (_0xcf4f6, _0xdd0bdc) {
    return _0xcf4f6(_0xdd0bdc);
  }, gmnBD: _0x1f7054(490), mrauP: _0x1f7054(202) + "er", OKPnz: _0x1f7054(391) + _0x1f7054(305) + _0x1f7054(282) + _0x1f7054(199), kMRSL: _0x1f7054(391) + _0x1f7054(305) + _0x1f7054(562) + _0x1f7054(438) + "n>"}, _0x475352 = document[_0x1f7054(366) + _0x1f7054(280)](_0x49fe6d[_0x1f7054(275)]), _0x131fee = document[_0x1f7054(366) + _0x1f7054(280)](_0x49fe6d[_0x1f7054(400)]);
  _0x475352[_0x1f7054(492)] = _0x49fe6d[_0x1f7054(390)], _0x131fee[_0x1f7054(492)] = _0x49fe6d[_0x1f7054(536)];
  const _0x73ceb5 = [...new Set(_0x58704e[_0x1f7054(424)](_0x584338 => _0x584338[_0x1f7054(423)]))], _0x48f10c = [...new Set(_0x58704e[_0x1f7054(424)](_0x33d057 => _0x33d057[_0x1f7054(248)]))];
  _0x73ceb5[_0x1f7054(410)](_0x31f19f => {
    const _0x444db1 = _0x1f7054, _0x89f074 = document[_0x444db1(368) + _0x444db1(341)](_0x49fe6d[_0x444db1(331)]);
    _0x89f074[_0x444db1(430)] = _0x31f19f[_0x444db1(467) + "e"](), _0x89f074[_0x444db1(418) + "t"] = _0x49fe6d[_0x444db1(181)](formatDate, _0x31f19f), _0x475352[_0x444db1(291) + "d"](_0x89f074);
  }), _0x48f10c[_0x1f7054(410)](_0x79fdf6 => {
    const _0x8b8a90 = _0x1f7054, _0x2cca5c = document[_0x8b8a90(368) + _0x8b8a90(341)](_0x49fe6d[_0x8b8a90(331)]);
    _0x2cca5c[_0x8b8a90(430)] = _0x79fdf6[_0x8b8a90(467) + "e"](), _0x2cca5c[_0x8b8a90(418) + "t"] = _0x79fdf6, _0x131fee[_0x8b8a90(291) + "d"](_0x2cca5c);
  });
}
function filterMatches() {
  const _0x23173d = _0x3d30e9, _0x276c4c = {mgrLB: _0x23173d(369), SHKyy: _0x23173d(261) + "e", PZSUF: _0x23173d(370), nuhUE: function (_0x1904e7, _0x792e69) {
    return _0x1904e7 === _0x792e69;
  }, suiqO: function (_0x546465, _0x310b75) {
    return _0x546465 && _0x310b75;
  }, qxyWK: _0x23173d(459) + "s", jeODd: _0x23173d(269), QucTV: function (_0x48ae41, _0x2a7a2a) {
    return _0x48ae41 !== _0x2a7a2a;
  }, HQkDZ: function (_0x7eeff2, _0x42c1c7) {
    return _0x7eeff2 !== _0x42c1c7;
  }, GIqAA: _0x23173d(287), PICul: _0x23173d(490), TPGgR: _0x23173d(202) + "er", HiPjA: _0x23173d(219), MunAV: _0x23173d(470) + _0x23173d(335), RyLgD: _0x23173d(185), fTYzG: function (_0x2f1838, _0x4eda5a) {
    return _0x2f1838 === _0x4eda5a;
  }, ljHLX: _0x23173d(509)}, _0x12c10d = document[_0x23173d(366) + _0x23173d(280)](_0x276c4c[_0x23173d(243)])[_0x23173d(430)][_0x23173d(467) + "e"](), _0x509c93 = document[_0x23173d(366) + _0x23173d(280)](_0x276c4c[_0x23173d(220)])[_0x23173d(430)][_0x23173d(467) + "e"](), _0x4461e2 = document[_0x23173d(366) + _0x23173d(280)](_0x276c4c[_0x23173d(580)])[_0x23173d(430)][_0x23173d(467) + "e"](), _0x3ecc34 = document[_0x23173d(386) + _0x23173d(211)](_0x276c4c[_0x23173d(388)]);
  let _0x4257ca = 0;
  const _0x1674f8 = Array[_0x23173d(425)](_0x3ecc34)[_0x23173d(428)](_0x44a27f => {
    const _0x494a5d = _0x23173d, _0x6eeb80 = _0x44a27f[_0x494a5d(442) + "te"](_0x276c4c[_0x494a5d(440)]), _0x33581a = _0x44a27f[_0x494a5d(442) + "te"](_0x276c4c[_0x494a5d(395)]), _0x5f156a = _0x44a27f[_0x494a5d(442) + "te"](_0x276c4c[_0x494a5d(437)]), _0x51a9ad = !_0x12c10d || _0x276c4c[_0x494a5d(510)](_0x6eeb80, _0x12c10d), _0x5fdb72 = !_0x509c93 || _0x276c4c[_0x494a5d(510)](_0x33581a, _0x509c93), _0x313df0 = !_0x4461e2 || _0x5f156a[_0x494a5d(364)](_0x4461e2);
    return _0x276c4c[_0x494a5d(192)](_0x51a9ad, _0x5fdb72) && _0x313df0;
  })[_0x23173d(403)]((_0x2146c6, _0x46b76d) => {
    const _0x5a5680 = _0x23173d, _0x4b0796 = _0x2146c6[_0x5a5680(442) + "te"](_0x276c4c[_0x5a5680(520)]), _0x5b7bcc = _0x46b76d[_0x5a5680(442) + "te"](_0x276c4c[_0x5a5680(520)]);
    if (_0x276c4c[_0x5a5680(510)](_0x4b0796, _0x276c4c[_0x5a5680(533)]) && _0x276c4c[_0x5a5680(318)](_0x5b7bcc, _0x276c4c[_0x5a5680(533)])) return -1;
    if (_0x276c4c[_0x5a5680(446)](_0x4b0796, _0x276c4c[_0x5a5680(533)]) && _0x276c4c[_0x5a5680(510)](_0x5b7bcc, _0x276c4c[_0x5a5680(533)])) return 1;
    return 0;
  });
  _0x3ecc34[_0x23173d(410)](_0x1bd79b => _0x1bd79b[_0x23173d(409)][_0x23173d(581)] = _0x23173d(224)), _0x1674f8[_0x23173d(410)](_0x14021b => {
    const _0x49ae89 = _0x23173d;
    _0x14021b[_0x49ae89(409)][_0x49ae89(581)] = _0x276c4c[_0x49ae89(439)], _0x4257ca++;
  });
  const _0x5e14ef = document[_0x23173d(366) + _0x23173d(280)](_0x276c4c[_0x23173d(454)]);
  _0x276c4c[_0x23173d(455)](_0x4257ca, 0) ? _0x5e14ef[_0x23173d(168)][_0x23173d(479)](_0x276c4c[_0x23173d(187)]) : _0x5e14ef[_0x23173d(168)][_0x23173d(355)](_0x276c4c[_0x23173d(187)]);
}
function resetFilters() {
  const _0x4cd5db = _0x3d30e9, _0x9b8521 = {YTRnU: _0x4cd5db(490), yATES: _0x4cd5db(202) + "er", mQplH: _0x4cd5db(219), clkxW: function (_0x4eb9c8) {
    return _0x4eb9c8();
  }};
  document[_0x4cd5db(366) + _0x4cd5db(280)](_0x9b8521[_0x4cd5db(353)])[_0x4cd5db(430)] = "", document[_0x4cd5db(366) + _0x4cd5db(280)](_0x9b8521[_0x4cd5db(176)])[_0x4cd5db(430)] = "", document[_0x4cd5db(366) + _0x4cd5db(280)](_0x9b8521[_0x4cd5db(263)])[_0x4cd5db(430)] = "", _0x9b8521[_0x4cd5db(363)](filterMatches);
}
function debounce(_0x465bd6, _0x18cdb5) {
  const _0x469369 = {zJUgS: function (_0x5c4a84, _0x497382) {
    return _0x5c4a84(_0x497382);
  }, CSLLT: function (_0x512e03, _0x328c99, _0x2b7b23) {
    return _0x512e03(_0x328c99, _0x2b7b23);
  }};
  let _0x332ff0;
  return function (..._0x386c99) {
    const _0x30292b = _0xa342;
    _0x469369[_0x30292b(531)](clearTimeout, _0x332ff0), _0x332ff0 = _0x469369[_0x30292b(338)](setTimeout, () => _0x465bd6[_0x30292b(537)](this, _0x386c99), _0x18cdb5);
  };
}
document[_0x3d30e9(366) + _0x3d30e9(280)](_0x3d30e9(219))[_0x3d30e9(579) + _0x3d30e9(253)](_0x3d30e9(474), debounce(filterMatches, 300)), document[_0x3d30e9(366) + _0x3d30e9(280)](_0x3d30e9(490))[_0x3d30e9(579) + _0x3d30e9(253)](_0x3d30e9(329), filterMatches), document[_0x3d30e9(366) + _0x3d30e9(280)](_0x3d30e9(202) + "er")[_0x3d30e9(579) + _0x3d30e9(253)](_0x3d30e9(329), filterMatches), document[_0x3d30e9(579) + _0x3d30e9(253)](_0x3d30e9(372) + _0x3d30e9(204), loadMatches), window[_0x3d30e9(398)] = function () {
  const _0x244e13 = _0x3d30e9, _0x33e282 = {zCWMq: function (_0x34aad7) {
    return _0x34aad7();
  }};
  _0x33e282[_0x244e13(233)](scrollFunction);
};
function scrollFunction() {
  const _0x30aaf0 = _0x3d30e9, _0x9ed829 = {AWzpC: function (_0x38db99, _0xa73f02) {
    return _0x38db99 > _0xa73f02;
  }, KJOze: _0x30aaf0(560) + _0x30aaf0(485), LmaOg: _0x30aaf0(241), JJKfH: _0x30aaf0(224)};
  _0x9ed829[_0x30aaf0(427)](document[_0x30aaf0(314)][_0x30aaf0(216)], 20) || _0x9ed829[_0x30aaf0(427)](document[_0x30aaf0(505) + _0x30aaf0(359)][_0x30aaf0(216)], 20) ? document[_0x30aaf0(366) + _0x30aaf0(280)](_0x9ed829[_0x30aaf0(449)])[_0x30aaf0(409)][_0x30aaf0(581)] = _0x9ed829[_0x30aaf0(552)] : document[_0x30aaf0(366) + _0x30aaf0(280)](_0x9ed829[_0x30aaf0(449)])[_0x30aaf0(409)][_0x30aaf0(581)] = _0x9ed829[_0x30aaf0(285)];
}
function scrollToTop() {
  const _0x17d9ae = _0x3d30e9;
  document[_0x17d9ae(314)][_0x17d9ae(216)] = 0, document[_0x17d9ae(505) + _0x17d9ae(359)][_0x17d9ae(216)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x499be4) {
  const _0x18d4c5 = _0x3d30e9, _0x216caa = {RkPmQ: _0x18d4c5(456) + _0x18d4c5(494) + _0x18d4c5(422), FvzLt: _0x18d4c5(508) + _0x18d4c5(558) + _0x18d4c5(529), oUIYW: _0x18d4c5(392) + _0x18d4c5(344) + _0x18d4c5(206), IHMja: function (_0x57bffd, _0x30ff8b) {
    return _0x57bffd(_0x30ff8b);
  }, YGEVk: function (_0x1be058, _0x78102b, _0x175aa1) {
    return _0x1be058(_0x78102b, _0x175aa1);
  }, XUBxd: _0x18d4c5(254)}, _0x18ea70 = _0x18d4c5(468) + ": " + _0x499be4[_0x18d4c5(257)] + _0x18d4c5(374) + _0x216caa[_0x18d4c5(180)](formatDate, _0x499be4[_0x18d4c5(423)]) + _0x18d4c5(326) + _0x499be4[_0x18d4c5(348)] + _0x18d4c5(309) + _0x499be4[_0x18d4c5(248)] + (_0x18d4c5(298) + _0x18d4c5(426) + _0x18d4c5(174) + _0x18d4c5(473)), _0x12cd6c = _0x18d4c5(452) + _0x18d4c5(585) + _0x18d4c5(229) + telegramBotToken + (_0x18d4c5(301) + _0x18d4c5(173) + "=") + telegramChatId + _0x18d4c5(188) + _0x216caa[_0x18d4c5(180)](encodeURIComponent, _0x18ea70);
  _0x216caa[_0x18d4c5(208)](fetch, _0x12cd6c, {method: _0x216caa[_0x18d4c5(522)]})[_0x18d4c5(247)](_0x4fdc50 => _0x4fdc50[_0x18d4c5(215)]())[_0x18d4c5(247)](_0x320165 => {
    const _0x59e836 = _0x18d4c5;
    _0x320165.ok ? console[_0x59e836(394)](_0x216caa[_0x59e836(170)]) : console[_0x59e836(554)](_0x216caa[_0x59e836(312)], _0x320165);
  })[_0x18d4c5(555)](_0x46bc66 => {
    const _0xf7697c = _0x18d4c5;
    console[_0xf7697c(554)](_0x216caa[_0xf7697c(239)], _0x46bc66);
  });
}
