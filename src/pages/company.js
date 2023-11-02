import React from 'react';

import 'modern-css-reset';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const company = () => {
  return (
    <>
      <Layout id='company' title='会社概要'>
        <div className='flex-wrap'>
          <div className='txt_box'>
            <h3 className='subtitle'>全力であなたの幸せを勝ち取るサポートをいたします</h3>
            <p>地元岡山の調査はもちろんのこと、日本全国、海外でも最先端の調査技術をもって対応いたします。</p>
            <p>
              難易度の高い調査も積極的に承っておりますので、ご安心ください。
              <br />
              些細なお悩みでも親身になって対応いたしますので、まずはご相談いただけたらと思います。
            </p>
          </div>
          <div className='img_box'>
            <img src='/images/company_01.jpg' alt='' />
          </div>
        </div>

        <table className='legal_notice'>
          <tbody>
            <tr>
              <th>屋号</th>
              <td>総合探偵社中央リサーチ岡山</td>
            </tr>
            <tr>
              <th>商号</th>
              <td>株式会社　中央リサーチ</td>
            </tr>
            <tr>
              <th>創業</th>
              <td>昭和40年4月1日</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>1,000万円</td>
            </tr>
            <tr>
              <th>代表取締役</th>
              <td>樋之本 浩章</td>
            </tr>
            <tr>
              <th>取引先</th>
              <td>個人及び法人(上場企業･弁護士事務所･金融機関等)</td>
            </tr>
            <tr>
              <th>探偵業届出番号</th>
              <td>
                広島県公安委員会探偵業届出証明書番号 第73070084号
                <br />
                山口県公安委員会探偵業届出証明書番号 第74070021号
                <br />
                岡山県公安委員会探偵業届出証明書番号 第72100026号
                <br />
                島根県公安委員会探偵業届出証明書番号 第71140001号
                <br />
                愛媛県公安委員会探偵業届出証明書番号 第82120013号
              </td>
            </tr>
            <tr>
              <th>加盟団体</th>
              <td>
                内閣総理大臣（国家公安委員会）認可　全国調査業協同組合組合員第3266号
                <br />
                広島商工会議所　正会員　第9700302号
                <br />
                NTTユーザー協会
                <br />
                こども未来づくり・ひろしま応援隊
                <br />
                公益財団法人ひろしまこども夢財団　加盟店
              </td>
            </tr>
            <tr>
              <th>取引金融機関</th>
              <td>東京三菱UFJ銀行、広島銀行、郵便局</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>
                探偵業務（不審・不安・疑問などの究明解決）
                <br />
                探偵育成の為の教育活動
              </td>
            </tr>
            <tr>
              <th>経緯</th>
              <td>
                昭和40年04月　中央興信所 広島本社 創業。
                <br />
                昭和57年04月　中央興信所山口支社 開設。
                <br />
                昭和63年04月　中央興信所引き継ぎ、併設中央リサーチ創業。(同時代表者変更)
                <br />
                昭和63年04月　広島商工会議所入会。
                <br />
                平成02年04月　中央リサーチ岡山支社 開設。
                <br />
                平成07年05月　ホームテレビ取材協力。
                <br />
                平成08年04月　広島テレビ取材協力。
                <br />
                平成10年06月　全国探偵調査業情報調査振興会より表彰。
                <br />
                平成10年10月　社団法人 日本調査業協会加盟。
                <br />
                平成12年08月　山口放送ラジオ出演。
                <br />
                平成14年03月　島根支社 開設。
                <br />
                平成15年12月　法人成りにて株式会社中央リサーチ設立。
                <br />
                平成19年06月　探偵業法施行に伴い 国家公安委員会へ届出を行う。
                <br />
                平成20年04月　広島商工会議所より併設中央リサーチ20周年表彰。
                <br />
                平成20年05月　社団法人日本調査業協会の単位協会中国ブロック調査業協会
                <br />
                <span className='dsp_hp'>&nbsp;　　　　　　　</span>
                理事・副会長就任（広島支部長）
                <br />
                平成21年08月　内閣総理大臣認可全国調査業協同組合へ加盟。
                <br />
                平成23年07月　中央リサーチ愛媛支社 開設。
                <br />
                平成25年03月　広島本社にて探偵業教育研修会の実施。
                <br />
                平成28年04月　広島県探偵業協会の会長に就任。
                <br />
                平成30年04月　広島商工会議所より併設中央リサーチ３０周年表彰。
                <br />
                令和元 年05月　山口県探偵業協会の会長に就任。
                <br />
                令和03年04月　岡山県探偵業協会の副会長に就任。
                <br />
                令和04年03月　社名を商標登録致しました。
              </td>
            </tr>
            <tr>
              <th>活動エリア</th>
              <td>
                中国（広島・岡山・山口・鳥取・島根）
                <br />
                四国（愛媛・香川・高知・徳島）
                <br />
                九州（福岡・長崎・佐賀・熊本・大分・宮崎・鹿児島）
                <br />
                沖縄
                <br />
                ※その他、海外での調査も可能です。
              </td>
            </tr>
            <tr>
              <th id='office' rowSpan={8}>
                所在地
              </th>
              <td>
                【岡　山】
                <br />
                <a href='https://detective-okayama.biz/' target='_blank' rel='noopener noreferrer'>
                  総合探偵社中央リサーチ岡山
                </a>
                <br />
                岡山県岡山市北区富田町1丁目1-1富士野ビル2階
                <br />
                TEL：086-231-6661(代) / MAIL：okayama@chuou.biz
              </td>
            </tr>
            <tr>
              <td>
                【広　島】
                <br />
                <a href='http://www.chuou.biz/' target='_blank' rel='noopener noreferrer'>
                  総合探偵社中央リサーチ広島
                </a>
                <br />
                広島県広島市中区上幟町2-45 今田ビル2F
                <br />
                TEL：082-211-1600(代) / MAIL：info@chuou.biz
              </td>
            </tr>
            <tr>
              <td>
                【山　口】
                <br />
                <a href='http://www.chuou.biz/yamaguchi/' target='_blank' rel='noopener noreferrer'>
                  総合探偵社中央リサーチ山口
                </a>
                <br />
                山口県周南市平和通2丁目31三真樹ビル2階
                <br />
                TEL：0834-22-7513(代) / MAIL：yamaguchi@chuou.biz
              </td>
            </tr>
            <tr>
              <td>
                【島　根】
                <br />
                <a href='https://www.chuou.biz/shimane/' target='_blank' rel='noopener noreferrer'>
                  総合探偵社中央リサーチ島根
                </a>
                <br />
                島根県松江市津田町305番 ツダマチビル1階
                <br />
                TEL：0852-67-6573(代) / MAIL：shimane@chuou.biz
              </td>
            </tr>
            <tr>
              <td>
                【愛　媛】
                <br />
                <a href='http://www.chuou.biz/ehime/' target='_blank' rel='noopener noreferrer'>
                  総合探偵社中央リサーチ愛媛
                </a>
                <br />
                愛媛県松山市三番町7-7-1 村上ビル2階
                <br />
                TEL：089-931-3800(代) / MAIL：ehime@chuou.biz
              </td>
            </tr>
          </tbody>
        </table>
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <body className='subpage' />
    <Seo />
  </>
);

export default company;
