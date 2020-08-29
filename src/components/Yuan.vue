<template>
  <div>
    <el-table border :data="emp" stripe height="550px">
      <el-table-column label="用户编号" prop="eid"></el-table-column>
      <el-table-column label="用户名字" prop="ename"></el-table-column>
      <el-table-column label="电话" prop="ephone"></el-table-column>
      <el-table-column label="账号" prop="account.aname"></el-table-column>
      <el-table-column label="密码" prop="account.apwd" :formatter="formatFlag"></el-table-column>
      <el-table-column label="状态" prop="flag" :formatter="forFlag" ></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'Yuan',
    data() {
      return { emp: []}
    },
    created:function(){
      return this.cha();
    },methods: {//查询方法
      cha: function () {
        this.$axios.post('http://localhost:8088/springboot/back/empqueryAll')
          .then(response => {
            this.emp = response.data
            console.log(this.inf)
          })
      },
      forFlag: function (row, column, cellValue) {
        if (cellValue == "1"){
          return '离职';
        }else if (cellValue == "0"){
          return '在职';
        }
      }
    }
  }
</script>

<style scoped>

</style>
