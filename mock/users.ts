export default {

    // 返回值可以是数组形式
    'GET /api/users': [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' }
    ],

    // 返回值也可以是对象形式
    'GET /api/users/1': { id: 1, name: 'foo' },

}
