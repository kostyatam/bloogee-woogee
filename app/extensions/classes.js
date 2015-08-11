module.exports = {
	img: {
      '<': {
      	className: 'img_position_left',
      	alias: 'to left'
      },
      '>': {
      	className:'img_position_right',
      	alias: 'to right'
      }
	},
	aliasesToClasses: function (aliases, type) {
		var aliasesArr = aliases.split(''),
			classes = this[type],
			classesArr = aliasesArr.map(function (aliase) {
			var className = classes[aliase].className;
			if (!className) {
				return ''
			}
			return className;
		});
		return classesArr.join(' ');
	},
	getAliasClassObj: function (type) {
		var obj = this[type]
			keys = Object.keys(obj);

		return keys.map(function (alias) {
			return {
				alias: obj[alias].alias,
				className: obj[alias].className,
			};
		}, obj)
	}

}