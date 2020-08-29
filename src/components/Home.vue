<template>

  <div style="margin-top: -60px">
    <el-container>
      <el-header>
        <el-dropdown trigger="click" @command="hanleCommand">
                    <span class="el-dropdown-link">
                        <i class="el-icon-user-solid"></i>
                         <!--<p hidden>{{user=$route.params.user}}</p>-->
                         <!--{{user[0].employee.ename}}-->
                     {{list[0].employee.ename}}
                      <i class="el-icon-arrow-down el-icon--right"></i>
                      <img src="../assets/timg.jpg" height="50" width="50"/>
                    </span>
          <el-dropdown-menu>
            <el-dropdown-item command="Personal">个人信息</el-dropdown-item>
            <el-dropdown-item command="Updpwd">修改密码</el-dropdown-item>
            <el-dropdown-item command="Tui">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside>
          <!-- router:启用路由规则 -->
          <el-menu :router="true">
            <el-menu-item index="1" :route="{name:'Yuan'}" v-show="chao">
              <i class="el-icon-ship"></i>
              <span>员工管理</span>
            </el-menu-item>

            <el-submenu index="2"  v-show="yuan">
              <template slot="title">
                <i class="el-icon-light-rain" ></i>
                <span>投诉审核</span>
              </template>
              <el-menu-item index="2-1" :route="{name:'Wenzhang'}">
                <template slot="title">
                <i class="el-icon-apple"></i>
                <span>投诉文章</span>
                </template>
              </el-menu-item>
              <el-menu-item index="2-2"  :route="{name:'Wenti'}">
                <template slot="title">
                <i class="el-icon-brush"></i>
                <span>投诉问题</span>
                </template>
              </el-menu-item>
            </el-submenu>

            <el-menu-item index="3" v-show="chao" :route="{name:'User'}">
              <template slot="title" >
                <i class="el-icon-light-rain"></i>
                <span>用户管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="4" :route="{name:'Emp'}" v-show="chao">
              <i class="el-icon-ship"></i>
              <span>后台登陆管理</span>
            </el-menu-item>

            <el-menu-item index="5" :route="{name:'Shuangy'}" v-show="chao">
              <i class="el-icon-ship"></i>
              <span>测试下狼狂</span>
            </el-menu-item>

            <el-submenu index="6" v-show="chao">
              <template slot="title">
                <i class="el-icon-light-rain"></i>
                <span>员工管理</span>
              </template>
              <el-menu-item index="2-1" :route="{name:'Emp'}">
                <i class="el-icon-apple"></i>
                <span>员工管理</span>
              </el-menu-item>
              <el-menu-item index="2-2"  :route="{name:'Account'}">
                <i class="el-icon-brush"></i>
                <span>账号管理</span>
              </el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer height="30px">
        版权
      </el-footer>

    </el-container>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        chao:false,
        yuan:false,
        emp: {},
        list:[this.$route.params.user[0]]
      }
      },
      created:function() {
        return this.quan();
      },methods:{
        quan:function () {
            if(this.$route.params.user[0].employee.roletid==1) {
              this.chao = true;
              this.yuan = true;
            }else if (this.$route.params.user[0].employee.roletid==2) {
              this.chao=false;
              this.yuan=true;
            }
        },
        hanleCommand:function(command){
          this.$router.push({name:command,params:{emp:this.list}});
        }
      }
  }
</script>


<style scoped>
  .el-header, .el-footer {
    background-color: lavender;
    padding: 10px 50px;
    vertical-align:top;
  }

  .el-aside {
    height: 600px;
  }

  .el-main {
    background-color: lightgreen;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-dropdown{
    float: right;
  }
</style>
