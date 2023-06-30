const { environment } = require('@rails/webpacker')
const webpack = require("webpack") 

//The ProvidePlugin helps us avoid the multiple import or require statements
environment.plugins.append("Provide", new webpack.ProvidePlugin({ 
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))  
module.exports = environment
