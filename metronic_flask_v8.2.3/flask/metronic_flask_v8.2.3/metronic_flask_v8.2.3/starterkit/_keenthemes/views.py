from flask import render_template
from flask.views import View
import _keenthemes.templatetags.theme
from _keenthemes.settings import settings
from _keenthemes.__init__ import KTLayout
from _keenthemes.libs.theme import KTTheme
from pprint import pprint

class SystemView(View):
    template_name = 'pages/system/not-found.html'
    status = ''

    def __init__(self, template_name, status):
        self.template_name = template_name
        self.status = status

    # Predefined function
    def dispatch_request(self, *kwargs):
        # A function to init the global layout. It is defined in _keenthemes/__init__.py file
        context = KTLayout.init({})

        # Define the layout for this module
        # _templates/layout/system.html
        context.update({
            'layout': KTTheme.setLayout('system.html', context),
            'status': self.status,
        })

        return render_template(self.template_name, title='Error', layout=context['layout'])
