require 'rubygems'
require 'haml'
require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    haml :index
  end

  get '/minitranslate' do
    redirect to('http://brycedorn.github.io/minitranslate')
  end
  
  # Start the server if ruby file executed directly
  run! if app_file == $0
end