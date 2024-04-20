

3.3.2 数据库表设计
在设计数据库表时，应遵循“单职责原则”，确保每个表代表一个单一的实体或概念。明确表中每个字段的含义及用途，选择合适的数据类型，并定义数据类型及其大小。同时，应考虑字段的数据约束，如非空、唯一性等。在多表关联时，要明确主外键关系，并根据实际业务需求处理一对多、多对多关系，适当使用中间表。为了提升数据库的查询性能，可以根据业务场景和查询模式来考虑将近期数据和历史数据分离。在特定情况下，为了提高读取性能，可以考虑冗余字段，但需要注意这可能会引入数据一致性问题，因此应谨慎使用。
表 1 管理员信息表
名称	类型	字段描述	是否主键	长度
admin_id	bigint	管理员编号	是	20
create_time	datetime 	创建时间	否	0
nickname	varchar 	昵称	否	32
password	 varchar	密码	否	32
phone	varchar	联系方式	否	64
username	Varchar	管理员名	否	32
管理员信息表存放着管理员的个人信息，可以在网页后台修改个人信息，管理员编号由系统自动生成，不可修改。管理员名、密码、联系方式不应为空。
表 2 分类信息表
名称	类型	字段描述	是否主键	长度
type_id	bigint	类目编号	是	20
name	varchar 	名称	否	64
create_time	datetime 	创建时间	否	0
remark	varchar 	备注	否	64
title	 varchar	标题	否	64
分类信息表包含了商品的类型，类目编号由系统自动生成，不可修改。 
表 3 商品信息表
名称	类型	字段描述	是否主键	长度
goods_id	bigint	商品编号	否	20
content	varchar 	商品内容	否	5000
create_time	datetime 	创建时间	否	0
name	varchar 	商品名称	否	64
path	varchar 	商品封面	否	200
price	double	商品价格	否	32
remark	varchar	商品备注	否	64
type_id	varchar	商品类型编号	否	4
商品信息表中存储商品的详细信息与商品描述。在商品信息表中，存放商品图片的路径而不是直接存放商品图片，其原因有两点。其一是直接存放图片会严重影响数据库提取图片的速度，导致等待时间过长，影响用户体验；其二是会使数据库的空间开销逐渐增大，影响系统性能。商品类型编号标识商品类型，用于分类功能的实现。该表需要管理员登录后台管理系统后才能获得添加、删除和修改的权限。
表 4 订单信息表
名称	类型	字段描述	是否主键	长度
Order_id	bigint	订单编号	是	20
address	 varchar  	收货地址	否	64
create_time	datetime 	生成时间	否	0
concat	 varchar  	联系方式	否	64
status	varchar 	订单状态	否	64
total	double	总金额	否	32,2
username	varchar	收货人	否	64
buynumber	int	购买数量	否	100
user_id	bigint	用户编号	否	19
订单信息表存放用户的订单信息。收货状态只能使0或1。0表示用户仍未收到外卖，订单没有完成。1表示用户已经收到外卖，订单完成。订单生成时间设置为datetime数据类型，其目的使为了提高时间的精确度，因为datetime数据类型最高可精确到毫秒。订单信息具有特殊性，无论用户自身还是超市管理员，都不能对订单信息进行修改，只能查看或删除，故订单信息表也不可修改，而且管理员必须在用户删除订单后才能对订单信息进行删除操作。
表 5 用户信息表
名称	类型	字段描述	是否主键	长度
user_id	bigint	用户编号	是	20
avatar	varchar 	头像	否	128
create_time	datetime 	创建时间	否	0
nickname	varchar	昵称	否	32
password	 varchar	密码	否	32
续表 5 用户信息表
名称	类型	字段描述	是否主键	长度
phone	varchar	联系方式	否	64
email	varchar	邮箱	否	64
gender	varchar	性别	否	20
money	varchar	余额	否	200
username	varchar	用户名	否	32
用户信息表存放着用户的个人信息。用户在进入小程序后可以通过该表修改除用户编号之外个人信息。用户编号由系统自动生成，不可修改。用户名、收货地址和联系电话不应为空。
