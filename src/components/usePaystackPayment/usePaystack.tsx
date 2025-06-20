export const usePaystackPayment = () => {
  const initializePayment = ({
    email,
    amount,
    reference,
    onSuccess,
    onClose,
  }: {
    email: string;
    amount: number;
    reference: string;
    onSuccess: (response: any) => void;
    onClose: () => void;
  }) => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;

    script.onload = () => {
      const handler = (window as any).PaystackPop.setup({
        key: "pk_test_a5f8051110ce7297354866b5147d92daa25598cd",
        email,
        amount: amount * 100, // in kobo
        ref: reference,
        callback: (response: any) => {
          onSuccess(response);
        },
        onClose: () => {
          onClose();
        },
      });

      handler.openIframe();
    };

    document.body.appendChild(script);
  };

  return { initializePayment };
};
