import styles from './balance.module.scss';
import classNames from 'classnames';
import { CardsDetail } from '../cards/cards-detail/cards-detail';

export interface Finances {
    balanceSum?: number;
    incomeSum?: number;
    outcomeSum?: number;
}

export interface BalanceProps {
    finances: Finances;
    className?: string;
}

export const Balance = ({
    finances: { balanceSum = 0, incomeSum = 0, outcomeSum = 0 },
    className,
}: BalanceProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <CardsDetail
                amount={balanceSum}
                currency="$"
                label="Balance"
                emphasized={true}
            />
            <CardsDetail
                amount={incomeSum}
                currency="$"
                label="Income"
                trend="positive"
            />
            <CardsDetail
                amount={outcomeSum}
                currency="$"
                label="Expenses"
                trend="negative"
            />
        </div>
    );
};
