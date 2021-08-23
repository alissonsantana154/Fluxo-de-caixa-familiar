let family = {
  incomes: [4000, 2000.80 , 500.50],
  expenses: [200.50, 100.90, 100, 500]
}

function sum(array){
  let total = 0;

  for(let value of array) {
    total += value
  }


  return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum (family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceTexte = "Negativo"
    if (itsOk){
      balanceTexte = "Positivo"
    }

    console.log(`Seu saldo é ${balanceTexte}: ${total.toFixed(2)}R$` )

}

calculateBalance()