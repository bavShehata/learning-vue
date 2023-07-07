<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email:</label>
    <input type="email" required v-model="email" />
    <label for="password">Password:</label>
    <input type="password" required v-model="password" />
    <label for="role">Role:</label>
    <select name="role" id="role" v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label for="">Skills:</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <li @click="removeSkill(skill)">{{ skill }}</li>
    </div>
    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>ToC</label>
    </div>

    <div>
      <input type="checkbox" value="Shaun" v-model="names" />
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="Bavly" v-model="names" />
      <label>Bavly</label>
    </div>
    <div>
      <input type="checkbox" value="Mario" v-model="names" />
      <label>Mario</label>
    </div>
    <p class="error">{{ passwordError }}</p>
    <div class="submit">
      <button>Create account</button>
    </div>
  </form>
  <p>{{ email }} - {{ password }} - {{ role }} - {{ terms }} - {{ names }}</p>
  <p>{{ tempSkill }} - {{ skills }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: "",
      names: ["Shaun", "Mario"],
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key == ",") {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    removeSkill(e, skill) {
      const index = this.skills.indexOf(skill);
      this.skills.splice(index, 1); // 2nd parameter means remove one item only
    },
    handleSubmit(e) {
      //validate password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Passwor should be more than 5 characters";
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
