<template>
  <div class="jumbotron vertical-center">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>Account Management Portal</h1>
          <hr />
          <br />
          <!-- Allert Message -->
          <b-alert v-if="showMessage" variant="success" show>{{
            message
          }}</b-alert>
          <!-- b-alert v-if="error" variant="danger" show>{{ error }}</b-alert-->

          <button
            type="button"
            class="btn btn-success btn-sm"
            v-b-modal.account-modal
          >
            Create Account
          </button>
          <br />
          <br />

          <button
            type="button"
            class="btn btn-primary btn-sm"
            v-b-modal.transfer-modal
          >
            Transfer money between personal accounts
          </button>
          <br />
          <br />

          <button
            type="button"
            class="btn btn-secondary btn-sm"
            v-b-modal.transfer-other-modal
          >
            Transfer money to other user account
          </button>
          <br />
          <br />
          <br />

          <h2>Accounts</h2>
          <p>
            You cannot delete your main account. Please contact admin for more
            information or to delete your account.
          </p>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Account Name</th>
                <th scope="col">Account Number</th>
                <th scope="col">Account Balance</th>
                <th scope="col">Account Currency</th>
                <th scope="col">Account Status</th>
                <th scope="col">Country</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(account, index) in accounts" :key="account.id">
                <td>{{ account.name }}</td>
                <td>{{ account.account_number }}</td>
                <td>{{ account.balance }}</td>
                <td>{{ account.currency }}</td>
                <td>
                  <span
                    v-if="account.status == 'Active'"
                    class="badge badge-success"
                  >
                    {{ account.status }}
                  </span>
                  <span v-else class="badge badge-danger">{{
                    account.status
                  }}</span>
                </td>
                <td>{{ account.country }}</td>
                <td>
                  <div class="btn-group" role="group">
                    <button
                      v-if="index !== 0"
                      type="button"
                      class="btn btn-danger btn-sm"
                      @click="deleteAccount(account)"
                    >
                      Delete
                    </button>
                    <span v-else> Undeletable </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <br />
          <br />

          <h2>Transactions</h2>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="account in mainAccount" :key="account.id">
                <td>
                  <div
                    v-for="(transaction, index) in getTransactions(
                      account.transactions
                    )"
                    :key="index"
                  >
                    {{ transaction.from }}
                  </div>
                </td>
                <td>
                  <div
                    v-for="(transaction, index) in getTransactions(
                      account.transactions
                    )"
                    :key="index"
                  >
                    {{ transaction.to }}
                  </div>
                </td>
                <td>
                  <div
                    v-for="(transaction, index) in getTransactions(
                      account.transactions
                    )"
                    :key="index"
                  >
                    {{ transaction.balance }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <br /><br /><br /><br /><br />
          <footer class="">Copyright &copy; All Rights Reserved.</footer>
        </div>
      </div>
      <b-modal
        ref="addAccountModal"
        id="account-modal"
        title="Create a new account"
        hide-backdrop
        hide-footer
      >
        <b-form @submit="onSubmit" class="w-100">
          <b-form-group
            id="form-name-group"
            label="Account Name:"
            label-for="form-name-input"
          >
            <b-form-input
              id="form-name-input"
              type="text"
              v-model="createAccountForm.name"
              :placeholder="`${username}`"
              disabled
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="form-currency-group"
            label="Currency:"
            label-for="form-currency-input"
          >
            <b-form-input
              id="form-currency-input"
              type="text"
              v-model="createAccountForm.currency"
              placeholder="$ or €"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="form-country-group"
            label="Country:"
            label-for="form-country-input"
          >
            <b-form-input
              id="form-country-input"
              type="text"
              v-model="createAccountForm.country"
              placeholder="Country"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="outline-info">Submit</b-button>
        </b-form>
      </b-modal>

      <b-modal
        ref="transferBalanceModal"
        id="transfer-modal"
        title="Transfer money between accounts"
        hide-backdrop
        hide-footer
      >
        <b-form @submit="onSubmitTransferBalance" class="w-100">
          <b-form-group
            id="form-from-group"
            label="Transfer from: (Enter account number)"
            label-for="form-from-input"
          >
            <b-form-input
              id="form-from-input"
              type="text"
              v-model="transferBalanceForm.from"
              placeholder="Account Number"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="form-to-group"
            label="Transfer to: (Enter account number)"
            label-for="form-to-input"
          >
            <b-form-input
              id="form-to-input"
              type="text"
              v-model="transferBalanceForm.to"
              placeholder="Account Number"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="form-amount-group"
            label="Amount:"
            label-for="form-amount-input"
          >
            <b-form-input
              id="form-amount-input"
              type="text"
              v-model="transferBalanceForm.balance"
              placeholder="amount"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="outline-info">Submit</b-button>
        </b-form>
      </b-modal>

      <b-modal
        ref="transferBalanceToOtherUserModal"
        id="transfer-other-modal"
        title="Transfer money to other user account"
        hide-backdrop
        hide-footer
      >
        <b-form @submit="onSubmitTransferBalanceOtherUser" class="w-100">
          <b-form-group
            id="form-from-group"
            label="Transfer from: (Enter account number)"
            label-for="form-from-input"
          >
            <b-form-input
              id="form-from-input"
              type="text"
              v-model="transferBalanceToOtherUserForm.from"
              placeholder="Account Number"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="form-to-group"
            label="Transfer to: (Enter account number)"
            label-for="form-to-input"
          >
            <b-form-input
              id="form-to-input"
              type="text"
              v-model="transferBalanceToOtherUserForm.to"
              placeholder="Account Number"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="form-amount-group"
            label="Amount:"
            label-for="form-amount-input"
          >
            <b-form-input
              id="form-amount-input"
              type="text"
              v-model="transferBalanceToOtherUserForm.balance"
              placeholder="amount"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="outline-info">Submit</b-button>
        </b-form>
      </b-modal>
      <!-- End of Modal for Create Account-->
      <!-- Start of Modal for Edit Account-->
      <b-modal
        ref="editAccountModal"
        id="edit-account-modal"
        title="Edit the account"
        hide-backdrop
        hide-footer
      >
        <b-form @submit="onSubmitUpdate" class="w-100">
          <b-form-group
            id="form-edit-name-group"
            label="Account Name:"
            label-for="form-edit-name-input"
          >
            <b-form-input
              id="form-edit-name-input"
              type="text"
              v-model="editAccountForm.name"
              placeholder="Account Name"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="outline-info">Update</b-button>
        </b-form>
      </b-modal>
      <!-- End of Modal for Edit Account-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserPage",
  data() {
    return {
      allAccounts: [],
      accounts: [],
      mainAccount: [],
      env_var_file_name: process.env.VUE_APP_ENV_VAR_FILE_NAME,
      environment: process.env.NODE_ENV,
      createAccountForm: {
        name: "",
        password: "",
        currency: "",
        country: "",
      },
      transferBalanceForm: {
        from: "",
        to: "",
        balance: "",
      },
      transferBalanceToOtherUserForm: {
        from: "",
        to: "",
        balance: "",
      },
      editAccountForm: {
        id: "",
        name: "",
      },
      showMessage: false,
      message: "",
    };
  },
  methods: {
    /***************************************************
     * RESTful requests
     ***************************************************/

    //GET function
    // RESTgetAccounts() {
    //   const path = `${process.env.VUE_APP_ROOT_URL}/accounts`;
    //   axios
    //     .get(path)
    //     .then((response) => {
    //       this.accounts = response.data.accounts;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },

    getTransactions(transactionString) {
      const transactions = [];
      const transactionSections = transactionString.split(",").filter(Boolean);

      for (const section of transactionSections) {
        const [from, to, balance] = section.split(" ").map(Number);
        transactions.push({ from, to, balance });
      }

      return transactions;
    },

    RESTgetAccounts() {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts`;

      // Return the axios promise directly
      return axios
        .get(path)
        .then((response) => {
          this.accounts = response.data.accounts;
          this.accounts = this.accounts.filter(
            (account) => account.name === this.username
          );
          console.log(this.accounts);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    RESTgetAllAccounts() {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts`;

      // Return the axios promise directly
      return axios
        .get(path)
        .then((response) => {
          this.allAccounts = response.data.accounts;
          console.log("all accounts", this.allAccounts);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    RESTgetMainAccount() {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts`;

      // Return the axios promise directly
      return axios
        .get(path)
        .then((response) => {
          this.mainAccount = response.data.accounts;
          this.mainAccount = this.mainAccount.filter(
            (account) =>
              account.name === this.username && account.main_account === true
          );
          console.log(this.mainAccount);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    RESTgetFromToAccounts() {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts`;

      // Return the axios promise directly
      return axios
        .get(path)
        .then((response) => {
          this.accounts = response.data.accounts;
          this.accounts = this.accounts.filter(
            (account) => account.name === this.username
          );
          console.log(`from to accounts: ${this.accounts}`);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    // POST function
    RESTcreateAccount(payload) {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts`;
      axios
        .post(path, payload)
        .then((response) => {
          this.RESTgetAccounts();
          this.RESTgetMainAccount();
          this.RESTgetAllAccounts();
          // For message alert
          this.message = "Account Created succesfully!";
          // To actually show the message
          this.showMessage = true;
          // To hide the message after 3 seconds
          setTimeout(() => {
            this.showMessage = false;
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
          this.RESTgetAccounts();
          this.RESTgetMainAccount();
          this.RESTgetAllAccounts();
        });
    },

    // Update function
    RESTupdateAccount(payload, accountId) {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts/${accountId}`;
      axios
        .put(path, payload)
        .then((response) => {
          this.RESTgetAccounts();
          this.RESTgetMainAccount();
          this.RESTgetAllAccounts();

          // For message alert
          this.message = "Account Updated succesfully!";
          // To actually show the message
          this.showMessage = true;
          // To hide the message after 3 seconds
          setTimeout(() => {
            this.showMessage = false;
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
          this.RESTgetAccounts();
          this.RESTgetMainAccount();
          this.RESTgetAllAccounts();
        });
    },

    // Update function
    RESTtransferBalance(payload, fromAccount, toAccount, mainAccount) {
      const pathFrom = `${process.env.VUE_APP_ROOT_URL}/accounts/${fromAccount.id}`;
      const pathTo = `${process.env.VUE_APP_ROOT_URL}/accounts/${toAccount.id}`;
      const pathMain = `${process.env.VUE_APP_ROOT_URL}/accounts/${mainAccount.id}`;

      let newFromBalance = fromAccount.balance - payload.balance;
      if (newFromBalance < 0) {
        alert("Insufficient funds");
        return;
      }
      let newToBalance = toAccount.balance + payload.balance;

      console.log("new from balance", newFromBalance);
      console.log("new to balance", newToBalance);

      const payloadFrom = {
        balance: newFromBalance,
        transactions: "",
      };

      const payloadTo = {
        balance: newToBalance,
        transactions: "",
      };

      let mainTransactions = "";
      mainTransactions += `${mainAccount.transactions}${payload.from} ${payload.to} ${payload.balance} ,`;

      const payloadMain = {
        balance: mainAccount.balance,
        transactions: mainTransactions,
      };

      if (mainAccount.id === fromAccount.id) {
        payloadMain.balance = newFromBalance;
      } else if (mainAccount.id === toAccount.id) {
        payloadMain.balance = newToBalance;
      } else {
        payloadMain.balance = mainAccount.balance;
      }

      axios
        .put(pathTo, payloadTo)
        .then((responseTo) => {
          // First PUT request successful
          axios
            .put(pathFrom, payloadFrom)
            .then((responseFrom) => {
              // Second PUT request successful
              axios
                .put(pathMain, payloadMain) // Add your main path and payload here
                .then((responseMain) => {
                  // Third PUT request successful
                  this.RESTgetAccounts();
                  this.RESTgetMainAccount();
                  this.RESTgetAllAccounts();

                  this.message = "Balance transferred successfully!";
                  this.showMessage = true;
                  setTimeout(() => {
                    this.showMessage = false;
                  }, 3000);
                })
                .catch((errorMain) => {
                  console.error(errorMain);
                  this.RESTgetAccounts();
                  this.RESTgetMainAccount();
                  this.RESTgetAllAccounts();
                });
            })
            .catch((errorFrom) => {
              // Second PUT request failed
              console.error(errorFrom);
              this.RESTgetAccounts();
              this.RESTgetMainAccount();
              this.RESTgetAllAccounts();
            });
        })
        .catch((errorTo) => {
          // First PUT request failed
          console.error(errorTo);
          this.RESTgetAccounts();
          this.RESTgetMainAccount();
          this.RESTgetAllAccounts();
        });
    },

    RESTtransferBalanceToOtherUser(
      payload,
      fromAccount,
      toAccount,
      mainAccount
    ) {
      const pathFrom = `${process.env.VUE_APP_ROOT_URL}/accounts/${fromAccount.id}`;
      const pathTo = `${process.env.VUE_APP_ROOT_URL}/accounts/${toAccount.id}`;
      const pathMain = `${process.env.VUE_APP_ROOT_URL}/accounts/${mainAccount.id}`;

      let newFromBalance = fromAccount.balance - payload.balance;
      if (newFromBalance < 0) {
        alert("Insufficient funds");
        return;
      }
      let newToBalance = toAccount.balance + payload.balance;

      console.log("new from balance", newFromBalance);
      console.log("new to balance", newToBalance);

      const payloadFrom = {
        balance: newFromBalance,
        transactions: "",
      };

      const payloadTo = {
        balance: newToBalance,
        transactions: "",
      };

      let mainTransactions = "";
      mainTransactions += `${mainAccount.transactions}${payload.from} ${payload.to} ${payload.balance} ,`;

      const payloadMain = {
        balance: mainAccount.balance,
        transactions: mainTransactions,
      };

      if (mainAccount.id === fromAccount.id) {
        payloadMain.balance = newFromBalance;
      } else if (mainAccount.id === toAccount.id) {
        payloadMain.balance = newToBalance;
      } else {
        payloadMain.balance = mainAccount.balance;
      }

      axios
        .put(pathTo, payloadTo)
        .then((responseTo) => {
          // First PUT request successful
          axios
            .put(pathFrom, payloadFrom)
            .then((responseFrom) => {
              // Second PUT request successful
              axios
                .put(pathMain, payloadMain) // Add your main path and payload here
                .then((responseMain) => {
                  // Third PUT request successful
                  this.RESTgetAccounts();
                  this.RESTgetMainAccount();
                  this.RESTgetAllAccounts();

                  this.message = "Balance transferred successfully!";
                  this.showMessage = true;
                  setTimeout(() => {
                    this.showMessage = false;
                  }, 3000);
                })
                .catch((errorMain) => {
                  console.error(errorMain);
                  this.RESTgetAccounts();
                  this.RESTgetMainAccount();
                  this.RESTgetAllAccounts();
                });
            })
            .catch((errorFrom) => {
              // Second PUT request failed
              console.error(errorFrom);
              this.RESTgetAccounts();
              this.RESTgetMainAccount();
              this.RESTgetAllAccounts();
            });
        })
        .catch((errorTo) => {
          // First PUT request failed
          console.error(errorTo);
          this.RESTgetAccounts();
          this.RESTgetMainAccount();
          this.RESTgetAllAccounts();
        });
    },

    // Delete account
    RESTdeleteAccount(accountId) {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts/${accountId}`;
      axios
        .delete(path)
        .then((response) => {
          this.RESTgetAccounts();
          this.RESTgetMainAccount();
          this.RESTgetAllAccounts();

          // For message alert
          this.message = "Account Deleted succesfully!";
          // To actually show the message
          this.showMessage = true;
          // To hide the message after 3 seconds
          setTimeout(() => {
            this.showMessage = false;
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
          this.RESTgetAccounts();
          this.RESTgetMainAccount();
          this.RESTgetAllAccounts();
        });
    },

    /***************************************************
     * FORM MANAGEMENT
     * *************************************************/

    // Initialize forms empty
    initForm() {
      this.createAccountForm.name = "";
      // this.createAccountForm.password = "";
      this.createAccountForm.currency = "";
      (this.createAccountForm.country = ""), (this.editAccountForm.id = "");
      this.editAccountForm.name = "";
      this.transferBalanceForm.from = "";
      this.transferBalanceForm.to = "";
      this.transferBalanceForm.balance = "";
      this.transferBalanceToOtherUserForm.from = "";
      this.transferBalanceToOtherUserForm.to = "";
      this.transferBalanceToOtherUserForm.balance = "";
    },

    // Handle submit event for create account
    onSubmit(e) {
      e.preventDefault(); //prevent default form submit form the browser
      this.$refs.addAccountModal.hide(); //hide the modal when submitted
      const payload = {
        name: this.username,
        password: "",
        currency: this.createAccountForm.currency,
        balance: 0,
        country: this.createAccountForm.country,
        transactions: "",
        main_account: false,
      };
      this.RESTcreateAccount(payload);
      this.initForm();
    },

    // Handle submit event for transfer balance
    async onSubmitTransferBalance(e) {
      console.log("Transfer balance");
      e.preventDefault(); //prevent default form submit form the browser
      this.$refs.transferBalanceModal.hide(); //hide the modal when submitted
      const payload = {
        from: this.transferBalanceForm.from,
        to: this.transferBalanceForm.to,
        balance: parseInt(this.transferBalanceForm.balance, 10),
      };

      await this.RESTgetFromToAccounts();
      console.log("from - to", this.accounts);

      let fromAccount = null;
      this.accounts.forEach((obj) => {
        if (obj.account_number === payload.from) {
          fromAccount = obj;
        }
      });

      let toAccount = null;
      this.accounts.forEach((obj) => {
        if (obj.account_number === payload.to) {
          toAccount = obj;
        }
      });

      let mainAccount = null;
      this.accounts.forEach((obj) => {
        if (obj.main_account === true) {
          mainAccount = obj;
        }
      });

      console.log("from account", fromAccount);
      console.log("to account", toAccount);
      console.log("main account", mainAccount);

      if (this.isValid(payload)) {
        this.RESTtransferBalance(payload, fromAccount, toAccount, mainAccount);
        this.initForm();
      } else {
        alert("Invalid input");
      }
    },

    // Handle submit event for transfer balance
    async onSubmitTransferBalanceOtherUser(e) {
      console.log("Transfer balance");
      e.preventDefault(); //prevent default form submit form the browser
      this.$refs.transferBalanceToOtherUserModal.hide(); //hide the modal when submitted
      const payload = {
        from: this.transferBalanceToOtherUserForm.from,
        to: this.transferBalanceToOtherUserForm.to,
        balance: parseInt(this.transferBalanceToOtherUserForm.balance, 10),
      };

      await this.RESTgetFromToAccounts();
      console.log("from - to", this.accounts);
      await this.RESTgetAllAccounts();
      console.log("from - to for all", this.allAccounts);

      let fromAccount = null;
      this.accounts.forEach((obj) => {
        if (obj.account_number === payload.from) {
          fromAccount = obj;
        }
      });

      let toAccount = null;
      this.allAccounts.forEach((obj) => {
        if (obj.account_number === payload.to) {
          toAccount = obj;
        }
      });

      let mainAccount = null;
      this.accounts.forEach((obj) => {
        if (obj.main_account === true) {
          mainAccount = obj;
        }
      });

      console.log("from account", fromAccount);
      console.log("to account", toAccount);
      console.log("main account", mainAccount);

      if (this.isValid(payload)) {
        this.RESTtransferBalanceToOtherUser(
          payload,
          fromAccount,
          toAccount,
          mainAccount
        );
        this.initForm();
      } else {
        alert("Invalid input");
      }
    },

    isValid(payload) {
      if (
        payload.from === payload.to ||
        payload.balance <= 0 ||
        payload.balance === ""
      ) {
        return false;
      }
      return true;
    },

    // Handle submit event for edit account
    onSubmitUpdate(e) {
      e.preventDefault(); //prevent default form submit form the browser
      this.$refs.editAccountModal.hide(); //hide the modal when submitted
      const payload = {
        name: this.editAccountForm.name,
      };
      this.RESTupdateAccount(payload, this.editAccountForm.id);
      this.initForm();
    },

    // Handle edit button
    editAccount(account) {
      this.editAccountForm = account;
    },

    // Handle Delete button
    deleteAccount(account) {
      this.RESTdeleteAccount(account.id);
    },
  },

  /***************************************************
   * LIFECYClE HOOKS
   ***************************************************/
  async created() {
    console.log("Username from Vuex store:", this.username);

    await this.RESTgetAccounts();
    await this.RESTgetMainAccount();
    await this.RESTgetAllAccounts();
  },
  computed: {
    username() {
      console.log(this.$store.state.username);
      return this.$store.state.username;
    },
  },
};
</script>
