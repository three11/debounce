export const debounce = function <T extends (...args: unknown[]) => void>(callback: T, wait = 15, immediate = false) {
	let timeout: ReturnType<typeof setTimeout> | null;

	return function <C>(this: C, ...args: Parameters<typeof callback>) {
		const context = this;

		if (immediate && !timeout) {
			callback.apply(context, args);
		}

		if (typeof timeout === 'number') {
			clearTimeout(timeout);
		}

		timeout = setTimeout(() => {
			timeout = null;

			if (!immediate) {
				callback.apply(context, args);
			}
		}, wait);
	};
};

export default debounce;
