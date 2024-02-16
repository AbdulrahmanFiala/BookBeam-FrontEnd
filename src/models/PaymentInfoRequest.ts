class PaymentInfoRequest {
  amount: number;
  currency: string;
  receptEmail: string | undefined;

  constructor(
    amount: number,
    currency: string,
    receptEmail: string | undefined
  ) {
    this.amount = amount;
    this.currency = currency;
    this.receptEmail = receptEmail;
  }
}

export default PaymentInfoRequest;
