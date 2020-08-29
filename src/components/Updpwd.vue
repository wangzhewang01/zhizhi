<template>
  <el-form ref="form" :model="list" label-width="80px" :rules="rules" >
    <h3>修改密码</h3>

    <el-form-item label="账号">
      <!--disabled="disabled"只   readonly="true"读-->
      <el-input  v-model="list.aname" disabled="disabled"></el-input>
    </el-form-item>
    <el-form-item label="原密码">
      <el-input v-model="list.apwd" disabled="disabled"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="pwd">
      <el-input v-model="newpwd.pwd" ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="upds()">修改密码</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'Updpwd',
    // data(){ return {list:{}}},
    data() {
      return {
        list: {},newpwd:{},
        rules:{pwd:[{required:true,message:"密码为空"}]}
      }},
    created:function () {
      this.list=this.$route.params.emp[0];
    },methods:{
      upds:function () {
        this.$refs['form'].validate(valid=>{
          if(valid){
            console.log(this.list.aid);
            console.log(this.newpwd.pwd);
            this.$axios.post('http://localhost:8088/springboot/updpwd?aid='+this.list.aid+'&apwd='+this.newpwd.pwd).then(res=>{
              this.$message.success("操作成功")
              this.$router.push({name: 'Login'})
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
    border: 2px solid green;
    width: 30%;
    margin: 100px auto;
    border-radius: 25px;
    box-shadow: 0 0 25px lightskyblue;
    padding: 20px 50px 50px 20px;
    text-align: center;
  }
</style>
