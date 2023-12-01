let quizData = [
    [
        ['とくせい : Intimidate',
        '効果 : The Pokémon intimadates oppsing Pokémon upon entering battle, lowering their Attack stat.',
        'いかく',
        '正解はいかくで、登場時に相手のポケモンのこうげきを1段階下げる。'
        ],
        ['とくせい : Levitate',
        '効果 : By floating in the air, the Pokémon receives full immunity to all Ground-type moves.',
        'ふゆう',
        '正解はふゆうで、自分に地面タイプの技が当たらなくなる。'
        ],
        ['とくせい : Disguise',
        '効果 : Once per battle, the shroud that covers the Pokémon can protect it from an attack',
        'ばけのかわ',
        '正解ばけのかわで、バトル中、1度だけばけのかわが相手の攻撃の身代わりになって、ダメージを無効化する。'
        ],
        ['とくせい : Imposter',
        '効果 : The Pokémon transforms itself into the Pokémon it is facing.',
        'かわりもの',
        '正解はかわりもので、登場時に相手のポケモンにへんしんする。'
        ],
        ['とくせい : Prankster',
        '効果 : Gives priority to a status move.',
        'いたずらごころ',
        '正解はいたずらごころで、変化技を先制で打てる。'
        ],
        ['とくせい : Mold Breaker',
        '効果 : Moves can be used on the target regardless of its Abilities. \t※Abilitiesはとくせい',
        'かたやぶり',
        '正解はかたやぶりで、攻撃中、相手のとくせいの効果を無視する。。'
        ],
        ['とくせい : Stance Change',
        '効果 : The Pokémon changes its form to Blade Forme when it uses an attack move and changes to Shield Forme when it uses King\'s Shield.',
        'バトルスイッチ',
        '正解はで、バトルスイッチで、ギルガルドの専用とくせい。'
        ],
        ['とくせい : Hustle',
        '効果 : Boosts the Attack stat, but lowers accuracy.',
        'はりきり',
        '正解ははりきりで、自分のこうげきを上げるが、命中率は下がる。'
        ],
        ['とくせい : Sturdy',
        '効果 : It cannot be knocked out with one hit. One-hit KO moves cannot knock it out, either.',
        'がんじょう',
        '正解はがんじょうで、一撃必殺技が効かずにHPが満タンであれば、どんな攻撃も耐える。'
        ],
        ['とくせい : Wonder Guard',
        '効果 : Its mysterious power only lets supereffective moves hit the Pokémon.',
        'ふしぎなまもり',
        '正解はふしぎなまもりで、効果抜群の技しか効かない。'
        ],
        ['とくせい : Flame Body',
        '効果 : Contact with Pokémon may burn the attacker.',
        'ほのおのからだ',
        '正解はほのおのからだで、直接攻撃を受けたときに30%の確率で、相手をやけど状態にさせる。'
        ],
        ['とくせい : Technician',
        '効果 : Power\'s Pokémon \'s weaker moves.',
        'テクニシャン',
        '正解はテクニシャンで、弱い技の威力が上がる。'
        ],
        ['とくせい : Multiscale',
        '効果 : Reduces the amount of damage the Pokémon takes while its HP is full.',
        'マルチスケイル',
        '正解はマルチスケイルで、HPが満タンの時、受けるダメージを半減する。'
        ],
        ['とくせい : Flash Fire',
        '効果 : Powerrs up the Pokémon\'s Fire-type moves if it\'s hit by one.',
        'もらいび',
        '正解はもらいびで、ほのお技を受けると、ダメージを受けずに自分のほのお技の威力が上がる。'
        ],
        ['とくせい : Thick Fat',
        '効果 : The Pokémon is protected by a layer of thick fat, which halves the damage taken from Fire- and Ice-type moves.',
        'あついしぼう',
        '正解はあついしぼうで、自分が受けるほのお技とこおり技の威力を半減する。'
        ],
        ['とくせい : Speed Boost',
        '効果 : Its Speed stat is boosted every turn.',
        'かそく',
        '正解はかそくで、毎ターン自分のすばやさが1段階上がる。'
        ],
        ['とくせい : Moody',
        '効果 : Raises one stat sharply and lowers another every turn.',
        'ムラっけ',
        '正解はムラっけで、毎ターン自分のどれか一つの能力が2段階上がり、それ以外のどれか一つの能力が1段階下がる。'
        ],
        ['とくせい : Magic Bounce',
        '効果 : Reflects status moves instead of getting hit by them.',
        'マジックミラー',
        '正解はマジックミラーで、自分に打ってきた変化技を自分が受ける代わりに返す。'
        ],
        ['とくせい : No Guard',
        '効果 : The Pokémon employs no-guard tactics to ensure incoming and outgoing attacks always land.',
        'ノーガード',
        '正解はノーガードで、お互いに技が必ず当たるようになる。'
        ],
        ['とくせい : Drought',
        '効果 : Turns the sunlight harsh the Pokémon enters a battle.',
        'ひでり',
        '正解はひでりで、登場時に天候をひざしが強い状態にする。'
        ],
        ['とくせい : Regenerator',
        '効果 : Restores a little HP when withdrawn from battle.',
        'さいせいりょく',
        '正解はさいせいりょくで、バトルから引っこめるとHPが少し回復する。'
        ],
        ['とくせい : Pixilate',
        '効果 : Normal-type moves become Fairy-type moves. The power of those moves is boosted a little.',
        'フェアリースキン',
        '正解はフェアリースキンで、ノーマル技をフェアリー技に変え、さらに威力を少し上げる。'
        ],
        ['とくせい : Libero',
        '効果 : Changes the Pokémon\'s type to the type of the move it\'s about to use.',
        'リベロ',
        '正解はリベロで、技を出す時にその技と同じタイプになる。'
        ],
        ['とくせい : Blaze',
        '効果 : Powers up Fire-type moves when the Pokémon\'s HP is low.',
        'もうか',
        '正解はもうかで、HPが少なくなった時にほのお技の威力が上がる。'
        ],
        ['とくせい : Defiant',
        '効果 : Boosts the Pokémon\'s Attack stat sharply when its stats are lowered.',
        'まけんき',
        '正解はまけんきで、能力を下げられると、こうげきが2段階上がる。'
        ],
        ['とくせい : Competitive',
        '効果 : Boosts the Pokémon\'s Sp.Atk stat sharply when a stats is lowered. ※※Sp.Atkはとくこう※※',
        'かちき',
        '正解はかちきで、能力を下げられると、とくこうが2段階上がる。'
        ],
        ['とくせい : Swift Swim',
        '効果 : Boosts the Pokémon\'s Speed stat in rain.',
        'すいすい',
        '正解はすいすいで、天候が雨の時にすばやさが2倍になる。'
        ],
        ['とくせい : Adaptability',
        '効果 : Powers up moves of the same type as the Pokémon.',
        'てきおうりょく',
        '正解はてきおうりょくで、自分と同じタイプの技の威力を2倍にする。'
        ],
        ['とくせい : Clear Body',
        '効果 : Prevents other Pokémon\'s moves or Abilities from lowering the Pokémon\'s stats.',
        'クリアボディ',
        '正解はクリアボディで、自分の能力が下げられない。'
        ],
        ['とくせい : Sand Stream',
        '効果 : The Pokémon summons a sandstorm when it enters a battle.',
        'すなおこし',
        '正解はすなおこしで、登場時に天候をすなあらし状態にする。'
        ],
        ['とくせい : Gluttony',
        '効果 : Makes the Pokémon eat a held Berry when its HP drops to half or less, which is sooner than usual.',
        'くいしんぼう',
        '正解はくいしんぼうで、きのみを通常よりも早く食べる。'
        ],
        ['とくせい : Illusion',
        '効果 : Comes out disguised as the Pokémon in party\'s last spot.',
        'イリュージョン',
        '正解はイリュージョンで、手持ちの一番後ろのポケモンに化けて登場する。'
        ],
        ['とくせい : Beast Boost',
        '効果 : The Pokémon boosts its most proficient stat each time it knocks out a Pokémon.',
        'ビーストブースト',
        '正解はビーストブーストで、相手のポケモンを倒したときに自分の一番高い能力値が1段階上がる。'
        ],
        ['とくせい : Torrent',
        '効果 : Powers up Water-type moves when the Pokémon\'s HP is low.',
        'げきりゅう',
        '正解はげきりゅうで、HPが少なくなった時に水技の威力が上がる。'
        ],
        ['とくせい : Huge Power',
        '効果 : Doubles the Pokémon\'s Attack stat.',
        'ちからもち',
        '正解はちからもちで、自分のこうげきを2倍にする。'
        ],
        ['とくせい : Inner Focus',
        '効果 : The Pokémon intensely focused, and that protects the Pokémon from flinching.',
        'せいしんりょく',
        '正解はせいしんりょくで、ひるまなくなる。'
        ],
        ['とくせい : Skill Link',
        '効果 : Maximizes the number of times multistrike moves hit.',
        'スキルリンク',
        '正解はスキルリンクで、連続技が必ず最大回数当たる。'
        ],
        ['とくせい : Marvel Scale',
        '効果 : The Pokémon\'s marvelous scales boost the Defense stat if it has a status condition.',
        'ふしぎなうろこ',
        '正解はふしぎなうろこで、状態異常の時、ぼうぎょが上がる。'
        ],
        ['とくせい : Pressure',
        '効果 : By putting pressure on the opposing Pokémon, it raises their PP usage.',
        'プレッシャー',
        '正解はプレッシャーで、相手のポケモンの技の消費PPを増やす。'
        ],
        ['とくせい : Cursed Body',
        '効果 : May disable a move used on the Pokémon.',
        'のろわれボディ',
        '正解はのろわれボディで、相手が自分に技を打ってきた時、3割の確率でその技をかなしばり状態にする。'
        ],
        ['とくせい : Emergency Exit',
        '効果 : The Pokémon, sensing danger, switches out when its HP becomes half or less.',
        'ききかいひ',
        '正解はききかいひで、HPが半分以下になったときに、控えのポケモンと交代する。'
        ],
        ['とくせい : Unaware',
        '効果 : When attacking, the Pokémon ignores the target Pokémon\'s stat changes.',
        'てんねん',
        '正解はてんねんで、相手の能力変化の影響を受けなくなる。'
        ],
        ['とくせい : Soundproof',
        '効果 : Soundproof gives the Pokémon full immunity to all sound-based moves.',
        'ぼうおん',
        '正解はぼうおんで、音技が効かなくなる。'
        ],
        ['とくせい : Berserk',
        '効果 : Boosts the Pokémon\'s Sp.Atk stat when it takes a hit that causes its HP to become half or less. ※※Sp.Atkはとくこうのステータス※※',
        'ぎゃくじょう',
        '正解はぎゃくじょうで、HPが半分以下になったときにとくこうが1段階上がる。'
        ],
        ['とくせい : Rock Head',
        '効果 : Protects the Pokémon from recoil damage.',
        'いしあたま',
        '正解はいしあたまで、反動ダメージを受けなくなる。'
        ],
        ['とくせい : Drizzle',
        '効果 : The Pokémon makes it rain when it enters a battle.',
        'あめふらし',
        '正解はあめふらしで、登場時に天候を雨にする。'
        ],
        ['とくせい : Grassy Surge',
        '効果 : Turns the ground into Grassy Terrain when the Pokémon enters a battle.',
        'グラスメイカー',
        '正解はグラスメイカーで、登場時にフィールドをグラスフィールドにする。'
        ],
        ['とくせい : Scrappy',
        '効果 : The Pokémon can hit Ghost-type Pokémon with Normal- and Fighting-type moves.',
        'きもったま',
        '正解はきもったまで、ゴーストタイプのポケモンにノーマル技とかくとう技を当てられる。'
        ],
        ['とくせい : Truant',
        '効果 : The Pokémon can\'t use a move if it had used a move on the previous turn.',
        'なまけ',
        '正解はなまけで、2ターンに1回しか攻撃できない。'
        ],
        ['とくせい : Iron Fist',
        '効果 : Powers up punching moves.',
        'てつのこぶし',
        '正解はてつのこぶしで、パンチ技の威力が上がる。'
        ],
        ['とくせい : Fluffy',
        '効果 : Halves the damage taken from moves that make direct contact, but doubles that of Fire-type moves.',
        'もふもふ',
        '正解はもふもふで、直接攻撃を受けたときのダメージを半減するが、ほのお技を受けたときのダメージは2倍になる。'
        ],
        ['とくせい : Intrepid Sword',
        '効果 : Boosts the Pokémon\'s Attack stat when the Pokémon enters battle.',
        'ふとうのけん',
        '正解はふとうのけんで、登場時にこうげきが1段階上がる。'
        ],
        ['とくせい : Volt Absorb',
        '効果 : Restores HP if hit by an Electric-type move instead of taking damage.',
        'ちくでん',
        '正解はでちくでんで、でんき技を受けたとき、ダメージを受ける代わりにHPを少し回復する。'
        ],
        ['とくせい : Water Absorb',
        '効果 : Restores HP if hit by an Water-type move instead of taking damage.',
        'ちょすい',
        '正解はでちょすいで、みず技を受けたとき、ダメージを受ける代わりにHPを少し回復する。'
        ],
        ['とくせい : Sheer Force',
        '効果 : Removes additional effects to increase the power of moves when attacking.',
        'ちからづく',
        '正解はちからづくで、追加効果のある技を打った時、追加効果が出なくなる代わりに威力を上げる。'
        ],
        ['とくせい : Shell Armor',
        '効果 : A hard shell protects the Pokémon from critical hits.',
        'シェルアーマー',
        '正解はシェルアーマーで、技が自分の急所に当たらなくなる。'
        ],
        ['とくせい : Iron Barbs',
        '効果 : Inflicts damage on the attacker upon contact with iron barbs.',
        'てつのトゲ',
        '正解はてつのトゲで、直接攻撃を受けたとき、相手に少しダメージをあたえる。'
        ],
        ['とくせい : Unnerve',
        '効果 : Unnerves oppsing Pokémon and makes them unable to eat Berries.',
        'きんちょうかん',
        '正解はきんちょうかんで、相手はきのみを食べられなくなる。'
        ],
        ['とくせい : Solid Rock',
        '効果 : Reduces the power of supereffective attacks taken.',
        'ハードロック',
        '正解はハードロックで、効果抜群の時、受けるダメージを減らす。'
        ],
        ['とくせい : Immunity',
        '効果 : The Immune system of the Pokémon prevents it from getting poisoned.',
        'めんえき',
        '正解はめんえきで、どく状態にならない。'
        ],
        ['とくせい : Storm Drain',
        '効果 : Draws in all Water-type moves. instead of being hit by Water-type moves, it boosts its Sp.Atk. ※※Sp.Atkはとくこう※※',
        'よびみず',
        '正解はよびみずで、自分以外のポケモンのみず技の攻撃対象が自分になり、みず技を受けたとき、ダメージを受ける代わりに自分のとくこうを1段階上げる。'
        ],
        ['とくせい : Neutralizing Gas',
        '効果 : If the Pokémon with Neutralizing Gas is in the battle, the effects of all Pokémon\'s Abilities will be nullified or will not be triggered. ※※Abilitiesはとくせい※※',
        'かがくへんかガス',
        '正解はかがくへんかガスで、場にいるすべてのポケモンのとくせいが無効化される、または、発動しない。'
        ],
        ['とくせい : Justified',
        '効果 : Being hit by a Dark-type move boosts the Attack stat of the Pokémon, for justice. ※※statは能力値※※',
        'せいぎのこころ',
        '正解はせいぎのこころで、あくタイプの技を受けたとき、こうげきが1段階上がる。'
        ],
        ['とくせい : Contrary',
        '効果 : Makes stat changes have an opposite effect.    ※statは能力値。',
        'あまのじゃく',
        '正解はあまのじゃくで、能力が上がるときに上がる代わりに下がり、下がるときは下がる代わりに上がる。(能力変化が逆になる。)'
        ],
        ['とくせい : Mirror Armor',
        '効果 : Bounces back only the stat-lowering effects that the Pokémon receives. ※※stat-loweringは能力下降※※',
        'ミラーアーマー',
        '正解はミラーアーマーで、自分が受けた能力下降を自分が受ける代わりに相手に返す。'
        ],
        ['とくせい : Water Bubble',
        '効果 : Lowers the power of Fire-type moves done to the Pokémon and prevents the Pokémon from getting a burn. ※※burnはやけど※※',
        'すいほう',
        '正解はすいほうで、受けるほのお技の威力を減らす。また、やけど状態にならない。'
        ],
        ['とくせい : Queenly Majesty',
        '効果 : Its majesty pressures the oppsing Pokémon, making it unable to attack using priority moves.',
        'じょおうのいげん',
        '正解はじょおうのいげんで、相手からの先制技を受けなくなる。'
        ],
        ['とくせい : Compound Eyes',
        '効果 : The Pokémon\'s compound eyes boost its accuracy. ※※accuracyは命中率※※',
        'ふくがん',
        '正解はふくがんで、技の命中率を上げる。'
        ],
        ['とくせい : Lightning Rod',
        '効果 : The Pokémon draws in all Electric-type moves. Instead of being hit by Electric-type moves, it boosts its Sp.Atk. ※Sp.Atkはとくこう。',
        'ひらいしん',
        '正解はひらいしんで、自分以外のポケモンのでんき技の攻撃対象が自分になり、でんき技を受けたとき、ダメージを受ける代わりに自分のとくこうを1段階上げる。'
        ],
        ['とくせい : Trace',
        '効果 : when it enters a battle, the Pokémon copies an opposing Pokémon\'s Ability.    ※Abilityはとくせい。',
        'トレース',
        '正解はトレースで、登場時に、自分のとくせいが相手のポケモンのとくせいと同じになる。'
        ],
        ['とくせい : Shadow Tag',
        '効果 : This Pokémon steps on the opposing Pokémon\'s shadow to prevent it from escaping.',
        'かげふみ',
        '正解はかげふみで、相手のポケモンは逃げられなくなる。'
        ],
        ['とくせい : Sap Sipper',
        '効果 : Boosts the Attack stat if hit by a Grass-type move instead of taking damage. ※Attack statはこうげきの能力値。',
        'そうしょく',
        '正解はそうしょくで、くさ技を受けたとき、ダメージを受ける代わりに自分のこうげきが1段階上がる。'
        ],
        ['とくせい : Serene Grace',
        '効果 : Boosts the likelihood of additional effects occurring when attacking.',
        'てんのめぐみ',
        '正解はてんのめぐみで、技の追加効果の発動確率が上がる。'
        ],
        ['とくせい : Air Lock',
        '効果 : Eliminates the effects of weather.',
        'エアロック',
        '正解はエアロック天候の影響をなくす。'
        ],
        ['とくせい : Synchronize',
        '効果 : The attacker will receive the same status condition if it inflicts  a burn, poison, or paralysis to the Pokémon.     ※※burnはやけど、poisonはどく、paralysisはまひ※※',
        'シンクロ',
        '正解はシンクロで、自分が状態異常になったとき、相手も同じ状態異常にする。'
        ],
        ['とくせい : Magic Guard',
        '効果 : The Pokémon only takes damage from attacks.',
        'マジックガード',
        '正解はマジックガードで、ポケモンの攻撃以外のダメージを受けなくなる。'
        ],
        ['とくせい : Rough Skin',
        '効果 : This Pokémon inflicts damage with its rough skin to the attacker on contact.',
        'さめはだ',
        '正解はさめはだで、直接攻撃を受けたとき、相手に少しダメージをあたえる。'
        ],
        ['とくせい : Weak Armor',
        '効果 : Physical attacks to the Pokémon lower ist Defense stat but sharply raise its Speed stat.    ※Defense stat、Speed statはそれぞれぼうぎょ、すばやさの能力値。',
        'くだけるよろい',
        '正解はくだけるよろいで、物理技を受けたとき、ぼうぎょが1段階下がり、すばやさが2段階上がる。'
        ],
        ['とくせい : Shed Skin',
        '効果 : The Pokémon may heal its own status conditions by shedding its skin.    ※※status conditionは状態異常※※',
        'だっぴ',
        '正解はだっぴで、ターンの終わりに状態異常が治ることがある。'
        ],
        ['とくせい : Download',
        '効果 : Compares an opposing Pokémon\'s Defense and Sp.Def stats before raising its own Attack or Sp.Atk stat——whichever will be more effective.',
        'ダウンロード',
        '正解はダウンロードで、相手のぼうぎょととくぼうの数値を比較して、ぼうぎょがとくぼうより小さければ、自分のこうげきを1段階上げ、それ以外なら、自分のとくこうを1段階上げる。'
        ],
        ['とくせい : Misty Surge',
        '効果 : Turns the ground into Misty Terrain when the Pokémon enters a battle.',
        'ミストメイカー',
        '正解はミストメイカーで、登場時にフィールドをミストフィールドにする。'
        ],
        ['とくせい : Super Luck',
        '効果 : The Pokémon is so lucky that the critical-hit ratios of its moves are boosted.',
        'きょううん',
        '正解はきょううんで、自分の技が急所に当たる確率が上がる。'
        ],
        ['とくせい : Moxie',
        '効果 : The Pokémon shows moxie, and that boosts the Attack stat after knocking out any Pokémon.',
        'じしんかじょう',
        '正解はじしんかじょうで、ポケモンを倒したとき、こうげきが1段階上がる。'
        ],
        ['とくせい : Dry Skin',
        '効果 : Restores HP in rain or when hit by Water-type moves. Reduces HP in harsh sunlight, and increases the damage received from Fire-type moves.',
        'かんそうはだ',
        '正解はかんそうはだで、天候が雨の時とみず技を受けたときはHPが回復し、天候がひざしが強いとき、ダメージを受ける。また、受けるほのお技のダメージが増える。'
        ],
        ['とくせい : Chlorophyll',
        '効果 : Boosts the Pokémon\'s Speed stat in harsh sunlight.',
        'ようりょくそ',
        '正解はようりょくそで、天候がひざしが強いとき、すばやさが上がる。'
        ],
        ['とくせい : Ice Scales',
        '効果 : The Pokémon is protected by ice scales, which halve the damage taken from special moves. ※※special movesは特殊技※※',
        'こおりのりんぷん',
        '正解はこおりのりんぷんで、受ける特殊技をダメージを半減する。'
        ],
        ['とくせい : Unseen Fist',
        '効果 : If the Pokémon uses moves that make contact, it can attack the target even if the target protects itself.',
        'ふかしのこぶし',
        '正解はふかしのこぶしで、まもるなどを使っている相手にも直接攻撃を当てることができる。'
        ],
        ['とくせい : Guts',
        '効果 : It\'s so gutsy that having a status condition boosts the Pokémon\'s Attack stat.  ※※status conditionは状態異常※※',
        'こんじょう',
        '正解はこんじょうで、状態異常の時、攻撃が上がる。'
        ],
        ['とくせい : Static',
        '効果 : The Pokémon is charged with static electricity, so contact with it may cause paralysis. ※※paralysisはまひ※※',
        'せいでんき',
        '正解はせいでんきで、相手から直接攻撃を受けたとき、相手をまひ状態にすることがある。'
        ],
        ['とくせい : Reckless',
        '効果 : Powers up moves that have recoil damage.',
        'すてみ',
        '正解はすてみで、反動ダメージがある技の威力を上げる。'
        ],
        ['とくせい : Analytic',
        '効果 : Boosts move power when the Pokémon moves last.',
        'アナライズ',
        '正解はアナライズで、ターンの最後に攻撃するとき、技の威力が上がる。'
        ],
        ['とくせい : Magnet Pull',
        '効果 : Prevents Steel-type Pokémon from escaping using its magnetic force.',
        'じりょく',
        '正解はじりょくで、相手のはがねタイプのポケモンは逃げられなくなる。'
        ],
        ['とくせい : Protean',
        '効果 : Changes the Pokémon\'s type to the type of the move it\'s about to use.',
        'へんげんじざい',
        '正解はへんげんじざいで、技を打つ時、その技と同じタイプになる。'
        ],
        ['とくせい : Sand Rush',
        '効果 : Boosts the Pokémon\'s Speed stat in a sandstorm.',
        'すなかき',
        '正解はすなかきで、天候がすなあらしのとき、すばやさが上がる。'
        ],
        ['とくせい : Poison Heal',
        '効果 : Restores HP if the Pokémon is poisoned instead of losing HP.',
        'ポイズンヒール',
        '正解はポイズンヒールで、どく状態の時、HPが減る代わりに回復する。'
        ],
        ['とくせい : Tough Claws',
        '効果 : Powers up moves that make direct contact.',
        'かたいツメ',
        '正解はかたいツメで、直接攻撃技の威力が上がる。'
        ],
        ['とくせい : Natural Cure',
        '効果 : All status conditions heal when the Pokémon switches out. ※※status conditionは状態異常※※',
        'しぜんかいふく',
        '正解はしぜんかいふくで、戦闘からひっこめると、状態異常が治る。'
        ],
        ['とくせい : Strong Jaw',
        '効果 : The Pokémon\'s strong jaw boosts the power of its biting moves.',
        'がんじょうあご',
        '正解はがんじょうあごで、かみつく系の技の威力が上がる。'
        ],
        ['とくせい : Gale wings',
        '効果 : Gives priority to Flying-type moves when the Pokémon\'s HP is full.',
        'はやてのつばさ',
        '正解ははやてのつばさで、HPが満タンの時、ひこう技を先制で打てる。'
        ],
        ['とくせい : Solar Power',
        '効果 : Boosts Sp.Atk stat in harsh sunlight, but HP decreases every turn.  ※※Sp.Atk statはとくこうの能力値※※',
        'サンパワー',
        '正解はサンパワーで、天候がひざしが強いとき、とくこうが上がるが、毎ターン少しHPが減る。'
        ]
    ],
    [
        [5,'result01.html'],
        [4,'result02.html'],
        [3,'result03.html'],
        [2,'result04.html'],
        [1,'result05.html'],
        [0,'result06.html']  
    ]
];      //jsonファイルに入っているクイズデータを入れるための配列
let currentQuizNo;      //現在の問題番号
let quizCount = 0;      //現在の問題数
let correctCount = 0;   //正解数
let experience = [];    //既に出題した問題を入れるための配列
let exCount = 0;        //experience配列の添え字に使う用
 
