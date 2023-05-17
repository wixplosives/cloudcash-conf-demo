import { createBoard } from '@wixc3/react-board';
import App from '../../../app';

export default createBoard({
    name: 'App Mobile',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 500,
        windowHeight: 803,
    },
});
