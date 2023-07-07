<template>
  <form>
    <label for="email">Email:</label>
    <input type="email" required v-model="email" />
    <label for="password">Password:</label>
    <input type="password" required v-model="password" />
    <label for="role">Role:</label>
    <select name="role" id="role" v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
  </form>
  <p>{{ email }} - {{ password }} - {{ role }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
    };
  },
};
</script>

<style>
form {
  background: linear-gradient(45deg, rgb(225, 225, 225), rgb(215, 215, 215));
  width: 450px;
  text-align: left;
  margin: 0 auto;
  padding: 3rem;
  display: inline-block;
  border-radius: 16px;
}

label {
  font-size: large;
  text-transform: uppercase;
  color: #999;
  font-weight: bold;
  letter-spacing: 2px;
  display: inline-block;
  margin-bottom: 0.3rem;
}

input,
select {
  background-color: rgb(235, 235, 235);
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1.2rem;
  border: none;
  padding: 1.5rem 6px;
  font-size: 2rem;
  color: #888;
  border-radius: 16px;
  box-shadow: 0 4px 3px 0px rgb(182, 182, 182);
}
</style>
