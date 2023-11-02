import React from 'react';

import 'modern-css-reset';

import TopSlide from '../components/TopSlide';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTop from '../components/PageTop';
import FootBt from '../components/FootBt';
import ReasonParts from '../components/ReasonParts';
import ContactParts from '../components/ContactParts';
import FlowParts from '../components/FlowParts';
import Seo from '../components/Seo';
import TopBlog from '../components/TopBlog';

const indexPage = () => {
  return (
    <>
      <Header />

      <PageTop />

      <FootBt />
      <div id='mainimage'>
        <div className='m_copy'>
          <img src='images/m_copy01.png' width={1078} height={197} alt='必ずお力になります私たちにお任せください心に寄り添った対応を致します。' />
        </div>
        <div className='emblem pc'>
          <img src='images/emblem_01.png' width={528} height={102} alt='' />
        </div>
        <div className='emblem tub'>
          <img src='images/emblem_01_smp.png' width={350} alt='' />
        </div>
        <div className='top_column'>
          <div className='title'>探偵コラム</div>
          <div className='post'>2023.4.13 ホームページリニューアルここにお知らせなどを表示します。</div>
        </div>
      </div>

      <main role='main'>
        <section id='greeting'>
          <div className='main-content'>
            <h2>はじめてご相談される方へ</h2>

            <div className='greeting_box'>
              <div className='greeting_txt'>
                <p>数ある探偵業者の中から弊社のホームページをご覧いただき、ありがとうございます。</p>

                <p>弊社は、お客様が直面されているあらゆる悩みを親身になってお聞きし、早期に問題解決する事をお約束致します。</p>

                <p>弊社の特徴としては高度な調査スキルで難易度の高い事案でも、そつなく問題解決できることです。</p>

                <p>例え、ご相談内容が話しにくい内容でも、お客様の秘密はしっかり、お守りいたしますので、安心してご相談ください。</p>

                <p>年中無休２４時間体制で各専門の相談員が、お電話やメール・ラインなどで無料相談を承っております。</p>
              </div>
              <div className='greeting_img'>
                <img src='images/greeting_img.png' width='700' height='413' alt='' />
              </div>
            </div>
          </div>
        </section>

        <section id='plan'>
          <div className='main-content'>
            <h2>中央リサーチ岡山なら</h2>
            <h3>お客様に合った無駄のないプランを提案し、動かぬ証拠を取ります。</h3>
            <div className='plan_box'>
              <div className='plan_box_inner'>
                <img src='images/plan_txt01.png' className='pc' width={894} height={162} style={{ position: 'relative', zIndex: 1 }} alt='' />
                <img src='images/plan_txt01_smp.png' className='tub' style={{ position: 'relative', zIndex: 1 }} alt='' />
              </div>
            </div>
            <p className='center mb80 '>
              <img src='images/success_txt01.png' width={600} alt='' />
            </p>
            <div className='plan_naiyo'>
              <div className='plan_naiyo_in'>
                <div>
                  <img src='images/plan_icon03.png' width={135} height={135} alt='' />
                  <h4>確実な証拠</h4>
                </div>
              </div>
              <div className='plan_naiyo_in'>
                <div>
                  <img src='images/plan_icon02.png' width={135} height={135} alt='' />
                  <h4>映像と記録</h4>
                </div>
              </div>
              <div className='plan_naiyo_in'>
                <div>
                  <img src='images/plan_icon01.png' width={135} height={135} alt='' />
                  <h4>裁判用報告書</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='price_plan'>
          <div className='main-content'>
            <h2>浮気調査安心プラン</h2>
            <div className='price_list'>
              <div className='price_list_in'>
                <h3>成功報酬プラン</h3>
                <h4>不貞の証拠が取れなかったら調査料金0円</h4>
                <p className='price_sub_title'>事例</p>
                <ul>
                  <li>コンビニ立ち寄り帰宅しただけだった。</li>
                  <li>ゴルフに行っただけだった。</li>
                  <li>友達と食事しただけだった。</li>
                </ul>
              </div>
              <div className='price_list_in'>
                <h3>時間制プラン</h3>
                <h4>行動パターンが読める方におすすめ</h4>
                <p className='price_sub_title'>ピンポイント調査！</p>
                <ul>
                  <li>対象者の行動を分単位で記録し、証拠をとる調査です。</li>
                  <li>5,500円/1時間（調査員1名）ごと。</li>
                </ul>
              </div>
              <div className='price_list_in'>
                <h3>お任せプラン</h3>
                <h4>行動パターンが読めない方におすすめ</h4>
                <p className='price_sub_title'>すべてお任せ！</p>
                <ul>
                  <li>プロの主観にお任せ。</li>
                  <li>当社がお客様にあったプランをご提案。</li>
                  <li>追加料金不要で安心、後から料金は一切かかりません。</li>
                </ul>
              </div>
            </div>
            <div className='table-plan'>
              <p>
                <img src='images/price_list.png' width={1200} height={545} alt='' />
              </p>
            </div>
          </div>
        </section>

        <section id='reason'>
          <div className='main-content'>
            <h2>当探偵社が選ばれる理由</h2>
            <ReasonParts />
          </div>
        </section>

        <section id='survey'>
          <div className='main-content'>
            <h2>浮気調査 実例</h2>
            <h3>当社の撮影技術ならここまで拡大して撮影することが出来ます。</h3>
            <div className='survey_box01'>
              <div className='survey_l'>
                <img src='images/survey_img01.jpg' width={640} height={480} alt='' />
              </div>
              <div className='survey_r'>
                <img src='images/survey_img02.jpg' width={640} height={480} alt='' />
              </div>
            </div>
            <h4>
              「夫の飲み会が増えた」
              <br className='smp' />
              30代専業主婦の依頼による調査
            </h4>

            <div className='survey_sample'>
              <TopSlide />
            </div>
          </div>
        </section>

        <section id='voice'>
          <div className='main-content'>
            <h2>ご依頼者様の声</h2>
            <div className='voice_box'>
              <div className='voice_img'>
                <img src='images/voice_icon03.png' width={117} height={150} alt='' />
              </div>
              <div className='voice_txt'>
                <h3>30台女性</h3>
                <p>即日調査に対応していただきました。調査を進めていく中で、少しずつ事実が分かり、心が落ちついてきました。早めに事実を確認することで、自分が後で後悔する行動をせずに、解決をすることができました。ありがとうございました。</p>
              </div>
            </div>
            <div className='voice_box'>
              <div className='voice_img'>
                <img src='images/voice_icon01.png' width={96} height={148} alt='' />
              </div>
              <div className='voice_txt'>
                <h3>40台女性</h3>
                <p>事前にSNSで相談して見積もりお願いしました。相談室に出向けないので自宅に来てもらい契約。後から追加の費用などは特に発生していません。調査の状況はラインでやりとりをしながら報告を受け調査も臨機応変に対応して頂けました。</p>
              </div>
            </div>
            <div className='voice_box'>
              <div className='voice_img'>
                <img src='images/voice_icon02.png' width={118} height={150} alt='' />
              </div>
              <div className='voice_txt'>
                <h3>30代男性</h3>
                <p>対応は丁寧で、親身になって話を聞いてくれた。浮気調査の20時間プランも無駄な調査時間を少なくし、費用が無駄にかからないように調整してくれました。</p>
              </div>
            </div>
          </div>
        </section>
        <section id='faq'>
          <div className='main-content'>
            <h2>よくある質問</h2>
            <dl className='faq_list'>
              <dt>料金相場について：探偵に調査を依頼したいのですが、調査料金の相場はどの程度ですか？</dt>
              <dd>
                調査の内容に対しての労働の対価となりますので、内容に応じたお見積もりをさせていただきます。当社は適正な価格設定を心がけています。
                <br />
                また、不当な追加料金などはいただきません。お客様のご相談に合わせた調査方法と料金でご対応させていただきます。
              </dd>
              <dt>浮気調査の成功率について：探偵の浮気調査の成功率はどれくらいなのでしょうか？</dt>
              <dd>
                事案によっては、調査にある程度の日数が必要となる場合がございますが、当社の探偵調査の技術は、尾行に必要な機動力や、
                <br className='pc' />
                証拠を撮影する確かな専門技術を備えております。いくら警戒が厳しい状況でも、いただいたほとんどの案件で成果を出せると思われます。
              </dd>
              <dt>対象者の警戒心について：浮気調査を依頼する前に、夫に警戒されたかもしれません。調査は可能でしょうか？</dt>
              <dd>浮気に対する少しくらいの警戒であれば、当社では問題なく気づかれないように調査することは可能です。対象者が疑われていると感じたら、逆に配偶者の携帯の履歴や、SNS、カーナビの履歴などを見る可能性がございます。ご依頼にあたってはくれぐれもご注意ください。</dd>
            </dl>
          </div>
        </section>

        <section id='comment'>
          <div className='main-content'>
            <h2>
              弁護士事務所からの
              <br className='smp' />
              推奨コメント
            </h2>
            <div className='comment_box'>
              <div className='comment_img'>
                <img src='images/comment_img01.jpg' width={365} height={210} alt='' />
              </div>
              <div className='comment_txt'>
                <h3>生田 先生 / 生田法律事務所</h3>
                <p>裁判は証拠に基づく判断であり、「証拠」は判決の結果に大きな影響を与えます。特に、離婚事件に於いては、不貞行為の裏付けとしての調査事務所の調査結果は、多くの裁判事例に於いて動かしがたい証拠として採用中央リサーチとは、20年来の長きに亘り協力してきており信頼関係があります。</p>
              </div>
            </div>
            <div className='comment_box'>
              <div className='comment_img'>
                <img src='images/comment_img02.jpg' width={365} height={210} alt='' />
              </div>
              <div className='comment_txt'>
                <h3>齋藤 先生 / 齋藤法律事務所</h3>
                <p>不貞慰謝料を請求する場合、証拠がよりどころとなります。仮に裁判にならなくても、相手を攻撃するためには十分な証拠を持っていることが前提になります。しかし、不貞の証拠は自分で集めることが難しく、十分な証拠を持っている方はあまり多くないのが実情です。相談者の証拠が不十分な場合、私は何時も「弁護士に依頼する前に探偵事務所に相談した方が良いかも知れません」とアドバイスしています。100%上手くいくとは限りませんが、調査しなければ得られないものも多いと実感しています。私は、中央リサーチの浮気調査を信頼しています。</p>
              </div>
            </div>
            <div className='comment_box'>
              <div className='comment_img'>
                <img src='images/comment_img03.jpg' width={365} height={210} alt='' />
              </div>
              <div className='comment_txt'>
                <h3>長井 先生 / 山下･長井法律事務所</h3>
                <p>夫(妻)の浮気が発覚した場合、浮気相手とすぐにでも別れさせたい、夫(妻)や浮気相手からきちんと慰謝料を払ってもらいたい、と考える方は多くいらっしゃいます。どのようなケースであれ、スムーズに進めていく為には「証拠」が必要となります。専門の調査機関による浮気調査は、浮気問題に悩む方々にとって少なからず力になることでしょう。</p>
              </div>
            </div>
            <div className='comment_box'>
              <div className='comment_img'>
                <img src='images/comment_img04.jpg' width={365} height={210} alt='' />
              </div>
              <div className='comment_txt'>
                <h3>ベリーベスト法律事務所</h3>
                <p>
                  中央リサーチの浮気調査や素行調査など証拠撮りは優秀といっても過言ではなく、
                  <br />
                  難しい事案も解決されていますね。
                  <br />
                  これからも、つらい思いをされている方のお力になれるよう、ご活躍されて下さい。
                </p>
                <p>
                  <a href='https://rikon.vbest.jp/' target='_blank' className='bery_bn'>
                    <img src='/images/berybest_logo.svg' width={240} alt='ベリーベスト法律事務所' />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <FlowParts />

        <TopBlog />

        <ContactParts />

        <section id='accessmap'>
          <div className='main-content'>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.4445822818398!2d133.92075371553173!3d34.668727292437026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554064868fe1b2f%3A0x4bae116cf7733518!2z77yI5qCq77yJ5Lit5aSu44Oq44K144O844OB5bKh5bGx5pSv56S-!5e0!3m2!1sja!2sjp!4v1681143478002!5m2!1sja!2sjp' width='100%' height={400} style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export const Head = () => (
  <>
    <body className='toppage' />
    <Seo />
  </>
);

export default indexPage;
