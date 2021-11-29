from brownie import SolidityStorage, VyperStorage, NFTMarket, accounts, network


def main():
    # requires brownie account to have been created
    if network.show_active() == 'development':
        # add these accounts to metamask by importing private key
        owner = accounts[0]
        SolidityStorage.deploy({'from': accounts[0]})
        VyperStorage.deploy({'from': accounts[0]})

    elif network.show_active() == 'kovan':
        # add these accounts to metamask by importing private key
        owner = accounts.load("main")
<<<<<<< HEAD
        SolidityStorage.deploy({'from':owner})
        VyperStorage.deploy({'from':owner})

=======
        SolidityStorage.deploy({'from': owner})
        VyperStorage.deploy({'from': owner})
>>>>>>> 7092c6f0b329e67d2a5a90db766efe0cbfdd8902
