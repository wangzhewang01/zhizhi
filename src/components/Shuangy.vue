<template>
    <div>
        {{user.rid}}
        <el-form   label-width="100px">
          <el-form-item label="职位">
            <el-select v-model="user.rid" placeholder="请选择状态">
              <el-option v-for="i in user" :key="i.rid" :value="i.rid" :label="i.rname"></el-option>
            </el-select>
          </el-form-item>
        </el-form>

    </div>
</template>

<script>
  export default {
    name: 'Shuangy',
    data () {
      return {user: []}
    },
    created: function () {
      return this.cha();
    }, methods: {//查询方法
      cha: function () {
        this.$axios.post('http://localhost:8088/springboot/aaaaa')
          .then(response => {
            this.user = response.data

          })
      }
    }
  }
</script>

<style scoped>

</style>
