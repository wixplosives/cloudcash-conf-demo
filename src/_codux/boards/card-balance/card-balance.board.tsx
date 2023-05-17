import { createBoard } from '@wixc3/react-board';
import { CardBalance } from '../../../components/card-balance/card-balance';

export default createBoard({
    name: 'CardBalance',
    Board: () => <CardBalance />,
    environmentProps: {
        canvasWidth: 685,
        canvasHeight: 326,
        windowWidth: 1150,
    },
});
