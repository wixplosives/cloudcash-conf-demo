import Card from '../card/card';
import { TransactionHistoryItem, TransactionHistoryItemProps } from './transcation-history-item/transcation-history-item';
import styles from './transaction-history.module.scss';

export const TransactionHistory = ({transactions}: {transactions: TransactionHistoryItemProps[]}) => {
    return (
        <Card>
            <Card.Title>Transaction History</Card.Title>
            <Card.Content>
                <div className={styles.legend}>
                    <span className={styles.receiver}>Receiver</span>
                    <span className={styles.type}>Type</span>
                    <span className={styles.date}>Date</span>
                    <span className={styles.amount}>Amount</span>
                </div>
                <ul className={styles.transactionList}>
                    {transactions.map(
                        (
                            {
                                receiver,
                                type,
                                typeLabel,
                                date,
                                amount,
                                currency,
                            },
                            index
                        ) => (
                            <TransactionHistoryItem
                                key={index}
                                receiver={receiver}
                                type={type}
                                typeLabel={typeLabel}
                                date={date}
                                amount={amount}
                                currency={currency}
                            />
                        )
                    )}
                </ul>
            </Card.Content>
        </Card>
    );
};
