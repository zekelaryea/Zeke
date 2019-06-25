<template>
  <div class="Create">
    <div class="row justify-content-md-center">
      <div class="col col-md-4">
        <a href="/accounts">See all accounts</a>

      

         <sui-form>
            <sui-form-field>
              <label>Account Name</label>
              <input type="text" placeholder="Enter Fullname" >
            </sui-form-field>
            <sui-form-field>
              <label>Category</label>
              <select class="ui fluid dropdown">
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
            </sui-form-field>
            <sui-form-field>
              <label>Status</label>
              <select class="ui fluid dropdown">
                <option value="">Choose a status</option>
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
            </sui-form-field>
            <sui-form-field>
              <label>Opening Balance</label>
              <input type="number" placeholder="Enter amount" >
            </sui-form-field>
            <sui-form-field>
              <label>Balance at</label>
              <input type="date" >
            </sui-form-field>
            <sui-button type="submit" class="ui primary button" style="float: right;">Submit</sui-button>
          </sui-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  props: {
    msg: String
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
