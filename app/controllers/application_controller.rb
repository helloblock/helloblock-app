class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  if Rails.env.production?
    protect_from_forgery with: :null_session
    after_filter :set_csrf_cookie_for_ng
  end

  # Entry point for AngularJS app
  def index

    # TODO: hack for dynamic refreshing of tutorial pages
    if Rails.env.development?
      Thread.new do
        `node scripts/Marked.js`
      end
    end
    render layout: false
  end

  def unfound_assets
    puts "Caught unfound assets"
    render nothing: true, status: 404
  end

  def save_email
    # Temp email store
    Email.create({
      email: params[:email],
      ip_address: request.remote_ip
    })
    render nothing: true
  end

  protected

  # CSRF Token for NON-GETs
  # New form_authenticity_token generated
  # Attacker needs this cookie + same value in NON-GET requests
  # Cross-origin policies ban attacker from getting cookie value or html from user's browser
  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end

end
