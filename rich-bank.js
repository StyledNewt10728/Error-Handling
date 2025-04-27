const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

function getAccountById (id)
{
	for (const account of accounts)
	{
		if (account.id === id)
		{
			return account;
		}
	}
}

function createAccount (newAccountId, newAccountOwner)
{
	const accountInfo = getAccountById (newAccountId);

	if (accountInfo){
		throw new Error('Please choose an account ID not currently in use');
	}

	if (newAccountId <= 0 || !Number.isFinite(newAccountId)){
		throw new Error ('Invalid ID number: Please choose a positive finite integer for ID')
	}

	if (typeof newAccountOwner !== 'string' || newAccountOwner.trim() === ''){
		throw new Error ('Invalid Owner Name: Please choose a non-empty string for owner name')
	}
	accounts.push(
		{
			id: newAccountId,
			owner: newAccountOwner,
			balance: 0
		}
	);
}

function depositMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found");
	}
	
	if (!Number.isFinite(amount) || amount <= 0){
		throw new Error('Invalid amount: Please deposite a positive finite amount of money')
	}

	account.balance += amount;
}

function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount) || amount <= 0)
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a finite positive number for witdrawls.");
	}

	if(amount > account.balance){
		throw new Error ('Not enough funds in bank: Please choose new amount');
	}

	account.balance -= amount;
}

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount || !toAccount)
	{
		throw new Error("Source account not found.");
	}

	if (!Number.isFinite(amount) || amount <= 0)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}

	if(amount > fromAccount.balance){
		throw new Error ('Invalid amount to transfter. Plase choose an amount within the account')
	}

	fromAccount.balance -= amount;
	toAccount.balance += amount;
}

/*

----------------------------------------------------
Added how I fixed/found each error after the error
----------------------------------------------------

Hints:

getAccountById("1");    Fixed by using triple instead of double equals

createAccount(1, "Alice");      Use accountInfo and if statement to check for duplicates
createAccount("3", "Charlie");  Use if statement to check for number
createAccount(-3, "Charlie");   Use if statement to check for number greater than 0
createAccount(3, ["Charlie"]);  Use typeof to check for string
createAccount(3, "");           Use typeof to check for non-empty string
createAccount(3, "  ");         Use typeof to check for non-empty string

depositMoney(1, "300");     Use if statement to check for number
depositMoney(1, -300);      Use if statement to check for positive amount
depositMoney(1, 0);         Use if statement to check for amount over zero
depositMoney(1, Infinity);  Use if statement to check for finite amount
depositMoney(4, 100);       Use if to check is account exists

withdrawMoney(1, -100);  Add an || statement to check if over 0
withdrawMoney(1, 0);     Add an || statement or check if over 0
withdrawMoney(1, 501);   Use comparison with if to make sure money is enough 

transferMoney(1, 4, 100); Add an || to include either account
transferMoney(1, 2, 501); Use if statement to check amount vs balance
transferMoney(1, 2, 100); Should work just fine within code
*/
