class SignupMailer < ActionMailer::Base
  default from: "signup@helloblock.io"

  def notify(email)
     @email = email
     mail(to: "scott@helloblock.io", subject: 'Sign Up')
   end
end
