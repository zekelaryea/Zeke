<template>
  <div class="Accounts">
    <div class="row justify-content-md-center">
      <div class="col col-md-10">
        <a href="/">Create new account</a>

      
        <sui-table single-line>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Account Name</sui-table-header-cell>
              <sui-table-header-cell>Category</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>OPen. Balance (Ghs)</sui-table-header-cell>
              <sui-table-header-cell>Balance At (Ghs)</sui-table-header-cell>
              <sui-table-header-cell>Date Created</sui-table-header-cell>
              <sui-table-header-cell>Action</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John Lilki</sui-table-cell>
              <sui-table-cell>Sales</sui-table-cell>
              <sui-table-cell>active</sui-table-cell>
              <sui-table-cell>1000</sui-table-cell>
              <sui-table-cell>2000</sui-table-cell>
              <sui-table-cell>05/09/2019</sui-table-cell>
              <sui-table-cell>
                <a href="/view-account/1" class="ui green button">View</a>
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie Harington</sui-table-cell>
              <sui-table-cell>Current Asset</sui-table-cell>
              <sui-table-cell>inactive</sui-table-cell>
              <sui-table-cell>1000</sui-table-cell>
              <sui-table-cell>2000</sui-table-cell>
              <sui-table-cell>05/09/2019</sui-table-cell>
              <sui-table-cell>
                <a href="/view-account/2" class="ui green button">View</a>
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill Lewis</sui-table-cell>
              <sui-table-cell>Owners equity</sui-table-cell>
              <sui-table-cell>inactive</sui-table-cell>
              <sui-table-cell>1000</sui-table-cell>
              <sui-table-cell>2000</sui-table-cell>
              <sui-table-cell>05/09/2019</sui-table-cell>
              <sui-table-cell>
                <a href="/view-account/3" class="ui green button">View</a>
              </sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
         
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accounts',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
