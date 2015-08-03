var calculator = {
		sum: 0,
		add: function(value) {
      this.sum += value;
    },
    clear: function() {
      this.sum = 0;
    }, 
    equals: function() {
      return this.sum;
    }
}
