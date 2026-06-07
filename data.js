const gradeUnits = {
    junior1: ["beVerb","DoyouAreyouQues","thisOrThat","questionWord1","questionWord2",
              "imperative","pastTense","pronouns","thirdPerson","continuous","thereIsAre"],
    junior2: ["futureTense","modalVerbs","whenIfBecause","that","infinitive","itsForTo",
              "gerund","infAndGerund","qWordTo","comparison","passive"],
    junior3: ["presentPerfect","wantAskTell","bareInfinitive","indirectQuestions",
              "postModification","relativePronouns","subjunctive"]
};


const unitTitles = {
    beVerb: "be動詞",
    DoyouAreyouQues: "Do you? / Are you?",
    pronouns: "代名詞",
    thisOrThat: "this / that",
    questionWord1: "疑問詞1",
    questionWord2: "疑問詞2",
    thirdPerson: "動詞のS",
    imperative: "命令文",
    pastTense: "過去形",
    continuous: "進行形",
    thereIsAre: "There is / are",
    futureTense: "未来形",
    modalVerbs: "助動詞",
    whenIfBecause: "when / if / because",
    that: "that",
    infinitive: "不定詞",
    itsForTo: "It's...for...to...",
    gerund: "動名詞",
    infAndGerund: "不定詞と動名詞の違い",
    qWordTo: "疑問詞 + to",
    comparison: "比較",
    passive: "受動態",
    presentPerfect: "現在完了",
    wantAskTell: "want / ask / tell",
    bareInfinitive: "原形不定詞",
    indirectQuestions: "間接疑問文",
    postModification: "後置修飾",
    relativePronouns: "関係代名詞",
    subjunctive: "仮定法"
};

const unitPoints = {
    beVerb: "Be動詞の使い分けを知ろう。主語に注目",
    DoyouAreyouQues: "Do you~?とAre you~?の違いを見つけて。何を訊いてる？",
    pronouns: "Iは「私」じゃなくて「私は」。他も同じように覚えよう!",
    thisOrThat: "this that/these thoseの違いは？",
    questionWord1: "何を訊かれてる？what,where,when,who編",
    questionWord2: "何を訊かれてる？why,whose,which,how編",
    thirdPerson: "主語が単数のとき、現在形の動詞にはsが付きます",
    imperative: "主語が無いって気づいた？",
    pastTense: "edだけじゃない！不規則動詞もあるよ",
    continuous: "文の形の共通点を見つけて",
    thereIsAre: "thereは主語じゃないって気づいた？",
    futureTense: "willとbe going toの違いは？",
    modalVerbs: "助動詞の次、「動詞の形」に共通点があるね？",
    whenIfBecause: "前後入れ替えた「書き換え」もできるようにね",
    that: "thatの後の文の形を見てみよう",
    infinitive: "その「to」どう訳す？推測しよう",
    itsForTo: "訳の共通点を見つけよう",
    gerund: "「～すること」 ",
    infAndGerund: "どっち使うかで意味が変わる場合があるよ<br>不定詞は未来向き、動名詞は過去向きの意味になることが多い",
    qWordTo: "不定詞がくっついてるね",
    comparison: "最上級はtheを忘れないで！！！",
    passive: "文の形の共通点を覚えよう",
    presentPerfect: "その「完了形」どう訳す？3種類の訳があるよ",
    wantAskTell: "文の形の共通点を見つけよう",
    bareInfinitive: "toがない不定詞もあるんやで",
    indirectQuestions: "疑問詞の後ろの文の共通点を見つけよう",
    postModification: "「説明する言葉・される言葉」の位置関係を見てみよう",
    relativePronouns: "2種類の文があるよ。関係代名詞の後ろの文の形を見てみよう",
    subjunctive: "「今」ありえないことを想像する"
};


