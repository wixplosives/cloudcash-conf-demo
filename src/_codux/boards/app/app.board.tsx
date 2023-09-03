import { createBoard } from '@wixc3/react-board';
import App from '../../../app';
import { userInfo } from './user-mocks';
export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1124,
        windowHeight: 685,
        canvasWidth: 1690,
    },
});
