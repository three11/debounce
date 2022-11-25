import test, { Test } from 'tape';

import { debounce } from '../dist/debounce';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const DELAY = 100;

test('It is called repeatedly', async (t: Test) => {
	let callCount = 0;

	const debounced = debounce(() => {
		++callCount;

		console.log(callCount);
	}, DELAY);

	for (let i = 4; i--; ) {
		debounced();
	}

	await wait(DELAY);

	t.equal(callCount, 4);
});

test('It is called repeatedly exactly after the delay', async (t: Test) => {
	let callCount = 0;

	const times = 3;

	const debounced = debounce(() => {
		++callCount;

		console.log(callCount);
	}, DELAY);

	for (let i = times; i--; ) {
		debounced();

		await wait(DELAY);
	}

	await wait(DELAY * times);

	t.equal(callCount, 3);
});

test('It is called repeatedly at an interval small than the delay', async (t: Test) => {
	let callCount = 0;

	const times = 6;

	const debounced = debounce(() => {
		++callCount;

		console.log(callCount);
	}, DELAY);

	for (let i = times; i--; ) {
		debounced();

		await wait(DELAY / 2);
	}

	await wait(DELAY * times);

	t.equal(callCount, 6);
});
