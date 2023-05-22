import { createBoard } from '@wixc3/react-board';
import { Balance } from '../../../components/balance/balance';

export default createBoard({
    name: 'Balance',
    Board: () => (
        <Balance
            finances={{ balanceSum: 12000, income: 3400, expenses: 420 }}
        />
    ),
    environmentProps: {
        windowWidth: 1116,
        canvasWidth: 772,
    },
});
