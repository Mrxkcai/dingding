var vm = new Vue({
    el:'#app',
    components: {
    },
    props: {
    },
    data: {
      navList:[
          {
            url:'/src/asset/images/icon/wait_pay.png',
            navTitle:'待支付' 
          },
          {
            url:'/src/asset/images/icon/wait_deliver.png',
            navTitle:'待发货' 
          },
          {
            url:'/src/asset/images/icon/wait_receive.png',
            navTitle:'待收货' 
          },
          {
            url:'/src/asset/images/icon/review_success.png',
            navTitle:'租凭中' 
          },
          {
            url:'/src/asset/images/icon/review_success.png',
            navTitle:'租凭中' 
          },
          {
            url:'/src/asset/images/icon/review_success.png',
            navTitle:'租凭中' 
          },
          {
            url:'/src/asset/images/icon/review_success.png',
            navTitle:'租凭中' 
          },
          {
            url:'/src/asset/images/icon/review_success.png',
            navTitle:'租凭中' 
          },

      ],
      mainList:[
          {
              urll:'/src/asset/images/icon/wenhao (2).png',
              mainTitle:'我的账单'
          },
          {
            urll:'/src/asset/images/icon/review_success.png',
            mainTitle:'我的授权'
        },
        {
            urll:'/src/asset/images/icon/wenhao (2).png',
            mainTitle:'关于我们'
        },
      ]  
    },
    computed: {
    },
    watch: {
    },
    filters: {
    },
    methods: {
    //   myFunction() {
    //     document.getElementById("demo").innerHTML = x += 1;
    //  }
    },
    created() {
    },
    destroyed() {
    },
    mounted() {
        var body = document.body.clientWidth;		
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
    },
})