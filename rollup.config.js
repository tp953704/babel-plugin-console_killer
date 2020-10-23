export default{
    input :'./src/index.js',
    output:[
        {
            file: 'dist/index-es.js',
            format: 'es',
            name: 'E$' // 指定檔名稱            
        }, {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'E$'// 指定檔名稱
        },
        {
            file: 'dist/index-cjs.js',
            format: 'cjs',
            name: 'E$'// 指定檔名稱
        }
    ],
    plugins:[
        
    ]
}