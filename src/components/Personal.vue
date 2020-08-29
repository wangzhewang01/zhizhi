<template>
<!--<div>-->
  <!--{{this.$route.params.emp[0]}}-->
<!--</div>-->
  <div>
    <el-table border :data="list" stripe height="550px">
      <el-table-column label="账号" prop="aname"></el-table-column>
      <el-table-column label="密码" prop="apwd"></el-table-column>
      <el-table-column label="用户Id" prop="employee.eid"></el-table-column>
      <el-table-column label="姓名" prop="employee.ename"></el-table-column>
      <el-table-column label="电话" prop="employee.ephone"></el-table-column>
      <el-table-column label="角色" prop="employee.roletid" :formatter="forRole"></el-table-column>
      <el-table-column label="状态" prop="employee.flag" :formatter="forFlag"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'Personal',
    data() {
      return {
        list: [this.$route.params.emp[0]]
      }
    },methods:{
      forRole: function (row, column, cellValue) {
        if (cellValue == "1"){
          return '超级管理员';
        }else if (cellValue == "0"){
          return '普通管理员';
        }
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
