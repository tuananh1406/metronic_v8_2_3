from starterkit import app
from _keenthemes.settings import settings
from .views import DashboardsView

app.add_url_rule('/', view_func=DashboardsView.as_view('dashboard', template_name = 'pages/dashboards/index.html'))

app.add_url_rule('/error', view_func=DashboardsView.as_view('Error Page', template_name = 'non-exist-file.html'))

