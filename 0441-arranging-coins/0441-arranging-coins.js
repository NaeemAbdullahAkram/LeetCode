	var isPossible = function(n, rows){
		let sum = Math.floor((rows * (rows + 1)) / 2);
		return n >= sum;
	}

	var arrangeCoins = function(n) {
	let left = 1;
	let right = n;
	let maxRows = 0;
	while(left <= right){
		let mid = Math.floor((left + right) / 2);
		if(isPossible(n, mid)){
			maxRows = Math.max(maxRows, mid);
			left = mid + 1;
		}else{
			right = mid - 1;
		}
	}
	return maxRows;
};