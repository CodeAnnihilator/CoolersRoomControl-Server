const crypto = require('crypto');

var CryptData = data => {
	var key = crypto.scryptSync(data, 'salt', 24);

	var cipher = crypto.createCipheriv('aes-192-cbc', key, Buffer.alloc(16, 0));

	return cipher.update('some clear text data', 'utf8', 'hex') + cipher.final('hex');
};

var DecryptData = key => {
	var decipher = crypto.createDecipheriv('aes-192-cbc', key, Buffer.alloc(16, 0));

	let decrypted = '';

	decipher.on('readable', () => {
		while (null !== (chunk = decipher.read())) {
			decrypted += chunk.toString('utf8');
		}
	});
	decipher.on('end', () => {
		console.log(decrypted);
		// Prints: some clear text data
		}
	);

	decipher.write(CryptData('adfaswfasfasfas'), 'hex');
	decipher.end();
};

console.log(DecryptData(CryptData('adfaswfasfasfas')));
