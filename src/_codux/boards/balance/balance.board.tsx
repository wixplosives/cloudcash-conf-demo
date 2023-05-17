import { createBoard } from '@wixc3/react-board';
import { Balance } from '../../../components/balance/balance';

export default createBoard({
    name: 'Balance',
    Board: () => (
        <Balance balanceSum={12000} incomeSum={3400} outcomeSum={420} />
    ),
    environmentProps: {
        windowWidth: 1116,
        canvasWidth: 772,
    },
});
