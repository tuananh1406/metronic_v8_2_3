<?php

namespace App\Controller\Bootstrap;

use App\Service\ThemeHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SystemLayoutController extends AbstractController
{
    public ThemeHelper $theme;

    public function __construct(ThemeHelper $theme)
    {
        $this->theme = $theme;

        $this->init();
    }

    public function init()
    {
        $this->theme->addHtmlClass('body', 'app-blank');
        $this->theme->addHtmlClass("body", "bgi-size-cover bgi-position-center bgi-no-repeat");
    }
}