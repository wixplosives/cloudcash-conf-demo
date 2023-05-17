import classNames from 'classnames';
import styles from './credit-card.module.scss';

export interface CCInfo {
    cardNumberStartsWith: string;
    cardNumberEndsWith: string;
    cardHolderName: string;
    expireDateMonth: string;
    expireDateYear: string;
    logo?: string;
}

export interface CreditCardProps {
    ccInfo: CCInfo;
    className?: string;
}

export const CreditCard = ({
    ccInfo: {
        cardNumberStartsWith,
        cardNumberEndsWith,
        cardHolderName,
        expireDateMonth,
        expireDateYear,
        logo,
    },
    className,
}: CreditCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.cardLogo}>{logo ? logo : 'Cloudcash'}</div>
            <div
                className={styles.cardNumber}
            >{`${cardNumberStartsWith} •••• •••• ${cardNumberEndsWith}`}</div>
            <div className={styles.cardHolder}>
                <div className={styles.cardFooterItemLabel}>Card holder</div>
                <div className={styles.cardFooterItemValue}>
                    {cardHolderName}
                </div>
            </div>
            <div className={styles.expireDate}>
                <div className={styles.cardFooterItemLabel}>Expire date</div>
                <div className={styles.cardFooterItemValue}>
                    {expireDateMonth}/{expireDateYear}
                </div>
            </div>
        </div>
    );
};