// 問題データの取得
get_quiz_data();

/**
 * 問題のデータを取得する
 * 
 */
function get_quiz_data() {      /* 1 */
    // let xhr = new XMLHttpRequest();
    // xhr.onload = function() {
    //     quizData = xhr.response;
    // 問題画面の生成
    generate_quiz_content();    /**2 */
    // 問題の選択肢を選択したときのイベント設定
    register_choice_event();    /**3 */
    // }
    // xhr.open('GET', 'quiz2.json');
    // xhr.responseType = "json";
    // xhr.send();
}
 
/**
 * 問題の選択肢を選択したときのイベントを設定する
 * 
 */
function register_choice_event() {  /*3*/
    // for (var i = 0; i < document.querySelectorAll('.js-quiz-choice').length; i++) {
    //     document.querySelectorAll('.js-quiz-choice')[i].addEventListener('click', function(e) {
    //         // 回答・解説画面の生成
    //         //getAttribute()...()内の属性の値を取得する。
    //         //parseFroat()...()内の文字列を浮動小数点数に変換
    //         generate_answer_content(parseFloat(this.getAttribute('data-quiz_choice')));     /**3-1 */
    //         // 未回答の問題がある場合
    //         if(quizCount + 1 < 5) {
    //             // 次の問題へ遷移するときのイベント設定
    //             register_nextquiz_event();  /**3-2 */
    //         }
    //     }, false);
    // }
    document.getElementById("written").addEventListener("click", function(){
        if(document.getElementById("name").value == quizData[0][currentQuizNo][2]){      //正解の場合
            generate_answer_content(true);     /**3-1 */
        }
        else{                                                                                   //不正解の場合
            generate_answer_content(false);     /**3-1 */
        }
        if(quizCount + 1 < 5) {
            // 次の問題へ遷移するときのイベント設定
            register_nextquiz_event();  /**3-2 */
        }
    });
}
 
