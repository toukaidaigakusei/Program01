//************************************************** 
//事前定義
let Toku = []; //各党の得票数を格納する
let D = []; //得票数の計算後の結果を格納する
let Get = []; //獲得議席数を格納する
let Max = 0; //暫定的な最大値を格納する
let Ind = 0; //Maxのインデックスを取得する

//********************************************************************************************** 
function Seitou(){
    let Text = document.getElementById('text1');
    let S = Text.value;
    if(Search(S) == -1){ //自然数以外で入力されたときは
        alert("値は1以上の自然数で入力してください！！");
        S = ""; //アラートで注意して値を空にする
    }
    else{
        console.log("政党数は" + S + "党です");
    }
}
    
function Tokuhyou(){
    let Text = document.getElementById('text1');
    let S = Text.value;
    let T = 0; //得票数を格納する
    for(let i = 0; i < S; i++){
        T = prompt(i+1 + "党目の得票数を入力してください");
        if(Search(T) == -1){ //同上
            alert("値は1以上の自然数で入力してください！！");
            i = i - 1; //もう一度同じ党で実行する
        }
        else{
            Toku[i] = T; //正常な数値時のみ配列に格納する
        }
    }
    console.log(Toku);
}

function Giseki(){
    let Text = document.getElementById('text2');
    let H = Text.value;
    if(Search(H) == -1){ //自然数以外で入力されたときは
        alert("値は1以上の自然数で入力してください！！");
        H = ""; //アラートで注意して値を空にする
    }
    else{
        console.log("総議席数は" + H + "議席です");
    }
}

function Search(x){ //1以上の自然数が入力されているかを調べる
    let a = x.search(/^([1-9]\d*)$/);
    return a;
}

function Donto(){
    let st = document.getElementById('text1').value;
    let HH = document.getElementById('text2').value;
    for(let i = 0; i < st; i++){
        Get[i] = 0;
    }

    for(let i = 0; i < HH; i++){
        for(let j = 0; j < Toku.length; j++){
            D[j] = Toku[j] / (Get[j] + 1);
        }
        Max = Math.max.apply(null,D);
        //console.log(Max) //確認用
        Ind = D.indexOf(Max);
        //console.log(Ind); //確認用
        Get[Ind] = Get[Ind] + 1;
    }
    console.log(Get);
    
    for(let k = 0; k < Toku.length; k++){ //結果表示
        let add = document.createElement("p");
        add.textContent = (k+1) + "党目の獲得議席は" + Get[k] + "議席です！";
        let base = document.getElementById('kekka');
        document.body.insertBefore(add, base);  //"kekka"idの後ろに追加していく
    }
}