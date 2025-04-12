//素朴なソートアルゴリズムメニュー
// 挿入ソート
// 要素数 n の数列を昇順にソートする挿入ソートのプログラムを作成してください。
// アルゴリズムが正しく実装されていることを確認するために、各 i についてその処理が終わった時点での配列を出力してください。
// 入力例
// 5
// 4 1 3 5 2

// 出力例
// 1 4 3 5 2
// 1 3 4 5 2
// 1 3 4 5 2
// 1 2 3 4 5

const funcSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let x = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > x) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = x;
  }

  console.log(...arr);
};

const lines = ["5", "4 1 3 5 2"];
const arr = lines[1].split(" ").map(Number);
funcSort(arr);