/**
 * 次の問題へ遷移するときのイベントを設定する
 * 
 */
function register_nextquiz_event() {    /*3-2*/ 
    document.querySelector('.js-quiz-next').addEventListener('click', function() {
        quizCount++;
        // 問題画面の生成
        generate_quiz_content();    /*2*/
        // 問題の選択肢を選択したときのイベント設定
        register_choice_event();    /*3*/
    }, false);
}
 
/**
 * 問題画面を生成する
 * 
 */
function generate_quiz_content() {      /*2*/
    while(true){    //重複しない乱数を生成
        let num = Math.floor(Math.random()*quizData[0].length);
        if(!experience.includes(num)){
            experience.push(num);
            break;
        }
    }
    currentQuizNo = experience[exCount];
    exCount++;

    var ins = '<h1 class="p-quiz-ttl">' + quizData[0][currentQuizNo][0] + '</h1>';
    ins += '<h2>' + quizData[0][currentQuizNo][1] + '</h2>';
    ins += '<input type="text" id="name" placeholder="とくせいをひらがな、またはカタカナで入力">';
    ins += '<button id="written">解答</button>';
    // ins += '<ol class="p-quiz-choices">';
    //     for (var i = 0; i < quizData['quiz'][currentQuizNo]['a'].length; i++) {
    //         ins += '<li class="p-quiz-choices__item">';
    //             ins += '<button class="c-btn js-quiz-choice" data-quiz_choice="' + (i+1) + '">' + quizData['quiz'][currentQuizNo]['a'][i] + '</button>';
    //         ins += '</li>';
    //     }
    // ins += '</ol>';
 
    document.querySelector('.js-quiz-content').innerHTML = ins;
}

