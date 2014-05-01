class SignupMailer < ActionMailer::Base
  default(
    to: ["scott@helloblock.io", "sidney@helloblock.io"],
    from: "signup@helloblock.io"
  )

  def notify(email)
     @email = email
     mail(subject: 'Sign Up')
   end
end
