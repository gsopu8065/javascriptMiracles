
const ProductsPane = () => {

    const dispatch = ReactRedux.useDispatch();
    const products = ReactRedux.useSelector(state => state.productList);

    // EVENT HANDLERS
    // They are responsible for calling `dispatch` which will send events to redux
    const addProduct = () => {
        var action = {
            type: 'ADD_PRODUCT'
        };
        dispatch(action);
    }

    const removeProduct = (productId) => {
        var action = {
            type: 'REMOVE_PRODUCT',
            productId: productId
        };
        dispatch(action);
    }

    const editProduct = (productId, event) => {
        var newName = event.target.value;
        var action = {
            type: 'EDIT_PRODUCT',
            data: {
                productId: productId,
                productName: newName
            }
        };
        dispatch(action);
    }

    // Example product: { productId : 4 , productName :'Profit' }
    var trList = products.map((product, index) => {
        return (<tr key={product.productId}>
            <td>{product.productId}</td>
            <td><input type="text" onChange={editProduct.bind(null, product.productId)}
                       value={product.productName}/></td>
            <td>
                <button onClick={removeProduct.bind(null, product.productId)}>
                    Remove
                </button>
            </td>
        </tr>);
    });


    return (<div>
        <table border="1">
            <thead>
            <th>ID</th>
            <th>Product Name</th>
            <th>Remove</th>
            </thead>
            <tbody>
            {trList}
            </tbody>
        </table>
        <br/>
        <button onClick={addProduct}>
            Create
        </button>
    </div>);
}

var nextProductId = 10;
// Example product: { productId : 4 , productName :'Profit' }
const getIndexByProductId = (products, productId) => {
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (product.productId === productId) {
            return i;
        }
    }
    return -1;
};

const initialState = {
    productList: [
        {productId: 1, productName: 'React'},
        {productId: 2, productName: 'Redux'},
        {productId: 3, productName: 'Profit'}
    ]
}


const appReducer = (state = initialState, action) => {

    // Clone Array.
    let products = state.productList.slice();
    console.log('Actions', action); // Open your console to see what actions look like

    // Even better, install Redux DevTools and your mind will be blown
    switch (action.type) {
        case 'ADD_PRODUCT':
            nextProductId++;
            var product = {productId: nextProductId, productName: ""};
            products.push(product);
            break;
        case 'REMOVE_PRODUCT':
            var idx = getIndexByProductId(products, action.productId);
            if (idx != -1) {
                products.splice(idx, 1); // Removes element at `idx`
            }
            break;
        case 'EDIT_PRODUCT':
            var idx = getIndexByProductId(products, action.data.productId);
            if (idx != -1) {
                products[idx].productName = action.data.productName;
            }
            break;
    }
    // As above, we have to return a new state object each time (Redux store is immutable)
    // It makes sure we know our data can only be modified in one visible way
    // Also lets us time travel through our application state!
    const newState = {
        productList: products
    }
    console.log('Current State', newState);
    return newState;
}

let store = Redux.createStore(appReducer);

// Render
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <ProductsPane/>
    </ReactRedux.Provider>,
    document.getElementById('app')
);