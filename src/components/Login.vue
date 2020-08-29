<template>
  <div>
    <el-form label-width="100px" label-suffix="："  :model="emp" :rules="rules" ref="fm">
      <h2>登 录</h2>
      <el-form-item label="用户名" prop="aname">
        <el-input v-model="emp.aname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="apwd">
        <el-input v-model="emp.apwd" show-password></el-input>
      </el-form-item>
      <el-button type="primary" round @click="login()">登录</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data(){ return {msg: '', emp: {},
      rules:{
        aname:[{required:true,message:"姓名为空"}],
        apwd:[{required:true,message:"密码为空"}]}}
    },methods: {
    login: function () {
      this.$refs['fm'].validate(valid=>{
        if(valid){
              this.$axios.post('http://localhost:8088/springboot/aaaa?aname='+this.emp.aname+'&apwd='+this.emp.apwd).then(response => {
              console.log(response.data)
              let user = response.data
              if(user.length>0 && user.length<2){
                this.$router.push({name: 'Home', params: {user}})
              }else{
                this.$message.error("用户名密码错误");
              }
            }).catch(err => {
            this.msg = err
          })
        }
      })
    }
    }
  }
</script>

<style scoped>
  .el-form {
    border: 2px solid lightskyblue;
    width: 30%;
    margin: 100px auto;
    border-radius: 25px;
    box-shadow: 0 0 25px lightskyblue;
    padding: 20px 50px 50px 20px;
    text-align: center;
  }
</style>
