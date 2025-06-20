// utils/paystack.ts
export const payWithPaystack = (
  email: string,
  amount: number,
  onSuccess: () => void
) => {
  const handler = (window as any).PaystackPop?.setup({
    key: "pk_test_a5f8051110ce7297354866b5147d92daa25598cd",
    email,
    amount: amount * 100, // kobo
    currency: "NGN",
    callback: function (response: any) {
      console.log("Payment success:", response);
      onSuccess();
    },
    onClose: function () {
      alert("Transaction was not completed, window closed.");
    },
  });

  handler.openIframe();
};
