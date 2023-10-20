
class CustomerId {
  constructor() {
    this.businessPayId = 'customerIdInformationString';
    this.cashieringId = 'customerIdInformationString';
    this.plaidLinkId = 'customerIdInformationString';
    this.purchasePayId = 'customerIdInformationString'; 
    this.stripeId = 'customerIdInformationString';
  }

  getCustomerId(arg) {
    switch(arg) {
        case 'businesspay':
            return this.businessPayId;
        case 'cashiering':
            return this.cashieringId;
        case 'plaidlink':
            return this.plaidLinkId;
        case 'purchasepay':
            return this.purchasePayId;
        case 'stripe':
            return this.stripeId;
        default:
            throw new Error('Invalid Argument');
    }
  }
}

export default CustomerId;