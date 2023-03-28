const logger = require('./winston');


class MyBigNumber {

    sum(stn1, stn2) {
        stn1 = stn1.split("").reverse().join("");
        stn2 = stn2.split("").reverse().join("");
        let result = "";
        let carry = 0;
        let i = 0;
        while (i < stn1.length || i < stn2.length) {
            const digit1 = parseInt(stn1[i]) || 0;
            const digit2 = parseInt(stn2[i]) || 0;
            const tempSum = digit1 + digit2 + carry;
            result += tempSum % 10;
            carry = Math.floor(tempSum / 10);
            i++;
            logger.info(`lay ${digit1} + ${digit2} duoc ${tempSum} du ${carry}`);
            logger.info(`ket qua tai buoc ${i} la: ${result.split("").reverse().join("")}`);
        }
        if (carry) {
            result += carry;
        }
        logger.info("------------------------")
        logger.info(`ket qua phep cong 2 so ${stn1} va ${stn2} la: ${result.split("").reverse().join("")}`);
    }
}


module.exports = MyBigNumber