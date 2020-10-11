<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">DotProject</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/product">Product</router-link>
        </li>
        <li class="nav-item">
          <a
            href="http://me.nicosiput.com"
            class="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            >About</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  min-height: 80px;
  margin-bottom: 20px;
}

.router-link-active {
  font-weight: bold;
}
</style>
