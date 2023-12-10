<template>
  <div class="jumbotron vertical-center">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>Admin Portal</h1>
          <hr />
          <p>Here you can view, create, update and delete bank users.</p>
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

          <br /><br />
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
              <tr v-for="account in accounts" :key="account.id">
                <td>{{ account.name }}</td>
                <td>{{ account.account_number }}</td>
                <td>{{ account.balance }}</td>
                <td>{{ account.currency }}</td>
                <td>
                  <span
                    v-if="account.status == 'Active'"
                    class="badge badge-success"
                    >{{ account.status }}</span
                  >
                  <span v-else class="badge badge-danger">{{
                    account.status
                  }}</span>
                </td>
                <td>{{ account.country }}</td>
                <td>
                  <div class="btn-group" role="group">
                    <button
                      type="button"
                      class="btn btn-info btn-sm"
                      v-b-modal.edit-account-modal
                      @click="editAccount(account)"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      @click="deleteAccount(account)"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <br /><br />
          <br /><br />
          <footer class="text-center">
            Copyright &copy; All Rights Reserved.
          </footer>
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
              placeholder="Account Name"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="form-password-group"
            label="Create Password:"
            label-for="form-password-input"
          >
            <b-form-input
              id="form-password-input"
              type="text"
              v-model="createAccountForm.password"
              placeholder="Account password"
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
            id="form-edit-currency-group"
            label="Account currency:"
            label-for="form-edit-currency-input"
          >
            <b-form-input
              id="form-edit-currency-input"
              type="text"
              v-model="editAccountForm.currency"
              placeholder="Account currency"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="outline-info"
            >Update Currency</b-button
          >
        </b-form>

        <br />

        <b-form @submit="onSubmitUpdateCountry" class="w-100">
          <b-form-group
            id="form-edit-country-group"
            label="Account country:"
            label-for="form-edit-country-input"
          >
            <b-form-input
              id="form-edit-country-input"
              type="text"
              v-model="editAccountForm.country"
              placeholder="Account country"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="outline-info"
            >Update Country</b-button
          >
        </b-form>
      </b-modal>
      <!-- End of Modal for Edit Account-->
    </div>
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
  </div>
</template>

<script>
//import CryptoJS from "crypto-js";
import axios from "axios";
export default {
  name: "UserPage",
  data() {
    return {
      accounts: [],
      env_var_file_name: process.env.VUE_APP_ENV_VAR_FILE_NAME,
      environment: process.env.NODE_ENV,
      createAccountForm: {
        name: "",
        password: "",
        currency: "",
        country: "",
      },
      editAccountForm: {
        id: "",
        name: "",
        currency: "",
        country: "",
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
    RESTgetAccounts() {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts`;
      axios
        .get(path)
        .then((response) => {
          this.accounts = response.data.accounts;
          console.log(this.accounts);
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
          console.log(this.accounts);
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
        });
    },

    // Update function
    RESTupdateAccount(payload, accountId) {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts/${accountId}/currency`;
      axios
        .put(path, payload)
        .then((response) => {
          this.RESTgetAccounts();
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
        });
    },

    // Update function
    RESTupdateAccountCountry(payload, accountId) {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts/${accountId}/country`;
      axios
        .put(path, payload)
        .then((response) => {
          this.RESTgetAccounts();
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
        });
    },

    // Delete account
    RESTdeleteAccount(accountId) {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts/${accountId}`;
      axios
        .delete(path)
        .then((response) => {
          this.RESTgetAccounts();
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
        });
    },

    /***************************************************
     * FORM MANAGEMENT
     * *************************************************/

    // Initialize forms empty
    initForm() {
      this.createAccountForm.name = "";
      this.createAccountForm.password = "";
      this.createAccountForm.currency = "";
      (this.createAccountForm.country = ""), (this.editAccountForm.id = "");
      this.editAccountForm.name = "";
      this.editAccountForm.currency = "";
      this.editAccountForm.country = "";
    },


    // Handle submit event for create account
        // EncryptString function
    
    
    // encryptString(message, r, c){
    //   message = message.split('');
    //   let newStr = '';
    //   let x = 0;
    //   while(x < r){
    //     newStr += message.filter(char => message.indexOf(char) % r === x).join('');
    //     x++;
    //   }
    //   return newStr;
    // },

    encryptString(message, r, c) {
    const salt = 'RandomSalt';
    let saltedMessage = message + salt;
    let newStr = '';
    for (let i = 0; i < saltedMessage.length; i++) {
      let charCode = (saltedMessage.charCodeAt(i) + i) % 128; // Keep ASCII within range
      newStr += String.fromCharCode(charCode);
    }

    // Simplify this logic for easier reversal
    return newStr.split('').reverse().join('');
  },

  decryptString(encryptedMessage, r, c) {
    let reversedMessage = encryptedMessage.split('').reverse().join('');
    
    let originalMessage = '';
    for (let i = 0; i < reversedMessage.length; i++) {
      let charCode = (reversedMessage.charCodeAt(i) - i + 128) % 128; // Correct for negative values
      originalMessage += String.fromCharCode(charCode);
    }

    // Remove the salt
    return originalMessage.replace('RandomSalt', '');
  },


    // Handle submit event for create account
    onSubmit(e) {
    e.preventDefault();
    this.$refs.addAccountModal.hide();

    const r = 5; 
    const c = 3; 

    const encryptedPassword = this.encryptString(this.createAccountForm.password, r, c);
    const decryptedPassword = this.decryptString(encryptedPassword, r, c);
    console.log('encrypted Password:', encryptedPassword);
    console.log('Decrypted Password:', decryptedPassword);

    const payload = {
      name: this.createAccountForm.name,
      password: encryptedPassword,
      currency: this.createAccountForm.currency,
      country: this.createAccountForm.country,
      balance: 5000,
      transactions: "",
      main_account: true,
    };

    this.RESTcreateAccount(payload);
    this.initForm();
  },


    // Handle submit event for edit account
    onSubmitUpdate(e) {
      e.preventDefault(); //prevent default form submit form the browser
      this.$refs.editAccountModal.hide(); //hide the modal when submitted
      const payload = {
        currency: this.editAccountForm.currency,
      };
      this.RESTupdateAccount(payload, this.editAccountForm.id);
      this.initForm();
    },

    // Handle submit event for edit account
    onSubmitUpdateCountry(e) {
      e.preventDefault(); //prevent default form submit form the browser
      this.$refs.editAccountModal.hide(); //hide the modal when submitted
      const payload = {
        country: this.editAccountForm.country,
      };
      this.RESTupdateAccountCountry(payload, this.editAccountForm.id);
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
  created() {
    this.RESTgetAccounts();
  },
};
</script>
