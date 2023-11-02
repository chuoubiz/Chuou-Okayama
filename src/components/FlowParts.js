import React from 'react'

const FlowParts = () => {
  return (
    <>
      <section id="flow">
        <div className="main-content">
          <h2>調査完了までの流れ</h2>
          <div className="stepbar">
            <div className="stepbarwrap">
              <div className="steptitle" id="step01">
                <div className="stepcircle">
                  <span>
                    STEP
                    <br />1
                  </span>
                </div>
                <div className="title">
                  <h4>ご相談（無料）</h4>
                  <p className="bold">
                    24時間年中無休で、携帯・スマートフォンからも可能です。
                  </p>
                  <p>
                    お電話・メール等にてまずはお気軽にご相談ください。
                    <br />
                    ご相談いただいた内容・情報は秘密厳守致します。当社の専門カウンセラーが、お客様の立場に立って親身にお話しを伺い、適正で的確なアドバイスをさせていただきます。
                  </p>
                </div>
                <div className="stepimg">
                  <img
                    src="/images/flow_img01.png"
                    width={180}
                    height={180}
                    alt=""
                  />
                </div>
              </div>
              <span className="stepline" />
            </div>
            <div className="stepbarwrap">
              <div className="steptitle" id="step02">
                <div className="stepcircle">
                  <span>
                    STEP
                    <br />2
                  </span>
                </div>
                <div className="title">
                  <h4>打合せ（無料）</h4>
                  <p className="bold">
                    当社のオフィスには、プライバシーを守る相談室をご用意しております。
                  </p>
                  <p>
                    実際にお会いして詳細の打合せをご希望の場合は、当社までご来社いただくか、こちらからの訪問・お客様宅から最寄の喫茶店などでのお打合せとなります。
                  </p>
                </div>
                <div className="stepimg">
                  <img
                    src="/images/flow_img02.png"
                    width={180}
                    height={180}
                    alt=""
                  />{" "}
                </div>
              </div>
              <span className="stepline" />
            </div>
            <div className="stepbarwrap">
              <div className="steptitle" id="step03">
                <div className="stepcircle">
                  <span>
                    STEP
                    <br />3
                  </span>
                </div>
                <div className="title">
                  <h4>お見積（無料）</h4>
                  <p className="bold">
                    お見積は全国一律料金で、明確なお見積をさせていただきます。
                  </p>
                  <p>
                    お伺いしたご相談内容により、最も適した調査方法をご提案させていただきます。
                    <br />
                    お見積時には調査にかかる内訳など「全ての料金」を明確に分かりやすく提示いたしますので、調査終了後に追加料金等の費用がが発生することはございません。
                  </p>
                </div>
                <div className="stepimg">
                  <img
                    src="/images/flow_img03.png"
                    width={180}
                    height={180}
                    alt=""
                  />{" "}
                </div>
              </div>
              <span className="stepline" />
            </div>
            <div className="stepbarwrap">
              <div className="steptitle" id="step04">
                <div className="stepcircle">
                  <span>
                    STEP
                    <br />4
                  </span>
                </div>
                <div className="title">
                  <h4>ご契約</h4>
                  <p className="bold">
                    ご用意しましたお見積内容にご了承いただいた後に正式なご契約手続をさせていただきます。
                  </p>
                  <p>
                    業法に基づいた重要事項・利用目的確認書・契約書について詳しくご説明させて頂いただいた後に、各書類に署名・ご捺印いただき、ご契約の完了となります。
                  </p>
                </div>
                <div className="stepimg">
                  <img
                    src="/images/flow_img04.png"
                    width={180}
                    height={180}
                    alt=""
                  />
                </div>
              </div>
              <span className="stepline" />
            </div>
            <div className="stepbarwrap">
              <div className="steptitle" id="step05">
                <div className="stepcircle">
                  <span>
                    STEP
                    <br />5
                  </span>
                </div>
                <div className="title">
                  <h4>調査</h4>
                  <p className="bold">
                    正式な調査に入る前に、事前に専門調査員による調査を行います。
                  </p>
                  <p>
                    経験豊富なベテランの調査員による契約内容にもとづいた、迅速かつ正確な調査を行います。
                    <br />
                    調査中は、中間報告などさせていただき、不安がないよう随時進行状況をお伝えいたします。
                  </p>
                </div>
                <div className="stepimg">
                  <img
                    src="/images/flow_img05.png"
                    width={180}
                    height={180}
                    alt=""
                  />
                </div>
              </div>
              <span className="stepline" />
            </div>
            <div className="stepbarwrap">
              <div className="steptitle" id="step06">
                <div className="stepcircle">
                  <span>
                    STEP
                    <br />6
                  </span>
                </div>
                <div className="title">
                  <h4>調査結果のご報告</h4>
                  <p className="bold">
                    調査完了後には、正式な調査報告書を提出いたします。
                  </p>
                  <p>
                    調査結果はその内容に合わせた、写真・書面・ビデオ・音声など、適切な形でご報告させていただきます。
                    <br />
                    こちらの調査報告書は、実際に裁判で必要となった際にもご活用いただける内容をご用意しております。
                  </p>
                </div>
                <div className="stepimg">
                  <img
                    src="/images/flow_img06.png"
                    width={180}
                    height={180}
                    alt=""
                  />
                </div>
              </div>
              <span className="stepline" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FlowParts
