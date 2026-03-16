class InsufficientBalanceError(Exception):
    def __init__(self, balance, amount):
        message = f"Insufficient balance: ${balance}. Cannot withdraw ${amount}."
        super().__init__(message)

class InvalidTransactionError(Exception):
    def __init__(self, message):
        super().__init__(message)

class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise InvalidTransactionError("Deposit amount must be positive.")
        self.balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            raise InvalidTransactionError("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise InsufficientBalanceError(self.balance, amount)
        self.balance -= amount

    def get_balance(self):
        return self.balance

# Example usage
try:
    account = BankAccount(1000)
    account.withdraw(500)
    print(f"Balance: ${account.get_balance()}")
    account.withdraw(600)  # This will raise InsufficientBalanceError
except InsufficientBalanceError as e:
    print(e)
except InvalidTransactionError as e:
    print(e)
