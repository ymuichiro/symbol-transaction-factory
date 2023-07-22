export interface SymbolTransferTransaction {
  recipientAddress: string;
  amount: bigint;
  message?: string;
  mosaics?: {
    mosaicId: bigint;
    amount: bigint;
  }[];
}

export class SymbolTransactionFactory {
  static createTransferTransaction(props: SymbolTransactionFactory) {
    return {
      type: 'transfer_transaction_v1',
      ...props,
    };
  }
}
