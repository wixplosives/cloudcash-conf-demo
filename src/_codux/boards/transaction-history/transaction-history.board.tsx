import { createBoard } from '@wixc3/react-board';
import { TransactionHistory } from '../../../components/transaction-history/transaction-history';

const transactions = [
        {
            receiver: 'Tesco Market',
            type: 'shopping',
            typeLabel: 'Shopping',
            date: 'Jul 14, 2022',
            amount: 1275.6,
            currency: 'USD',
        },
        {
            receiver: 'ElectroMen Market',
            type: 'shopping',
            typeLabel: 'Shopping',
            date: 'Jul 13, 2022',
            amount: 250,
            currency: 'USD',
        },
        {
            receiver: 'Fiorgio Restaurant',
            type: 'food',
            typeLabel: 'Food',
            date: 'Jul 7, 2022',
            amount: 19.5,
            currency: 'USD',
        },
        {
            receiver: 'John Mathew Kayne',
            type: 'sport',
            typeLabel: 'Sport',
            date: 'Jun 30, 2022',
            amount: 75.67,
            currency: 'USD',
        },
        {
            receiver: 'Ann Marlin',
            type: 'shopping',
            typeLabel: 'Shopping',
            date: 'Jun 30, 2022',
            amount: 430,
            currency: 'USD',
        },
    ];

export default createBoard({
    name: 'Transaction History Section',
    Board: () => <TransactionHistory transactions={transactions}/>,
    environmentProps: {
        canvasWidth: 874,
    },
});
