let quizData = [
    [
        ['Bite',['あくのはどう','イカサマ','かみつく','わるだくみ'],2,'正解はかみつくで、Biteは噛むという意味。'],
        ['Painsplit',['いたみわけ','いのちがけ','おんねん','いやなおと'],0,'正解はいたみわけで、Painは痛み、Splitは分割という意味。'],
        ['Ice Fang',['こおりのつぶて','こおりのキバ','こごえるかぜ','れいとうビーム'],1,'正解はこおりのキバで、Iceは氷、Fangは牙という意味。'],
        ['Scald',['いあいぎり','どくどく','ねっとう','みずびたし'],2,'正解はねっとう。'],
        ['Leech Seed',['すいとる','タネばくだん','なやみのタネ','やどりぎのタネ'],3,'正解はやどりぎのタネで、Leechは吸う、Seedはタネという意味。'],
        ['Ourrage',['イカサマ','げきりん','しっぺがえし','バークアウト'],1,'正解はげきりんで、Outrageは激怒という意味。'],
        ['Harden',['かたくなる','からにこもる','てっぺき','とける'],0,'正解はかたくなるで、hardenはhardの動詞形。'],
        ['Last Resort',['すなあらし','すなじごく','とっておき','ラスターカノン'],2,'正解はとっておきで、Last Resortは最後の手段や切り札という意味。'],
        ['Mimic',['おきみやげ','ちいさくなる','じゃれつく','ものまね'],3,'正解はものまねで、Mimicはまねるという意味。'],
        ['Origin Pulse',['いやしのはどう','こんげんのはどう','はどうだん','りゅうのはどう'],1,'正解はこんげんのはどうで、Originは起源や根源という意味。'],
        ['Blizzard',['こおりのキバ','こごえるかぜ','ふぶき','れいとうビーム'],2,'正解はふぶき。'],
        ['Gastro Acid',['いえき','どくどく','はきだす','りんごさん'],0,'正解はいえきで、Gastroは胃という意味。'],
        ['Fire Pledge',['ほのおのキバ','ほのおのちかい','ほのおのまい','ほのおのムチ'],1,'正解はほのおのちかいで、Pledgeは制約や約束、誓いという意味。'],
        ['Substitute',['とっておき','みがわり','みきり','まもる'],1,'正解はみがわりで、Substituteは代用品や補欠という意味。'],
        ['Thief',['あくのはどう','かみくだく','さしおさえ','どろぼう'],3,'正解はどろぼう。'],
        ['Coil',['10まんボルト','でんきショック','とぐろをまく','マグネットボム'],2,'正解はとぐろをまくで、Coilはぐるぐる巻きという意味。'],
        ['Pursuit',['おいうち','かげうち','ふいうち','だましうち'],0,'正解はおいうちで、Pursuitは追跡、追求という意味。'],
        ['Rock Slide',['いわくだき','いわなだれ','うちおとす','ストーンエッジ'],1,'正解はいわなだれで、Slideには雪崩という意味もある。'],
        ['Thunderbolt',['10まんボルト','アイアンテール','エレキボール','でんこうせっか'],0,'10まんボルトはサンダーボルト。'],
        ['Strength',['いあいぎり','いわくだき','かいりき','ロッククライム'],3,'正解はかいりきで、Strengthは力、強さという意味。'],
        ['Bide',['がまん','がむしゃら','きしかいせい','たいあたり'],0,'正解はがまんで、Bideは耐えるという意味。'],
        ['Explosion',['いのちがけ','おきみやげ','だいばくはつ','ミストバースト'],2,'正解はだいばくはつで、Explosionは爆発という意味。'],
        ['Sticky Web',['いとをはく','エレキネット','ねばねばネット','まきびし'],2,'正解はねばねばネットで、Stickyは粘着性のあるという意味で、Webは蜘蛛の巣や網という意味。'],
        ['Lunar Dance',['ちょうのまい','つるぎのまい','みかづきのまい','りゅうのまい'],2,'正解はみかづきのまいで、Lunarは月という意味の形容詞。'],
        ['Draco Meteor',['コメットパンチ','メテオドライブ','りゅうせいぐん','りゅうのはどう'],2,'正解はりゅうせいぐんで、Dracoは竜座、Meteorは隕石という意味。'],
        ['Soak',['あまごい','にほんばれ','ねっぷう','みずびたし'],3,'正解はみずびたしで、Soakは浸かるという意味。'],
        ['Scratch',['たいあたり','なきごえ','はたく','ひっかく'],3,'正解はScratchで、ひっかくという意味。'],
        ['Light of Ruin',['ソーラービーム','はかいこうせん','はめつのひかり','ひかりのかべ'],2,'正解ははめつのひかりで、Ruinは破壊や崩壊という意味。'],
        ['Sacred Fire',['あおいほのお','せいなるほのお','ほのおのちかい','ほのおのまい'],1,'正解はせいなるほのおで、Sacredは聖なるという意味。'],
        ['Absorb',['すいとる','つるのムチ','はっぱカッター','メガドレイン'],0,'正解はすいとるで、Absorbは吸うという意味。'],
        ['Yawn',['あくび','あくむ','さいみんじゅつ','じこあんじ'],0,'正解はあくび。'],
        ['Close Combat',['インファイト','さしおさえ','てだすけ','ばかぢから'],0,'正解はインファイトで、Close Combatは接近戦という意味。'],
        ['Grass Knot',['くさのちかい','くさぶえ','くさむすび','はっぱカッター'],2,'正解はくさむすびで、Knotは結び、編みという意味。'],
        ['Anciant Power',['げんしのちから','だいちのちから','パワートリック','めざめるパワー'],0,'正解はげんしのちからで、Anciantは古代という意味。'],
        ['Earthquake',['じしん','じだんだ','じならし','ちきゅうなげ'],0,'正解はじしん。'],
        ['Toxic',['おにび','さいみんじゅつ','でんじは','どくどく'],3,'正解はどくどくで、Toxicは有毒なという意味の形容詞。'],
        ['Dragon Darts',['ドラゴンアロー','ドラゴンエナジー','ドラゴンクロー','ドラゴンダイブ'],0,'Dartsはダーツという意味でアロー(Arrow)は矢という意味なので、正解は最も意味が近いドラゴンアロー。'],
        ['Nightmare',['あくむ','ダークホール','ナイトバースト','ナイトヘッド'],0,'正解はあくむ。'],
        ['Healing Wish',['いやしのすず','いやしのねがい','いやしのはどう','かいふくふうじ'],1,'正解はいやしのねがいで、Wishは願望という意味。'],
        ['Branch Poke',['えだづき','つるのムチ','はっぱカッター','ウッドハンマー'],0,'正解はえだづきで、Branchは枝、Pokeは突くという意味。'],
        ['Tailwind',['おいかぜ','かぜおこし','こごえるかぜ','ぼうふう'],0,'正解はおいかぜ。'],
        ['Aura Sphere',['オーラぐるま','ちきゅうなげ','はどうだん','まるくなる'],2,'正解ははどうだんで、Auraはオーラ、Sphereは球体という意味。'],
        ['Calm Mind',['こころのめ','じこあんじ','じこさいせい','めいそう'],3,'正解はめいそうで、Calmは静か、Mindは精神という意味。'],
        ['Burn up',['オーバーヒート','かえんほうしゃ','だいもんじ','もえつきる'],3,'正解はもえつきる。'],
        ['Dig',['あなをほる','あばれる','じしん','もえつきる'],0,'正解はあなをほるで、Digは掘るという意味。'],
        ['Foul Play',['イカサマ','コートチェンジ','どろあそび','みずあそび'],0,'正解はイカサマで、Foul Playは反則という意味。'],
        ['Endeavor',['がむしゃら','からげんき','きあいだめ','たいあたり'],0,'正解はがむしゃらで、Endeavorは努力という意味。'],
        ['Growth',['せいちょう','なきごえ','ふるいたてる','わるだくみ'],0,'正解はせいちょう。'],
        ['Double-Edge',['すてみタックル','ステルスロック','ストーンエッジ','ダブルアタック'],0,'正解はすてみタックルで、Double-Edgeは諸刃や作用と反作用があるという意味。'],
        ['Ember',['つるのムチ','でんきショック','ひのこ','みずでっぽう'],2,'正解はひのこで、Emberは残り火や燃えさしという意味。'],
        ['Confuse Ray',['あやしいひかり','つきのひかり','ひかりのかべ','はめつのひかり'],0,'正解はあやしいひかりで、Confuseは惑わすという意味。'],
        ['Hail',['あられ','きりばらい','すなおこし','にほんばれ'],0,'正解はあられで、Hailはあられという意味もある。'],
        ['Fake Tears',['あやしいひかり','イカサマ','うそなき','みずでっぽう'],2,'正解はうそなきで、Fakeはウソ、Tearsは涙という意味。'],
        ['Crunch',['かみくだく','かみつく','にぎりつぶす','ふみつけ'],0,'正解はかみくだく。'],
        ['Shell Smash',['からにこもる','からをやぶる','かわらわり','シェルブレード'],1,'正解はからをやぶるで、Shellは貝殻、Smashは壊すという意味。'],
        ['Spore',['あくび','キノコのほうし','くさぶえ','さいみんじゅつ'],1,'正解はキノコのほうしで、Sporeは胞子という意味。'],
        ['Max Lightning',['ダイウォール','ダイサンダー','ダイナックル','ダイワーム'],1,'正解はダイサンダーで、Lightningは稲光という意味。'],
        ['Horn Drill',['つのでつく','つのドリル','ドリルくちばし','ドリルライナー'],1,'正解はつのドリルで、Hornは角、Drillはドリルという意味。'],
        ['Thunder Wave',['10まんボルト','かみなり','でんきショック','でんじは'],3,'正解はでんじはで、Waveは波という意味。'],
        ['Bolt Beak',['10まんボルト','でんげきくちばし','ボルトチェンジ','ワイルドボルト'],1,'正解はでんげきくちばしで、Beakはくちばしという意味。'],
        ['Poison Jab',['どくガス','どくづき','どくのこな','どくびし'],1,'正解はどくづきで、Jabは突くという意味。'],
        ['Surf',['アクアブレイク','たきのぼり','だくりゅう','なみのり'],3,'正解はなみのりで、Surfは波に乗るという意味。'],
        ['Eruption',['オーバーヒート','だいもんじ','ブラストバーン','ふんか'],3,'正解はふんか。'],
        ['Dragon Breath',['りゅうのいかり','りゅうのいぶき','りゅうのはどう','りゅうのまい'],1,'正解はりゅうのいぶきで、Breathは呼吸や息吹という意味。'],
        ['Struggle',['すてみタックル','とっしん','やつあたり','わるあがき'],3,'正解はわるあがきで、もがく、またはあがくという意味。'],
        ['Transform',['つるぎのまい','トライアタック','へんしん','リフレクター'],2,'正解はへんしん。'],
        ['Electroweb',['エレキネット','エレキフィールド','エレキボール','スパーク'],0,'正解はエレキネットで、webは網という意味でネット(net)と意味が近い。'],
        ['Endure',['かげぶんしん','こらえる','ふるいたてる','まもる'],1,'正解はこらえるで、Endureは耐えるや、持ちこたえるという意味。'],
        ['Burning Jealousy',['しっとのほのお','ほのおのキバ','ほのおのパンチ','ほのおのまい'],0,'正解はしっとのほのおで、Jealousyは妬みや嫉妬という意味。'],
        ['Shift Gear',['アシストギア','ギアソーサー','ギアチェンジ','ボルトチェンジ'],2,'正解はギアチェンジで、Shiftは変えるという意味でチェンジ(Change)と意味が近い。'],
        ['Flame Wheel',['かえんぐるま','かえんほうしゃ','ほのおのキバ','ねっぷう'],0,'正解はで、かえんぐるまで、Wheelは車輪やハンドルという意味で、車と関係がある。'],
        ['Purify',['じこさいせい','じょうか','なまける','はねやすめ'],1,'正解はじょうかで、Purifyは、浄化する、きれいにするという意味。'],
        ['Mist',['おまじない','グラスフィールド','しろいきり','しんぴのまもり'],2,'正解はしろいきりで、Mistは霧という意味。'],
        ['Twister',['エアスラッシュ','かぜおこし','たつまき','ひのこ'],2,'正解はたつまき。'],
        ['Bullet Seed',['タネばくだん','タネマシンガン','なやみのタネ','やどりぎのタネ'],1,'正解はタネマシンガンで、Bulletは銃弾、Seedはタネという意味。'],
        ['Muddy Water',['だくりゅう','みずのちかい','みずでっぽう','みずのはどう'],0,'正解はだくりゅうで、Muddyは泥水という意味。'],
        ['Play Rough',['おだてる','じゃれつく','どろあそび','みずあそび'],1,'正解はじゃれつくで、Play Roughは荒っぽいことをするという意味。'],
        ['Supersonic Skystrike',['ウルトラダッシュアタック','スーパーアクアトルネード','ダイナミックフルフレイム','ファイナルダイブクラッシュ'],3,'正解はファイナルダイブクラッシュで、飛行タイプのZ技。'],
        ['Quick Attack',['きりさく','たいあたり','でんこうせっか','はたく'],2,'正解はでんこうせっか。'],
        ['G-Max Snooze',['キョダイカキュウ','キョダイゲンエイ','キョダイスイマ','キョダイフウゲキ'],2,'正解はキョダイスイマで、Snoozeは居眠りやうたた寝という意味。'],
        ['Vacuum Wave',['でんげきは','でんじは','しんくうは','なみのり'],2,'正解はしんくうはで、Vacuumは真空という意味。'],
        ['Wish',['じこさいせい','なまける','ねがいごと','はねやすめ'],2,'正解はねがいごとで、Wishは願うという意味。'],
        ['Secret Power',['アシストパワー','だいちのちから','ひみつのちから','めざめるパワー'],2,'正解はひみつのちから。'],
        ['Protect',['しっぽをふる','にらみつける','まもる','まるくなる'],2,'正解はまもる。'],
        ['Behemoth Blade',['きょうじゅうざん','しんぴのつるぎ','せいなるつるぎ','ソーラーブレード'],0,'正解はきょうじゅうざんで、Behemothは巨大な動物という意味。'],
        ['Rest',['ねがいごと','ねこのて','ねむる','ねをはる'],2,'正解はねむるで、Restは睡眠という意味。'],
        ['Swallow',['たくわえる','ねむる','のみこむ','はきだす'],2,'正解はのみこむ。'],
        ['Crush Grip',['いわくだき','からをやぶる','にぎりつぶす','はかいこうせん'],2,'正解はにぎりつぶすで、Gripは握るという意味。'],
        ['Role Play',['ころがる','じゃれつく','どろあそび','なりきり'],3,'正解はなりきりで、Role Playは役を演じるという意味。'],
        ['Steel Wing',['アイアンヘッド','ステルスロック','てっぺき','はがなのつばさ'],3,'正解ははがなのつばさ。'],
        ['String Shot',['アンカーショット','いとをはく','はかいこうせん','ミラーショット'],1,'正解はいとをはくで、Stringは糸という意味も持つ。'],
        ['Struggle Bug',['とんぼがえり','むしくい','むしのさざめき','むしのていこう'],3,'正解はむしのていこうで、Struggleは奮闘する、あがくという意味。'],
        ['Perish Song',['いにしえのうた','うたう','うたかたのアリア','ほろびのうた'],3,'正解はほろびのうたで、Perishは滅びる、消滅するという意味。'],
        ['Rage',['いかり','からみつく','たいあたり','きりさく'],0,'正解はいかりで、Rageは激怒、怒るという意味。'],
        ['Leech Life',['いのちがけ','きゅうけつ','じばく','ねんりき'],1,'Leech Lifeは命を吸うという意味なので、それと最も意味が近い吸血が正解。'],
        ['Splash',['あわ','ハイドロポンプ','はねる','みずでっぽう'],2,'正解ははねるで、はねること、飛沫という意味。'],
        ['Mach Punch',['きあいパンチ','グロウパンチ','ばくれつパンチ','マッハパンチ'],3,'正解はマッハパンチ。'],
        ['Cosmic Power',['コスモパワー','しぜんのちから','だいちのちから','めざめるパワー'],0,'正解はコスモパワー。'],
        ['Dream Eater',['かみつく','ほおばる','むしくい','ゆめくい'],3,'正解はゆめくい。'],
        ['Frustration',['おんがえし','かいふくしれい','めざめるパワー','やつあたり'],3,'Frustrationはイライラしている状態を意味するので、正解はその状態に最も近いやつあたり。']
    ],  
    [
        [5,'result01.html'],
        [4,'result02.html'],
        [3,'result03.html'],
        [2,'result04.html'],
        [1,'result05.html'],
        [0,'result06.html']  
    ]
];   
//jsonファイルに入っているクイズデータを入れるための配列
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
//     }
//     xhr.open('GET', 'quiz.json');
//     xhr.responseType = "json";
//     xhr.send();
// }
}
 
