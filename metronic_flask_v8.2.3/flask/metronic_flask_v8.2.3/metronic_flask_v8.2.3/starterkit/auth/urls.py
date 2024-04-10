from starterkit import app
from .signin.views import AuthSigninView
from .signup.views import AuthSignupView
from .reset_password.views import AuthResetPasswordView
from .new_password.views import AuthNewPasswordView

app.add_url_rule('/signin', view_func=AuthSigninView.as_view('signin'))
app.add_url_rule('/signup', view_func=AuthSignupView.as_view('signup'))
app.add_url_rule('/reset-password', view_func=AuthResetPasswordView.as_view('reset-password'))
app.add_url_rule('/new-password', view_func=AuthNewPasswordView.as_view('new-password'))

