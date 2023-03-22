const generateTransactionWithCategory = (transactions, categories) => {
  let response = transactions.map((transaction) => {
    const category = categories.find(
      (categoryElement) => categoryElement.id === transaction.category
    );
    return {
      ...transaction,
      category: category ? category.label : "",
      categoryId: category ? category.id : "",
    };
  });
  return response;
};

const sortTransactionsByCategory = (transactions, category) => {
  const arr = [];
  category.forEach((category) => {
    let filtredPayments = transactions.filter((elem) => {
      return elem.categoryId === category.id;
    });
    if (filtredPayments.length === 0) {
      return null;
    }
    let label = category.label;
    arr.push({ label, filtredPayments });
  });
  return arr;
};

const categoryTransactionsSum = (transactions, categories) => {
  const result = [];

  categories.forEach((category) => {
    let sum = 0;
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.category === category.id
    );
    filteredTransactions.forEach(
      (transaction) => (sum = sum + +transaction.value)
    );

    result.push({ label: category.label, categoryId: category.id, value: sum });
  });

  return result;
};

export {
  sortTransactionsByCategory,
  generateTransactionWithCategory,
  categoryTransactionsSum,
};
