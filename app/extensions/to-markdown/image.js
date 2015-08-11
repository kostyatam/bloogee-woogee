module.exports = {
	filter: 'img',
	replacement: function (innerHTML, node) {
		var classes = node.className,
			src = node.src || '',
			alt = node.alt || '';
		return '![' + alt + '](' + src + ')'
	}
}