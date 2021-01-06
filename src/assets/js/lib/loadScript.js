const LoadScript = {
	install: (Vue) => {
		// eslint-disable-next-line no-param-reassign
		Vue.loadScript = Vue.prototype.$loadScript = (src) => {
			return new Promise((resolve, reject) => {
				if (document.querySelector(`script[src="${src}"]`)) {
					resolve()
					return
				}

				const el = document.createElement('script')

				el.async = true
				el.src = src

				el.addEventListener('load', resolve)
				el.addEventListener('error', reject)
				el.addEventListener('abort', reject)

				document.head.appendChild(el)
			})
		}
	}
}

export default LoadScript