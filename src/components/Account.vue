<template>
  <div>
    <el-button type="primary" @click="show()">添加账号</el-button>
    <el-table border :data="list" stripe height="550px">
      <el-table-column label="编号" prop="aid"></el-table-column>
      <el-table-column label="账号" prop="aname"></el-table-column>
      <el-table-column label="密码" prop="apwd"></el-table-column>
      <el-table-column label="操作" width="130px">
        <!-- scope：返回当前单元格 -->
        <template slot-scope="scope">
          <el-button type="success" round size="mini" icon="el-icon-edit" @click="show(scope.row)"></el-button>
          <el-button type="warning" round size="mini" icon="el-icon-delete" @click="del(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="account" label-width="100px">
        <el-form-item label="账号">
          <el-input v-model="account.aname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="account.apwd"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'account',
    data(){
      return{
        dialogFormVisible:false,
        title:'',
        account:{},
        list:[]
      }
    },
    created:function () {
      this.$axios.post('http://localhost:8088/springboot/account/listAll').then(
        response =>{
          this.list=response.data
        }).catch(err => {
        console.info(err)
      })
    },

    methods: {
      show: function (row) {
        if (row == null) {
          this.title = "添加账号"
          this.dialogFormVisible = true;
          this.account = {};
        } else {
          this.title = "修改账号"
          this.dialogFormVisible = true
          this.account = Object.assign({}, row)
        }
      },
      save:function () {
        if(this.title=="添加账号"){
          let row ={"rowone":JSON.stringify(this.account)}
          this.$axios.post("http://localhost:8088/springboot/account/save",this.$qs.stringify(row))
            .then(response=>{
              if (response.data != ""){
                this.$message.success("添加成功")
                this.list = response.data
              }else {
                const h = this.$createElement;
                this.$message.error({
                  message:  h('p', { style: 'color: red' },'该账号已存在，添加失败')
                })
              }
            }).catch(err=>console.info(err))
        }
        this.dialogFormVisible = false
      }
    }
  }
</script>

<style scoped>

</style>
