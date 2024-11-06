const menu = {
    list() {
        return [
    {
        "backMenu":[
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"收货地址",
                        "menuJump":"列表",
                        "tableName":"address"
                    }
                ],
                "menu":"收货地址"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"商品",
                        "menuJump":"列表",
                        "tableName":"caipin"
                    }
                ],
                "menu":"商品"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"商品收藏管理",
                        "menuJump":"列表",
                        "tableName":"caipinCollection"
                    }
                ],
                "menu":"我的商品收藏"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"商品评论信息",
                        "menuJump":"列表",
                        "tableName":"caipinCommentback"
                    }
                ],
                "menu":"我的商品评论信息"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"我的商品订单",
                        "menuJump":"列表",
                        "tableName":"caipinOrder"
                    }
                ],
                "menu":"我的商品订单"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"购物车",
                        "menuJump":"列表",
                        "tableName":"cart"
                    }
                ],
                "menu":"购物车"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户反馈",
                        "menuJump":"列表",
                        "tableName":"chat"
                    }
                ],
                "menu":"用户反馈"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息"
            }
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"是",
        "hasFrontRegister":"是",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]

	}
}
export default menu;