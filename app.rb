require 'rubygems'
require 'haml'
require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    haml :index
  end

  get '/minitranslate' do
    redirect to('http://minitranslate.herokuapp.com')
  end

  # Start the server if ruby file executed directly
  run! if app_file == $0
end