/**
 * 問題の選択肢を選択したときのイベントを設定する
 * 
 */
function register_choice_event() {  /*3*/
    for (var i = 0; i < document.querySelectorAll('.js-quiz-choice').length; i++) {
        document.querySelectorAll('.js-quiz-choice')[i].addEventListener('click', function(e) {
            // 回答・解説画面の生成
            //getAttribute()...()内の属性の値を取得する。
            //parseFroat()...()内の文字列を浮動小数点数に変換
            generate_answer_content(parseFloat(this.getAttribute('data-quiz_choice')));     /**3-1 */
            // 未回答の問題がある場合
            if(quizCount + 1 < 5) {
                // 次の問題へ遷移するときのイベント設定
                register_nextquiz_event();  /**3-2 */
            }
        }, false);
    }
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
    ins += '<ol class="p-quiz-choices">';
        for (var i = 0; i < quizData[0][currentQuizNo][1].length; i++) {
            ins += '<li class="p-quiz-choices__item">';
                ins += '<button class="c-btn js-quiz-choice" data-quiz_choice="' + i + '">' + quizData[0][currentQuizNo][1][i] + '</button>';
            ins += '</li>';
        }
    ins += '</ol>';
 
    document.querySelector('.js-quiz-content').innerHTML = ins;
}

//  * 回答・解説画面を生成する
function generate_answer_content(choice) {      /*3-1*/
    var ins = '<h1 class="p-quiz-ttl">' + quizData[0][currentQuizNo][0] + '</h1>';
    // 正解の場合
    if(quizData[0][currentQuizNo][2] == choice) {
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