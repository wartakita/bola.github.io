const _0x2b9cd1 = _0x2259;
(function (_0x18cdbc, _0x1d62bf) {
  const _0x5edfa8 = _0x2259, _0x4d7eee = _0x18cdbc();
  while (true) {
    try {
      const _0x15bad2 = parseInt(_0x5edfa8(789)) / 1 + -parseInt(_0x5edfa8(736)) / 2 * (parseInt(_0x5edfa8(613)) / 3) + -parseInt(_0x5edfa8(582)) / 4 * (parseInt(_0x5edfa8(773)) / 5) + parseInt(_0x5edfa8(842)) / 6 * (-parseInt(_0x5edfa8(583)) / 7) + -parseInt(_0x5edfa8(589)) / 8 * (-parseInt(_0x5edfa8(626)) / 9) + -parseInt(_0x5edfa8(563)) / 10 * (-parseInt(_0x5edfa8(545)) / 11) + parseInt(_0x5edfa8(640)) / 12;
      if (_0x15bad2 === _0x1d62bf) break; else _0x4d7eee.push(_0x4d7eee.shift());
    } catch (_0x5a695e) {
      _0x4d7eee.push(_0x4d7eee.shift());
    }
  }
}(_0x2d21, 325110));
const telegramBotToken = _0x2b9cd1(475) + _0x2b9cd1(558) + _0x2b9cd1(707) + _0x2b9cd1(518) + _0x2b9cd1(721), telegramChatId = _0x2b9cd1(501);
function formatDate(_0x8e0168) {
  const _0x3f3973 = _0x2b9cd1, _0x47cdbe = {Xgkpe: _0x3f3973(571), VWsWb: _0x3f3973(512), HCEBJ: _0x3f3973(657), HTkeF: _0x3f3973(653), HEVLq: _0x3f3973(797), xqcAQ: _0x3f3973(700), usXzm: _0x3f3973(579), TUYKK: _0x3f3973(796), JJJLq: _0x3f3973(683), UKMjU: _0x3f3973(853), IOEec: _0x3f3973(793), yZnqa: _0x3f3973(815)}, _0xc4302a = [_0x47cdbe[_0x3f3973(567)], _0x47cdbe[_0x3f3973(614)], _0x47cdbe[_0x3f3973(755)], _0x47cdbe[_0x3f3973(839)], _0x47cdbe[_0x3f3973(684)], _0x47cdbe[_0x3f3973(655)], _0x47cdbe[_0x3f3973(568)], _0x47cdbe[_0x3f3973(847)], _0x47cdbe[_0x3f3973(782)], _0x47cdbe[_0x3f3973(752)], _0x47cdbe[_0x3f3973(496)], _0x47cdbe[_0x3f3973(791)]], _0x4f2002 = new Date(_0x8e0168), _0x15d817 = _0x4f2002[_0x3f3973(544)](), _0x5508d8 = _0xc4302a[_0x4f2002[_0x3f3973(493)]()], _0x647f6f = _0x4f2002[_0x3f3973(548) + "r"]();
  return _0x15d817 + " " + _0x5508d8 + " " + _0x647f6f;
}
async function loadMatches() {
  const _0x4ee5af = _0x2b9cd1, _0x2a9cea = {tqhJJ: _0x4ee5af(838), NaDOX: _0x4ee5af(820), BBHQl: function (_0x1d63b4) {
    return _0x1d63b4();
  }, drMhL: function (_0x44d118, _0x48b5e0) {
    return _0x44d118(_0x48b5e0);
  }, NZJqm: function (_0x3123a5, _0x31f9bd) {
    return _0x3123a5(_0x31f9bd);
  }, Fxrbp: function (_0x885f28) {
    return _0x885f28();
  }, LxiGa: function (_0x207e93, _0x736d72, _0x2e214f) {
    return _0x207e93(_0x736d72, _0x2e214f);
  }, rLTIi: _0x4ee5af(477) + _0x4ee5af(598) + _0x4ee5af(621), RdUcJ: _0x4ee5af(488), NOGIQ: _0x4ee5af(843), bvrMM: _0x4ee5af(821)};
  try {
    document[_0x4ee5af(787) + _0x4ee5af(630)](_0x2a9cea[_0x4ee5af(663)])[_0x4ee5af(737)][_0x4ee5af(775)] = _0x2a9cea[_0x4ee5af(745)];
    const _0xb36d63 = await _0x2a9cea[_0x4ee5af(687)](fetchMatches);
    _0x2a9cea[_0x4ee5af(854)](renderMatches, _0xb36d63), _0x2a9cea[_0x4ee5af(480)](populateFilters, _0xb36d63), _0x2a9cea[_0x4ee5af(687)](filterMatches), _0x2a9cea[_0x4ee5af(696)](updateCountdown), _0x2a9cea[_0x4ee5af(547)](setInterval, updateCountdown, 1e3);
  } catch (_0x3d4f1c) {
    console[_0x4ee5af(540)](_0x2a9cea[_0x4ee5af(648)], _0x3d4f1c), document[_0x4ee5af(787) + _0x4ee5af(630)](_0x2a9cea[_0x4ee5af(557)])[_0x4ee5af(739)][_0x4ee5af(503)](_0x2a9cea[_0x4ee5af(748)]);
  } finally {
    document[_0x4ee5af(787) + _0x4ee5af(630)](_0x2a9cea[_0x4ee5af(663)])[_0x4ee5af(737)][_0x4ee5af(775)] = _0x2a9cea[_0x4ee5af(756)];
  }
}
async function fetchMatches() {
  const _0x1b63f7 = _0x2b9cd1, _0x2caf89 = {kiCrh: function (_0x59fdd, _0x13e8ba) {
    return _0x59fdd(_0x13e8ba);
  }, bmWKY: _0x1b63f7(740) + _0x1b63f7(807) + _0x1b63f7(651) + _0x1b63f7(817) + _0x1b63f7(852) + _0x1b63f7(705), gURGj: _0x1b63f7(706) + _0x1b63f7(650) + _0x1b63f7(560)}, _0x416c36 = await _0x2caf89[_0x1b63f7(484)](fetch, _0x2caf89[_0x1b63f7(603)]);
  if (!_0x416c36.ok) throw new Error(_0x2caf89[_0x1b63f7(573)]);
  const _0x17a85e = await _0x416c36[_0x1b63f7(522)](), _0x37ce96 = await _0x2caf89[_0x1b63f7(484)](fetchLiveUrls, _0x17a85e);
  return _0x17a85e[_0x1b63f7(760)](_0x4b6984 => {
    const _0x2c14c7 = _0x1b63f7;
    _0x4b6984[_0x2c14c7(845)] = _0x37ce96[_0x4b6984[_0x2c14c7(856)]] || _0x4b6984[_0x2c14c7(786)];
  }), _0x17a85e;
}
async function fetchLiveUrls(_0x28c866) {
  const _0x2e4dd5 = _0x2b9cd1, _0x36bddf = {aDbIk: function (_0x4b0c89, _0x514945) {
    return _0x4b0c89(_0x514945);
  }, TlWOd: function (_0x1fdeeb, _0x3011bb) {
    return _0x1fdeeb > _0x3011bb;
  }}, _0x411045 = _0x28c866[_0x2e4dd5(718)](_0x694038 => _0x694038[_0x2e4dd5(856)]), _0x150bd6 = {}, _0x3eb3b4 = _0x411045[_0x2e4dd5(718)](async _0x59d7ac => {
    const _0x226595 = _0x2e4dd5;
    try {
      const _0x594baf = await _0x36bddf[_0x226595(485)](fetch, _0x226595(690) + _0x226595(531) + _0x226595(638) + _0x226595(720) + _0x226595(823) + _0x59d7ac);
      if (_0x594baf.ok) {
        const _0x35ab96 = await _0x594baf[_0x226595(522)]();
        _0x35ab96[_0x226595(798)] && _0x36bddf[_0x226595(656)](_0x35ab96[_0x226595(800)][_0x226595(758)], 0) && (_0x150bd6[_0x59d7ac] = _0x35ab96[_0x226595(800)][0][_0x226595(691) + _0x226595(514)][0]);
      }
    } catch (_0x677501) {
      console[_0x226595(540)](_0x226595(477) + _0x226595(618) + _0x226595(584) + _0x226595(629) + _0x59d7ac + ":", _0x677501);
    }
  });
  return await Promise[_0x2e4dd5(627)](_0x3eb3b4), _0x150bd6;
}
function renderMatches(_0x31637d) {
  const _0x48a2bf = _0x2b9cd1, _0x525221 = {lYRDj: function (_0x2b3436, _0x20e56c) {
    return _0x2b3436 >= _0x20e56c;
  }, SQUmm: function (_0x5b611b, _0x1f2dbc) {
    return _0x5b611b <= _0x1f2dbc;
  }, qulTt: function (_0x40b29b, _0x515fb2) {
    return _0x40b29b + _0x515fb2;
  }, KUYvJ: function (_0x1b2ca8, _0x3f4b3a) {
    return _0x1b2ca8 * _0x3f4b3a;
  }, RETOE: function (_0x2eec84, _0x1c2dad) {
    return _0x2eec84 * _0x1c2dad;
  }, uncru: function (_0x5a2d00, _0x10edbf) {
    return _0x5a2d00 >= _0x10edbf;
  }, dSMqC: function (_0x39a9dd, _0x3870b6) {
    return _0x39a9dd <= _0x3870b6;
  }, puqZA: function (_0x84c92a, _0x5dd98c) {
    return _0x84c92a + _0x5dd98c;
  }, oJUMK: function (_0x5c98c5, _0x30cee1) {
    return _0x5c98c5 * _0x30cee1;
  }, JgGxj: function (_0x90ee8b, _0x5317a0) {
    return _0x90ee8b * _0x5317a0;
  }, LdXzr: function (_0x2f414d, _0x522ffe) {
    return _0x2f414d * _0x522ffe;
  }, fYekl: function (_0x119db0, _0x3e5839) {
    return _0x119db0 && _0x3e5839;
  }, VbFrc: function (_0x4067a5, _0x1bacca) {
    return _0x4067a5 && _0x1bacca;
  }, cKUqS: function (_0x20848e, _0x12f04b) {
    return _0x20848e >= _0x12f04b;
  }, JMyzp: function (_0x33032c, _0x2de5f1) {
    return _0x33032c + _0x2de5f1;
  }, GOJca: function (_0x4f782c, _0x4d6b85) {
    return _0x4f782c * _0x4d6b85;
  }, OpWWi: function (_0x533fc0, _0x190852) {
    return _0x533fc0 * _0x190852;
  }, slJzE: _0x48a2bf(701), mwCPL: _0x48a2bf(835) + _0x48a2bf(702), entHr: _0x48a2bf(552), rbgnf: _0x48a2bf(572) + "e", FBVBa: _0x48a2bf(794), KOGtL: _0x48a2bf(806) + "s", eTBFY: _0x48a2bf(762), RmfpW: _0x48a2bf(688), OcssY: function (_0x358434, _0x22dc74) {
    return _0x358434(_0x22dc74);
  }, TQceU: _0x48a2bf(738) + _0x48a2bf(668) + _0x48a2bf(729) + _0x48a2bf(831) + _0x48a2bf(620) + _0x48a2bf(716) + _0x48a2bf(580) + _0x48a2bf(575), fOtrO: _0x48a2bf(735) + _0x48a2bf(595)}, _0x1a82f4 = document[_0x48a2bf(787) + _0x48a2bf(630)](_0x525221[_0x48a2bf(520)]);
  _0x1a82f4[_0x48a2bf(625)] = "", _0x31637d[_0x48a2bf(694)]((_0x3b59e8, _0xa25b46) => {
    const _0x37c3eb = _0x48a2bf, _0x4ec3a6 = new Date, _0x44b6d1 = new Date(_0x3b59e8[_0x37c3eb(685)] + "T" + _0x3b59e8[_0x37c3eb(770)]), _0x3b116e = new Date(_0xa25b46[_0x37c3eb(685)] + "T" + _0xa25b46[_0x37c3eb(770)]), _0x5f2ab2 = _0x525221[_0x37c3eb(504)](_0x4ec3a6, _0x44b6d1) && _0x525221[_0x37c3eb(744)](_0x4ec3a6, new Date(_0x525221[_0x37c3eb(857)](_0x44b6d1[_0x37c3eb(588)](), _0x525221[_0x37c3eb(768)](_0x525221[_0x37c3eb(768)](_0x525221[_0x37c3eb(631)](2, 60), 60), 1e3)))), _0x2ddd77 = _0x525221[_0x37c3eb(850)](_0x4ec3a6, _0x3b116e) && _0x525221[_0x37c3eb(498)](_0x4ec3a6, new Date(_0x525221[_0x37c3eb(840)](_0x3b116e[_0x37c3eb(588)](), _0x525221[_0x37c3eb(524)](_0x525221[_0x37c3eb(814)](_0x525221[_0x37c3eb(804)](2, 60), 60), 1e3))));
    if (_0x525221[_0x37c3eb(829)](_0x5f2ab2, !_0x2ddd77)) return -1;
    if (_0x525221[_0x37c3eb(666)](!_0x5f2ab2, _0x2ddd77)) return 1;
    return 0;
  }), _0x31637d[_0x48a2bf(760)](_0x3a353f => {
    const _0x59fa41 = _0x48a2bf, _0xb37706 = _0x3a353f[_0x59fa41(845)] || _0x3a353f[_0x59fa41(786)], _0x181033 = new Date, _0x348a2d = new Date(_0x3a353f[_0x59fa41(685)] + "T" + _0x3a353f[_0x59fa41(770)]), _0x408d7c = _0x525221[_0x59fa41(826)](_0x181033, _0x348a2d) && _0x525221[_0x59fa41(498)](_0x181033, new Date(_0x525221[_0x59fa41(723)](_0x348a2d[_0x59fa41(588)](), _0x525221[_0x59fa41(565)](_0x525221[_0x59fa41(804)](_0x525221[_0x59fa41(574)](2, 60), 60), 1e3)))), _0x3c3679 = document[_0x59fa41(848) + _0x59fa41(746)](_0x525221[_0x59fa41(743)]);
    _0x3c3679[_0x59fa41(774)] = _0x525221[_0x59fa41(495)], _0x3c3679[_0x59fa41(717) + "te"](_0x525221[_0x59fa41(828)], _0x3a353f[_0x59fa41(685)][_0x59fa41(664) + "e"]()), _0x3c3679[_0x59fa41(717) + "te"](_0x525221[_0x59fa41(818)], _0x3a353f[_0x59fa41(783)][_0x59fa41(664) + "e"]()), _0x3c3679[_0x59fa41(717) + "te"](_0x525221[_0x59fa41(757)], _0x3a353f[_0x59fa41(646)][_0x59fa41(664) + "e"]()), _0x3c3679[_0x59fa41(717) + "te"](_0x525221[_0x59fa41(528)], _0x408d7c ? _0x525221[_0x59fa41(780)] : _0x525221[_0x59fa41(632)]);
    const _0x5c250b = !_0x408d7c ? _0x59fa41(738) + _0x59fa41(672) + _0x59fa41(851) + _0x59fa41(812) + _0x3a353f[_0x59fa41(685)] + "T" + _0x3a353f[_0x59fa41(770)] + (_0x59fa41(605) + _0x59fa41(509) + _0x59fa41(827)) : "";
    _0x3c3679[_0x59fa41(625)] = _0x59fa41(754) + _0x59fa41(578) + _0x59fa41(810) + _0x59fa41(636) + _0x59fa41(824) + _0x59fa41(578) + _0x59fa41(578) + _0x59fa41(738) + _0x59fa41(645) + _0x59fa41(729) + _0x59fa41(849) + _0x59fa41(699) + _0x59fa41(725) + _0x525221[_0x59fa41(486)](formatDate, _0x3a353f[_0x59fa41(685)]) + (_0x59fa41(586) + _0x59fa41(578) + _0x59fa41(578) + _0x59fa41(564) + _0x59fa41(784) + _0x59fa41(569) + _0x59fa41(802) + _0x59fa41(529) + " ") + _0x3a353f[_0x59fa41(646)] + (_0x59fa41(586) + _0x59fa41(578) + _0x59fa41(578) + _0x59fa41(564) + _0x59fa41(555) + _0x59fa41(665) + _0x59fa41(599) + _0x59fa41(507) + _0x59fa41(771)) + _0x3a353f[_0x59fa41(770)] + _0x59fa41(479) + _0x3a353f[_0x59fa41(783)] + (_0x59fa41(586) + _0x59fa41(578) + _0x59fa41(578) + "  ") + (_0x408d7c ? _0x525221[_0x59fa41(538)] : _0x5c250b) + (_0x59fa41(754) + _0x59fa41(578) + _0x59fa41(830) + _0x59fa41(578) + _0x59fa41(561) + _0x59fa41(667) + _0x59fa41(722) + _0x59fa41(801) + _0x59fa41(491) + _0x59fa41(549)) + _0x3a353f[_0x59fa41(856)] + _0x59fa41(680) + _0x3a353f[_0x59fa41(845)] + _0x59fa41(680) + _0x3a353f[_0x59fa41(786)] + (_0x59fa41(654) + _0x59fa41(578) + _0x59fa41(714) + _0x59fa41(729) + _0x59fa41(689) + _0x59fa41(517) + _0x59fa41(635) + _0x59fa41(578) + _0x59fa41(578) + _0x59fa41(596) + _0x59fa41(578) + _0x59fa41(747)), _0x1a82f4[_0x59fa41(697) + "d"](_0x3c3679), _0x408d7c && _0x525221[_0x59fa41(486)](sendTelegramNotification, _0x3a353f);
  });
}
function updateCountdown() {
  const _0x49ddce = _0x2b9cd1, _0x4b5750 = {CiSvZ: _0x49ddce(511), gCnSn: function (_0x597a24, _0x2eba63) {
    return _0x597a24 - _0x2eba63;
  }, tvFkj: function (_0x45f42e, _0x155e18) {
    return _0x45f42e <= _0x155e18;
  }, iuslk: function (_0x2b4d75, _0x505cb0) {
    return _0x2b4d75 / _0x505cb0;
  }, shrQS: function (_0x15f0a9, _0xf636b0) {
    return _0x15f0a9 * _0xf636b0;
  }, CfToq: function (_0x47ba23, _0x4914d8) {
    return _0x47ba23 * _0x4914d8;
  }, pHOvF: function (_0x409c07, _0x559466) {
    return _0x409c07 / _0x559466;
  }, CkOjm: function (_0x4415ce, _0x4b2832) {
    return _0x4415ce % _0x4b2832;
  }, GMNTl: function (_0x246dc0, _0x37efed) {
    return _0x246dc0 * _0x37efed;
  }, ksIjf: function (_0x41236a, _0x5eef9a) {
    return _0x41236a * _0x5eef9a;
  }, EYoiz: function (_0x2e7946, _0x10fcce) {
    return _0x2e7946 * _0x10fcce;
  }, rTSgo: function (_0x4db468, _0x4d96f2) {
    return _0x4db468 / _0x4d96f2;
  }, KzWhs: function (_0x3233fd, _0x27fa10) {
    return _0x3233fd % _0x27fa10;
  }, OpThr: function (_0x3a12c6, _0x164f5a) {
    return _0x3a12c6 * _0x164f5a;
  }, wohae: _0x49ddce(541) + "r]"}, _0x373784 = document[_0x49ddce(713) + _0x49ddce(592)](_0x4b5750[_0x49ddce(597)]), _0xce833a = new Date;
  _0x373784[_0x49ddce(760)](_0x1d4e65 => {
    const _0x428ef3 = _0x49ddce, _0xa57d0f = new Date(_0x1d4e65[_0x428ef3(777) + "te"](_0x4b5750[_0x428ef3(750)])), _0x175af8 = _0x4b5750[_0x428ef3(649)](_0xa57d0f, _0xce833a);
    if (_0x4b5750[_0x428ef3(719)](_0x175af8, 0)) _0x1d4e65[_0x428ef3(731) + "t"] = ""; else {
      const _0x24100f = Math[_0x428ef3(587)](_0x4b5750[_0x428ef3(795)](_0x175af8, _0x4b5750[_0x428ef3(516)](_0x4b5750[_0x428ef3(601)](1e3, 60), 60))), _0x1c645d = Math[_0x428ef3(587)](_0x4b5750[_0x428ef3(799)](_0x4b5750[_0x428ef3(617)](_0x175af8, _0x4b5750[_0x428ef3(669)](_0x4b5750[_0x428ef3(855)](1e3, 60), 60)), _0x4b5750[_0x428ef3(813)](1e3, 60))), _0xc32c45 = Math[_0x428ef3(587)](_0x4b5750[_0x428ef3(682)](_0x4b5750[_0x428ef3(698)](_0x175af8, _0x4b5750[_0x428ef3(585)](1e3, 60)), 1e3));
      _0x1d4e65[_0x428ef3(731) + "t"] = _0x24100f + "h " + _0x1c645d + "m " + _0xc32c45 + "s";
    }
  });
}
function _0x2d21() {
  const _0x22fa20 = ["🚨 Live Now", "KUYvJ", "eNHnE", "time", "i> ", "MKcbY", "587705MeaPWe", "className", "display", "CrYFV", "getAttribu", "leagueFilt", "channelIte", "eTBFY", " <button o", "JJJLq", "league", 'ass="teams', "log", "m3u8Url", "getElement", "CEOeE", "293204YEVOVI", "dEpIM", "yZnqa", "AHnqH", "November", "data-teams", "iuslk", "August", "May", "status", "pHOvF", "result", 'utton" onc', '="fas fa-u', "ter by Lea", "LdXzr", "then", "data-statu", "rtakita.gi", "ccessfully", "LrsGK", " <div clas", "&text=", 'imer="', "EYoiz", "JgGxj", "December", "cJrbM", "la.github.", "rbgnf", "Live URL f", "block", "none", "body", "atchId=", 'nfo">\n    ', "opusF", "cKUqS", "span>", "entHr", "fYekl", " </div>\n  ", "as fa-broa", "jwplayerCo", "Loaded", "mSAaN", "schedule-c", ".org/bot", "NCooV", "loader", "HTkeF", "puqZA", "ge?chat_id", "3312FGyPhf", "show", "load chann", "liveUrl", "channelsLi", "TUYKK", "createElem", "as fa-cale", "uncru", 'wn" data-t', "io/schedul", "October", "drMhL", "ksIjf", "videoId", "qulTt", "7598004626", "ailed", "Failed to ", "scrollTop", " | ", "NZJqm", "DorMk", "/sendMessa", "SsQZe", "kiCrh", "aDbIk", "OcssY", "ing notifi", "noMatches", "remove", "gnjRJ", 'lick="play', "ayChannel(", "getMonth", "Error send", "mwCPL", "IOEec", "onscroll", "dSMqC", "button", "kgQPv", "1391979650", "GET", "add", "lYRDj", "View", "value", '-clock"></', "DTniI", " Soon...</", ".schedule-", "data-timer", "February", "ication:", "urls", "')\">", "shrQS", '-circle"><', "zvc2_I5WDk", "BwmAo", "fOtrO", "NgFXP", "json", "addEventLi", "oJUMK", "dhnVB", "ement", "card", "KOGtL", 'sers"></i>', "scrollToTo", "i.90min.to", "DOMContent", "Nomah", "stener", "name", "send notif", "VYHUw", "TQceU", "i.telegram", "error", "[data-time", "yddYC", "djHOU", "getDate", "10813VbzSEd", "option", "LxiGa", "getFullYea", "Match('", "scsce", "CHxhb", "data-date", "HCBhK", "MBjOR", 'ass="detai', "YLpYM", "RdUcJ", ":AAGG4SAfi", "mxKjY", " not ok", "        <b", "VQdCi", "2330jCILDX", "  <span cl", "GOJca", "dlDuq", "Xgkpe", "usXzm", '"><i class', "fas fa-ser", "January", "data-leagu", "gURGj", "OpWWi", "an>", "URL:", "EPJFM", "          ", "July", "ve Now</sp", "BsEie", "8HCtQxI", "6160dAEDju", " URL for m", "OpThr", "</span>\n  ", "floor", "getTime", "16552JvoMcg", "QHJRN", "MCABn", "torAll", "KQkGF", "bSScK", "ntainer", "</button>\n", "wohae", "load match", 'ss="fas fa', "Server ", "CfToq", "OKqdy", "bmWKY", "tQiaG", '">Starting', "dateFilter", "change", "SPbeo", "catch", "MDxdH", "Notificati", "GdcEw", "3GdAMsr", "VWsWb", "teamSearch", "start", "CkOjm", "fetch live", "CmWIH", "dcast-towe", "es:", "documentEl", "els:", "pButton", "innerHTML", "2682kmAlke", "all", "from", "atchId ", "ById", "RETOE", "RmfpW", "ssunE", "NxHYu", "/i> Watch\n", 's="match-i', "CBpGZ", "/v1/match/", "filter", "1420188HUSxhc", "includes", "ter by Dat", "vtpmb", 'lue="">Fil', 's="date"><', "teams", "serverMenu", "rLTIi", "gCnSn", "sponse was", "thub.io/bo", "smooth", "April", "')\">\n     ", "xqcAQ", "TlWOd", "March", "PGoMj", " 🚨\nDate: ", "XZjil", "xqGZs", "\nTime: ", "tqhJJ", "toLowerCas", 'ls"><i cla', "VbFrc", "utton clas", 's="live"><', "GMNTl", "eJWXt", "cation:", 's="countdo', "gue</optio", "input", "SGzBP", "xwdDT", 'nclick="pl', 'ver"></i> ', "qBMpY", "', '", "finally", "rTSgo", "September", "HEVLq", "date", "mmBvu", "BBHQl", "upcoming", "as fa-play", "https://ap", "streaming_", "flex", "lmuNI", "sort", "100%", "Fxrbp", "appendChil", "KzWhs", 'ndar-alt">', "June", "div", "ard", "on sent su", "onclick", "e.json", "Network re", "iZ76AHaEWo", "nnamC", "EYCAn", "load live ", "gICrH", "apply", "querySelec", "         <", "mgRmH", 'r"></i> Li', "setAttribu", "map", "tvFkj", "channels?m", "23795c", 's="watch-b', "JMyzp", "<option va", "</i> ", "scrollInto", "FLlbQ", "setup", 'i class="f', "\nLeague: ", "textConten", "ykPgi", "PDqnR", "CCAmu", "scheduleCo", "422404QQoDrg", "style", "<span clas", "classList", "https://wa", '<i class="', "JpWIJ", "slJzE", "SQUmm", "NaDOX", "ent", "      ", "NOGIQ", "dxLrA", "CiSvZ", "iUJvZ", "UKMjU", "YnjPq", "\n         ", "HCEBJ", "bvrMM", "FBVBa", "length", "UPWwu", "forEach", "RqgnG", "live", "UGsjJ", "cCsBi", "e</option>", "16:9"];
  _0x2d21 = function () {
    return _0x22fa20;
  };
  return _0x2d21();
}
function _0x2259(_0x5f23ff, _0x588aed) {
  const _0x4329a2 = _0x2d21();
  return _0x2259 = function (_0x1da92f, _0x392381) {
    _0x1da92f = _0x1da92f - 475;
    let _0x285e6d = _0x4329a2[_0x1da92f];
    return _0x285e6d;
  }, _0x2259(_0x5f23ff, _0x588aed);
}
function playMatch(_0x33883d, _0x2bcef9, _0x54b383) {
  const _0x22d13e = _0x2b9cd1, _0x2e53a5 = {dEpIM: _0x22d13e(819) + _0x22d13e(476), EPJFM: _0x22d13e(477) + _0x22d13e(710) + _0x22d13e(576), djHOU: function (_0x2cbbeb, _0x2dd9b3) {
    return _0x2cbbeb(_0x2dd9b3);
  }, xqGZs: _0x22d13e(832) + _0x22d13e(595), dhnVB: _0x22d13e(695), NxHYu: _0x22d13e(766), AHnqH: _0x22d13e(652), dlDuq: _0x22d13e(616), PGoMj: function (_0x1c637d, _0x1bcdf0) {
    return _0x1c637d(_0x1bcdf0);
  }};
  let _0x17a6ef = _0x2bcef9;
  _0x2e53a5[_0x22d13e(543)](fetch, _0x2bcef9)[_0x22d13e(805)](_0x277437 => {
    const _0x502c5a = _0x22d13e;
    if (!_0x277437.ok) throw new Error(_0x2e53a5[_0x502c5a(790)]);
    return _0x277437;
  })[_0x22d13e(609)](_0x75ec6c => {
    const _0xbce249 = _0x22d13e;
    console[_0xbce249(540)](_0x2e53a5[_0xbce249(577)], _0x75ec6c), _0x17a6ef = _0x54b383;
  })[_0x22d13e(681)](() => {
    const _0x3f1851 = _0x22d13e;
    _0x2e53a5[_0x3f1851(543)](jwplayer, _0x2e53a5[_0x3f1851(661)])[_0x3f1851(728)]({file: _0x17a6ef, width: _0x2e53a5[_0x3f1851(525)], aspectratio: _0x2e53a5[_0x3f1851(634)], image: " "}), document[_0x3f1851(787) + _0x3f1851(630)](_0x2e53a5[_0x3f1851(661)])[_0x3f1851(726) + _0x3f1851(505)]({behavior: _0x2e53a5[_0x3f1851(792)], block: _0x2e53a5[_0x3f1851(566)]}), _0x2e53a5[_0x3f1851(658)](loadChannels, _0x33883d);
  });
}
async function loadChannels(_0x2bb597) {
  const _0xa324f2 = _0x2b9cd1, _0x2cf16a = {kgQPv: function (_0x48fe40, _0x1d47a8) {
    return _0x48fe40(_0x1d47a8);
  }, gnjRJ: _0xa324f2(706) + _0xa324f2(650) + _0xa324f2(560), RqgnG: function (_0x59e560, _0x11685f) {
    return _0x59e560 > _0x11685f;
  }, cCsBi: _0xa324f2(846) + "st", yddYC: _0xa324f2(821), vtpmb: _0xa324f2(647), CrYFV: _0xa324f2(477) + _0xa324f2(844) + _0xa324f2(623)};
  try {
    const _0x34f5e1 = await _0x2cf16a[_0xa324f2(500)](fetch, _0xa324f2(690) + _0xa324f2(531) + _0xa324f2(638) + _0xa324f2(720) + _0xa324f2(823) + _0x2bb597);
    if (!_0x34f5e1.ok) throw new Error(_0x2cf16a[_0xa324f2(490)]);
    const _0x1d4977 = await _0x34f5e1[_0xa324f2(522)]();
    _0x1d4977[_0xa324f2(798)] && _0x2cf16a[_0xa324f2(761)](_0x1d4977[_0xa324f2(800)][_0xa324f2(758)], 0) ? (_0x2cf16a[_0xa324f2(500)](renderChannels, _0x1d4977[_0xa324f2(800)]), _0x2cf16a[_0xa324f2(500)](renderServerMenu, _0x1d4977[_0xa324f2(800)])) : (document[_0xa324f2(787) + _0xa324f2(630)](_0x2cf16a[_0xa324f2(764)])[_0xa324f2(737)][_0xa324f2(775)] = _0x2cf16a[_0xa324f2(542)], document[_0xa324f2(787) + _0xa324f2(630)](_0x2cf16a[_0xa324f2(643)])[_0xa324f2(737)][_0xa324f2(775)] = _0x2cf16a[_0xa324f2(542)]);
  } catch (_0x3c5c91) {
    console[_0xa324f2(540)](_0x2cf16a[_0xa324f2(776)], _0x3c5c91), document[_0xa324f2(787) + _0xa324f2(630)](_0x2cf16a[_0xa324f2(764)])[_0xa324f2(737)][_0xa324f2(775)] = _0x2cf16a[_0xa324f2(542)], document[_0xa324f2(787) + _0xa324f2(630)](_0x2cf16a[_0xa324f2(643)])[_0xa324f2(737)][_0xa324f2(775)] = _0x2cf16a[_0xa324f2(542)];
  }
}
function renderChannels(_0x1d3c9a) {
  const _0x43fc57 = _0x2b9cd1, _0x3c44ca = {qBMpY: _0x43fc57(779) + "ms", UPWwu: _0x43fc57(846) + "st", opusF: _0x43fc57(820)}, _0x8a2a7b = document[_0x43fc57(787) + _0x43fc57(630)](_0x3c44ca[_0x43fc57(679)]);
  _0x8a2a7b[_0x43fc57(625)] = "", _0x1d3c9a[_0x43fc57(760)](_0x1cdaff => {
    const _0x26916d = _0x43fc57, _0x570abd = document[_0x26916d(848) + _0x26916d(746)]("li");
    _0x570abd[_0x26916d(625)] = _0x26916d(754) + _0x26916d(578) + _0x26916d(781) + _0x26916d(677) + _0x26916d(492) + "'" + _0x1cdaff[_0x26916d(691) + _0x26916d(514)][0] + _0x26916d(515) + _0x1cdaff[_0x26916d(535)] + (_0x26916d(596) + _0x26916d(578) + _0x26916d(747)), _0x8a2a7b[_0x26916d(697) + "d"](_0x570abd);
  }), document[_0x43fc57(787) + _0x43fc57(630)](_0x3c44ca[_0x43fc57(759)])[_0x43fc57(737)][_0x43fc57(775)] = _0x3c44ca[_0x43fc57(825)];
}
function playChannel(_0x486246) {
  const _0x178c03 = _0x2b9cd1, _0x102685 = {iUJvZ: function (_0x56e5bb, _0x289f33) {
    return _0x56e5bb(_0x289f33);
  }, CEOeE: _0x178c03(832) + _0x178c03(595), VQdCi: _0x178c03(695), mmBvu: _0x178c03(766), Nomah: _0x178c03(652), KQkGF: _0x178c03(616)};
  _0x102685[_0x178c03(751)](jwplayer, _0x102685[_0x178c03(788)])[_0x178c03(728)]({file: _0x486246, width: _0x102685[_0x178c03(562)], aspectratio: _0x102685[_0x178c03(686)], image: " "}), document[_0x178c03(787) + _0x178c03(630)](_0x102685[_0x178c03(788)])[_0x178c03(726) + _0x178c03(505)]({behavior: _0x102685[_0x178c03(533)], block: _0x102685[_0x178c03(593)]});
}
function renderServerMenu(_0x3ac2f1) {
  const _0x534251 = _0x2b9cd1, _0x4b1016 = {mxKjY: _0x534251(499), PDqnR: function (_0x69a799, _0x3190a9) {
    return _0x69a799 + _0x3190a9;
  }, EYCAn: _0x534251(647), dxLrA: _0x534251(820)}, _0x46b2d7 = document[_0x534251(787) + _0x534251(630)](_0x4b1016[_0x534251(709)]);
  _0x46b2d7[_0x534251(625)] = "", _0x3ac2f1[_0x534251(760)]((_0xe173bb, _0x5b1fca) => {
    const _0x1f255b = _0x534251, _0x31db23 = {ssunE: _0x4b1016[_0x1f255b(559)], xwdDT: function (_0x3dc04c, _0x4df53a) {
      const _0x16ef5e = _0x1f255b;
      return _0x4b1016[_0x16ef5e(733)](_0x3dc04c, _0x4df53a);
    }};
    _0xe173bb[_0x1f255b(691) + _0x1f255b(514)][_0x1f255b(760)]((_0x381158, _0x4e5f7e) => {
      const _0x44feb8 = _0x1f255b, _0x3e75ee = document[_0x44feb8(848) + _0x44feb8(746)](_0x31db23[_0x44feb8(633)]);
      _0x3e75ee[_0x44feb8(625)] = _0x44feb8(741) + _0x44feb8(570) + _0x44feb8(678) + _0x44feb8(600) + _0x31db23[_0x44feb8(676)](_0x4e5f7e, 1), _0x3e75ee[_0x44feb8(704)] = () => playChannel(_0x381158), _0x46b2d7[_0x44feb8(697) + "d"](_0x3e75ee);
    });
  }), document[_0x534251(787) + _0x534251(630)](_0x4b1016[_0x534251(709)])[_0x534251(737)][_0x534251(775)] = _0x4b1016[_0x534251(749)];
}
function populateFilters(_0x1786ad) {
  const _0x36eed4 = _0x2b9cd1, _0x448ec3 = {SPbeo: _0x36eed4(546), nnamC: function (_0xf2cace, _0x1a249a) {
    return _0xf2cace(_0x1a249a);
  }, SGzBP: _0x36eed4(606), mgRmH: _0x36eed4(778) + "er", MDxdH: _0x36eed4(724) + _0x36eed4(644) + _0x36eed4(642) + _0x36eed4(765), SsQZe: _0x36eed4(724) + _0x36eed4(644) + _0x36eed4(803) + _0x36eed4(673) + "n>"}, _0x24c216 = document[_0x36eed4(787) + _0x36eed4(630)](_0x448ec3[_0x36eed4(675)]), _0x1fbc2b = document[_0x36eed4(787) + _0x36eed4(630)](_0x448ec3[_0x36eed4(715)]);
  _0x24c216[_0x36eed4(625)] = _0x448ec3[_0x36eed4(610)], _0x1fbc2b[_0x36eed4(625)] = _0x448ec3[_0x36eed4(483)];
  const _0x49e19d = [...new Set(_0x1786ad[_0x36eed4(718)](_0xc49905 => _0xc49905[_0x36eed4(685)]))], _0x2fbc0c = [...new Set(_0x1786ad[_0x36eed4(718)](_0x5a9d0f => _0x5a9d0f[_0x36eed4(783)]))];
  _0x49e19d[_0x36eed4(760)](_0x3854bf => {
    const _0x109430 = _0x36eed4, _0x5dd8d0 = document[_0x109430(848) + _0x109430(746)](_0x448ec3[_0x109430(608)]);
    _0x5dd8d0[_0x109430(506)] = _0x3854bf[_0x109430(664) + "e"](), _0x5dd8d0[_0x109430(731) + "t"] = _0x448ec3[_0x109430(708)](formatDate, _0x3854bf), _0x24c216[_0x109430(697) + "d"](_0x5dd8d0);
  }), _0x2fbc0c[_0x36eed4(760)](_0x201220 => {
    const _0x422e9b = _0x36eed4, _0x2d873d = document[_0x422e9b(848) + _0x422e9b(746)](_0x448ec3[_0x422e9b(608)]);
    _0x2d873d[_0x422e9b(506)] = _0x201220[_0x422e9b(664) + "e"](), _0x2d873d[_0x422e9b(731) + "t"] = _0x201220, _0x1fbc2b[_0x422e9b(697) + "d"](_0x2d873d);
  });
}
function filterMatches() {
  const _0x34bf43 = _0x2b9cd1, _0x3f94e1 = {CCAmu: _0x34bf43(552), FLlbQ: _0x34bf43(572) + "e", CmWIH: _0x34bf43(794), MBjOR: function (_0x5424ac, _0x5c08b6) {
    return _0x5424ac === _0x5c08b6;
  }, eNHnE: function (_0x1db095, _0x3f00b5) {
    return _0x1db095 && _0x3f00b5;
  }, LrsGK: _0x34bf43(806) + "s", HCBhK: function (_0x5e8055, _0x2c3f5c) {
    return _0x5e8055 === _0x2c3f5c;
  }, MCABn: _0x34bf43(762), scsce: function (_0x5f1348, _0x134a32) {
    return _0x5f1348 !== _0x134a32;
  }, XZjil: function (_0x21ba1e, _0x39d27b) {
    return _0x21ba1e !== _0x39d27b;
  }, mSAaN: _0x34bf43(692), eJWXt: _0x34bf43(606), CBpGZ: _0x34bf43(778) + "er", NCooV: _0x34bf43(615), lmuNI: _0x34bf43(510) + _0x34bf43(527), JpWIJ: _0x34bf43(488), gICrH: _0x34bf43(843)}, _0x3ac560 = document[_0x34bf43(787) + _0x34bf43(630)](_0x3f94e1[_0x34bf43(670)])[_0x34bf43(506)][_0x34bf43(664) + "e"](), _0x514574 = document[_0x34bf43(787) + _0x34bf43(630)](_0x3f94e1[_0x34bf43(637)])[_0x34bf43(506)][_0x34bf43(664) + "e"](), _0xed108 = document[_0x34bf43(787) + _0x34bf43(630)](_0x3f94e1[_0x34bf43(837)])[_0x34bf43(506)][_0x34bf43(664) + "e"](), _0x18d217 = document[_0x34bf43(713) + _0x34bf43(592)](_0x3f94e1[_0x34bf43(693)]);
  let _0x19073c = 0;
  const _0x312de0 = Array[_0x34bf43(628)](_0x18d217)[_0x34bf43(639)](_0x5bad29 => {
    const _0x2440c4 = _0x34bf43, _0x32059b = _0x5bad29[_0x2440c4(777) + "te"](_0x3f94e1[_0x2440c4(734)]), _0x113088 = _0x5bad29[_0x2440c4(777) + "te"](_0x3f94e1[_0x2440c4(727)]), _0x23decb = _0x5bad29[_0x2440c4(777) + "te"](_0x3f94e1[_0x2440c4(619)]), _0x12b616 = !_0x3ac560 || _0x3f94e1[_0x2440c4(554)](_0x32059b, _0x3ac560), _0x501a9f = !_0x514574 || _0x3f94e1[_0x2440c4(554)](_0x113088, _0x514574), _0x2a82a4 = !_0xed108 || _0x23decb[_0x2440c4(641)](_0xed108);
    return _0x3f94e1[_0x2440c4(769)](_0x12b616, _0x501a9f) && _0x2a82a4;
  })[_0x34bf43(694)]((_0x22377d, _0x5eeddd) => {
    const _0x1f2465 = _0x34bf43, _0x4eea54 = _0x22377d[_0x1f2465(777) + "te"](_0x3f94e1[_0x1f2465(809)]), _0x2ed378 = _0x5eeddd[_0x1f2465(777) + "te"](_0x3f94e1[_0x1f2465(809)]);
    if (_0x3f94e1[_0x1f2465(553)](_0x4eea54, _0x3f94e1[_0x1f2465(591)]) && _0x3f94e1[_0x1f2465(550)](_0x2ed378, _0x3f94e1[_0x1f2465(591)])) return -1;
    if (_0x3f94e1[_0x1f2465(660)](_0x4eea54, _0x3f94e1[_0x1f2465(591)]) && _0x3f94e1[_0x1f2465(554)](_0x2ed378, _0x3f94e1[_0x1f2465(591)])) return 1;
    return 0;
  });
  _0x18d217[_0x34bf43(760)](_0x2b9a05 => _0x2b9a05[_0x34bf43(737)][_0x34bf43(775)] = _0x34bf43(821)), _0x312de0[_0x34bf43(760)](_0x5a11ca => {
    const _0x23c798 = _0x34bf43;
    _0x5a11ca[_0x23c798(737)][_0x23c798(775)] = _0x3f94e1[_0x23c798(834)], _0x19073c++;
  });
  const _0x75353a = document[_0x34bf43(787) + _0x34bf43(630)](_0x3f94e1[_0x34bf43(742)]);
  _0x3f94e1[_0x34bf43(553)](_0x19073c, 0) ? _0x75353a[_0x34bf43(739)][_0x34bf43(503)](_0x3f94e1[_0x34bf43(711)]) : _0x75353a[_0x34bf43(739)][_0x34bf43(489)](_0x3f94e1[_0x34bf43(711)]);
}
function resetFilters() {
  const _0x4f6b8b = _0x2b9cd1, _0x310828 = {OKqdy: _0x4f6b8b(606), bSScK: _0x4f6b8b(778) + "er", VYHUw: _0x4f6b8b(615), GdcEw: function (_0x108d7d) {
    return _0x108d7d();
  }};
  document[_0x4f6b8b(787) + _0x4f6b8b(630)](_0x310828[_0x4f6b8b(602)])[_0x4f6b8b(506)] = "", document[_0x4f6b8b(787) + _0x4f6b8b(630)](_0x310828[_0x4f6b8b(594)])[_0x4f6b8b(506)] = "", document[_0x4f6b8b(787) + _0x4f6b8b(630)](_0x310828[_0x4f6b8b(537)])[_0x4f6b8b(506)] = "", _0x310828[_0x4f6b8b(612)](filterMatches);
}
function debounce(_0x4d59cc, _0x3fe2a1) {
  const _0x1ca44d = {CHxhb: function (_0x1bb3b2, _0x4dd090) {
    return _0x1bb3b2(_0x4dd090);
  }, DorMk: function (_0x50d166, _0x481c35, _0x2d7b8a) {
    return _0x50d166(_0x481c35, _0x2d7b8a);
  }};
  let _0xff6a6e;
  return function (..._0x22d079) {
    const _0x11fdb0 = _0x2259;
    _0x1ca44d[_0x11fdb0(551)](clearTimeout, _0xff6a6e), _0xff6a6e = _0x1ca44d[_0x11fdb0(481)](setTimeout, () => _0x4d59cc[_0x11fdb0(712)](this, _0x22d079), _0x3fe2a1);
  };
}
document[_0x2b9cd1(787) + _0x2b9cd1(630)](_0x2b9cd1(615))[_0x2b9cd1(523) + _0x2b9cd1(534)](_0x2b9cd1(674), debounce(filterMatches, 300)), document[_0x2b9cd1(787) + _0x2b9cd1(630)](_0x2b9cd1(606))[_0x2b9cd1(523) + _0x2b9cd1(534)](_0x2b9cd1(607), filterMatches), document[_0x2b9cd1(787) + _0x2b9cd1(630)](_0x2b9cd1(778) + "er")[_0x2b9cd1(523) + _0x2b9cd1(534)](_0x2b9cd1(607), filterMatches), document[_0x2b9cd1(523) + _0x2b9cd1(534)](_0x2b9cd1(532) + _0x2b9cd1(833), loadMatches), window[_0x2b9cd1(497)] = function () {
  const _0x394a59 = _0x2b9cd1, _0x2d62bb = {NgFXP: function (_0x1a8f98) {
    return _0x1a8f98();
  }};
  _0x2d62bb[_0x394a59(521)](scrollFunction);
};
function scrollFunction() {
  const _0x362d8b = _0x2b9cd1, _0x52fdfc = {ykPgi: function (_0x356c13, _0x2a142) {
    return _0x356c13 > _0x2a142;
  }, YnjPq: _0x362d8b(530) + _0x362d8b(624), MKcbY: _0x362d8b(820), DTniI: _0x362d8b(821)};
  _0x52fdfc[_0x362d8b(732)](document[_0x362d8b(822)][_0x362d8b(478)], 20) || _0x52fdfc[_0x362d8b(732)](document[_0x362d8b(622) + _0x362d8b(526)][_0x362d8b(478)], 20) ? document[_0x362d8b(787) + _0x362d8b(630)](_0x52fdfc[_0x362d8b(753)])[_0x362d8b(737)][_0x362d8b(775)] = _0x52fdfc[_0x362d8b(772)] : document[_0x362d8b(787) + _0x362d8b(630)](_0x52fdfc[_0x362d8b(753)])[_0x362d8b(737)][_0x362d8b(775)] = _0x52fdfc[_0x362d8b(508)];
}
function scrollToTop() {
  const _0x2dc44a = _0x2b9cd1;
  document[_0x2dc44a(822)][_0x2dc44a(478)] = 0, document[_0x2dc44a(622) + _0x2dc44a(526)][_0x2dc44a(478)] = 0;
}
setInterval(loadMatches, 6e4);
function sendTelegramNotification(_0x25a703) {
  const _0x31df7e = _0x2b9cd1, _0x3e7e90 = {BwmAo: _0x31df7e(611) + _0x31df7e(703) + _0x31df7e(808), tQiaG: _0x31df7e(477) + _0x31df7e(536) + _0x31df7e(513), BsEie: _0x31df7e(494) + _0x31df7e(487) + _0x31df7e(671), QHJRN: function (_0x27b2bb, _0x45f96d) {
    return _0x27b2bb(_0x45f96d);
  }, YLpYM: function (_0x49bc85, _0x587b6d) {
    return _0x49bc85(_0x587b6d);
  }, cJrbM: function (_0x5489e1, _0x4423f2, _0x354cca) {
    return _0x5489e1(_0x4423f2, _0x354cca);
  }, UGsjJ: _0x31df7e(502)}, _0x1b8acb = _0x31df7e(767) + ": " + _0x25a703[_0x31df7e(646)] + _0x31df7e(659) + _0x3e7e90[_0x31df7e(590)](formatDate, _0x25a703[_0x31df7e(685)]) + _0x31df7e(662) + _0x25a703[_0x31df7e(770)] + _0x31df7e(730) + _0x25a703[_0x31df7e(783)], _0x2f297f = _0x31df7e(690) + _0x31df7e(539) + _0x31df7e(836) + telegramBotToken + (_0x31df7e(482) + _0x31df7e(841) + "=") + telegramChatId + _0x31df7e(811) + _0x3e7e90[_0x31df7e(556)](encodeURIComponent, _0x1b8acb);
  _0x3e7e90[_0x31df7e(816)](fetch, _0x2f297f, {method: _0x3e7e90[_0x31df7e(763)]})[_0x31df7e(805)](_0x25795a => _0x25795a[_0x31df7e(522)]())[_0x31df7e(805)](_0x1d8d3a => {
    const _0x1003cf = _0x31df7e;
    _0x1d8d3a.ok ? console[_0x1003cf(785)](_0x3e7e90[_0x1003cf(519)]) : console[_0x1003cf(540)](_0x3e7e90[_0x1003cf(604)], _0x1d8d3a);
  })[_0x31df7e(609)](_0xd50971 => {
    const _0x42fd50 = _0x31df7e;
    console[_0x42fd50(540)](_0x3e7e90[_0x42fd50(581)], _0xd50971);
  });
}
