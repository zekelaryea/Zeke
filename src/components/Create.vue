<template>
  <div class="Create">
    <div class="row justify-content-md-center">
      <div class="col col-md-4">
        <a href="/accounts">See all accounts</a> <br>

        <label style="color: red;">{{ major_error }}</label>

          <form class="ui form" id="account_form">
            <div class="field">
              <label>Account Name</label>
              <input id="account_name" type="text" v-on:blur="checkName()" placeholder="Enter Fullname" >
              <label style="color: red;">{{ name_error }}</label>
            </div>
            <div class="field">
              <label>Category</label>
              <select class="ui fluid dropdown" v-on:blur="checkCategory()" id="category">
                <option value="">Choose a category</option>
                <option value="sales">Sales</option>
                <option value="costofsales">Cost of sales</option>
                <option value="expenses">Expenses</option>
                <option value="incometax">Income Tax</option>
                <option value="noncurrentasset">Non-current asset</option>
                <option value="currentasset">Current asset</option>
                <option value="noncurrentliabilities">Non-current liabilities</option>
                <option value="currentliabilities">Current liabilities</option>
                <option value="ownersequity">Owners equity</option>
              </select>
              <label style="color: red;">{{ category_error }}</label>

            </div>
            <div class="field">
              <label>Status</label>
              <select class="ui fluid dropdown" v-on:blur="checkStatus()" id="status">
                <option value="">Choose a status</option>
                <option value="sales">Enabled</option>
                <option value="costofsales">Diabled</option>
              </select>
              <label style="color: red;">{{ status_error }}</label>

            </div>
            <div class="field">
              <label>Opening Balance</label>
              <input type="number" id="opening_balance" v-on:blur="checkOpeningBalance()" placeholder="Enter amount" >
              <label style="color: red;">{{opening_balance_error}}</label>

            </div>
            <div class="field">
              <label>Balance at</label>
              <input id="balance_at" v-on:blur="checkBalanceAt()" type="date" >
              <label style="color: red;">{{date_error}}</label>

            </div>
            <button class="ui button primary" type="Submit">Submit</button>
          </form>


      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'Create',
  props: {
    msg: String,
  },
  data(){
    return{
    opening_balance_error: "",
    name_error: "",
    date_error: "",
    category_error: "",
    status_error: "",
    major_error: ""
    }
  },
  mounted () {
    var self = this;
    $('#account_form').on('submit', function (event) {
      // stop current action, prevent submitting 
      event.preventDefault()
      // validate inputs
      let name = $("#account_name").val();
      let category = $("#category").val();
      let status = $("#status").val();
      let opening_balance = $("#opening_balance").val();
      let balance_at = $("#balance_at").val();


      if (name != "" && category != "" && status != "" && opening_balance != "" && balance_at != "") {
        console.log("All inputs filled!");

        // everything ok, submit
        this.submit()

      } else{
        console.log("All inputs are not filled!");
        self.major_error = "Please all fields are requred!";
      }

      })

  },
  methods: {
    checkName(){
      // alert("ready to validate form");
      if ($("#account_name").val() == "") {
        this.name_error = "Please provide a name";
      } else{
        this.name_error = "";
      }
    },
    checkCategory(){
       if ($("#category").val() == "") {
        this.category_error = "Please choose a category";
      } else{
        this.category_error = "";
      }
    },
    checkStatus(){
      if ($("#status").val() == "") {
        this.status_error = "Please choose a Status";
      } else{
        this.status_error = "";
      }
    },
    checkOpeningBalance(){
      if ($("#opening_balance").val() == "") {
        this.opening_balance_error = "Please enter a valid amount";
      } else{
        this.opening_balance_error = "";
      }
    },
    checkBalanceAt(){
      if ($("#balance_at").val() == "") {
        this.date_error = "Please provide a valid date";
      } else{
        this.date_error = "";
      }

    },
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
  padding: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  /*color: #42b983;*/
}
</style>
