/* eslint no-param-reassign: ["error", { "props": false }] */

import imsize_plugin from 'markdown-it-imsize';

export default {
	install(Vue) {
		const mdPromise = new Promise(((resolve, _reject) => {
			import('markdown-it').then(({ default: MD }) => {
				import('@neilsustc/markdown-it-katex').then(({ default: mk }) => {
					const md = MD({
						typographer: true,
					}).use(imsize_plugin);
					md.use(mk);
					resolve(md);
				});
			});
		}));
		Vue.directive('mixrend', (el, binding) => {
			if (binding.value.expression) {
				el.innerHTML = binding.value.expression;
			} else {
				el.innerHTML = binding.value;
			}
			mdPromise.then((md) => {
				if (binding.value.expression) {
					el.innerHTML = md.render(binding.value.expression);
				} else {
					el.innerHTML = md.render(binding.value);
				}
			});
		});
	},
};
