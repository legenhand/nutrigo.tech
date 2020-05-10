export default function SplitNumber(number) {
    var	reverse = number.toString().split('').reverse().join(''),
	result 	= reverse.match(/\d{1,3}/g);
    return result.join('.').split('').reverse().join('');
}