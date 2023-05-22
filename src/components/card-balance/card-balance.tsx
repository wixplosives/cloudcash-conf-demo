import styles from './card-balance.module.scss';
import classNames from 'classnames';
import { CreditCard, CCInfo } from '../credit-card/credit-card';
import { Balance, Finances } from '../balance/balance';

export interface CardBalanceProps {
    className?: string;
    ccinfo: CCInfo;
    finances: Finances;
}

export const CardBalance = ({
    className,
    ccinfo,
    finances,
}: CardBalanceProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h4>Card</h4>
            <div className={styles.cardAndBalance}>
                <CreditCard ccInfo={ccinfo} />
                <Balance finances={finances} />
            </div>
        </div>
    );
};
