/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    //  REACT_APP_BASE_URL=https://szkoleniastrapi.online/api
    env: {
        BASE_URL: 'http://localhost:1337/api',
        API_TOKEN: '5b11c694d1cf547bf4fc092d9bce84d7978e8120a8cfabb8c23bcb48696d1ceeb3e37f802c18263041b31a3a441bb6014faf393bd8b7dda7c0c99bb7cb5c17595565fd45516edfb9d8cfa52f81ba85e65e9ed659b75d2e7f4a49c1e656122076218ce169c96bb8d1cc53794cc31df7e26c30008e133cabf6909e54caad06b290',
        STRIPE_PUBLIC_KEY_TEST:'pk_test_51N6g4qAxQ1CFxjjOkikYlfumtOZyWVyImkVvsRO9HBEX2ux2j4NltR7qXB26oET7kMS0I02qdU0vzTOMsV56ZxXS00TZQApF0E',
        STRIPE_PUBLIC_KEY_LIVE: 'pk_live_51N6g4qAxQ1CFxjjOOgafh88W8eD6Lz8eJGww6uRBkHs83xGVFgQOWVo5KsmjC5MqNNmjXU35BaWR6Uzac3UAVVs9005aCLDswn'
    },

}

module.exports = nextConfig
