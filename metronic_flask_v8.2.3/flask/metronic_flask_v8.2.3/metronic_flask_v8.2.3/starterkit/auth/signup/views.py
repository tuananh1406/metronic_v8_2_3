from flask import render_template
from flask.views import View
import _keenthemes.templatetags.theme
from _keenthemes.settings import settings
from _keenthemes.__init__ import KTLayout
from _keenthemes.libs.theme import KTTheme
from pprint import pprint

"""
This file is a view controller for multiple pages as a module.
Here you can override the page view layout.
Refer to urls.py file for more pages.
"""

class AuthSignupView(View):
    template_name = 'pages/auth/signup.html'


    # Predefined function
    def dispatch_request(self):
        # A function to init the global layout. It is defined in _keenthemes/__init__.py file
        context = KTLayout.init({})

        # Include vendors and javascript files for dashboard widgets
        KTTheme.addJavascriptFile('js/custom/authentication/sign-up/general.js')

        # Define the layout for this module
        # _templates/layout/auth.html
        context.update({
            'layout': KTTheme.setLayout('auth.html', context),
        })

        return render_template(self.template_name, title='Signup', layout=context['layout'])
