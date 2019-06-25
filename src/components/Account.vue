<template>
  <div class="Account">
    <div class="row justify-content-md-center">
      <div class="col col-md-10">
        <a href="/accounts">See all accounts</a>

      
        <sui-card class="fluid">
          <sui-card-content>
            <sui-card-header>
              John Lilki
            </sui-card-header>
          </sui-card-content>
          <sui-card-content>
            <sui-header size="tiny">Details</sui-header>
            
            <div class="ui small feed">
              <div class="event">
                <div class="content">
                  <div class="summary">
                    Category: Sales
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    Status: active
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    Opening Balance (Ghs): 1000
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    Balance at (Ghs): 2000
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    Date created: 05/09/2019
                  </div>
                </div>
              </div>
            </div>
            <!-- end of base semantic ui, to be updated in the future with sui-feed -->
          </sui-card-content>
          <sui-card-content extra>
            <sui-button>Delete account</sui-button>
          </sui-card-content>
        </sui-card>
         
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
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
