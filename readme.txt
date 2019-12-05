Backend:
Routes for category and Products:
    GET "/shop/products" - get products of first category in the list
    GET "/shop/product/:id: - get specific product
    GET "/shop/categories" - get all categories
    GET "/shop/categories/all" - get categories in detail including products
    GET "/shop/category/:name" - get products of specific category
    POST "/shop/category" - Post new category
    POST "/product" - Post new product

Routes for Order and Payment Details
    GET "/shop/order/all" - get all order details
    GET "/shop/order/:id" - get specific order details
    POST "/shop/order" - Post new order

Admin Routes
    POST "/shop/admin/login" - login for admin
    POST "/shop/admin" - Post new Admin


Database Details
database name: mobile_point
Collections:
    admins : {
        email:String,
        password:String
    }

    categories:{
        name:String
        products: array[product:{
            name:String,
            price:Number,
            description: String
        }]
    }

    orders:{
        productName:String,
        productId: String,
        quantity: Number,
        totalPrice:Number,
        user: array[user;{
            name:String,
            email:String,
            phoneno: Number,
            address:String,
            pacakageDetails:Sting
        }],
        payment:array[payment:{
            name:String,
            cardno:Number,
            expiry:Number,
            securityCode:Number
        }]
    }


References:
    Background image: Pixabay(https://www.pexels.com/photo/macbook-and-ipad-on-desk-207589/)
    Product images: by katjabakurova under standard license (https://stock.adobe.com/ca/images/coming-soon-text-on-a-display-lightbox-on-blue-and-red-bright-background/205083482?as_channel%5B%5D=affiliate&as_channel%5B%5D=affiliate&as_campaign=pexels&as_source%5B%5D=arvato&as_source%5B%5D=arvato&tduid=1e73aa95320ddfe2fc5b40c212d67fd9&as_campclass=redirect&asset_id=205083482)
    