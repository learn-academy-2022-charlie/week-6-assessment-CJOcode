# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# -> this here is showing us that we are in the applications controller, more specifically inside of the Model BlogPosts controller where we will add our methods for our RESTful routes
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # Here we are explaining that when use posts at the end of our url with the GET verb it will display all the blog posts in our database.
    @posts = BlogPost.all
  end

  # ---3)
  # This is creating our method for our SHOW REStful route which will show us a specific piece of data in our data base using params at the end of our url.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This is creating our method for our NEW REStful route which will show us th html form required to create a new blog.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # This is stating that when using our POST verb and our CREATE route the person must enter the blog params which are the titel of the post and the content that they would like to associate with it.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # This is stating that when using our GET verb and our EDIT route the person must specifcally add the id for the blog post at the end of the url in which they would like to edit.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # This tells the computer to execute the html form that you chose to edit and post the updated title and content to the UI.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # This states that if the specifc post to delete is not specified then redirect the user to the page they where just on.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # Everything underneath the key word private is considered strong params which sets the standard for which params are permitted for the user to edit. 
  private
  def blog_post_params
    # ---10)
    # this is claiming that the user is only permitted to enter a title and content for there blog post and nothing else.
    params.require(:blog_post).permit(:title, :content)
  end
end
