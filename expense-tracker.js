const transactionsList = [{
  amount: 2500,
  description: 'Salary'
},{
  amount: -120,
  description: 'Party'
}];

function modifySaldo() {
  let saldo = 500;
  for (let i = 0; i < transactionsList.length; i++) {
    const expenseObject = transactionsList[i];
    const {amount} = expenseObject//desctructuring taking only the amount
    saldo = saldo + Number(amount);
  }
  document.querySelector('.js-output-saldo').innerHTML = `${saldo}`; 
};

function savingData() {
  localStorage.setItem('transactionsList',JSON.stringify(transactionsList));
}

rendering();

modifySaldo();

function rendering() {
  let transactionsListHTML = '';
  for (let i = 0; i < transactionsList.length; i++) {
    const transactionObject = transactionsList[i];
    const {amount,description} = transactionObject;//desctructuring
    const html = `
        <div class="grid-item">${description}:</div>
        <div class="grid-item">${amount}</div>
        <button class="grid-button" onclick="
        transactionsList.splice(${i},1);
        rendering();
        modifySaldo();
        ">Delete</button>
        `;
    transactionsListHTML += html;
  }
  document.querySelector('.js-output-text').innerHTML = transactionsListHTML;
};

function addTransaction() {
  let amountElement = document.querySelector('.js-transaction');
  const amount = amountElement.value;

  let descriptionElement = document.querySelector('.js-description');
  const description = descriptionElement.value;

  transactionsList.push({
    amount,
    description
  });

  amountElement.value = '';
  descriptionElement.value = '';
  rendering();
  modifySaldo();
};


