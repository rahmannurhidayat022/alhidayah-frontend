export const normalImageValidate = (values) => {
	const extAccepted = ['image/png', 'image/jpeg', 'image/jpg'];
	let isValid = false;
	for (let value of values) {
		isValid = extAccepted.includes(value.type);
	}
	return isValid || 'Ekstensi harus jpg, jpeg atau png';
};

export const sizeLimit = (values) => {
	const SIZE = 1000000;
	let isValid = false;
	for (let value of values) {
		isValid = value.size <= SIZE;
	}
	return isValid || 'Max size 1 Mb';
};

export const minLengthPhoneNumber = (value) => {
	return value.toString().length >= 10 || 'Min 11 digit nomor ponsel';
};

export const maxLengthPhoneNumber = (value) => {
	return value.toString().length <= 12 || 'Max 13 digit nomor ponsel';
};
