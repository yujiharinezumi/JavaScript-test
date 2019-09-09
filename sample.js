

$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    return subject_points
  };



   function average(){
      let subject_points = score_indicate()
    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let average = subject_points[0];
    average = average + subject_points[1];
    average = average + subject_points[2];
    average = average + subject_points[3];
    average = average + subject_points[4];
    average = average / subject_points.length;
    $('#average_indicate').text(average);

    return average
  };

  function get_achievement(){
  let average_score  = average();
    let answer;
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
    if (average_score >= 80){
      answer = "A";
      // return "A";

    }else if(average_score >= 60){
      answer ="B";
      // return "B";
    }else if(average_score >= 40){
      answer = "C"
      // return "C";
    }else{
      answer = "D";
      // return "D";
    }
    $('#evaluation').text(answer);

    return answer;
  }


  function get_pass_or_failure(){
      let subjects_points =
                      [Number($('#national_language').val()),
                       Number($('#english').val()),
                       Number($('#mathematics').val()),
                       Number($('#science').val()),
                       Number($('#society').val())
                       ];



    // let subject_points = [Number($('#national_language').val()),
    //                       Number($('#english').val()),
    //                       Number($('#mathematics').val()),
    //                       Number($('#science').val()),
    //                       Number($('#society').val())
    //                       ];

    // let pass;



    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む






    if(subjects_points[0] >= 60 && subjects_points[1] >= 60 && subjects_points[2] >= 60 && subjects_points[3] && subjects_points[4] >= 60 ){

          let pass;
          pass = "合格";
          $('#judge').text(pass);
    }else{
      pass = "不合格";
      $('#judge').text(pass);
    }
    return  pass;
  };


  function judgement(){

    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();


    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
      get_achievement();

  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();

});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとJqueryの両方の記述を使用しているが、どちらかに統一しても構わない
});




//① $(document).ready(function(){ ~ }); 、DOMがすべて読み込まれた時に引数に指定したfunctionを実行する
//② $('#btn-evaluation').click(function() { ~ }); ランクボタンをクリックした時に、get_achievementファンクションでの結果を表示させる・
//③ $('#national_language, #english, #mathematics, #science, #society').change(function() { ~ });   #national_language, #english, #mathematics, #science, #societyの値を引数functionに変更している
//④ $('#national_language').val() 国語のvalueを取得する
//⑤ Number() ハッシュの中にハッシュを作るパターンで Numberというハッシュの中にsubjectとvalが入ってる
//⑥ $("#sum_indicate").text(sum); HTMLの#sum_indicateの場所に、sumの値を.textで表示させる。
//⑦ .append appendは要素を追加するもので、今回はlabelタグを追加している
