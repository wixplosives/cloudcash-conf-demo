import styles from './balance.module.scss';
import classNames from 'classnames';
import { CardsDetail } from '../cards/cards-detail/cards-detail';

export interface Finances {
    balanceSum?: number;
    income?: number;
    expenses?: number;
}

export interface BalanceProps {
    finances: Finances;
    className?: string;
}

export const Balance = ({
    finances: { balanceSum = 0, income = 0, expenses = 0 },
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
                amount={income}
                currency="$"
                label="Income"
                trend="positive"
            />
            <CardsDetail
                amount={expenses}
                currency="$"
                label="Expenses"
                trend="negative"
            />
        </div>
    );
};
