var sum = 0;
var beforeSum = undefined;

var calStatus = false;
var calMethod = undefined;

function numClick(num) {

	//演算キーが押されている場合
	if (calStatus) {
		//表示内容を格納
		beforeSum = sum;
		sum = num;
		calStatus = false;
		document.getElementById("result").value = sum;
	} else {
		//入力桁数制限
		if (sum.length >= 16) {
			return false;
		}

		//0が頭にこないよう分岐
		if (sum == 0) {
			sum = num;
		} else {
			sum += num;
		}
		document.getElementById("result").value = sum;
	}
}

function numClear() {
	sum = 0;
	document.getElementById("result").value = sum;
}

function calculate(method) {
	//一度計算を実行
	dispSum();

	//演算キーを格納
	calStatus = true;
	calMethod = method;
}

function dispSum() {

	//演算キーを押した後に数字入力された場合
	if (beforeSum != undefined) {
		//演算キーに応じて計算を実行
		switch (calMethod) {
		case "+":
			sum = Number(beforeSum) + Number(sum);
			break;
		case "-":
			sum = Number(beforeSum) - Number(sum);
			break;
		case "*":
			sum = Number(beforeSum) * Number(sum);
			break;
		case "/":
			sum = Number(beforeSum) / Number(sum);
			break;
		}
	}

	//初期化
	calMethod = undefined;
	beforeSum = undefined;

	document.getElementById("result").value = sum;
}