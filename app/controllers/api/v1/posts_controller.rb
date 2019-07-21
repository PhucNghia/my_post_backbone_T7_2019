class Api::V1::PostsController < ApplicationController
  before_action :load_post, only: %i(show update destroy)
  skip_before_action :verify_authenticity_token

  def index
    @posts = Post.order('created_at DESC')
    render json: {
      status: true,
      data: @posts
    }, 
    status: :ok
  end

  def show
    render json: {
      status: true,
      data: @post
    }, 
    status: :ok
  end

  def create
    @post = Post.new post_params

    if @post.save
      render json: {
        status: true,
        data: @post
      }, 
      status: :created
    else
      render json: {
        status: false,
        error: @post.errors
      }, 
      status: :unprocessable_entity
    end
  end

  def update
    if @post.update_attributes post_params
      render json: {
        status: true,
        data: @post
      }, 
      status: :created
    else
      render json: {
        status: false,
        error: @post.errors
      }, 
      status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    render json: {
      status: true,
      data: @post
    }, 
    status: :ok
  end

  private

  def post_params
    params.permit :title, :body
  end

  def load_post
    @post = Post.find_by id: params[:id]
    return if @post
    render json: {
      status: false,
      message: "Not found"
    }, 
    status: :not_found
  end
end
