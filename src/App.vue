<template>
  <div id="app">
    <div id="nav">
      <div id="nav-logo">
        <router-link to="/"><img alt="Augur Wiki logo" src="./assets/logo.png" /></router-link>
      </div>
      <div id="nav-menu">
        <router-link to="/"><fa-icon icon="home" /></router-link>
        <router-link to="/markets"><fa-icon icon="chart-line" /></router-link>
      </div>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
body {
  background-color: #F5F5F8;
  padding: 0;
  margin: 0;
}
#nav {
  height: 100vh;
  width: 60px;
  background-color: #FEFEFE;
  border-right: 1px solid #E6E6E6;
  float: left;
  #nav-logo {
    width: 60px;
    height: 60px;
    border-bottom: 1px solid #E6E6E6;
    img {
      width: 45px;
      height: 45px;
      margin: 7.5px 0% 0% 7.5px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  #nav-menu {
    width: 60px;
    height: 120px;
    a {
      font-size: 30px;
      display: inline-block;
      padding: 15px;
      color: #E6E6E6;
      transition: 0.1s ease-in-out;
      &:first-child {
        font-size: 27px; // TODO: Fix this up.
      }
      &:hover {
        color: #4B0331;
      }
      &.router-link-exact-active { // TODO: Don't use exact for subpage support.
        color: #4B0331;
      }
    }
  }
}
#content {
  height: 100vh;
  width: calc(100vw - 61px); // TODO: Fix this up.
  float: right;
}
</style>