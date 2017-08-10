Ionic Nativeのテストサンプルです。
簡易に書いていますが、Ionic Native Mockなどの使い方の参考になれば幸いです。

## 使い方
```
$npm i
$npm run test
```

## 簡単な解説
テストの設定は[ionic-team/ionic-unit-testing-example](https://github.com/ionic-team/ionic-unit-testing-example)を参考にしています。
既存プロジェクトにテストの設定をしたいという方は[add testing environment](https://github.com/rdlabo/ionic-native-test/commit/f7abb7cd822049218eed682a4077c9ba27e70330)のコミットとか参考にしたらいいと思います。

### Mockの作り方

Ionic Nativeをテストするためには、[Using Native Plugins in the Browser](Using Native Plugins in the Browser)を参考にすればいいです。
簡単にいうと、Native機能呼び出しの時に、用意していたデータに差し替えて返します。例えば、Nativeのカメラの場合、撮影したらBase64の値を返すのですが、それをMockで指定する値でハックする感じです。

本レポジトリでは、[test-config/mocks-ionic.ts](https://github.com/rdlabo/ionic-native-test/blob/master/test-config/mocks-ionic.ts#L82-L88)で定義しています。

### Cameraの呼び出し
[home.ts](https://github.com/rdlabo/ionic-native-test/blob/master/src/pages/home/home.ts#L18-L43)でやっています。
非同期となるため、カメラの呼び出しはPromiseでくくってます。あと、privateであることを意図して、class名は先頭は_ではじめています。

### Cameraのテスト
[home.spec.ts](https://github.com/rdlabo/ionic-native-test/blob/master/src/pages/home/home.spec.ts#L47-L54)でやっています。まぁ、カメラを呼び出して、base64データが返ってくるかをテストしているだけです。
