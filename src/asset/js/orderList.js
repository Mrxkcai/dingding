var vm = new Vue({
    el:'#app',
    components: {
    },
    props: {
    },
    data: {
        tabDefault: [
            {
                id: -1,
                name: '全部'
            },
            {
                id: 9,
                name: '租用中'
            },
            {
                id: 2,
                name: '待发货'
            },
            {
                id: 3,
                name: '待收货'
            },
            {
                id: 0,
                name: '待支付'
            }
        ],
        tabNew: [],
        tab: [
            {
                id: -1,
                name: '全部'
            },
            {
                id: 9,
                name: '租用中'
            },
            {
                id: 2,
                name: '待发货'
            },
            {
                id: 3,
                name: '待收货'
            },
            {
                id: 0,
                name: '待支付'
            }
        ],
        open: false,
        tabId: -1,
        clientWidth: {},
        categryList: [
            [
                {
                    id: 10,
                    name: '租期已满'
                },
                {
                    id: 1,
                    name: '订单取消'
                },
                {
                    id: -2,
                    name: '审核中'
                },
                {
                    id: -3,
                    name: '审核成功'
                }
            ],
            [
                {
                    id: -4,
                    name: '审核拒绝'
                },
            ]
        ],

        orderList: [
            {
                orderId:1,
                cover: 'http://img.taozugong.com/product/2018-04-11/15293fb5jTpA2a',
                createTime: '2018-10-10 10:10:19',
                orderState: '待发货',
                status: 3,
                productName: '123',
                brief:'21324',
                totalAmount: 123,
                num: 2
            },
            {
                orderId:1,
                cover: 'http://img.taozugong.com/product/2018-04-11/15293fb5jTpA2a',
                createTime: '2018-10-10 10:10:1',
                orderState: '待发货',
                status: 1,
                productName: '123',
                brief:'21324',
                totalAmount: 123,
                num: 1
            }
        ],
        page: 1,
        pageSize: 15,
        status: -1,
        loading: false,
        isEnd: false,
        orderStatus: {//租赁状态  0-待支付 1-订单取消 9租赁中 10-租期已满 2待发货 3待收货 4交易结束
            cancel: '1',
            unpay: '0',
            lease: '9',
            complete: '10',
            send: '2',
            receive: '3',
            end: '4'
        }
    },
    computed: {
    },
    watch: {
    },
    filters: {
    },
    methods: {
         //加载更多
        loadMore() {
            if (this.isEnd == true) {
                return;
            }
            this.loading = true
            this.getOrderList();
        },
        getOrderList() {
            var data=[];
            this.orderList = this.orderList.concat(data);
            if (data.length === 0) {
                this.isEnd = true;
                this.loading = false
                return;
            }
            this.page += 1;
            this.loading = false;
        },
        showCategory() {
            this.open = !this.open;
            if (this.open) {
                this.tabNew = this.tab
                this.tab = this.tabDefault
            } else {
                this.tab = this.tabNew
            }
        },
        //选中商品分类
        chooseCategory(id, index) {
            if (index == -1) {
                if (id == 9 || id == 1 || id == 10) {
                    index = 1
                } else {
                    index = 0
                }
            }

            if (index) {
                this.tabNew = this.categryList[index-1]
                this.tab = this.tabNew
            }

            // if (index) {
            //     this.open = false
            //     this.tabNew = this.categryList
            //     this.tab = this.tabNew
            // } else if (!index && this.open) {
            //     this.open = false
            // }

            this.tabId = id
            this.open = false
            this.orderList = []
            this.page = 1
            this.loading = false;
            this.isEnd = false
            // this.ordersDisplay = false
            this.getOrderList()
        },
        toLogistics() {
            location.href = 'logistics.html'
        }
        // setTitle() {
        //     console.info('setTitle')
        //     dd.biz.navigation.setTitle({
        //         title : '邮箱正文',//控制标题文本，空字符串表示显示默认文本
        //         onSuccess : function(result) {
        //             /*结构
        //             {
        //             }*/
        //         },
        //         onFail : function(err) {}
        //     });
        // }
    },
    created() {
    },
    destroyed() {
    },
    mounted() {
        var body = document.body.clientWidth;		
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
        // this.setTitle()
    }
})