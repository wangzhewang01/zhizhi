<template>
  <div>
    <el-table border :data="user" stripe height="550px">
      <el-table-column label="用户编号" prop="uid"></el-table-column>
      <el-table-column label="用户名" prop="uname"></el-table-column>
      <el-table-column label="用户手机" prop="iphone"></el-table-column>
      <el-table-column label="用户密码" prop="upwd"></el-table-column>
      <!--<el-table-column label="绑定qq" prop="qq" :formatter="formatFlag"></el-table-column>-->
      <!--<el-table-column label="qq密码" prop="qqpwd" ></el-table-column>-->
      <!--<el-table-column label="用户邮箱" prop="email" ></el-table-column>-->
      <!--<el-table-column label="性别" prop="sex" ></el-table-column>-->
      <!--<el-table-column label="真实姓名" prop="approveName"></el-table-column>-->
      <!--<el-table-column label="身份证" prop="card" ></el-table-column>-->
      <!--<el-table-column label="注册时间" prop="createtime" ></el-table-column>-->
      <!--<el-table-column label="状态" prop="flag" :formatter="formatFlag"></el-table-column>-->
      <el-table-column label="毕业学校" prop="experience.school" ></el-table-column>
      <el-table-column label="学历" prop="education.ename"></el-table-column>
      <el-table-column label="解封/封禁">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.flag"
                     @click.native="upddflag(scope.row)"
                     :active-value="0"
                     :inactive-value="1"
                     inactive-text="禁用"
                     active-text="正常"
                     active-color="#13ce66" inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data () {
      return {user: []}
    },
    created: function () {
      return this.cha();
    }, methods: {//查询方法
      cha: function () {
        this.$axios.post('http://localhost:8088/springboot/userqueryAll')
          .then(response => {
            this.user = response.data

          })
      }, upddflag:function (row) {
      console.log("aaa")
      this.$axios.post('http://localhost:8088/springboot/upduserflag?uid=' + row.uid + '&flag=' + row.flag).then(res => {
        this.$message.success("操作成功")
      })
    }
    }
  }
</script>


<style scoped>
  .demo .el-switch__label {
    position: absolute;
    display: none;
    color: #fff;
  }

  demo .el-switch__label--right {
    z-index: 1;
    right: -3px;
  }

  .demo .el-switch__label--left {
    z-index: 1;
    left: 19px;
  }

  .demo .el-switch__label.is-active {
    display: block;
  }
  .demo.el-switch .el-switch__core,
  .el-switch .el-switch__label {
    width: 50px !important;
  }
</style>


