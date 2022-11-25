export const debounce = function <T extends (...args: unknown[]) => void>(
	fn: T,
	delay = 15,
	isImmediate = false
): <C>(this: C, ...rest: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout> | null;

	return function <C>(this: C, ...args: Parameters<T>) {
		const context = this;

		if (isImmediate && !timeout) {
			fn.apply(context, args);
		}

		if (typeof timeout === 'number') {
			clearTimeout(timeout);
		}

		timeout = setTimeout(() => {
			timeout = null;

			if (!isImmediate) {
				fn.apply(context, args);
			}
		}, delay);
	};
};

export default debounce;
