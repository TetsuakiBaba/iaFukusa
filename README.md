
# iaFukusaAssignment

副査割当に関して，教員偏りが生じないように，指導学生数をベースにスコアリングを行っています．この計算がエクセル上だと結構面倒なため，業務改善のために作成しました．インダストリアルアート学科ではM1学生の最初に副査割当を行う際，M2,D1,D2,D3における主査，副査の担当状況をスコア化し，新規に割り当てるべき担当数の目安を算出した後に，M1の副査割当を行っています．このプロジェクトでは主に2つの処理プロセスが含まれます．

1. M1（主査のみ），M2,D1,D2,D3 の名簿データから各教員がM1の副査において，担当すべき人数目安を算出する
2. M1の副査は希望割当1名，ランダム割当1名となるため，希望割当を入力した後は，ランダムで教員を割り当てる

この実装を目指していきます．


# How to use
- https://tetsuakibaba.github.io/iaFukusa/public/

# Requirements
- read-excel-file：https://www.npmjs.com/package/read-excel-file
- p5.js（別に使わなくていいんですが，慣れてるので利用しているだけです）

# Compatibility
- macOS(Safari, Firefox, Chrome)
- Windows(Edge, Chrome, Firefox)
- Linux(Chrome, Firefox)

# Contributor（募集中）