const grammarData = {

        beVerb: [
    // 現在形
    {
        english: "I am a deer.",
        japanese: "私は鹿です。"
    },
    {
        english: "The wolf is my friend.",
        japanese: "そのオオカミは私の友達です。"
    },
    {
        english: "Cats are my friends.",
        japanese: "猫たちは私の友達です。"
    },
    {
        english: "She is a tiger.",
        japanese: "彼女はトラです。"
    },
    {
        english: "The parrot and the rabbit are close.",
        japanese: "オウムとウサギは仲が良いです。"
    },
    {
        english: "It is cold today.",
        japanese: "今日は寒いです。"
    },

    // 過去形
    {
        english: "Mice were busy today.",
        japanese: "ネズミたちは今日忙しかったです。"
    },
    {
        english: "The Elephant 'Mia' was tired yesterday.",
        japanese: "ゾウのミアは昨日疲れていました。"
    },
    {
        english: "Ducks were at home last night.",
        japanese: "アヒルたちは昨夜家にいました。"
    },
    {
        english: "The bear was a doctor.",
        japanese: "そのクマは医者でした。"
    }
],


        DoyouAreyouQues: [
    {
        english: "Do you like soccer?",
        japanese: "あなたはサッカーが好きですか？"
    },
    {
        english: "Do you play the guitar?",
        japanese: "あなたはギターを弾きますか？"
    },
    {
        english: "Do you study English every day?",
        japanese: "あなたは毎日英語を勉強しますか？"
    },
    {
        english: "Do you live in Osaka?",
        japanese: "あなたは大阪に住んでいますか？"
    },
    {
        english: "Do you watch TV at night?",
        japanese: "あなたは夜にテレビを見ますか？"
    },
    {
        english: "Do you eat breakfast?",
        japanese: "あなたは朝ごはんを食べますか？"
    },
    {
        english: "Do you go to school by bus?",
        japanese: "あなたはバスで学校に行きますか？"
    },
    {
        english: "Do you listen to music?",
        japanese: "あなたは音楽を聞きますか？"
    },
    {
        english: "Do you clean your room?",
        japanese: "あなたは部屋を掃除しますか？"
    },
    {
        english: "Do you like this movie?",
        japanese: "あなたはこの映画が好きですか？"
    },
    {
        english: "Are you a student?",
        japanese: "あなたは学生ですか？"
    },
    {
        english: "Are you from Japan?",
        japanese: "あなたは日本出身ですか？"
    },
    {
        english: "Are you busy?",
        japanese: "あなたは忙しいですか？"
    },
    {
        english: "Are you at home?",
        japanese: "あなたは家にいますか？"
    },
    {
        english: "Is he your brother?",
        japanese: "彼はあなたの兄弟ですか？"
    },
    {
        english: "Is she a teacher?",
        japanese: "彼女は先生ですか？"
    },
    {
        english: "Is it cold today?",
        japanese: "今日は寒いですか？"
    },
    {
        english: "Is your bag heavy?",
        japanese: "あなたのカバンは重いですか？"
    },
    {
        english: "Are you ready?",
        japanese: "準備はできていますか？"
    },
    {
        english: "Is the door open?",
        japanese: "ドアは開いていますか？"
    }
],

        thisOrThat: [
    {
        english: "This is my book.",
        japanese: "これは私の本です。"
    },
    {
        english: "This is a vase.",
        japanese: "これは花瓶です。"
    },
    {
        english: "Is this your bag?",
        japanese: "これはあなたのカバンですか？"
    },
    {
        english: "This is my phone.",
        japanese: "これは私のスマホです。"
    },
    {
        english: "Is this my desk?",
        japanese: "これは私の机ですか？"
    },
    {
        english: "This is delicious.",
        japanese: "これはおいしいです。"
    },
    {
        english: "This is my friend.",
        japanese: "これは私の友達です。"
    },

    {
        english: "That is a mountain.",
        japanese: "あれは山です。"
    },
    {
        english: "Is that a dog?",
        japanese: "あれは犬ですか？"
    },
    {
        english: "That is a car.",
        japanese: "あれは車です。"
    },
    {
        english: "Is that your house?",
        japanese: "あれはあなたの家ですか？"
    },
    {
        english: "That is very big.",
        japanese: "あれはとても大きいです。"
    },
    {
        english: "Is that a nice picture?",
        japanese: "あれは良い写真ですか？"
    },

    {
        english: "These are my books.",
        japanese: "これらは私の本です。"
    },
    {
        english: "These are apples.",
        japanese: "これらはリンゴです。"
    },
    {
        english: "These are my friends.",
        japanese: "これらは私の友達です。"
    },
    {
        english: "Are these cookies?",
        japanese: "これらはクッキーですか？"
    },
    {
        english: "Are these your shoes?",
        japanese: "これらはあなたの靴ですか？"
    },
    {
        english: "Those are my teachers.",
        japanese: "あれらは私の先生たちです。"
    },
    {
        english: "Are those birds?",
        japanese: "あれらは鳥ですか？"
    },
    {
        english: "Those are cars.",
        japanese: "あれらは車です。"
    },
    {
        english: "Those are my classmates.",
        japanese: "あれらは私のクラスメイトです。"
    }
],

        pronouns: [
    {
        english: "I am a student.",
        japanese: "私は生徒です。"
    },
    {
        english: "You are kind.",
        japanese: "あなたは優しいです。"
    },
    {
        english: "He is my friend.",
        japanese: "彼は私の友達です。"
    },
    {
        english: "She is a teacher.",
        japanese: "彼女は先生です。"
    },
    {
        english: "It is a cat.",
        japanese: "それは猫です。"
    },
    {
        english: "We are happy.",
        japanese: "私たちは幸せです。"
    },
    {
        english: "They are students.",
        japanese: "彼らは生徒です。"
    },

    {
        english: "She likes me.",
        japanese: "彼女は私が好きです。"
    },
    {
        english: "I like you.",
        japanese: "私はあなたが好きです。"
    },
    {
        english: "I know him.",
        japanese: "私は彼を知っています。"
    },
    {
        english: "We help her.",
        japanese: "私たちは彼女を助けます。"
    },
    {
        english: "I see it.",
        japanese: "私はそれを見ます。"
    },
    {
        english: "They call us.",
        japanese: "彼らは私たちを呼びます。"
    },
    {
        english: "I meet them.",
        japanese: "私は彼らに会います。"
    },

    {
        english: "This is my book.",
        japanese: "これは私の本です。"
    },
    {
        english: "Is that your pen?",
        japanese: "それはあなたのペンですか？"
    },
    {
        english: "His name is Ken.",
        japanese: "彼の名前はケンです。"
    },
    {
        english: "Her bag is red.",
        japanese: "彼女のバッグは赤いです。"
    },
    {
        english: "Our teacher is kind.",
        japanese: "私たちの先生は優しいです。"
    },
    {
        english: "Their house is big.",
        japanese: "彼らの家は大きいです。"
    },

    {
        english: "This book is mine.",
        japanese: "この本は私のものです。"
    },
    {
        english: "That pen is yours.",
        japanese: "そのペンはあなたのものです。"
    },
    {
        english: "The bag is his.",
        japanese: "そのバッグは彼のものです。"
    },
    {
        english: "The car is hers.",
        japanese: "その車は彼女のものです。"
    },
    {
        english: "Do you have any questions?",
        japanese: "質問はある？"
    },
    {
        english: "They have some questions.",
        japanese: "彼らはいくつか質問があります。"
    },
    {
        english: "【発展編】Both of them speak English, but neither speaks French.",
        japanese: "【発展編】彼らはどちらも英語を話しますが、誰もフランス語を話しません。"
    },
    {
        english: "【発展編】Each of the boys has his own room.",
        japanese: "【発展編】男の子それぞれは自分の部屋がある。"
    },
    {
        english: "【発展編】Do you know either of the sisters?",
        japanese: "【発展編】姉妹のどちらかを知っていますか？"
    },
],

        questionWord1: [
    {
        english: "What is your name?",
        japanese: "あなたの名前は何ですか？"
    },
    {
        english: "What do you like?",
        japanese: "あなたは何が好き？"
    },
    {
        english: "What language do you speak?",
        japanese: "あなたは何語を話しますか？"
    },
    {
        english: "What is this?",
        japanese: "これは何？"
    },
    {
        english: "What time is it?",
        japanese: "今何時ですか？"
    },
    {
        english: "Where do you live?",
        japanese: "どこに住んでるの？"
    },
    {
        english: "Where are you from?",
        japanese: "あなたはどこの出身？"
    },
    {
        english: "Where is my bag?",
        japanese: "私のカバンはどこ？"
    },
    {
        english: "Where do you go after school?",
        japanese: "あなたは放課後どこに行きますか？"
    },

    {
        english: "When does she get up?",
        japanese: "彼女はいつ起きますか？"
    },
    {
        english: "When do you go to school?",
        japanese: "あなたはいつ学校に行きますか？"
    },
    {
        english: "When is your birthday?",
        japanese: "あなたの誕生日はいつ？"
    },
    {
        english: "When do you study English?",
        japanese: "あなたはいつ英語を勉強しますか？"
    },
    {
        english: "When does the class start?",
        japanese: "授業はいつ始まりますか？"
    },

    {
        english: "Who is he?",
        japanese: "彼は誰？"
    },
    {
        english: "Who is your teacher?",
        japanese: "あなたの先生は誰ですか？"
    },
    {
        english: "Who is that boy?",
        japanese: "あの男の子は誰？"
    },
    {
        english: "Who do you like?",
        japanese: "あなたは誰が好きですか？"
    },
],

        questionWord2: [
    {
        english: "Why are you sad?",
        japanese: "なぜ悲しんでいるの？"
    },
    {
        english: "Why do you study German?",
        japanese: "なんでドイツ語を勉強するの？"
    },
    {
        english: "Why is the train late?",
        japanese: "なんで電車が遅れているの？"
    },
    {
        english: "Why do you like soccer?",
        japanese: "なぜあなたはサッカーが好きなのですか？"
    },
    {
        english: "Why is he angry?",
        japanese: "なぜ彼はな怒っているの？"
    },

    {
        english: "Whose pen is this?",
        japanese: "これは誰のペン？"
    },
    {
        english: "Whose horse is that?",
        japanese: "あれは誰の馬？"
    },
    {
        english: "Whose phone is on the desk?",
        japanese: "机の上にある電話は誰のですか？"
    },

    {
        english: "Which do you like?",
        japanese: "あなたはどれが好き？"
    },
    {
        english: "Which one is your favorite shirt?",
        japanese: "あなたのお気に入りのシャツはどれ？"
    },
    {
        english: "Which color do you want?",
        japanese: "どの色が欲しいですか？"
    },
    {
        english: "Which is better?",
        japanese: "どっちの方が良い？"
    },
    {
        english: "Which class are you in?",
        japanese: "あなたは何組(どのクラス)ですか？"
    },

    {
        english: "How are you?",
        japanese: "元気？（一般的な挨拶）"
    },
    {
        english: "How do you go to school?",
        japanese: "どうやって学校に行きますか？"
    },
    {
        english: "How old are you?",
        japanese: "何歳？"
    },
    {
        english: "How much is this?",
        japanese: "これはいくら？"
    },
    {
        english: "How often do you study English?",
        japanese: "どのくらいの頻度で英語を勉強しますか？"
    }
],

        thirdPerson: [
    {
        english: "He likes soccer.",
        japanese: "彼はサッカーが好きです。"
    },
    {
        english: "She plays the piano.",
        japanese: "彼女はピアノを弾きます。"
    },
    {
        english: "It rains a lot.",
        japanese: "よく雨が降ります。"
    },
    {
        english: "He goes to school by bus.",
        japanese: "彼はバスで学校に行きます。"
    },
    {
        english: "He has a cat.",
        japanese: "彼は猫を飼っています。"
    },
    {
        english: "She lives in Osaka.",
        japanese: "彼女は大阪に住んでいます。"
    },
    {
        english: "It looks nice.",
        japanese: "それは良さそうです。"
    },

    {
        english: "Does he like soccer?",
        japanese: "彼はサッカーが好きですか？"
    },
    {
        english: "Does she play the piano?",
        japanese: "彼女はピアノを弾きますか？"
    },
    {
        english: "Does it rain today?",
        japanese: "今日は雨が降りますか？"
    },
    {
        english: "Does he go to school by bus?",
        japanese: "彼はバスで学校に行きますか？"
    },
    {
        english: "Does she study English every day?",
        japanese: "彼女は毎日英語を勉強しますか？"
    },
    {
        english: "Does he have a cat?",
        japanese: "彼は猫を飼っていますか？"
    }
],

        imperative: [
    {
        english: "Open the window.",
        japanese: "窓を開けて。"
    },
    {
        english: "Listen to me.",
        japanese: "私の話を聞いて。"
    },
    {
        english: "Stand up.",
        japanese: "立って。"
    },
    {
        english: "Sit down.",
        japanese: "座って。"
    },
    {
        english: "Be quiet.",
        japanese: "静かにして。"
    },
    {
        english: "Don’t run in the hall.",
        japanese: "廊下を走らないで。"
    },
    {
        english: "Don’t talk in class.",
        japanese: "授業中に話さないで。"
    },
    {
        english: "Let’s go shopping.",
        japanese: "買い物に行こう。"
    },
    {
        english: "Let’s not go shopping.",
        japanese: "買い物には行かないでおこう。"
    },
    {
        english: "【発展編】please help yourself.",
        japanese: "【発展編】ご自由にどうぞ。"
    },
    {
        english: "【発展編】please help yourself to eat cookies.",
        japanese: "【発展編】(クッキーを)自由にお取りください。"
    }
],

        pastTense: [
    {
        english: "I played soccer yesterday.",
        japanese: "私は昨日サッカーをしました。"
    },
    {
        english: "She studied English last night.",
        japanese: "彼女は昨夜英語を勉強しました。"
    },
    {
        english: "He watched TV yesterday.",
        japanese: "彼は昨日テレビを見ました。"
    },
    {
        english: "They visited Kyoto last week.",
        japanese: "彼らは先週京都を訪れました。"
    },
    {
        english: "I cleaned my room yesterday.",
        japanese: "私は昨日部屋を掃除しました。"
    },

    {
        english: "I went to school yesterday.",
        japanese: "私は昨日学校へ行きました。"
    },
    {
        english: "He ate breakfast this morning.",
        japanese: "彼は今朝朝ごはんを食べました。"
    },
    {
        english: "They were big and heavy.",
        japanese: "それらは大きくて重かった。"
    },
    {
        english: "She saw a movie last night.",
        japanese: "彼女は昨夜映画を見ました。"
    },
    {
        english: "I had a good time.",
        japanese: "私は楽しい時間を過ごしました。"
    },
    {
        english: "They came here yesterday.",
        japanese: "彼らは昨日ここに来ました。"
    },
    {
        english: "He was a vet.",
        japanese: "彼は獣医でした。"
    },
    {
        english: "She got up early.",
        japanese: "彼女は早く起きました。"
    },
    {
        english: "I did my homework.",
        japanese: "私は宿題をしました。"
    },
    
    {
        english: "Were you late for school?",
        japanese: "昨日学校に遅刻したの？"
    }
],

        continuous: [
    // 現在進行形
    {
        english: "I am studying English now.",
        japanese: "私は今英語を勉強しています。"
    },
    {
        english: "Is she playing the piano?",
        japanese: "彼女はピアノを弾いていますか？"
    },
    {
        english: "Is he watching TV?",
        japanese: "彼はテレビを見ていますか？"
    },
    {
        english: "They are playing soccer.",
        japanese: "彼らはサッカーをしています。"
    },
    {
        english: "We are eating lunch.",
        japanese: "私たちは昼ごはんを食べています。"
    },

    // 過去進行形
    {
        english: "I was studying English at 8.",
        japanese: "私は8時に英語を勉強していました。"
    },
    {
        english: "She was playing the piano then.",
        japanese: "彼女はその時ピアノを弾いていました。"
    },
    {
        english: "Was he watching TV last night?",
        japanese: "彼は昨夜テレビを見ていましたか？"
    },
    {
        english: "Were they playing soccer at that time?",
        japanese: "彼らはその時サッカーをしていましたか？"
    },
    {
        english: "We were eating dinner at that time.",
        japanese: "そのとき私たちは夕食を食べていました。"
    }
],

        thereIsAre: [
    {
        english: "There is a cat in the room.",
        japanese: "部屋に猫がいます。"
    },
    {
        english: "There were many people at the station.",
        japanese: "駅にたくさんの人がいました。"
    },
    {
        english: "There isn’t a pen in my bag.",
        japanese: "カバンにペンはありません。"
    },
    {
        english: "Was there a problem yesterday?",
        japanese: "昨日問題がありましたか？"
    },
    {
        english: "There are many students in the classroom.",
        japanese: "教室にたくさんの生徒がいます。"
    },
    {
        english: "There are two apples on the table.",
        japanese: "テーブルの上にリンゴが2つあります。"
    },
    {
        english: "There is a book on the desk.",
        japanese: "机の上に本があります。"
    },
    {
        english: "There were some books on the floor.",
        japanese: "床にいくつか本がありました。"
    },
    {
        english: "There aren’t any chairs in the room.",
        japanese: "部屋にイスは(1つも)ありません。"
    },
    {
        english: "There weren’t any dogs in the park.",
        japanese: "公園に犬は(1つも)いませんでした。"
    },
    {
        english: "【発展編】There were several animals living in the forest.",
        japanese: "【発展編】森にいくつかの動物が住んでいました。"
    }
],

        futureTense: [
    {
        english: "I will study English tomorrow.",
        japanese: "私は明日英語を勉強します。"
    },
    {
        english: "I will not go to school tomorrow.",
        japanese: "私は明日学校に行きません。"
    },
    {
        english: "Will you help me?",
        japanese: "手伝ってくれますか？"
    },
    {
        english: "She will play tennis after school.",
        japanese: "彼女は放課後テニスをします。"
    },
    {
        english: "Will she join the club?",
        japanese: "彼女は部活に入りますか？"
    },
    {
        english: "There will be a meeting tomorrow afternoon.",
        japanese: "明日の午後には会議があります。"
    },
    {
        english: "There will be many students there tomorrow.",
        japanese: "明日、そこには多くの学生がいるだろう。"
    },
    {
        english: "It will not be cold tomorrow.",
        japanese: "明日は寒くないでしょう。"
    },
    {
        english: "Will it snow tomorrow?",
        japanese: "明日は雪が降りますか？"
    },
    {
        english: "We are going to visit Kyoto.",
        japanese: "私たちは京都に行く予定です。"
    },
    {
        english: "We are not going to watch TV.",
        japanese: "私たちはテレビを見る予定はありません。"
    },
    {
        english: "Are you going to study today?",
        japanese: "あなたは今日勉強する予定ですか？"
    },
    {
        english: "He is going to buy a new bike.",
        japanese: "彼は新しい自転車を買う予定です。"
    },
    {
        english: "They are not going to play soccer.",
        japanese: "彼らはサッカーをする予定はありません。"
    }
],

        modalVerbs: [
    // can / could
    {
        english: "I can swim.",
        japanese: "私は泳げます。"
    },
    {
        english: "Can you help me?",
        japanese: "手伝ってくれますか？"
    },
    {
        english: "I cannot play the piano.",
        japanese: "私はピアノが弾けません。"
    },
    {
        english: "I could run fast when I was young.",
        japanese: "私は若い頃速く走れました。"
    },
    {
        english: "Could you open the door?",
        japanese: "ドアを開けていただけますか？"
    },
    {
        english: "I could not find my bag.",
        japanese: "カバンが見つかりませんでした。"
    },

    // will / would
    {
        english: "I will study English.",
        japanese: "私は英語を勉強します。"
    },
    {
        english: "Will you come tomorrow?",
        japanese: "あなたは明日来ますか？"
    },
    {
        english: "I will not go there.",
        japanese: "私はそこへ行きません。"
    },
    {
        english: "I would like some water.",
        japanese: "水がほしいです。"
    },
    {
        english: "Would you like some tea?",
        japanese: "お茶はいかがですか？"
    },
    {
        english: "I would not do that.",
        japanese: "私はそれをしません。"
    },

    // may / might
    {
        english: "It may rain today.",
        japanese: "今日は雨が降るかもしれません。"
    },
    {
        english: "May I come in?",
        japanese: "入ってもいいですか？"
    },
    {
        english: "You may not enter.",
        japanese: "入ってはいけません。"
    },
    {
        english: "He might be late.",
        japanese: "彼は遅れるかもしれません。"
    },
    {
        english: "It might snow.",
        japanese: "雪が降るかもしれません。"
    },
    {
        english: "I might go there.",
        japanese: "私はそこへ行くかもしれません。"
    },

    // must / have to
    {
        english: "You must study.",
        japanese: "あなたは勉強しなければなりません。"
    },
    {
        english: "You must not run here.",
        japanese: "ここで走ってはいけません。"
    },
    {
        english: "Must I go now?",
        japanese: "私は今行かなければなりませんか？"
    },
    {
        english: "I have to do my homework.",
        japanese: "私は宿題をしなければなりません。"
    },
    {
        english: "Do you have to go?",
        japanese: "あなたは行かなければなりませんか？"
    },
    {
        english: "I do not have to go.",
        japanese: "私は行く必要はありません。"
    },

    // should
    {
        english: "You should study hard.",
        japanese: "あなたは一生懸命勉強すべきです。"
    },
    {
        english: "Should I go?",
        japanese: "私は行くべきですか？"
    },
    {
        english: "You should not be late.",
        japanese: "あなたは遅れるべきではありません。"
    },

    // used to
    {
        english: "【発展編】I used to play soccer.",
        japanese: "【発展編】私は昔サッカーをしていました。"
    },
    {
        english: "【発展編】I did not use to like math.",
        japanese: "【発展編】私は昔数学が好きではありませんでした。"
    },
    {
        english: "【発展編】Did you use to live here?",
        japanese: "【発展編】あなたは昔ここに住んでいましたか？"
    }
],

        whenIfBecause: [
    // when（〜したとき）
    {
        english: "I was sleeping when he came in.",
        japanese: "彼が入ってきたとき私は寝ていました。"
    },
    {
        english: "I was studying when she called me.",
        japanese: "彼女が電話してきたとき私は勉強していました。"
    },
    {
        english: "It started raining when we went out.",
        japanese: "私たちが外に出たとき雨が降り始めました。"
    },
    {
        english: "When I arrived, he was playing.",
        japanese: "私が着いたとき彼は遊んでいました。"
    },

    // if（もし〜なら）
    {
        english: "If it rains, I will stay home.",
        japanese: "もし雨が降れば、私は家にいます。"
    },
    {
        english: "If you study hard, you will pass the test.",
        japanese: "一生懸命勉強すれば、テストに合格します。"
    },
    {
        english: "I will go there, if I have time.",
        japanese: "時間があれば、そこへ行きます。"
    },
    {
        english: "I will be happy if he comes.",
        japanese: "彼が来れば、私はうれしいです。"
    },

    // because（〜だから）
    {
        english: "I was late because I missed the train.",
        japanese: "電車に乗り遅れたので遅れました。"
    },
    {
        english: "I stayed home because it was raining.",
        japanese: "雨だったので家にいました。"
    },
    {
        english: "She is happy because she passed the exam.",
        japanese: "試験に合格したので彼女はうれしいです。"
    },
    {
        english: "He is tired because he worked hard.",
        japanese: "彼は一生懸命働いたので疲れています。"
    }
],

        that: [
    {
        english: "I think that he is kind.",
        japanese: "彼は優しいと思います。"
    },
    {
        english: "She knows that I am a student.",
        japanese: "彼女は私が生徒だと知っています。"
    },
    {
        english: "I hope that you are fine.",
        japanese: "あなたが元気だといいなと思います。"
    },
    {
        english: "He said that he was busy.",
        japanese: "彼は忙しいと言いました。"
    },
    {
        english: "I believe that she can win.",
        japanese: "彼女は勝てると信じています。"
    },
    {
        english: "【発展編】She said that that was her bag.",
        japanese: "【発展編】彼女はそれが彼女の鞄だと言いました。"
    }
],

        infinitive: [
    // to + 動詞（名詞的用法）
    {
        english: "I like to play soccer.",
        japanese: "私はサッカーをするのが好きです。"
    },
    {
        english: "To study English is important.",
        japanese: "英語を勉強することは大切です。"
    },
    {
        english: "I want to eat pizza.",
        japanese: "私はピザを食べたいです。"
    },
    {
        english: "He wants to be a doctor.",
        japanese: "彼は医者になりたいです。"
    },

    // to + 動詞（形容詞的用法）
    {
        english: "I have a lot of homework to do.",
        japanese: "私にはやるべき宿題がたくさんあります。"
    },
    {
        english: "This is a book to read.",
        japanese: "これは読むための本です。"
    },
    {
        english: "I need something to drink.",
        japanese: "私は飲むものが必要です。"
    },
    {
        english: "She has no time to play.",
        japanese: "彼女には遊ぶ時間がありません。"
    },

    // to + 動詞（副詞的用法：目的）
    {
        english: "I went to the park to play soccer.",
        japanese: "私はサッカーをするために公園へ行きました。"
    },
    {
        english: "She studies hard to pass the test.",
        japanese: "彼女はテストに合格するために一生懸命勉強します。"
    },
    {
        english: "I got up early to catch the bus.",
        japanese: "私はバスに乗るために早く起きました。"
    },
    {
        english: "He came here to see me.",
        japanese: "彼は私に会うためにここに来ました。"
    },
    {
        english: "【発展編】I told my brother not to be late.",
        japanese: "【発展編】私は兄に遅れないように言いました。"
    },
    {
        english: "【発展編】He decided not to go to the party.",
        japanese: "【発展編】彼はパーティーに行かないことに決めた。"
    },
    {
        english: "【発展編】This tea is too hot to drink.",
        japanese: "【発展編】このお茶は熱すぎて飲めない。"
    }
],

        itsForTo: [
    // for + 人あり
    {
        english: "It is important for you to study English.",
        japanese: "あなたにとって英語を勉強することは大切です。"
    },
    {
        english: "It is easy for him to solve the problem.",
        japanese: "彼にとってその問題を解くのは簡単です。"
    },
    {
        english: "It is difficult for me to get up early.",
        japanese: "私にとって早起きすることは難しいです。"
    },

    // forなし（一般的な形）
    {
        english: "It is good to get enough sleep.",
        japanese: "十分な睡眠をとるのは良いことです。"
    },
    {
        english: "It is fun to play soccer.",
        japanese: "サッカーをするのは楽しいです。"
    },
    {
        english: "It is important to eat breakfast.",
        japanese: "朝ごはんを食べることは大切です。"
    }
],

        gerund: [
    {
        english: "I enjoy playing soccer.",
        japanese: "私はサッカーをすることを楽しみます。"
    },
    {
        english: "She likes reading books.",
        japanese: "彼女は本を読むのが好きです。"
    },
    {
        english: "He finished doing his homework.",
        japanese: "彼は宿題を終えました。"
    },
    {
        english: "I am good at swimming.",
        japanese: "私は泳ぐのが得意です。"
    },
    {
        english: "Thank you for helping me.",
        japanese: "手伝ってくれてありがとう。"
    },
    {
        english: "They stopped talking.",
        japanese: "彼らは話すのをやめました。"
    },
    {
        english: "I am interested in learning English.",
        japanese: "私は英語を学ぶことに興味があります。"
    }
],

    infAndGerund: [
        {
            english: "Remember to lock the door.",
            japanese: "ドアを施錠することを忘れないで(これからのこと)。"
        },
        {
            english: "I remember locking the door.",
            japanese: "私はドアを施錠したことを覚えている(過去のこと)。"
        },
        {
            english: "Don't forget to bring your notebook.",
            japanese: "ノートを持ってくるのを忘れないで(これからのこと)。"
        },
        {
            english: "I'll never forget meeting her.",
            japanese: "私は彼女に会ったことを決して忘れません。(過去のこと)"
        },
        {
            english: "I regret to tell you the news.",
            japanese: "残念ながらニュースをお伝えします。(これからのこと)"
        },
        {
            english: "I regret telling him the secret.",
            japanese: "私は彼に秘密を話したことを後悔している。(過去のこと)"
        }
    ],

        qWordTo: [
    {
        english: "I don’t know what to do.",
        japanese: "何をすべきか分かりません。"
    },
    {
        english: "She knows how to swim.",
        japanese: "彼女は泳ぎ方を知っています。"
    },
    {
        english: "He doesn’t know where to go.",
        japanese: "彼はどこへ行けばいいか分かりません。"
    },
    {
        english: "I forgot when to start.",
        japanese: "いつ始めるか忘れました。"
    },
    {
        english: "Do you know which to choose?",
        japanese: "どれを選ぶべきか知っていますか？"
    },
    {
        english: "I can’t decide what to eat.",
        japanese: "何を食べるか決められません。"
    },
    {
        english: "Tell me how to use this.",
        japanese: "これの使い方を教えてください。"
    },
    {
        english: "I don’t know where to put it.",
        japanese: "それをどこに置くか分かりません。"
    },
    {
        english: "She showed me what to do.",
        japanese: "彼女は私に何をすべきか教えてくれました。"
    },
    {
        english: "He asked me how to get there.",
        japanese: "彼はそこへの行き方を私に尋ねました。"
    }
],

        comparison: [
    // 比較級（-er / more）
    {
        english: "My bag is bigger than yours.",
        japanese: "私のカバンはあなたのより大きいです。"
    },
    {
        english: "He is taller than me.",
        japanese: "彼は私より背が高いです。"
    },
    {
        english: "This book is more interesting than that one.",
        japanese: "この本はあれより面白いです。"
    },
    {
        english: "English is easier than math.",
        japanese: "英語は数学より簡単です。"
    },
    {
        english: "She runs faster than her brother.",
        japanese: "彼女は兄より速く走ります。"
    },
    {
        english: "This book is better than that one.",
        japanese: "この本はあれより良いです。"
    },
    {
        english: "The movie is less than two hours long.",
        japanese: "その映画は2時間未満です。"
    },

    // 最上級（-est / most）
    {
        english: "He is the tallest in my class.",
        japanese: "彼はクラスで一番背が高いです。"
    },
    {
        english: "This is the best book.",
        japanese: "これは一番良い本です。"
    },
    {
        english: "She is the most beautiful in the school.",
        japanese: "彼女は学校で一番美しいです。"
    },
    {
        english: "Tokyo is the biggest city in Japan.",
        japanese: "東京は日本で一番大きい都市です。"
    },
    {
        english: "This test is the most difficult.",
        japanese: "このテストは一番難しいです。"
    },
    {
        english: "This is the best movie.",
        japanese: "これは一番良い映画です。"
    },
    {
        english: "He is the worst student in the class.",
        japanese: "彼はクラスで一番悪い生徒です。"
    },
    {
        english: "Tom is as tall as Ken.",
        japanese: "トムはケンと同じくらい背が高い。"
    },
    {
        english: "This book is as interesting as that one.",
        japanese: "この本はあれと同じぐらい面白い。"
    },
    {
        english: "Tom is not as tall as Ken.",
        japanese: "トムはケンほど背が高くない。"
    },
    {
        english: "This book is not as interesting as that one.",
        japanese: "この本はあれほど面白くはない。"
    }
],

         passive: [
    {
        english: "This book is written in English.",
        japanese: "この本は英語で書かれています。"
    },
    {
        english: "The window was broken yesterday.",
        japanese: "窓は昨日壊されました。"
    },
    {
        english: "English is spoken in many countries.",
        japanese: "英語は多くの国で話されています。"
    },
    {
        english: "The cake was made by her.",
        japanese: "ケーキは彼女によって作られました。"
    },
    {
        english: "These songs are liked by many people.",
        japanese: "これらの歌は多くの人に好まれています。"
    },
    {
        english: "The letters were sent last week.",
        japanese: "手紙は先週送られました。"
    },
    {
        english: "The door is opened by him.",
        japanese: "そのドアは彼によって開けられます。"
    },
    {
        english: "The song was sung by him.",
        japanese: "その歌は彼によって歌われました。"
    },
    {
        english: "The window is cleaned every day.",
        japanese: "窓は毎日掃除されます。"
    },
    {
        english: "The cake was eaten by the children.",
        japanese: "ケーキは子どもたちに食べられました。"
    },
    {
        english: "【発展編】The bridge was built more than one hundred years ago.",
        japanese: "【発展編】その橋は100年以上前に建設されました。"
    },
    {
        english: "【発展編】We were surprised at the result",
        japanese: "【発展編】私たちはその結果に驚いた。"
    }
],

        presentPerfect: [
    // ① 継続
    {
        english: "I have lived here for ten years.",
        japanese: "私は10年間ここに住んでいます。"
    },
    {
        english: "She has studied English for two hours.",
        japanese: "彼女は2時間英語を勉強しています。"
    },
    {
        english: "He has known me for a long time.",
        japanese: "彼は長い間私を知っています。"
    },
    {
        english: "How long have you lived here?",
        japanese: "どのくらいここに住んでいますか？"
    },
    {
        english: "Since 11 years ago.",
        japanese: "11年前からです。"
    },

    // ② 経験
    {
        english: "I have been to Kyoto.",
        japanese: "私は京都に行ったことがあります。"
    },
    {
        english: "She has visited London twice.",
        japanese: "彼女はロンドンに2回行ったことがあります。"
    },
    {
        english: "He has tried sushi before.",
        japanese: "彼は以前寿司を食べたことがあります。"
    },
    {
        english: "Have you ever been to Kyoto?",
        japanese: "あなたは京都に行ったことがありますか？"
    },
    {
        english: "Have they ever seen this movie?",
        japanese: "彼らはこの映画を見たことがありますか？"
    },
    {
        english: "I have never been to Tokyo Tower.",
        japanese: "私は東京タワーに行ったことがありません。"
    },

    // ③ 完了
    {
        english: "I have finished my homework.",
        japanese: "私は宿題を終えました。"
    },
    {
        english: "She has already eaten lunch.",
        japanese: "彼女はすでに昼ごはんを食べました。"
    },
    {
        english: "Have you finished your homework?",
        japanese: "あなたは宿題を終えましたか？"
    },
    {
        english: "I have not finished my homework yet.",
        japanese: "私はまだ宿題を終えていません。"
    },

    // ④ 現在完了進行形
    {
        english: "I have been studying English for two hours.",
        japanese: "私は2時間英語を勉強し続けています。"
    },
    {
        english: "She has been waiting for you.",
        japanese: "彼女はあなたを待ち続けています。"
    },
    {
        english: "They have been playing soccer since morning.",
        japanese: "彼らは朝からサッカーをし続けています。"
    }
],

        wantAskTell: [
    // want + 人 + to
    {
        english: "I want you to help me.",
        japanese: "私はあなたに手伝ってほしいです。"
    },
    {
        english: "She wants me to study harder.",
        japanese: "彼女は私にもっと一生懸命勉強してほしいです。"
    },
    {
        english: "He wants us to come early.",
        japanese: "彼は私たちに早く来てほしいです。"
    },

    // ask + 人 + to
    {
        english: "I asked him to open the door.",
        japanese: "私は彼にドアを開けるよう頼みました。"
    },
    {
        english: "She asked me to wait here.",
        japanese: "彼女は私にここで待つよう頼みました。"
    },
    {
        english: "They asked us to help them.",
        japanese: "彼らは私たちに彼らを手伝うよう頼みました。"
    },

    // tell + 人 + to
    {
        english: "I told him to study hard.",
        japanese: "私は彼に一生懸命勉強するよう言いました。"
    },
    {
        english: "She told me to come here.",
        japanese: "彼女は私にここへ来るよう言いました。"
    },
    {
        english: "He told us to be quiet.",
        japanese: "彼は私たちに静かにするよう言いました。"
    },
    {
        english: "The teacher told them to sit down.",
        japanese: "先生は彼らに座るよう言いました。"
    }
],

        bareInfinitive: [
    // help（toなし・両方あり）
    {
        english: "She helped me clean my room.",
        japanese: "彼女は私の部屋の掃除を手伝いました。"
    },
    {
        english: "My friend helped me study English.",
        japanese: "友達が英語の勉強を手伝ってくれました。"
    },
    {
        english: "He helped me carry the bag.",
        japanese: "彼は私がカバンを運ぶのを手伝ってくれました。"
    },
    {
        english: "The teacher helped us understand math.",
        japanese: "先生は私たちが数学を理解するのを助けました。"
    },
    {
        english: "I helped him fix his bike.",
        japanese: "私は彼が自転車を直すのを手伝いました。"
    },

    // make（強制）
    {
        english: "The teacher made me do my homework.",
        japanese: "先生は私に宿題をさせました(強制的に)。"
    },
    {
        english: "My mom made me clean my room.",
        japanese: "母は私に部屋を掃除させました(強制的に)。"
    },
    {
        english: "He made me wait for a long time.",
        japanese: "彼は私を長い間待たせました(強制的に)。"
    },

    // let（許可）
    {
        english: "My parents let me go out.",
        japanese: "両親は私を外出させてくれました(していいよの意味)。"
    },
    {
        english: "He let me use his phone.",
        japanese: "彼は私に彼の携帯を使わせてくれました(していいよの意味)。"
    }
],

        indirectQuestions: [
    {
        english: "I don’t know what he is doing.",
        japanese: "彼が何をしているのか分かりません。"
    },
    {
        english: "Do you know where she lives?",
        japanese: "彼女がどこに住んでいるか知っていますか？"
    },
    {
        english: "I wonder when the train leaves.",
        japanese: "電車がいつ出るのか気になります。"
    },
    {
        english: "He doesn’t know why she is angry.",
        japanese: "彼はなぜ彼女が怒っているのか知りません。"
    },
    {
        english: "Can you tell me how I can get to the station?",
        japanese: "駅への行き方を教えてくれますか？"
    },
    {
        english: "I don’t know who that boy is.",
        japanese: "あの男の子が誰か分かりません。"
    },
    {
        english: "Do you know what time it is?",
        japanese: "今何時か知っていますか？"
    },
    {
        english: "She asked me where I was going.",
        japanese: "彼女は私にどこへ行くのか尋ねました。"
    },
    {
        english: "I don’t understand what he said.",
        japanese: "彼が言ったことが分かりません。"
    },
    {
        english: "Can you tell me which bus goes to Osaka?",
        japanese: "どのバスが大阪行きか教えてくれますか？"
    }
],

        postModification: [
    // 現在分詞（〜している）
    {
        english: "The boy playing soccer is my brother.",
        japanese: "サッカーをしている少年は私の兄です。"
    },
    {
        english: "The girl standing over there is my friend.",
        japanese: "あそこに立っている少女は私の友達です。"
    },
    {
        english: "The man talking to my teacher is my father.",
        japanese: "先生と話している男性は私の父です。"
    },
    {
        english: "The students studying in the library are quiet.",
        japanese: "図書館で勉強している生徒たちは静かです。"
    },

    // 過去分詞（〜された）
    {
        english: "The book written in English is difficult.",
        japanese: "英語で書かれた本は難しいです。"
    },
    {
        english: "The cake made by my mom is delicious.",
        japanese: "母が作ったケーキはおいしいです。"
    },

    // 名詞 + ing（〜しているもの・人）
    {
        english: "I have a friend living in Osaka.",
        japanese: "私は大阪に住んでいる友達がいます。"
    }
],

        relativePronouns: [
    // 主格（who / which / that）
    {
        english: "The boy who plays soccer is my brother.",
        japanese: "サッカーをしている少年は私の兄です。"
    },
    {
        english: "The girl who lives in Osaka is my friend.",
        japanese: "大阪に住んでいる少女は私の友達です。"
    },
    {
        english: "The book which is on the desk is mine.",
        japanese: "机の上にある本は私のものです。"
    },
    {
        english: "The dog that runs fast is mine.",
        japanese: "速く走る犬は私のものです。"
    },
    {
        english: "Do you know the boy who is talking over there?",
        japanese: "あそこで話している少年を知っていますか？"
    },

    // 目的格（省略OK）
    {
        english: "The boy (who) I met yesterday is Tom.",
        japanese: "昨日会った少年はトムです。"
    },
    {
        english: "The book (which) I bought is interesting.",
        japanese: "私が買った本は面白いです。"
    },
    {
        english: "The girl (who) I like is kind.",
        japanese: "私が好きな女の子は優しいです。"
    },
    {
        english: "The movie (which) we saw was great.",
        japanese: "私たちが見た映画は最高でした。"
    },
    {
        english: "Is this the book (which) you were reading?",
        japanese: "これはあなたが読んでいた本ですか？"
    }
],

        subjunctive: [
    // 仮定法過去（現実と違う仮定）
    {
        english: "If I were you, I would study harder.",
        japanese: "もし私があなただったら、もっと勉強します。"
    },
    {
        english: "If I had money, I would buy a bike.",
        japanese: "もしお金があれば、自転車を買うのに。"
    },
    {
        english: "If he studied more, he would pass the test.",
        japanese: "もっと勉強すれば、彼は試験に合格するのに。"
    },
    {
        english: "If it were sunny, we would go out.",
        japanese: "晴れていれば、私たちは外出するのに。"
    },

    // wish（願望）
    {
        english: "I wish I were taller.",
        japanese: "もっと背が高ければいいのに。"
    },
    {
        english: "I wish I had more time.",
        japanese: "もっと時間があればいいのに。"
    },
    {
        english: "I wish I could fly.",
        japanese: "空を飛べたらいいのに。"
    },
    {
        english: "I wish it were summer now.",
        japanese: "今が夏だったらいいのに。"
    }
]
};
