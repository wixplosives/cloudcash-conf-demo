import { createBoard } from '@wixc3/react-board';
import App from '../../../app';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1124,
        windowHeight: 685,
        canvasWidth: 1690,
    },
});
