// Vue.component('ds-navdar',{
//   props: ['index'],
//    template:`<div class="nav_bar clear">
//            <div class="logo_div">
//                  <img class="logo_img" src="img/logo.png">
//                  <span class="logo_tip">投资者关系</span>
//            </div>
//            <ul class="nav_list">
//                  <li @click="check_nav(index,data.link)" class="nav_li" v-for="(data,index) in tab_list" :class="{li_select:current_tab==index}">{{data.title}}</li>
//            </ul>
//            <a class="back" href="http://www.haidilao.com/">
//                 <img class="back_img" src="img/back.png">
//                  返回海底捞
//            </a>
//    </div> `,
//    data: function data() {
//           return {
//                 tab_list: [{
//                   title: '信息披露',
//                   link: 'information_disclosure.html'
//                 },{
//                   title: '公司治理',
//                   link: 'corporate_governance.html'
//                 },{
//                   title: '股票信息',
//                   link: 'stock.html'
//                 },{
//                   title: '投资者日志',
//                   link: 'log.html'
//                 },{
//                   title: '投资者关系联络',
//                   link: 'contact.html'
//                 },{
//                   title: '常见问题',
//                   link: 'question.html'
//                 }] ,
//                 current_tab: 0
//           }
//    },
//    methods: {
//     check_nav(index,link) {
//         this.current_tab = index;
//          window.location.href = link;
//     }
//    },
//    created() {
//     this.current_tab =  this.index;

//    }

// })


// Vue.component('ds-footbar',{
//    template:`<div class="footer_bar">
//           <p>© 版权所有 四川海底捞餐饮股份有限公司 京ICP备190218174号</p>
//           <p>声明:此平台为免费使用,任何人不得假借我司名义收取费用,对于不法行为我司将追究其法律责任.</p>
//    </div> `,
//    data: function data() {
//           return {
//                 tab_list: [{
//                   title: '信息披露'
//                 },{
//                   title: '公司治理'
//                 },{
//                   title: '股票信息'
//                 },{
//                   title: '投资者日志'
//                 },{
//                   title: '投资者关系联络'
//                 },{
//                   title: '常见问题'
//                 }] ,
//                 current_tab: 0
//           }
//    },
//    methods: {
//     check_nav(index,link) {
//         this.current_tab = index;
       
//     }
//    }
// })

Vue.component('ds-navdar', {
  props: ['index'],
  template: '<div class="nav_bar clear"><div class="logo_div"><img class="logo_img" src="img/logo.png"></div><ul class="nav_list"><li @click="check_nav(index,data.link)" class="nav_li" v-for="(data,index) in tab_list" :class="{li_select:current_tab==index}">{{data.title}}</li></ul><a class="back" href="http://www.haidilao.com/"><img class="back_img" src="img/back.png">返回海底捞</a></div> ',
  data: function data() {
    return {
      tab_list: [{
        title: '信息披露',
        link: 'information_disclosure.html'
      }, {
        title: '公司治理',
        link: 'corporate_governance.html'
      }, {
        title: '股票信息',
        link: 'stock.html'
      }, {
        title: '投资者日志',
        link: 'log.html'
      }, {
        title: '投资者关系联络',
        link: 'contact.html'
      }, {
        title: '常见问题',
        link: 'question.html'
      }],
      current_tab: 0
    };
  },
  methods: {
    check_nav: function check_nav(index, link) {
      this.current_tab = index;
      window.location.href = link;
    }
  },
  created: function created() {
    this.current_tab = this.index;
  }
});

Vue.component('ds-footbar', {
  template: '<div class="footer_bar"><p>© 版权所有 四川海底捞餐饮股份有限公司 京ICP备190218174号</p><p>声明:此平台为免费使用,任何人不得假借我司名义收取费用,对于不法行为我司将追究其法律责任</p></div> ',
  data: function data() {
    return {
      tab_list: [{
        title: '信息披露'
      }, {
        title: '公司治理'
      }, {
        title: '股票信息'
      }, {
        title: '投资者日志'
      }, {
        title: '投资者关系联络'
      }, {
        title: '常见问题'
      }],
      current_tab: 0
    };
  },
  methods: {
    check_nav: function check_nav(index, link) {
      this.current_tab = index;
    }
  }
});