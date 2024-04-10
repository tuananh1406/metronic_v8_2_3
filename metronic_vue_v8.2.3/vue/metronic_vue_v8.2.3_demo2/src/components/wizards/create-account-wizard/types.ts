interface IStep1 {
  accountType: string;
}

interface IStep2 {
  accountTeamSize: string;
  accountName: string;
  accountPlan: string;
}

interface IStep3 {
  businessName: string;
  businessDescriptor: string;
  businessType: string;
  businessDescription: string;
  businessEmail: string;
}

interface IStep4 {
  nameOnCard: string;
  cardNumber: string;
  cardExpiryMonth: string;
  cardExpiryYear: string;
  cardCvv: string;
  saveCard: string;
}

interface ICreateAccount extends IStep1, IStep2, IStep3, IStep4 {}

export type { IStep1, IStep2, IStep3, IStep4, ICreateAccount };
