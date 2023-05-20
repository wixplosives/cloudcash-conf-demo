const finances = {
    balanceSum: 56263,
    incomeSum: 3463,
    outcomeSum: 734,
};

const transactions = [
    {
        receiver: 'Tesco Market',
        type: 'shopping',
        typeLabel: 'Shopping',
        date: 'Jul 14, 2022',
        amount: 1275.6,
        currency: 'USD',
    },
    {
        receiver: 'ElectroMen Market',
        type: 'shopping',
        typeLabel: 'Shopping',
        date: 'Jul 13, 2022',
        amount: 250,
        currency: 'USD',
    },
    {
        receiver: 'Fiorgio Restaurant',
        type: 'food',
        typeLabel: 'Food',
        date: 'Jul 7, 2022',
        amount: 19.5,
        currency: 'USD',
    },
    {
        receiver: 'John Mathew Kayne',
        type: 'sport',
        typeLabel: 'Sport',
        date: 'Jun 30, 2022',
        amount: 75.67,
        currency: 'USD',
    },
    {
        receiver: 'Ann Marlin',
        type: 'shopping',
        typeLabel: 'Shopping',
        date: 'Jun 30, 2022',
        amount: 430,
        currency: 'USD',
    },
];

const ccInfo={
    logo: "Fantasy Co.",
    cardNumberStartsWith: "5789",
    cardNumberEndsWith: "2847",
    cardHolderName: "Mike Smith",
    expireDateMonth: "06",
    expireDateYear: "22",
};

export const userInfo = {
    transactions,
    finances,
    ccInfo
}

