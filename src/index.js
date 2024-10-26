const { envs } = require('./config/env')

const main = () => {
    console.log(envs)
}

( async() => {
    main()
})()

