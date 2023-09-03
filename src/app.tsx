import { DashboardLayout } from './components/dashboard-layout/dashboard-layout';
import { Goals } from './components/goals/goals';
import { OutcomeStatistics } from './components/outcome-statistics/outcome-statistics';
import { Section } from './components/section/section';
import { TransactionHistory } from './components/transaction-history/transaction-history';
import { PageHeader } from './components/page-header/page-header';
import { NewTransaction } from './components/new-transaction/new-transaction';
import { GetLoanBanner } from './components/get-loan-banner/get-loan-banner';
import styles from './app.module.scss';
import { Balance, Finances } from './components/balance/balance';
import { TransactionHistoryItemProps } from './components/transaction-history/transcation-history-item/transcation-history-item';
import { CCInfo } from './components/credit-card/credit-card';
import { userInfo } from './_codux/boards/app/user-mocks';

function App() {
    return (
        <div className={styles.root}>
            <DashboardLayout>
                <Section>
                    <Section.Content>
                        <PageHeader className={styles.header}>
                            <PageHeader.Title>Weekly Sumup</PageHeader.Title>
                            <PageHeader.Subtitle>
                                Get summary of your weekly online transactions
                                here
                            </PageHeader.Subtitle>
                        </PageHeader>
                    </Section.Content>
                </Section>

                <Section>
                    <Section.Content className={styles.dashboardGrid}>
                        <div className={styles.mainColumn}>
                            <Balance
                                finances={{
                                    balanceSum: 56263,
                                    income: 3463,
                                    expenses: 734,
                                }}
                            />
                        </div>
                        <div className={styles.mainColumn}>
                            <TransactionHistory
                                transactions={userInfo.transactions}
                            />
                        </div>
                        <div className={styles.secondaryColumn}>
                            <Goals />
                            <OutcomeStatistics />
                            <div className={styles.userActionsSection}>
                                <NewTransaction />
                                <GetLoanBanner />
                            </div>
                        </div>
                    </Section.Content>
                </Section>
            </DashboardLayout>
        </div>
    );
}

export default App;
