module.exports = {
	addition: function(x,y)
	{
		let z = x+y;
		if (z>10) {
			return z+' is Greater than 10';
		}else{
			return z+' is Smaller than 10';
		}
	},
	address : "Elenga, Tangail, Bangladesh",
	namota : function (ghor)
	{
		let data = '';
		let string = '';
		for (var i = 1; i <= 10; i++) {

			data += ghor+" X "+i+" = "+ghor * i+"\n";
		}

		return data;
	}
}