//  * 回答・解説画面を生成する
function generate_answer_content(choice) {      /*3-1*/
    var ins = '<h1 class="p-quiz-ttl">' + quizData[0][currentQuizNo][0] + '</h1>';
    ins += '<h2>' + quizData[0][currentQuizNo][1] + '</h2>';
    // 正解の場合
    if(choice === true) {
        ins += '<p class="p-quiz-result">正解</p>';
        correctCount++;
    // 不正解の場合
    } else {
        ins += '<p class="p-quiz-result">不正解</p>';
    }
    ins += '<p class="p-quiz-commentary">' + quizData[0][currentQuizNo][3] + '</p>';
    // 未回答の問題がある場合
    if(quizCount + 1 < 5) {
        ins += '<div class="p-quiz-next">';
            ins += '<button class="c-btn js-quiz-next">次の問題</button>';
        ins += '</div>';
    // 全て回答済の場合
    } else {
        ins += '<div class="p-quiz-next">';
        for (var i = 0; i < quizData[1].length; i++) {
            if(correctCount === quizData[1][i][0]) {
                ins += '<a href="' + quizData[1][i][1] + '" class="c-btn">結果を見る</a>';
                break;
            }
        }
        ins += '</div>';
    }
 
    document.querySelector('.js-quiz-content').innerHTML = ins;
}