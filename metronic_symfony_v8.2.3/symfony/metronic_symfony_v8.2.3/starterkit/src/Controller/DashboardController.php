<?php

namespace App\Controller;

use App\Controller\Bootstrap\DefaultLayoutController;
use Symfony\Component\HttpFoundation\Response;

class DashboardController extends DefaultLayoutController
{
    public function index(): Response
    {
        # Include vendors and javascript files for dashboard widgets
        $this->theme->addVendors(['amcharts', 'amcharts-maps', 'amcharts-stock']);

        return $this->render('pages/dashboards/index.html.twig');
    }
}