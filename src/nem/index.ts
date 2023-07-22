export interface NemTransferTransaction {
  recipientAddress: string;
  amount: bigint;
  message?: {
    messageType: 'plain';
    message: string;
  };
  mosaics?: {
    mosaic: {
      mosaicId: {
        namespaceId: { name: string };
        name: string;
      };
      amount: bigint;
    };
  }[];
}

export class NemTransactionFactory {
  static createTransferTransaction(props: NemTransactionFactory) {
    return {
      type: 'transfer_transaction_v2',
      ...props,
    };
  }
}
