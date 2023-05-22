import { createBoard } from '@wixc3/react-board';
import { CardBalance } from '../../../components/card-balance/card-balance';

export default createBoard({
    name: 'CardBalance',
    Board: () => (
        <CardBalance
            ccinfo={{
                logo: 'GDG',
                cardHolderName: 'Jane Smith',
                cardNumberEndsWith: '1245',
                cardNumberStartsWith: '1223',
                expireDateMonth: '12',
                expireDateYear: '12',
            }}
            finances={{
                balanceSum: 456,
                expenses: 333,
                income: 224,
            }}
        />
    ),
});
