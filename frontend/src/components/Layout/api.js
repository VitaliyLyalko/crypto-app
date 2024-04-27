import {
  cryptoAssets,
  cryptoData,
} from "/src/data.js";

export function fakefetchCrypto() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(cryptoData)
		}, 1000)
	})
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1000);
  });
}